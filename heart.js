(function () {
  const BL = window.BioLume;
  if (!BL) return;

  // =========================================================
  // PART 1: HEART CROSS-SECTION ENGINE
  // =========================================================
  const VENOUS_FLOW_PATHS = [
    [
      [118, 38], [120, 96], [136, 176], [148, 224], [156, 294],
      [182, 270], [190, 206], [188, 134], [126, 118],
    ],
    [
      [114, 344], [120, 274], [132, 198], [148, 246], [166, 304],
      [186, 256], [192, 192], [194, 134], [252, 118],
    ],
  ];

  const ARTERIAL_FLOW_PATHS = [
    [
      [354, 166], [314, 178], [284, 190], [276, 232], [264, 300],
      [234, 278], [224, 200], [220, 108], [212, 64], [170, 62], [158, 100],
    ],
    [
      [354, 204], [314, 200], [280, 204], [272, 248], [256, 314],
      [230, 266], [224, 184], [218, 96], [196, 62], [168, 72], [162, 114],
    ],
  ];

  const ELECTRICAL_PATHS = [
    [[108, 154], [136, 162], [168, 188], [196, 214]],
    [[196, 214], [206, 258], [206, 318], [172, 336], [134, 302], [126, 252]],
    [[196, 214], [208, 260], [212, 326], [258, 344], [294, 304], [300, 248]],
  ];

  const HOTSPOTS = [
    { id: "venaCava", x: 28.1, y: 17.0, tone: "venous" },
    { id: "aorta", x: 50.5, y: 14.5, tone: "arterial" },
    { id: "pulmonaryArtery", x: 44.3, y: 30.2, tone: "venous" },
    { id: "saNode", x: 25.5, y: 35.0, tone: "electric" },
    { id: "rightAtrium", x: 32.4, y: 42.5, tone: "venous" },
    { id: "leftAtrium", x: 67.8, y: 42.5, tone: "arterial" },
    { id: "rightVentricle", x: 37.6, y: 67.0, tone: "venous" },
    { id: "leftVentricle", x: 63.0, y: 66.5, tone: "arterial" },
  ];

  const ui = {
    paused: false,
    showElectrical: true,
    showPins: true,
    selectedHotspot: "leftVentricle",
    activeTab: "inspect",
    cardiacPhase: "diastole",
    qIndex: 0,
    selectedOption: null,
    score: 0,
    quizDone: false,
  };

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

  function drawSmoothCurve(ctx, points) {
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

  function sampleECG(phase) {
    const p = Math.exp(-Math.pow((phase - 0.11) / 0.032, 2)) * 0.22;
    const q = -Math.exp(-Math.pow((phase - 0.225) / 0.012, 2)) * 0.2;
    const r = Math.exp(-Math.pow((phase - 0.25) / 0.014, 2)) * 1.0;
    const s = -Math.exp(-Math.pow((phase - 0.278) / 0.014, 2)) * 0.34;
    const tw = Math.exp(-Math.pow((phase - 0.52) / 0.055, 2)) * 0.34;
    return p + q + r + s + tw;
  }

  function renderPins() {
    const layer = document.getElementById("hotspot-pins-layer");
    if (!layer) return;
    const hl = BL.dict().heartLab;

    layer.classList.toggle("hidden", !ui.showPins);
    layer.innerHTML = "";

    HOTSPOTS.forEach((pin) => {
      const data = hl.hotspots[pin.id];
      const isSel = ui.selectedHotspot === pin.id;

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `hotspot-pin${isSel ? " selected" : ""}`;
      btn.style.left = `${pin.x}%`;
      btn.style.top = `${pin.y}%`;
      btn.setAttribute("aria-label", BL.term(data));

      btn.innerHTML = `
        <span class="pin-dot pin-${pin.tone}"></span>
        <span class="pin-label">${data.name}</span>
      `;

      btn.addEventListener("click", () => {
        ui.selectedHotspot = pin.id;
        ui.activeTab = "inspect";
        syncHeartUI();
      });

      layer.appendChild(btn);
    });
  }

  function renderReaderBody() {
    const bodyEl = document.getElementById("reader-body");
    if (!bodyEl) return;
    const hl = BL.dict().heartLab;

    document.querySelectorAll("#heart-reader-panel .tab-btn").forEach((b) => {
      b.classList.toggle("active", b.getAttribute("data-tab") === ui.activeTab);
    });

    bodyEl.innerHTML = "";

    if (ui.activeTab === "inspect") {
      const hint = document.createElement("p");
      hint.className = "heart-subtitle";
      hint.textContent = hl.selectPrompt;
      bodyEl.appendChild(hint);

      const pillsWrap = document.createElement("div");
      pillsWrap.className = "part-pills";
      HOTSPOTS.forEach((pin) => {
        const item = hl.hotspots[pin.id];
        const pill = document.createElement("button");
        pill.type = "button";
        pill.className = `part-pill${ui.selectedHotspot === pin.id ? " active" : ""}`;
        pill.textContent = item.name;
        pill.addEventListener("click", () => {
          ui.selectedHotspot = pin.id;
          syncHeartUI();
        });
        pillsWrap.appendChild(pill);
      });
      bodyEl.appendChild(pillsWrap);

      const activeItem = hl.hotspots[ui.selectedHotspot];
      if (activeItem) {
        const box = document.createElement("div");
        box.className = "detail-box";
        box.innerHTML = `
          <span class="detail-type">${activeItem.bloodType}</span>
          <h2 class="detail-title">${BL.term(activeItem)}</h2>
          <p class="detail-summary">${activeItem.summary}</p>
          <div class="detail-fact">💡 ${activeItem.keyFact}</div>
        `;
        bodyEl.appendChild(box);
      }
    } else if (ui.activeTab === "chapter") {
      const heading = document.createElement("h2");
      heading.className = "detail-title";
      heading.textContent = hl.chapter.heading;
      bodyEl.appendChild(heading);

      hl.chapter.sections.forEach((sec) => {
        const card = document.createElement("div");
        card.className = "chapter-sec";
        card.innerHTML = `<h3>${sec.title}</h3><p>${sec.body}</p>`;
        bodyEl.appendChild(card);
      });
    } else if (ui.activeTab === "quiz") {
      const qs = hl.quiz.questions;
      const topBar = document.createElement("div");
      topBar.className = "control-head";
      topBar.innerHTML = `
        <h2 class="detail-title" style="margin-top:0">${hl.quiz.title}</h2>
        <span class="accent-pill">${hl.quiz.scoreLabel}: ${ui.score}/${qs.length}</span>
      `;
      bodyEl.appendChild(topBar);

      if (ui.quizDone) {
        const doneBox = document.createElement("div");
        doneBox.className = "detail-box";
        doneBox.style.textAlign = "center";
        doneBox.style.marginTop = "12px";
        doneBox.innerHTML = `
          <p class="detail-title">${ui.score} / ${qs.length}</p>
          <button id="btn-quiz-restart" type="button" class="secondary-cta" style="margin-top:14px">${hl.quiz.restartBtn}</button>
        `;
        bodyEl.appendChild(doneBox);
        const rst = document.getElementById("btn-quiz-restart");
        if (rst) {
          rst.addEventListener("click", () => {
            ui.qIndex = 0;
            ui.selectedOption = null;
            ui.score = 0;
            ui.quizDone = false;
            renderReaderBody();
          });
        }
        return;
      }

      const cur = qs[ui.qIndex];
      const qBox = document.createElement("div");
      qBox.className = "chapter-sec";
      qBox.innerHTML = `
        <span class="micro-label">Q${ui.qIndex + 1} / ${qs.length}</span>
        <p style="font-weight:700;color:var(--text);margin-top:4px">${cur.q}</p>
      `;
      bodyEl.appendChild(qBox);

      cur.options.forEach((opt, idx) => {
        const optBtn = document.createElement("button");
        optBtn.type = "button";
        optBtn.className = "quiz-option";
        if (ui.selectedOption !== null) {
          if (idx === cur.answer) optBtn.classList.add("correct");
          else if (idx === ui.selectedOption) optBtn.classList.add("wrong");
          optBtn.disabled = true;
        }
        optBtn.textContent = opt;
        optBtn.addEventListener("click", () => {
          if (ui.selectedOption !== null) return;
          ui.selectedOption = idx;
          if (idx === cur.answer) ui.score += 1;
          renderReaderBody();
        });
        bodyEl.appendChild(optBtn);
      });

      if (ui.selectedOption !== null) {
        const fb = document.createElement("div");
        fb.className = "detail-fact";
        const ok = ui.selectedOption === cur.answer;
        fb.innerHTML = `
          <strong style="color:${ok ? "#56c99b" : "var(--arterial)"}">${ok ? hl.quiz.correctMsg : hl.quiz.wrongMsg}</strong>
          <p style="margin-top:4px">${cur.explain}</p>
          <button id="btn-quiz-next" type="button" class="secondary-cta" style="margin-top:10px">${hl.quiz.nextBtn}</button>
        `;
        bodyEl.appendChild(fb);
        const nxt = document.getElementById("btn-quiz-next");
        if (nxt) {
          nxt.addEventListener("click", () => {
            if (ui.qIndex + 1 < qs.length) {
              ui.qIndex += 1;
              ui.selectedOption = null;
            } else {
              ui.quizDone = true;
            }
            renderReaderBody();
          });
        }
      }
    }
  }

  function syncHeartUI() {
    const st = BL.getState();
    const hl = BL.dict().heartLab;

    const stroke = st.bpm <= 120 ? 70 : Math.min(76, Math.round(70 + (st.bpm - 120) * 0.15));
    const output = ((st.bpm * stroke) / 1000).toFixed(1);

    const mBpm = document.getElementById("metric-bpm");
    const mOut = document.getElementById("metric-output");
    const mStr = document.getElementById("metric-stroke");
    const mPhs = document.getElementById("metric-phase");
    const pill = document.getElementById("bpm-pill");
    const slider = document.getElementById("bpm-slider");

    if (mBpm) mBpm.textContent = String(st.bpm);
    if (mOut) mOut.textContent = output;
    if (mStr) mStr.textContent = String(stroke);
    if (pill) pill.textContent = `${st.bpm} BPM`;
    if (slider && document.activeElement !== slider) slider.value = String(st.bpm);

    if (mPhs) {
      const isSys = ui.cardiacPhase === "systole";
      mPhs.textContent = isSys ? hl.metrics.systole : hl.metrics.diastole;
      mPhs.className = `metric-phase${isSys ? " systole" : ""}`;
    }

    document.querySelectorAll(".preset-btn").forEach((b) => {
      b.classList.toggle("active", Number(b.getAttribute("data-bpm")) === st.bpm);
    });

    const pauseBtn = document.getElementById("btn-pause");
    if (pauseBtn) {
      pauseBtn.innerHTML = ui.paused
        ? `▶ <span>${hl.toggles.play}</span>`
        : `⏸ <span>${hl.toggles.pause}</span>`;
    }

    const elecBtn = document.getElementById("btn-electric");
    if (elecBtn) {
      elecBtn.classList.toggle("active-electric", ui.showElectrical);
      elecBtn.setAttribute("aria-pressed", String(ui.showElectrical));
    }

    const pinsBtn = document.getElementById("btn-pins");
    if (pinsBtn) {
      pinsBtn.classList.toggle("active-accent", ui.showPins);
      pinsBtn.setAttribute("aria-pressed", String(ui.showPins));
    }

    renderPins();
    renderReaderBody();
  }

  function startHeartCanvas() {
    const canvas = document.getElementById("heart-canvas");
    const box = document.getElementById("heart-canvas-box");
    if (!canvas || !box) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 420;
    let height = 440;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const r = box.getBoundingClientRect();
      width = Math.max(260, r.width);
      height = Math.max(272, r.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(box);

    const venousCells = [];
    VENOUS_FLOW_PATHS.forEach((p, idx) => {
      for (let i = 0; i < 18; i++) {
        venousCells.push({ pathIdx: idx, t: i / 18, jitter: ((i % 5) - 2) * 1.4, radius: 2.8 + (i % 2) * 0.5 });
      }
    });

    const arterialCells = [];
    ARTERIAL_FLOW_PATHS.forEach((p, idx) => {
      for (let i = 0; i < 20; i++) {
        arterialCells.push({ pathIdx: idx, t: i / 20, jitter: ((i % 5) - 2) * 1.4, radius: 3.0 + (i % 2) * 0.5 });
      }
    });

    let lastTime = performance.now();
    let cyclePhase = 0;
    let lastPhaseReported = "diastole";

    function frame(now) {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      const st = BL.getState();
      if (!ui.paused) {
        cyclePhase = (cyclePhase + dt * (st.bpm / 60)) % 1;
      }

      const atrialContract = cyclePhase < 0.2 ? Math.sin((cyclePhase / 0.2) * Math.PI) : 0;
      const ventricularSystole =
        cyclePhase >= 0.24 && cyclePhase <= 0.56
          ? Math.sin(((cyclePhase - 0.24) / 0.32) * Math.PI)
          : 0;

      const nowPhase = ventricularSystole > 0.12 ? "systole" : "diastole";
      if (nowPhase !== lastPhaseReported) {
        lastPhaseReported = nowPhase;
        ui.cardiacPhase = nowPhase;
        const mPhs = document.getElementById("metric-phase");
        if (mPhs) {
          const hl = BL.dict().heartLab;
          mPhs.textContent = nowPhase === "systole" ? hl.metrics.systole : hl.metrics.diastole;
          mPhs.className = `metric-phase${nowPhase === "systole" ? " systole" : ""}`;
        }
      }

      const isLight = st.theme === "light";
      const artColor = isLight ? "#c24b65" : "#e0637d";
      const venColor = isLight ? "#2c88a8" : "#52bed6";
      const elecColor = isLight ? "#b58428" : "#dfb052";
      const wallStroke = isLight ? "#334155" : "#475569";

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform((width / 420) * dpr, 0, 0, (height / 440) * dpr, 0, 0);

      ctx.save();
      ctx.translate(210, 224);
      ctx.scale(1 - ventricularSystole * 0.055, 1 - ventricularSystole * 0.035);
      ctx.translate(-210, -224);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      // Aortic Arch
      ctx.strokeStyle =
        ui.selectedHotspot === "aorta"
          ? artColor
          : isLight
          ? "rgba(194,75,101,0.5)"
          : "rgba(224,99,125,0.45)";
      ctx.lineWidth = 34;
      ctx.beginPath();
      ctx.moveTo(222, 184);
      ctx.bezierCurveTo(224, 102, 224, 58, 190, 58);
      ctx.bezierCurveTo(162, 58, 158, 86, 158, 128);
      ctx.stroke();

      // Vena Cava
      ctx.strokeStyle =
        ui.selectedHotspot === "venaCava"
          ? venColor
          : isLight
          ? "rgba(44,136,168,0.48)"
          : "rgba(82,190,214,0.42)";
      ctx.lineWidth = 28;
      ctx.beginPath();
      ctx.moveTo(118, 34);
      ctx.lineTo(122, 162);
      ctx.stroke();

      ctx.lineWidth = 24;
      ctx.beginPath();
      ctx.moveTo(114, 348);
      ctx.lineTo(122, 236);
      ctx.stroke();

      // Pulmonary Veins
      ctx.strokeStyle = isLight ? "rgba(194,75,101,0.42)" : "rgba(224,99,125,0.38)";
      ctx.lineWidth = 14;
      ctx.beginPath();
      ctx.moveTo(356, 166);
      ctx.lineTo(298, 182);
      ctx.moveTo(356, 204);
      ctx.lineTo(298, 198);
      ctx.stroke();

      // Pulmonary Artery
      ctx.strokeStyle =
        ui.selectedHotspot === "pulmonaryArtery"
          ? venColor
          : isLight
          ? "rgba(44,136,168,0.52)"
          : "rgba(82,190,214,0.46)";
      ctx.lineWidth = 24;
      ctx.beginPath();
      ctx.moveTo(188, 226);
      ctx.lineTo(190, 134);
      ctx.moveTo(122, 118);
      ctx.quadraticCurveTo(190, 138, 258, 118);
      ctx.stroke();

      // Outer Myocardium
      const hGrad = ctx.createRadialGradient(210, 236, 30, 210, 236, 155);
      hGrad.addColorStop(0, isLight ? "rgba(254,226,226,0.92)" : "rgba(32,18,38,0.94)");
      hGrad.addColorStop(1, isLight ? "rgba(226,232,240,0.95)" : "rgba(12,22,40,0.96)");
      ctx.fillStyle = hGrad;
      ctx.strokeStyle = isLight ? "#94a3b8" : "rgba(224,99,125,0.48)";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(210, 146);
      ctx.bezierCurveTo(148, 122, 86, 152, 92, 222);
      ctx.bezierCurveTo(96, 286, 144, 344, 214, 366);
      ctx.bezierCurveTo(286, 348, 330, 284, 326, 212);
      ctx.bezierCurveTo(324, 150, 266, 124, 210, 146);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      const drawChamber = (pathFn, fill, hiColor, sel) => {
        ctx.save();
        pathFn();
        ctx.fillStyle = fill;
        ctx.fill();
        ctx.strokeStyle = sel ? hiColor : wallStroke;
        ctx.lineWidth = sel ? 3.2 : 1.6;
        if (sel && !isLight) {
          ctx.shadowColor = hiColor;
          ctx.shadowBlur = 16;
        }
        ctx.stroke();
        ctx.restore();
      };

      const raS = atrialContract * 4;
      drawChamber(
        () => {
          ctx.beginPath();
          ctx.ellipse(138, 184, 34 - raS, 30 - raS * 0.6, -0.15, 0, Math.PI * 2);
        },
        isLight ? "rgba(44,136,168,0.22)" : "rgba(82,190,214,0.22)",
        venColor,
        ui.selectedHotspot === "rightAtrium"
      );

      drawChamber(
        () => {
          ctx.beginPath();
          ctx.ellipse(282, 184, 32 - raS, 28 - raS * 0.6, 0.15, 0, Math.PI * 2);
        },
        isLight ? "rgba(194,75,101,0.22)" : "rgba(224,99,125,0.24)",
        artColor,
        ui.selectedHotspot === "leftAtrium"
      );

      const rvS = ventricularSystole * 8;
      drawChamber(
        () => {
          ctx.beginPath();
          ctx.moveTo(122 + rvS * 0.6, 224);
          ctx.quadraticCurveTo(192, 220, 198, 236);
          ctx.lineTo(198, 336 - rvS * 0.5);
          ctx.quadraticCurveTo(132 + rvS, 324, 114 + rvS, 266);
          ctx.closePath();
        },
        isLight ? "rgba(44,136,168,0.28)" : "rgba(82,190,214,0.26)",
        venColor,
        ui.selectedHotspot === "rightVentricle"
      );

      const lvS = ventricularSystole * 10;
      ctx.save();
      ctx.strokeStyle = isLight ? "rgba(185,28,28,0.28)" : "rgba(224,99,125,0.28)";
      ctx.lineWidth = 14;
      ctx.beginPath();
      ctx.moveTo(304, 228);
      ctx.quadraticCurveTo(306, 326, 222, 350);
      ctx.stroke();
      ctx.restore();

      drawChamber(
        () => {
          ctx.beginPath();
          ctx.moveTo(220, 234);
          ctx.quadraticCurveTo(284 - lvS * 0.5, 220, 294 - lvS, 240);
          ctx.quadraticCurveTo(290 - lvS, 316, 222, 338 - lvS * 0.4);
          ctx.closePath();
        },
        isLight ? "rgba(194,75,101,0.28)" : "rgba(224,99,125,0.28)",
        artColor,
        ui.selectedHotspot === "leftVentricle"
      );

      // Septum
      ctx.strokeStyle = isLight ? "#64748b" : "#94a3b8";
      ctx.lineWidth = 8;
      ctx.beginPath();
      ctx.moveTo(208, 206);
      ctx.quadraticCurveTo(210, 276, 211, 348);
      ctx.stroke();

      // Moving Valves
      const avOpen = Math.max(0, 1 - ventricularSystole * 1.35);
      const semiOpen = ventricularSystole;
      const drawValve = (cx, cy, openAmt, color) => {
        ctx.save();
        ctx.strokeStyle = color;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(cx - 12, cy);
        ctx.lineTo(cx - 2 - openAmt * 4, cy + openAmt * 11);
        ctx.moveTo(cx + 12, cy);
        ctx.lineTo(cx + 2 + openAmt * 4, cy + openAmt * 11);
        ctx.stroke();
        ctx.restore();
      };
      drawValve(152, 222, avOpen, "#e0f2fe");
      drawValve(268, 222, avOpen, "#ffe4e6");
      drawValve(188, 214, -semiOpen, "#7dd3fc");
      drawValve(224, 212, -semiOpen, "#fda4af");

      // Blood Flow Particles
      const spd = (st.bpm / 72) * (0.22 + ventricularSystole * 0.42);
      ctx.fillStyle = venColor;
      venousCells.forEach((c) => {
        if (!ui.paused) c.t = (c.t + spd * dt) % 1;
        const [px, py] = samplePolyline(VENOUS_FLOW_PATHS[c.pathIdx], c.t);
        ctx.beginPath();
        ctx.arc(px + c.jitter, py + c.jitter * 0.6, c.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.fillStyle = artColor;
      arterialCells.forEach((c) => {
        if (!ui.paused) c.t = (c.t + spd * 1.08 * dt) % 1;
        const [px, py] = samplePolyline(ARTERIAL_FLOW_PATHS[c.pathIdx], c.t);
        ctx.beginPath();
        ctx.arc(px + c.jitter, py + c.jitter * 0.6, c.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Electrical Wave
      if (ui.showElectrical) {
        ctx.save();
        ctx.strokeStyle = elecColor;
        ctx.lineWidth = 2;
        ctx.globalAlpha = 0.35;
        ELECTRICAL_PATHS.forEach((pts) => {
          drawSmoothCurve(ctx, pts);
          ctx.stroke();
        });

        const saFlash = cyclePhase < 0.16 ? 1 : 0.35;
        ctx.globalAlpha = saFlash;
        ctx.fillStyle = elecColor;
        ctx.beginPath();
        ctx.arc(108, 154, 5.5 + saFlash * 3, 0, Math.PI * 2);
        ctx.fill();

        const avFlash = cyclePhase >= 0.14 && cyclePhase <= 0.28 ? 1 : 0.35;
        ctx.globalAlpha = avFlash;
        ctx.beginPath();
        ctx.arc(196, 214, 4.5 + avFlash * 2.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.globalAlpha = 1;
        if (cyclePhase < 0.2) {
          const [sx, sy] = samplePolyline(ELECTRICAL_PATHS[0], cyclePhase / 0.2);
          ctx.beginPath();
          ctx.arc(sx, sy, 4.5, 0, Math.PI * 2);
          ctx.fill();
        } else if (cyclePhase >= 0.22 && cyclePhase <= 0.52) {
          const tV = (cyclePhase - 0.22) / 0.3;
          [1, 2].forEach((pIdx) => {
            const [vx, vy] = samplePolyline(ELECTRICAL_PATHS[pIdx], tV);
            ctx.beginPath();
            ctx.arc(vx, vy, 4.5, 0, Math.PI * 2);
            ctx.fill();
          });
        }
        ctx.restore();
      }
      ctx.restore();

      // Live ECG Strip
      const ecgTop = 382;
      const ecgHeight = 46;
      const ecgLeft = 18;
      const ecgWidth = 384;
      const ecgMid = ecgTop + 30;

      ctx.save();
      ctx.fillStyle = isLight ? "rgba(15,23,42,0.05)" : "rgba(4,10,20,0.72)";
      ctx.strokeStyle = isLight ? "rgba(15,23,42,0.12)" : "rgba(104,184,230,0.22)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(ecgLeft, ecgTop, ecgWidth, ecgHeight, 10);
      ctx.fill();
      ctx.stroke();

      ctx.strokeStyle = isLight ? "#059669" : "#56c99b";
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i <= 110; i++) {
        const ratio = i / 110;
        const x = ecgLeft + 10 + ratio * (ecgWidth - 20);
        const ph = (ratio * 2 - cyclePhase + 4) % 1;
        const y = ecgMid - sampleECG(ph) * 22;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();

      requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
    void ro;
  }

  // =========================================================
  // PART 2: BLOOD & BLOOD CELLS 60 FPS MICROSCOPE LAB
  // =========================================================
  const bloodUI = {
    mode: "stream", // "stream" | "rbc" | "wbc" | "platelet"
    paused: false,
    selectedCell: "rbc", // "rbc" | "wbc" | "platelets" | "plasma"
    activeTab: "inspect", // "inspect" | "lesson" | "quiz"
    qIndex: 0,
    selectedOption: null,
    score: 0,
    quizDone: false,
  };

  function renderBloodReader() {
    const bodyEl = document.getElementById("blood-reader-body");
    const chipsEl = document.getElementById("blood-name-chips");
    const blData = BL.dict().bloodLab;
    if (!blData || !bodyEl) return;

    const cellOrder = ["rbc", "wbc", "platelets", "plasma"];

    // Top name chips (always visible right at the start of Blood Cells section)
    if (chipsEl) {
      chipsEl.innerHTML = "";
      cellOrder.forEach((cid) => {
        const item = blData.cells[cid];
        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = `part-pill${bloodUI.selectedCell === cid ? " active" : ""}`;
        chip.textContent = BL.term(item);
        chip.addEventListener("click", () => {
          bloodUI.selectedCell = cid;
          bloodUI.activeTab = "inspect";
          if (cid === "rbc") bloodUI.mode = "rbc";
          else if (cid === "wbc") bloodUI.mode = "wbc";
          else if (cid === "platelets") bloodUI.mode = "platelet";
          else bloodUI.mode = "stream";
          syncBloodUI();
        });
        chipsEl.appendChild(chip);
      });
    }

    document.querySelectorAll("#blood-reader-panel .tab-btn").forEach((b) => {
      b.classList.toggle("active", b.getAttribute("data-blood-tab") === bloodUI.activeTab);
    });

    bodyEl.innerHTML = "";

    if (bloodUI.activeTab === "inspect") {
      const hint = document.createElement("p");
      hint.className = "heart-subtitle";
      hint.textContent = blData.labels.selectPrompt;
      bodyEl.appendChild(hint);

      const pills = document.createElement("div");
      pills.className = "part-pills";
      cellOrder.forEach((cid) => {
        const item = blData.cells[cid];
        const p = document.createElement("button");
        p.type = "button";
        p.className = `part-pill${bloodUI.selectedCell === cid ? " active" : ""}`;
        p.textContent = item.name;
        p.addEventListener("click", () => {
          bloodUI.selectedCell = cid;
          if (cid === "rbc") bloodUI.mode = "rbc";
          else if (cid === "wbc") bloodUI.mode = "wbc";
          else if (cid === "platelets") bloodUI.mode = "platelet";
          else bloodUI.mode = "stream";
          syncBloodUI();
        });
        pills.appendChild(p);
      });
      bodyEl.appendChild(pills);

      const cur = blData.cells[bloodUI.selectedCell] || blData.cells.rbc;
      const box = document.createElement("div");
      box.className = "detail-box";
      box.innerHTML = `
        <span class="detail-type">${cur.badge}</span>
        <h3 class="detail-title">${BL.term(cur)}</h3>
        <div style="margin-top:10px;font-size:13.5px;line-height:1.65;">
          <p><strong>${blData.labels.shape}:</strong> ${cur.shape}</p>
          <p style="margin-top:8px;"><strong>${blData.labels.characteristics}:</strong> ${cur.characteristics}</p>
          <p style="margin-top:8px;"><strong>${blData.labels.work}:</strong> ${cur.work}</p>
        </div>
        <div class="detail-fact" style="white-space:pre-line;"><strong>${blData.labels.divisions}:</strong><br/>${cur.divisions}</div>
      `;
      bodyEl.appendChild(box);
    } else if (bloodUI.activeTab === "lesson") {
      const h = document.createElement("h3");
      h.className = "detail-title";
      h.style.marginTop = "0";
      h.textContent = blData.lesson.heading;
      bodyEl.appendChild(h);

      blData.lesson.sections.forEach((sec) => {
        const card = document.createElement("div");
        card.className = "chapter-sec";
        card.innerHTML = `<h3>${sec.title}</h3><div style="margin-top:6px;font-size:13.5px;line-height:1.68;">${sec.html}</div>`;
        bodyEl.appendChild(card);
      });
    } else if (bloodUI.activeTab === "quiz") {
      const qs = blData.quiz.questions;
      const topBar = document.createElement("div");
      topBar.className = "control-head";
      topBar.innerHTML = `
        <h3 class="detail-title" style="margin-top:0">${blData.quiz.title}</h3>
        <span class="accent-pill">${blData.quiz.scoreLabel}: ${bloodUI.score}/${qs.length}</span>
      `;
      bodyEl.appendChild(topBar);

      if (bloodUI.quizDone) {
        const doneBox = document.createElement("div");
        doneBox.className = "detail-box";
        doneBox.style.textAlign = "center";
        doneBox.style.marginTop = "12px";
        doneBox.innerHTML = `
          <p class="detail-title">${bloodUI.score} / ${qs.length}</p>
          <button id="btn-blood-quiz-restart" type="button" class="secondary-cta" style="margin-top:14px">${blData.quiz.restartBtn}</button>
        `;
        bodyEl.appendChild(doneBox);
        const rst = document.getElementById("btn-blood-quiz-restart");
        if (rst) {
          rst.addEventListener("click", () => {
            bloodUI.qIndex = 0;
            bloodUI.selectedOption = null;
            bloodUI.score = 0;
            bloodUI.quizDone = false;
            renderBloodReader();
          });
        }
        return;
      }

      const cur = qs[bloodUI.qIndex];
      const qBox = document.createElement("div");
      qBox.className = "chapter-sec";
      qBox.innerHTML = `
        <span class="micro-label">Q${bloodUI.qIndex + 1} / ${qs.length}</span>
        <p style="font-weight:700;color:var(--text);margin-top:4px">${cur.q}</p>
      `;
      bodyEl.appendChild(qBox);

      cur.options.forEach((opt, idx) => {
        const optBtn = document.createElement("button");
        optBtn.type = "button";
        optBtn.className = "quiz-option";
        if (bloodUI.selectedOption !== null) {
          if (idx === cur.answer) optBtn.classList.add("correct");
          else if (idx === bloodUI.selectedOption) optBtn.classList.add("wrong");
          optBtn.disabled = true;
        }
        optBtn.textContent = opt;
        optBtn.addEventListener("click", () => {
          if (bloodUI.selectedOption !== null) return;
          bloodUI.selectedOption = idx;
          if (idx === cur.answer) bloodUI.score += 1;
          renderBloodReader();
        });
        bodyEl.appendChild(optBtn);
      });

      if (bloodUI.selectedOption !== null) {
        const fb = document.createElement("div");
        fb.className = "detail-fact";
        const ok = bloodUI.selectedOption === cur.answer;
        fb.innerHTML = `
          <strong style="color:${ok ? "#56c99b" : "var(--arterial)"}">${ok ? blData.quiz.correctMsg : blData.quiz.wrongMsg}</strong>
          <p style="margin-top:4px">${cur.explain}</p>
          <button id="btn-blood-quiz-next" type="button" class="secondary-cta" style="margin-top:10px">${blData.quiz.nextBtn}</button>
        `;
        bodyEl.appendChild(fb);
        const nxt = document.getElementById("btn-blood-quiz-next");
        if (nxt) {
          nxt.addEventListener("click", () => {
            if (bloodUI.qIndex + 1 < qs.length) {
              bloodUI.qIndex += 1;
              bloodUI.selectedOption = null;
            } else {
              bloodUI.quizDone = true;
            }
            renderBloodReader();
          });
        }
      }
    }
  }

  function syncBloodUI() {
    const blData = BL.dict().bloodLab;
    if (!blData) return;

    document.querySelectorAll("[data-blood-mode]").forEach((btn) => {
      const active = btn.getAttribute("data-blood-mode") === bloodUI.mode;
      btn.classList.toggle("active-accent", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    const pBtn = document.getElementById("btn-blood-pause");
    if (pBtn) {
      pBtn.innerHTML = bloodUI.paused
        ? `▶ <span>${blData.toggles.play}</span>`
        : `⏸ <span>${blData.toggles.pause}</span>`;
    }

    renderBloodReader();
  }

  function drawBiconcaveRBC(ctx, x, y, r, angle, isLight, glowO2) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.fillStyle = glowO2
      ? isLight ? "#c24b65" : "#e0637d"
      : isLight ? "#9f364e" : "#b84661";
    ctx.strokeStyle = "rgba(255,228,235,0.65)";
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.ellipse(0, 0, r, r * 0.66, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Central biconcave pallor dimple
    ctx.fillStyle = isLight ? "rgba(255,230,235,0.45)" : "rgba(255,215,225,0.28)";
    ctx.beginPath();
    ctx.ellipse(0, 0, r * 0.45, r * 0.25, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function drawWBCSubtype(ctx, x, y, r, subtype, isLight, t) {
    ctx.save();
    ctx.translate(x, y);

    // Soft amoeboid membrane
    ctx.fillStyle = isLight ? "rgba(241,245,249,0.95)" : "rgba(226,238,252,0.88)";
    ctx.strokeStyle = isLight ? "#2b7eb3" : "#68b8e6";
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let i = 0; i <= 16; i++) {
      const a = (i / 16) * Math.PI * 2;
      const wobble = 1 + Math.sin(a * 4 + t * 2.5) * 0.06;
      const px = Math.cos(a) * r * wobble;
      const py = Math.sin(a) * r * wobble;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    const nucCol = isLight ? "#4338ca" : "#6366f1";
    ctx.fillStyle = nucCol;

    if (subtype === "neutrophil") {
      // 3-lobed nucleus
      ctx.beginPath();
      ctx.arc(-r * 0.34, -r * 0.14, r * 0.22, 0, Math.PI * 2);
      ctx.arc(0, r * 0.26, r * 0.22, 0, Math.PI * 2);
      ctx.arc(r * 0.34, -r * 0.12, r * 0.22, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = nucCol;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-r * 0.22, -r * 0.04);
      ctx.lineTo(0, r * 0.18);
      ctx.lineTo(r * 0.24, -r * 0.04);
      ctx.stroke();
    } else if (subtype === "eosinophil") {
      // Bilobed headphone nucleus + reddish granules
      ctx.beginPath();
      ctx.arc(-r * 0.3, 0, r * 0.27, 0, Math.PI * 2);
      ctx.arc(r * 0.3, 0, r * 0.27, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#e0637d";
      for (let g = 0; g < 7; g++) {
        ctx.beginPath();
        ctx.arc(Math.cos(g * 1.1) * r * 0.55, Math.sin(g * 1.7) * r * 0.55, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }
    } else if (subtype === "basophil") {
      // S-shaped nucleus + dark blue granules
      ctx.strokeStyle = nucCol;
      ctx.lineWidth = r * 0.28;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(-r * 0.32, -r * 0.25);
      ctx.bezierCurveTo(r * 0.4, -r * 0.3, -r * 0.4, r * 0.3, r * 0.32, r * 0.25);
      ctx.stroke();
      ctx.fillStyle = "#312e81";
      for (let g = 0; g < 9; g++) {
        ctx.beginPath();
        ctx.arc(Math.cos(g * 0.9) * r * 0.58, Math.sin(g * 1.5) * r * 0.52, 2.2, 0, Math.PI * 2);
        ctx.fill();
      }
    } else if (subtype === "lymphocyte") {
      // Huge round nucleus
      ctx.beginPath();
      ctx.arc(0, 0, r * 0.68, 0, Math.PI * 2);
      ctx.fill();
    } else if (subtype === "monocyte") {
      // Kidney/bean-shaped nucleus
      ctx.beginPath();
      ctx.arc(-r * 0.14, -r * 0.12, r * 0.38, 0, Math.PI * 2);
      ctx.arc(-r * 0.14, r * 0.18, r * 0.36, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  function startBloodCanvas() {
    const canvas = document.getElementById("blood-canvas");
    const box = document.getElementById("blood-canvas-box");
    if (!canvas || !box) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 420;
    let height = 440;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const r = box.getBoundingClientRect();
      width = Math.max(260, r.width);
      height = Math.max(272, r.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(box);

    // Pre-allocated stream particles
    const streamRbcs = Array.from({ length: 16 }, (_, i) => ({
      x: (i / 16) * 440,
      y: 112 + ((i * 47) % 190),
      speed: 48 + (i % 4) * 14,
      r: 13 + (i % 3) * 2,
      rot: i * 0.7,
    }));

    const streamWbcs = [
      { x: 90, y: 155, type: "neutrophil", speed: 24 },
      { x: 260, y: 265, type: "lymphocyte", speed: 22 },
      { x: 370, y: 195, type: "monocyte", speed: 20 },
    ];

    const streamPlatelets = Array.from({ length: 14 }, (_, i) => ({
      x: (i / 14) * 420,
      y: 100 + ((i * 59) % 210),
      speed: 62 + (i % 3) * 12,
    }));

    let lastTime = performance.now();
    let elapsed = 0;

    function frame(now) {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      if (!bloodUI.paused) elapsed += dt;

      const isLight = BL.getState().theme === "light";
      const blData = BL.dict().bloodLab;
      const textCol = isLight ? "#162235" : "#e6effa";
      const mutedCol = isLight ? "#556982" : "#8ca4c0";

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform((width / 420) * dpr, 0, 0, (height / 440) * dpr, 0, 0);

      // Warm Plasma Vessel Backdrop
      const bgGrad = ctx.createLinearGradient(0, 60, 0, 360);
      bgGrad.addColorStop(0, isLight ? "rgba(254,243,199,0.55)" : "rgba(42,22,34,0.68)");
      bgGrad.addColorStop(0.5, isLight ? "rgba(253,230,138,0.28)" : "rgba(24,18,32,0.55)");
      bgGrad.addColorStop(1, isLight ? "rgba(254,243,199,0.55)" : "rgba(42,22,34,0.68)");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 74, 420, 286);

      // Top & Bottom Blood Vessel Walls
      ctx.strokeStyle = isLight ? "rgba(194,75,101,0.45)" : "rgba(224,99,125,0.45)";
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(0, 74);
      ctx.lineTo(420, 74);
      ctx.moveTo(0, 360);
      ctx.lineTo(420, 360);
      ctx.stroke();

      let hudTitle = blData.canvasText.streamTitle;

      if (bloodUI.mode === "stream") {
        // 1. LIVE BLOODSTREAM (Plasma + RBC + WBC + Platelets)
        streamRbcs.forEach((c) => {
          if (!bloodUI.paused) {
            c.x = (c.x + c.speed * dt) % 450;
            c.rot += dt * 0.9;
          }
          drawBiconcaveRBC(ctx, c.x - 15, c.y, c.r, c.rot, isLight, true);
        });

        streamWbcs.forEach((w) => {
          if (!bloodUI.paused) w.x = (w.x + w.speed * dt) % 460;
          drawWBCSubtype(ctx, w.x - 20, w.y, 21, w.type, isLight, elapsed);
        });

        // Tiny glowing platelets
        ctx.fillStyle = isLight ? "#b58428" : "#dfb052";
        streamPlatelets.forEach((p) => {
          if (!bloodUI.paused) p.x = (p.x + p.speed * dt) % 430;
          ctx.beginPath();
          ctx.ellipse(p.x - 5, p.y, 4.5, 2.4, elapsed * 2, 0, Math.PI * 2);
          ctx.fill();
        });
      } else if (bloodUI.mode === "rbc") {
        // 2. RBC OXYGEN DELIVERY & BICONCAVE FLEXING
        hudTitle = blData.canvasText.rbcTitle;

        // Large zoomed biconcave RBC cross-section (Top View + Side Profile)
        drawBiconcaveRBC(ctx, 130, 185, 48, Math.sin(elapsed) * 0.15, isLight, true);

        // Side profile showing dumbbell biconcave shape
        ctx.save();
        ctx.translate(290, 185);
        ctx.fillStyle = isLight ? "#c24b65" : "#e0637d";
        ctx.strokeStyle = "rgba(255,228,235,0.8)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(-46, -16);
        ctx.bezierCurveTo(-18, -22, -16, -6, 0, -6);
        ctx.bezierCurveTo(16, -6, 18, -22, 46, -16);
        ctx.bezierCurveTo(56, -8, 56, 8, 46, 16);
        ctx.bezierCurveTo(18, 22, 16, 6, 0, 6);
        ctx.bezierCurveTo(-16, 6, -18, 22, -46, 16);
        ctx.bezierCurveTo(-56, 8, -56, -8, -46, -16);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        // Orbiting O2 molecules binding to Hemoglobin
        for (let i = 0; i < 6; i++) {
          const a = elapsed * 1.8 + (i / 6) * Math.PI * 2;
          const ox = 130 + Math.cos(a) * (28 + Math.sin(elapsed * 3 + i) * 14);
          const oy = 185 + Math.sin(a) * (22 + Math.cos(elapsed * 2 + i) * 10);
          ctx.fillStyle = "#7dd3fc";
          ctx.beginPath();
          ctx.arc(ox, oy, 5.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.font = "800 7.5px 'Plus Jakarta Sans', sans-serif";
          ctx.fillStyle = "#040811";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText("O₂", ox, oy + 0.5);
        }

        // Labels
        ctx.font = "700 11px 'Plus Jakarta Sans', sans-serif";
        ctx.fillStyle = textCol;
        ctx.textAlign = "center";
        ctx.fillText("Top View (No Nucleus • HbO₂)", 130, 252);
        ctx.fillText("Side View (Biconcave Flex)", 290, 252);

        // Capillary squeeze demo at bottom of vessel
        ctx.strokeStyle = isLight ? "rgba(194,75,101,0.35)" : "rgba(224,99,125,0.35)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(30, 294);
        ctx.lineTo(390, 294);
        ctx.moveTo(30, 326);
        ctx.lineTo(390, 326);
        ctx.stroke();
        for (let i = 0; i < 4; i++) {
          const cx = 40 + ((elapsed * 68 + i * 95) % 340);
          drawBiconcaveRBC(ctx, cx, 310, 14, 0, isLight, true);
        }
      } else if (bloodUI.mode === "wbc") {
        // 3. ALL 5 WBC SUBTYPES (GRANULOCYTES vs AGRANULOCYTES) + LIVE PHAGOCYTOSIS
        hudTitle = blData.canvasText.wbcTitle;

        const row1 = [
          { x: 82, y: 146, t: "neutrophil", lbl: "Neutrophil" },
          { x: 210, y: 146, t: "eosinophil", lbl: "Eosinophil" },
          { x: 338, y: 146, t: "basophil", lbl: "Basophil" },
        ];
        const row2 = [
          { x: 112, y: 258, t: "lymphocyte", lbl: "Lymphocyte" },
          { x: 230, y: 258, t: "monocyte", lbl: "Monocyte" },
        ];

        ctx.font = "800 9.5px 'Plus Jakarta Sans', sans-serif";
        ctx.fillStyle = mutedCol;
        ctx.textAlign = "left";
        ctx.fillText("GRANULOCYTES (Lobed Nucleus)", 22, 98);
        ctx.fillText("AGRANULOCYTES", 22, 212);

        row1.forEach((w) => {
          drawWBCSubtype(ctx, w.x, w.y, 26, w.t, isLight, elapsed);
          ctx.font = "700 10.5px 'Plus Jakarta Sans', sans-serif";
          ctx.fillStyle = textCol;
          ctx.textAlign = "center";
          ctx.fillText(w.lbl, w.x, w.y + 40);
        });

        row2.forEach((w) => {
          drawWBCSubtype(ctx, w.x, w.y, w.t === "monocyte" ? 29 : 24, w.t, isLight, elapsed);
          ctx.font = "700 10.5px 'Plus Jakarta Sans', sans-serif";
          ctx.fillStyle = textCol;
          ctx.textAlign = "center";
          ctx.fillText(w.lbl, w.x, w.y + 42);
        });

        // Live Phagocytosis mini-action on bottom right
        const chasePhase = (elapsed * 0.45) % 1;
        const bactX = 352 - chasePhase * 22;
        const bactAlpha = chasePhase > 0.78 ? Math.max(0, 1 - (chasePhase - 0.78) * 5) : 1;
        ctx.save();
        ctx.globalAlpha = bactAlpha;
        ctx.fillStyle = "#56c99b";
        ctx.beginPath();
        ctx.ellipse(bactX, 260, 8, 4.5, 0.3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        drawWBCSubtype(ctx, 326 + chasePhase * 12, 260, 22, "neutrophil", isLight, elapsed * 1.8);
        ctx.font = "700 9.5px 'Plus Jakarta Sans', sans-serif";
        ctx.fillStyle = "#56c99b";
        ctx.textAlign = "center";
        ctx.fillText(blData.canvasText.phagoLabel, 336, 302);
      } else if (bloodUI.mode === "platelet") {
        // 4. PLATELET CLOTTING & FIBRIN MESH SEALING AN INJURY
        hudTitle = blData.canvasText.plateletTitle;

        const clotCycle = (elapsed * 0.28) % 1; // 0..1 repeating clotting sequence

        // Gap / Injury in Top Vessel Wall
        ctx.fillStyle = isLight ? "#f1f5fa" : "#050912";
        ctx.fillRect(160, 62, 100, 24);

        ctx.font = "700 10.5px 'Plus Jakarta Sans', sans-serif";
        ctx.fillStyle = "#dfb052";
        ctx.textAlign = "center";
        ctx.fillText(blData.canvasText.injuryLabel, 210, 56);

        // Platelets rushing to aggregate at injury site
        ctx.fillStyle = "#dfb052";
        for (let i = 0; i < 12; i++) {
          const targetX = 172 + (i % 6) * 15;
          const targetY = 84 + Math.floor(i / 6) * 16;
          const startY = 210 + (i % 4) * 28;
          const progress = Math.min(1, clotCycle * 2.2);
          const px = targetX + Math.sin(elapsed * 4 + i) * (1 - progress) * 14;
          const py = startY + (targetY - startY) * progress;

          // Spiky activated platelet
          ctx.beginPath();
          for (let s = 0; s < 10; s++) {
            const ang = (s / 10) * Math.PI * 2;
            const rad = s % 2 === 0 ? 6.5 : 3;
            const sx = px + Math.cos(ang) * rad;
            const sy = py + Math.sin(ang) * rad;
            if (s === 0) ctx.moveTo(sx, sy);
            else ctx.lineTo(sx, sy);
          }
          ctx.closePath();
          ctx.fill();
        }

        // Fibrin Protein Mesh weaving across the wound
        if (clotCycle > 0.32) {
          const meshAlpha = Math.min(1, (clotCycle - 0.32) * 2.2);
          ctx.save();
          ctx.strokeStyle = `rgba(223,176,82,${meshAlpha * 0.92})`;
          ctx.lineWidth = 2;
          for (let i = 0; i < 7; i++) {
            ctx.beginPath();
            ctx.moveTo(160 + i * 16, 76);
            ctx.lineTo(175 + i * 13, 124);
            ctx.moveTo(160, 82 + i * 6);
            ctx.lineTo(260, 90 + i * 5);
            ctx.stroke();
          }
          ctx.restore();
        }

        // Trapped RBCs sealing the fibrin clot + normal flowing RBCs below
        if (clotCycle > 0.5) {
          drawBiconcaveRBC(ctx, 192, 106, 13, 0.2, isLight, true);
          drawBiconcaveRBC(ctx, 224, 108, 13, -0.3, isLight, true);
        }

        for (let i = 0; i < 6; i++) {
          const rx = ((elapsed * 75 + i * 76) % 450) - 15;
          drawBiconcaveRBC(ctx, rx, 240 + (i % 3) * 34, 13, elapsed + i, isLight, true);
        }
      }

      // Top & Bottom HUD Strip
      ctx.save();
      ctx.fillStyle = isLight ? "rgba(15,23,42,0.06)" : "rgba(4,10,20,0.78)";
      ctx.strokeStyle = isLight ? "rgba(15,23,42,0.12)" : "rgba(104,184,230,0.22)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(14, 378, 392, 46, 10);
      ctx.fill();
      ctx.stroke();

      ctx.font = "700 10.2px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = textCol;
      ctx.textAlign = "center";
      ctx.fillText(hudTitle, 210, 405);
      ctx.restore();

      requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
    void ro;
  }

  // =========================================================
  // BOOTSTRAP BOTH HEART & BLOOD CELLS LABS
  // =========================================================
  document.addEventListener("DOMContentLoaded", () => {
    // Heart Controls
    const slider = document.getElementById("bpm-slider");
    if (slider) {
      slider.value = String(BL.getState().bpm);
      slider.addEventListener("input", (e) => BL.setBpm(e.target.value));
    }

    document.querySelectorAll(".preset-btn").forEach((b) => {
      b.addEventListener("click", () => BL.setBpm(Number(b.getAttribute("data-bpm"))));
    });

    const pauseBtn = document.getElementById("btn-pause");
    if (pauseBtn) {
      pauseBtn.addEventListener("click", () => {
        ui.paused = !ui.paused;
        syncHeartUI();
      });
    }

    const elecBtn = document.getElementById("btn-electric");
    if (elecBtn) {
      elecBtn.addEventListener("click", () => {
        ui.showElectrical = !ui.showElectrical;
        syncHeartUI();
      });
    }

    const pinsBtn = document.getElementById("btn-pins");
    if (pinsBtn) {
      pinsBtn.addEventListener("click", () => {
        ui.showPins = !ui.showPins;
        syncHeartUI();
      });
    }

    document.querySelectorAll("#heart-reader-panel .tab-btn").forEach((b) => {
      b.addEventListener("click", () => {
        ui.activeTab = b.getAttribute("data-tab");
        renderReaderBody();
      });
    });

    // Blood Cells Lab Controls
    document.querySelectorAll("[data-blood-mode]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const mode = btn.getAttribute("data-blood-mode");
        bloodUI.mode = mode;
        if (mode === "rbc") bloodUI.selectedCell = "rbc";
        else if (mode === "wbc") bloodUI.selectedCell = "wbc";
        else if (mode === "platelet") bloodUI.selectedCell = "platelets";
        syncBloodUI();
      });
    });

    const bloodPauseBtn = document.getElementById("btn-blood-pause");
    if (bloodPauseBtn) {
      bloodPauseBtn.addEventListener("click", () => {
        bloodUI.paused = !bloodUI.paused;
        syncBloodUI();
      });
    }

    document.querySelectorAll("#blood-reader-panel .tab-btn").forEach((b) => {
      b.addEventListener("click", () => {
        bloodUI.activeTab = b.getAttribute("data-blood-tab");
        renderBloodReader();
      });
    });

    syncHeartUI();
    syncBloodUI();
    BL.subscribe(() => {
      syncHeartUI();
      syncBloodUI();
    });

    startHeartCanvas();
    startBloodCanvas();
  });
})();