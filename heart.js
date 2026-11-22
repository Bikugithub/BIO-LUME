(function () {
  const BL = window.BioLume;
  if (!BL) return;

  const VENOUS_FLOW_PATHS = [
    [
      [118, 38],
      [120, 96],
      [136, 176],
      [148, 224],
      [156, 294],
      [182, 270],
      [190, 206],
      [188, 134],
      [126, 118],
    ],
    [
      [114, 344],
      [120, 274],
      [132, 198],
      [148, 246],
      [166, 304],
      [186, 256],
      [192, 192],
      [194, 134],
      [252, 118],
    ],
  ];

  const ARTERIAL_FLOW_PATHS = [
    [
      [354, 166],
      [314, 178],
      [284, 190],
      [276, 232],
      [264, 300],
      [234, 278],
      [224, 200],
      [220, 108],
      [212, 64],
      [170, 62],
      [158, 100],
    ],
    [
      [354, 204],
      [314, 200],
      [280, 204],
      [272, 248],
      [256, 314],
      [230, 266],
      [224, 184],
      [218, 96],
      [196, 62],
      [168, 72],
      [162, 114],
    ],
  ];

  const ELECTRICAL_PATHS = [
    [
      [108, 154],
      [136, 162],
      [168, 188],
      [196, 214],
    ],
    [
      [196, 214],
      [206, 258],
      [206, 318],
      [172, 336],
      [134, 302],
      [126, 252],
    ],
    [
      [196, 214],
      [208, 260],
      [212, 326],
      [258, 344],
      [294, 304],
      [300, 248],
    ],
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

    document.querySelectorAll(".tab-btn").forEach((b) => {
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
          <strong style="color:${ok ? "#34d399" : "#fb7185"}">${ok ? hl.quiz.correctMsg : hl.quiz.wrongMsg}</strong>
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
        venousCells.push({
          pathIdx: idx,
          t: i / 18,
          jitter: ((i % 5) - 2) * 1.4,
          radius: 2.8 + (i % 2) * 0.5,
        });
      }
    });

    const arterialCells = [];
    ARTERIAL_FLOW_PATHS.forEach((p, idx) => {
      for (let i = 0; i < 20; i++) {
        arterialCells.push({
          pathIdx: idx,
          t: i / 20,
          jitter: ((i % 5) - 2) * 1.4,
          radius: 3.0 + (i % 2) * 0.5,
        });
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
      const artColor = isLight ? "#dc2626" : "#ff3b6b";
      const venColor = isLight ? "#0284c7" : "#22d3ee";
      const elecColor = isLight ? "#d97706" : "#fbbf24";
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
          ? "rgba(220,38,38,0.5)"
          : "rgba(255,59,107,0.45)";
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
          ? "rgba(2,132,199,0.48)"
          : "rgba(34,211,238,0.42)";
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
      ctx.strokeStyle = isLight ? "rgba(220,38,38,0.42)" : "rgba(255,59,107,0.38)";
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
          ? "rgba(2,132,199,0.52)"
          : "rgba(34,211,238,0.46)";
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
      ctx.strokeStyle = isLight ? "#94a3b8" : "rgba(255,59,107,0.48)";
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

      // Right Atrium
      const raS = atrialContract * 4;
      drawChamber(
        () => {
          ctx.beginPath();
          ctx.ellipse(138, 184, 34 - raS, 30 - raS * 0.6, -0.15, 0, Math.PI * 2);
        },
        isLight ? "rgba(2,132,199,0.22)" : "rgba(34,211,238,0.22)",
        venColor,
        ui.selectedHotspot === "rightAtrium"
      );

      // Left Atrium
      drawChamber(
        () => {
          ctx.beginPath();
          ctx.ellipse(282, 184, 32 - raS, 28 - raS * 0.6, 0.15, 0, Math.PI * 2);
        },
        isLight ? "rgba(220,38,38,0.22)" : "rgba(255,59,107,0.24)",
        artColor,
        ui.selectedHotspot === "leftAtrium"
      );

      // Right Ventricle
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
        isLight ? "rgba(2,132,199,0.28)" : "rgba(34,211,238,0.26)",
        venColor,
        ui.selectedHotspot === "rightVentricle"
      );

      // Left Ventricle (Thick Myocardium)
      const lvS = ventricularSystole * 10;
      ctx.save();
      ctx.strokeStyle = isLight ? "rgba(185,28,28,0.28)" : "rgba(255,59,107,0.28)";
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
        isLight ? "rgba(220,38,38,0.28)" : "rgba(255,59,107,0.28)",
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
      ctx.shadowColor = venColor;
      ctx.shadowBlur = isLight ? 0 : 7;
      venousCells.forEach((c) => {
        if (!ui.paused) c.t = (c.t + spd * dt) % 1;
        const [px, py] = samplePolyline(VENOUS_FLOW_PATHS[c.pathIdx], c.t);
        ctx.beginPath();
        ctx.arc(px + c.jitter, py + c.jitter * 0.6, c.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.fillStyle = artColor;
      ctx.shadowColor = artColor;
      ctx.shadowBlur = isLight ? 0 : 9;
      arterialCells.forEach((c) => {
        if (!ui.paused) c.t = (c.t + spd * 1.08 * dt) % 1;
        const [px, py] = samplePolyline(ARTERIAL_FLOW_PATHS[c.pathIdx], c.t);
        ctx.beginPath();
        ctx.arc(px + c.jitter, py + c.jitter * 0.6, c.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.shadowBlur = 0;

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
      ctx.strokeStyle = isLight ? "rgba(15,23,42,0.12)" : "rgba(56,189,248,0.24)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(ecgLeft, ecgTop, ecgWidth, ecgHeight, 10);
      ctx.fill();
      ctx.stroke();

      ctx.strokeStyle = isLight ? "#059669" : "#34d399";
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

  document.addEventListener("DOMContentLoaded", () => {
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

    document.querySelectorAll(".tab-btn").forEach((b) => {
      b.addEventListener("click", () => {
        ui.activeTab = b.getAttribute("data-tab");
        renderReaderBody();
      });
    });

    syncHeartUI();
    BL.subscribe(syncHeartUI);
    startHeartCanvas();
  });
})();