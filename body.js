(function () {
  const BL = window.BioLume;
  if (!BL) return;

  const MALE_PATH =
    "M 180 26 C 196 26 206 38 206 56 C 206 72 198 83 192 88 L 193 108 C 212 114 242 120 254 136 C 266 154 274 226 286 336 C 288 352 276 358 269 346 C 258 282 248 228 238 186 L 231 244 C 228 272 224 294 226 326 C 228 362 226 426 220 492 L 218 598 C 218 614 230 622 224 628 C 212 630 198 624 198 606 L 194 494 L 186 386 C 184 374 176 374 174 386 L 166 494 L 162 606 C 162 624 148 630 136 628 C 130 622 142 614 142 598 L 140 492 C 134 426 132 362 134 326 C 136 294 132 272 129 244 L 122 186 C 112 228 102 282 91 346 C 84 358 72 352 74 336 C 86 226 94 154 106 136 C 118 120 148 114 167 108 L 168 88 C 162 83 154 72 154 56 C 154 38 164 26 180 26 Z";

  const FEMALE_PATH =
    "M 180 28 C 194 28 204 40 204 56 C 204 71 196 82 190 88 L 190 110 C 208 116 232 122 242 138 C 254 158 266 230 278 334 C 280 349 270 355 263 343 C 252 282 242 230 230 186 L 222 238 C 216 266 212 284 222 312 C 234 342 234 384 224 440 L 216 596 C 216 612 226 620 220 626 C 209 628 197 622 197 604 L 193 494 L 185 388 C 183 378 177 378 175 388 L 167 494 L 163 604 C 163 622 151 628 140 626 C 134 620 144 612 144 596 L 136 440 C 126 384 126 342 138 312 C 148 284 144 266 138 238 L 130 186 C 118 230 108 282 97 343 C 90 355 80 349 82 334 C 94 230 106 158 118 138 C 128 122 152 116 170 110 L 170 88 C 164 82 156 71 156 56 C 156 40 166 28 180 28 Z";

  const MALE_PELVIS =
    "M 144 328 Q 180 356 216 328 Q 210 362 180 366 Q 150 362 144 328 Z";
  const FEMALE_PELVIS =
    "M 136 328 Q 180 360 224 328 Q 218 368 180 370 Q 142 368 136 328 Z";

  const ARTERIAL_PATHS = [
    [[186, 194], [184, 152], [180, 114], [175, 76], [180, 44]],
    [[184, 178], [152, 138], [122, 146], [104, 214], [92, 286], [82, 346]],
    [[188, 178], [214, 138], [240, 148], [256, 214], [268, 286], [278, 346]],
    [[186, 206], [182, 266], [176, 336], [156, 404], [150, 486], [146, 594]],
    [[186, 206], [184, 266], [186, 336], [204, 404], [210, 486], [214, 594]],
    [[184, 196], [158, 184], [148, 206], [164, 214], [188, 200]],
  ];

  const VENOUS_PATHS = [
    [[184, 48], [188, 82], [186, 122], [178, 162], [180, 194]],
    [[88, 348], [98, 288], [110, 216], [128, 154], [158, 148], [178, 188]],
    [[272, 348], [262, 288], [250, 216], [232, 154], [206, 150], [182, 188]],
    [[152, 594], [156, 486], [164, 404], [174, 336], [175, 262], [178, 202]],
    [[208, 594], [204, 486], [196, 404], [184, 336], [177, 262], [178, 202]],
  ];

  const NERVE_PATHS = [
    [[180, 50], [180, 110], [180, 210], [180, 326]],
    [[180, 126], [130, 146], [104, 224], [84, 342]],
    [[180, 126], [230, 146], [256, 224], [276, 342]],
    [[180, 326], [158, 408], [150, 500], [146, 592]],
    [[180, 326], [202, 408], [210, 500], [214, 592]],
  ];

  function samplePolyline(points, t) {
    const clamped = Math.max(0, Math.min(0.9999, t));
    const segCount = points.length - 1;
    const scaled = clamped * segCount;
    const idx = Math.floor(scaled);
    const localT = scaled - idx;
    const p0 = points[idx];
    const p1 = points[idx + 1];
    return [
      p0[0] + (p1[0] - p0[0]) * localT,
      p0[1] + (p1[1] - p0[1]) * localT,
    ];
  }

  function drawSmoothPolyline(ctx, points) {
    if (points.length < 2) return;
    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);
    for (let i = 1; i < points.length - 1; i++) {
      const xc = (points[i][0] + points[i + 1][0]) / 2;
      const yc = (points[i][1] + points[i + 1][1]) / 2;
      ctx.quadraticCurveTo(points[i][0], points[i][1], xc, yc);
    }
    const last = points[points.length - 1];
    ctx.lineTo(last[0], last[1]);
  }

  function renderDock() {
    const listEl = document.getElementById("dock-list");
    if (!listEl) return;
    const st = BL.getState();
    const d = BL.dict();

    listEl.innerHTML = "";
    BL.ORGAN_IDS.forEach((id) => {
      const sys = d.systems[id];
      const isActive = st.system === id;
      const pageUrl = BL.ORGAN_PAGES[id];

      const row = document.createElement("div");

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `dock-item${isActive ? " active" : ""}`;
      btn.innerHTML = `
        <span class="dock-item-icon">${BL.ORGAN_ICONS[id] || "🧬"}</span>
        <span class="dock-item-body">
          <span class="dock-item-top">
            <span class="dock-item-name">${BL.term(sys)}</span>
            ${
              pageUrl
                ? `<span class="live-tag">${d.dock.liveTag}</span>`
                : `<span class="dock-badge-soon">${d.dock.soonTag}</span>`
            }
          </span>
          <span class="dock-item-desc">${sys.shortDesc}</span>
        </span>
      `;
      btn.addEventListener("click", () => {
        BL.setSystem(id);
      });
      row.appendChild(btn);

      if (isActive && pageUrl) {
        const link = document.createElement("a");
        link.href = pageUrl;
        link.className = "dock-launch-link";
        link.innerHTML = `<span>${d.dock.openPage}</span><span aria-hidden="true">↗</span>`;
        row.appendChild(link);
      }

      listEl.appendChild(row);
    });
  }

  function syncBodyUI() {
    const st = BL.getState();
    const d = BL.dict();

    // Male / Female toggle buttons & silhouette
    const btnMale = document.getElementById("btn-male");
    const btnFemale = document.getElementById("btn-female");
    if (btnMale) {
      btnMale.className = `sex-btn${st.sex === "male" ? " active-male" : ""}`;
      btnMale.setAttribute("aria-pressed", String(st.sex === "male"));
    }
    if (btnFemale) {
      btnFemale.className = `sex-btn${st.sex === "female" ? " active-female" : ""}`;
      btnFemale.setAttribute("aria-pressed", String(st.sex === "female"));
    }

    const outline = document.getElementById("body-outline");
    const stop1 = document.getElementById("skin-stop-1");
    const stop2 = document.getElementById("skin-stop-2");
    const pelvis = document.getElementById("pelvis-path");
    const isFemale = st.sex === "female";

    if (outline) {
      outline.setAttribute("d", isFemale ? FEMALE_PATH : MALE_PATH);
      outline.setAttribute("stroke", isFemale ? "#d47ca8" : "#68b8e6");
      outline.setAttribute("stroke-opacity", String(Math.max(0.45, 0.95 - (st.xray / 100) * 0.55)));
      outline.setAttribute("fill-opacity", String(Math.max(0.22, 0.95 - (st.xray / 100) * 0.68)));
    }
    if (stop1) stop1.setAttribute("stop-color", isFemale ? "#d47ca8" : "#68b8e6");
    if (stop2) stop2.setAttribute("stop-color", isFemale ? "#a84e7c" : "#2b7eb3");
    if (pelvis) pelvis.setAttribute("d", isFemale ? FEMALE_PELVIS : MALE_PELVIS);

    // X-Ray layers
    const muscleLayer = document.getElementById("layer-muscular");
    const skeletonLayer = document.getElementById("layer-skeletal");
    const organsLayer = document.getElementById("layer-organs");
    if (muscleLayer) {
      muscleLayer.setAttribute(
        "opacity",
        st.system === "muscular"
          ? "0.82"
          : st.xray > 15
          ? String(Math.min(0.42, ((st.xray - 15) / 50) * 0.42))
          : "0"
      );
    }
    if (skeletonLayer) {
      skeletonLayer.setAttribute(
        "opacity",
        st.system === "skeletal"
          ? "0.92"
          : st.xray > 35
          ? String(Math.min(0.45, ((st.xray - 35) / 65) * 0.45))
          : "0.08"
      );
    }
    if (organsLayer) {
      organsLayer.setAttribute("opacity", String(Math.max(0.24, st.xray / 100)));
    }

    const layerIdx = Math.min(3, Math.floor((st.xray / 101) * 4));
    const xrayBadge = document.getElementById("xray-badge");
    if (xrayBadge) xrayBadge.textContent = `${d.stage.layers[layerIdx]} • ${st.xray}%`;

    const xrayLabels = document.getElementById("xray-labels");
    if (xrayLabels) {
      xrayLabels.innerHTML = "";
      d.stage.layers.forEach((lbl, idx) => {
        const b = document.createElement("button");
        b.type = "button";
        b.className = `xray-step-btn${idx === layerIdx ? " active" : ""}`;
        b.textContent = lbl;
        b.addEventListener("click", () => BL.setXray(Math.round((idx / 3) * 100)));
        xrayLabels.appendChild(b);
      });
    }

    // Active System Card
    const sysData = d.systems[st.system] || d.systems.circulatory;
    const titleEl = document.getElementById("active-sys-title");
    const descEl = document.getElementById("active-sys-desc");
    const liveTag = document.getElementById("active-live-tag");
    const circBox = document.getElementById("circulatory-actions");
    const soonBox = document.getElementById("coming-soon-box");
    const hintEl = document.getElementById("stage-hint");
    const bpmReadout = document.getElementById("stage-bpm-readout");

    if (titleEl) titleEl.textContent = BL.term(sysData);
    if (descEl) {
      descEl.textContent =
        st.system === "reproductive"
          ? `${sysData.shortDesc} • ${isFemale ? d.stage.female : d.stage.male}`
          : sysData.shortDesc;
    }
    if (bpmReadout) bpmReadout.textContent = `${st.bpm} BPM`;

    const hasPage = Boolean(BL.ORGAN_PAGES[st.system]);
    if (liveTag) {
      liveTag.textContent = hasPage ? d.dock.liveTag : d.dock.soonTag;
      liveTag.className = hasPage ? "live-tag" : "dock-badge-soon";
    }
    if (circBox) {
      circBox.classList.toggle("hidden", !hasPage);
      const legend = circBox.querySelector(".legend-grid");
      if (legend) legend.classList.toggle("hidden", st.system !== "circulatory");
      const cta = circBox.querySelector(".primary-cta");
      if (cta && hasPage) {
        cta.setAttribute("href", BL.ORGAN_PAGES[st.system]);
        const span = cta.querySelector("span");
        if (span) {
          span.textContent =
            st.system === "respiratory"
              ? d.stage.openRespiratory
              : d.stage.openDeepDive;
        }
      }
    }
    if (soonBox) soonBox.classList.toggle("hidden", hasPage);
    if (hintEl) {
      hintEl.textContent = hasPage
        ? d.stage.diveHint
        : `${BL.term(sysData)} • ${d.dock.soonTag}`;
    }

    renderDock();
  }

  function startBodyCanvas() {
    const canvas = document.getElementById("body-canvas");
    const container = document.getElementById("body-stage-box");
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 360;
    let height = 640;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const r = container.getBoundingClientRect();
      width = Math.max(200, r.width);
      height = Math.max(355, r.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    const artParticles = [];
    ARTERIAL_PATHS.forEach((p, idx) => {
      const n = idx === 5 ? 8 : 13;
      for (let i = 0; i < n; i++) {
        artParticles.push({ pathIdx: idx, t: i / n, speed: 0.22 + (i % 4) * 0.025, r: idx === 5 ? 2.1 : 2.5 });
      }
    });

    const venParticles = [];
    VENOUS_PATHS.forEach((p, idx) => {
      for (let i = 0; i < 11; i++) {
        venParticles.push({ pathIdx: idx, t: i / 11, speed: 0.17 + (i % 3) * 0.02, r: 2.2 });
      }
    });

    const nerveParticles = [];
    NERVE_PATHS.forEach((p, idx) => {
      for (let i = 0; i < 6; i++) {
        nerveParticles.push({ pathIdx: idx, t: i / 6, speed: 0.55 + (i % 3) * 0.08 });
      }
    });

    const fpsEl = document.getElementById("fps-readout");
    let lastTime = performance.now();
    let elapsed = 0;
    let frames = 0;
    let fpsTimer = lastTime;

    function frame(now) {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      elapsed += dt;

      frames += 1;
      if (now - fpsTimer >= 750) {
        const fps = Math.min(120, Math.max(30, Math.round((frames * 1000) / (now - fpsTimer))));
        if (fpsEl) fpsEl.textContent = `${fps} FPS • ${BL.dict().stage.fpsBadge}`;
        frames = 0;
        fpsTimer = now;
      }

      const st = BL.getState();
      const isLight = st.theme === "light";
      const artColor = isLight ? "#c24b65" : "#e0637d";
      const venColor = isLight ? "#2c88a8" : "#52bed6";
      const elecColor = isLight ? "#b58428" : "#dfb052";
      const endoColor = isLight ? "#7c3aed" : "#a78bfa";
      const reproColor = isLight ? "#b55a88" : "#d47ca8";

      const beatPhase = (elapsed * (st.bpm / 60)) % 1;
      const systole = beatPhase < 0.25 ? Math.sin((beatPhase / 0.25) * Math.PI) : 0;
      const vis = Math.max(0.28, st.xray / 100);
      const isCirc = st.system === "circulatory";

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform((width / 360) * dpr, 0, 0, (height / 640) * dpr, 0, 0);

      ctx.save();
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      // Venous & Arterial Vessels
      ctx.strokeStyle = venColor;
      ctx.globalAlpha = (isCirc ? 0.55 : 0.1) * vis;
      ctx.lineWidth = isCirc ? 2.4 : 1.4;
      VENOUS_PATHS.forEach((pts) => {
        drawSmoothPolyline(ctx, pts);
        ctx.stroke();
      });

      ctx.strokeStyle = artColor;
      ctx.globalAlpha = (isCirc ? 0.68 + systole * 0.24 : 0.12) * vis;
      ctx.lineWidth = isCirc ? 2.8 + systole * 0.6 : 1.5;
      ARTERIAL_PATHS.forEach((pts) => {
        drawSmoothPolyline(ctx, pts);
        ctx.stroke();
      });

      // Flowing Blood Cells
      if (isCirc || st.xray > 55) {
        ctx.fillStyle = venColor;
        ctx.globalAlpha = isCirc ? 0.92 : 0.22;
        venParticles.forEach((p) => {
          p.t = (p.t + p.speed * dt * (st.bpm / 72)) % 1;
          const [x, y] = samplePolyline(VENOUS_PATHS[p.pathIdx], p.t);
          ctx.beginPath();
          ctx.arc(x, y, isCirc ? p.r : 1.5, 0, Math.PI * 2);
          ctx.fill();
        });

        ctx.fillStyle = artColor;
        ctx.shadowColor = artColor;
        ctx.shadowBlur = isCirc && !isLight ? 8 : 0;
        ctx.globalAlpha = isCirc ? 0.98 : 0.26;
        artParticles.forEach((p) => {
          p.t = (p.t + p.speed * dt * (st.bpm / 72) * (1 + systole * 0.7)) % 1;
          const [x, y] = samplePolyline(ARTERIAL_PATHS[p.pathIdx], p.t);
          ctx.beginPath();
          ctx.arc(x, y, isCirc ? p.r + systole * 0.5 : 1.6, 0, Math.PI * 2);
          ctx.fill();
        });
        ctx.shadowBlur = 0;
      }

      // Heart Bioluminescent Pulse
      const pulseR = (isCirc ? 23 : 13) + systole * 11;
      const g = ctx.createRadialGradient(188, 196, 2, 188, 196, pulseR);
      g.addColorStop(0, isLight ? "rgba(194,75,101,0.58)" : "rgba(224,99,125,0.78)");
      g.addColorStop(1, "rgba(224,99,125,0)");
      ctx.globalAlpha = isCirc ? 1 : 0.28;
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(188, 196, pulseR, 0, Math.PI * 2);
      ctx.fill();

      // Organ-specific live animations when selected
      if (st.system === "respiratory") {
        const breath = (Math.sin(elapsed * 1.45) + 1) / 2;
        ctx.globalAlpha = 0.85;
        [156, 204].forEach((lx) => {
          const lg = ctx.createRadialGradient(lx, 192, 3, lx, 192, 24 + breath * 8);
          lg.addColorStop(0, "rgba(104,184,230,0.58)");
          lg.addColorStop(1, "rgba(104,184,230,0)");
          ctx.fillStyle = lg;
          ctx.beginPath();
          ctx.ellipse(lx, 192, 18 + breath * 5, 28 + breath * 8, 0, 0, Math.PI * 2);
          ctx.fill();
        });
      } else if (st.system === "nervous") {
        ctx.strokeStyle = elecColor;
        ctx.lineWidth = 1.8;
        ctx.globalAlpha = 0.45;
        NERVE_PATHS.forEach((pts) => {
          drawSmoothPolyline(ctx, pts);
          ctx.stroke();
        });
        ctx.fillStyle = elecColor;
        ctx.globalAlpha = 0.95;
        nerveParticles.forEach((p) => {
          p.t = (p.t + p.speed * dt) % 1;
          const [x, y] = samplePolyline(NERVE_PATHS[p.pathIdx], p.t);
          ctx.beginPath();
          ctx.arc(x, y, 2.5, 0, Math.PI * 2);
          ctx.fill();
        });
      } else if (st.system === "digestive") {
        const wave = (Math.sin(elapsed * 2.5) + 1) / 2;
        const dg = ctx.createRadialGradient(186, 250, 4, 186, 250, 32 + wave * 6);
        dg.addColorStop(0, "rgba(251,146,60,0.62)");
        dg.addColorStop(1, "rgba(251,146,60,0)");
        ctx.fillStyle = dg;
        ctx.globalAlpha = 0.85;
        ctx.beginPath();
        ctx.arc(186, 250, 36, 0, Math.PI * 2);
        ctx.fill();
      } else if (st.system === "urinary") {
        const pulse = (Math.sin(elapsed * 3) + 1) / 2;
        [158, 202].forEach((kx) => {
          const kg = ctx.createRadialGradient(kx, 264, 2, kx, 264, 15 + pulse * 5);
          kg.addColorStop(0, "rgba(82,190,214,0.72)");
          kg.addColorStop(1, "rgba(82,190,214,0)");
          ctx.fillStyle = kg;
          ctx.globalAlpha = 0.85;
          ctx.beginPath();
          ctx.arc(kx, 264, 20, 0, Math.PI * 2);
          ctx.fill();
        });
      } else if (st.system === "endocrine") {
        // Pituitary, Thyroid, Pancreas, Adrenals & Gonads with hormone-signaling ripples
        const glands = [
          [180, 52, 5.5],   // Pituitary
          [180, 108, 6.5],  // Thyroid
          [184, 244, 6.0],  // Pancreas
          [158, 250, 5.0],  // Left Adrenal
          [202, 250, 5.0],  // Right Adrenal
          ...(st.sex === "female"
            ? [[162, 334, 4.8], [198, 334, 4.8]]
            : [[174, 372, 4.8], [186, 372, 4.8]]),
        ];
        glands.forEach(([gx, gy, baseR], idx) => {
          const ripplePhase = (elapsed * 0.75 + idx * 0.16) % 1;
          const ringR = baseR + ripplePhase * 15;

          ctx.strokeStyle = endoColor;
          ctx.lineWidth = 1.6;
          ctx.globalAlpha = (1 - ripplePhase) * 0.85;
          ctx.beginPath();
          ctx.arc(gx, gy, ringR, 0, Math.PI * 2);
          ctx.stroke();

          const eg = ctx.createRadialGradient(gx, gy, 1, gx, gy, baseR + 7);
          eg.addColorStop(0, isLight ? "rgba(124,58,237,0.75)" : "rgba(167,139,250,0.85)");
          eg.addColorStop(1, "rgba(167,139,250,0)");
          ctx.globalAlpha = 0.92;
          ctx.fillStyle = eg;
          ctx.beginPath();
          ctx.arc(gx, gy, baseR + 7, 0, Math.PI * 2);
          ctx.fill();
        });
      } else if (st.system === "reproductive") {
        const pulse = (Math.sin(elapsed * 2.4) + 1) / 2;

        if (st.sex === "female") {
          ctx.strokeStyle = reproColor;
          ctx.lineWidth = 2;
          ctx.globalAlpha = 0.65;
          ctx.beginPath();
          ctx.moveTo(180, 336);
          ctx.quadraticCurveTo(169, 324, 160, 332);
          ctx.moveTo(180, 336);
          ctx.quadraticCurveTo(191, 324, 200, 332);
          ctx.stroke();

          const femaleNodes = [
            [180, 338, 16],
            [160, 332, 9],
            [200, 332, 9],
          ];
          femaleNodes.forEach(([rx, ry, rad]) => {
            const rg = ctx.createRadialGradient(rx, ry, 2, rx, ry, rad + pulse * 5);
            rg.addColorStop(0, isLight ? "rgba(181,90,136,0.72)" : "rgba(212,124,168,0.82)");
            rg.addColorStop(1, "rgba(212,124,168,0)");
            ctx.globalAlpha = 0.92;
            ctx.fillStyle = rg;
            ctx.beginPath();
            ctx.arc(rx, ry, rad + pulse * 5, 0, Math.PI * 2);
            ctx.fill();
          });
        } else {
          ctx.strokeStyle = reproColor;
          ctx.lineWidth = 1.8;
          ctx.globalAlpha = 0.55;
          ctx.beginPath();
          ctx.moveTo(180, 352);
          ctx.lineTo(173, 370);
          ctx.moveTo(180, 352);
          ctx.lineTo(187, 370);
          ctx.stroke();

          const maleNodes = [
            [180, 352, 13],
            [173, 372, 9],
            [187, 372, 9],
          ];
          maleNodes.forEach(([rx, ry, rad]) => {
            const rg = ctx.createRadialGradient(rx, ry, 2, rx, ry, rad + pulse * 5);
            rg.addColorStop(0, isLight ? "rgba(181,90,136,0.72)" : "rgba(212,124,168,0.82)");
            rg.addColorStop(1, "rgba(212,124,168,0)");
            ctx.globalAlpha = 0.92;
            ctx.fillStyle = rg;
            ctx.beginPath();
            ctx.arc(rx, ry, rad + pulse * 5, 0, Math.PI * 2);
            ctx.fill();
          });
        }
      }

      ctx.restore();
      requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
    void ro;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const btnMale = document.getElementById("btn-male");
    const btnFemale = document.getElementById("btn-female");
    const xraySlider = document.getElementById("xray-slider");
    const dockToggle = document.getElementById("btn-dock-toggle");
    const dockList = document.getElementById("dock-list");
    const dockChevron = document.getElementById("dock-chevron");

    if (btnMale) btnMale.addEventListener("click", () => BL.setSex("male"));
    if (btnFemale) btnFemale.addEventListener("click", () => BL.setSex("female"));

    if (xraySlider) {
      xraySlider.value = String(BL.getState().xray);
      xraySlider.addEventListener("input", (e) => BL.setXray(e.target.value));
    }

    if (dockToggle && dockList) {
      dockToggle.addEventListener("click", () => {
        const isOpen = !dockList.classList.contains("hidden");
        dockList.classList.toggle("hidden", isOpen);
        dockToggle.setAttribute("aria-expanded", String(!isOpen));
        if (dockChevron) dockChevron.textContent = isOpen ? "▸" : "▾";
      });
    }

    // Clicking any organ on the body diagram selects it — and clicking a LIVE organ opens its dedicated page
    document.querySelectorAll("[data-organ]").forEach((el) => {
      const organId = el.getAttribute("data-organ");
      const activate = () => {
        BL.setSystem(organId);
        if (BL.ORGAN_PAGES[organId]) {
          window.location.href = BL.ORGAN_PAGES[organId];
        }
      };
      el.addEventListener("click", activate);
      el.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          activate();
        }
      });
    });

    syncBodyUI();
    BL.subscribe(syncBodyUI);
    startBodyCanvas();
  });
})();