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

  // Dedicated organ pages — clicking any of these opens its full deep-dive webpage
  const ORGAN_PAGES = {
    circulatory: "circulatory.html",
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
        diveHint: "Tap the glowing heart to open the 4-chamber live lab page",
        openDeepDive: "Open Heart & Circulation Page",
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
          shortDesc: "Heart, arteries, veins & real-time 60 FPS blood flow",
        },
        respiratory: {
          name: "Respiratory System",
          en: "Respiratory System",
          shortDesc: "Lungs, trachea, diaphragm & real-time breathing rhythm",
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
        diveHint: "4-कक्षीय लाइव लैब पेज खोलने के लिए चमकते हृदय पर टैप करें",
        openDeepDive: "हृदय और परिसंचरण पेज खोलें",
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
          shortDesc: "हृदय, धमनियाँ, शिराएँ और लाइव 60 FPS रक्त प्रवाह",
        },
        respiratory: {
          name: "श्वसन तंत्र",
          en: "Respiratory System",
          shortDesc: "फेफड़े, श्वासनली, डायाफ्राम और श्वास लय",
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
              options: ["महाधमनी", "फुफ्फुसीय धमनी", "फुफ्ফुसीय शिरा", "कोरोनरी धमनी"],
              answer: 1,
              explain: "फुफ्फुसीय धमनी ऑक्सीजनरहित रक्त को गैस विनिमय के लिए फेफड़ों में ले जाती है।",
            },
            {
              q: "हृदय का प्राकृतिक पेसमेकर कौन-सा है?",
              options: ["माइट्रल वाल्व", "SA नोड", "ऊर्ध्व महाशिरा", "सेপ्टम"],
              answer: 1,
              explain: "SA नोड हृदय की स्वाभाविक विद्युत लय शुरू करता है।",
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
        diveHint: "৪-প্রকোষ্ঠের লাইভ ল্যাব পেজে যেতে জ্বলন্ত হৃৎপিণ্ডে ট্যাপ করুন",
        openDeepDive: "হৃৎপিণ্ড ও সংবহন পেজ খুলুন",
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
          shortDesc: "হৃৎপিণ্ড, ধমনী, শিরা ও লাইভ 60 FPS রক্ত সঞ্চালন",
        },
        respiratory: {
          name: "শ্বসন তন্ত্র",
          en: "Respiratory System",
          shortDesc: "ফুসফুস, শ্বাসনালী, মধ্যচ্ছদা ও শ্বাস-প্রশ্বাসের ছন্দ",
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