(function () {
  const BL = window.BioLume;
  if (!BL) return;

  // =========================================================
  // TRILINGUAL CLASS 9–10 MUSCULAR SYSTEM DICTIONARY (EN/HI/BN)
  // =========================================================
  const MUSC_DICT = {
    en: {
      chapterBadge: "Chapter 04 • Class 9–10 Lab",
      title: "Human Muscular System — Live Lab",
      subtitle:
        "Flex the arm to see Biceps & Triceps work in pairs, or switch to the 3 Muscle Types microscope",
      views: {
        arm: "Biceps & Triceps Arm",
        types: "3 Muscle Types",
      },
      toggles: {
        autoOn: "Auto Flex: ON",
        autoOff: "Auto Flex: OFF",
        pins: "Hotspot Pins",
        pause: "Pause",
        play: "Resume",
      },
      metrics: {
        angle: "Elbow Angle",
        biceps: "Biceps",
        triceps: "Triceps",
        atp: "ATP Demand",
        contracting: "Contracting (Short)",
        relaxing: "Relaxing (Long)",
        balanced: "Balanced",
        low: "Low (Rest)",
        moderate: "Moderate",
        high: "High (Peak)",
      },
      flexControl: "Arm Flexion (Contraction %)",
      flexSuffix: "% Flexed",
      presets: {
        ext: "Extended (0%)",
        mid: "Half Curl (45%)",
        curl: "Strong Curl (80%)",
        max: "Full Flex (100%)",
      },
      tabs: {
        inspect: "Muscle Inspector",
        lesson: "Class 9–10 Lesson",
        quiz: "Quick Check",
      },
      selectPrompt:
        "Tap any glowing pin on the arm or switch to the 3 Muscle Types view to inspect how muscles move bones.",
      armHotspots: {
        biceps: {
          name: "Biceps Brachii (Flexor)",
          en: "Biceps Brachii",
          role: "Front Upper Arm • Antagonistic Flexor",
          summary:
            "A two-headed skeletal muscle on the front of the upper arm. When it contracts, it becomes shorter and thicker, pulling the forearm bones upward to bend the elbow.",
          keyFact:
            "Muscles can ONLY pull—they can never push! That is why Biceps must pair with Triceps to move the arm both ways.",
        },
        triceps: {
          name: "Triceps Brachii (Extensor)",
          en: "Triceps Brachii",
          role: "Back Upper Arm • Antagonistic Extensor",
          summary:
            "A three-headed muscle on the back of the upper arm. While Biceps contracts to bend the arm, Triceps relaxes and stretches. When Triceps contracts, it pulls the forearm straight again.",
          keyFact:
            "Biceps and Triceps are the classic Class 9–10 example of an Antagonistic Muscle Pair.",
        },
        tendon: {
          name: "Tendon",
          en: "Tendon (Muscle → Bone)",
          role: "Tough Inelastic Fibrous Cord",
          summary:
            "A strong, cord-like dense connective tissue that anchors skeletal muscle directly onto bone so the pulling force transfers without stretching or snapping.",
          keyFact:
            "Exam tip: Tendon joins Muscle to Bone; Ligament joins Bone to Bone!",
        },
        humerus: {
          name: "Humerus",
          en: "Upper Arm Bone",
          role: "Fixed Anchor Lever",
          summary:
            "The long bone of the upper arm. Both Biceps and Triceps originate near the shoulder and run along the humerus, using it as a rigid support beam.",
          keyFact:
            "Provides a sturdy attachment base so forearm movement stays accurate and strong.",
        },
        forearm: {
          name: "Radius & Ulna",
          en: "Forearm Bones",
          role: "Movable Lever Arm",
          summary:
            "The two parallel bones of the forearm. The Biceps tendon attaches to the Radius, while the Triceps tendon attaches to the back tip of the Ulna.",
          keyFact:
            "Works like a Class-3 lever: a small muscle pull near the elbow produces a wide, fast swing at the hand.",
        },
        elbow: {
          name: "Elbow Hinge Joint",
          en: "Synovial Hinge Joint",
          role: "Fulcrum (Pivot Point)",
          summary:
            "A smooth synovial hinge joint cushioned by cartilage and synovial fluid, allowing the forearm to swing cleanly in one plane like a door hinge.",
          keyFact:
            "Ligaments wrap around the joint capsule to keep the bones tightly aligned during heavy lifting.",
        },
      },
      typeHotspots: {
        skeletal: {
          name: "1. Skeletal (Striated) Muscle",
          en: "Voluntary Muscle",
          role: "Attached to Bones • Voluntary Control",
          summary:
            "Long, cylindrical, unbranched fibers with clear alternating dark and light stripes (striations) and multiple nuclei pushed to the outer edge.",
          keyFact:
            "Contracts quickly and powerfully under conscious control (arms, legs, tongue), but fatigues after heavy work.",
        },
        smooth: {
          name: "2. Smooth (Unstriated) Muscle",
          en: "Involuntary Muscle",
          role: "Internal Organs • Involuntary Control",
          summary:
            "Spindle-shaped (pointed ends), unbranched cells with NO stripes and a single central oval nucleus. Found in stomach, intestines, blood vessels, and iris of the eye.",
          keyFact:
            "Contracts slowly and rhythmically (like peristalsis in the food pipe) and rarely tires.",
        },
        cardiac: {
          name: "3. Cardiac Muscle",
          en: "Heart Wall Muscle",
          role: "Exclusively in the Heart • Non-Stop",
          summary:
            "Cylindrical, branched fibers with faint striations, a single central nucleus, and special dark junctions called Intercalated Discs that lock cells together.",
          keyFact:
            "Involuntary and fatigue-resistant—beats ~100,000 times every single day for an entire lifetime!",
        },
      },
      lesson: {
        heading: "Class 9–10 Lesson Plan: Human Muscular System",
        sections: [
          {
            title: "1. What Is Muscular Tissue?",
            html: `<p><strong>Muscular tissue</strong> consists of elongated cells called <em>muscle fibers</em> that contain special contractile proteins (<strong>Actin</strong> and <strong>Myosin</strong>). These proteins slide to shorten and lengthen the cell, generating movement.</p>
            <p style="margin-top:6px">The human body has over <strong>600 muscles</strong>, making up ~40% of total body weight.</p>`,
          },
          {
            title: "2. Comparison of the 3 Muscle Types (High-Yield Exam Table)",
            html: `<p>• <strong>Skeletal (Striated):</strong> Cylindrical, unbranched, multinucleated (peripheral), striated, <strong>Voluntary</strong>, fatigues easily. Found in limbs.<br/>
            • <strong>Smooth (Unstriated):</strong> Spindle-shaped, unbranched, uninucleated (central), no striations, <strong>Involuntary</strong>, slow &amp; sustained. Found in stomach, intestine, blood vessels.<br/>
            • <strong>Cardiac:</strong> Cylindrical, <strong>branched</strong>, uninucleated (central), faint striations + <strong>Intercalated Discs</strong>, <strong>Involuntary</strong>, never fatigues. Found ONLY in the heart.</p>`,
          },
          {
            title: "3. Antagonistic Pairs: Why Muscles Work in Opposites",
            html: `<p>A muscle fiber can only generate force by <strong>contracting (pulling)</strong>—it cannot actively push a bone back. Therefore, skeletal muscles are arranged in opposing <strong>Antagonistic Pairs</strong>:</p>
            <div class="detail-fact" style="margin-top:8px"><strong>Bending Arm (Flexion):</strong> Biceps contracts (shortens) + Triceps relaxes.<br/><strong>Straightening Arm (Extension):</strong> Triceps contracts + Biceps relaxes.</div>`,
          },
          {
            title: "4. Tendon vs. Ligament",
            html: `<p>• <strong>Tendon:</strong> Strong, inelastic white fibrous tissue connecting <strong>Muscle to Bone</strong>.<br/>
            • <strong>Ligament:</strong> Strong, elastic yellow fibrous tissue connecting <strong>Bone to Bone</strong> at joints.</p>`,
          },
        ],
      },
      quiz: {
        title: "Muscular System Quick Check",
        correctMsg: "Correct! Rock-solid biology.",
        wrongMsg: "Not quite — read the explanation below.",
        nextBtn: "Next Question",
        restartBtn: "Restart Quiz",
        scoreLabel: "Score",
        questions: [
          {
            q: "Which muscle type is cylindrical, branched, involuntary, and never fatigues?",
            options: ["Skeletal Muscle", "Smooth Muscle", "Cardiac Muscle", "Tendon Tissue"],
            answer: 2,
            explain: "Cardiac muscle cells are branched with intercalated discs and beat nonstop exclusively in the heart.",
          },
          {
            q: "When you bend your elbow to lift a book, what happens to your Biceps and Triceps?",
            options: [
              "Both Biceps and Triceps contract",
              "Biceps contracts and Triceps relaxes",
              "Biceps relaxes and Triceps contracts",
              "Both Biceps and Triceps relax",
            ],
            answer: 1,
            explain: "As an antagonistic pair, Biceps (flexor) contracts to pull the forearm up while Triceps (extensor) relaxes.",
          },
          {
            q: "Which connective tissue attaches a skeletal muscle to a bone?",
            options: ["Ligament", "Cartilage", "Tendon", "Plasma"],
            answer: 2,
            explain: "Tendons are tough, inelastic fibrous cords connecting muscle to bone (ligaments connect bone to bone).",
          },
          {
            q: "Which type of muscle is spindle-shaped, unstriated, and lines the walls of the stomach and intestines?",
            options: ["Smooth Muscle", "Skeletal Muscle", "Cardiac Muscle", "Voluntary Muscle"],
            answer: 0,
            explain: "Smooth (involuntary) muscle has pointed spindle-shaped cells with a single central nucleus and drives peristalsis.",
          },
          {
            q: "What are the two main contractile proteins inside every muscle fiber?",
            options: [
              "Hemoglobin and Fibrinogen",
              "Actin and Myosin",
              "Insulin and Adrenaline",
              "Pepsin and Trypsin",
            ],
            answer: 1,
            explain: "Thin Actin and thick Myosin filaments slide past each other using ATP energy to contract the muscle.",
          },
        ],
      },

      // =========================================================
      // SECTION 2: 3D FLIPPABLE SARCOMERE <-> FATIGUE LAB
      // =========================================================
      sarcSec: {
        title: "Sarcomere & Muscle Energy — 3D Flippable Lab",
        subtitle:
          "Front side: Actin & Myosin sliding filament contraction • Flip the card to see ATP, Oxygen Debt & Lactic Acid Cramps",
        flipMain: "Flip Card: Sarcomere ↔ Cramps & ATP",
        frontBadge: "FRONT • SARCOMERE (SLIDING FILAMENT)",
        flipToFatigue: "Flip to Cramps & Lactic Acid",
        contractBtn: "Contract Sarcomere (Spend ATP!)",
        sarcPrompt:
          "Tap any microscopic part below to highlight it and see how muscles physically shorten:",
        backBadge: "BACK • ENERGY, OXYGEN DEBT & MUSCLE CRAMPS",
        flipToSarc: "Flip Back to Sarcomere",
        sprintBtnJog: "Switch to Heavy Sprint (Trigger Lactic Acid!)",
        sprintBtnSprint: "Switch to Normal Jog (Restore O₂ & Clear Cramps)",
        fatiguePrompt:
          "Explore how muscles generate ATP and why sudden sprinting causes painful cramps:",
        lessonTab: "Contraction & Fatigue Notes (Class 9–10)",
        quizTab: "Sarcomere & Cramps Quiz",
        analogyLabel: "Easy Analogy",
        sarcHudContract: "CONTRACTING: Myosin heads pull Actin inward → Z-Lines move closer!",
        sarcHudRelax: "RELAXED: Actin & Myosin uncouple → Z-Lines slide back apart",
        fatigueHudJog: "AEROBIC JOG: Plenty of O₂ → 38 ATP (Smooth, No Cramps!)",
        fatigueHudSprint: "ANAEROBIC SPRINT: Low O₂ → Only 2 ATP + Lactic Acid Buildup (CRAMP!)",
      },
      sarcParts: {
        zline: {
          name: "Z-Lines (Borders)",
          en: "Sarcomere Boundaries",
          role: "Anchor Walls",
          analogy: "Like the two walls of an accordion that pull closer together when you squeeze it.",
          summary:
            "The dense protein borders at both ends of a Sarcomere (the functional unit of muscle contraction). When a muscle contracts, the Z-lines move closer together.",
        },
        actin: {
          name: "Actin (Thin Filament)",
          en: "Thin Protein Filament",
          role: "Pulled Inward",
          analogy: "Like tug-of-war ropes anchored to both walls, being pulled toward the center.",
          summary:
            "Thin protein strands attached to the Z-lines. They do NOT change their own length—instead, they slide inward over Myosin during contraction.",
        },
        myosin: {
          name: "Myosin (Thick Filament)",
          en: "Thick Motor Filament",
          role: "Cross-Bridge Puller",
          analogy: "Like a team of rowers sitting in the middle, grabbing the ropes with oars and pulling them inward.",
          summary:
            "Thick central protein filaments lined with tiny hinged heads (cross-bridges) that grab Actin and pull it toward the center of the sarcomere.",
        },
        atp: {
          name: "ATP Energy & Ca²⁺",
          en: "Cellular Fuel",
          role: "Powers Every Pull",
          analogy: "Like coins inserted into a machine—each myosin head needs an ATP molecule to pull and reset.",
          summary:
            "A nerve impulse releases Calcium ions (Ca²⁺) to unlock Actin, while ATP supplies the chemical energy for Myosin heads to ratchet and release.",
        },
      },
      fatigueSteps: {
        aerobic: {
          name: "1. Aerobic Jog (High O₂)",
          en: "38 ATP • Smooth Energy",
          role: "Glucose + 6O₂ → 6CO₂ + 6H₂O + 38 ATP",
          analogy: "Like a clean hybrid engine with plenty of air—runs smoothly for miles without overheating.",
          summary:
            "During normal walking or jogging, lungs and blood supply plenty of oxygen to muscle mitochondria. Glucose breaks down completely, yielding a huge 38 ATP per molecule.",
        },
        shortage: {
          name: "2. Sprint Oxygen Debt",
          en: "O₂ Demand > O₂ Supply",
          role: "Emergency Switch",
          analogy: "Your legs demand fuel faster than your lungs and heart can deliver oxygen.",
          summary:
            "During a sudden heavy sprint or intense workout, muscles burn ATP rapidly and oxygen runs low. To keep moving, muscle cells switch to Anaerobic Respiration.",
        },
        lactic: {
          name: "3. Lactic Acid & Cramps",
          en: "Anaerobic Breakdown",
          role: "Glucose → Lactic Acid + 2 ATP",
          analogy: "Emergency backup power works briefly, but leaves behind acidic exhaust that stings and locks the muscle.",
          summary:
            "Without enough O₂, glucose breaks down incompletely into Lactic Acid and only 2 ATP. Accumulation of Lactic Acid inside muscle fibers causes fatigue, burning soreness, and sudden muscle cramps.",
        },
        recovery: {
          name: "4. Rest & Hot Bath Relief",
          en: "Clearing Oxygen Debt",
          role: "Deep Breathing After Exercise",
          analogy: "Heavy panting after a race is your body 'paying back' its borrowed oxygen loan.",
          summary:
            "After stopping, deep breathing brings extra oxygen (repaying Oxygen Debt). Warm water baths or gentle massage boost blood circulation, carrying Lactic Acid away to the liver to be converted back safely.",
        },
      },
      sfLesson: {
        heading: "Class 9–10 Master Notes: Sliding Filament & Muscle Cramps",
        sections: [
          {
            title: "1. Sliding Filament Theory (In 1 Simple Sentence)",
            html: `<p>Neither Actin nor Myosin actually shrinks! Instead, thick <strong>Myosin heads</strong> use <strong>ATP energy</strong> to pull thin <strong>Actin filaments</strong> inward toward the center, bringing the <strong>Z-lines</strong> closer and shortening the whole muscle.</p>`,
          },
          {
            title: "2. Why Do We Get Muscle Cramps During Heavy Exercise?",
            html: `<p>During sudden vigorous exercise, oxygen supply to leg muscles falls short. Muscle cells temporarily perform <strong>Anaerobic Respiration</strong>:</p>
            <div class="detail-fact" style="margin-top:8px"><strong>In Muscle Cells (Lack of O₂):</strong><br/>Glucose (6-Carbon) → Pyruvate (3-Carbon) → <strong>Lactic Acid (3-Carbon)</strong> + Energy (only 2 ATP)</div>
            <p style="margin-top:8px">This buildup of <strong>Lactic Acid</strong> causes painful cramps. A hot bath or massage improves blood flow and O₂ delivery, breaking down the Lactic Acid and relieving the cramp.</p>`,
          },
        ],
      },
      sfQuiz: {
        title: "Sarcomere & Cramps Quiz",
        correctMsg: "Awesome! You nailed the mechanism.",
        wrongMsg: "Not quite — check the explanation below.",
        nextBtn: "Next Question",
        restartBtn: "Restart Quiz",
        scoreLabel: "Score",
        questions: [
          {
            q: "Which substance accumulates in human skeletal muscles during heavy sprinting and causes muscle cramps?",
            options: ["Ethanol", "Lactic Acid", "Hydrochloric Acid", "Urea"],
            answer: 1,
            explain: "Lack of oxygen forces anaerobic breakdown of glucose into Lactic Acid inside muscle cells.",
          },
          {
            q: "What is the basic functional unit of contraction between two Z-lines inside a muscle fiber?",
            options: ["Neuron", "Nephron", "Sarcomere", "Alveolus"],
            answer: 2,
            explain: "A Sarcomere is the microscopic repeating unit containing Actin and Myosin between two Z-lines.",
          },
          {
            q: "During muscle contraction, what physically happens to the Actin and Myosin filaments?",
            options: [
              "They melt into liquid",
              "Thin Actin filaments slide inward over thick Myosin filaments",
              "They double in length",
              "They detach from the body",
            ],
            answer: 1,
            explain: "Myosin cross-bridges pull Actin filaments toward the center, pulling the Z-lines closer together.",
          },
          {
            q: "Why does a warm bath or massage relieve muscle cramps quickly?",
            options: [
              "It freezes the muscle",
              "It increases blood circulation and O₂ supply to break down Lactic Acid",
              "It removes all ATP",
              "It stops breathing",
            ],
            answer: 1,
            explain: "Better blood flow supplies fresh oxygen that converts accumulated Lactic Acid into harmless CO₂ and water (or glucose in the liver).",
          },
        ],
      },
    },

    hi: {
      chapterBadge: "अध्याय 04 • कक्षा 9–10 लैब",
      title: "मानव पेशी तंत्र — लाइव लैब",
      subtitle:
        "बाइसेप्स और ट्राइसेप्स को जोड़ी में काम करते देखने के लिए भुजा मोड़ें, या 3 पेशी प्रकार देखें",
      views: {
        arm: "बाइसेप्स और ट्राइसेप्स भुजा",
        types: "3 पेशी प्रकार",
      },
      toggles: {
        autoOn: "ऑटो फ्लेक्स: चालू",
        autoOff: "ऑटो फ्लेक्स: बंद",
        pins: "हॉटस्पॉट पिन",
        pause: "रोकें",
        play: "चलाएँ",
      },
      metrics: {
        angle: "कोहनी का कोण",
        biceps: "बाइसेप्स",
        triceps: "ट्राइसेप्स",
        atp: "ATP मांग",
        contracting: "संकुचित (छोटी)",
        relaxing: "शिथिल (लंबी)",
        balanced: "संतुलित",
        low: "कम (विश्राम)",
        moderate: "मध्यम",
        high: "उच्च (चरम)",
      },
      flexControl: "भुजा का मुड़ना (संकुचन %)",
      flexSuffix: "% मुड़ी हुई",
      presets: {
        ext: "सीधी (0%)",
        mid: "अर्ध मोड़ (45%)",
        curl: "मजबूत मोड़ (80%)",
        max: "पूर्ण संकुचन (100%)",
      },
      tabs: {
        inspect: "पेशी निरीक्षक",
        lesson: "कक्षा 9–10 पाठ",
        quiz: "त्वरित जाँच",
      },
      selectPrompt:
        "पेशियाँ हड्डियों को कैसे हिलाती हैं, जानने के लिए किसी भी पिन पर टैप करें या 3 पेशी प्रकार देखें।",
      armHotspots: {
        biceps: {
          name: "बाइसेप्स पेशी (Flexor)",
          en: "Biceps Brachii",
          role: "ऊपरी भुजा का अगला भाग",
          summary:
            "ऊपरी भुजा के सामने स्थित द्विशिरस्क कंकाल पेशी। सिकुड़ने पर यह छोटी और मोटी हो जाती है तथा अग्रभुजा को ऊपर खींचती है।",
          keyFact: "पेशियाँ केवल खींच (Pull) सकती हैं, धकेल नहीं सकतीं—इसलिए वे जोड़ी में काम करती हैं।",
        },
        triceps: {
          name: "ट्राइसेप्स पेशी (Extensor)",
          en: "Triceps Brachii",
          role: "ऊपरी भुजा का पिछला भाग",
          summary:
            "ऊपरी भुजा के पीछे स्थित पेशी। जब बाइसेप्स सिकुड़ती है तो ट्राइसेप्स शिथिल होती है; जब ट्राइसेप्स सिकुड़ती है तो हाथ सीधा हो जाता है।",
          keyFact: "बाइसेप्स और ट्राइसेप्स 'विरोधी पेशी युग्म' (Antagonistic Pair) का सर्वोत्तम उदाहरण हैं।",
        },
        tendon: {
          name: "कंडरा (Tendon)",
          en: "Tendon (Muscle → Bone)",
          role: "मजबूत रेशेदार डोरी",
          summary: "मजबूत संयोजी ऊतक जो कंकाल पेशी को सीधे हड्डी से जोड़ता है ताकि खिंचाव बल हड्डी तक पहुँच सके।",
          keyFact: "परीक्षा सूत्र: टेंडन (पेशी से हड्डी) • लिगामेंट (हड्डी से हड्डी)।",
        },
        humerus: {
          name: "ह्यूमरस (ऊपरी भुजा अस्थि)",
          en: "Humerus",
          role: "स्थिर आधार अस्थि",
          summary: "ऊपरी भुजा की लंबी मजबूत हड्डी जो बाइसेप्स व ट्राइसेप्स के लिए स्थिर सहारा प्रदान करती है।",
          keyFact: "यह भुजा के उत्तोलक तंत्र का मुख्य आधार है।",
        },
        forearm: {
          name: "रेडियस और अल्ना",
          en: "Forearm Bones",
          role: "गतिशील अग्रभुजा अस्थियाँ",
          summary: "अग्रभुजा की दो समानांतर हड्डियाँ। बाइसेप्स टेंडन रेडियस से और ट्राइसेप्स अल्ना से जुड़ा होता है।",
          keyFact: "तृतीय श्रेणी के उत्तोलक की तरह काम कर हाथ को तेज़ गति देती हैं।",
        },
        elbow: {
          name: "कोहनी का कब्जा संधि",
          en: "Elbow Hinge Joint",
          role: "आलंब (Pivot Point)",
          summary: "दरवाज़े के कब्जे जैसी संधि जो अग्रभुजा को एक ही दिशा में सुचारु रूप से मोड़ने देती है।",
          keyFact: "स्नायु (Ligaments) संधि को मजबूती से बाँधे रखते हैं।",
        },
      },
      typeHotspots: {
        skeletal: {
          name: "1. कंकाल (रेखित) पेशी",
          en: "Skeletal / Voluntary",
          role: "हड्डियों से जुड़ी • ऐच्छिक नियंत्रण",
          summary: "लंबी, बेलनाकार, अशाखित, गहरे-हल्के धारियों वाली और परिधीय बहु-केंद्रक युक्त पेशी।",
          keyFact: "इच्छा के अनुसार तेज़ काम करती है (हाथ-पैर), पर अधिक काम से थक जाती है।",
        },
        smooth: {
          name: "2. चिकनी (अरेखित) पेशी",
          en: "Smooth / Involuntary",
          role: "आंतरिक अंग • अनैच्छिक",
          summary: "तर्कु के आकार की (नुकीले सिरे), बिना धारी वाली और बीच में एक केंद्रक वाली कोशिकाएँ।",
          keyFact: "आमाशय, आँतों और रक्त वाहिकाओं में धीमी, निरंतर गति चलाती है।",
        },
        cardiac: {
          name: "3. हृदय पेशी (Cardiac)",
          en: "Cardiac Muscle",
          role: "केवल हृदय में • अविराम",
          summary: "बेलनाकार, शाखित, एक केंद्रक और इंटरकैलेटेड डिस्क युक्त विशेष अनैच्छिक पेशी।",
          keyFact: "यह कभी नहीं थकती—जीवनभर प्रतिदिन ~1 लाख बार धड़कती है!",
        },
      },
      lesson: {
        heading: "कक्षा 9–10 पाठ योजना: मानव पेशी तंत्र",
        sections: [
          {
            title: "1. पेशीय ऊतक क्या है?",
            html: `<p><strong>पेशीय ऊतक</strong> लंबे पेशी तंतुओं से बना होता है जिनमें <strong>एक्टिन (Actin)</strong> और <strong>मायोसिन (Myosin)</strong> नामक संकुचनशील प्रोटीन होते हैं। मानव शरीर में <strong>600 से अधिक पेशियाँ</strong> होती हैं।</p>`,
          },
          {
            title: "2. तीनों पेशियों की तुलना",
            html: `<p>• <strong>रेखित (कंकाल):</strong> बेलनाकार, अशाखित, बहु-केंद्रक, धारियाँ, <strong>ऐच्छिक</strong>।<br/>• <strong>अरेखित (चिकनी):</strong> तर्कु-आकार, एक केंद्रक, बिना धारी, <strong>अनैच्छिक</strong> (आमाशय, आँत)।<br/>• <strong>हृदय पेशी:</strong> बेलनाकार, <strong>शाखित</strong>, एक केंद्रक, <strong>अनैच्छिक</strong>, कभी नहीं थकती।</p>`,
          },
          {
            title: "3. विरोधी पेशी युग्म (Antagonistic Pair)",
            html: `<div class="detail-fact" style="margin-top:4px"><strong>भुजा मोड़ना:</strong> बाइसेप्स सिकुड़ती है + ट्राइसेप्स शिथिल होती है।<br/><strong>भुजा सीधी करना:</strong> ट्राइसेप्स सिकुड़ती है + बाइसेप्स शिथिल होती है।</div>`,
          },
          {
            title: "4. कंडरा (Tendon) बनाम स्नायु (Ligament)",
            html: `<p>• <strong>कंडरा (Tendon):</strong> पेशी को हड्डी से जोड़ती है।<br/>• <strong>स्नायु (Ligament):</strong> हड्डी को हड्डी से जोड़ता है।</p>`,
          },
        ],
      },
      quiz: {
        title: "पेशी तंत्र त्वरित जाँच",
        correctMsg: "बिल्कुल सही! अवधारणा स्पष्ट है।",
        wrongMsg: "सही नहीं — नीचे स्पष्टीकरण पढ़ें।",
        nextBtn: "अगला प्रश्न",
        restartBtn: "फिर से शुरू करें",
        scoreLabel: "स्कोर",
        questions: [
          {
            q: "कौन-सी पेशी बेलनाकार, शाखित, अनैच्छिक होती है और कभी नहीं थकती?",
            options: ["कंकाल पेशी", "चिकनी पेशी", "हृदय पेशी (Cardiac)", "टेंडन"],
            answer: 2,
            explain: "हृदय पेशी केवल हृदय में होती है और जीवनभर बिना थके संकुचित होती रहती है।",
          },
          {
            q: "कोहनी मोड़कर किताब उठाते समय बाइसेप्स और ट्राइसेप्स में क्या होता है?",
            options: [
              "दोनों सिकुड़ती हैं",
              "बाइसेप्स सिकुड़ती है और ट्राइसेप्स शिथिल होती है",
              "बाइसेप्स शिथिल और ट्राइसेप्स सिकुड़ती है",
              "दोनों शिथिल रहती हैं",
            ],
            answer: 1,
            explain: "विरोधी जोड़ी में बाइसेप्स अग्रभुजा को ऊपर खींचती है जबकि ट्राइसेप्स आराम करती है।",
          },
          {
            q: "पेशी को हड्डी से जोड़ने वाला संयोजी ऊतक कौन-सा है?",
            options: ["लिगामेंट", "उपास्थि", "टेंडन (कंडरा)", "प्लाज़्मा"],
            answer: 2,
            explain: "टेंडन पेशी को हड्डी से जोड़ता है, जबकि लिगामेंट हड्डी को हड्डी से जोड़ता है।",
          },
          {
            q: "आमाशय और आँतों की दीवार में कौन-सी पेशी पाई जाती है?",
            options: ["चिकनी (अरेखित) पेशी", "कंकाल पेशी", "हृदय पेशी", "ऐच्छिक पेशी"],
            answer: 0,
            explain: "तर्कु के आकार की चिकनी पेशियाँ आंतरिक अंगों में अनैच्छिक गति कराती हैं।",
          },
          {
            q: "पेशी तंतु में पाए जाने वाले दो मुख्य संकुचनशील प्रोटीन कौन-से हैं?",
            options: ["हीमोग्लोबिन व फाइब्रिनोजन", "एक्टिन और मायोसिन", "इंसुलिन व एड्रेनालिन", "पेप्सिन व ट्रिप्सिन"],
            answer: 1,
            explain: "एक्टिन और मायोसिन तंतु एक-दूसरे पर फिसलकर पेशी को संकुचित करते हैं।",
          },
        ],
      },

      sarcSec: {
        title: "सार्कोमियर और पेशी ऊर्जा — 3D फ्लिप लैब",
        subtitle:
          "सामने: एक्टिन व मायोसिन स्लाइडिंग फिलामेंट • कार्ड पलटें और लैक्टिक एसिड ऐंठन (Cramps) देखें",
        flipMain: "कार्ड पलटें: सार्कोमियर ↔ ऐंठन व ATP",
        frontBadge: "सामने • सार्कोमियर (स्लाइडिंग फिलामेंट)",
        flipToFatigue: "ऐंठन व लैक्टिक एसिड देखें",
        contractBtn: "सार्कोमियर संकुचित करें (ATP खर्च करें!)",
        sarcPrompt: "पेशी सूक्ष्म स्तर पर कैसे छोटी होती है, देखने के लिए किसी भी भाग पर टैप करें:",
        backBadge: "पीछे • ऊर्जा, ऑक्सीजन कमी और पेशी ऐंठन",
        flipToSarc: "वापस सार्कोमियर पर जाएँ",
        sprintBtnJog: "तेज़ दौड़ (Sprint) चलाएँ — लैक्टिक एसिड देखें!",
        sprintBtnSprint: "सामान्य जॉगिंग पर लौटें (O₂ बहाल करें)",
        fatiguePrompt: "देखें कि अचानक तेज़ दौड़ने से पैरों में दर्दनाक ऐंठन (Cramps) क्यों होती है:",
        lessonTab: "संकुचन और ऐंठन नोट्स (कक्षा 9–10)",
        quizTab: "सार्कोमियर व ऐंठन क्विज़",
        analogyLabel: "सरल उदाहरण",
        sarcHudContract: "संकुचन: मायोसिन सिरे एक्टिन को अंदर खींचते हैं → Z-रेखाएँ पास आती हैं!",
        sarcHudRelax: "शिथिलन: एक्टिन व मायोसिन अलग होते हैं → Z-रेखाएँ दूर जाती हैं",
        fatigueHudJog: "वायवीय जॉगिंग: पर्याप्त O₂ → 38 ATP (बिना ऐंठन!)",
        fatigueHudSprint: "अवायवीय स्प्रिंट: कम O₂ → केवल 2 ATP + लैक्टिक एसिड (ऐंठन!)",
      },
      sarcParts: {
        zline: {
          name: "Z-रेखाएँ (सीमाएँ)",
          en: "Z-Lines",
          role: "सार्कोमियर की दीवारें",
          analogy: "हारमोनियम के दोनों सिरों की तरह जो दबाने पर पास आ जाते हैं।",
          summary: "सार्कोमियर के दोनों छोर पर स्थित प्रोटीन सीमाएँ जो संकुचन के समय पास आती हैं।",
        },
        actin: {
          name: "एक्टिन (पतला तंतु)",
          en: "Actin Filament",
          role: "अंदर की ओर खिंचने वाला",
          analogy: "रस्साकशी की रस्सियों की तरह जिन्हें बीच की ओर खींचा जाता है।",
          summary: "Z-रेखा से जुड़े पतले प्रोटीन तंतु जो मायोसिन के ऊपर फिसलते हैं।",
        },
        myosin: {
          name: "मायोसिन (मोटा तंतु)",
          en: "Myosin Filament",
          role: "खींचने वाले क्रॉस-ब्रिज",
          analogy: "नाव के चप्पू चलाने वालों की तरह जो रस्सी पकड़कर अंदर खींचते हैं।",
          summary: "बीच में स्थित मोटे तंतु जिनके सूक्ष्म सिरे एक्टिन को पकड़कर केंद्र की ओर खींचते हैं।",
        },
        atp: {
          name: "ATP ऊर्जा व Ca²⁺",
          en: "ATP & Calcium",
          role: "संकुचन का ईंधन",
          analogy: "मशीन चलाने वाले सिक्कों की तरह—हर खिंचाव के लिए ATP ऊर्जा चाहिए।",
          summary: "कैल्शियम आयन एक्टिन को खोलते हैं और ATP मायोसिन को खींचने की ऊर्जा देता है।",
        },
      },
      fatigueSteps: {
        aerobic: {
          name: "1. सामान्य जॉगिंग (पर्याप्त O₂)",
          en: "38 ATP • वायवीय श्वसन",
          role: "ग्लूकोज़ + 6O₂ → 6CO₂ + 6H₂O + 38 ATP",
          analogy: "साफ इंजन जो पर्याप्त हवा मिलने पर बिना थके मीलों चलता है।",
          summary: "पर्याप्त ऑक्सीजन मिलने से ग्लूकोज़ का पूर्ण विखंडन होकर भरपूर 38 ATP ऊर्जा मिलती है।",
        },
        shortage: {
          name: "2. दौड़ में ऑक्सीजन की कमी",
          en: "Oxygen Debt",
          role: "अवायवीय स्विच",
          analogy: "पैरों की मांग फेफड़ों द्वारा O₂ पहुँचाने की गति से अधिक हो जाती है।",
          summary: "अचानक भारी व्यायाम में ऑक्सीजन कम पड़ने पर पेशी कोशिकाएँ अवायवीय श्वसन शुरू करती हैं।",
        },
        lactic: {
          name: "3. लैक्टिक एसिड और ऐंठन",
          en: "Lactic Acid Cramps",
          role: "ग्लूकोज़ → लैक्टिक एसिड + 2 ATP",
          analogy: "बैकअप बिजली थोड़ी देर चलती है पर अम्लीय धुआँ छोड़कर मांसपेशी जकड़ देती है।",
          summary: "लैक्टिक एसिड के जमाव से पेशियों में थकान, जलन और अचानक ऐंठन (Cramps) होती है।",
        },
        recovery: {
          name: "4. विश्राम व गर्म पानी से राहत",
          en: "Recovery",
          role: "रक्त संचार में वृद्धि",
          analogy: "दौड़ के बाद तेज़ हाँफना शरीर द्वारा ऑक्सीजन का कर्ज चुकाना है।",
          summary: "गर्म पानी से स्नान या मालिश करने से रक्त प्रवाह व O₂ बढ़ती है और लैक्टिक एसिड टूट जाता है।",
        },
      },
      sfLesson: {
        heading: "कक्षा 9–10 नोट्स: स्लाइडिंग फिलामेंट और पेशी ऐंठन",
        sections: [
          {
            title: "1. स्लाइडिंग फिलामेंट सिद्धांत",
            html: `<p>संकुचन में एक्टिन या मायोसिन खुद छोटे नहीं होते—मायोसिन के सिरे ATP ऊर्जा से एक्टिन तंतुओं को केंद्र की ओर फिसलाते हैं जिससे Z-रेखाएँ पास आ जाती हैं।</p>`,
          },
          {
            title: "2. भारी व्यायाम में ऐंठन (Cramps) क्यों होती है?",
            html: `<div class="detail-fact" style="margin-top:4px"><strong>ऑक्सीजन के अभाव में (पेशी कोशिका):</strong><br/>ग्लूकोज़ → पायरुवेट → <strong>लैक्टिक एसिड</strong> + 2 ATP</div>
            <p style="margin-top:8px">लैक्टिक एसिड जमा होने से ऐंठन होती है। गर्म स्नान या मालिश से रक्त संचार बढ़कर इसे दूर कर देता है।</p>`,
          },
        ],
      },
      sfQuiz: {
        title: "सार्कोमियर व ऐंठन क्विज़",
        correctMsg: "बहुत बढ़िया! सटीक उत्तर।",
        wrongMsg: "सही नहीं — नीचे स्पष्टीकरण पढ़ें।",
        nextBtn: "अगला प्रश्न",
        restartBtn: "फिर से शुरू करें",
        scoreLabel: "स्कोर",
        questions: [
          {
            q: "भारी व्यायाम के दौरान पेशियों में किसके जमाव से ऐंठन (Cramps) होती है?",
            options: ["इथेनॉल", "लैक्टिक एसिड", "हाइड्रोक्लोरिक एसिड", "यूरिया"],
            answer: 1,
            explain: "ऑक्सीजन की कमी से अवायवीय श्वसन द्वारा लैक्टिक एसिड बनता है जो ऐंठन पैदा करता है।",
          },
          {
            q: "दो Z-रेखाओं के बीच पेशी संकुचन की मूल इकाई क्या कहलाती है?",
            options: ["न्यूरॉन", "नेफ्रॉन", "सार्कोमियर", "कूपिका"],
            answer: 2,
            explain: "सार्कोमियर पेशी तंतु की सूक्ष्म संकुचनशील इकाई है।",
          },
          {
            q: "संकुचन के समय एक्टिन और मायोसिन तंतुओं में क्या होता है?",
            options: [
              "वे पिघल जाते हैं",
              "पतले एक्टिन तंतु मोटे मायोसिन पर अंदर की ओर फिसलते हैं",
              "उनकी लंबाई दोगुनी हो जाती है",
              "वे टूट जाते हैं",
            ],
            answer: 1,
            explain: "मायोसिन क्रॉस-ब्रिज एक्टिन को केंद्र की ओर खींचते हैं।",
          },
          {
            q: "गर्म पानी के स्नान या मालिश से ऐंठन जल्दी क्यों ठीक होती है?",
            options: [
              "पेशी जम जाती है",
              "रक्त संचार और O₂ की आपूर्ति बढ़कर लैक्टिक एसिड टूट जाता है",
              "ATP खत्म हो जाता है",
              "श्वसन रुक जाता है",
            ],
            answer: 1,
            explain: "अधिक ऑक्सीजन मिलने से जमा हुआ लैक्टिक एसिड टूटकर साफ हो जाता है।",
          },
        ],
      },
    },

    bn: {
      chapterBadge: "অধ্যায় ০৪ • শ্রেণি ৯–১০ ল্যাব",
      title: "মানব পেশী তন্ত্র — লাইভ ল্যাব",
      subtitle:
        "বাইসেপস ও ট্রাইসেপস কীভাবে জোড়ায় কাজ করে দেখতে হাত ভাঁজ করুন, অথবা ৩ প্রকার পেশীর মাইক্রোস্কোপ দেখুন",
      views: {
        arm: "বাইসেপস ও ট্রাইসেপস বাহু",
        types: "৩ প্রকার পেশী",
      },
      toggles: {
        autoOn: "অটো ফ্লেক্স: চালু",
        autoOff: "অটো ফ্লেক্স: বন্ধ",
        pins: "হটস্পট পিন",
        pause: "থামান",
        play: "চালান",
      },
      metrics: {
        angle: "কনুইয়ের কোণ",
        biceps: "বাইসেপস",
        triceps: "ট্রাইসেপস",
        atp: "ATP চাহিদা",
        contracting: "সংকুচিত (ছোট)",
        relaxing: "প্রসারিত (লম্বা)",
        balanced: "ভারসাম্য",
        low: "কম (বিশ্রাম)",
        moderate: "মাঝারি",
        high: "বেশি (সর্বোচ্চ)",
      },
      flexControl: "বাহু সংকোচনের হার (%)",
      flexSuffix: "% ভাঁজ",
      presets: {
        ext: "সোজা (0%)",
        mid: "আধা ভাঁজ (45%)",
        curl: "শক্ত ভাঁজ (80%)",
        max: "সম্পূর্ণ ভাঁজ (100%)",
      },
      tabs: {
        inspect: "পেশী পরিদর্শক",
        lesson: "শ্রেণি ৯–১০ পাঠ",
        quiz: "দ্রুত যাচাই",
      },
      selectPrompt:
        "পেশী কীভাবে হাড় নাড়ায় জানতে যেকোনো পিনে ট্যাপ করুন অথবা ৩ প্রকার পেশী দেখুন।",
      armHotspots: {
        biceps: {
          name: "বাইসেপস পেশী (ফ্লেক্সর)",
          en: "Biceps Brachii",
          role: "উপরের বাহুর সামনের অংশ",
          summary:
            "উপরের বাহুর সামনে থাকা দ্বিশিরস্ক কঙ্কাল পেশী। সংকুচিত হলে এটি খাটো ও মোটা হয়ে নিচের বাহুকে ওপরের দিকে টানে।",
          keyFact: "পেশী কেবল টানতে (Pull) পারে, ঠেলতে পারে না—তাই বাইসেপস ও ট্রাইসেপস জোড়ায় কাজ করে।",
        },
        triceps: {
          name: "ট্রাইসেপস পেশী (এক্সটেন্সর)",
          en: "Triceps Brachii",
          role: "উপরের বাহুর পিছনের অংশ",
          summary:
            "উপরের বাহুর পিছনে অবস্থিত পেশী। বাইসেপস সংকুচিত হলে এটি প্রসারিত হয়; আর ট্রাইসেপস সংকুচিত হলে হাত আবার সোজা হয়।",
          keyFact: "বাইসেপস ও ট্রাইসেপস হলো 'বিপরীতধর্মী পেশীজোড়' (Antagonistic Pair)-এর সেরা উদাহরণ।",
        },
        tendon: {
          name: "টেন্ডন (কণ্ডরা)",
          en: "Tendon (Muscle → Bone)",
          role: "শক্ত তন্তুময় রজ্জু",
          summary: "দৃঢ় অস্থিতিস্থাপক সংযোগ কলা যা পেশীকে সরাসরি অস্থির (হাড়) সাথে যুক্ত করে টান শক্তি পৌঁছে দেয়।",
          keyFact: "পরীক্ষার টিপস: টেন্ডন (পেশী ↔ হাড়) • লিগামেন্ট (হাড় ↔ হাড়)।",
        },
        humerus: {
          name: "হিউমেরাস (উপরের বাহুর অস্থি)",
          en: "Humerus",
          role: "স্থির অবলম্বন অস্থি",
          summary: "উপরের বাহুর লম্বা হাড় যা বাইসেপস ও ট্রাইসেপসের জন্য দৃঢ় ভিত্তি তৈরি করে।",
          keyFact: "নিচের বাহুর নিখুঁত নড়াচড়ার জন্য স্থির লিভার কাঠামো দেয়।",
        },
        forearm: {
          name: "রেডিয়াস ও আলনা",
          en: "Forearm Bones",
          role: "সচল অস্থি লিভার",
          summary: "নিচের বাহুর দুটি সমান্তরাল হাড়। বাইসেপস টেন্ডন রেডিয়াসে এবং ট্রাইসেপস আলনায় যুক্ত থাকে।",
          keyFact: "তৃতীয় শ্রেণির লিভারের মতো কাজ করে হাতকে দ্রুত নাড়ায়।",
        },
        elbow: {
          name: "কনুইয়ের কব্জা সন্ধি",
          en: "Elbow Hinge Joint",
          role: "আলম্ব বিন্দু (Pivot)",
          summary: "দরজার কব্জার মতো সাইনোভিয়াল অস্থিসন্ধি যা হাতকে একদিকে মসৃণভাবে ভাঁজ করতে সাহায্য করে।",
          keyFact: "লিগামেন্ট এই সন্ধিকে শক্ত করে বেঁধে রাখে।",
        },
      },
      typeHotspots: {
        skeletal: {
          name: "১. ঐচ্ছিক (সরেখ) পেশী",
          en: "Skeletal / Striated",
          role: "হাড়ের সাথে যুক্ত • ঐচ্ছিক",
          summary: "লম্বা, নলাকার, শাখাবিহীন, আড়াআড়ি দাগযুক্ত এবং প্রান্তীয় বহু-নিউক্লিয়াসবিশিষ্ট পেশী।",
          keyFact: "ইচ্ছামতো দ্রুত কাজ করে (হাত-পা), তবে বেশিক্ষণ কাজ করলে ক্লান্ত হয়।",
        },
        smooth: {
          name: "২. অনৈচ্ছিক (মসৃণ) পেশী",
          en: "Smooth / Unstriated",
          role: "অভ্যন্তরীণ অঙ্গ • অনৈচ্ছিক",
          summary: "মাকু-আকৃতির (দুই প্রান্ত সূচালো), দাগবিহীন এবং কেন্দ্রে একটি নিউক্লিয়াসযুক্ত কোষ।",
          keyFact: "পাকস্থলী, অন্ত্র ও রক্তনালীতে ধীরে ও নিরবচ্ছিন্নভাবে কাজ করে।",
        },
        cardiac: {
          name: "৩. হৃৎপেশী (Cardiac)",
          en: "Cardiac Muscle",
          role: "শুধুমাত্র হৃৎপিণ্ডে • ক্লান্তিহীন",
          summary: "নলাকার, শাখান্বিত, এক নিউক্লিয়াস ও ইন্টারক্যালেটেড ডিস্কযুক্ত বিশেষ অনৈচ্ছিক পেশী।",
          keyFact: "কখনো ক্লান্ত হয় না—সারাজীবন প্রতিদিন প্রায় ১ লক্ষ বার স্পন্দিত হয়!",
        },
      },
      lesson: {
        heading: "শ্রেণি ৯–১০ পাঠ পরিকল্পনা: মানব পেশী তন্ত্র",
        sections: [
          {
            title: "১. পেশী কলা কী?",
            html: `<p><strong>পেশী কলা</strong> লম্বা পেশীতন্তু দিয়ে গঠিত, যার মধ্যে <strong>অ্যাক্টিন (Actin)</strong> ও <strong>মায়োসিন (Myosin)</strong> নামক সংকোচনশীল প্রোটিন থাকে। মানবদেহে <strong>৬০০-র বেশি পেশী</strong> রয়েছে।</p>`,
          },
          {
            title: "২. তিন প্রকার পেশীর তুলনা",
            html: `<p>• <strong>সরেখ (ঐচ্ছিক):</strong> নলাকার, শাখাবিহীন, বহু-নিউক্লিয়াস, দাগযুক্ত, <strong>ঐচ্ছিক</strong>।<br/>• <strong>মসৃণ (অনৈচ্ছিক):</strong> মাকু-আকৃতি, এক নিউক্লিয়াস, দাগবিহীন, <strong>অনৈচ্ছিক</strong> (পাকস্থলী, অন্ত্র)।<br/>• <strong>হৃৎপেশী:</strong> নলাকার, <strong>শাখান্বিত</strong>, এক নিউক্লিয়াস, <strong>অনৈচ্ছিক</strong>, কখনো ক্লান্ত হয় না।</p>`,
          },
          {
            title: "৩. বিপরীতধর্মী পেশীজোড় (Antagonistic Pair)",
            html: `<div class="detail-fact" style="margin-top:4px"><strong>হাত ভাঁজ (Flexion):</strong> বাইসেপস সংকুচিত + ট্রাইসেপস প্রসারিত।<br/><strong>হাত সোজা (Extension):</strong> ট্রাইসেপস সংকুচিত + বাইসেপস প্রসারিত।</div>`,
          },
          {
            title: "৪. টেন্ডন বনাম লিগামেন্ট",
            html: `<p>• <strong>টেন্ডন (Tendon):</strong> পেশীকে হাড়ের সাথে যুক্ত করে।<br/>• <strong>লিগামেন্ট (Ligament):</strong> একটি হাড়কে অন্য হাড়ের সাথে যুক্ত করে।</p>`,
          },
        ],
      },
      quiz: {
        title: "পেশী তন্ত্র দ্রুত যাচাই",
        correctMsg: "একদম সঠিক! বিজ্ঞানের ধারণাটি পরিষ্কার।",
        wrongMsg: "সঠিক নয় — নিচের ব্যাখ্যাটি দেখুন।",
        nextBtn: "পরবর্তী প্রশ্ন",
        restartBtn: "আবার শুরু করুন",
        scoreLabel: "স্কোর",
        questions: [
          {
            q: "কোন পেশী নলাকার, শাখান্বিত, অনৈচ্ছিক এবং কখনোই ক্লান্ত হয় না?",
            options: ["ঐচ্ছিক পেশী", "মসৃণ পেশী", "হৃৎপেশী (Cardiac)", "টেন্ডন"],
            answer: 2,
            explain: "হৃৎপেশী শুধুমাত্র হৃৎপিণ্ডে থাকে এবং সারাজীবন অবিরাম স্পন্দিত হয়।",
          },
          {
            q: "কনুই ভাঁজ করে বই তোলার সময় বাইসেপস ও ট্রাইসেপসে কী ঘটে?",
            options: [
              "উভয়ই সংকুচিত হয়",
              "বাইসেপস সংকুচিত এবং ট্রাইসেপস প্রসারিত হয়",
              "বাইসেপস প্রসারিত এবং ট্রাইসেপস সংকুচিত হয়",
              "উভয়ই প্রসারিত থাকে",
            ],
            answer: 1,
            explain: "বিপরীতধর্মী জোড়া হিসেবে বাইসেপস হাতকে ওপরে টানে আর ট্রাইসেপস শিথিল থাকে।",
          },
          {
            q: "কোন যোগকলা পেশীকে হাড়ের সাথে যুক্ত করে?",
            options: ["লিগামেন্ট", "তরুণাস্থি", "টেন্ডন (Tendon)", "প্লাজমা"],
            answer: 2,
            explain: "টেন্ডন পেশী ↔ হাড় যুক্ত করে; আর লিগামেন্ট হাড় ↔ হাড় যুক্ত করে।",
          },
          {
            q: "পাকস্থলী ও অন্ত্রের প্রাচীরে কোন প্রকার পেশী থাকে?",
            options: ["মসৃণ (অনৈচ্ছিক) পেশী", "ঐচ্ছিক পেশী", "হৃৎপেশী", "সরেখ পেশী"],
            answer: 0,
            explain: "মাকু-আকৃতির মসৃণ পেশী অভ্যন্তরীণ অঙ্গে অনৈচ্ছিক সংকোচন ঘটায়।",
          },
          {
            q: "পেশীতন্তুতে থাকা দুটি প্রধান সংকোচনশীল প্রোটিন কী কী?",
            options: ["হিমোগ্লোবিন ও ফাইব্রিনোজেন", "অ্যাক্টিন ও মায়োসিন", "ইনসুলিন ও অ্যাড্রেনালিন", "পেপসিন ও ট্রিপসিন"],
            answer: 1,
            explain: "অ্যাক্টিন ও মায়োসিন তন্তু একে অপরের ওপর পিছলে গিয়ে পেশী সংকুচিত করে।",
          },
        ],
      },

      sarcSec: {
        title: "সার্কোমিয়ার ও পেশী শক্তি — 3D ফ্লিপ ল্যাব",
        subtitle:
          "সামনে: অ্যাক্টিন ও মায়োসিন স্লাইডিং ফিলামেন্ট • কার্ড উল্টান এবং ল্যাকটিক অ্যাসিড ও পেশীতে টান (Cramps) দেখুন",
        flipMain: "কার্ড উল্টান: সার্কোমিয়ার ↔ টান ও ATP",
        frontBadge: "সামনে • সার্কোমিয়ার (স্লাইডিং ফিলামেন্ট)",
        flipToFatigue: "পেশীতে টান ও ল্যাকটিক অ্যাসিড দেখুন",
        contractBtn: "সার্কোমিয়ার সংকুচিত করুন (ATP খরচ!)",
        sarcPrompt: "পেশী কীভাবে ছোট হয় বুঝতে নিচের যেকোনো সূক্ষ্ম অংশে ট্যাপ করুন:",
        backBadge: "পিছনে • শক্তি, অক্সিজেন ঘাটতি ও পেশীতে টান",
        flipToSarc: "সার্কোমিয়ারে ফিরে যান",
        sprintBtnJog: "দ্রুত দৌড় (Sprint) চালান — ল্যাকটিক অ্যাসিড দেখুন!",
        sprintBtnSprint: "স্বাভাবিক জগিংয়ে ফিরুন (O₂ স্বাভাবিক করুন)",
        fatiguePrompt: "হঠাৎ জোরে দৌড়ালে পায়ে ব্যথা বা টান (Cramps) কেন ধরে তা সহজে দেখুন:",
        lessonTab: "সংকোচন ও পেশীর টান নোটস (শ্রেণি ৯–১০)",
        quizTab: "সার্কোমিয়ার ও টান কুইজ",
        analogyLabel: "সহজ উদাহরণ",
        sarcHudContract: "সংকোচন: মায়োসিন মাথা অ্যাক্টিনকে ভেতরে টানে → Z-রেখা কাছে আসে!",
        sarcHudRelax: "প্রসারণ: অ্যাক্টিন ও মায়োসিন আলাদা হয় → Z-রেখা দূরে সরে",
        fatigueHudJog: "সবাত জগিং: পর্যাপ্ত O₂ → 38 ATP (কোনো টান নেই!)",
        fatigueHudSprint: "অবাত স্প্রিন্ট: কম O₂ → মাত্র 2 ATP + ল্যাকটিক অ্যাসিড (পেশীতে টান!)",
      },
      sarcParts: {
        zline: {
          name: "Z-রেখা (সীমানা)",
          en: "Z-Lines",
          role: "সার্কোমিয়ারের প্রাচীর",
          analogy: "হারমোনিয়ামের দুই পাশের মতো যা চাপলে কাছাকাছি চলে আসে।",
          summary: "সার্কোমিয়ারের দুই প্রান্তের প্রোটিন প্রাচীর যা সংকোচনের সময় কাছে চলে আসে।",
        },
        actin: {
          name: "অ্যাক্টিন (পাতলা তন্তু)",
          en: "Actin Filament",
          role: "ভেতরের দিকে টানা হয়",
          analogy: "দড়ি টানাটানির দড়ির মতো যা কেন্দ্রের দিকে টেনে আনা হয়।",
          summary: "Z-রেখায় যুক্ত পাতলা প্রোটিন তন্তু যা মায়োসিনের ওপর দিয়ে ভেতরে পিছলে আসে।",
        },
        myosin: {
          name: "মায়োসিন (মোটা তন্তু)",
          en: "Myosin Filament",
          role: "টানার ক্রস-ব্রিজ",
          analogy: "নৌকার দাঁড় টানার মতো যা দড়ি আঁকড়ে ধরে ভেতরে টানে।",
          summary: "মাঝখানের মোটা তন্তু যার সূক্ষ্ম মাথা অ্যাক্টিনকে ধরে কেন্দ্রের দিকে টানে।",
        },
        atp: {
          name: "ATP শক্তি ও Ca²⁺",
          en: "ATP & Calcium",
          role: "সংকোচনের জ্বালানি",
          analogy: "মেশিন চালানোর কয়েনের মতো—প্রতিটি টানের জন্য ATP শক্তি দরকার।",
          summary: "ক্যালসিয়াম আয়ন অ্যাক্টিনকে উন্মুক্ত করে এবং ATP মায়োসিনকে টানার শক্তি জোগায়।",
        },
      },
      fatigueSteps: {
        aerobic: {
          name: "১. স্বাভাবিক জগিং (পর্যাপ্ত O₂)",
          en: "38 ATP • সবাত শ্বসন",
          role: "গ্লুকোজ + 6O₂ → 6CO₂ + 6H₂O + 38 ATP",
          analogy: "পর্যাপ্ত বাতাস পাওয়া পরিষ্কার ইঞ্জিন যা ক্লান্ত না হয়ে অনেক দূর চলে।",
          summary: "পর্যাপ্ত অক্সিজেন পেলে গ্লুকোজ সম্পূর্ণ জারিত হয়ে প্রচুর ৩৮ অণু ATP তৈরি করে।",
        },
        shortage: {
          name: "২. দৌড়ে অক্সিজেন ঘাটতি",
          en: "Oxygen Debt",
          role: "জরুরি অবাত মোড",
          analogy: "ফুসফুস অক্সিজেন পৌঁছানোর আগেই পায়ের পেশীতে শক্তির চাহিদা বেড়ে যায়।",
          summary: "হঠাৎ ভারী ব্যায়ামে অক্সিজেন কমে গেলে পেশীকোষ অবাত শ্বসন শুরু করে।",
        },
        lactic: {
          name: "৩. ল্যাকটিক অ্যাসিড ও টান",
          en: "Lactic Acid Cramps",
          role: "গ্লুকোজ → ল্যাকটিক অ্যাসিড + 2 ATP",
          analogy: "ব্যাকআপ শক্তি কিছুক্ষণ কাজ করে কিন্তু অ্যাসিড জমিয়ে পেশী শক্ত করে দেয়।",
          summary: "পেশীতে ল্যাকটিক অ্যাসিড জমে ক্লান্তি, জ্বালা এবং হঠাৎ পেশীতে টান (Cramps) ধরে।",
        },
        recovery: {
          name: "৪. বিশ্রাম ও গরম সেঁকে আরাম",
          en: "Recovery",
          role: "রক্ত সঞ্চালন বৃদ্ধি",
          analogy: "দৌড়ের পর হাঁপানো হলো শরীরের ধার নেওয়া অক্সিজেন শোধ করা।",
          summary: "গরম জলে স্নান বা মালিশে রক্তপ্রবাহ ও O₂ বেড়ে ল্যাকটিক অ্যাসিড ভেঙে ব্যথা কমে যায়।",
        },
      },
      sfLesson: {
        heading: "শ্রেণি ৯–১০ নোটস: স্লাইডিং ফিলামেন্ট ও পেশীতে টান",
        sections: [
          {
            title: "১. স্লাইডিং ফিলামেন্ট তত্ত্ব",
            html: `<p>সংকোচনে অ্যাক্টিন বা মায়োসিন নিজে খাটো হয় না—মায়োসিনের মাথা ATP শক্তি ব্যবহার করে অ্যাক্টিন তন্তুকে ভেতরে টেনে আনে, ফলে Z-রেখাগুলো কাছে এসে পেশী ছোট হয়।</p>`,
          },
          {
            title: "২. ভারী ব্যায়ামে পেশীতে টান (Cramps) ধরে কেন?",
            html: `<div class="detail-fact" style="margin-top:4px"><strong>অক্সিজেনের অভাবে (পেশীকোষে):</strong><br/>গ্লুকোজ → পাইরুভেট → <strong>ল্যাকটিক অ্যাসিড</strong> + 2 ATP</div>
            <p style="margin-top:8px">ল্যাকটিক অ্যাসিড জমে পেশীতে টান ধরে। গরম জলে স্নান বা মালিশ করলে রক্ত সঞ্চালন ও O₂ বেড়ে ল্যাকটিক অ্যাসিড ভেঙে যায়।</p>`,
          },
        ],
      },
      sfQuiz: {
        title: "সার্কোমিয়ার ও পেশীর টান কুইজ",
        correctMsg: "দারুণ! সঠিক উত্তর।",
        wrongMsg: "সঠিক নয় — নিচের ব্যাখ্যাটি দেখুন।",
        nextBtn: "পরবর্তী প্রশ্ন",
        restartBtn: "আবার শুরু করুন",
        scoreLabel: "স্কোর",
        questions: [
          {
            q: "ভারী দৌড় বা ব্যায়ামের সময় পেশীতে কোন পদার্থ জমে টান (Cramps) সৃষ্টি করে?",
            options: ["ইথানল", "ল্যাকটিক অ্যাসিড", "হাইড্রোক্লোরিক অ্যাসিড", "ইউরিয়া"],
            answer: 1,
            explain: "অক্সিজেনের অভাবে অবাত শ্বসনে ল্যাকটিক অ্যাসিড তৈরি হয়ে পেশীতে টান ধরায়।",
          },
          {
            q: "দুটি Z-রেখার মাঝখানের পেশী সংকোচনের মূল একক কী?",
            options: ["নিউরন", "নেফ্রন", "সার্কোমিয়ার", "অ্যালভিওলাই"],
            answer: 2,
            explain: "সার্কোমিয়ার হলো অ্যাক্টিন ও মায়োসিনযুক্ত সংকোচনের ক্ষুদ্রতম একক।",
          },
          {
            q: "পেশী সংকোচনের সময় অ্যাক্টিন ও মায়োসিন তন্তুতে কী ঘটে?",
            options: [
              "তারা গলে যায়",
              "পাতলা অ্যাক্টিন তন্তু মোটা মায়োসিনের ওপর দিয়ে ভেতরে পিছলে আসে",
              "তারা দ্বিগুণ লম্বা হয়",
              "তারা ছিঁড়ে যায়",
            ],
            answer: 1,
            explain: "মায়োসিন ক্রস-ব্রিজ অ্যাক্টিনকে কেন্দ্রের দিকে টেনে Z-রেখাগুলো কাছে আনে।",
          },
          {
            q: "গরম জলে স্নান বা মালিশ করলে পেশীর টান তাড়াতাড়ি কমে কেন?",
            options: [
              "পেশী জমে যায়",
              "রক্তপ্রবাহ ও O₂ সরবরাহ বেড়ে ল্যাকটিক অ্যাসিড ভেঙে যায়",
              "ATP শেষ হয়ে যায়",
              "শ্বাস বন্ধ হয়",
            ],
            answer: 1,
            explain: "পর্যাপ্ত O₂ পৌঁছালে জমে থাকা ল্যাকটিক অ্যাসিড ভেঙে গিয়ে ব্যথা কমে।",
          },
        ],
      },
    },
  };

  // Hotspot Pins (percentages on 420x440 stage)
  const ARM_PINS = [
    { id: "humerus", x: 34.0, y: 27.0, tone: "venous" },
    { id: "biceps", x: 46.5, y: 40.0, tone: "arterial" },
    { id: "triceps", x: 24.0, y: 44.0, tone: "venous" },
    { id: "tendon", x: 48.0, y: 57.5, tone: "electric" },
    { id: "elbow", x: 35.5, y: 65.0, tone: "electric" },
    { id: "forearm", x: 64.0, y: 58.0, tone: "venous" },
  ];

  const TYPE_PINS = [
    { id: "skeletal", x: 18.0, y: 21.0, tone: "arterial" },
    { id: "smooth", x: 18.0, y: 49.0, tone: "venous" },
    { id: "cardiac", x: 18.0, y: 76.0, tone: "electric" },
  ];

  const ui = {
    view: "arm", // "arm" | "types"
    autoFlex: true,
    flexPct: 50, // 0..100
    showPins: true,
    selectedArmHotspot: "biceps",
    selectedTypeHotspot: "skeletal",
    muscTab: "inspect", // "inspect" | "lesson" | "quiz"
    muscQ: 0,
    muscOpt: null,
    muscScore: 0,
    muscQuizDone: false,

    // Section 2: 3D Flip Card
    isFlipped: false,
    sarcPaused: false,
    selectedSarcPart: "myosin",
    sarcTarget: 0, // toggles 0 <-> 1
    sarcAmount: 0,
    sarcAuto: true,
    sprintMode: false, // false = Aerobic Jog, true = Anaerobic Sprint (Lactic Acid)
    selectedFatigueStep: "aerobic",
    sfTab: "lesson", // "lesson" | "quiz"
    sfQ: 0,
    sfOpt: null,
    sfScore: 0,
    sfQuizDone: false,
  };

  function getMD() {
    const lang = BL.getState().lang;
    return MUSC_DICT[lang] || MUSC_DICT.en;
  }

  // =========================================================
  // RENDER UI PANELS
  // =========================================================
  function renderMuscPins() {
    const layer = document.getElementById("musc-pins-layer");
    if (!layer) return;
    const md = getMD();
    const isArm = ui.view === "arm";
    const pins = isArm ? ARM_PINS : TYPE_PINS;
    const dictMap = isArm ? md.armHotspots : md.typeHotspots;
    const selId = isArm ? ui.selectedArmHotspot : ui.selectedTypeHotspot;

    layer.classList.toggle("hidden", !ui.showPins);
    layer.innerHTML = "";

    pins.forEach((pin) => {
      const data = dictMap[pin.id];
      if (!data) return;
      const isSel = selId === pin.id;

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
        if (isArm) ui.selectedArmHotspot = pin.id;
        else ui.selectedTypeHotspot = pin.id;
        ui.muscTab = "inspect";
        syncMuscUI();
      });

      layer.appendChild(btn);
    });
  }

  function renderQuizInto(container, quizObj, prefix) {
    const qs = quizObj.questions;
    const qIdx = prefix === "musc" ? ui.muscQ : ui.sfQ;
    const selOpt = prefix === "musc" ? ui.muscOpt : ui.sfOpt;
    const score = prefix === "musc" ? ui.muscScore : ui.sfScore;
    const done = prefix === "musc" ? ui.muscQuizDone : ui.sfQuizDone;

    const topBar = document.createElement("div");
    topBar.className = "control-head";
    topBar.innerHTML = `
      <h3 class="detail-title" style="margin-top:0">${quizObj.title}</h3>
      <span class="accent-pill">${quizObj.scoreLabel}: ${score}/${qs.length}</span>
    `;
    container.appendChild(topBar);

    if (done) {
      const doneBox = document.createElement("div");
      doneBox.className = "detail-box";
      doneBox.style.textAlign = "center";
      doneBox.style.marginTop = "12px";
      doneBox.innerHTML = `
        <p class="detail-title">${score} / ${qs.length}</p>
        <button id="btn-${prefix}-quiz-restart" type="button" class="secondary-cta" style="margin-top:14px">${quizObj.restartBtn}</button>
      `;
      container.appendChild(doneBox);
      const rst = document.getElementById(`btn-${prefix}-quiz-restart`);
      if (rst) {
        rst.addEventListener("click", () => {
          if (prefix === "musc") {
            ui.muscQ = 0;
            ui.muscOpt = null;
            ui.muscScore = 0;
            ui.muscQuizDone = false;
            renderMuscReader();
          } else {
            ui.sfQ = 0;
            ui.sfOpt = null;
            ui.sfScore = 0;
            ui.sfQuizDone = false;
            renderSFReader();
          }
        });
      }
      return;
    }

    const cur = qs[qIdx];
    const qBox = document.createElement("div");
    qBox.className = "chapter-sec";
    qBox.innerHTML = `
      <span class="micro-label">Q${qIdx + 1} / ${qs.length}</span>
      <p style="font-weight:700;color:var(--text);margin-top:4px">${cur.q}</p>
    `;
    container.appendChild(qBox);

    cur.options.forEach((opt, idx) => {
      const optBtn = document.createElement("button");
      optBtn.type = "button";
      optBtn.className = "quiz-option";
      if (selOpt !== null) {
        if (idx === cur.answer) optBtn.classList.add("correct");
        else if (idx === selOpt) optBtn.classList.add("wrong");
        optBtn.disabled = true;
      }
      optBtn.textContent = opt;
      optBtn.addEventListener("click", () => {
        if (selOpt !== null) return;
        if (prefix === "musc") {
          ui.muscOpt = idx;
          if (idx === cur.answer) ui.muscScore += 1;
          renderMuscReader();
        } else {
          ui.sfOpt = idx;
          if (idx === cur.answer) ui.sfScore += 1;
          renderSFReader();
        }
      });
      container.appendChild(optBtn);
    });

    if (selOpt !== null) {
      const fb = document.createElement("div");
      fb.className = "detail-fact";
      const ok = selOpt === cur.answer;
      fb.innerHTML = `
        <strong style="color:${ok ? "#56c99b" : "var(--arterial)"}">${ok ? quizObj.correctMsg : quizObj.wrongMsg}</strong>
        <p style="margin-top:4px">${cur.explain}</p>
        <button id="btn-${prefix}-quiz-next" type="button" class="secondary-cta" style="margin-top:10px">${quizObj.nextBtn}</button>
      `;
      container.appendChild(fb);
      const nxt = document.getElementById(`btn-${prefix}-quiz-next`);
      if (nxt) {
        nxt.addEventListener("click", () => {
          if (prefix === "musc") {
            if (ui.muscQ + 1 < qs.length) {
              ui.muscQ += 1;
              ui.muscOpt = null;
            } else {
              ui.muscQuizDone = true;
            }
            renderMuscReader();
          } else {
            if (ui.sfQ + 1 < qs.length) {
              ui.sfQ += 1;
              ui.sfOpt = null;
            } else {
              ui.sfQuizDone = true;
            }
            renderSFReader();
          }
        });
      }
    }
  }

  function renderMuscReader() {
    const bodyEl = document.getElementById("musc-reader-body");
    if (!bodyEl) return;
    const md = getMD();

    document.querySelectorAll("#musc-reader-panel .tab-btn").forEach((b) => {
      b.classList.toggle("active", b.getAttribute("data-musc-tab") === ui.muscTab);
    });

    bodyEl.innerHTML = "";
    if (ui.muscTab === "inspect") {
      const hint = document.createElement("p");
      hint.className = "heart-subtitle";
      hint.textContent = md.selectPrompt;
      bodyEl.appendChild(hint);

      const isArm = ui.view === "arm";
      const dictMap = isArm ? md.armHotspots : md.typeHotspots;
      const selId = isArm ? ui.selectedArmHotspot : ui.selectedTypeHotspot;

      const pillsWrap = document.createElement("div");
      pillsWrap.className = "part-pills";
      Object.keys(dictMap).forEach((id) => {
        const item = dictMap[id];
        const pill = document.createElement("button");
        pill.type = "button";
        pill.className = `part-pill${selId === id ? " active" : ""}`;
        pill.textContent = item.name;
        pill.addEventListener("click", () => {
          if (isArm) ui.selectedArmHotspot = id;
          else ui.selectedTypeHotspot = id;
          syncMuscUI();
        });
        pillsWrap.appendChild(pill);
      });
      bodyEl.appendChild(pillsWrap);

      const cur = dictMap[selId] || Object.values(dictMap)[0];
      const box = document.createElement("div");
      box.className = "detail-box";
      box.innerHTML = `
        <span class="detail-type">${cur.role}</span>
        <h2 class="detail-title">${BL.term(cur)}</h2>
        <p class="detail-summary">${cur.summary}</p>
        <div class="detail-fact">💡 ${cur.keyFact}</div>
      `;
      bodyEl.appendChild(box);
    } else if (ui.muscTab === "lesson") {
      const h = document.createElement("h2");
      h.className = "detail-title";
      h.style.marginTop = "0";
      h.textContent = md.lesson.heading;
      bodyEl.appendChild(h);

      md.lesson.sections.forEach((sec) => {
        const card = document.createElement("div");
        card.className = "chapter-sec";
        card.innerHTML = `<h3>${sec.title}</h3><div style="margin-top:6px;font-size:13.5px;line-height:1.68">${sec.html}</div>`;
        bodyEl.appendChild(card);
      });
    } else {
      renderQuizInto(bodyEl, md.quiz, "musc");
    }
  }

  function renderFlipDetails() {
    const md = getMD();

    const sChips = document.getElementById("sarc-parts-chips");
    const sDetail = document.getElementById("sarc-part-detail");
    if (sChips && sDetail) {
      sChips.innerHTML = "";
      Object.keys(md.sarcParts).forEach((pid) => {
        const item = md.sarcParts[pid];
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `part-pill${ui.selectedSarcPart === pid ? " active" : ""}`;
        btn.textContent = item.name;
        btn.addEventListener("click", () => {
          ui.selectedSarcPart = pid;
          renderFlipDetails();
        });
        sChips.appendChild(btn);
      });

      const cur = md.sarcParts[ui.selectedSarcPart] || md.sarcParts.myosin;
      sDetail.innerHTML = `
        <span class="detail-type">${cur.role}</span>
        <h3 class="detail-title">${BL.term(cur)}</h3>
        <p class="detail-summary">${cur.summary}</p>
        <div class="detail-fact">✨ <strong>${md.sarcSec.analogyLabel}:</strong> ${cur.analogy}</div>
      `;
    }

    const fChips = document.getElementById("fatigue-steps-chips");
    const fDetail = document.getElementById("fatigue-step-detail");
    if (fChips && fDetail) {
      fChips.innerHTML = "";
      Object.keys(md.fatigueSteps).forEach((fid) => {
        const item = md.fatigueSteps[fid];
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `part-pill${ui.selectedFatigueStep === fid ? " active" : ""}`;
        btn.textContent = item.name;
        btn.addEventListener("click", () => {
          ui.selectedFatigueStep = fid;
          ui.sprintMode = fid === "shortage" || fid === "lactic";
          syncMuscUI();
        });
        fChips.appendChild(btn);
      });

      const curF = md.fatigueSteps[ui.selectedFatigueStep] || md.fatigueSteps.aerobic;
      fDetail.innerHTML = `
        <span class="detail-type">${curF.role}</span>
        <h3 class="detail-title">${BL.term(curF)}</h3>
        <p class="detail-summary">${curF.summary}</p>
        <div class="detail-fact">✨ <strong>${md.sarcSec.analogyLabel}:</strong> ${curF.analogy}</div>
      `;
    }
  }

  function renderSFReader() {
    const bodyEl = document.getElementById("sf-reader-body");
    if (!bodyEl) return;
    const md = getMD();

    document.querySelectorAll("#sf-reader-panel .tab-btn").forEach((b) => {
      b.classList.toggle("active", b.getAttribute("data-sf-tab") === ui.sfTab);
    });

    bodyEl.innerHTML = "";
    if (ui.sfTab === "lesson") {
      const h = document.createElement("h3");
      h.className = "detail-title";
      h.style.marginTop = "0";
      h.textContent = md.sfLesson.heading;
      bodyEl.appendChild(h);

      md.sfLesson.sections.forEach((sec) => {
        const card = document.createElement("div");
        card.className = "chapter-sec";
        card.innerHTML = `<h3>${sec.title}</h3><div style="margin-top:6px;font-size:13.5px;line-height:1.68">${sec.html}</div>`;
        bodyEl.appendChild(card);
      });
    } else {
      renderQuizInto(bodyEl, md.sfQuiz, "sf");
    }
  }

  function updateFlexMetrics() {
    const md = getMD();
    const pct = Math.round(ui.flexPct);
    const angle = Math.round(165 - (pct / 100) * 120);

    const setText = (id, txt) => {
      const el = document.getElementById(id);
      if (el) el.textContent = txt;
    };

    setText("metric-angle", String(angle));
    setText("flex-pill", `${pct}${md.flexSuffix}`);

    const slider = document.getElementById("flex-slider");
    if (slider && document.activeElement !== slider) slider.value = String(pct);

    const biEl = document.getElementById("metric-biceps");
    const triEl = document.getElementById("metric-triceps");
    const atpEl = document.getElementById("metric-atp");

    if (pct > 55) {
      if (biEl) {
        biEl.textContent = md.metrics.contracting;
        biEl.className = "metric-phase systole";
      }
      if (triEl) {
        triEl.textContent = md.metrics.relaxing;
        triEl.className = "metric-phase";
      }
      if (atpEl) {
        atpEl.textContent = pct > 80 ? md.metrics.high : md.metrics.moderate;
        atpEl.className = "metric-phase systole";
      }
    } else if (pct < 30) {
      if (biEl) {
        biEl.textContent = md.metrics.relaxing;
        biEl.className = "metric-phase";
      }
      if (triEl) {
        triEl.textContent = md.metrics.contracting;
        triEl.className = "metric-phase systole";
      }
      if (atpEl) {
        atpEl.textContent = md.metrics.low;
        atpEl.className = "metric-phase";
      }
    } else {
      if (biEl) {
        biEl.textContent = md.metrics.balanced;
        biEl.className = "metric-phase";
      }
      if (triEl) {
        triEl.textContent = md.metrics.balanced;
        triEl.className = "metric-phase";
      }
      if (atpEl) {
        atpEl.textContent = md.metrics.moderate;
        atpEl.className = "metric-phase";
      }
    }
  }

  function syncMuscUI() {
    const md = getMD();
    const setText = (id, txt) => {
      const el = document.getElementById(id);
      if (el) el.textContent = txt;
    };

    setText("musc-chapter-badge", md.chapterBadge);
    setText("musc-title", md.title);
    setText("musc-subtitle", md.subtitle);
    setText("lbl-view-arm", md.views.arm);
    setText("lbl-view-types", md.views.types);
    setText("lbl-musc-auto", ui.autoFlex ? md.toggles.autoOn : md.toggles.autoOff);
    setText("lbl-musc-pins", md.toggles.pins);

    setText("lbl-m-angle", md.metrics.angle);
    setText("lbl-m-biceps", md.metrics.biceps);
    setText("lbl-m-triceps", md.metrics.triceps);
    setText("lbl-m-atp", md.metrics.atp);
    setText("lbl-flex-control", md.flexControl);

    setText("preset-ext", md.presets.ext);
    setText("preset-mid", md.presets.mid);
    setText("preset-curl", md.presets.curl);
    setText("preset-max", md.presets.max);

    setText("tab-musc-inspect", md.tabs.inspect);
    setText("tab-musc-lesson", md.tabs.lesson);
    setText("tab-musc-quiz", md.tabs.quiz);

    // Section 2 labels
    setText("sarc-sec-title", md.sarcSec.title);
    setText("sarc-sec-subtitle", md.sarcSec.subtitle);
    setText("lbl-musc-flip-main", md.sarcSec.flipMain);
    setText("lbl-sarc-front-badge", md.sarcSec.frontBadge);
    setText("lbl-flip-to-fatigue", md.sarcSec.flipToFatigue);
    setText("lbl-contract-sarc", md.sarcSec.contractBtn);
    setText("lbl-sarc-prompt", md.sarcSec.sarcPrompt);
    setText("lbl-sarc-back-badge", md.sarcSec.backBadge);
    setText("lbl-flip-to-sarc", md.sarcSec.flipToSarc);
    setText("lbl-toggle-sprint", ui.sprintMode ? md.sarcSec.sprintBtnSprint : md.sarcSec.sprintBtnJog);
    setText("lbl-fatigue-prompt", md.sarcSec.fatiguePrompt);
    setText("tab-sf-lesson", md.sarcSec.lessonTab);
    setText("tab-sf-quiz", md.sarcSec.quizTab);

    const btnArm = document.getElementById("btn-view-arm");
    const btnTypes = document.getElementById("btn-view-types");
    if (btnArm) {
      btnArm.classList.toggle("active-accent", ui.view === "arm");
      btnArm.setAttribute("aria-pressed", String(ui.view === "arm"));
    }
    if (btnTypes) {
      btnTypes.classList.toggle("active-accent", ui.view === "types");
      btnTypes.setAttribute("aria-pressed", String(ui.view === "types"));
    }

    const btnAuto = document.getElementById("btn-musc-auto");
    if (btnAuto) {
      btnAuto.classList.toggle("active-electric", ui.autoFlex);
      btnAuto.setAttribute("aria-pressed", String(ui.autoFlex));
    }

    const btnPins = document.getElementById("btn-musc-pins");
    if (btnPins) {
      btnPins.classList.toggle("active-accent", ui.showPins);
      btnPins.setAttribute("aria-pressed", String(ui.showPins));
    }

    const btnSPause = document.getElementById("btn-sarc-pause");
    if (btnSPause) {
      btnSPause.innerHTML = ui.sarcPaused
        ? `▶ <span>${md.toggles.play}</span>`
        : `⏸ <span>${md.toggles.pause}</span>`;
    }

    const flipCard = document.getElementById("musc-flip-card");
    const flipMain = document.getElementById("btn-musc-flip-main");
    if (flipCard) flipCard.classList.toggle("is-flipped", ui.isFlipped);
    if (flipMain) flipMain.setAttribute("aria-pressed", String(ui.isFlipped));

    document.querySelectorAll("[data-flex]").forEach((b) => {
      b.classList.toggle("active", !ui.autoFlex && Math.abs(Number(b.getAttribute("data-flex")) - ui.flexPct) < 5);
    });

    updateFlexMetrics();
    renderMuscPins();
    renderMuscReader();
    renderFlipDetails();
    renderSFReader();
  }

  // =========================================================
  // CANVAS 1: 60 FPS ARM FLEXION & 3 MUSCLE TYPES (420x440)
  // =========================================================
  function startMuscCanvas() {
    const canvas = document.getElementById("musc-canvas");
    const box = document.getElementById("musc-canvas-box");
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

    let lastTime = performance.now();
    let elapsed = 0;
    let lastMetricTick = 0;

    function drawArmView(ctx, isLight, md) {
      const flex = ui.flexPct / 100; // 0 = straight, 1 = fully flexed
      const boneFill = isLight ? "#cbd5e1" : "#94a3b8";
      const boneStroke = isLight ? "#475569" : "#e2e8f0";
      const artCol = isLight ? "#c24b65" : "#e0637d";
      const venCol = isLight ? "#2c88a8" : "#52bed6";
      const tendonCol = isLight ? "#e2e8f0" : "#f8fafc";
      const gold = isLight ? "#b58428" : "#fbbf24";

      // Key anatomical coordinates
      const shoulder = [148, 72];
      const elbow = [148, 278];
      // Forearm swings from 15 deg (extended right-down) to -82 deg (curled up)
      const foreAngle = (20 - flex * 102) * (Math.PI / 180);
      const foreLen = 156;
      const wrist = [
        elbow[0] + Math.cos(foreAngle) * foreLen,
        elbow[1] + Math.sin(foreAngle) * foreLen,
      ];
      // Biceps insertion point on Radius
      const biAttach = [
        elbow[0] + Math.cos(foreAngle) * 46,
        elbow[1] + Math.sin(foreAngle) * 46,
      ];
      // Triceps insertion point behind elbow (Olecranon of Ulna)
      const triAttach = [
        elbow[0] - Math.cos(foreAngle) * 16,
        elbow[1] - Math.sin(foreAngle) * 16 + 10,
      ];

      // 1. Subtle Arm Skin Outline
      ctx.save();
      ctx.strokeStyle = isLight ? "rgba(43,126,179,0.22)" : "rgba(104,184,230,0.20)";
      ctx.lineWidth = 66;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(shoulder[0], shoulder[1]);
      ctx.lineTo(elbow[0], elbow[1]);
      ctx.lineTo(wrist[0], wrist[1]);
      ctx.stroke();
      ctx.restore();

      // 2. Humerus Bone (Upper Arm)
      ctx.save();
      ctx.strokeStyle = ui.selectedArmHotspot === "humerus" ? gold : boneStroke;
      ctx.fillStyle = boneFill;
      ctx.lineWidth = 18;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(shoulder[0], shoulder[1]);
      ctx.lineTo(elbow[0], elbow[1]);
      ctx.stroke();

      // Shoulder & Elbow Joint Balls
      ctx.fillStyle = boneStroke;
      ctx.beginPath();
      ctx.arc(shoulder[0], shoulder[1], 14, 0, Math.PI * 2);
      ctx.arc(elbow[0], elbow[1], 13, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // 3. Radius & Ulna (Forearm Bones rotating live)
      ctx.save();
      const perpX = -Math.sin(foreAngle) * 5;
      const perpY = Math.cos(foreAngle) * 5;
      ctx.strokeStyle = ui.selectedArmHotspot === "forearm" ? gold : boneStroke;
      ctx.lineWidth = 9;
      ctx.lineCap = "round";
      // Radius
      ctx.beginPath();
      ctx.moveTo(elbow[0] + perpX, elbow[1] + perpY);
      ctx.lineTo(wrist[0] + perpX, wrist[1] + perpY);
      ctx.stroke();
      // Ulna
      ctx.beginPath();
      ctx.moveTo(elbow[0] - perpX, elbow[1] - perpY);
      ctx.lineTo(wrist[0] - perpX, wrist[1] - perpY);
      ctx.stroke();

      // Fist / Hand at wrist
      ctx.fillStyle = isLight ? "rgba(43,126,179,0.32)" : "rgba(104,184,230,0.32)";
      ctx.strokeStyle = isLight ? "#2b7eb3" : "#68b8e6";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(wrist[0], wrist[1], 17, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      // 4. TRICEPS BRACHII (Back of Humerus — stretches when flex=1, bulges when flex=0)
      const triBulge = 12 + (1 - flex) * 16;
      ctx.save();
      // Triceps Tendon
      ctx.strokeStyle = ui.selectedArmHotspot === "tendon" ? gold : tendonCol;
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(132, 86);
      ctx.lineTo(122, 120);
      ctx.moveTo(122, 232);
      ctx.lineTo(triAttach[0], triAttach[1]);
      ctx.stroke();

      // Triceps Belly
      ctx.fillStyle =
        flex < 0.35
          ? isLight ? "rgba(194,75,101,0.75)" : "rgba(224,99,125,0.78)"
          : isLight ? "rgba(44,136,168,0.45)" : "rgba(82,190,214,0.45)";
      ctx.strokeStyle = ui.selectedArmHotspot === "triceps" ? gold : venCol;
      ctx.lineWidth = ui.selectedArmHotspot === "triceps" ? 3 : 1.8;
      ctx.beginPath();
      ctx.moveTo(124, 114);
      ctx.quadraticCurveTo(124 - triBulge, 174, 124, 236);
      ctx.quadraticCurveTo(138, 174, 124, 114);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      // 5. BICEPS BRACHII (Front of Humerus — bulges & glows bright pink-red as flex increases!)
      const biBulge = 16 + flex * 28;
      const biTopY = 112 + flex * 14;
      const biBotY = 232 - flex * 18;
      ctx.save();
      // Biceps Upper & Lower Tendons
      ctx.strokeStyle = ui.selectedArmHotspot === "tendon" ? gold : tendonCol;
      ctx.lineWidth = 5.5;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(158, 80);
      ctx.lineTo(166, biTopY);
      ctx.moveTo(168, biBotY);
      ctx.lineTo(biAttach[0], biAttach[1]);
      ctx.stroke();

      // Biceps Muscle Belly
      const biGrad = ctx.createRadialGradient(174 + biBulge * 0.4, 172, 4, 174, 172, 46);
      biGrad.addColorStop(0, isLight ? "rgba(224,99,125,0.92)" : "rgba(244,114,182,0.92)");
      biGrad.addColorStop(1, isLight ? "rgba(194,75,101,0.55)" : "rgba(224,99,125,0.52)");
      ctx.fillStyle = biGrad;
      ctx.strokeStyle = ui.selectedArmHotspot === "biceps" ? gold : artCol;
      ctx.lineWidth = ui.selectedArmHotspot === "biceps" ? 3.2 : 2;
      if (flex > 0.6 && !isLight) {
        ctx.shadowColor = "#e0637d";
        ctx.shadowBlur = 14;
      }
      ctx.beginPath();
      ctx.moveTo(166, biTopY);
      ctx.quadraticCurveTo(176 + biBulge, (biTopY + biBotY) / 2, 168, biBotY);
      ctx.quadraticCurveTo(154, (biTopY + biBotY) / 2, 166, biTopY);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Muscle fiber striations inside Biceps
      ctx.shadowBlur = 0;
      ctx.strokeStyle = "rgba(255,255,255,0.28)";
      ctx.lineWidth = 1.1;
      for (let i = 1; i <= 3; i++) {
        const off = (i / 4) * biBulge * 0.72;
        ctx.beginPath();
        ctx.moveTo(166, biTopY + 8);
        ctx.quadraticCurveTo(168 + off, (biTopY + biBotY) / 2, 168, biBotY - 8);
        ctx.stroke();
      }
      ctx.restore();

      // 6. Elbow Joint Highlight Ring
      if (ui.selectedArmHotspot === "elbow") {
        ctx.save();
        ctx.strokeStyle = gold;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(elbow[0], elbow[1], 19 + Math.sin(elapsed * 5) * 2, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      // 7. Bottom Contraction Force Bar HUD
      ctx.save();
      ctx.fillStyle = isLight ? "rgba(15,23,42,0.05)" : "rgba(4,10,20,0.75)";
      ctx.strokeStyle = isLight ? "rgba(15,23,42,0.12)" : "rgba(104,184,230,0.22)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(16, 376, 388, 48, 10);
      ctx.fill();
      ctx.stroke();

      ctx.font = "700 10px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = isLight ? "#162235" : "#e6effa";
      ctx.textAlign = "left";
      ctx.fillText(`BICEPS: ${Math.round(flex * 100)}%`, 28, 394);
      ctx.textAlign = "right";
      ctx.fillText(`TRICEPS: ${Math.round((1 - flex) * 100)}%`, 392, 394);

      // Dual opposing bar
      ctx.fillStyle = isLight ? "rgba(30,58,95,0.12)" : "rgba(255,255,255,0.10)";
      ctx.beginPath();
      ctx.roundRect(28, 403, 364, 10, 5);
      ctx.fill();

      ctx.fillStyle = artCol;
      ctx.beginPath();
      ctx.roundRect(28, 403, Math.max(8, 364 * flex), 10, 5);
      ctx.fill();
      void md;
      ctx.restore();
    }

    function drawThreeTypesView(ctx, isLight, md) {
      const sel = ui.selectedTypeHotspot;
      const artCol = isLight ? "#c24b65" : "#e0637d";
      const venCol = isLight ? "#2c88a8" : "#52bed6";
      const gold = isLight ? "#b58428" : "#dfb052";
      const textCol = isLight ? "#162235" : "#e6effa";

      const drawBandBox = (y, id, title, color) => {
        const isSel = sel === id;
        ctx.save();
        ctx.fillStyle = isLight ? "rgba(255,255,255,0.68)" : "rgba(14,24,41,0.72)";
        ctx.strokeStyle = isSel ? color : isLight ? "rgba(30,58,95,0.14)" : "rgba(130,186,230,0.22)";
        ctx.lineWidth = isSel ? 2.4 : 1.2;
        ctx.beginPath();
        ctx.roundRect(18, y, 384, 114, 16);
        ctx.fill();
        ctx.stroke();

        ctx.font = "800 11px 'Plus Jakarta Sans', sans-serif";
        ctx.fillStyle = color;
        ctx.textAlign = "left";
        ctx.fillText(title, 34, y + 22);
        ctx.restore();
      };

      // BAND 1: SKELETAL (STRIATED) MUSCLE — Cylindrical, Striped, Peripheral Nuclei
      drawBandBox(24, "skeletal", md.typeHotspots.skeletal.name, artCol);
      const skSqueeze = Math.sin(elapsed * 2.5) * 4;
      [68, 104].forEach((fy) => {
        ctx.save();
        ctx.fillStyle = isLight ? "rgba(194,75,101,0.24)" : "rgba(224,99,125,0.28)";
        ctx.strokeStyle = artCol;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.roundRect(114 + skSqueeze, fy - 11, 266 - skSqueeze * 2, 22, 8);
        ctx.fill();
        ctx.stroke();

        // Dark & Light Striations
        ctx.strokeStyle = isLight ? "rgba(194,75,101,0.45)" : "rgba(255,228,235,0.35)";
        ctx.lineWidth = 2.2;
        for (let sx = 128 + skSqueeze; sx < 370 - skSqueeze; sx += 14) {
          ctx.beginPath();
          ctx.moveTo(sx, fy - 10);
          ctx.lineTo(sx, fy + 10);
          ctx.stroke();
        }
        // Multiple Peripheral Nuclei
        ctx.fillStyle = textCol;
        [156, 240, 330].forEach((nx) => {
          ctx.beginPath();
          ctx.ellipse(nx, fy - 8, 5, 2.3, 0, 0, Math.PI * 2);
          ctx.fill();
        });
        ctx.restore();
      });

      // BAND 2: SMOOTH (UNSTRIATED) MUSCLE — Spindle-shaped, Central Nucleus, Slow Wave
      drawBandBox(156, "smooth", md.typeHotspots.smooth.name, venCol);
      const waveOffset = Math.sin(elapsed * 1.4);
      [
        [184, 212],
        [278, 212],
        [232, 240],
        [326, 240],
      ].forEach(([cx, cy], idx) => {
        const w = 52 + Math.sin(elapsed * 1.8 + idx) * 4;
        ctx.save();
        ctx.fillStyle = isLight ? "rgba(44,136,168,0.24)" : "rgba(82,190,214,0.26)";
        ctx.strokeStyle = venCol;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(cx - w, cy);
        ctx.quadraticCurveTo(cx, cy - 16, cx + w, cy);
        ctx.quadraticCurveTo(cx, cy + 16, cx - w, cy);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Single Central Oval Nucleus
        ctx.fillStyle = textCol;
        ctx.beginPath();
        ctx.ellipse(cx + waveOffset * 2, cy, 6.5, 3.2, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // BAND 3: CARDIAC MUSCLE — Branched, Intercalated Discs, Rhythmic Heartbeat Pulse
      drawBandBox(288, "cardiac", md.typeHotspots.cardiac.name, gold);
      const beat = Math.pow((Math.sin(elapsed * 4.5) + 1) / 2, 4);
      ctx.save();
      ctx.strokeStyle = gold;
      ctx.lineWidth = 14 + beat * 3;
      ctx.lineCap = "round";
      ctx.globalAlpha = 0.32 + beat * 0.25;
      ctx.beginPath();
      ctx.moveTo(118, 336);
      ctx.lineTo(372, 336);
      ctx.moveTo(118, 372);
      ctx.lineTo(372, 372);
      // Y-Shaped Branches linking fibers
      ctx.moveTo(186, 336);
      ctx.lineTo(222, 372);
      ctx.moveTo(286, 372);
      ctx.lineTo(318, 336);
      ctx.stroke();

      // Intercalated Discs (Dark junction bars)
      ctx.globalAlpha = 0.95;
      ctx.strokeStyle = textCol;
      ctx.lineWidth = 2.6;
      [158, 254, 344].forEach((dx) => {
        ctx.beginPath();
        ctx.moveTo(dx, 329);
        ctx.lineTo(dx, 343);
        ctx.moveTo(dx + 16, 365);
        ctx.lineTo(dx + 16, 379);
        ctx.stroke();
      });

      // Central Nuclei
      ctx.fillStyle = textCol;
      [210, 304].forEach((nx) => {
        ctx.beginPath();
        ctx.ellipse(nx, 336, 5.5, 3, 0, 0, Math.PI * 2);
        ctx.ellipse(nx - 24, 372, 5.5, 3, 0, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();
    }

    function frame(now) {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      elapsed += dt;

      if (ui.autoFlex && ui.view === "arm") {
        ui.flexPct = ((Math.sin(elapsed * 1.45 - Math.PI / 2) + 1) / 2) * 100;
        if (now - lastMetricTick > 100) {
          lastMetricTick = now;
          updateFlexMetrics();
        }
      }

      const isLight = BL.getState().theme === "light";
      const md = getMD();

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform((width / 420) * dpr, 0, 0, (height / 440) * dpr, 0, 0);

      if (ui.view === "arm") {
        drawArmView(ctx, isLight, md);
      } else {
        drawThreeTypesView(ctx, isLight, md);
      }

      requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
    void ro;
  }

  // =========================================================
  // CANVAS 2: 60 FPS SARCOMERE SLIDING FILAMENT (460x300)
  // =========================================================
  function startSarcCanvas() {
    const canvas = document.getElementById("sarc-canvas");
    const box = document.getElementById("sarc-canvas-box");
    if (!canvas || !box) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 460;
    let height = 300;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const r = box.getBoundingClientRect();
      width = Math.max(260, r.width);
      height = Math.max(170, r.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(box);

    let lastTime = performance.now();
    let elapsed = 0;

    function frame(now) {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      if (!ui.sarcPaused) {
        elapsed += dt;
        if (ui.sarcAuto) {
          ui.sarcAmount = (Math.sin(elapsed * 1.6) + 1) / 2;
        } else {
          ui.sarcAmount += (ui.sarcTarget - ui.sarcAmount) * Math.min(1, dt * 5);
        }
      }

      const isLight = BL.getState().theme === "light";
      const md = getMD();
      const sel = ui.selectedSarcPart;
      const c = ui.sarcAmount; // 0 = relaxed, 1 = contracted
      const shift = c * 52;

      const zLeft = 42 + shift;
      const zRight = 418 - shift;
      const accent = isLight ? "#2b7eb3" : "#68b8e6";
      const rose = isLight ? "#c24b65" : "#e0637d";
      const gold = isLight ? "#b58428" : "#fbbf24";
      const textCol = isLight ? "#162235" : "#e6effa";

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform((width / 460) * dpr, 0, 0, (height / 300) * dpr, 0, 0);

      // 1. Z-Lines (Zig-zag vertical borders moving closer on contraction)
      ctx.save();
      ctx.strokeStyle = sel === "zline" ? gold : isLight ? "#334155" : "#cbd5e1";
      ctx.lineWidth = sel === "zline" ? 5 : 3.5;
      [zLeft, zRight].forEach((zx) => {
        ctx.beginPath();
        for (let y = 42; y <= 220; y += 16) {
          const jag = (y / 16) % 2 === 0 ? -5 : 5;
          if (y === 42) ctx.moveTo(zx + jag, y);
          else ctx.lineTo(zx + jag, y);
        }
        ctx.stroke();
      });
      ctx.restore();

      // 2. Thin ACTIN Filaments (Anchored to Z-Lines, sliding inward!)
      const actinYs = [62, 108, 154, 200];
      const actinLen = 148;
      ctx.save();
      ctx.strokeStyle = sel === "actin" ? gold : accent;
      ctx.lineWidth = sel === "actin" ? 5 : 3.8;
      ctx.lineCap = "round";
      actinYs.forEach((ay) => {
        // Left Actin
        ctx.beginPath();
        ctx.moveTo(zLeft, ay);
        ctx.lineTo(zLeft + actinLen, ay);
        ctx.stroke();
        // Right Actin
        ctx.beginPath();
        ctx.moveTo(zRight, ay);
        ctx.lineTo(zRight - actinLen, ay);
        ctx.stroke();
      });
      ctx.restore();

      // 3. Thick MYOSIN Filaments (Centered, with hinged Cross-Bridge Heads!)
      const myosinYs = [85, 131, 177];
      ctx.save();
      ctx.strokeStyle = sel === "myosin" ? gold : rose;
      ctx.lineWidth = sel === "myosin" ? 9.5 : 8;
      ctx.lineCap = "round";
      myosinYs.forEach((my) => {
        ctx.beginPath();
        ctx.moveTo(130, my);
        ctx.lineTo(330, my);
        ctx.stroke();

        // Cross-bridge heads ratcheting toward Actin
        ctx.strokeStyle = sel === "myosin" ? "#fef08a" : rose;
        ctx.lineWidth = 2.4;
        for (let hx = 146; hx <= 314; hx += 24) {
          if (hx > 212 && hx < 248) continue; // Bare M-zone in center
          const dir = hx < 230 ? -1 : 1;
          const tilt = dir * (6 + c * 6);
          ctx.beginPath();
          ctx.moveTo(hx, my - 4);
          ctx.lineTo(hx + tilt, my - 16);
          ctx.moveTo(hx, my + 4);
          ctx.lineTo(hx + tilt, my + 16);
          ctx.stroke();
        }
      });
      ctx.restore();

      // 4. Glowing ATP Energy Sparks when Contracting
      if (c > 0.35 || sel === "atp") {
        ctx.save();
        for (let i = 0; i < 6; i++) {
          const sx = 152 + i * 32;
          const sy = 85 + (i % 3) * 46 + Math.sin(elapsed * 8 + i) * 6;
          ctx.fillStyle = gold;
          ctx.globalAlpha = 0.5 + Math.sin(elapsed * 10 + i * 2) * 0.45;
          ctx.beginPath();
          ctx.arc(sx, sy, 4.2, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      // Labels for Z-Line
      ctx.font = "800 9.5px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = textCol;
      ctx.textAlign = "center";
      ctx.fillText("Z-LINE", zLeft, 30);
      ctx.fillText("Z-LINE", zRight, 30);

      // Bottom HUD
      ctx.save();
      ctx.fillStyle = isLight ? "rgba(15,23,42,0.05)" : "rgba(4,10,20,0.78)";
      ctx.strokeStyle = isLight ? "rgba(15,23,42,0.12)" : "rgba(104,184,230,0.22)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(14, 248, 432, 38, 9);
      ctx.fill();
      ctx.stroke();

      ctx.font = "700 10px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = textCol;
      ctx.textAlign = "center";
      ctx.fillText(
        c > 0.5 ? md.sarcSec.sarcHudContract : md.sarcSec.sarcHudRelax,
        230,
        271
      );
      ctx.restore();

      requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
    void ro;
  }

  // =========================================================
  // CANVAS 3: 60 FPS AEROBIC vs LACTIC ACID CRAMPS (460x300)
  // =========================================================
  function startFatigueCanvas() {
    const canvas = document.getElementById("fatigue-canvas");
    const box = document.getElementById("fatigue-canvas-box");
    if (!canvas || !box) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 460;
    let height = 300;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const r = box.getBoundingClientRect();
      width = Math.max(260, r.width);
      height = Math.max(170, r.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(box);

    let lastTime = performance.now();
    let elapsed = 0;

    function frame(now) {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      if (!ui.sarcPaused) elapsed += dt;

      const isLight = BL.getState().theme === "light";
      const md = getMD();
      const isSprint = ui.sprintMode;
      const textCol = isLight ? "#162235" : "#e6effa";

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform((width / 460) * dpr, 0, 0, (height / 300) * dpr, 0, 0);

      // Muscle Cell Fiber Background (Quivers slightly during Lactic Acid Cramp!)
      const jitterX = isSprint ? Math.sin(elapsed * 38) * 2.2 : 0;
      ctx.save();
      ctx.translate(jitterX, 0);
      ctx.fillStyle = isSprint
        ? isLight ? "rgba(224,99,125,0.18)" : "rgba(180,45,75,0.28)"
        : isLight ? "rgba(43,126,179,0.14)" : "rgba(28,58,88,0.42)";
      ctx.strokeStyle = isSprint ? "#e0637d" : "#68b8e6";
      ctx.lineWidth = 2.4;
      ctx.beginPath();
      ctx.roundRect(24, 42, 412, 186, 22);
      ctx.fill();
      ctx.stroke();

      // Mitochondria Powerhouse in Center
      ctx.fillStyle = isSprint ? "rgba(223,176,82,0.28)" : "rgba(86,201,155,0.28)";
      ctx.strokeStyle = isSprint ? "#dfb052" : "#56c99b";
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.ellipse(230, 134, 58, 32, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.font = "800 10px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = textCol;
      ctx.textAlign = "center";
      ctx.fillText(isSprint ? "LOW O₂ • 2 ATP" : "38 ATP POWER", 230, 138);

      // Left Input: Glucose + O2 molecules flowing in
      const o2Count = isSprint ? 2 : 7;
      for (let i = 0; i < o2Count; i++) {
        const t = (elapsed * 0.45 + i / o2Count) % 1;
        const ox = 36 + t * 140;
        const oy = 74 + (i % 4) * 38;
        ctx.fillStyle = "#7dd3fc";
        ctx.beginPath();
        ctx.arc(ox, oy, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.font = "800 7.5px 'Plus Jakarta Sans', sans-serif";
        ctx.fillStyle = "#040811";
        ctx.fillText("O₂", ox, oy + 2.5);
      }

      // Right Output: Clean ATP bursts (Jog) OR Spiky Lactic Acid Crystals (Sprint Cramp!)
      if (!isSprint) {
        for (let i = 0; i < 8; i++) {
          const t = (elapsed * 0.5 + i / 8) % 1;
          const ax = 290 + t * 130;
          const ay = 68 + (i % 4) * 42;
          ctx.fillStyle = "#56c99b";
          ctx.beginPath();
          ctx.arc(ax, ay, 6.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.font = "800 6.5px 'Plus Jakarta Sans', sans-serif";
          ctx.fillStyle = "#040811";
          ctx.fillText("ATP", ax, ay + 2.5);
        }
      } else {
        for (let i = 0; i < 9; i++) {
          const t = (elapsed * 0.35 + i / 9) % 1;
          const lx = 292 + t * 124;
          const ly = 66 + (i % 3) * 58 + Math.sin(elapsed * 6 + i) * 6;
          // Spiky Lactic Acid Crystal
          ctx.fillStyle = "#dfb052";
          ctx.beginPath();
          for (let s = 0; s < 8; s++) {
            const ang = (s / 8) * Math.PI * 2;
            const r = s % 2 === 0 ? 8.5 : 4;
            const px = lx + Math.cos(ang) * r;
            const py = ly + Math.sin(ang) * r;
            if (s === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();
          ctx.fill();
        }
        ctx.font = "800 10.5px 'Plus Jakarta Sans', sans-serif";
        ctx.fillStyle = "#dfb052";
        ctx.fillText("⚠ LACTIC ACID BUILDUP", 354, 214);
      }
      ctx.restore();

      // Bottom HUD
      ctx.save();
      ctx.fillStyle = isLight ? "rgba(15,23,42,0.05)" : "rgba(4,10,20,0.78)";
      ctx.strokeStyle = isLight ? "rgba(15,23,42,0.12)" : "rgba(104,184,230,0.22)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(14, 248, 432, 38, 9);
      ctx.fill();
      ctx.stroke();

      ctx.font = "700 10px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = textCol;
      ctx.textAlign = "center";
      ctx.fillText(
        isSprint ? md.sarcSec.fatigueHudSprint : md.sarcSec.fatigueHudJog,
        230,
        271
      );
      ctx.restore();

      requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
    void ro;
  }

  // =========================================================
  // BOOTSTRAP & EVENT WIRING
  // =========================================================
  document.addEventListener("DOMContentLoaded", () => {
    const btnArm = document.getElementById("btn-view-arm");
    const btnTypes = document.getElementById("btn-view-types");
    if (btnArm) {
      btnArm.addEventListener("click", () => {
        ui.view = "arm";
        syncMuscUI();
      });
    }
    if (btnTypes) {
      btnTypes.addEventListener("click", () => {
        ui.view = "types";
        syncMuscUI();
      });
    }

    const btnAuto = document.getElementById("btn-musc-auto");
    if (btnAuto) {
      btnAuto.addEventListener("click", () => {
        ui.autoFlex = !ui.autoFlex;
        syncMuscUI();
      });
    }

    const btnPins = document.getElementById("btn-musc-pins");
    if (btnPins) {
      btnPins.addEventListener("click", () => {
        ui.showPins = !ui.showPins;
        syncMuscUI();
      });
    }

    const slider = document.getElementById("flex-slider");
    if (slider) {
      slider.addEventListener("input", (e) => {
        ui.autoFlex = false;
        ui.flexPct = Math.max(0, Math.min(100, Number(e.target.value) || 0));
        syncMuscUI();
      });
    }

    document.querySelectorAll("[data-flex]").forEach((b) => {
      b.addEventListener("click", () => {
        ui.autoFlex = false;
        ui.view = "arm";
        ui.flexPct = Number(b.getAttribute("data-flex")) || 0;
        syncMuscUI();
      });
    });

    document.querySelectorAll("#musc-reader-panel .tab-btn").forEach((b) => {
      b.addEventListener("click", () => {
        ui.muscTab = b.getAttribute("data-musc-tab");
        renderMuscReader();
      });
    });

    // Section 2: 3D Flip Card Wiring
    const toggleFlip = (force) => {
      ui.isFlipped = typeof force === "boolean" ? force : !ui.isFlipped;
      syncMuscUI();
    };
    const btnFlipMain = document.getElementById("btn-musc-flip-main");
    const btnFlipFat = document.getElementById("btn-flip-to-fatigue");
    const btnFlipSarc = document.getElementById("btn-flip-to-sarc");
    if (btnFlipMain) btnFlipMain.addEventListener("click", () => toggleFlip());
    if (btnFlipFat) btnFlipFat.addEventListener("click", () => toggleFlip(true));
    if (btnFlipSarc) btnFlipSarc.addEventListener("click", () => toggleFlip(false));

    const btnSPause = document.getElementById("btn-sarc-pause");
    if (btnSPause) {
      btnSPause.addEventListener("click", () => {
        ui.sarcPaused = !ui.sarcPaused;
        syncMuscUI();
      });
    }

    const btnContract = document.getElementById("btn-contract-sarc");
    if (btnContract) {
      btnContract.addEventListener("click", () => {
        ui.sarcPaused = false;
        ui.sarcAuto = false;
        ui.sarcTarget = ui.sarcTarget > 0.5 ? 0 : 1;
      });
    }

    const btnSprint = document.getElementById("btn-toggle-sprint");
    if (btnSprint) {
      btnSprint.addEventListener("click", () => {
        ui.sarcPaused = false;
        ui.sprintMode = !ui.sprintMode;
        ui.selectedFatigueStep = ui.sprintMode ? "lactic" : "aerobic";
        syncMuscUI();
      });
    }

    document.querySelectorAll("#sf-reader-panel .tab-btn").forEach((b) => {
      b.addEventListener("click", () => {
        ui.sfTab = b.getAttribute("data-sf-tab");
        renderSFReader();
      });
    });

    syncMuscUI();
    BL.subscribe(syncMuscUI);

    startMuscCanvas();
    startSarcCanvas();
    startFatigueCanvas();
  });
})();