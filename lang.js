(function () {
  const ORGAN_IDS = [
    "circulatory",
    "respiratory",
    "nervous",
    "digestive",
    "skeletal",
    "muscular",
    "urinary",
    "endocrine",
    "reproductive",
  ];

  const ORGAN_ICONS = {
    circulatory: "🫀",
    respiratory: "🫁",
    nervous: "🧠",
    digestive: "🍽️",
    skeletal: "🦴",
    muscular: "💪",
    urinary: "💧",
    endocrine: "✨",
    reproductive: "🧬",
  };

  // Dedicated live organ pages
  const ORGAN_PAGES = {
    circulatory: "circulatory.html",
    respiratory: "respiratory.html",
  };

  const DICT = {
    en: {
      brand: "BioLume",
      tagline: "Living Human Biology Atlas",
      nav: {
        bilingual: "EN Terms",
        darkMode: "Dark Lab",
        lightMode: "Atlas Light",
        backToBody: "Full Body View",
        chapterBadge: "Chapter 01 • Live Simulation",
      },
      stage: {
        male: "Male Body",
        female: "Female Body",
        xrayLabel: "Anatomical Depth",
        layers: ["Surface", "Muscular", "Skeletal", "Internal"],
        fpsBadge: "LIVE",
        activeSystem: "Active System",
        diveHint: "Tap the Heart or Lungs to open their live deep-dive pages",
        openDeepDive: "Open Heart & Blood Cells Page",
        openRespiratory: "Open Respiratory & Gas Exchange Page",
        comingSoonTitle: "Dedicated Organ Page Coming Next",
        comingSoonDesc:
          "This organ is illuminated on the live body stage. Its dedicated deep-dive page with detailed diagrams and real-time physiology animation will be added in the next update.",
        switchCirculatory: "Go to Circulatory System Page",
        oxygenated: "Oxygenated (Arterial)",
        deoxygenated: "Deoxygenated (Venous)",
      },
      dock: {
        title: "Organ Systems",
        subtitle: "Click an organ or system",
        liveTag: "LIVE",
        soonTag: "SOON",
        openPage: "Open Detailed Organ Page",
      },
      systems: {
        circulatory: {
          name: "Circulatory System",
          en: "Circulatory System",
          shortDesc: "Heart, arteries, veins, blood cells & 60 FPS blood flow",
        },
        respiratory: {
          name: "Respiratory System",
          en: "Respiratory System",
          shortDesc: "Lungs, trachea, diaphragm & alveoli O₂/CO₂ gas exchange",
        },
        nervous: {
          name: "Nervous System",
          en: "Nervous System",
          shortDesc: "Brain, spinal cord & real-time electrical nerve impulses",
        },
        digestive: {
          name: "Digestive System",
          en: "Digestive System",
          shortDesc: "Stomach, intestines & digestive wave motion",
        },
        skeletal: {
          name: "Skeletal System",
          en: "Skeletal System",
          shortDesc: "206 bones, ribcage, spine & structural frame",
        },
        muscular: {
          name: "Muscular System",
          en: "Muscular System",
          shortDesc: "Skeletal, smooth & cardiac muscle layers",
        },
        urinary: {
          name: "Urinary System",
          en: "Urinary System",
          shortDesc: "Kidneys & continuous filtration pulses",
        },
        endocrine: {
          name: "Endocrine System",
          en: "Endocrine System",
          shortDesc: "Hormone-secreting glands & signaling waves",
        },
        reproductive: {
          name: "Reproductive System",
          en: "Reproductive System",
          shortDesc: "Adapts automatically to Male & Female body view",
        },
      },
      heartLab: {
        title: "Human Heart — Live Cross-Section",
        subtitle: "Tap any chamber, vessel, or node to inspect real-time physiology",
        bpmControl: "Heart Rate (BPM)",
        presets: {
          rest: "Resting (65)",
          normal: "Normal (72)",
          walk: "Brisk Walk (110)",
          sprint: "Sprint (160)",
        },
        toggles: {
          electrical: "SA/AV Electrical Wave",
          labels: "Hotspot Pins",
          pause: "Pause",
          play: "Resume",
        },
        metrics: {
          bpm: "Heart Rate",
          output: "Cardiac Output",
          stroke: "Stroke Volume",
          phase: "Cardiac Phase",
          systole: "Ventricular Systole",
          diastole: "Ventricular Diastole",
          litersMin: "L/min",
          mlBeat: "mL/beat",
        },
        tabs: {
          inspect: "Anatomy Inspector",
          chapter: "Living Textbook",
          quiz: "Quick Check",
        },
        selectPrompt: "Tap any glowing pin on the heart diagram to read its structure and real-time role.",
        hotspots: {
          rightAtrium: {
            name: "Right Atrium",
            en: "Right Atrium",
            bloodType: "Deoxygenated Blood",
            summary:
              "Upper-right receiving chamber collecting oxygen-poor venous blood from the whole body via Superior and Inferior Vena Cava.",
            keyFact: "Houses the SA Node (natural pacemaker) in its upper wall.",
          },
          rightVentricle: {
            name: "Right Ventricle",
            en: "Right Ventricle",
            bloodType: "Deoxygenated Blood",
            summary:
              "Pumps deoxygenated blood upward through the pulmonary valve into the pulmonary artery toward the lungs.",
            keyFact: "Thinner wall than the left ventricle because the lungs sit right beside the heart.",
          },
          leftAtrium: {
            name: "Left Atrium",
            en: "Left Atrium",
            bloodType: "Oxygenated Blood",
            summary:
              "Receives oxygen-rich blood returning from the lungs via pulmonary veins and passes it through the mitral valve.",
            keyFact: "Contracts right before ventricular systole to complete left ventricular filling.",
          },
          leftVentricle: {
            name: "Left Ventricle",
            en: "Left Ventricle",
            bloodType: "Oxygenated Blood",
            summary:
              "Strongest pumping chamber of the heart. Ejects oxygenated blood through the aortic valve into the aorta for the entire body.",
            keyFact: "Its muscular myocardium is roughly 3× thicker than the right ventricle.",
          },
          aorta: {
            name: "Aorta",
            en: "Aorta",
            bloodType: "Oxygenated Blood",
            summary:
              "Largest artery in the human body. Its elastic arch cushions systolic pressure and sends oxygenated blood to head, arms, and body.",
            keyFact: "Branches first into coronary arteries that supply the heart muscle itself.",
          },
          pulmonaryArtery: {
            name: "Pulmonary Artery",
            en: "Pulmonary Artery",
            bloodType: "Deoxygenated Blood",
            summary:
              "Carries deoxygenated blood from the right ventricle to the lungs where CO₂ exits and fresh O₂ binds.",
            keyFact: "One of the rare arteries carrying deoxygenated blood.",
          },
          venaCava: {
            name: "Superior Vena Cava",
            en: "Superior Vena Cava",
            bloodType: "Deoxygenated Blood",
            summary:
              "Major vein returning deoxygenated blood from head, neck, arms, and upper thorax straight into the right atrium.",
            keyFact: "Flows under low pressure aided by breathing movements.",
          },
          saNode: {
            name: "SA Node (Pacemaker)",
            en: "Sinoatrial Node",
            bloodType: "Electrical Impulse",
            summary:
              "Specialized cardiac cells that fire rhythmic electrical impulses automatically, setting the heart's BPM.",
            keyFact: "Wave sweeps atria, pauses briefly at AV node, then drives ventricles via Purkinje fibers.",
          },
        },
        chapter: {
          heading: "Double Circulation & The Cardiac Cycle",
          sections: [
            {
              title: "1. Two Circuits in Sync",
              body: "Humans have a closed double circulatory system. The right side drives the Pulmonary Circuit (deoxygenated blood to lungs), while the left side drives the Systemic Circuit (oxygenated blood through the aorta to every organ).",
            },
            {
              title: "2. Systole, Diastole & Valves",
              body: "During Diastole, ventricles relax and fill. During Systole, ventricles contract to eject blood. Tricuspid, Pulmonary, Mitral, and Aortic valves open and close in sequence, preventing backflow.",
            },
            {
              title: "3. Electrical Conduction & BPM",
              body: "Each beat starts at the SA Node, moves to the AV Node, and spreads along Purkinje fibers. Drag the BPM slider to watch heart rate, ECG speed, and Cardiac Output respond live.",
            },
          ],
        },
        quiz: {
          title: "Quick Recall Check",
          correctMsg: "Correct! Great grasp of the physiology.",
          wrongMsg: "Not quite — review the explanation below.",
          nextBtn: "Next Question",
          restartBtn: "Restart Quiz",
          scoreLabel: "Score",
          questions: [
            {
              q: "Which heart chamber has the thickest muscular wall to pump blood to the whole body?",
              options: ["Right Atrium", "Right Ventricle", "Left Atrium", "Left Ventricle"],
              answer: 3,
              explain: "The Left Ventricle generates high pressure to push oxygenated blood through the aorta.",
            },
            {
              q: "Which vessel carries deoxygenated blood from the right ventricle to the lungs?",
              options: ["Aorta", "Pulmonary Artery", "Pulmonary Vein", "Coronary Artery"],
              answer: 1,
              explain: "The Pulmonary Artery transports oxygen-poor blood to the lungs for gas exchange.",
            },
            {
              q: "Which structure acts as the heart's natural pacemaker?",
              options: ["Mitral Valve", "SA Node", "Superior Vena Cava", "Septum"],
              answer: 1,
              explain: "The Sinoatrial (SA) Node initiates the rhythmic electrical wave of each heartbeat.",
            },
          ],
        },
      },

      // =========================================================
      // BLOOD & BLOOD CELLS LAB (BELOW HEART FUNCTIONALITIES)
      // =========================================================
      bloodLab: {
        title: "Blood & Blood Cells — Live Microscope Lab",
        subtitle:
          "Explore all blood cell names, shapes, characteristics, WBC divisions, real-time animations & Class 9–10 lesson plan",
        introTitle: "The 3 Blood Cells (45% of Blood) Suspended in Plasma (55%)",
        introSummary:
          "Human blood is a fluid connective tissue made of straw-colored Plasma (55%) and 3 Formed Elements / Blood Cells (45%): Red Blood Cells (Erythrocytes), White Blood Cells (Leukocytes — divided into Granulocytes & Agranulocytes), and Platelets (Thrombocytes).",
        modes: {
          stream: "Bloodstream",
          rbc: "RBC O₂ Flex",
          wbc: "WBC 5 Types & Defense",
          platelet: "Platelet Clotting",
        },
        toggles: {
          pause: "Pause",
          play: "Resume",
        },
        tabs: {
          inspect: "Cell Atlas",
          lesson: "Class 9–10 Lesson",
          quiz: "Blood Quiz",
        },
        labels: {
          shape: "Shape",
          characteristics: "Characteristics",
          work: "Primary Work (Function)",
          divisions: "Divisions & Subtypes",
          selectPrompt: "Select any blood component below to study its shape, traits, divisions, and role.",
        },
        canvasText: {
          streamTitle: "LIVE BLOODSTREAM • Plasma (55%) + RBC, WBC & Platelets (45%)",
          rbcTitle: "ERYTHROCYTES (RBC) • Biconcave Discs Carrying O₂ (Hb + O₂ → HbO₂)",
          wbcTitle: "LEUKOCYTES (WBC) • 5 Subtypes & Live Phagocytosis of Bacteria",
          plateletTitle: "THROMBOCYTES (PLATELETS) • Fibrin Mesh Sealing Vessel Injury",
          injuryLabel: "Vessel Wall Injury → Fibrin Clot",
          phagoLabel: "Neutrophil engulfing pathogen",
        },
        cells: {
          rbc: {
            name: "Red Blood Cells (RBC)",
            en: "Erythrocytes",
            badge: "4.5–5.5 Million / mm³ • Lifespan: ~120 Days",
            shape:
              "Biconcave, circular disc (thin at the center, thicker at the rim). This shape increases surface area for rapid O₂ diffusion and lets RBCs bend smoothly through tiny capillaries.",
            characteristics:
              "Non-nucleated when mature (in mammals) to pack more hemoglobin; red color due to iron-rich Hemoglobin (Hb); formed in red bone marrow and destroyed in the spleen ('graveyard of RBCs').",
            work:
              "Transports oxygen from lungs to all body cells as Oxyhemoglobin (HbO₂) and helps carry a portion of CO₂ back to the lungs.",
            divisions: "No subtypes — uniform oxygen-carrying cells.",
          },
          wbc: {
            name: "White Blood Cells (WBC)",
            en: "Leukocytes",
            badge: "4,000–11,000 / mm³ • Lifespan: Days to Years",
            shape:
              "Irregular / amoeboid shape. They can squeeze out of blood capillary walls (diapedesis) to reach infected tissues.",
            characteristics:
              "Colorless (no hemoglobin), possess a distinct nucleus whose shape identifies each subtype; formed in bone marrow and lymphoid tissues. Known as the 'soldiers of the body'.",
            work:
              "Defends the body against bacteria, viruses, and parasites through phagocytosis (engulfing germs) and antibody production.",
            divisions:
              "2 Main Divisions → 5 Subtypes:\n• Granulocytes (granular cytoplasm, lobed nucleus): (1) Neutrophils (60–65%, 3–5 lobed nucleus — engulf bacteria), (2) Eosinophils (2–3%, bilobed nucleus — fight parasites & allergy), (3) Basophils (0.5–1%, S-shaped nucleus — release histamine & heparin).\n• Agranulocytes (clear cytoplasm, non-lobed nucleus): (4) Lymphocytes (20–25%, large round nucleus — make antibodies & kill virus cells), (5) Monocytes (6–8%, largest WBC, kidney-shaped nucleus — become macrophages).",
          },
          platelets: {
            name: "Platelets",
            en: "Thrombocytes",
            badge: "1.5–4.5 Lakh / mm³ • Lifespan: 7–10 Days",
            shape:
              "Tiny, irregular, oval or spindle-shaped cell fragments (broken off from giant megakaryocyte cells in bone marrow).",
            characteristics:
              "Non-nucleated, colorless, smallest formed elements in blood; instantly turn spiky and sticky when they touch a damaged blood vessel.",
            work:
              "Blood Clotting (Coagulation): release thromboplastin at a cut, triggering a chain reaction that turns soluble Fibrinogen into an insoluble Fibrin thread mesh to trap RBCs and stop bleeding.",
            divisions: "No subtypes — activate from resting discs to spiky clotting fragments.",
          },
          plasma: {
            name: "Blood Plasma",
            en: "Fluid Matrix (55%)",
            badge: "90–92% Water • 6–8% Proteins",
            shape: "Straw-colored liquid medium in which all blood cells float and flow.",
            characteristics:
              "Contains water, plasma proteins (Albumin for osmotic balance, Globulin for immunity, Fibrinogen for clotting), glucose, hormones, salts, and dissolved CO₂.",
            work:
              "Transports digested nutrients, hormones, excretory wastes (urea), heat, and most CO₂ (as bicarbonate ions) throughout the body.",
            divisions: "Plasma minus clotting factors (Fibrinogen) is called Serum.",
          },
        },
        lesson: {
          heading: "Class 9–10 Lesson Plan: Composition of Blood & Blood Cells",
          sections: [
            {
              title: "1. Definition & Composition of Blood",
              html: `<p><strong>Blood</strong> is a red-colored <em>fluid connective tissue</em> (slightly alkaline, pH ~7.4) that circulates through vessels to transport O₂, nutrients, hormones, and wastes.</p>
              <p style="margin-top:6px">• <strong>Plasma (55%):</strong> Liquid matrix (90–92% water + Albumin, Globulin, Fibrinogen).<br/>• <strong>Formed Elements / Blood Cells (45%):</strong> (1) <strong>Erythrocytes (RBC)</strong>, (2) <strong>Leukocytes (WBC)</strong>, and (3) <strong>Thrombocytes (Platelets)</strong>.</p>`,
            },
            {
              title: "2. Erythrocytes (RBC) — Structure Fits Function",
              html: `<p>• <strong>Shape:</strong> Biconcave disc (larger surface area for gas exchange + flexible in capillaries).<br/>• <strong>No Nucleus:</strong> Mature human RBCs lack a nucleus and mitochondria so they can pack ~280 million Hemoglobin molecules and don't consume the O₂ they carry.<br/>• <strong>Equation:</strong> Hb + 4O₂ ⇌ Hb(O₂)₄ (Oxyhemoglobin).</p>`,
            },
            {
              title: "3. Leukocytes (WBC) — The Two Major Divisions",
              html: `<p><strong>A. Granulocytes</strong> (granules in cytoplasm, lobed nucleus):<br/>• <em>Neutrophils</em> (multi-lobed): First responders; destroy bacteria by <strong>phagocytosis</strong>.<br/>• <em>Eosinophils</em> (bilobed): Combat parasitic worms and moderate allergic reactions.<br/>• <em>Basophils</em> (S-shaped): Release <strong>histamine</strong> (inflammation) and <strong>heparin</strong> (natural anticoagulant).</p>
              <p style="margin-top:6px"><strong>B. Agranulocytes</strong> (clear cytoplasm, unlobed nucleus):<br/>• <em>Lymphocytes</em> (large round nucleus): B-lymphocytes secrete <strong>antibodies</strong>; T-lymphocytes destroy infected cells.<br/>• <em>Monocytes</em> (kidney-shaped nucleus, largest WBC): Enter tissues as <strong>macrophages</strong> to clean up germs and dead cells.</p>`,
            },
            {
              title: "4. Thrombocytes (Platelets) & Blood Clotting Cascade",
              html: `<p>When a blood vessel is cut, blood loss is stopped in 3 clear steps (needs <strong>Ca²⁺ ions</strong> and <strong>Vitamin K</strong>):</p>
              <div class="detail-fact" style="margin-top:8px">1. Injured tissue &amp; Platelets release <strong>Thromboplastin</strong>.<br/>2. Inactive Prothrombin ──(Ca²⁺)──► active <strong>Thrombin</strong>.<br/>3. Soluble Fibrinogen ──(Thrombin)──► insoluble <strong>Fibrin mesh</strong> + trapped RBCs = <strong>Blood Clot</strong>.</div>`,
            },
          ],
        },
        quiz: {
          title: "Blood Cells Quick Check",
          correctMsg: "Correct! Spot-on biology.",
          wrongMsg: "Not quite — check the explanation below.",
          nextBtn: "Next Question",
          restartBtn: "Restart Quiz",
          scoreLabel: "Score",
          questions: [
            {
              q: "Why do mature human Red Blood Cells (Erythrocytes) lack a nucleus?",
              options: [
                "To make them heavier in plasma",
                "To create more space for Hemoglobin and carry more O₂",
                "To help them produce antibodies",
                "To help them form fibrin threads",
              ],
              answer: 1,
              explain:
                "Losing the nucleus creates a biconcave shape with maximum internal space for oxygen-binding Hemoglobin.",
            },
            {
              q: "Which WBC subtype has a large round nucleus and produces antibodies?",
              options: ["Neutrophil", "Eosinophil", "Lymphocyte", "Basophil"],
              answer: 2,
              explain:
                "Lymphocytes (an agranulocyte with a large spherical nucleus) drive antibody-mediated and cell-mediated immunity.",
            },
            {
              q: "Which of the following is the LARGEST White Blood Cell with a kidney-shaped nucleus?",
              options: ["Monocyte", "Neutrophil", "Basophil", "Platelet"],
              answer: 0,
              explain: "Monocytes are the largest leukocytes and transform into macrophages inside tissues.",
            },
            {
              q: "Which plasma protein is converted into insoluble threads by thrombin to form a blood clot?",
              options: ["Hemoglobin", "Albumin", "Fibrinogen", "Heparin"],
              answer: 2,
              explain: "Thrombin converts soluble Fibrinogen into an insoluble Fibrin mesh that seals the wound.",
            },
            {
              q: "Which organ is known as the 'graveyard of RBCs' where worn-out RBCs are broken down after ~120 days?",
              options: ["Heart", "Spleen", "Lungs", "Pancreas"],
              answer: 1,
              explain: "Old and fragile RBCs are broken down primarily in the spleen (and liver), recycling their iron.",
            },
          ],
        },
      },
    },

    hi: {
      brand: "BioLume",
      tagline: "जीवंत मानव जीवविज्ञान एटलस",
      nav: {
        bilingual: "EN शब्द",
        darkMode: "डार्क लैब",
        lightMode: "लाइट एटलस",
        backToBody: "पूर्ण शरीर दृश्य",
        chapterBadge: "अध्याय 01 • लाइव सिमुलेशन",
      },
      stage: {
        male: "पुरुष शरीर",
        female: "महिला शरीर",
        xrayLabel: "शारीरिक गहराई (X-Ray)",
        layers: ["बाहरी", "पेशी", "कंकाल", "आंतरिक"],
        fpsBadge: "लाइव",
        activeSystem: "सक्रिय तंत्र",
        diveHint: "विस्तृत लाइव लैब पेज खोलने के लिए हृदय या फेफड़ों पर टैप करें",
        openDeepDive: "हृदय और रक्त कोशिका पेज खोलें",
        openRespiratory: "श्वसन और गैस विनिमय पेज खोलें",
        comingSoonTitle: "अगला अंग पेज शीघ्र आ रहा है",
        comingSoonDesc:
          "यह अंग शरीर मानचित्र पर सक्रिय दिख रहा है। विस्तृत चित्र और लाइव एनीमेशन वाला इसका अलग पेज अगले अपडेट में जोड़ा जाएगा।",
        switchCirculatory: "परिसंचरण तंत्र पेज पर जाएँ",
        oxygenated: "ऑक्सीजनयुक्त (धमनी)",
        deoxygenated: "ऑक्सीजनरहित (शिरा)",
      },
      dock: {
        title: "अंग तंत्र",
        subtitle: "अंग या तंत्र चुनें",
        liveTag: "लाइव",
        soonTag: "शीघ्र",
        openPage: "विस्तृत अंग पेज खोलें",
      },
      systems: {
        circulatory: {
          name: "परिसंचरण तंत्र",
          en: "Circulatory System",
          shortDesc: "हृदय, धमनियाँ, शिराएँ, रक्त कोशिकाएँ और 60 FPS रक्त प्रवाह",
        },
        respiratory: {
          name: "श्वसन तंत्र",
          en: "Respiratory System",
          shortDesc: "फेफड़े, श्वासनली, डायाफ्राम और कूपिका O₂/CO₂ विनिमय",
        },
        nervous: {
          name: "तंत्रिका तंत्र",
          en: "Nervous System",
          shortDesc: "मस्तिष्क, मेरुरज्जु और विद्युत तंत्रिका संकेत",
        },
        digestive: {
          name: "पाचन तंत्र",
          en: "Digestive System",
          shortDesc: "आमाशय, आँतें और पाचन तरंग गति",
        },
        skeletal: {
          name: "कंकाल तंत्र",
          en: "Skeletal System",
          shortDesc: "206 हड्डियाँ, पसलियाँ, रीढ़ और ढाँचा",
        },
        muscular: {
          name: "पेशी तंत्र",
          en: "Muscular System",
          shortDesc: "कंकाल, चिकनी और हृदय पेशी परतें",
        },
        urinary: {
          name: "मूत्र तंत्र",
          en: "Urinary System",
          shortDesc: "वृक्क (किडनी) और निरंतर रक्त शोधन",
        },
        endocrine: {
          name: "अंतःस्रावी तंत्र",
          en: "Endocrine System",
          shortDesc: "हार्मोन ग्रंथियाँ और रासायनिक संकेत",
        },
        reproductive: {
          name: "प्रजनन तंत्र",
          en: "Reproductive System",
          shortDesc: "पुरुष और महिला शरीर के अनुसार स्वतः बदलता है",
        },
      },
      heartLab: {
        title: "मानव हृदय — लाइव क्रॉस-सेक्शन",
        subtitle: "लाइव कार्यप्रणाली समझने के लिए किसी भी कक्ष, नलिका या नोड पर टैप करें",
        bpmControl: "हृदय गति (BPM)",
        presets: {
          rest: "विश्राम (65)",
          normal: "सामान्य (72)",
          walk: "तेज़ चाल (110)",
          sprint: "दौड़ (160)",
        },
        toggles: {
          electrical: "SA/AV विद्युत तरंग",
          labels: "हॉटस्पॉट पिन",
          pause: "रोकें",
          play: "चलाएँ",
        },
        metrics: {
          bpm: "हृदय गति",
          output: "कार्डियक आउटपुट",
          stroke: "स्ट्रोक वॉल्यूम",
          phase: "हृदय चक्र चरण",
          systole: "निलय संकुचन (Systole)",
          diastole: "निलय शिथिलन (Diastole)",
          litersMin: "ली/मिनट",
          mlBeat: "मि.ली./धड़कन",
        },
        tabs: {
          inspect: "अंग निरीक्षक",
          chapter: "जीवंत पाठ्यपुस्तक",
          quiz: "त्वरित जाँच",
        },
        selectPrompt: "संरचना और कार्य पढ़ने के लिए हृदय चित्र के किसी भी पिन पर टैप करें।",
        hotspots: {
          rightAtrium: {
            name: "दायाँ अलिंद",
            en: "Right Atrium",
            bloodType: "ऑक्सीजनरहित रक्त",
            summary:
              "ऊपरी दायाँ कक्ष जो ऊर्ध्व और निम्न महाशिरा द्वारा पूरे शरीर से ऑक्सीजनरहित रक्त ग्रहण करता है।",
            keyFact: "इसकी ऊपरी दीवार में SA नोड (प्राकृतिक पेसमेकर) स्थित है।",
          },
          rightVentricle: {
            name: "दायाँ निलय",
            en: "Right Ventricle",
            bloodType: "ऑक्सीजनरहित रक्त",
            summary:
              "ऑक्सीजनरहित रक्त को फुफ्फुसीय वाल्व और फुफ्फुसीय धमनी के रास्ते फेफड़ों तक पंप करता है।",
            keyFact: "फेफड़े पास होने के कारण इसकी दीवार बाएँ निलय से पतली होती है।",
          },
          leftAtrium: {
            name: "बायाँ अलिंद",
            en: "Left Atrium",
            bloodType: "ऑक्सीजनयुक्त रक्त",
            summary:
              "फेफड़ों से फुफ्फुसीय शिराओं द्वारा आने वाले ऑक्सीजनयुक्त रक्त को लेकर माइट्रल वाल्व से आगे भेजता है।",
            keyFact: "निलय संकुचन से ठीक पहले सिकुड़कर बाएँ निलय को भरता है।",
          },
          leftVentricle: {
            name: "बायाँ निलय",
            en: "Left Ventricle",
            bloodType: "ऑक्सीजनयुक्त रक्त",
            summary:
              "हृदय का सबसे शक्तिशाली कक्ष जो ऑक्सीजनयुक्त रक्त को महाधमनी द्वारा पूरे शरीर में पंप करता है।",
            keyFact: "इसकी पेशीय दीवार दाएँ निलय से लगभग 3 गुना मोटी होती है।",
          },
          aorta: {
            name: "महाधमनी",
            en: "Aorta",
            bloodType: "ऑक्सीजनयुक्त रक्त",
            summary:
              "शरीर की सबसे बड़ी धमनी जो उच्च दाब को संभालती है और मस्तिष्क, भुजाओं व शरीर को शुद्ध रक्त देती है।",
            keyFact: "इसकी पहली शाखाएँ कोरोनरी धमनियाँ हृदय की पेशी को रक्त देती हैं।",
          },
          pulmonaryArtery: {
            name: "फुफ्फुसीय धमनी",
            en: "Pulmonary Artery",
            bloodType: "ऑक्सीजनरहित रक्त",
            summary:
              "दाएँ निलय से ऑक्सीजनरहित रक्त फेफड़ों तक ले जाती है, जहाँ CO₂ बाहर निकलती है और O₂ जुड़ती है।",
            keyFact: "यह शरीर की उन चुनिंदा धमनियों में है जो ऑक्सीजनरहित रक्त ले जाती है।",
          },
          venaCava: {
            name: "ऊर्ध्व महाशिरा",
            en: "Superior Vena Cava",
            bloodType: "ऑक्सीजनरहित रक्त",
            summary:
              "सिर, गर्दन, हाथों और ऊपरी छाती से ऑक्सीजनरहित रक्त सीधे दाएँ अलिंद में पहुँचाने वाली मुख्य शिरा।",
            keyFact: "कम दाब पर बहती है और श्वास गति से प्रवाह को सहारा मिलता है।",
          },
          saNode: {
            name: "एसए नोड (पेसमेकर)",
            en: "Sinoatrial Node",
            bloodType: "विद्युत आवेग",
            summary:
              "विशेष हृदय कोशिकाओं का समूह जो स्वतः नियमित विद्युत संकेत बनाकर BPM तय करता है।",
            keyFact: "तरंग अलिंदों में फैलती है, AV नोड पर थोड़ा रुकती है और पर्किन्जे तंतुओं से निलयों तक जाती है।",
          },
        },
        chapter: {
          heading: "दोहरा परिसंचरण और हृदय चक्र",
          sections: [
            {
              title: "1. एक साथ चलते दो परिपथ",
              body: "मनुष्य में बंद दोहरा परिसंचरण होता है। दायाँ भाग फुफ्फुसीय परिपथ (फेफड़ों तक) और बायाँ भाग दैहिक परिपथ (महाधमनी द्वारा पूरे शरीर तक) चलाता है।",
            },
            {
              title: "2. सिस्टोल, डायस्टोल और वाल्व",
              body: "डायस्टोल में निलय भरते हैं और सिस्टोल में सिकुड़कर रक्त पंप करते हैं। चारों वाल्व रक्त को उल्टा बहने से रोकते हैं।",
            },
            {
              title: "3. विद्युत चालन और BPM",
              body: "प्रत्येक धड़कन SA नोड से शुरू होकर AV नोड व पर्किन्जे तंतुओं से गुजरती है। BPM स्लाइडर बदलकर लाइव गति देखें।",
            },
          ],
        },
        quiz: {
          title: "त्वरित अभ्यास प्रश्न",
          correctMsg: "बिल्कुल सही! अवधारणा स्पष्ट है।",
          wrongMsg: "सही नहीं — नीचे दिया गया स्पष्टीकरण देखें।",
          nextBtn: "अगला प्रश्न",
          restartBtn: "फिर से शुरू करें",
          scoreLabel: "स्कोर",
          questions: [
            {
              q: "पूरे शरीर में रक्त पंप करने के लिए हृदय के किस कक्ष की दीवार सबसे मोटी होती है?",
              options: ["दायाँ अलिंद", "दायाँ निलय", "बायाँ अलिंद", "बायाँ निलय"],
              answer: 3,
              explain: "बायाँ निलय उच्च दाब बनाकर महाधमनी में रक्त पंप करता है।",
            },
            {
              q: "कौन-सी नलिका दाएँ निलय से ऑक्सीजनरहित रक्त फेफड़ों तक ले जाती है?",
              options: ["महाधमनी", "फुफ्फुसीय धमनी", "फुफ्फुसीय शिरा", "कोरोनरी धमनी"],
              answer: 1,
              explain: "फुफ्फुसीय धमनी ऑक्सीजनरहित रक्त को गैस विनिमय के लिए फेफड़ों में ले जाती है।",
            },
            {
              q: "हृदय का प्राकृतिक पेसमेकर कौन-सा है?",
              options: ["माइट्रल वाल्व", "SA नोड", "ऊर्ध्व महाशिरा", "सेप्टम"],
              answer: 1,
              explain: "SA नोड हृदय की स्वाभाविक विद्युत लय शुरू करता है।",
            },
          ],
        },
      },

      bloodLab: {
        title: "रक्त और रक्त कोशिकाएँ — लाइव माइक्रोस्कोप लैब",
        subtitle:
          "सभी रक्त कोशिकाओं के नाम, आकार, विशेषताएँ, WBC के प्रकार, लाइव एनीमेशन और कक्षा 9–10 पाठ योजना",
        introTitle: "प्लाज़्मा (55%) में तैरती 3 मुख्य रक्त कोशिकाएँ (45%)",
        introSummary:
          "मानव रक्त एक तरल संयोजी ऊतक है जो प्लाज़्मा (55%) और 3 रक्त कणिकाओं (45%) से बना है: लाल रक्त कोशिकाएँ (RBC / Erythrocytes), श्वेत रक्त कोशिकाएँ (WBC / Leukocytes — कणिकामय व अकणिकामय में विभाजित), और प्लेटलेट्स (Thrombocytes)।",
        modes: {
          stream: "रक्त प्रवाह",
          rbc: "RBC ऑक्सीजन",
          wbc: "WBC 5 प्रकार व रक्षा",
          platelet: "रक्त का थक्का",
        },
        toggles: {
          pause: "रोकें",
          play: "चलाएँ",
        },
        tabs: {
          inspect: "कोशिका एटलस",
          lesson: "कक्षा 9–10 पाठ",
          quiz: "रक्त प्रश्नोत्तरी",
        },
        labels: {
          shape: "आकार",
          characteristics: "विशेषताएँ",
          work: "मुख्य कार्य",
          divisions: "विभाजन और प्रकार",
          selectPrompt: "आकार, विशेषताएँ, विभाजन और कार्य पढ़ने के लिए किसी भी रक्त घटक को चुनें।",
        },
        canvasText: {
          streamTitle: "लाइव रक्त प्रवाह • प्लाज़्मा (55%) + RBC, WBC व प्लेटलेट्स (45%)",
          rbcTitle: "लाल रक्त कोशिका (RBC) • उभयावतल डिस्क (Hb + O₂ → HbO₂)",
          wbcTitle: "श्वेत रक्त कोशिका (WBC) • 5 प्रकार व जीवाणु भक्षण (Phagocytosis)",
          plateletTitle: "प्लेटलेट्स (Thrombocytes) • घाव पर फाइब्रिन जाल द्वारा थक्का",
          injuryLabel: "चोट का स्थान → फाइब्रिन थक्का",
          phagoLabel: "न्यूट्रोफिल जीवाणु को निगलते हुए",
        },
        cells: {
          rbc: {
            name: "लाल रक्त कोशिकाएँ (RBC)",
            en: "Erythrocytes",
            badge: "45–55 लाख / मिमी³ • जीवनकाल: ~120 दिन",
            shape:
              "उभयावतल (Biconcave) गोल डिस्क—बीच से पतली और किनारों से मोटी। इससे गैस विनिमय का सतह क्षेत्र बढ़ता है और ये पतली केशिकाओं से मुड़कर गुजर सकती हैं।",
            characteristics:
              "परिपक्व अवस्था में केंद्रक नहीं होता (स्तनधारियों में) ताकि अधिक हीमोग्लोबिन समा सके; लाल अस्थि मज्जा में निर्माण और प्लीहा (Spleen — RBC का कब्रिस्तान) में विनाश होता है।",
            work: "फेफड़ों से पूरे शरीर की कोशिकाओं तक ऑक्सीहीमोग्लोबिन (HbO₂) के रूप में O₂ पहुँचाना और CO₂ वापस लाना।",
            divisions: "कोई उप-प्रकार नहीं — एकसमान ऑक्सीजन वाहक कोशिकाएँ।",
          },
          wbc: {
            name: "श्वेत रक्त कोशिकाएँ (WBC)",
            en: "Leukocytes",
            badge: "4,000–11,000 / मिमी³ • जीवनकाल: कुछ दिन से वर्ष",
            shape: "अनियमित / अमीबीय (Amoeboid) आकार — केशिकाओं की दीवार से बाहर निकलकर संक्रमण स्थल तक पहुँच सकती हैं।",
            characteristics:
              "रंगहीन (हीमोग्लोबिन नहीं), स्पष्ट केंद्रक उपस्थित (जिसके आकार से उप-प्रकार पहचाने जाते हैं)। इन्हें 'शरीर के सैनिक' कहा जाता है।",
            work: "जीवाणु, विषाणु व परजीवियों को भक्षण (Phagocytosis) और एंटीबॉडी निर्माण द्वारा नष्ट कर रोगों से रक्षा करना।",
            divisions:
              "2 मुख्य भाग → 5 उप-प्रकार:\n• कणिकामय (Granulocytes): (1) न्यूट्रोफिल (60–65%, बहु-पालित केंद्रक — जीवाणु भक्षण), (2) इओसिनोफिल (2–3%, द्वि-पालित — परजीवी व एलर्जी नियंत्रण), (3) बेसोफिल (0.5–1%, S-आकार — हिस्टामाइन व हेपारिन स्राव)।\n• अकणिकामय (Agranulocytes): (4) लिम्फोसाइट (20–25%, बड़ा गोल केंद्रक — एंटीबॉडी निर्माण), (5) मोनोसाइट (6–8%, सबसे बड़ी WBC, सेम के आकार का केंद्रक — मैक्रोफेज बनकर सफाई)।",
          },
          platelets: {
            name: "प्लेटलेट्स (बिंबाणु)",
            en: "Thrombocytes",
            badge: "1.5–4.5 लाख / मिमी³ • जीवनकाल: 7–10 दिन",
            shape: "अत्यंत छोटे, अनियमित या तर्कु-आकार के कोशिका खंड (अस्थि मज्जा के मेगाकैरियोसाइट से बने)।",
            characteristics: "केंद्रकविहीन, रंगहीन, रक्त की सबसे छोटी कणिकाएँ; चोट लगते ही चिपचिपी व कांटेदार हो जाती हैं।",
            work: "रक्त का थक्का जमाना (Blood Clotting): थ्रोम्बोप्लास्टिन छोड़कर घुलनशील फाइब्रिनोजन को अघुलनशील फाइब्रिन जाल में बदलती हैं जिससे रक्तस्राव रुकता है।",
            divisions: "कोई उप-प्रकार नहीं — चोट पर सक्रिय होकर थक्का बनाती हैं।",
          },
          plasma: {
            name: "रक्त प्लाज़्मा",
            en: "Fluid Matrix (55%)",
            badge: "90–92% जल • 6–8% प्रोटीन",
            shape: "हल्के पीले रंग का तरल माध्यम जिसमें सभी रक्त कोशिकाएँ तैरती हैं।",
            characteristics: "इसमें जल, एल्ब्यूमिन, ग्लोब्यूलिन, फाइब्रिनोजन प्रोटीन, ग्लूकोज़, हार्मोन, लवण और घुली हुई CO₂ होती है।",
            work: "पचे हुए पोषक तत्व, हार्मोन, यूरिया (अपशिष्ट), ऊष्मा और अधिकांश CO₂ का परिवहन।",
            divisions: "थक्का प्रोटीन (फाइब्रिनोजन) रहित प्लाज़्मा को सीरम (Serum) कहते हैं।",
          },
        },
        lesson: {
          heading: "कक्षा 9–10 पाठ योजना: रक्त और रक्त कोशिकाएँ",
          sections: [
            {
              title: "1. रक्त की परिभाषा व संघटन",
              html: `<p><strong>रक्त</strong> एक लाल रंग का <em>तरल संयोजी ऊतक</em> (pH ~7.4) है। इसमें <strong>प्लाज़्मा (55%)</strong> और तीन रक्त कणिकाएँ <strong>(45%)</strong> होती हैं: <strong>RBC (Erythrocytes)</strong>, <strong>WBC (Leukocytes)</strong> और <strong>Platelets (Thrombocytes)</strong>।</p>`,
            },
            {
              title: "2. लाल रक्त कोशिका (RBC) का विज्ञान",
              html: `<p>• उभयावतल आकार और केंद्रक की अनुपस्थिति के कारण अधिक हीमोग्लोबिन समाता है।<br/>• <strong>समीकरण:</strong> Hb + 4O₂ ⇌ Hb(O₂)₄ (ऑक्सीहीमोग्लोबिन)।</p>`,
            },
            {
              title: "3. श्वेत रक्त कोशिका (WBC) के दोनों विभाजन",
              html: `<p><strong>कणिकामय (Granulocytes):</strong> न्यूट्रोफिल (जीवाणु भक्षण), इओसिनोफिल (एलर्जी/परजीवी), बेसोफिल (हिस्टामाइन/हेपारिन)।<br/><strong>अकणिकामय (Agranulocytes):</strong> लिम्फोसाइट (एंटीबॉडी निर्माण), मोनोसाइट (सबसे बड़ी WBC, मैक्रोफेज)।</p>`,
            },
            {
              title: "4. प्लेटलेट्स और रक्त का थक्का (Coagulation)",
              html: `<p>चोट लगने पर (<strong>Ca²⁺</strong> व <strong>विटामिन K</strong> की सहायता से):</p>
              <div class="detail-fact" style="margin-top:8px">1. प्लेटलेट्स → <strong>थ्रोम्बोप्लास्टिन</strong><br/>2. प्रोथ्रोम्बिन → सक्रिय <strong>थ्रोम्बिन</strong><br/>3. फाइब्रिनोजन → अघुलनशील <strong>फाइब्रिन जाल</strong> + RBC = <strong>रक्त का थक्का</strong></div>`,
            },
          ],
        },
        quiz: {
          title: "रक्त कोशिका प्रश्नोत्तरी",
          correctMsg: "बिल्कुल सही! अवधारणा स्पष्ट है।",
          wrongMsg: "सही नहीं — नीचे दिया गया स्पष्टीकरण देखें।",
          nextBtn: "अगला प्रश्न",
          restartBtn: "फिर से शुरू करें",
          scoreLabel: "स्कोर",
          questions: [
            {
              q: "परिपक्व मानव लाल रक्त कोशिका (RBC) में केंद्रक क्यों नहीं होता?",
              options: [
                "रक्त को भारी बनाने के लिए",
                "अधिक हीमोग्लोबिन और O₂ ले जाने हेतु स्थान बढ़ाने के लिए",
                "एंटीबॉडी बनाने के लिए",
                "फाइब्रिन धागे बनाने के लिए",
              ],
              answer: 1,
              explain: "केंद्रक न होने से RBC में अधिक हीमोग्लोबिन समाता है और ऑक्सीजन परिवहन बढ़ता है।",
            },
            {
              q: "किस WBC में बड़ा गोल केंद्रक होता है और यह एंटीबॉडी बनाती है?",
              options: ["न्यूट्रोफिल", "इओसिनोफिल", "लिम्फोसाइट", "बेसोफिल"],
              answer: 2,
              explain: "लिम्फोसाइट (अकणिकामय WBC) एंटीबॉडी बनाकर प्रतिरक्षा प्रदान करती है।",
            },
            {
              q: "सेम के आकार के केंद्रक वाली सबसे बड़ी श्वेत रक्त कोशिका कौन-सी है?",
              options: ["मोनोसाइट", "न्यूट्रोफिल", "बेसोफिल", "प्लेटलेट"],
              answer: 0,
              explain: "मोनोसाइट सबसे बड़ी WBC है जो ऊतकों में मैक्रोफेज बन जाती है।",
            },
            {
              q: "थक्का जमाने के लिए थ्रोम्बिन किस प्लाज़्मा प्रोटीन को अघुलनशील जाल में बदलता है?",
              options: ["हीमोग्लोबिन", "एल्ब्यूमिन", "फाइब्रिनोजन", "हेपारिन"],
              answer: 2,
              explain: "फाइब्रिनोजन से फाइब्रिन के महीन धागों का जाल बनता है जो रक्तस्राव रोकता है।",
            },
            {
              q: "किसे 'RBC का कब्रिस्तान' कहा जाता है?",
              options: ["हृदय", "प्लीहा (Spleen)", "फेफड़े", "अग्न्याशय"],
              answer: 1,
              explain: "लगभग 120 दिन बाद पुरानी RBC प्लीहा (Spleen) में नष्ट होती हैं।",
            },
          ],
        },
      },
    },

    bn: {
      brand: "BioLume",
      tagline: "জীবন্ত মানব জীববিজ্ঞান অ্যাটলাস",
      nav: {
        bilingual: "EN পরিভাষা",
        darkMode: "ডার্ক ল্যাব",
        lightMode: "লাইট অ্যাটলাস",
        backToBody: "সম্পূর্ণ দেহ দৃশ্য",
        chapterBadge: "অধ্যায় ০১ • লাইভ সিমুলেশন",
      },
      stage: {
        male: "পুরুষ দেহ",
        female: "নারী দেহ",
        xrayLabel: "অ্যানাটমিক্যাল স্তর (X-Ray)",
        layers: ["বাহ্যিক", "পেশী", "কঙ্কাল", "অভ্যন্তরীণ"],
        fpsBadge: "লাইভ",
        activeSystem: "সক্রিয় তন্ত্র",
        diveHint: "লাইভ ল্যাব পেজ খুলতে হৃৎপিণ্ড বা ফুসফুসে ট্যাপ করুন",
        openDeepDive: "হৃৎপিণ্ড ও রক্তকণিকা পেজ খুলুন",
        openRespiratory: "শ্বসন ও গ্যাসীয় বিনিময় পেজ খুলুন",
        comingSoonTitle: "আলাদা অঙ্গ পেজ শীঘ্রই আসছে",
        comingSoonDesc:
          "এই অঙ্গটি দেহ মানচিত্রে সক্রিয়ভাবে দেখানো হচ্ছে। বিস্তারিত চিত্র ও লাইভ অ্যানিমেশনসহ এর আলাদা পেজ পরবর্তী আপডেটে যুক্ত হবে।",
        switchCirculatory: "সংবহন তন্ত্র পেজে যান",
        oxygenated: "অক্সিজেনযুক্ত (ধমনী)",
        deoxygenated: "অক্সিজেনবিহীন (শিরা)",
      },
      dock: {
        title: "অঙ্গতন্ত্রসমূহ",
        subtitle: "অঙ্গ বা তন্ত্র নির্বাচন করুন",
        liveTag: "লাইভ",
        soonTag: "শীঘ্রই",
        openPage: "বিস্তারিত অঙ্গ পেজ খুলুন",
      },
      systems: {
        circulatory: {
          name: "সংবহন তন্ত্র",
          en: "Circulatory System",
          shortDesc: "হৃৎপিণ্ড, ধমনী, শিরা, রক্তকণিকা ও 60 FPS রক্ত সঞ্চালন",
        },
        respiratory: {
          name: "শ্বসন তন্ত্র",
          en: "Respiratory System",
          shortDesc: "ফুসফুস, শ্বাসনালী, মধ্যচ্ছদা ও অ্যালভিওলাই O₂/CO₂ বিনিময়",
        },
        nervous: {
          name: "স্নায়ুতন্ত্র",
          en: "Nervous System",
          shortDesc: "মস্তিষ্ক, সুষুম্নাকাণ্ড ও বৈদ্যুতিক স্নায়ুসংকেত",
        },
        digestive: {
          name: "পরিপাক তন্ত্র",
          en: "Digestive System",
          shortDesc: "পাকস্থলী, অন্ত্র ও পরিপাক তরঙ্গ গতি",
        },
        skeletal: {
          name: "কঙ্কাল তন্ত্র",
          en: "Skeletal System",
          shortDesc: "২০৬টি অস্থি, পাজর, মেরুদণ্ড ও দেহকাঠামো",
        },
        muscular: {
          name: "পেশী তন্ত্র",
          en: "Muscular System",
          shortDesc: "ঐচ্ছিক, অনৈচ্ছিক ও হৃৎপেশীর স্তর",
        },
        urinary: {
          name: "রেচন তন্ত্র",
          en: "Urinary System",
          shortDesc: "বৃক্ক (কিডনি) ও নিরবচ্ছিন্ন রক্ত পরিশোধন",
        },
        endocrine: {
          name: "অন্তঃক্ষরা তন্ত্র",
          en: "Endocrine System",
          shortDesc: "হরমোন গ্রন্থি ও রাসায়নিক সংকেত প্রবাহ",
        },
        reproductive: {
          name: "প্রজনন তন্ত্র",
          en: "Reproductive System",
          shortDesc: "পুরুষ ও নারী দেহ অনুযায়ী স্বয়ংক্রিয়ভাবে পরিবর্তিত হয়",
        },
      },
      heartLab: {
        title: "মানব হৃৎপিণ্ড — লাইভ প্রস্থচ্ছেদ",
        subtitle: "লাইভ কার্যপদ্ধতি জানতে যেকোনো প্রকোষ্ঠ, রক্তনালী বা নোডে ট্যাপ করুন",
        bpmControl: "হৃদস্পন্দনের হার (BPM)",
        presets: {
          rest: "বিশ্রাম (65)",
          normal: "স্বাভাবিক (72)",
          walk: "দ্রুত হাঁটা (110)",
          sprint: "দৌড় (160)",
        },
        toggles: {
          electrical: "SA/AV বৈদ্যুতিক তরঙ্গ",
          labels: "হটস্পট পিন",
          pause: "থামান",
          play: "চালান",
        },
        metrics: {
          bpm: "হৃদস্পন্দন",
          output: "কার্ডিয়াক আউটপুট",
          stroke: "স্ট্রোক ভলিউম",
          phase: "হৃৎচক্রের দশা",
          systole: "নিলয় সংকোচন (Systole)",
          diastole: "নিলয় প্রসারণ (Diastole)",
          litersMin: "লি/মিনিট",
          mlBeat: "মি.লি./স্পন্দন",
        },
        tabs: {
          inspect: "অঙ্গ পরিদর্শক",
          chapter: "জীবন্ত পাঠ্যবই",
          quiz: "দ্রুত যাচাই",
        },
        selectPrompt: "গঠন ও কাজ পড়তে হৃৎপিণ্ডের যেকোনো জ্বলন্ত পিনে ট্যাপ করুন।",
        hotspots: {
          rightAtrium: {
            name: "ডান অলিন্দ",
            en: "Right Atrium",
            bloodType: "অক্সিজেনবিহীন রক্ত",
            summary:
              "উপরের ডান প্রকোষ্ঠ যা ঊর্ধ্ব ও নিম্ন মহাশিরার মাধ্যমে সারা দেহ থেকে অক্সিজেনবিহীন রক্ত গ্রহণ করে।",
            keyFact: "এর উপরের প্রাচীরে SA নোড (প্রাকৃতিক পেসমেকার) অবস্থিত।",
          },
          rightVentricle: {
            name: "ডান নিলয়",
            en: "Right Ventricle",
            bloodType: "অক্সিজেনবিহীন রক্ত",
            summary:
              "অক্সিজেনবিহীন রক্তকে পালমোনারি কপাটিকা ও ফুসফুসীয় ধমনীর মাধ্যমে ফুসফুসে পাম্প করে।",
            keyFact: "ফুসফুস কাছে থাকায় এর প্রাচীর বাম নিলয়ের তুলনায় পাতলা।",
          },
          leftAtrium: {
            name: "বাম অলিন্দ",
            en: "Left Atrium",
            bloodType: "অক্সিজেনযুক্ত রক্ত",
            summary:
              "ফুসফুস থেকে ফুসফুসীয় শিরার মাধ্যমে আসা অক্সিজেনযুক্ত রক্ত গ্রহণ করে মাইট্রাল কপাটিকা দিয়ে নিচে পাঠায়।",
            keyFact: "নিলয় সংকোচনের ঠিক আগে সংকুচিত হয়ে বাম নিলয়কে পূর্ণ করে।",
          },
          leftVentricle: {
            name: "বাম নিলয়",
            en: "Left Ventricle",
            bloodType: "অক্সিজেনযুক্ত রক্ত",
            summary:
              "হৃৎপিণ্ডের সবচেয়ে শক্তিশালী প্রকোষ্ঠ যা মহাধমনীর মাধ্যমে সারা দেহে অক্সিজেনযুক্ত রক্ত পাম্প করে।",
            keyFact: "এর পেশীবহুল প্রাচীর ডান নিলয়ের চেয়ে প্রায় ৩ গুণ পুরু।",
          },
          aorta: {
            name: "মহাধমনী",
            en: "Aorta",
            bloodType: "অক্সিজেনযুক্ত রক্ত",
            summary:
              "দেহের বৃহত্তম ধমনী যা উচ্চ রক্তচাপ সামলে মস্তিষ্ক, হাত ও সারা দেহে বিশুদ্ধ রক্ত পৌঁছে দেয়।",
            keyFact: "এর প্রথম শাখা করোনারি ধমনী হৃৎপিণ্ডের নিজস্ব পেশীতে রক্ত সরবরাহ করে।",
          },
          pulmonaryArtery: {
            name: "ফুসফুসীয় ধমনী",
            en: "Pulmonary Artery",
            bloodType: "অক্সিজেনবিহীন রক্ত",
            summary:
              "ডান নিলয় থেকে অক্সিজেনবিহীন রক্ত ফুসফুসে নিয়ে যায়, যেখানে CO₂ ত্যাগ করে রক্ত অক্সিজেন নেয়।",
            keyFact: "ব্যতিক্রমীভাবে এই ধমনীটি অক্সিজেনবিহীন রক্ত বহন করে।",
          },
          venaCava: {
            name: "ঊর্ধ্ব মহাশিরা",
            en: "Superior Vena Cava",
            bloodType: "অক্সিজেনবিহীন রক্ত",
            summary:
              "মাথা, ঘাড়, হাত ও বুকের উপরের অংশ থেকে অক্সিজেনবিহীন রক্ত সরাসরি ডান অলিন্দে আনে।",
            keyFact: "কম চাপে প্রবাহিত হয় এবং শ্বাসক্রিয়া এতে সহায়তা করে।",
          },
          saNode: {
            name: "এসএ নোড (পেসমেকার)",
            en: "Sinoatrial Node",
            bloodType: "বৈদ্যুতিক উদ্দীপনা",
            summary:
              "বিশেষ হৃৎকোষের গুচ্ছ যা স্বতঃস্ফূর্তভাবে বৈদ্যুতিক সংকেত সৃষ্টি করে BPM নির্ধারণ করে।",
            keyFact: "তরঙ্গ অলিন্দে ছড়িয়ে AV নোডে সামান্য থামে এবং পারকিনজি তন্তু দিয়ে নিলয়ে যায়।",
          },
        },
        chapter: {
          heading: "দ্বৈত সংবহন ও হৃৎচক্র",
          sections: [
            {
              title: "১. একসঙ্গে চলা দুটি সংবহন পথ",
              body: "মানবদেহে বদ্ধ দ্বৈত সংবহন রয়েছে। ডান অংশ পালমোনারি সংবহন (ফুসফুসে) এবং বাম অংশ সিস্টেমিক সংবহন (মহাধমনী দিয়ে সারা দেহে) চালায়।",
            },
            {
              title: "২. সিস্টোল, ডায়াস্টোল ও কপাটিকা",
              body: "ডায়াস্টোলে নিলয় পূর্ণ হয় এবং সিস্টোলে সংকুচিত হয়ে রক্ত পাম্প করে। চারটি কপাটিকা রক্তের বিপরীত প্রবাহ রোধ করে।",
            },
            {
              title: "৩. বৈদ্যুতিক পরিবহন ও BPM",
              body: "প্রতিটি স্পন্দন SA নোড থেকে শুরু হয়ে AV নোড ও পারকিনজি তন্তু দিয়ে ছড়ায়। BPM স্লাইডার সরিয়ে লাইভ পরিবর্তন দেখুন।",
            },
          ],
        },
        quiz: {
          title: "তাৎক্ষণিক অনুশীলন",
          correctMsg: "একদম সঠিক! ধারণাটি পরিষ্কার হয়েছে।",
          wrongMsg: "সঠিক নয় — নিচের ব্যাখ্যাটি দেখুন।",
          nextBtn: "পরবর্তী প্রশ্ন",
          restartBtn: "আবার শুরু করুন",
          scoreLabel: "স্কোর",
          questions: [
            {
              q: "সারা দেহে রক্ত পাম্প করার জন্য হৃৎপিণ্ডের কোন প্রকোষ্ঠের প্রাচীর সবচেয়ে পুরু?",
              options: ["ডান অলিন্দ", "ডান নিলয়", "বাম অলিন্দ", "বাম নিলয়"],
              answer: 3,
              explain: "বাম নিলয় উচ্চ চাপ সৃষ্টি করে মহাধমনীতে রক্ত পাম্প করে।",
            },
            {
              q: "কোন রক্তনালী ডান নিলয় থেকে অক্সিজেনবিহীন রক্ত ফুসফুসে নিয়ে যায়?",
              options: ["মহাধমনী", "ফুসফুসীয় ধমনী", "ফুসফুসীয় শিরা", "করোনারি ধমনী"],
              answer: 1,
              explain: "ফুসফুসীয় ধমনী গ্যাসীয় বিনিময়ের জন্য অক্সিজেনবিহীন রক্ত ফুসফুসে নিয়ে যায়।",
            },
            {
              q: "হৃৎপিণ্ডের প্রাকৃতিক পেসমেকার কোনটি?",
              options: ["মাইট্রাল কপাটিকা", "SA নোড", "ঊর্ধ্ব মহাশিরা", "সেপ্টাম"],
              answer: 1,
              explain: "SA নোড প্রতিটি হৃদস্পন্দনের ছন্দময় বৈদ্যুতিক তরঙ্গ শুরু করে।",
            },
          ],
        },
      },

      bloodLab: {
        title: "রক্ত ও রক্তকণিকা — লাইভ মাইক্রোস্কোপ ল্যাব",
        subtitle:
          "সব রক্তকণিকার নাম, আকার, বৈশিষ্ট্য, WBC-র বিভাজন, লাইভ অ্যানিমেশন ও শ্রেণি ৯–১০ পাঠ পরিকল্পনা",
        introTitle: "রক্তরসে (৫৫%) ভাসমান ৩ প্রকার রক্তকণিকা (৪৫%)",
        introSummary:
          "মানব রক্ত একটি তরল যোগকলা, যা হালকা হলুদ রক্তরস বা প্লাজমা (৫৫%) এবং ৩ প্রকার রক্তকণিকা (৪৫%) নিয়ে গঠিত: লোহিত রক্তকণিকা (RBC / Erythrocytes), শ্বেত রক্তকণিকা (WBC / Leukocytes — দানাদার ও দানাবিহীন ভাগে বিভক্ত), এবং অণুচক্রিকা (Platelets / Thrombocytes)।",
        modes: {
          stream: "রক্তপ্রবাহ",
          rbc: "RBC অক্সিজেন",
          wbc: "WBC ৫ প্রকার ও প্রতিরক্ষা",
          platelet: "রক্ততঞ্চন (Clot)",
        },
        toggles: {
          pause: "থামান",
          play: "চালান",
        },
        tabs: {
          inspect: "কণিকা অ্যাটলাস",
          lesson: "শ্রেণি ৯–১০ পাঠ",
          quiz: "রক্ত যাচাই",
        },
        labels: {
          shape: "আকার",
          characteristics: "বৈশিষ্ট্য",
          work: "প্রধান কাজ",
          divisions: "বিভাজন ও উপ-প্রকার",
          selectPrompt: "আকার, বৈশিষ্ট্য, বিভাজন ও কাজ পড়তে নিচের যেকোনো রক্ত উপাদান নির্বাচন করুন।",
        },
        canvasText: {
          streamTitle: "লাইভ রক্তপ্রবাহ • প্লাজমা (৫৫%) + RBC, WBC ও অণুচক্রিকা (৪৫%)",
          rbcTitle: "লোহিত রক্তকণিকা (RBC) • দ্বি-অবতল চাকতি (Hb + O₂ → HbO₂)",
          wbcTitle: "শ্বেত রক্তকণিকা (WBC) • ৫ প্রকার ও ফ্যাগোসাইটোসিস জীবাণু ভক্ষণ",
          plateletTitle: "অণুচক্রিকা (Platelets) • ক্ষতস্থানে ফাইব্রিন জালক তৈরি",
          injuryLabel: "ক্ষতস্থান → ফাইব্রিন তঞ্চন",
          phagoLabel: "নিউট্রোফিল জীবাণু ভক্ষণ করছে",
        },
        cells: {
          rbc: {
            name: "লোহিত রক্তকণিকা (RBC)",
            en: "Erythrocytes",
            badge: "৪৫–৫৫ লক্ষ / ঘন মিমি • আয়ু: ~১২০ দিন",
            shape:
              "দ্বি-অবতল (Biconcave) গোলাকার চাকতির মতো (মাঝখান চাপা, ধার মোটা)। এতে গ্যাসীয় বিনিময়ের পৃষ্ঠতল বাড়ে এবং সূক্ষ্ম রক্তজালকের ভেতর দিয়ে সহজে বাঁকতে পারে।",
            characteristics:
              "পরিণত অবস্থায় নিউক্লিয়াস থাকে না (স্তন্যপায়ীতে) যাতে বেশি হিমোগ্লোবিন ধরতে পারে; লাল অস্থিমজ্জায় উৎপন্ন হয় এবং প্লীহায় (Spleen — RBC-র কবরস্থান) ধ্বংস হয়।",
            work: "ফুসফুস থেকে সারা দেহে অক্সিহিমোগ্লোবিন (HbO₂) রূপে O₂ পরিবহন করা এবং CO₂ ফিরিয়ে আনা।",
            divisions: "কোনো উপ-প্রকার নেই — একরকম অক্সিজেন বাহক কণিকা।",
          },
          wbc: {
            name: "শ্বেত রক্তকণিকা (WBC)",
            en: "Leukocytes",
            badge: "৪,০০০–১১,০০০ / ঘন মিমি • আয়ু: কয়েক দিন থেকে বছর",
            shape: "অনিয়তাকার / অ্যামিবয়েড — রক্তজালকের প্রাচীর ভেদ করে (ডায়াপেডেসিস) সংক্রমিত স্থানে যেতে পারে।",
            characteristics:
              "বর্ণহীন (হিমোগ্লোবিন নেই), স্পষ্ট নিউক্লিয়াসযুক্ত (নিউক্লিয়াসের আকার দেখে ভাগ চেনা যায়)। এদের 'দেহের প্রহরী' বলা হয়।",
            work: "ফ্যাগোসাইটোসিস (জীবাণু ভক্ষণ) ও অ্যান্টিবডি তৈরির মাধ্যমে ব্যাকটেরিয়া, ভাইরাস ও পরজীবী থেকে দেহকে রক্ষা করা।",
            divisions:
              "২টি প্রধান ভাগ → ৫টি উপ-প্রকার:\n• দানাদার (Granulocytes): (১) নিউট্রোফিল (৬০–৬৫%, বহু-খণ্ডিত নিউক্লিয়াস — জীবাণু ভক্ষণ), (২) ইওসিনোফিল (২–৩%, দ্বি-খণ্ডিত — পরজীবী ও অ্যালার্জি নিয়ন্ত্রণ), (৩) বেসোফিল (০.৫–১%, S-আকৃতি — হিস্টামিন ও হেপারিন ক্ষরণ)।\n• দানাবিহীন (Agranulocytes): (৪) লিম্ফোসাইট (২০–২৫%, বড় গোল নিউক্লিয়াস — অ্যান্টিবডি তৈরি), (৫) মনোসাইট (৬–৮%, বৃহত্তম WBC, বৃক্কাকার নিউক্লিয়াস — ম্যাক্রোফেজ হয়ে জীবাণু ধ্বংস)।",
          },
          platelets: {
            name: "অণুচক্রিকা (Platelets)",
            en: "Thrombocytes",
            badge: "১.৫–৪.৫ লক্ষ / ঘন মিমি • আয়ু: ৭–১০ দিন",
            shape: "অতি ক্ষুদ্র, অনিয়তাকার বা মাকু-আকৃতির কোষাংশ (অস্থিমজ্জার মেগাক্যারিওসাইট থেকে সৃষ্ট)।",
            characteristics: "নিউক্লিয়াসবিহীন, বর্ণহীন, রক্তের ক্ষুদ্রতম কণিকা; ক্ষতস্থানের সংস্পর্শে এলেই কাঁটার মতো আঠালো হয়ে যায়।",
            work: "রক্ততঞ্চন (Blood Clotting): থ্রম্বোপ্লাস্টিন ক্ষরণ করে দ্রবণীয় ফাইব্রিনোজেনকে অদ্রবণীয় ফাইব্রিন জালকে পরিণত করে রক্তপাত বন্ধ করে।",
            divisions: "কোনো উপ-প্রকার নেই — ক্ষতস্থানে সক্রিয় হয়ে রক্ত জমাট বাঁধায়।",
          },
          plasma: {
            name: "রক্তরস (Plasma)",
            en: "Fluid Matrix (55%)",
            badge: "৯০–৯২% জল • ৬–৮% প্রোটিন",
            shape: "হালকা হলুদ তরল ধাত্র, যার মধ্যে সমস্ত রক্তকণিকা ভেসে থাকে।",
            characteristics: "জল, অ্যালবুমিন, গ্লোবিউলিন, ফাইব্রিনোজেন প্রোটিন, গ্লুকোজ, হরমোন, খনিজ লবণ ও দ্রবীভূত CO₂ ধারণ করে।",
            work: "পাচিত খাদ্যরস, হরমোন, ইউরিয়া, তাপ ও অধিকাংশ CO₂ পরিবহন করা।",
            divisions: "রক্ততঞ্চন প্রোটিন (ফাইব্রিনোজেন) বাদ দিলে প্লাজমাকে সিরাম (Serum) বলে।",
          },
        },
        lesson: {
          heading: "শ্রেণি ৯–১০ পাঠ পরিকল্পনা: রক্ত ও রক্তকণিকা",
          sections: [
            {
              title: "১. রক্তের সংজ্ঞা ও উপাদান",
              html: `<p><strong>রক্ত</strong> হলো লাল রঙের <em>তরল যোগকলা</em> (pH ~৭.৪)। এতে <strong>প্লাজমা (৫৫%)</strong> এবং ৩ প্রকার রক্তকণিকা <strong>(৪৫%)</strong> থাকে: <strong>RBC (Erythrocytes)</strong>, <strong>WBC (Leukocytes)</strong> এবং <strong>Platelets (Thrombocytes)</strong>।</p>`,
            },
            {
              title: "২. লোহিত রক্তকণিকার (RBC) বিশেষত্ব",
              html: `<p>• দ্বি-অবতল আকার ও নিউক্লিয়াস না থাকায় প্রচুর হিমোগ্লোবিন ধরতে পারে।<br/>• <strong>সমীকরণ:</strong> Hb + 4O₂ ⇌ Hb(O₂)₄ (অক্সিহিমোগ্লোবিন)।</p>`,
            },
            {
              title: "৩. শ্বেত রক্তকণিকার (WBC) দুই প্রধান বিভাগ",
              html: `<p><strong>দানাদার (Granulocytes):</strong> নিউট্রোফিল (জীবাণু ভক্ষণ), ইওসিনোফিল (অ্যালার্জি/পরজীবী), বেসোফিল (হিস্টামিন/হেপারিন)।<br/><strong>দানাবিহীন (Agranulocytes):</strong> লিম্ফোসাইট (অ্যান্টিবডি তৈরি), মনোসাইট (বৃহত্তম WBC, ম্যাক্রোফেজ)।</p>`,
            },
            {
              title: "৪. অণুচক্রিকা ও রক্ততঞ্চন প্রক্রিয়া",
              html: `<p>কেটে গেলে (<strong>Ca²⁺ আয়ন</strong> ও <strong>ভিটামিন K</strong>-এর সাহায্যে):</p>
              <div class="detail-fact" style="margin-top:8px">১. অণুচক্রিকা → <strong>থ্রম্বোপ্লাস্টিন</strong><br/>২. প্রোথ্রম্বিন → সক্রিয় <strong>থ্রম্বিন</strong><br/>৩. ফাইব্রিনোজেন → অদ্রবণীয় <strong>ফাইব্রিন জালক</strong> + RBC = <strong>রক্ততঞ্চন (Clot)</strong></div>`,
            },
          ],
        },
        quiz: {
          title: "রক্তকণিকা তাৎক্ষণিক যাচাই",
          correctMsg: "একদম সঠিক! বিজ্ঞানের ধারণাটি পরিষ্কার।",
          wrongMsg: "সঠিক নয় — নিচের ব্যাখ্যাটি দেখুন।",
          nextBtn: "পরবর্তী প্রশ্ন",
          restartBtn: "আবার শুরু করুন",
          scoreLabel: "স্কোর",
          questions: [
            {
              q: "পরিণত মানব লোহিত রক্তকণিকায় (RBC) নিউক্লিয়াস থাকে না কেন?",
              options: [
                "রক্তকে ভারী করার জন্য",
                "বেশি হিমোগ্লোবিন ও অক্সিজেন পরিবহনের জায়গা বাড়ানোর জন্য",
                "অ্যান্টিবডি তৈরির জন্য",
                "ফাইব্রিন জালক তৈরির জন্য",
              ],
              answer: 1,
              explain: "নিউক্লিয়াস না থাকায় RBC-তে সর্বাধিক হিমোগ্লোবিন ধরে এবং বেশি O₂ পরিবাহিত হয়।",
            },
            {
              q: "কোন WBC-র বড় গোল নিউক্লিয়াস থাকে এবং এটি অ্যান্টিবডি তৈরি করে?",
              options: ["নিউট্রোফিল", "ইওসিনোফিল", "লিম্ফোসাইট", "বেসোফিল"],
              answer: 2,
              explain: "লিম্ফোসাইট (দানাবিহীন WBC) অ্যান্টিবডি তৈরি করে রোগ প্রতিরোধ করে।",
            },
            {
              q: "বৃক্কাকার নিউক্লিয়াসযুক্ত বৃহত্তম শ্বেত রক্তকণিকা কোনটি?",
              options: ["মনোসাইট", "নিউট্রোফিল", "বেসোফিল", "অণুচক্রিকা"],
              answer: 0,
              explain: "মনোসাইট সবচেয়ে বড় শ্বেত রক্তকণিকা এবং কলায় ম্যাক্রোফেজে পরিণত হয়।",
            },
            {
              q: "রক্ততঞ্চনের সময় থ্রম্বিন কোন প্লাজমা প্রোটিনকে অদ্রবণীয় জালকে পরিণত করে?",
              options: ["হিমোগ্লোবিন", "অ্যালবুমিন", "ফাইব্রিনোজেন", "হেপারিন"],
              answer: 2,
              explain: "থ্রম্বিন দ্রবণীয় ফাইব্রিনোজেনকে অদ্রবণীয় ফাইব্রিন সূতায় বদলে রক্তপাত বন্ধ করে।",
            },
            {
              q: "কোন অঙ্গকে 'RBC-র কবরস্থান' বলা হয়?",
              options: ["হৃৎপিণ্ড", "প্লীহা (Spleen)", "ফুসফুস", "অগ্ন্যাশয়"],
              answer: 1,
              explain: "প্রায় ১২০ দিন পর জীর্ণ RBC প্লীহায় (Spleen) ধ্বংস হয়।",
            },
          ],
        },
      },
    },
  };

  function getSaved(key, fallback) {
    try {
      const v = localStorage.getItem(key);
      return v !== null ? v : fallback;
    } catch {
      return fallback;
    }
  }

  function setSaved(key, value) {
    try {
      localStorage.setItem(key, String(value));
    } catch {}
  }

  const state = {
    lang: ["en", "hi", "bn"].includes(getSaved("biolume_lang", "en"))
      ? getSaved("biolume_lang", "en")
      : "en",
    theme: ["dark", "light"].includes(getSaved("biolume_theme", "dark"))
      ? getSaved("biolume_theme", "dark")
      : "dark",
    bilingual: getSaved("biolume_bilingual", "true") !== "false",
    sex: ["male", "female"].includes(getSaved("biolume_sex", "male"))
      ? getSaved("biolume_sex", "male")
      : "male",
    system: ORGAN_IDS.includes(getSaved("biolume_system", "circulatory"))
      ? getSaved("biolume_system", "circulatory")
      : "circulatory",
    xray: Number(getSaved("biolume_xray", "85")) || 85,
    bpm: Number(getSaved("biolume_bpm", "72")) || 72,
  };

  const listeners = new Set();

  function applyDomState() {
    document.documentElement.setAttribute("data-lang", state.lang);
    document.documentElement.lang = state.lang;
    document.documentElement.setAttribute("data-theme", state.theme);

    const dict = DICT[state.lang] || DICT.en;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const path = el.getAttribute("data-i18n").split(".");
      let val = dict;
      for (const k of path) val = val && val[k];
      if (typeof val === "string") el.textContent = val;
    });

    document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === state.lang);
    });

    const biBtn = document.getElementById("btn-bilingual");
    if (biBtn) {
      biBtn.setAttribute("aria-pressed", String(state.bilingual));
      biBtn.classList.toggle("active-accent", state.bilingual && state.lang !== "en");
      biBtn.classList.toggle("dimmed", state.lang === "en");
    }

    const themeIcon = document.getElementById("theme-icon");
    const themeLabel = document.getElementById("theme-label");
    if (themeIcon) themeIcon.textContent = state.theme === "dark" ? "☀️" : "🌙";
    if (themeLabel) {
      themeLabel.textContent =
        state.theme === "dark" ? dict.nav.lightMode : dict.nav.darkMode;
    }
  }

  function notify() {
    applyDomState();
    listeners.forEach((fn) => fn(state));
  }

  window.BioLume = {
    ORGAN_IDS,
    ORGAN_ICONS,
    ORGAN_PAGES,
    DICT,
    getState: () => state,
    dict: () => DICT[state.lang] || DICT.en,
    term(item) {
      if (!item) return "";
      if (typeof item === "string") return item;
      if (!state.bilingual || state.lang === "en" || !item.en || item.name === item.en) {
        return item.name;
      }
      return `${item.name} (${item.en})`;
    },
    setLang(l) {
      if (["en", "hi", "bn"].includes(l)) {
        state.lang = l;
        setSaved("biolume_lang", l);
        notify();
      }
    },
    toggleTheme() {
      state.theme = state.theme === "dark" ? "light" : "dark";
      setSaved("biolume_theme", state.theme);
      notify();
    },
    toggleBilingual() {
      state.bilingual = !state.bilingual;
      setSaved("biolume_bilingual", state.bilingual);
      notify();
    },
    setSex(s) {
      if (["male", "female"].includes(s)) {
        state.sex = s;
        setSaved("biolume_sex", s);
        notify();
      }
    },
    setSystem(sys) {
      if (ORGAN_IDS.includes(sys)) {
        state.system = sys;
        setSaved("biolume_system", sys);
        notify();
      }
    },
    setXray(val) {
      state.xray = Math.max(0, Math.min(100, Number(val) || 0));
      setSaved("biolume_xray", state.xray);
      notify();
    },
    setBpm(val) {
      state.bpm = Math.max(45, Math.min(180, Number(val) || 72));
      setSaved("biolume_bpm", state.bpm);
      notify();
    },
    subscribe(fn) {
      listeners.add(fn);
      return () => listeners.delete(fn);
    },
  };

  document.addEventListener("DOMContentLoaded", () => {
    applyDomState();

    document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
      btn.addEventListener("click", () => {
        window.BioLume.setLang(btn.getAttribute("data-lang-btn"));
      });
    });

    const biBtn = document.getElementById("btn-bilingual");
    if (biBtn) biBtn.addEventListener("click", () => window.BioLume.toggleBilingual());

    const thBtn = document.getElementById("btn-theme");
    if (thBtn) thBtn.addEventListener("click", () => window.BioLume.toggleTheme());
  });
})();