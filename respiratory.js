(function () {
  const BL = window.BioLume;
  if (!BL) return;

  // =========================================================
  // TRILINGUAL CLASS 9-10 CONTENT (EN / HI / BN)
  // =========================================================
  const RESP_DICT = {
    en: {
      chapterBadge: "Chapter 02 • Class 9–10 Lab",
      title: "Human Respiratory System — Live Lab",
      subtitle:
        "Watch breathing mechanics, the Heart–Lung blood loop, and microscopic Alveoli O₂ / CO₂ gas exchange",
      views: {
        lungs: "Lungs & Heart Loop",
        alveoli: "Alveoli O₂ / CO₂ Zoom",
      },
      toggles: {
        pause: "Pause",
        play: "Resume",
        pins: "Hotspot Pins",
      },
      metrics: {
        rate: "Breathing Rate",
        tidal: "Tidal Volume",
        vent: "Air / Minute",
        phase: "Breathing Phase",
        inhale: "Inhalation (Air In)",
        exhale: "Exhalation (Air Out)",
        perMin: "/min",
        lMin: "L/min",
      },
      brpmControl: "Breathing Rate (Breaths / Min)",
      presets: {
        yoga: "Deep Rest (12)",
        normal: "Normal (16)",
        walk: "Brisk Walk (24)",
        run: "Sprint (36)",
      },
      tabs: {
        inspect: "Anatomy Inspector",
        lesson: "Class 9–10 Lesson",
        quiz: "Quick Check",
      },
      selectPrompt:
        "Tap any glowing pin on the diagram (or switch to Alveoli Zoom) to inspect its structure and science.",
      canvasLabels: {
        pulmArt: "From Heart (CO₂ Blood)",
        pulmVein: "To Heart (O₂ Blood)",
        rightVent: "Right Ventricle",
        leftAtr: "Left Atrium",
        diaphragm: "Diaphragm",
        pressureIn: "Chest Vol ↑ • Pressure ↓ (Air In)",
        pressureOut: "Chest Vol ↓ • Pressure ↑ (Air Out)",
        alvAir: "ALVEOLAR AIR SAC (High O₂)",
        capIn: "From Heart (CO₂-rich)",
        capOut: "To Heart (O₂-rich HbO₂)",
        o2Diff: "O₂ diffuses into blood",
        co2Diff: "CO₂ diffuses out to air",
      },
      hotspots: {
        trachea: {
          name: "Trachea (Windpipe)",
          en: "Trachea",
          role: "Airway • C-Shaped Cartilage Rings",
          summary:
            "A 10–12 cm tube connecting the larynx (voice box) to the bronchi. Its C-shaped rings of cartilage keep the airway permanently open so it never collapses when air pressure drops.",
          keyFact:
            "Lined with mucus and microscopic hair-like cilia that trap dust and sweep germs upward away from the lungs.",
        },
        bronchi: {
          name: "Bronchi & Bronchioles",
          en: "Bronchi & Bronchioles",
          role: "Branching Air Tubes",
          summary:
            "The trachea splits into left and right primary bronchi entering each lung, which divide repeatedly like tree branches into finer bronchioles ending in tiny air sacs.",
          keyFact:
            "This branching tree distributes fresh inhaled air evenly across ~300 million alveoli.",
        },
        lungs: {
          name: "Lungs (Spongy Organs)",
          en: "Lungs",
          role: "Primary Respiratory Organs",
          summary:
            "A pair of elastic, spongy organs protected by the ribcage and double-layered pleural membrane. The right lung has 3 lobes; the left lung has 2 lobes to leave room for the heart.",
          keyFact:
            "Lungs have no muscles of their own—they expand and shrink strictly due to pressure changes created by the diaphragm and rib muscles.",
        },
        diaphragm: {
          name: "Diaphragm",
          en: "Diaphragm",
          role: "Dome-Shaped Breathing Muscle",
          summary:
            "A strong dome-shaped muscular sheet separating the chest (thoracic) cavity from the abdomen. When it contracts, it flattens downward to pull air in; when it relaxes, it domes upward to push air out.",
          keyFact:
            "Accounts for roughly 70–75% of air movement during normal quiet breathing.",
        },
        heartLoop: {
          name: "Heart–Lung Blood Loop",
          en: "Pulmonary Circulation",
          role: "CO₂ Blood In • O₂ Blood Out",
          summary:
            "The Heart's Right Ventricle pumps deoxygenated (CO₂-rich) blood via the Pulmonary Artery to the lungs. After gas exchange in the alveoli, oxygenated (O₂-rich) blood returns through Pulmonary Veins to the Heart's Left Atrium.",
          keyFact:
            "Watch the cyan particles leaving the heart for the lungs and crimson particles returning from the lungs to the heart!",
        },
        alveolus: {
          name: "Alveolus (Air Sac)",
          en: "Alveolus",
          role: "Site of O₂ / CO₂ Gas Exchange",
          summary:
            "Microscopic balloon-like sac with a wall only ONE cell thick, covered by a dense net of blood capillaries. Together, all alveoli create a massive ~70–80 m² surface area (nearly a tennis court) for rapid diffusion.",
          keyFact:
            "A thin film of moisture inside every alveolus dissolves O₂ before it diffuses into the blood.",
        },
        capillary: {
          name: "Pulmonary Capillary & RBCs",
          en: "Pulmonary Capillary",
          role: "Hemoglobin Transport (Hb + O₂ → HbO₂)",
          summary:
            "Tiny 1-cell-thick blood vessel wrapping the alveolus. Red Blood Cells (RBCs) squeeze through single-file, dumping CO₂ and binding O₂ to iron-containing Hemoglobin to form bright red Oxyhemoglobin.",
          keyFact:
            "Oxygen moves from high concentration (alveolus) to low concentration (blood) purely by passive diffusion—no ATP energy is spent.",
        },
        membrane: {
          name: "Diffusion Membrane",
          en: "Respiratory Membrane",
          role: "High → Low Concentration",
          summary:
            "The ultra-thin barrier (~0.5 micrometres) formed by the alveolar wall and capillary wall together. Gases cross it in less than 0.25 seconds strictly down their concentration gradients.",
          keyFact:
            "CO₂ diffuses about 20× more easily through this moist membrane than O₂.",
        },
      },
      lesson: {
        heading: "Class 9–10 Lesson Plan: Human Respiratory System",
        sections: [
          {
            title: "1. Definition: Breathing vs. Cellular Respiration",
            html: `<p><strong>Breathing (External Respiration):</strong> A physical process of inhaling O₂-rich air into the lungs and exhaling CO₂-rich air out. It releases <em>no energy</em>.</p>
            <p style="margin-top:6px"><strong>Cellular Respiration:</strong> A biochemical process inside every living cell (mitochondria) where glucose breaks down using O₂ to release usable energy (<strong>ATP</strong>).</p>
            <div class="detail-fact" style="margin-top:8px"><strong>Aerobic Equation:</strong><br/>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> (Glucose) + 6O<sub>2</sub> → 6CO<sub>2</sub> + 6H<sub>2</sub>O + Energy (38 ATP)</div>`,
          },
          {
            title: "2. Complete Pathway of Air",
            html: `<p>Nostrils (filters &amp; warms air) → Nasal Cavity → Pharynx (common passage) → Larynx (voice box) → <strong>Trachea</strong> (C-shaped cartilage rings prevent collapse) → Left &amp; Right <strong>Bronchi</strong> → <strong>Bronchioles</strong> → <strong>Alveoli</strong> (gas exchange sacs).</p>`,
          },
          {
            title: "3. Science of Breathing (Pressure & Volume)",
            html: `<p>Air always flows from <strong>higher pressure to lower pressure</strong> (Boyle's Law):</p>
            <p style="margin-top:6px">• <strong>Inhalation (Active):</strong> Diaphragm contracts &amp; flattens ↓; ribs move up &amp; outward → Chest cavity volume <strong>increases</strong> → Lung pressure drops below atmospheric pressure → Fresh air rushes <strong>IN</strong>.</p>
            <p style="margin-top:6px">• <strong>Exhalation (Passive):</strong> Diaphragm relaxes &amp; domes upward ↑; ribs move down &amp; inward → Chest volume <strong>decreases</strong> → Lung pressure rises above atmospheric pressure → CO₂-rich air is pushed <strong>OUT</strong>.</p>`,
          },
          {
            title: "4. How Heart & Lungs Exchange O₂ and CO₂",
            html: `<p><strong>Step A (Arrival from Heart):</strong> Body cells produce CO₂. Venous blood reaches the heart's <strong>Right Ventricle</strong>, which pumps this <strong>deoxygenated (CO₂-rich, cyan)</strong> blood through the <strong>Pulmonary Artery</strong> into lung capillaries.</p>
            <p style="margin-top:6px"><strong>Step B (Diffusion in Alveoli):</strong> Inside the alveolus, O₂ concentration is HIGH and CO₂ is LOW. In incoming capillary blood, CO₂ is HIGH and O₂ is LOW. By <strong>diffusion</strong>, O₂ enters RBCs and binds to <strong>Hemoglobin (Hb + O₂ → HbO₂)</strong>, turning blood bright red, while CO₂ enters the alveolus to be exhaled.</p>
            <p style="margin-top:6px"><strong>Step C (Return to Heart):</strong> The freshly <strong>oxygenated (crimson)</strong> blood flows via <strong>Pulmonary Veins</strong> into the heart's <strong>Left Atrium</strong> → Left Ventricle → Aorta to feed the entire body.</p>`,
          },
          {
            title: "5. High-Yield Class 9–10 Exam Points",
            html: `<p>• <strong>Residual Volume:</strong> Lungs always keep ~1100–1200 mL of air even after forceful exhalation so alveoli never collapse and gas exchange stays continuous.<br/>
            • <strong>Carbon Monoxide (CO) Hazard:</strong> CO binds to hemoglobin ~200× more strongly than O₂, blocking oxygen transport.<br/>
            • <strong>Transport:</strong> ~97% of O₂ travels as Oxyhemoglobin; most CO₂ travels dissolved as bicarbonate ions (HCO<sub>3</sub><sup>−</sup>) in plasma.</p>`,
          },
        ],
      },
      quiz: {
        title: "Class 9–10 Quick Check",
        correctMsg: "Correct! Clear scientific concept.",
        wrongMsg: "Not quite — read the explanation below.",
        nextBtn: "Next Question",
        restartBtn: "Restart Quiz",
        scoreLabel: "Score",
        questions: [
          {
            q: "Why does the trachea (windpipe) not collapse even when air pressure drops inside it?",
            options: [
              "Because it is made of solid bone",
              "Because it is supported by C-shaped rings of cartilage",
              "Because it is filled with blood",
              "Because the diaphragm holds it open",
            ],
            answer: 1,
            explain:
              "Incomplete C-shaped hyaline cartilage rings keep the trachea rigid and open during inhalation and exhalation.",
          },
          {
            q: "Which blood vessel brings deoxygenated (CO₂-rich) blood from the heart's Right Ventricle to the lungs?",
            options: ["Aorta", "Pulmonary Vein", "Pulmonary Artery", "Superior Vena Cava"],
            answer: 2,
            explain:
              "The Pulmonary Artery carries CO₂-rich blood from the Right Ventricle to the alveolar capillaries for oxygenation.",
          },
          {
            q: "During inhalation, what happens to the diaphragm and the air pressure inside the lungs?",
            options: [
              "Diaphragm flattens downward; lung pressure decreases",
              "Diaphragm domes upward; lung pressure increases",
              "Diaphragm flattens downward; lung pressure increases",
              "Diaphragm does not move during breathing",
            ],
            answer: 0,
            explain:
              "When the diaphragm contracts and flattens, thoracic volume increases, lowering lung pressure below atmospheric pressure so air rushes in.",
          },
          {
            q: "By which physical process do O₂ and CO₂ cross between the alveoli and blood capillaries?",
            options: ["Osmosis", "Active Transport", "Diffusion", "Filtration"],
            answer: 2,
            explain:
              "Gases move passively by diffusion from a region of higher concentration (partial pressure) to lower concentration.",
          },
          {
            q: "Which respiratory pigment in Red Blood Cells binds O₂ to form Oxyhemoglobin?",
            options: ["Chlorophyll", "Hemoglobin", "Melanin", "Platelets"],
            answer: 1,
            explain:
              "Iron-containing Hemoglobin (Hb) inside RBCs reversibly binds oxygen (Hb + O₂ → HbO₂) to transport it throughout the body.",
          },
        ],
      },
    },

    hi: {
      chapterBadge: "अध्याय 02 • कक्षा 9–10 लैब",
      title: "मानव श्वसन तंत्र — लाइव लैब",
      subtitle:
        "श्वास क्रिया, हृदय–फेफड़ा रक्त परिपथ और सूक्ष्म कूपिकाओं (Alveoli) में O₂ / CO₂ विनिमय लाइव देखें",
      views: {
        lungs: "फेफड़े और हृदय परिपथ",
        alveoli: "कूपिका O₂ / CO₂ ज़ूम",
      },
      toggles: {
        pause: "रोकें",
        play: "चलाएँ",
        pins: "हॉटस्पॉट पिन",
      },
      metrics: {
        rate: "श्वसन दर",
        tidal: "ज्वारीय आयतन",
        vent: "वायु / मिनट",
        phase: "श्वास चरण",
        inhale: "निःश्वसन (अंदर)",
        exhale: "उच्छ्वसन (बाहर)",
        perMin: "/मिनट",
        lMin: "ली/मिनट",
      },
      brpmControl: "श्वसन दर (श्वास / मिनट)",
      presets: {
        yoga: "गहरा विश्राम (12)",
        normal: "सामान्य (16)",
        walk: "तेज़ चाल (24)",
        run: "दौड़ (36)",
      },
      tabs: {
        inspect: "अंग निरीक्षक",
        lesson: "कक्षा 9–10 पाठ",
        quiz: "त्वरित जाँच",
      },
      selectPrompt:
        "संरचना और विज्ञान समझने के लिए चित्र के किसी भी पिन पर टैप करें (या कूपिका ज़ूम खोलें)।",
      canvasLabels: {
        pulmArt: "हृदय से (CO₂ रक्त)",
        pulmVein: "हृदय की ओर (O₂ रक्त)",
        rightVent: "दायाँ निलय",
        leftAtr: "बायाँ अलिंद",
        diaphragm: "डायाफ्राम",
        pressureIn: "वक्ष आयतन ↑ • दाब ↓ (वायु अंदर)",
        pressureOut: "वक्ष आयतन ↓ • दाब ↑ (वायु बाहर)",
        alvAir: "कूपिका वायुकोष (अधिक O₂)",
        capIn: "हृदय से (CO₂ युक्त)",
        capOut: "हृदय की ओर (O₂ युक्त HbO₂)",
        o2Diff: "O₂ रक्त में विसरित होती है",
        co2Diff: "CO₂ वायु में बाहर जाती है",
      },
      hotspots: {
        trachea: {
          name: "श्वासनली",
          en: "Trachea",
          role: "वायु मार्ग • C-आकार के उपास्थि वलय",
          summary:
            "लगभग 10–12 सेमी लंबी नलिका जो स्वरयंत्र को श्वसनी से जोड़ती है। इसमें C-आकार के उपास्थि (Cartilage) वलय होते हैं जो वायु दाब कम होने पर इसे चिपकने से रोकते हैं।",
          keyFact: "इसकी भीतरी सतह पर श्लेष्मा और रोमक (Cilia) धूल व रोगाणुओं को फेफड़ों में जाने से रोकते हैं।",
        },
        bronchi: {
          name: "श्वसनी व श्वसनिकाएँ",
          en: "Bronchi & Bronchioles",
          role: "शाखित वायु नलिकाएँ",
          summary:
            "श्वासनली दोनों फेफड़ों में दाईं और बाईं श्वसनी में बंटती है, जो पेड़ की शाखाओं की तरह पतली श्वसनिकाओं में विभाजित होकर कूपिकाओं तक जाती हैं।",
          keyFact: "यह तंत्र लगभग 30 करोड़ कूपिकाओं तक ताज़ी वायु पहुँचाता है।",
        },
        lungs: {
          name: "फेफड़े",
          en: "Lungs",
          role: "मुख्य श्वसन अंग",
          summary:
            "पसलियों के पिंजरे में सुरक्षित एक जोड़ी स्पंजी और लचीले अंग। दाएँ फेफड़े में 3 खंड और बाएँ फेफड़े में हृदय के स्थान के कारण 2 खंड होते हैं।",
          keyFact: "फेफड़ों में अपनी पेशियाँ नहीं होतीं—वे डायाफ्राम और पसलियों के दाब अंतर से फैलते-सिकुड़ते हैं।",
        },
        diaphragm: {
          name: "डायाफ्राम",
          en: "Diaphragm",
          role: "गुंबद के आकार की श्वसन पेशी",
          summary:
            "वक्ष गुहा को उदर गुहा से अलग करने वाली मजबूत पेशीय परत। सिकुड़कर नीचे चपटा होने पर वायु अंदर आती है और शिथिल होकर ऊपर उठने पर वायु बाहर निकलती है।",
          keyFact: "सामान्य श्वसन का लगभग 70–75% कार्य डायाफ्राम करता है।",
        },
        heartLoop: {
          name: "हृदय–फेफड़ा रक्त परिपथ",
          en: "Pulmonary Circulation",
          role: "CO₂ रक्त अंदर • O₂ रक्त बाहर",
          summary:
            "हृदय का दायाँ निलय फुफ्फुसीय धमनी द्वारा ऑक्सीजनरहित (CO₂ युक्त) रक्त फेफड़ों में भेजता है। गैस विनिमय के बाद ऑक्सीजनयुक्त रक्त फुफ्फुसीय शिराओं द्वारा बाएँ अलिंद में लौटता है।",
          keyFact: "नीले कण हृदय से फेफड़ों में जाते और लाल कण फेफड़ों से हृदय में लौटते देखें!",
        },
        alveolus: {
          name: "कूपिका (वायुकोष)",
          en: "Alveolus",
          role: "O₂ / CO₂ गैस विनिमय स्थल",
          summary:
            "गुब्बारे जैसी सूक्ष्म थैली जिसकी दीवार केवल एक कोशिका मोटी होती है और केशिकाओं के जाल से घिरी होती है। सभी कूपिकाएँ मिलकर ~70–80 वर्ग मीटर सतह बनाती हैं।",
          keyFact: "कूपिका की नम परत O₂ को घोलकर तेज़ी से रक्त में विसरित करती है।",
        },
        capillary: {
          name: "फुफ्फुसीय केशिका व RBC",
          en: "Pulmonary Capillary",
          role: "हीमोग्लोबिन परिवहन (Hb + O₂ → HbO₂)",
          summary:
            "कूपिका को घेरने वाली अत्यंत पतली रक्त नलिका। इसमें RBC एक कतार में गुजरते हुए CO₂ छोड़ते हैं और हीमोग्लोबिन से O₂ जोड़कर चमकदार लाल ऑक्सीहीमोग्लोबिन बनाते हैं।",
          keyFact: "यह विनिमय बिना ऊर्जा खर्च किए शुद्ध विसरण (Diffusion) द्वारा होता है।",
        },
        membrane: {
          name: "विसरण झिल्ली",
          en: "Respiratory Membrane",
          role: "उच्च से निम्न सांद्रता",
          summary:
            "कूपिका और केशिका की दीवार से बनी ~0.5 माइक्रोमीटर पतली झिल्ली। गैसें 0.25 सेकंड से कम समय में अपनी सांद्रता प्रवणता के अनुसार इसे पार कर लेती हैं।",
          keyFact: "नम झिल्ली में CO₂, O₂ की तुलना में लगभग 20 गुना अधिक आसानी से विसरित होती है।",
        },
      },
      lesson: {
        heading: "कक्षा 9–10 पाठ योजना: मानव श्वसन तंत्र",
        sections: [
          {
            title: "1. परिभाषा: श्वासोच्छ्वास बनाम कोशिकीय श्वसन",
            html: `<p><strong>श्वासोच्छ्वास (Breathing):</strong> O₂ युक्त वायु को फेफड़ों में लेना और CO₂ युक्त वायु को बाहर छोड़ना एक भौतिक प्रक्रिया है। इसमें ऊर्जा मुक्त नहीं होती।</p>
            <p style="margin-top:6px"><strong>कोशिकीय श्वसन (Cellular Respiration):</strong> कोशिका (माइटोकॉन्ड्रिया) के भीतर ग्लूकोज़ का ऑक्सीकरण होकर उपयोगी ऊर्जा (<strong>ATP</strong>) मुक्त होने की जैव-रासायनिक प्रक्रिया।</p>
            <div class="detail-fact" style="margin-top:8px"><strong>वायवीय समीकरण:</strong><br/>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> (ग्लूकोज़) + 6O<sub>2</sub> → 6CO<sub>2</sub> + 6H<sub>2</sub>O + ऊर्जा (38 ATP)</div>`,
          },
          {
            title: "2. वायु का संपूर्ण मार्ग",
            html: `<p>नासाछिद्र → नासागुहा → ग्रसनी (Pharynx) → स्वरयंत्र (Larynx) → <strong>श्वासनली (Trachea)</strong> (C-आकार के उपास्थि वलय) → <strong>श्वसनी (Bronchi)</strong> → <strong>श्वसनिकाएँ (Bronchioles)</strong> → <strong>कूपिकाएँ (Alveoli)</strong>।</p>`,
          },
          {
            title: "3. श्वसन की कार्यविधि (दाब और आयतन का विज्ञान)",
            html: `<p>वायु सदैव <strong>उच्च दाब से निम्न दाब</strong> की ओर बहती है:</p>
            <p style="margin-top:6px">• <strong>अंतःश्वसन (Inhalation):</strong> डायाफ्राम सिकुड़कर चपटा ↓ होता है और पसलियाँ ऊपर-बाहर उठती हैं → वक्ष आयतन <strong>बढ़ता है</strong> → फेफड़ों में दाब घटता है → वायु <strong>अंदर</strong> आती है।</p>
            <p style="margin-top:6px">• <strong>निःश्वसन (Exhalation):</strong> डायाफ्राम शिथिल होकर ऊपर ↑ गुंबद बनाता है और पसलियाँ नीचे आती हैं → वक्ष आयतन <strong>घटता है</strong> → दाब बढ़ता है → CO₂ युक्त वायु <strong>बाहर</strong> जाती है।</p>`,
          },
          {
            title: "4. हृदय और फेफड़ों के बीच O₂ व CO₂ का आदान-प्रदान",
            html: `<p><strong>चरण 1 (हृदय से आगमन):</strong> शरीर से आया CO₂ युक्त रक्त हृदय के <strong>दाएँ निलय</strong> से <strong>फुफ्फुसीय धमनी</strong> द्वारा फेफड़ों की केशिकाओं में पहुँचता है।</p>
            <p style="margin-top:6px"><strong>चरण 2 (कूपिका में विसरण):</strong> कूपिका में O₂ अधिक और रक्त में CO₂ अधिक होती है। <strong>विसरण (Diffusion)</strong> द्वारा O₂ RBC के <strong>हीमोग्लोबिन (Hb + O₂ → HbO₂)</strong> से जुड़कर रक्त को लाल बनाती है और CO₂ बाहर निकलने हेतु कूपिका में चली जाती है।</p>
            <p style="margin-top:6px"><strong>चरण 3 (हृदय में वापसी):</strong> शुद्ध O₂ युक्त रक्त <strong>फुफ्फुसीय शिराओं</strong> द्वारा हृदय के <strong>बाएँ अलिंद</strong> → बाएँ निलय → महाधमनी से पूरे शरीर में भेजा जाता है।</p>`,
          },
          {
            title: "5. बोर्ड परीक्षा के महत्वपूर्ण तथ्य",
            html: `<p>• <strong>अवशिष्ट आयतन (Residual Volume):</strong> बलपूर्वक श्वास छोड़ने के बाद भी फेफड़ों में ~1100–1200 mL वायु शेष रहती है ताकि गैस विनिमय निरंतर चलता रहे।<br/>
            • <strong>कार्बन मोनोऑक्साइड (CO):</strong> हीमोग्लोबिन से O₂ की तुलना में ~200 गुना तेज़ी से जुड़ती है, इसलिए जहरीली होती है।</p>`,
          },
        ],
      },
      quiz: {
        title: "कक्षा 9–10 त्वरित अभ्यास",
        correctMsg: "बिल्कुल सही! वैज्ञानिक अवधारणा स्पष्ट है।",
        wrongMsg: "सही नहीं — नीचे दिया गया स्पष्टीकरण पढ़ें।",
        nextBtn: "अगला प्रश्न",
        restartBtn: "फिर से शुरू करें",
        scoreLabel: "स्कोर",
        questions: [
          {
            q: "वायु दाब कम होने पर भी श्वासनली (Trachea) क्यों नहीं चिपकती?",
            options: [
              "क्योंकि यह ठोस हड्डी से बनी है",
              "क्योंकि इसमें C-आकार के उपास्थि (Cartilage) वलय होते हैं",
              "क्योंकि इसमें रक्त भरा होता है",
              "क्योंकि डायाफ्राम इसे पकड़े रहता है",
            ],
            answer: 1,
            explain: "C-आकार के उपास्थि वलय श्वासनली को हमेशा खुला बनाए रखते हैं।",
          },
          {
            q: "हृदय के दाएँ निलय से CO₂ युक्त रक्त फेफड़ों तक कौन ले जाती है?",
            options: ["महाधमनी", "फुफ्फुसीय शिरा", "फुफ्फुसीय धमनी", "ऊर्ध्व महाशिरा"],
            answer: 2,
            explain: "फुफ्फुसीय धमनी दाएँ निलय से ऑक्सीजनरहित रक्त फेफड़ों में ले जाती है।",
          },
          {
            q: "अंतःश्वसन (Inhalation) के समय डायाफ्राम और फेफड़ों के दाब में क्या होता है?",
            options: [
              "डायाफ्राम नीचे चपटा होता है; फेफड़ों का दाब घटता है",
              "डायाफ्राम ऊपर उठता है; दाब बढ़ता है",
              "डायाफ्राम नीचे चपटा होता है; दाब बढ़ता है",
              "डायाफ्राम स्थिर रहता है",
            ],
            answer: 0,
            explain: "डायाफ्राम चपटा होने से वक्ष का आयतन बढ़ता है और दाब घटने से वायु अंदर प्रवेश करती है।",
          },
          {
            q: "कूपिका और रक्त केशिका के बीच O₂ व CO₂ का विनिमय किस प्रक्रिया से होता है?",
            options: ["परासरण (Osmosis)", "सक्रिय परिवहन", "विसरण (Diffusion)", "निस्पंदन"],
            answer: 2,
            explain: "गैसें विसरण द्वारा उच्च सांद्रता से निम्न सांद्रता की ओर स्वतः गति करती हैं।",
          },
          {
            q: "RBC में कौन-सा वर्णक ऑक्सीजन से जुड़कर ऑक्सीहीमोग्लोबिन बनाता है?",
            options: ["क्लोरोफिल", "हीमोग्लोबिन", "मेलानिन", "प्लेटलेट्स"],
            answer: 1,
            explain: "लौहयुक्त हीमोग्लोबिन (Hb) ऑक्सीजन के परिवहन का मुख्य माध्यम है।",
          },
        ],
      },
    },

    bn: {
      chapterBadge: "অধ্যায় ০২ • শ্রেণি ৯–১০ ল্যাব",
      title: "মানব শ্বসন তন্ত্র — লাইভ ল্যাব",
      subtitle:
        "শ্বাসক্রিয়ার কৌশল, হৃৎপিণ্ড–ফুসফুস রক্তচক্র এবং সূক্ষ্ম অ্যালভিওলাই-এ O₂ / CO₂ বিনিময় লাইভ দেখুন",
      views: {
        lungs: "ফুসফুস ও হৃৎপিণ্ড চক্র",
        alveoli: "অ্যালভিওলাই O₂ / CO₂ জুম",
      },
      toggles: {
        pause: "থামান",
        play: "চালান",
        pins: "হটস্পট পিন",
      },
      metrics: {
        rate: "শ্বসন হার",
        tidal: "টাইডাল আয়তন",
        vent: "বায়ু / মিনিট",
        phase: "শ্বাসের দশা",
        inhale: "প্রশ্বাস (বায়ু প্রবেশ)",
        exhale: "নিঃশ্বাস (বায়ু ত্যাগ)",
        perMin: "/মিনিট",
        lMin: "লি/মিনিট",
      },
      brpmControl: "শ্বসন হার (শ্বাস / মিনিট)",
      presets: {
        yoga: "গভীর বিশ্রাম (12)",
        normal: "স্বাভাবিক (16)",
        walk: "দ্রুত হাঁটা (24)",
        run: "দৌড় (36)",
      },
      tabs: {
        inspect: "অঙ্গ পরিদর্শক",
        lesson: "শ্রেণি ৯–১০ পাঠ",
        quiz: "দ্রুত যাচাই",
      },
      selectPrompt:
        "গঠন ও বিজ্ঞান জানতে চিত্রের যেকোনো জ্বলন্ত পিনে ট্যাপ করুন (অথবা অ্যালভিওলাই জুম দেখুন)।",
      canvasLabels: {
        pulmArt: "হৃৎপিণ্ড থেকে (CO₂ রক্ত)",
        pulmVein: "হৃৎপিণ্ডের দিকে (O₂ রক্ত)",
        rightVent: "ডান নিলয়",
        leftAtr: "বাম অলিন্দ",
        diaphragm: "মধ্যচ্ছদা",
        pressureIn: "বক্ষ আয়তন ↑ • চাপ ↓ (বায়ু প্রবেশ)",
        pressureOut: "বক্ষ আয়তন ↓ • চাপ ↑ (বায়ু ত্যাগ)",
        alvAir: "অ্যালভিওলাই বায়ুথলি (বেশি O₂)",
        capIn: "হৃৎপিণ্ড থেকে (CO₂ যুক্ত)",
        capOut: "হৃৎপিণ্ডে (O₂ যুক্ত HbO₂)",
        o2Diff: "O₂ রক্তে ব্যাপিত হয়",
        co2Diff: "CO₂ বায়ুথলিতে বেরোয়",
      },
      hotspots: {
        trachea: {
          name: "শ্বাসনালী",
          en: "Trachea",
          role: "বায়ুপথ • C-আকৃতির তরুণাস্থি বলয়",
          summary:
            "প্রায় ১০–১২ সেমি লম্বা নালী যা স্বরযন্ত্রকে ব্রঙ্কাইয়ের সাথে যুক্ত করে। এর C-আকৃতির তরুণাস্থি বলয় বায়ুর চাপ কমে গেলেও নালীটিকে চুপসে যেতে দেয় না।",
          keyFact: "এর ভেতরের মিউকাস ও সিলিয়া ধুলোবালি ও জীবাণু আটকে বাইরে বের করে দেয়।",
        },
        bronchi: {
          name: "ব্রঙ্কাই ও ব্রঙ্কিওল",
          en: "Bronchi & Bronchioles",
          role: "শাখান্বিত বায়ুনালী",
          summary:
            "শ্বাসনালী দুটি প্রধান ব্রঙ্কাইয়ে ভাগ হয়ে দুই ফুসফুসে প্রবেশ করে এবং গাছের ডালের মতো সূক্ষ্ম ব্রঙ্কিওলে বিভক্ত হয়ে অ্যালভিওলাইয়ে শেষ হয়।",
          keyFact: "এই শাখা-প্রশাখা প্রায় ৩০ কোটি অ্যালভিওলাইয়ে তাজা বাতাস পৌঁছে দেয়।",
        },
        lungs: {
          name: "ফুসফুস",
          en: "Lungs",
          role: "প্রধান শ্বসন অঙ্গ",
          summary:
            "পাঁজরের খাঁচায় সুরক্ষিত একজোড়া স্পঞ্জের মতো স্থিতিস্থাপক অঙ্গ। ডান ফুসফুসে ৩টি এবং হৃৎপিণ্ডের জায়গার জন্য বাম ফুসফুসে ২টি খণ্ড থাকে।",
          keyFact: "ফুসফুসের নিজস্ব পেশী নেই—মধ্যচ্ছদা ও পাঁজরের পেশীর চাপ পরিবর্তনে এটি প্রসারিত ও সংকুচিত হয়।",
        },
        diaphragm: {
          name: "মধ্যচ্ছদা",
          en: "Diaphragm",
          role: "গম্বুজাকৃতি শ্বসন পেশী",
          summary:
            "বক্ষগহ্বর ও উদরগহ্বরকে পৃথককারী পেশীবহুল পর্দা। সংকুচিত হয়ে নিচে নামলে বাতাস ভেতরে ঢোকে এবং প্রসারিত হয়ে ওপরে উঠলে বাতাস বেরিয়ে যায়।",
          keyFact: "স্বাভাবিক শ্বাসক্রিয়ার প্রায় ৭০–৭৫% কাজ মধ্যচ্ছদা সম্পন্ন করে।",
        },
        heartLoop: {
          name: "হৃৎপিণ্ড–ফুসফুস রক্তচক্র",
          en: "Pulmonary Circulation",
          role: "CO₂ রক্ত প্রবেশ • O₂ রক্ত প্রস্থান",
          summary:
            "হৃৎপিণ্ডের ডান নিলয় ফুসফুসীয় ধমনীর মাধ্যমে অক্সিজেনবিহীন (CO₂-যুক্ত) রক্ত ফুসফুসে পাঠায়। গ্যাসীয় বিনিময়ের পর অক্সিজেনযুক্ত রক্ত ফুসফুসীয় শিরার মাধ্যমে বাম অলিন্দে ফিরে আসে।",
          keyFact: "নীল কণাগুলো হৃৎপিণ্ড থেকে ফুসফুসে যাচ্ছে এবং লাল কণাগুলো ফুসফুস থেকে হৃৎপিণ্ডে ফিরছে!",
        },
        alveolus: {
          name: "অ্যালভিওলাই (বায়ুথলি)",
          en: "Alveolus",
          role: "O₂ / CO₂ গ্যাসীয় বিনিময় কেন্দ্র",
          summary:
            "বেলুনের মতো সূক্ষ্ম থলি যার প্রাচীর মাত্র এক কোষ পুরু এবং রক্তজালক দিয়ে ঘেরা। সব অ্যালভিওলাই মিলে ~৭০–৮০ বর্গমিটার পৃষ্ঠতল তৈরি করে।",
          keyFact: "ভেতরের পাতলা আর্দ্র স্তরে O₂ দ্রবীভূত হয়ে দ্রুত রক্তে ব্যাপিত হয়।",
        },
        capillary: {
          name: "ফুসফুসীয় রক্তজালক ও RBC",
          en: "Pulmonary Capillary",
          role: "হিমোগ্লোবিন পরিবহন (Hb + O₂ → HbO₂)",
          summary:
            "অ্যালভিওলাইকে ঘিরে থাকা অতি সূক্ষ্ম রক্তনালী। এর ভেতর দিয়ে লোহিত রক্তকণিকা (RBC) সারিবদ্ধভাবে যাওয়ার সময় CO₂ ছেড়ে দেয় এবং হিমোগ্লোবিনের সাথে O₂ যুক্ত করে উজ্জ্বল লাল অক্সিহিমোগ্লোবিন তৈরি করে।",
          keyFact: "এই গ্যাস বিনিময় সম্পূর্ণ নিষ্ক্রিয় ব্যাপন (Diffusion) প্রক্রিয়ায় ঘটে, কোনো ATP খরচ হয় না।",
        },
        membrane: {
          name: "ব্যাপন পর্দা",
          en: "Respiratory Membrane",
          role: "বেশি থেকে কম ঘনত্ব",
          summary:
            "অ্যালভিওলাই ও রক্তজালকের প্রাচীর মিলে তৈরি মাত্র ~০.৫ মাইক্রোমিটার পুরু পর্দা। গ্যাসগুলো ০.২৫ সেকেন্ডের কম সময়ে এটি অতিক্রম করে।",
          keyFact: "আর্দ্র পর্দার মধ্য দিয়ে CO₂, O₂-এর চেয়ে প্রায় ২০ গুণ দ্রুত ব্যাপিত হতে পারে।",
        },
      },
      lesson: {
        heading: "শ্রেণি ৯–১০ পাঠ পরিকল্পনা: মানব শ্বসন তন্ত্র",
        sections: [
          {
            title: "১. সংজ্ঞা: শ্বাসকার্য বনাম কোষীয় শ্বসন",
            html: `<p><strong>শ্বাসকার্য (Breathing):</strong> পরিবেশ থেকে O₂-যুক্ত বায়ু ফুসফুসে গ্রহণ ও CO₂-যুক্ত বায়ু ত্যাগ করার ভৌত প্রক্রিয়া। এতে কোনো শক্তি উৎপন্ন হয় না।</p>
            <p style="margin-top:6px"><strong>কোষীয় শ্বসন (Cellular Respiration):</strong> প্রতিটি জীবকোষের (মাইটোকন্ড্রিয়া) ভেতরে O₂-এর সাহায্যে গ্লুকোজ জারিত হয়ে ব্যবহারযোগ্য শক্তি (<strong>ATP</strong>) উৎপন্ন হওয়ার জৈব-রাসায়নিক প্রক্রিয়া।</p>
            <div class="detail-fact" style="margin-top:8px"><strong>সবাত শ্বসন সমীকরণ:</strong><br/>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> (গ্লুকোজ) + 6O<sub>2</sub> → 6CO<sub>2</sub> + 6H<sub>2</sub>O + শক্তি (38 ATP)</div>`,
          },
          {
            title: "২. বায়ু চলাচলের সম্পূর্ণ পথ",
            html: `<p>নাসারন্ধ্র → নাসাগহ্বর → গলবিল (Pharynx) → স্বরযন্ত্র (Larynx) → <strong>শ্বাসনালী (Trachea)</strong> (C-আকৃতির তরুণাস্থি বলয়) → <strong>ব্রঙ্কাই (Bronchi)</strong> → <strong>ব্রঙ্কিওল (Bronchioles)</strong> → <strong>অ্যালভিওলাই (Alveoli)</strong>।</p>`,
          },
          {
            title: "৩. শ্বাসকার্যের বিজ্ঞান (চাপ ও আয়তন)",
            html: `<p>বায়ু সর্বদা <strong>উচ্চ চাপ থেকে নিম্ন চাপের</strong> দিকে প্রবাহিত হয়:</p>
            <p style="margin-top:6px">• <strong>প্রশ্বাস (Inhalation):</strong> মধ্যচ্ছদা সংকুচিত হয়ে নিচে সমতল ↓ হয় এবং পাঁজর ওপরে ও বাইরে সরে → বক্ষগহ্বরের আয়তন <strong>বাড়ে</strong> → ফুসফুসের ভেতরে চাপ কমে → বাইরের তাজা বাতাস <strong>ভেতরে</strong> ঢোকে।</p>
            <p style="margin-top:6px">• <strong>নিঃশ্বাস (Exhalation):</strong> মধ্যচ্ছদা শিথিল হয়ে গম্বুজের মতো ওপরে ↑ ওঠে এবং পাঁজর নিচে নামে → আয়তন <strong>কমে</strong> → চাপ বাড়ে → CO₂-যুক্ত বাতাস <strong>বাইরে</strong> বেরিয়ে যায়।</p>`,
          },
          {
            title: "৪. হৃৎপিণ্ড ও ফুসফুসের মধ্যে O₂ এবং CO₂ বিনিময়",
            html: `<p><strong>ধাপ ১ (হৃৎপিণ্ড থেকে আগমন):</strong> দেহকোষে উৎপন্ন CO₂-যুক্ত অক্সিজেনবিহীন রক্ত হৃৎপিণ্ডের <strong>ডান নিলয়</strong> থেকে <strong>ফুসফুসীয় ধমনী</strong> দিয়ে ফুসফুসের রক্তজালকে আসে।</p>
            <p style="margin-top:6px"><strong>ধাপ ২ (অ্যালভিওলাইয়ে ব্যাপন):</strong> অ্যালভিওলাইয়ে O₂ বেশি ও রক্তে CO₂ বেশি থাকে। <strong>ব্যাপন (Diffusion)</strong> প্রক্রিয়ায় O₂ RBC-র <strong>হিমোগ্লোবিনের (Hb + O₂ → HbO₂)</strong> সাথে যুক্ত হয়ে রক্তকে উজ্জ্বল লাল করে, আর CO₂ বায়ুথলিতে বেরিয়ে আসে।</p>
            <p style="margin-top:6px"><strong>ধাপ ৩ (হৃৎপিণ্ডে প্রত্যাবর্তন):</strong> বিশুদ্ধ O₂-যুক্ত রক্ত <strong>ফুসফুসীয় শিরা</strong> দিয়ে হৃৎপিণ্ডের <strong>বাম অলিন্দে</strong> → বাম নিলয় → মহাধমনী হয়ে সারা দেহে ছড়িয়ে পড়ে।</p>`,
          },
          {
            title: "৫. মাধ্যমিক / শ্রেণি ৯–১০ পরীক্ষার গুরুত্বপূর্ণ তথ্য",
            html: `<p>• <strong>অবশিষ্ট আয়তন (Residual Volume):</strong> জোর করে নিঃশ্বাস ছাড়ার পরও ফুসফুসে ~১১০০–১২০০ mL বায়ু থেকে যায় যাতে অ্যালভিওলাই চুপসে না যায়।<br/>
            • <strong>কার্বন মনোক্সাইড (CO):</strong> হিমোগ্লোবিনের সাথে O₂-এর চেয়ে ~২০০ গুণ বেশি শক্তিশালীভাবে যুক্ত হয়ে অক্সিজেন পরিবহন বন্ধ করে দেয়।</p>`,
          },
        ],
      },
      quiz: {
        title: "শ্রেণি ৯–১০ তাৎক্ষণিক যাচাই",
        correctMsg: "একদম সঠিক! বিজ্ঞানের ধারণাটি পরিষ্কার।",
        wrongMsg: "সঠিক নয় — নিচের ব্যাখ্যাটি দেখে নিন।",
        nextBtn: "পরবর্তী প্রশ্ন",
        restartBtn: "আবার শুরু করুন",
        scoreLabel: "স্কোর",
        questions: [
          {
            q: "বায়ুর চাপ কমে গেলেও শ্বাসনালী (Trachea) চুপসে যায় না কেন?",
            options: [
              "এটি শক্ত হাড় দিয়ে তৈরি",
              "এতে C-আকৃতির তরুণাস্থি (Cartilage) বলয় থাকে",
              "এটি রক্তে পূর্ণ থাকে",
              "মধ্যচ্ছদা এটিকে টেনে রাখে",
            ],
            answer: 1,
            explain: "C-আকৃতির তরুণাস্থি বলয় শ্বাসনালীকে সর্বদা খোলা রাখে।",
          },
          {
            q: "হৃৎপিণ্ডের ডান নিলয় থেকে CO₂-যুক্ত রক্ত ফুসফুসে নিয়ে যায় কোন রক্তনালী?",
            options: ["মহাধমনী", "ফুসফুসীয় শিরা", "ফুসফুসীয় ধমনী", "ঊর্ধ্ব মহাশিরা"],
            answer: 2,
            explain: "ফুসফুসীয় ধমনী ডান নিলয় থেকে অক্সিজেনবিহীন রক্ত ফুসফুসে বহন করে।",
          },
          {
            q: "প্রশ্বাসের (Inhalation) সময় মধ্যচ্ছদা ও ফুসফুসের চাপে কী পরিবর্তন হয়?",
            options: [
              "মধ্যচ্ছদা নিচে সমতল হয়; ফুসফুসের চাপ কমে",
              "মধ্যচ্ছদা ওপরে ওঠে; চাপ বাড়ে",
              "মধ্যচ্ছদা নিচে নামে; চাপ বাড়ে",
              "মধ্যচ্ছদার কোনো নড়াচড়া হয় না",
            ],
            answer: 0,
            explain: "মধ্যচ্ছদা নিচে নামলে বক্ষের আয়তন বাড়ে এবং চাপ কমে গিয়ে বাইরের বাতাস ভেতরে ঢোকে।",
          },
          {
            q: "অ্যালভিওলাই ও রক্তজালকের মধ্যে O₂ এবং CO₂ কোন প্রক্রিয়ায় বিনিময় হয়?",
            options: ["অভিস্রবণ (Osmosis)", "সক্রিয় পরিবহন", "ব্যাপন (Diffusion)", "পরিস্রাবণ"],
            answer: 2,
            explain: "গ্যাসগুলো ব্যাপন প্রক্রিয়ায় বেশি ঘনত্ব থেকে কম ঘনত্বের দিকে প্রবাহিত হয়।",
          },
          {
            q: "RBC-তে থাকা কোন রঞ্জক পদার্থ অক্সিজেন যুক্ত করে অক্সিহিমোগ্লোবিন গঠন করে?",
            options: ["ক্লোরোফিল", "হিমোগ্লোবিন", "মেলানিন", "অণুচক্রিকা"],
            answer: 1,
            explain: "লৌহযুক্ত হিমোগ্লোবিন (Hb) অক্সিজেন পরিবহনের প্রধান বাহক।",
          },
        ],
      },
    },
  };

  // Hotspot Pins for both simulation views (percentage coordinates matching 420 x 440 canvas)
  const LUNG_PINS = [
    { id: "trachea", x: 50.0, y: 18.0, tone: "venous" },
    { id: "bronchi", x: 37.0, y: 34.0, tone: "venous" },
    { id: "lungs", x: 75.5, y: 45.0, tone: "venous" },
    { id: "heartLoop", x: 52.0, y: 51.0, tone: "arterial" },
    { id: "diaphragm", x: 50.0, y: 74.0, tone: "electric" },
  ];

  const ALVEOLI_PINS = [
    { id: "alveolus", x: 50.0, y: 36.0, tone: "venous" },
    { id: "membrane", x: 50.0, y: 63.5, tone: "electric" },
    { id: "capillary", x: 73.0, y: 74.0, tone: "arterial" },
    { id: "heartLoop", x: 25.0, y: 74.0, tone: "venous" },
  ];

  // Heart <-> Lung Blood Paths inside 420 x 440 stage
  // Pulmonary Artery (Deoxygenated Cyan: Heart Right Ventricle -> Left & Right Lungs)
  const PULM_ART_PATHS = [
    [[204, 232], [198, 198], [166, 184], [126, 196], [96, 224]],
    [[204, 232], [216, 196], [254, 184], [294, 196], [322, 224]],
  ];

  // Pulmonary Veins (Oxygenated Crimson: Left & Right Lungs -> Heart Left Atrium)
  const PULM_VEIN_PATHS = [
    [[98, 248], [134, 258], [178, 248], [218, 228]],
    [[320, 248], [284, 258], [244, 246], [222, 228]],
  ];

  // Alveolar Capillary Path (Left -> Bottom Curve -> Right)
  const CAPILLARY_PATH = [
    [26, 290],
    [72, 314],
    [136, 336],
    [210, 344],
    [284, 336],
    [348, 314],
    [394, 290],
  ];

  const ui = {
    view: "lungs", // "lungs" | "alveoli"
    brpm: 16,
    paused: false,
    showPins: true,
    selectedHotspot: "heartLoop",
    activeTab: "inspect", // "inspect" | "lesson" | "quiz"
    phase: "inhale", // "inhale" | "exhale"
    qIndex: 0,
    selectedOption: null,
    score: 0,
    quizDone: false,
  };

  function getRespDict() {
    const lang = BL.getState().lang;
    return RESP_DICT[lang] || RESP_DICT.en;
  }

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

  function lerpColor(r1, g1, b1, r2, g2, b2, t) {
    const c = Math.max(0, Math.min(1, t));
    const r = Math.round(r1 + (r2 - r1) * c);
    const g = Math.round(g1 + (g2 - g1) * c);
    const b = Math.round(b1 + (b2 - b1) * c);
    return `rgb(${r},${g},${b})`;
  }

  function renderPins() {
    const layer = document.getElementById("resp-pins-layer");
    if (!layer) return;
    const rd = getRespDict();
    const pins = ui.view === "lungs" ? LUNG_PINS : ALVEOLI_PINS;

    layer.classList.toggle("hidden", !ui.showPins);
    layer.innerHTML = "";

    pins.forEach((pin) => {
      const data = rd.hotspots[pin.id];
      if (!data) return;
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
        syncRespUI();
      });

      layer.appendChild(btn);
    });
  }

  function renderReaderBody() {
    const bodyEl = document.getElementById("resp-reader-body");
    if (!bodyEl) return;
    const rd = getRespDict();

    document.querySelectorAll(".tab-btn").forEach((b) => {
      b.classList.toggle("active", b.getAttribute("data-tab") === ui.activeTab);
    });

    bodyEl.innerHTML = "";

    if (ui.activeTab === "inspect") {
      const hint = document.createElement("p");
      hint.className = "heart-subtitle";
      hint.textContent = rd.selectPrompt;
      bodyEl.appendChild(hint);

      const allIds = Object.keys(rd.hotspots);
      const pillsWrap = document.createElement("div");
      pillsWrap.className = "part-pills";
      allIds.forEach((id) => {
        const item = rd.hotspots[id];
        const pill = document.createElement("button");
        pill.type = "button";
        pill.className = `part-pill${ui.selectedHotspot === id ? " active" : ""}`;
        pill.textContent = item.name;
        pill.addEventListener("click", () => {
          ui.selectedHotspot = id;
          if (["alveolus", "capillary", "membrane"].includes(id)) {
            ui.view = "alveoli";
          } else if (["trachea", "bronchi", "lungs", "diaphragm"].includes(id)) {
            ui.view = "lungs";
          }
          syncRespUI();
        });
        pillsWrap.appendChild(pill);
      });
      bodyEl.appendChild(pillsWrap);

      const activeItem = rd.hotspots[ui.selectedHotspot] || rd.hotspots.heartLoop;
      const box = document.createElement("div");
      box.className = "detail-box";
      box.innerHTML = `
        <span class="detail-type">${activeItem.role}</span>
        <h2 class="detail-title">${BL.term(activeItem)}</h2>
        <p class="detail-summary">${activeItem.summary}</p>
        <div class="detail-fact">💡 ${activeItem.keyFact}</div>
      `;
      bodyEl.appendChild(box);
    } else if (ui.activeTab === "lesson") {
      const heading = document.createElement("h2");
      heading.className = "detail-title";
      heading.style.marginTop = "0";
      heading.textContent = rd.lesson.heading;
      bodyEl.appendChild(heading);

      rd.lesson.sections.forEach((sec) => {
        const card = document.createElement("div");
        card.className = "chapter-sec";
        card.innerHTML = `<h3>${sec.title}</h3><div style="margin-top:6px;font-size:13.5px;line-height:1.68">${sec.html}</div>`;
        bodyEl.appendChild(card);
      });
    } else if (ui.activeTab === "quiz") {
      const qs = rd.quiz.questions;
      const topBar = document.createElement("div");
      topBar.className = "control-head";
      topBar.innerHTML = `
        <h2 class="detail-title" style="margin-top:0">${rd.quiz.title}</h2>
        <span class="accent-pill">${rd.quiz.scoreLabel}: ${ui.score}/${qs.length}</span>
      `;
      bodyEl.appendChild(topBar);

      if (ui.quizDone) {
        const doneBox = document.createElement("div");
        doneBox.className = "detail-box";
        doneBox.style.textAlign = "center";
        doneBox.style.marginTop = "12px";
        doneBox.innerHTML = `
          <p class="detail-title">${ui.score} / ${qs.length}</p>
          <button id="btn-resp-quiz-restart" type="button" class="secondary-cta" style="margin-top:14px">${rd.quiz.restartBtn}</button>
        `;
        bodyEl.appendChild(doneBox);
        const rst = document.getElementById("btn-resp-quiz-restart");
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
          <strong style="color:${ok ? "#56c99b" : "var(--arterial)"}">${ok ? rd.quiz.correctMsg : rd.quiz.wrongMsg}</strong>
          <p style="margin-top:4px">${cur.explain}</p>
          <button id="btn-resp-quiz-next" type="button" class="secondary-cta" style="margin-top:10px">${rd.quiz.nextBtn}</button>
        `;
        bodyEl.appendChild(fb);
        const nxt = document.getElementById("btn-resp-quiz-next");
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

  function syncRespUI() {
    const rd = getRespDict();
    const setText = (id, txt) => {
      const el = document.getElementById(id);
      if (el) el.textContent = txt;
    };

    setText("resp-chapter-badge", rd.chapterBadge);
    setText("resp-title", rd.title);
    setText("resp-subtitle", rd.subtitle);
    setText("lbl-view-lungs", rd.views.lungs);
    setText("lbl-view-alveoli", rd.views.alveoli);
    setText("lbl-resp-pins", rd.toggles.pins);

    setText("lbl-m-rate", rd.metrics.rate);
    setText("lbl-m-tidal", rd.metrics.tidal);
    setText("lbl-m-vent", rd.metrics.vent);
    setText("lbl-m-phase", rd.metrics.phase);
    setText("lbl-unit-brpm", rd.metrics.perMin);
    setText("lbl-unit-lmin", rd.metrics.lMin);
    setText("lbl-brpm-control", rd.brpmControl);

    setText("preset-yoga", rd.presets.yoga);
    setText("preset-normal", rd.presets.normal);
    setText("preset-walk", rd.presets.walk);
    setText("preset-run", rd.presets.run);

    setText("tab-resp-inspect", rd.tabs.inspect);
    setText("tab-resp-lesson", rd.tabs.lesson);
    setText("tab-resp-quiz", rd.tabs.quiz);

    // Derived Respiratory Metrics
    const tidal = ui.brpm <= 16 ? 500 : Math.min(720, Math.round(500 + (ui.brpm - 16) * 10));
    const minuteVent = ((ui.brpm * tidal) / 1000).toFixed(1);

    setText("metric-brpm", String(ui.brpm));
    setText("metric-tidal", String(tidal));
    setText("metric-vent", minuteVent);
    setText("brpm-pill", `${ui.brpm} ${rd.metrics.perMin}`);

    const slider = document.getElementById("brpm-slider");
    if (slider && document.activeElement !== slider) slider.value = String(ui.brpm);

    const phEl = document.getElementById("metric-resp-phase");
    if (phEl) {
      const isIn = ui.phase === "inhale";
      phEl.textContent = isIn ? rd.metrics.inhale : rd.metrics.exhale;
      phEl.className = `metric-phase${isIn ? "" : " systole"}`;
    }

    document.querySelectorAll(".preset-btn").forEach((b) => {
      b.classList.toggle("active", Number(b.getAttribute("data-brpm")) === ui.brpm);
    });

    const btnLungs = document.getElementById("btn-view-lungs");
    const btnAlv = document.getElementById("btn-view-alveoli");
    if (btnLungs) {
      btnLungs.classList.toggle("active-accent", ui.view === "lungs");
      btnLungs.setAttribute("aria-pressed", String(ui.view === "lungs"));
    }
    if (btnAlv) {
      btnAlv.classList.toggle("active-accent", ui.view === "alveoli");
      btnAlv.setAttribute("aria-pressed", String(ui.view === "alveoli"));
    }

    const pauseBtn = document.getElementById("btn-resp-pause");
    if (pauseBtn) {
      pauseBtn.innerHTML = ui.paused
        ? `▶ <span>${rd.toggles.play}</span>`
        : `⏸ <span>${rd.toggles.pause}</span>`;
    }

    const pinsBtn = document.getElementById("btn-resp-pins");
    if (pinsBtn) {
      pinsBtn.classList.toggle("active-accent", ui.showPins);
      pinsBtn.setAttribute("aria-pressed", String(ui.showPins));
    }

    renderPins();
    renderReaderBody();
  }

  // =========================================================
  // 60 FPS DUAL-VIEW SIMULATION ENGINE (Lungs + Alveoli Zoom)
  // =========================================================
  function startRespCanvas() {
    const canvas = document.getElementById("resp-canvas");
    const box = document.getElementById("resp-canvas-box");
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

    // Pre-allocate particles for Heart-Lung Blood Loop
    const pulmArtCells = [];
    PULM_ART_PATHS.forEach((p, idx) => {
      for (let i = 0; i < 8; i++) pulmArtCells.push({ pathIdx: idx, t: i / 8 });
    });
    const pulmVeinCells = [];
    PULM_VEIN_PATHS.forEach((p, idx) => {
      for (let i = 0; i < 8; i++) pulmVeinCells.push({ pathIdx: idx, t: i / 8 });
    });

    // Pre-allocate RBCs for Alveoli Capillary Zoom
    const capRbcs = [];
    for (let i = 0; i < 14; i++) {
      capRbcs.push({ t: i / 14 });
    }

    // Pre-allocate Diffusion Molecules (O2 down, CO2 up)
    const diffMols = [];
    for (let i = 0; i < 10; i++) {
      diffMols.push({
        kind: i % 2 === 0 ? "o2" : "co2",
        lane: (i % 5) - 2,
        t: i / 10,
      });
    }

    let lastTime = performance.now();
    let breathPhase = 0; // 0..1 (0..0.46 inhale, 0.46..1.0 exhale)
    let elapsed = 0;
    let lastPhaseReported = "inhale";

    function drawLungsView(ctx, breathAmt, isInhale, dt, isLight, rd) {
      const artColor = isLight ? "#c24b65" : "#e0637d";
      const venColor = isLight ? "#2c88a8" : "#52bed6";
      const airColor = isLight ? "#0284c7" : "#7dd3fc";
      const co2AirColor = isLight ? "#b58428" : "#dfb052";
      const textColor = isLight ? "#162235" : "#e6effa";
      const mutedColor = isLight ? "#556982" : "#8ca4c0";

      // 1. Trachea with C-shaped cartilage rings
      ctx.save();
      ctx.strokeStyle = isLight ? "rgba(44,136,168,0.45)" : "rgba(104,184,230,0.42)";
      ctx.lineWidth = 22;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(210, 36);
      ctx.lineTo(210, 140);
      ctx.stroke();

      // Cartilage rings
      ctx.strokeStyle = isLight ? "#e2e8f0" : "#bae6fd";
      ctx.lineWidth = 2.2;
      for (let y = 48; y <= 130; y += 11) {
        ctx.beginPath();
        ctx.moveTo(200, y);
        ctx.quadraticCurveTo(210, y + 3, 220, y);
        ctx.stroke();
      }

      // Left & Right Bronchi
      ctx.strokeStyle = isLight ? "rgba(44,136,168,0.5)" : "rgba(104,184,230,0.45)";
      ctx.lineWidth = 13;
      ctx.beginPath();
      ctx.moveTo(210, 134);
      ctx.quadraticCurveTo(175, 148, 144, 174);
      ctx.moveTo(210, 134);
      ctx.quadraticCurveTo(245, 148, 276, 174);
      ctx.stroke();
      ctx.restore();

      // 2. Expanding & Contracting Lungs
      const expandX = 1 + breathAmt * 0.085;
      const expandY = 1 + breathAmt * 0.065;

      const drawLung = (side) => {
        ctx.save();
        const cx = side === -1 ? 124 : 296;
        const cy = 222;
        ctx.translate(cx, cy);
        ctx.scale(expandX, expandY);
        ctx.translate(-cx, -cy);

        const grad = ctx.createRadialGradient(cx, cy, 12, cx, cy, 88);
        grad.addColorStop(
          0,
          isLight
            ? `rgba(43,126,179,${0.16 + breathAmt * 0.14})`
            : `rgba(104,184,230,${0.18 + breathAmt * 0.18})`
        );
        grad.addColorStop(1, isLight ? "rgba(226,232,240,0.5)" : "rgba(15,28,48,0.65)");

        ctx.fillStyle = grad;
        ctx.strokeStyle =
          ui.selectedHotspot === "lungs" ? airColor : isLight ? "#64748b" : "rgba(104,184,230,0.55)";
        ctx.lineWidth = ui.selectedHotspot === "lungs" ? 2.8 : 1.8;

        ctx.beginPath();
        if (side === -1) {
          // Anatomical Right Lung (viewer's left)
          ctx.moveTo(172, 136);
          ctx.bezierCurveTo(120, 130, 68, 176, 68, 248);
          ctx.bezierCurveTo(68, 294, 114, 306, 168, 292);
          ctx.bezierCurveTo(178, 252, 178, 184, 172, 136);
        } else {
          // Anatomical Left Lung (viewer's right, cardiac notch)
          ctx.moveTo(248, 136);
          ctx.bezierCurveTo(300, 130, 352, 176, 352, 248);
          ctx.bezierCurveTo(352, 294, 306, 306, 256, 292);
          ctx.bezierCurveTo(250, 268, 258, 240, 244, 214);
          ctx.bezierCurveTo(240, 184, 244, 156, 248, 136);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Inner Bronchiole Tree
        ctx.strokeStyle = isLight ? "rgba(44,136,168,0.38)" : "rgba(125,211,252,0.32)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        if (side === -1) {
          ctx.moveTo(154, 172);
          ctx.lineTo(122, 198);
          ctx.moveTo(122, 198);
          ctx.lineTo(94, 190);
          ctx.moveTo(122, 198);
          ctx.lineTo(100, 232);
          ctx.moveTo(122, 198);
          ctx.lineTo(136, 258);
        } else {
          ctx.moveTo(266, 172);
          ctx.lineTo(298, 198);
          ctx.moveTo(298, 198);
          ctx.lineTo(326, 190);
          ctx.moveTo(298, 198);
          ctx.lineTo(320, 232);
          ctx.moveTo(298, 198);
          ctx.lineTo(286, 258);
        }
        ctx.stroke();
        ctx.restore();
      };

      drawLung(-1);
      drawLung(1);

      // 3. Airflow Particles moving IN on inhale, OUT on exhale
      ctx.save();
      const airCount = 12;
      ctx.fillStyle = isInhale ? airColor : co2AirColor;
      for (let i = 0; i < airCount; i++) {
        const raw = ((elapsed * (ui.brpm / 16) * 0.85) + i / airCount) % 1;
        const t = isInhale ? raw : 1 - raw;
        let ax = 210;
        let ay = 36 + t * 102;
        if (t > 0.62) {
          const branchT = (t - 0.62) / 0.38;
          const dir = i % 2 === 0 ? -1 : 1;
          ax = 210 + dir * branchT * 78;
          ay = 138 + branchT * 52;
        }
        ctx.globalAlpha = 0.88;
        ctx.beginPath();
        ctx.arc(ax, ay, 2.8, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // 4. Heart-Lung Pulmonary Circulation Loop
      ctx.save();
      ctx.lineCap = "round";
      // Pulmonary Artery (CO2-rich Cyan from Heart to Lungs)
      ctx.strokeStyle = isLight ? "rgba(44,136,168,0.42)" : "rgba(82,190,214,0.42)";
      ctx.lineWidth = 7;
      PULM_ART_PATHS.forEach((pts) => {
        drawSmoothCurve(ctx, pts);
        ctx.stroke();
      });

      // Pulmonary Veins (O2-rich Crimson from Lungs to Heart)
      ctx.strokeStyle = isLight ? "rgba(194,75,101,0.42)" : "rgba(224,99,125,0.42)";
      ctx.lineWidth = 7;
      PULM_VEIN_PATHS.forEach((pts) => {
        drawSmoothCurve(ctx, pts);
        ctx.stroke();
      });

      // Flowing Blood Cells (Heart -> Lungs Cyan, Lungs -> Heart Crimson)
      const flowSpeed = 0.28 + (ui.brpm / 40) * 0.25;
      ctx.fillStyle = venColor;
      pulmArtCells.forEach((c) => {
        if (!ui.paused) c.t = (c.t + flowSpeed * dt) % 1;
        const [px, py] = samplePolyline(PULM_ART_PATHS[c.pathIdx], c.t);
        ctx.beginPath();
        ctx.arc(px, py, 3.1, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.fillStyle = artColor;
      pulmVeinCells.forEach((c) => {
        if (!ui.paused) c.t = (c.t + flowSpeed * dt) % 1;
        const [px, py] = samplePolyline(PULM_VEIN_PATHS[c.pathIdx], c.t);
        ctx.beginPath();
        ctx.arc(px, py, 3.2, 0, Math.PI * 2);
        ctx.fill();
      });

      // Central Heart Icon showing Right (CO2) & Left (O2) halves
      const beat = Math.sin(elapsed * 7.5) * 0.035;
      ctx.save();
      ctx.translate(212, 232);
      ctx.scale(1 + beat, 1 + beat);
      // Right side (Deoxygenated Cyan)
      ctx.fillStyle = isLight ? "rgba(44,136,168,0.88)" : "rgba(82,190,214,0.86)";
      ctx.beginPath();
      ctx.moveTo(0, -18);
      ctx.bezierCurveTo(-18, -28, -28, -4, -14, 14);
      ctx.lineTo(0, 26);
      ctx.closePath();
      ctx.fill();
      // Left side (Oxygenated Crimson)
      ctx.fillStyle = isLight ? "rgba(194,75,101,0.9)" : "rgba(224,99,125,0.9)";
      ctx.beginPath();
      ctx.moveTo(0, -18);
      ctx.bezierCurveTo(18, -28, 28, -4, 14, 14);
      ctx.lineTo(0, 26);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = isLight ? "#ffffff" : "#f8fafc";
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.moveTo(0, -16);
      ctx.lineTo(0, 24);
      ctx.stroke();
      ctx.restore();
      ctx.restore();

      // 5. Animated Diaphragm (Flattens downward on Inhale, Domes upward on Exhale)
      const domePeakY = 304 + breathAmt * 26;
      ctx.save();
      ctx.strokeStyle =
        ui.selectedHotspot === "diaphragm"
          ? "#dfb052"
          : isLight
          ? "#b58428"
          : "rgba(223,176,82,0.85)";
      ctx.lineWidth = 7;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(64, 326);
      ctx.quadraticCurveTo(210, domePeakY - 26, 356, 326);
      ctx.stroke();

      // Diaphragm direction label
      ctx.font = "700 10.5px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = mutedColor;
      ctx.textAlign = "center";
      ctx.fillText(
        `${rd.canvasLabels.diaphragm} ${isInhale ? "↓" : "↑"}  •  ${
          isInhale ? rd.canvasLabels.pressureIn : rd.canvasLabels.pressureOut
        }`,
        210,
        352
      );
      ctx.restore();

      // Small Legend Labels for Heart-Lung Flow
      ctx.save();
      ctx.font = "700 10px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = venColor;
      ctx.textAlign = "left";
      ctx.fillText(`● ${rd.canvasLabels.pulmArt}`, 18, 28);
      ctx.fillStyle = artColor;
      ctx.textAlign = "right";
      ctx.fillText(`● ${rd.canvasLabels.pulmVein}`, 402, 28);
      ctx.restore();

      // 6. Live Breathing Spirogram Wave (Bottom HUD)
      const hudTop = 374;
      const hudH = 50;
      ctx.save();
      ctx.fillStyle = isLight ? "rgba(15,23,42,0.05)" : "rgba(4,10,20,0.72)";
      ctx.strokeStyle = isLight ? "rgba(15,23,42,0.12)" : "rgba(104,184,230,0.22)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(18, hudTop, 384, hudH, 10);
      ctx.fill();
      ctx.stroke();

      ctx.strokeStyle = isInhale ? airColor : artColor;
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      for (let i = 0; i <= 100; i++) {
        const r = i / 100;
        const x = 28 + r * 364;
        const ph = (r * 2 - breathPhase + 4) % 1;
        const val = (1 - Math.cos(ph * Math.PI * 2)) / 2;
        const y = hudTop + 39 - val * 26;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      void textColor;
      ctx.restore();
    }

    function drawAlveoliView(ctx, breathAmt, dt, isLight, rd) {
      const artColor = isLight ? "#c24b65" : "#e0637d";
      const venColor = isLight ? "#2c88a8" : "#52bed6";
      const airColor = isLight ? "#0284c7" : "#7dd3fc";
      const co2Color = isLight ? "#b58428" : "#dfb052";
      const textColor = isLight ? "#162235" : "#e6effa";

      // 1. Bronchiole Neck + Expanding Alveolar Air Sac
      const alvR = 96 + breathAmt * 8;
      ctx.save();
      const sacGrad = ctx.createRadialGradient(210, 178, 16, 210, 178, alvR + 12);
      sacGrad.addColorStop(0, isLight ? "rgba(224,242,254,0.92)" : "rgba(22,52,78,0.88)");
      sacGrad.addColorStop(1, isLight ? "rgba(186,230,253,0.45)" : "rgba(10,25,44,0.92)");

      // Bronchiole neck
      ctx.fillStyle = isLight ? "rgba(224,242,254,0.85)" : "rgba(18,40,62,0.88)";
      ctx.strokeStyle = airColor;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(182, 22);
      ctx.lineTo(182, 92);
      ctx.moveTo(238, 22);
      ctx.lineTo(238, 92);
      ctx.stroke();

      // Alveolar Air Sac
      ctx.fillStyle = sacGrad;
      ctx.strokeStyle =
        ui.selectedHotspot === "alveolus" ? airColor : isLight ? "#0284c7" : "rgba(125,211,252,0.72)";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(210, 178, alvR, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Thin moist lining inside alveolus
      ctx.strokeStyle = isLight ? "rgba(2,132,199,0.28)" : "rgba(186,230,253,0.25)";
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.arc(210, 178, alvR - 7, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // Label inside Alveolus
      ctx.font = "800 11px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = textColor;
      ctx.textAlign = "center";
      ctx.fillText(rd.canvasLabels.alvAir, 210, 134);
      ctx.restore();

      // 2. Wrapping Pulmonary Capillary (Left: Deoxygenated from Heart -> Right: Oxygenated to Heart)
      ctx.save();
      const capGrad = ctx.createLinearGradient(26, 310, 394, 310);
      capGrad.addColorStop(0, isLight ? "rgba(44,136,168,0.34)" : "rgba(82,190,214,0.32)");
      capGrad.addColorStop(0.5, isLight ? "rgba(130,96,145,0.30)" : "rgba(148,110,165,0.30)");
      capGrad.addColorStop(1, isLight ? "rgba(194,75,101,0.38)" : "rgba(224,99,125,0.36)");

      ctx.strokeStyle = capGrad;
      ctx.lineWidth = 34;
      ctx.lineCap = "round";
      drawSmoothCurve(ctx, CAPILLARY_PATH);
      ctx.stroke();

      // Capillary outer wall border
      ctx.strokeStyle = isLight ? "rgba(30,58,95,0.35)" : "rgba(186,230,253,0.35)";
      ctx.lineWidth = 2;
      drawSmoothCurve(ctx, CAPILLARY_PATH);
      ctx.stroke();

      // 3. Flowing Red Blood Cells that VISIBLY TURN FROM CYAN (CO2) TO CRIMSON (O2 / HbO2)
      const rbcSpeed = 0.14 + (ui.brpm / 40) * 0.12;
      capRbcs.forEach((rbc) => {
        if (!ui.paused) rbc.t = (rbc.t + rbcSpeed * dt) % 1;
        const [rx, ry] = samplePolyline(CAPILLARY_PATH, rbc.t);

        // Smooth color shift across the alveolar exchange zone (t = 0.25 -> 0.75)
        const oxyRatio = Math.max(0, Math.min(1, (rbc.t - 0.22) / 0.56));
        const fillCol = isLight
          ? lerpColor(44, 136, 168, 194, 75, 101, oxyRatio)
          : lerpColor(82, 190, 214, 224, 99, 125, oxyRatio);

        ctx.fillStyle = fillCol;
        ctx.strokeStyle = "rgba(255,255,255,0.75)";
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.ellipse(rx, ry, 10.5, 6.8, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Inner biconcave dimple
        ctx.fillStyle = "rgba(255,255,255,0.22)";
        ctx.beginPath();
        ctx.ellipse(rx, ry, 4.5, 2.4, 0, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();

      // 4. Live O2 (down into blood) & CO2 (up into alveolus) Diffusion Molecules
      ctx.save();
      diffMols.forEach((m) => {
        if (!ui.paused) m.t = (m.t + 0.34 * dt) % 1;
        const x = 210 + m.lane * 30;
        const y =
          m.kind === "o2"
            ? 226 + m.t * 108 // Alveolus -> Capillary
            : 334 - m.t * 108; // Capillary -> Alveolus

        ctx.fillStyle = m.kind === "o2" ? airColor : co2Color;
        ctx.beginPath();
        ctx.arc(x, y, 4.2, 0, Math.PI * 2);
        ctx.fill();

        ctx.font = "800 8px 'Plus Jakarta Sans', sans-serif";
        ctx.fillStyle = "#040811";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(m.kind === "o2" ? "O₂" : "CO₂", x, y + 0.5);
      });
      ctx.restore();

      // 5. Clear Teacher Diagram Callouts & Bottom Legend HUD
      ctx.save();
      ctx.font = "700 10px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = venColor;
      ctx.textAlign = "left";
      ctx.fillText(`← ${rd.canvasLabels.capIn}`, 18, 266);

      ctx.fillStyle = artColor;
      ctx.textAlign = "right";
      ctx.fillText(`${rd.canvasLabels.capOut} →`, 402, 266);

      // Bottom HUD Box
      ctx.fillStyle = isLight ? "rgba(15,23,42,0.05)" : "rgba(4,10,20,0.72)";
      ctx.strokeStyle = isLight ? "rgba(15,23,42,0.12)" : "rgba(104,184,230,0.22)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(18, 378, 384, 46, 10);
      ctx.fill();
      ctx.stroke();

      ctx.font = "700 10.5px 'Plus Jakarta Sans', sans-serif";
      ctx.textAlign = "left";
      ctx.fillStyle = airColor;
      ctx.fillText(`↓ O₂: ${rd.canvasLabels.o2Diff}`, 30, 398);
      ctx.fillStyle = co2Color;
      ctx.fillText(`↑ CO₂: ${rd.canvasLabels.co2Diff}`, 30, 415);
      ctx.restore();
    }

    function frame(now) {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      if (!ui.paused) {
        elapsed += dt;
        breathPhase = (breathPhase + dt * (ui.brpm / 60)) % 1;
      }

      const isInhale = breathPhase < 0.46;
      const breathAmt = isInhale
        ? Math.sin((breathPhase / 0.46) * (Math.PI / 2))
        : Math.cos(((breathPhase - 0.46) / 0.54) * (Math.PI / 2));

      const phaseStr = isInhale ? "inhale" : "exhale";
      if (phaseStr !== lastPhaseReported) {
        lastPhaseReported = phaseStr;
        ui.phase = phaseStr;
        const phEl = document.getElementById("metric-resp-phase");
        if (phEl) {
          const rd = getRespDict();
          phEl.textContent = isInhale ? rd.metrics.inhale : rd.metrics.exhale;
          phEl.className = `metric-phase${isInhale ? "" : " systole"}`;
        }
      }

      const isLight = BL.getState().theme === "light";
      const rd = getRespDict();

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform((width / 420) * dpr, 0, 0, (height / 440) * dpr, 0, 0);

      if (ui.view === "lungs") {
        drawLungsView(ctx, breathAmt, isInhale, dt, isLight, rd);
      } else {
        drawAlveoliView(ctx, breathAmt, dt, isLight, rd);
      }

      requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
    void ro;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("brpm-slider");
    if (slider) {
      slider.value = String(ui.brpm);
      slider.addEventListener("input", (e) => {
        ui.brpm = Math.max(10, Math.min(40, Number(e.target.value) || 16));
        syncRespUI();
      });
    }

    document.querySelectorAll(".preset-btn").forEach((b) => {
      b.addEventListener("click", () => {
        ui.brpm = Number(b.getAttribute("data-brpm")) || 16;
        syncRespUI();
      });
    });

    const btnLungs = document.getElementById("btn-view-lungs");
    const btnAlv = document.getElementById("btn-view-alveoli");
    if (btnLungs) {
      btnLungs.addEventListener("click", () => {
        ui.view = "lungs";
        ui.selectedHotspot = "heartLoop";
        syncRespUI();
      });
    }
    if (btnAlv) {
      btnAlv.addEventListener("click", () => {
        ui.view = "alveoli";
        ui.selectedHotspot = "alveolus";
        syncRespUI();
      });
    }

    const pauseBtn = document.getElementById("btn-resp-pause");
    if (pauseBtn) {
      pauseBtn.addEventListener("click", () => {
        ui.paused = !ui.paused;
        syncRespUI();
      });
    }

    const pinsBtn = document.getElementById("btn-resp-pins");
    if (pinsBtn) {
      pinsBtn.addEventListener("click", () => {
        ui.showPins = !ui.showPins;
        syncRespUI();
      });
    }

    document.querySelectorAll(".tab-btn").forEach((b) => {
      b.addEventListener("click", () => {
        ui.activeTab = b.getAttribute("data-tab");
        renderReaderBody();
      });
    });

    syncRespUI();
    BL.subscribe(syncRespUI);
    startRespCanvas();
  });
})();