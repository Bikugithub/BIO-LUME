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

  // Sex-fitted Arterial & Venous Paths
  const MALE_ARTERIAL_PATHS = [
    [[186, 194], [184, 152], [180, 114], [175, 76], [180, 44]],
    [[184, 178], [152, 138], [122, 146], [104, 214], [92, 286], [83, 338]],
    [[188, 178], [214, 138], [238, 146], [256, 214], [268, 286], [277, 338]],
    [[186, 206], [182, 266], [176, 336], [156, 404], [152, 486], [150, 594]],
    [[186, 206], [184, 266], [186, 336], [204, 404], [208, 486], [210, 594]],
    [[184, 196], [158, 184], [148, 206], [164, 214], [188, 200]],
  ];

  const FEMALE_ARTERIAL_PATHS = [
    [[186, 194], [184, 152], [180, 114], [175, 76], [180, 44]],
    [[184, 178], [154, 140], [126, 148], [110, 214], [99, 282], [90, 334]],
    [[188, 178], [208, 140], [234, 148], [250, 214], [261, 282], [270, 334]],
    [[186, 206], [182, 266], [176, 336], [156, 404], [153, 486], [151, 594]],
    [[186, 206], [184, 266], [186, 336], [204, 404], [207, 486], [209, 594]],
    [[184, 196], [158, 184], [148, 206], [164, 214], [188, 200]],
  ];

  const MALE_VENOUS_PATHS = [
    [[184, 48], [188, 82], [186, 122], [178, 162], [180, 194]],
    [[88, 338], [97, 286], [109, 216], [126, 154], [156, 148], [178, 188]],
    [[272, 338], [263, 286], [251, 216], [234, 154], [204, 150], [182, 188]],
    [[154, 594], [156, 486], [162, 404], [174, 336], [175, 262], [178, 202]],
    [[206, 594], [204, 486], [198, 404], [184, 336], [177, 262], [178, 202]],
  ];

  const FEMALE_VENOUS_PATHS = [
    [[184, 48], [188, 82], [186, 122], [178, 162], [180, 194]],
    [[94, 334], [103, 282], [114, 216], [130, 154], [158, 148], [178, 188]],
    [[266, 334], [257, 282], [246, 216], [230, 154], [202, 150], [182, 188]],
    [[155, 594], [157, 486], [162, 404], [174, 336], [175, 262], [178, 202]],
    [[205, 594], [203, 486], [198, 404], [184, 336], [177, 262], [178, 202]],
  ];

  // Sex-fitted Nerve Trunks & Branches
  const MALE_NERVE_PATHS = [
    [[180, 52], [180, 114], [180, 212], [180, 328]],
    [[180, 124], [148, 134], [120, 146], [104, 218], [92, 282], [84, 336]],
    [[180, 124], [212, 134], [240, 146], [256, 218], [268, 282], [276, 336]],
    [[180, 324], [160, 368], [154, 444], [152, 520], [151, 594]],
    [[180, 324], [200, 368], [206, 444], [208, 520], [209, 594]],
  ];

  const FEMALE_NERVE_PATHS = [
    [[180, 52], [180, 114], [180, 212], [180, 328]],
    [[180, 126], [152, 136], [126, 146], [110, 218], [100, 280], [91, 332]],
    [[180, 126], [208, 136], [234, 146], [250, 218], [260, 280], [269, 332]],
    [[180, 324], [160, 368], [155, 444], [154, 520], [153, 594]],
    [[180, 324], [200, 368], [205, 444], [206, 520], [207, 594]],
  ];

  const NERVE_BRANCHES_BASE = [
    [[180, 154], [160, 160], [144, 168]],
    [[180, 154], [200, 160], [216, 168]],
    [[180, 184], [160, 190], [146, 198]],
    [[180, 184], [200, 190], [214, 198]],
    [[180, 216], [162, 224], [148, 232]],
    [[180, 216], [198, 224], [212, 232]],
    [[180, 250], [164, 258], [152, 268]],
    [[180, 250], [196, 258], [208, 268]],
    [[180, 286], [166, 296], [156, 306]],
    [[180, 286], [194, 296], [204, 306]],
    [[156, 408], [144, 434]],
    [[156, 408], [165, 438]],
    [[204, 408], [216, 434]],
    [[204, 408], [195, 438]],
    [[153, 514], [144, 546]],
    [[207, 514], [216, 546]],
  ];

  const MALE_ARM_BRANCHES = [
    [[106, 206], [96, 228]],
    [[96, 264], [86, 288]],
    [[254, 206], [264, 228]],
    [[264, 264], [274, 288]],
  ];

  const FEMALE_ARM_BRANCHES = [
    [[112, 206], [104, 226]],
    [[102, 264], [94, 286]],
    [[248, 206], [256, 226]],
    [[258, 264], [266, 286]],
  ];

  // Respiratory Airway Paths (Trachea -> Left & Right Lungs)
  const RESP_AIRWAY_L = [
    [180, 108],
    [180, 154],
    [164, 172],
    [156, 198],
  ];
  const RESP_AIRWAY_R = [
    [180, 108],
    [180, 154],
    [196, 172],
    [204, 198],
  ];

  // Digestive Peristalsis Path
  const DIGESTIVE_PATH = [
    [180, 118], [180, 174], [181, 226], [196, 240],
    [192, 258], [176, 262], [190, 280], [168, 292],
    [190, 304], [166, 314], [154, 306], [154, 272],
    [180, 268], [206, 272], [206, 314], [182, 324],
  ];

  // Symmetrical Urinary Ureter Flow Paths (Aligned Kidneys y=264 -> Bladder)
  const URETER_LEFT = [
    [163, 265],
    [166, 292],
    [170, 318],
    [174, 342],
  ];
  const URETER_RIGHT = [
    [197, 265],
    [194, 292],
    [190, 318],
    [186, 342],
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
    const isFemale = st.sex === "female";

    // Male / Female toggle buttons & silhouette
    const btnMale = document.getElementById("btn-male");
    const btnFemale = document.getElementById("btn-female");
    if (btnMale) {
      btnMale.className = `sex-btn${!isFemale ? " active-male" : ""}`;
      btnMale.setAttribute("aria-pressed", String(!isFemale));
    }
    if (btnFemale) {
      btnFemale.className = `sex-btn${isFemale ? " active-female" : ""}`;
      btnFemale.setAttribute("aria-pressed", String(isFemale));
    }

    const outline = document.getElementById("body-outline");
    const stop1 = document.getElementById("skin-stop-1");
    const stop2 = document.getElementById("skin-stop-2");
    const pelvis = document.getElementById("pelvis-path");

    if (outline) {
      outline.setAttribute("d", isFemale ? FEMALE_PATH : MALE_PATH);
      outline.setAttribute("stroke", isFemale ? "#d47ca8" : "#68b8e6");
      outline.setAttribute("stroke-opacity", String(Math.max(0.45, 0.95 - (st.xray / 100) * 0.52)));
      outline.setAttribute("fill-opacity", String(Math.max(0.20, 0.95 - (st.xray / 100) * 0.70)));
    }
    if (stop1) stop1.setAttribute("stop-color", isFemale ? "#d47ca8" : "#68b8e6");
    if (stop2) stop2.setAttribute("stop-color", isFemale ? "#a84e7c" : "#2b7eb3");
    if (pelvis) pelvis.setAttribute("d", isFemale ? FEMALE_PELVIS : MALE_PELVIS);

    // Swap Male/Female anatomical groups (Arms, Endocrine Gonads, Reproductive)
    const togglePair = (maleId, femaleId) => {
      const m = document.getElementById(maleId);
      const f = document.getElementById(femaleId);
      if (m) m.classList.toggle("hidden", isFemale);
      if (f) f.classList.toggle("hidden", !isFemale);
    };
    togglePair("skel-arms-male", "skel-arms-female");
    togglePair("musc-arms-male", "musc-arms-female");
    togglePair("endo-gonads-male", "endo-gonads-female");
    togglePair("repro-male", "repro-female");

    // =========================================================
    // FOCUS ISOLATION MODE: Active System = 100%, All Others Faded
    // =========================================================
    const xrayFactor = Math.max(0.25, st.xray / 100);
    const muscleLayer = document.getElementById("layer-muscular");
    const skeletonLayer = document.getElementById("layer-skeletal");
    const organsLayer = document.getElementById("layer-organs");
    const heartGroup = document.getElementById("heart-hotspot");
    const heartRing = document.getElementById("heart-ring");

    if (muscleLayer) {
      muscleLayer.setAttribute(
        "opacity",
        st.system === "muscular"
          ? "0.96"
          : st.xray > 15 && st.xray < 45
          ? "0.18"
          : "0.06"
      );
    }

    if (skeletonLayer) {
      skeletonLayer.setAttribute(
        "opacity",
        st.system === "skeletal"
          ? "0.98"
          : st.xray > 40
          ? "0.16"
          : "0.06"
      );
    }

    if (organsLayer) {
      organsLayer.setAttribute("opacity", String(xrayFactor));
    }

    // Isolate individual organ SVG groups (1.0 for active, 0.11 ghost for inactive)
    const organMap = {
      nervous: "org-brain",
      respiratory: "org-lungs",
      digestive: "org-digestive",
      urinary: "org-urinary",
      endocrine: "org-endocrine",
      reproductive: "org-reproductive",
    };

    Object.entries(organMap).forEach(([sysId, elId]) => {
      const el = document.getElementById(elId);
      if (!el) return;
      const isSelected = st.system === sysId;
      el.setAttribute("opacity", isSelected ? "1" : "0.11");
      if (isSelected) el.setAttribute("filter", "url(#organGlow)");
      else el.removeAttribute("filter");
    });

    // Heart only glows & blinks when Circulatory System is selected
    const isCirc = st.system === "circulatory";
    if (heartGroup) {
      heartGroup.setAttribute("opacity", isCirc ? String(xrayFactor) : "0.12");
      if (isCirc) heartGroup.setAttribute("filter", "url(#organGlow)");
      else heartGroup.removeAttribute("filter");
    }
    if (heartRing) {
      heartRing.classList.toggle("hidden", !isCirc);
    }

    // X-Ray Labels
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

    // Active System Info Card
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
      if (legend) legend.classList.toggle("hidden", !isCirc);
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
    MALE_ARTERIAL_PATHS.forEach((p, idx) => {
      const n = idx === 5 ? 8 : 13;
      for (let i = 0; i < n; i++) {
        artParticles.push({ pathIdx: idx, t: i / n, speed: 0.22 + (i % 4) * 0.025, r: idx === 5 ? 2.1 : 2.5 });
      }
    });

    const venParticles = [];
    MALE_VENOUS_PATHS.forEach((p, idx) => {
      for (let i = 0; i < 11; i++) {
        venParticles.push({ pathIdx: idx, t: i / 11, speed: 0.17 + (i % 3) * 0.02, r: 2.2 });
      }
    });

    const nerveParticles = [];
    MALE_NERVE_PATHS.forEach((p, idx) => {
      for (let i = 0; i < 6; i++) {
        nerveParticles.push({ pathIdx: idx, t: i / 6, speed: 0.55 + (i % 3) * 0.08 });
      }
    });

    const branchParticles = [];
    for (let i = 0; i < 20; i++) {
      branchParticles.push({ branchIdx: i, t: (i * 0.23) % 1, speed: 0.85 + (i % 3) * 0.15 });
    }

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
      const isFemale = st.sex === "female";
      const isLight = st.theme === "light";
      const artColor = isLight ? "#c24b65" : "#e0637d";
      const venColor = isLight ? "#2c88a8" : "#52bed6";
      const elecColor = isLight ? "#b58428" : "#fbbf24";
      const endoColor = isLight ? "#7c3aed" : "#c084fc";
      const reproColor = isLight ? "#b55a88" : "#f472b6";

      const artPaths = isFemale ? FEMALE_ARTERIAL_PATHS : MALE_ARTERIAL_PATHS;
      const venPaths = isFemale ? FEMALE_VENOUS_PATHS : MALE_VENOUS_PATHS;
      const nervePaths = isFemale ? FEMALE_NERVE_PATHS : MALE_NERVE_PATHS;

      const beatPhase = (elapsed * (st.bpm / 60)) % 1;
      const systole = beatPhase < 0.25 ? Math.sin((beatPhase / 0.25) * Math.PI) : 0;
      const vis = Math.max(0.32, st.xray / 100);

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform((width / 360) * dpr, 0, 0, (height / 640) * dpr, 0, 0);

      ctx.save();
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      // =========================================================
      // ISOLATED 60 FPS REAL-TIME ANIMATION PER ACTIVE SYSTEM
      // =========================================================
      if (st.system === "circulatory") {
        // Venous & Arterial Vessels + Flowing Blood Cells + Heart Pulse
        ctx.strokeStyle = venColor;
        ctx.globalAlpha = 0.56 * vis;
        ctx.lineWidth = 2.4;
        venPaths.forEach((pts) => {
          drawSmoothPolyline(ctx, pts);
          ctx.stroke();
        });

        ctx.strokeStyle = artColor;
        ctx.globalAlpha = (0.68 + systole * 0.24) * vis;
        ctx.lineWidth = 2.8 + systole * 0.6;
        artPaths.forEach((pts) => {
          drawSmoothPolyline(ctx, pts);
          ctx.stroke();
        });

        ctx.fillStyle = venColor;
        ctx.globalAlpha = 0.92;
        venParticles.forEach((p) => {
          p.t = (p.t + p.speed * dt * (st.bpm / 72)) % 1;
          const [x, y] = samplePolyline(venPaths[p.pathIdx], p.t);
          ctx.beginPath();
          ctx.arc(x, y, p.r, 0, Math.PI * 2);
          ctx.fill();
        });

        ctx.fillStyle = artColor;
        ctx.shadowColor = artColor;
        ctx.shadowBlur = isLight ? 0 : 8;
        ctx.globalAlpha = 0.98;
        artParticles.forEach((p) => {
          p.t = (p.t + p.speed * dt * (st.bpm / 72) * (1 + systole * 0.7)) % 1;
          const [x, y] = samplePolyline(artPaths[p.pathIdx], p.t);
          ctx.beginPath();
          ctx.arc(x, y, p.r + systole * 0.5, 0, Math.PI * 2);
          ctx.fill();
        });
        ctx.shadowBlur = 0;

        // Heart Bioluminescent Pulse (ONLY when Circulatory is active)
        const pulseR = 22 + systole * 11;
        const g = ctx.createRadialGradient(188, 196, 2, 188, 196, pulseR);
        g.addColorStop(0, isLight ? "rgba(194,75,101,0.58)" : "rgba(224,99,125,0.78)");
        g.addColorStop(1, "rgba(224,99,125,0)");
        ctx.globalAlpha = 1;
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(188, 196, pulseR, 0, Math.PI * 2);
        ctx.fill();
      } else if (st.system === "respiratory") {
        // Whole Respiratory System in Live Blinking / Breathing Mode
        const breathPhase = (elapsed * 0.38) % 1;
        const isInhale = breathPhase < 0.48;
        const breath = isInhale
          ? Math.sin((breathPhase / 0.48) * (Math.PI / 2))
          : Math.cos(((breathPhase - 0.48) / 0.52) * (Math.PI / 2));

        // 1. Pulsing Trachea & Bronchi Airway Glow
        ctx.strokeStyle = isLight ? "#0284c7" : "#7dd3fc";
        ctx.lineWidth = 4 + breath * 2;
        ctx.globalAlpha = 0.32 + breath * 0.48;
        ctx.beginPath();
        ctx.moveTo(180, 108);
        ctx.lineTo(180, 154);
        ctx.lineTo(164, 170);
        ctx.moveTo(180, 154);
        ctx.lineTo(196, 170);
        ctx.stroke();

        // 2. Blinking / Expanding Dual Lung Bioluminescent Glow
        [158, 202].forEach((lx) => {
          const lg = ctx.createRadialGradient(lx, 190, 2, lx, 190, 24 + breath * 10);
          lg.addColorStop(0, isLight ? `rgba(2,132,199,${0.32 + breath * 0.42})` : `rgba(125,211,252,${0.35 + breath * 0.52})`);
          lg.addColorStop(1, "rgba(56,189,248,0)");
          ctx.globalAlpha = 0.95;
          ctx.fillStyle = lg;
          ctx.beginPath();
          ctx.ellipse(lx, 190, 17 + breath * 5, 29 + breath * 7, 0, 0, Math.PI * 2);
          ctx.fill();
        });

        // 3. Animated Airflow Particles (Inhale ↓ Cyan / Exhale ↑ Warm Amber)
        ctx.fillStyle = isInhale ? "#bae6fd" : "#fde68a";
        ctx.globalAlpha = 0.95;
        for (let i = 0; i < 4; i++) {
          const raw = ((elapsed * 0.85) + i * 0.25) % 1;
          const t = isInhale ? raw : 1 - raw;
          const [lx, ly] = samplePolyline(RESP_AIRWAY_L, t);
          const [rx, ry] = samplePolyline(RESP_AIRWAY_R, t);
          ctx.beginPath();
          ctx.arc(lx, ly, 2.3, 0, Math.PI * 2);
          ctx.arc(rx, ry, 2.3, 0, Math.PI * 2);
          ctx.fill();
        }

        // 4. Breathing Diaphragm Wave Glow
        ctx.strokeStyle = isLight ? "#0284c7" : "#7dd3fc";
        ctx.lineWidth = 3;
        ctx.globalAlpha = 0.45 + breath * 0.5;
        ctx.beginPath();
        ctx.moveTo(142, 225);
        ctx.quadraticCurveTo(180, 212 + breath * 8, 218, 225);
        ctx.stroke();
      } else if (st.system === "nervous") {
        // 1. Tightly Contained Blinking Brain Glow (Strictly Inside Cranium)
        const brainPulse = (Math.sin(elapsed * 4.8) + 1) / 2;
        const bg = ctx.createRadialGradient(180, 47, 1, 180, 47, 12 + brainPulse * 4);
        bg.addColorStop(0, isLight ? "rgba(217,119,6,0.75)" : "rgba(251,191,36,0.88)");
        bg.addColorStop(1, "rgba(251,191,36,0)");
        ctx.globalAlpha = 0.92;
        ctx.fillStyle = bg;
        ctx.beginPath();
        ctx.ellipse(180, 47, 13, 10, 0, 0, Math.PI * 2);
        ctx.fill();

        // Crisp Internal Synaptic Sparks (Bounded Inside Brain)
        const sparkCoords = [
          [172, 43], [188, 43], [173, 51], [187, 51], [180, 40], [180, 52],
        ];
        sparkCoords.forEach(([sx, sy], idx) => {
          const blink = Math.sin(elapsed * 9 + idx * 1.9);
          if (blink > 0.25) {
            ctx.fillStyle = "#fef9c3";
            ctx.globalAlpha = blink;
            ctx.beginPath();
            ctx.arc(sx, sy, 2.0, 0, Math.PI * 2);
            ctx.fill();
          }
        });

        // 2. Main Spinal & Limb Nerve Trunks (Sex-Fitted)
        ctx.strokeStyle = elecColor;
        ctx.lineWidth = 1.9;
        ctx.globalAlpha = 0.62;
        nervePaths.forEach((pts) => {
          drawSmoothPolyline(ctx, pts);
          ctx.stroke();
        });

        // 3. Branching Thoracic, Arm & Leg Nerves
        const allBranches = [
          ...NERVE_BRANCHES_BASE,
          ...(isFemale ? FEMALE_ARM_BRANCHES : MALE_ARM_BRANCHES),
        ];
        ctx.lineWidth = 1.15;
        ctx.globalAlpha = 0.50;
        allBranches.forEach((pts) => {
          drawSmoothPolyline(ctx, pts);
          ctx.stroke();
        });

        // 4. Firing Golden Nerve Impulses
        ctx.fillStyle = elecColor;
        ctx.shadowColor = elecColor;
        ctx.shadowBlur = isLight ? 0 : 7;
        ctx.globalAlpha = 0.96;
        nerveParticles.forEach((p) => {
          p.t = (p.t + p.speed * dt) % 1;
          const [x, y] = samplePolyline(nervePaths[p.pathIdx], p.t);
          ctx.beginPath();
          ctx.arc(x, y, 2.5, 0, Math.PI * 2);
          ctx.fill();
        });

        branchParticles.forEach((bp) => {
          const bPts = allBranches[bp.branchIdx % allBranches.length];
          bp.t = (bp.t + bp.speed * dt) % 1;
          const [x, y] = samplePolyline(bPts, bp.t);
          ctx.beginPath();
          ctx.arc(x, y, 1.8, 0, Math.PI * 2);
          ctx.fill();
        });
        ctx.shadowBlur = 0;
      } else if (st.system === "digestive") {
        // Liver Glow + Sequential Peristalsis Wave (Esophagus -> Stomach -> Intestines)
        const liverPulse = (Math.sin(elapsed * 2.2) + 1) / 2;
        const lg = ctx.createRadialGradient(164, 232, 3, 164, 232, 22 + liverPulse * 5);
        lg.addColorStop(0, "rgba(234,88,12,0.52)");
        lg.addColorStop(1, "rgba(234,88,12,0)");
        ctx.globalAlpha = 0.92;
        ctx.fillStyle = lg;
        ctx.beginPath();
        ctx.arc(164, 232, 26, 0, Math.PI * 2);
        ctx.fill();

        for (let i = 0; i < 5; i++) {
          const t = (elapsed * 0.18 + i * 0.2) % 1;
          const [dx, dy] = samplePolyline(DIGESTIVE_PATH, t);
          const dg = ctx.createRadialGradient(dx, dy, 1, dx, dy, 9);
          dg.addColorStop(0, "rgba(253,186,116,0.95)");
          dg.addColorStop(1, "rgba(249,115,22,0)");
          ctx.fillStyle = dg;
          ctx.beginPath();
          ctx.arc(dx, dy, 9, 0, Math.PI * 2);
          ctx.fill();
        }
      } else if (st.system === "urinary") {
        // Aligned Kidney Filtration Glow + Symmetrical Ureter Droplets + Pulsing Bladder
        const pulse = (Math.sin(elapsed * 3.0) + 1) / 2;
        [
          [158, 264],
          [202, 264],
        ].forEach(([kx, ky]) => {
          const kg = ctx.createRadialGradient(kx, ky, 2, kx, ky, 14 + pulse * 5);
          kg.addColorStop(0, "rgba(34,211,238,0.78)");
          kg.addColorStop(1, "rgba(34,211,238,0)");
          ctx.fillStyle = kg;
          ctx.globalAlpha = 0.92;
          ctx.beginPath();
          ctx.arc(kx, ky, 19, 0, Math.PI * 2);
          ctx.fill();
        });

        ctx.fillStyle = "#a5f3fc";
        ctx.globalAlpha = 0.96;
        for (let i = 0; i < 4; i++) {
          const t = (elapsed * 0.45 + i * 0.25) % 1;
          const [lx, ly] = samplePolyline(URETER_LEFT, t);
          const [rx, ry] = samplePolyline(URETER_RIGHT, t);
          ctx.beginPath();
          ctx.arc(lx, ly, 2.3, 0, Math.PI * 2);
          ctx.arc(rx, ry, 2.3, 0, Math.PI * 2);
          ctx.fill();
        }

        const blg = ctx.createRadialGradient(180, 350, 2, 180, 350, 16 + pulse * 6);
        blg.addColorStop(0, "rgba(34,211,238,0.85)");
        blg.addColorStop(1, "rgba(34,211,238,0)");
        ctx.fillStyle = blg;
        ctx.beginPath();
        ctx.arc(180, 350, 22, 0, Math.PI * 2);
        ctx.fill();
      } else if (st.system === "skeletal") {
        // Luminous Articulated Joint Highlights
        const jPulse = (Math.sin(elapsed * 2.6) + 1) / 2;
        const joints = isFemale
          ? [[126, 142], [234, 142], [106, 234], [254, 234], [154, 364], [206, 364], [154, 492], [206, 492]]
          : [[122, 138], [238, 138], [99, 234], [261, 234], [154, 364], [206, 364], [154, 492], [206, 492]];
        joints.forEach(([jx, jy]) => {
          const jg = ctx.createRadialGradient(jx, jy, 1, jx, jy, 8 + jPulse * 4);
          jg.addColorStop(0, isLight ? "rgba(71,85,105,0.55)" : "rgba(226,232,240,0.78)");
          jg.addColorStop(1, "rgba(226,232,240,0)");
          ctx.fillStyle = jg;
          ctx.globalAlpha = 0.88;
          ctx.beginPath();
          ctx.arc(jx, jy, 12, 0, Math.PI * 2);
          ctx.fill();
        });
      } else if (st.system === "muscular") {
        // Rhythmic Muscle-Fiber Tension Waves
        const mPulse = (Math.sin(elapsed * 2.4) + 1) / 2;
        const muscleCenters = [
          [158, 152, 22], [202, 152, 22], [180, 228, 26],
          [154, 418, 24], [206, 418, 24], [153, 542, 16], [207, 542, 16],
        ];
        muscleCenters.forEach(([mx, my, rad], idx) => {
          const wave = (Math.sin(elapsed * 2.4 - idx * 0.5) + 1) / 2;
          const mg = ctx.createRadialGradient(mx, my, 2, mx, my, rad + wave * 5);
          mg.addColorStop(0, isLight ? "rgba(219,39,119,0.28)" : "rgba(244,114,182,0.44)");
          mg.addColorStop(1, "rgba(244,114,182,0)");
          ctx.fillStyle = mg;
          ctx.globalAlpha = 0.8 + mPulse * 0.15;
          ctx.beginPath();
          ctx.arc(mx, my, rad + 6, 0, Math.PI * 2);
          ctx.fill();
        });
      } else if (st.system === "endocrine") {
        // Hormone-Signaling Ripples Centered Directly on Each Shaped Gland
        const glands = [
          [180, 56, 4.5],   // Pituitary
          [180, 108, 7.0],  // Butterfly Thyroid
          [180, 144, 5.5],  // Thymus
          [182, 249, 6.5],  // Leaf Pancreas
          [160, 248, 4.8],  // Left Adrenal
          [200, 248, 4.8],  // Right Adrenal
          ...(isFemale
            ? [[160, 336, 5.0], [200, 336, 5.0]]
            : [[174, 372, 5.0], [186, 372, 5.0]]),
        ];
        glands.forEach(([gx, gy, baseR], idx) => {
          const ripplePhase = (elapsed * 0.72 + idx * 0.14) % 1;
          const ringR = baseR + ripplePhase * 14;

          ctx.strokeStyle = endoColor;
          ctx.lineWidth = 1.5;
          ctx.globalAlpha = (1 - ripplePhase) * 0.85;
          ctx.beginPath();
          ctx.arc(gx, gy, ringR, 0, Math.PI * 2);
          ctx.stroke();

          const eg = ctx.createRadialGradient(gx, gy, 1, gx, gy, baseR + 6);
          eg.addColorStop(0, isLight ? "rgba(124,58,237,0.68)" : "rgba(192,132,252,0.82)");
          eg.addColorStop(1, "rgba(192,132,252,0)");
          ctx.globalAlpha = 0.9;
          ctx.fillStyle = eg;
          ctx.beginPath();
          ctx.arc(gx, gy, baseR + 6, 0, Math.PI * 2);
          ctx.fill();
        });
      } else if (st.system === "reproductive") {
        // Crisp Synchronized Blinking Glow & Expanding Signal Rings (Male & Female)
        const blink = (Math.sin(elapsed * 3.4) + 1) / 2;
        const ripple = (elapsed * 0.65) % 1;

        if (isFemale) {
          const fNodes = [
            [180, 344, 15], // Uterus
            [158, 337, 8],  // Left Ovary
            [202, 337, 8],  // Right Ovary
          ];
          // Expanding ring around Uterus
          ctx.strokeStyle = reproColor;
          ctx.lineWidth = 1.6;
          ctx.globalAlpha = (1 - ripple) * 0.8;
          ctx.beginPath();
          ctx.arc(180, 344, 14 + ripple * 16, 0, Math.PI * 2);
          ctx.stroke();

          fNodes.forEach(([rx, ry, rad]) => {
            const rg = ctx.createRadialGradient(rx, ry, 2, rx, ry, rad + blink * 7);
            rg.addColorStop(0, isLight ? `rgba(181,90,136,${0.4 + blink * 0.45})` : `rgba(244,114,182,${0.42 + blink * 0.5})`);
            rg.addColorStop(1, "rgba(244,114,182,0)");
            ctx.globalAlpha = 0.95;
            ctx.fillStyle = rg;
            ctx.beginPath();
            ctx.arc(rx, ry, rad + blink * 7, 0, Math.PI * 2);
            ctx.fill();
          });
        } else {
          const mNodes = [
            [180, 352, 12], // Prostate / Seminal base
            [173, 372, 8],  // Left Testis
            [187, 372, 8],  // Right Testis
          ];
          // Expanding ring around Male Pelvic Tract
          ctx.strokeStyle = reproColor;
          ctx.lineWidth = 1.6;
          ctx.globalAlpha = (1 - ripple) * 0.8;
          ctx.beginPath();
          ctx.arc(180, 360, 14 + ripple * 16, 0, Math.PI * 2);
          ctx.stroke();

          mNodes.forEach(([rx, ry, rad]) => {
            const rg = ctx.createRadialGradient(rx, ry, 2, rx, ry, rad + blink * 7);
            rg.addColorStop(0, isLight ? `rgba(181,90,136,${0.4 + blink * 0.45})` : `rgba(244,114,182,${0.42 + blink * 0.5})`);
            rg.addColorStop(1, "rgba(244,114,182,0)");
            ctx.globalAlpha = 0.95;
            ctx.fillStyle = rg;
            ctx.beginPath();
            ctx.arc(rx, ry, rad + blink * 7, 0, Math.PI * 2);
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

    // Clicking any organ selects it — and clicking a LIVE organ opens its dedicated page
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