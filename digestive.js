(function () {
  const BL = window.BioLume;
  if (!BL) return;

  // =========================================================
  // TRILINGUAL CLASS 9–10 DIGESTIVE SYSTEM DICTIONARY (EN/HI/BN)
  // =========================================================
  const DIG_DICT = {
    en: {
      chapterBadge: "Chapter 06 • Class 9–10 Lab",
      title: "Human Digestive System — Live Lab",
      subtitle:
        "Follow food along the alimentary canal with live pH changes, or switch to the Enzyme Chemistry Lab",
      views: {
        tract: "Digestive Tract",
        enzymes: "Enzyme & pH Lab",
      },
      toggles: {
        autoOn: "Auto Digest: ON",
        autoOff: "Auto Digest: OFF",
        pins: "Hotspot Pins",
        pause: "Pause",
        play: "Resume",
      },
      metrics: {
        ph: "Local pH",
        organ: "Food Location",
        enzyme: "Active Juice",
        prog: "Digestion",
      },
      journeyControl: "Meal Journey Position",
      presets: {
        mouth: "Mouth (pH 6.8)",
        stomach: "Stomach (pH 2.0)",
        small: "Small Int. (pH 8.0)",
        large: "Large Int. (Water)",
      },
      tabs: {
        inspect: "Organ Inspector",
        lesson: "Class 9–10 Lesson",
        quiz: "Quick Check",
      },
      selectPrompt:
        "Tap any glowing pin on the digestive tract (or switch to the Enzyme & pH Lab) to inspect glands, juices, and chemical reactions.",
      journeyStages: [
        { min: 0, max: 14, organ: "Mouth", ph: "6.8", juice: "Salivary Amylase" },
        { min: 14, max: 26, organ: "Esophagus", ph: "6.8", juice: "Peristalsis Wave" },
        { min: 26, max: 48, organ: "Stomach", ph: "2.0", juice: "HCl + Pepsin" },
        { min: 48, max: 82, organ: "Small Intestine", ph: "8.0", juice: "Bile + Pancreatic" },
        { min: 82, max: 101, organ: "Large Intestine", ph: "7.0", juice: "Water Absorption" },
      ],
      tractHotspots: {
        mouth: {
          name: "Mouth & Salivary Glands",
          en: "Buccal Cavity • pH 6.8",
          role: "Ingestion & Starch Digestion Begins",
          summary:
            "Teeth physically crush food into a soft bolus while the tongue mixes it with saliva. Saliva contains the enzyme Salivary Amylase (Ptyalin), which begins breaking complex Starch into sweet Maltose sugar right in your mouth.",
          keyFact: "Chew a piece of plain bread for 30 seconds and it tastes sweet—that is Salivary Amylase turning starch into sugar!",
        },
        esophagus: {
          name: "Esophagus (Food Pipe)",
          en: "Peristalsis Tube",
          role: "Rhythmic Muscular Transport",
          summary:
            "A ~25 cm muscular tube carrying swallowed food from the pharynx down to the stomach. No digestive enzymes are secreted here; instead, wave-like contractions called Peristalsis push food forward.",
          keyFact: "Peristalsis is so strong that food still reaches your stomach even if you swallow while upside down!",
        },
        stomach: {
          name: "Stomach (Gastric Glands)",
          en: "Gastric Juice • pH 1.5–2.0",
          role: "Acidic Churning & Protein Digestion",
          summary:
            "A J-shaped muscular sac that churns food with Gastric Juice containing 3 key substances: (1) HCl (kills germs & creates acidic medium), (2) Pepsin (digests proteins into peptones), and (3) Mucus (shields the stomach wall from self-digestion).",
          keyFact: "Pepsin ONLY works in an acidic medium—without HCl, protein digestion in the stomach stalls.",
        },
        liver: {
          name: "Liver & Gallbladder",
          en: "Largest Gland • Bile Juice",
          role: "Alkaline pH + Fat Emulsification",
          summary:
            "The Liver is the largest gland in the human body and produces greenish-yellow Bile Juice, stored and concentrated in the Gallbladder. Bile contains NO enzymes, but neutralizes stomach acid and emulsifies large fat globules into tiny droplets.",
          keyFact: "Bile turns acidic chyme from the stomach alkaline (pH ~8) so pancreatic enzymes can activate.",
        },
        pancreas: {
          name: "Pancreas",
          en: "Master Enzyme Gland",
          role: "Trypsin • Lipase • Pancreatic Amylase",
          summary:
            "A leaf-shaped gland tucked below the stomach that secretes Pancreatic Juice into the duodenum. It carries three powerhouse enzymes: Pancreatic Amylase (starch), Trypsin (proteins), and Lipase (emulsified fats).",
          keyFact: "The Pancreas is a dual (heterocrine) gland—it makes digestive juices AND hormones like Insulin.",
        },
        smallInt: {
          name: "Small Intestine",
          en: "Site of Complete Digestion & Absorption",
          role: "~6 Metres Long • Villi Absorption",
          summary:
            "The longest, tightly coiled part of the alimentary canal where digestion finishes completely: Carbohydrates → Glucose, Proteins → Amino Acids, Fats → Fatty Acids + Glycerol. Millions of finger-like Villi absorb nutrients into the blood.",
          keyFact: "Herbivores (like cows) have a longer small intestine than carnivores (like tigers) because plant cellulose takes longer to digest.",
        },
        largeInt: {
          name: "Large Intestine (Colon)",
          en: "Water & Mineral Recovery",
          role: "Absorbs Excess Water • Egestion",
          summary:
            "Wider but shorter (~1.5 m) tube framing the small intestine. Unabsorbed food enters here so its inner wall can reabsorb remaining water and salts, forming semi-solid waste expelled via the Rectum and Anus.",
          keyFact: "Friendly gut bacteria inside the colon help synthesize Vitamin K and B-complex vitamins.",
        },
      },
      enzymeHotspots: {
        carbs: {
          name: "1. Carbohydrate Digestion",
          en: "Starch → Maltose → Glucose",
          role: "Amylase (Mouth & Small Intestine)",
          summary:
            "Starts in the Mouth (Salivary Amylase, pH 6.8) and finishes in the Small Intestine (Pancreatic Amylase & Intestinal Maltase, pH 8.0), turning huge starch chains into simple absorbable Glucose.",
          keyFact: "End product absorbed into blood capillaries: Glucose (primary cellular fuel for ATP).",
        },
        proteins: {
          name: "2. Protein Digestion",
          en: "Proteins → Peptones → Amino Acids",
          role: "Pepsin (pH 2) & Trypsin (pH 8)",
          summary:
            "Starts in the Stomach where acidic Pepsin cuts long protein chains into smaller peptides. Continues in the Small Intestine where alkaline Trypsin and Peptidases break them completely into Amino Acids.",
          keyFact: "End product absorbed into blood capillaries: Amino Acids (used to build muscles & enzymes).",
        },
        fats: {
          name: "3. Fat (Lipid) Digestion",
          en: "Fats → Emulsified → Fatty Acids + Glycerol",
          role: "Bile Salts + Lipase (Small Intestine)",
          summary:
            "Occurs almost entirely in the Small Intestine. First, Liver Bile physically breaks large fat drops into tiny droplets (emulsification). Then Pancreatic & Intestinal Lipase chemically split them into Fatty Acids and Glycerol.",
          keyFact: "End products are absorbed into central Lacteals (lymph vessels) inside the villi.",
        },
      },
      lesson: {
        heading: "Class 9–10 Lesson Plan: Human Digestive System",
        sections: [
          {
            title: "1. The 5 Steps of Holozoic Nutrition",
            html: `<p>1. <strong>Ingestion:</strong> Taking food into the mouth.<br/>
            2. <strong>Digestion:</strong> Breaking complex insoluble food into simple soluble molecules.<br/>
            3. <strong>Absorption:</strong> Passing digested nutrients from the Small Intestine (Villi) into blood.<br/>
            4. <strong>Assimilation:</strong> Using absorbed nutrients inside cells for energy, growth, and repair.<br/>
            5. <strong>Egestion:</strong> Removing undigested waste via the anus.</p>`,
          },
          {
            title: "2. Master Board-Exam Enzyme & Juice Table",
            html: `<div class="detail-fact" style="margin-top:4px">• <strong>Saliva (Mouth, pH 6.8):</strong> Salivary Amylase → Starch → Maltose.<br/>
            • <strong>Gastric Juice (Stomach, pH 2.0):</strong> HCl (kills germs, activates Pepsin) + Pepsin (Proteins → Peptones) + Mucus (protects wall).<br/>
            • <strong>Bile (Liver, pH 8.0):</strong> No enzymes; neutralizes acid &amp; emulsifies fats.<br/>
            • <strong>Pancreatic Juice (Small Int., pH 8.0):</strong> Amylase (Starch), Trypsin (Proteins), Lipase (Fats).<br/>
            • <strong>Intestinal Juice:</strong> Completes breakdown into <strong>Glucose, Amino Acids, Fatty Acids &amp; Glycerol</strong>.</div>`,
          },
          {
            title: "3. Why Doesn't Stomach Acid Digest the Stomach Itself?",
            html: `<p>The inner lining of the stomach secretes a thick alkaline layer of <strong>Mucus</strong> that forms a protective shield against corrosive HCl and Pepsin. If this mucus layer thins, painful <em>peptic ulcers</em> can develop.</p>`,
          },
        ],
      },
      quiz: {
        title: "Digestive System Quick Check",
        correctMsg: "Correct! Clear biochemical concept.",
        wrongMsg: "Not quite — review the explanation below.",
        nextBtn: "Next Question",
        restartBtn: "Restart Quiz",
        scoreLabel: "Score",
        questions: [
          {
            q: "Where does the chemical digestion of Starch first begin in the human alimentary canal?",
            options: ["Stomach", "Mouth (Buccal Cavity)", "Large Intestine", "Esophagus"],
            answer: 1,
            explain: "Salivary Amylase in the mouth starts converting complex starch into maltose sugar as soon as you chew.",
          },
          {
            q: "What is the role of Hydrochloric Acid (HCl) in the stomach?",
            options: [
              "To digest fats directly",
              "To kill germs and create an acidic medium for Pepsin to act",
              "To absorb water",
              "To neutralize bile",
            ],
            answer: 1,
            explain: "HCl destroys ingested bacteria and lowers stomach pH (~2.0) so the protein-digesting enzyme Pepsin can work.",
          },
          {
            q: "Which organ is the site of COMPLETE digestion and primary absorption of nutrients?",
            options: ["Stomach", "Large Intestine", "Small Intestine", "Liver"],
            answer: 2,
            explain: "The Small Intestine completes breakdown of carbs, proteins, and fats and absorbs them via millions of Villi.",
          },
          {
            q: "Which gland secretes Trypsin, Lipase, and Pancreatic Amylase into the small intestine?",
            options: ["Salivary Gland", "Pancreas", "Thyroid", "Gallbladder"],
            answer: 1,
            explain: "The Pancreas secretes pancreatic juice containing Trypsin (protein), Lipase (fat), and Amylase (starch).",
          },
          {
            q: "What are the final absorbable end-products of Carbohydrates, Proteins, and Fats respectively?",
            options: [
              "Glucose, Amino Acids, and Fatty Acids + Glycerol",
              "Starch, Peptones, and Bile",
              "Urea, Oxygen, and Water",
              "Maltose, HCl, and Mucus",
            ],
            answer: 0,
            explain: "Digestion converts Carbohydrates → Glucose, Proteins → Amino Acids, and Fats → Fatty Acids + Glycerol.",
          },
        ],
      },

      // =========================================================
      // SECTION 2: 3D FLIPPABLE VILLI <-> BILE EMULSIFICATION
      // =========================================================
      villiSec: {
        title: "Intestinal Villi & Bile Action — 3D Flippable Lab",
        subtitle:
          "Front side: Finger-like Villi absorbing Glucose & Amino Acids into blood • Flip the card to see Bile Fat Emulsification",
        flipMain: "Flip Card: Villi Absorption ↔ Bile Action",
        frontBadge: "FRONT • SMALL INTESTINE VILLI (ABSORPTION)",
        flipToBile: "Flip to Bile Fat Emulsification",
        absorbBtn: "Absorb Digested Nutrients (Boost Wave!)",
        villiPrompt:
          "Tap any part of an intestinal villus below to see how digested food enters your bloodstream:",
        backBadge: "BACK • LIVER BILE & FAT EMULSIFICATION",
        flipToVilli: "Flip Back to Intestinal Villi",
        bileBtn: "Release Bile Salts (Emulsify Fat Globule!)",
        bilePrompt:
          "See why Bile has NO enzymes, yet fats cannot be digested efficiently without it:",
        lessonTab: "Villi & Bile Notes (Class 9–10)",
        quizTab: "Villi & Bile Quiz",
        analogyLabel: "Easy Analogy",
        villiHud: "MILLIONS OF VILLI: Massive Surface Area Absorbing Nutrients Into Blood!",
        bileHud: [
          "STEP 1: Large Fat Globule arrives from stomach (too big for Lipase!)",
          "STEP 2: Liver Bile Salts coat & break up the giant fat globule",
          "STEP 3: Emulsification creates tiny fat droplets (huge surface area!)",
          "STEP 4: Pancreatic Lipase splits droplets → Fatty Acids + Glycerol!",
        ],
      },
      villiParts: {
        folds: {
          name: "Finger-like Villi",
          en: "Surface Area Multiplier",
          role: "Millions of Projections",
          analogy: "Like a plush bath towel—its thousands of tiny loops soak up way more water than a flat sheet!",
          summary:
            "Millions of microscopic finger-like projections lining the inner wall of the Small Intestine, increasing absorption surface area enormously so nutrients enter the blood rapidly.",
        },
        epithelium: {
          name: "1-Cell Thin Wall",
          en: "Simple Epithelium",
          role: "Rapid Diffusion Barrier",
          analogy: "Like a paper-thin tea bag letting flavor pass through instantly without slowing down.",
          summary:
            "Every villus wall is only ONE cell thick (topped with tiny Microvilli), allowing Glucose and Amino Acids to cross into capillaries effortlessly.",
        },
        capillaries: {
          name: "Blood Capillaries",
          en: "Glucose & Amino Acid Highway",
          role: "Rich Capillary Network",
          analogy: "Like delivery trucks parked right behind the wall, whisking Glucose and Amino Acids straight to the Liver and body cells.",
          summary:
            "A dense web of blood capillaries sits directly beneath the villus lining, absorbing Glucose, Amino Acids, water, and minerals into the bloodstream.",
        },
        lacteal: {
          name: "Central Lacteal",
          en: "Fat Absorption Vessel",
          role: "Lymphatic Capillary",
          analogy: "A dedicated freight lane inside every villus built specifically to transport digested fats.",
          summary:
            "A pale central lymph vessel running up the core of each villus that absorbs digested Fatty Acids and Glycerol.",
        },
      },
      bileSteps: {
        step1: {
          name: "1. Large Fat Globule",
          en: "Low Surface Area",
          role: "Lipase Cannot Reach Inside",
          analogy: "Like trying to dissolve a giant solid block of ice—water can only touch the outer skin.",
          summary:
            "Fats from food clump together into large oily globules inside the watery intestine. Pancreatic Lipase can only work on the outer surface, making digestion painfully slow.",
        },
        step2: {
          name: "2. Bile Salts Arrive",
          en: "Secreted by Liver",
          role: "Biological Dish Soap",
          analogy: "Works exactly like dishwashing soap breaking up greasy oil on a dinner plate!",
          summary:
            "Greenish-yellow Bile (made by the Liver, stored in the Gallbladder) pours into the duodenum. Its Bile Salts surround and cling to the large fat globules.",
        },
        step3: {
          name: "3. Fat Emulsification",
          en: "Physical Breakdown",
          role: "Tiny Droplets = Huge Surface Area",
          analogy: "Crushing that giant block of ice into snow instantly exposes every crystal to melt fast!",
          summary:
            "Bile Salts physically shatter each big fat globule into thousands of microscopic fat droplets (Emulsification), multiplying the surface area for enzymes.",
        },
        step4: {
          name: "4. Lipase Digestion",
          en: "Chemical Breakdown",
          role: "Fatty Acids + Glycerol",
          analogy: "With the snow spread out, Lipase scissors rapidly snip every droplet into tiny absorbable pieces.",
          summary:
            "Pancreatic Lipase rapidly digests the tiny emulsified droplets chemically into Fatty Acids and Glycerol, ready to enter the Villi's central Lacteal.",
        },
      },
      vbLesson: {
        heading: "Class 9–10 Master Notes: Villi & Bile Emulsification",
        sections: [
          {
            title: "1. How Is the Small Intestine Designed to Absorb Digested Food?",
            html: `<p>This is a classic 3-mark board exam question! Answer with 3 crisp points:<br/>
            1. Inner wall has millions of finger-like <strong>Villi</strong> that vastly increase surface area.<br/>
            2. Each villus has a <strong>one-cell-thick</strong> moist wall for rapid diffusion.<br/>
            3. Richly supplied with <strong>blood capillaries</strong> (absorb Glucose &amp; Amino Acids) and a central <strong>Lacteal</strong> (absorbs Fatty Acids &amp; Glycerol).</p>`,
          },
          {
            title: "2. Two Crucial Roles of Bile Juice (Even Though It Has NO Enzymes!)",
            html: `<p>1. <strong>Alkaline Medium:</strong> Neutralizes acidic food coming from the stomach so pancreatic enzymes (Trypsin, Lipase) can work.<br/>
            2. <strong>Emulsification of Fats:</strong> Breaks large fat globules into tiny droplets, increasing surface area for Lipase action.</p>`,
          },
        ],
      },
      vbQuiz: {
        title: "Villi & Bile Quiz",
        correctMsg: "Spot on! Board-exam ready.",
        wrongMsg: "Not quite — read the explanation below.",
        nextBtn: "Next Question",
        restartBtn: "Restart Quiz",
        scoreLabel: "Score",
        questions: [
          {
            q: "What is the primary purpose of the millions of finger-like Villi inside the Small Intestine?",
            options: [
              "To secrete Hydrochloric Acid",
              "To vastly increase surface area for absorbing digested nutrients",
              "To crush solid food like teeth",
              "To pump blood",
            ],
            answer: 1,
            explain: "Villi multiply the inner surface area of the small intestine and house blood capillaries & lacteals for rapid absorption.",
          },
          {
            q: "Which digestive juice contains NO enzymes, yet is vital for fat digestion?",
            options: ["Saliva", "Gastric Juice", "Bile Juice", "Pancreatic Juice"],
            answer: 2,
            explain: "Bile Juice (produced by the Liver) has no digestive enzymes, but emulsifies fats and makes the chyme alkaline.",
          },
          {
            q: "Breaking down large fat globules into tiny droplets by Bile Salts is called:",
            options: ["Peristalsis", "Emulsification", "Fermentation", "Transpiration"],
            answer: 1,
            explain: "Emulsification physically splits big fat globules into fine droplets so Lipase can act rapidly.",
          },
          {
            q: "Inside each intestinal villus, which vessel specifically absorbs digested Fatty Acids and Glycerol?",
            options: ["Aorta", "Central Lacteal (Lymph Vessel)", "Trachea", "Ureter"],
            answer: 1,
            explain: "Blood capillaries absorb Glucose and Amino Acids, while the central Lacteal absorbs digested fats.",
          },
        ],
      },
    },

    hi: {
      chapterBadge: "अध्याय 06 • कक्षा 9–10 लैब",
      title: "मानव पाचन तंत्र — लाइव लैब",
      subtitle:
        "लाइव pH परिवर्तन के साथ आहारनाल में भोजन की यात्रा देखें, या एंजाइम रसायन लैब खोलें",
      views: {
        tract: "पाचन मार्ग (आहारनाल)",
        enzymes: "एंजाइम व pH लैब",
      },
      toggles: {
        autoOn: "ऑटो पाचन: चालू",
        autoOff: "ऑटो पाचन: बंद",
        pins: "हॉटस्पॉट पिन",
        pause: "रोकें",
        play: "चलाएँ",
      },
      metrics: {
        ph: "स्थानीय pH",
        organ: "भोजन का स्थान",
        enzyme: "सक्रिय रस",
        prog: "पाचन प्रगति",
      },
      journeyControl: "भोजन यात्रा की स्थिति",
      presets: {
        mouth: "मुख (pH 6.8)",
        stomach: "आमाशय (pH 2.0)",
        small: "छोटी आँत (pH 8.0)",
        large: "बड़ी आँत (जल)",
      },
      tabs: {
        inspect: "अंग निरीक्षक",
        lesson: "कक्षा 9–10 पाठ",
        quiz: "त्वरित जाँच",
      },
      selectPrompt:
        "ग्रंथियों, पाचक रसों और अभिक्रियाओं को समझने के लिए किसी भी पिन पर टैप करें (या एंजाइम लैब देखें)।",
      journeyStages: [
        { min: 0, max: 14, organ: "मुखगुहा", ph: "6.8", juice: "लार एमाइलेज" },
        { min: 14, max: 26, organ: "ग्रसिका", ph: "6.8", juice: "क्रमाकुंचन गति" },
        { min: 26, max: 48, organ: "आमाशय", ph: "2.0", juice: "HCl + पेप्सिन" },
        { min: 48, max: 82, organ: "छोटी आँत", ph: "8.0", juice: "पित्त + अग्न्याशय रस" },
        { min: 82, max: 101, organ: "बड़ी आँत", ph: "7.0", juice: "जल अवशोषण" },
      ],
      tractHotspots: {
        mouth: {
          name: "मुख व लार ग्रंथियाँ",
          en: "Mouth • pH 6.8",
          role: "अंतर्ग्रहण व स्टार्च पाचन की शुरुआत",
          summary:
            "दाँत भोजन को चबाते हैं और लार में मौजूद लार एमाइलेज (Salivary Amylase) जटिल स्टार्च (मंड) को मीठी शर्करा (माल्टोज़) में बदलना शुरू कर देता है।",
          keyFact: "सादी रोटी को 30 सेकंड चबाने पर मीठा स्वाद लार एमाइलेज के कारण ही आता है!",
        },
        esophagus: {
          name: "ग्रसिका (भोजन नली)",
          en: "Esophagus",
          role: "क्रमाकुंचन (Peristalsis) परिवहन",
          summary:
            "लगभग 25 सेमी लंबी पेशीय नलिका जो क्रमाकुंचन (Peristalsis) की लयबद्ध तरंगों से भोजन को आमाशय तक पहुँचाती है। यहाँ कोई पाचक एंजाइम नहीं होता।",
          keyFact: "क्रमाकुंचन गति के कारण भोजन हमेशा आमाशय की ओर ही बढ़ता है।",
        },
        stomach: {
          name: "आमाशय (जठर ग्रंथियाँ)",
          en: "Stomach • pH 2.0",
          role: "अम्लीय मंथन व प्रोटीन पाचन",
          summary:
            "J-आकार की थैली जिसमें जठर रस के 3 घटक होते हैं: (1) HCl (रोगाणु मारता है व अम्लीय माध्यम बनाता है), (2) पेप्सिन (प्रोटीन पचाता है), (3) श्लेष्मा/Mucus (आमाशय की दीवार को अम्ल से बचाता है)।",
          keyFact: "पेप्सिन केवल अम्लीय माध्यम (HCl की उपस्थिति) में ही सक्रिय होता है।",
        },
        liver: {
          name: "यकृत और पित्ताशय",
          en: "Liver & Gallbladder",
          role: "क्षारीय माध्यम व वसा पायसीकरण",
          summary:
            "यकृत शरीर की सबसे बड़ी ग्रंथि है जो पित्त रस (Bile) बनाती है और पित्ताशय में जमा होता है। इसमें कोई एंजाइम नहीं होता, पर यह भोजन को क्षारीय बनाता है और बड़ी वसा गोलिकाओं को छोटी बूंदों में तोड़ता है।",
          keyFact: "पित्त रस अम्लीय भोजन को क्षारीय (pH ~8) बनाकर अग्न्याशय एंजाइमों को सक्रिय करता है।",
        },
        pancreas: {
          name: "अग्न्याशय (Pancreas)",
          en: "Pancreas",
          role: "ट्रिप्सिन • लाइपेज • एमाइलेज",
          summary:
            "पत्ती के आकार की ग्रंथि जो छोटी आँत में अग्न्याशयी रस भेजती है: ट्रिप्सिन (प्रोटीन), लाइपेज (पायसीकृत वसा) और एमाइलेज (स्टार्च) का पाचन करते हैं।",
          keyFact: "अग्न्याशय मिश्रित ग्रंथि है जो पाचक रस के साथ इंसुलिन हार्मोन भी बनाती है।",
        },
        smallInt: {
          name: "छोटी आँत (क्षुद्रांत्र)",
          en: "Small Intestine (~6m)",
          role: "पूर्ण पाचन व अवशोषण स्थल",
          summary:
            "आहारनाल का सबसे लंबा कुंडलित भाग जहाँ पाचन पूरा होता है: कार्बोहाइड्रेट → ग्लूकोज़, प्रोटीन → अमीनो अम्ल, वसा → वसीय अम्ल + ग्लिसरॉल। दीर्घरोम (Villi) इन्हें रक्त में सोख लेते हैं।",
          keyFact: "शाकाहारियों (गाय) की छोटी आँत मांसाहारियों (शेर) से अधिक लंबी होती है ताकि सेल्यूलोज़ पच सके।",
        },
        largeInt: {
          name: "बड़ी आँत (बृहदांत्र)",
          en: "Large Intestine",
          role: "जल अवशोषण व बहिःक्षेपण",
          summary:
            "अपचित भोजन से अतिरिक्त जल और खनिज लवण अवशोषित कर शेष अपशिष्ट को मलाशय व गुदा द्वारा बाहर निकालती है।",
          keyFact: "बड़ी आँत के लाभकारी जीवाणु विटामिन K बनाने में सहायता करते हैं।",
        },
      },
      enzymeHotspots: {
        carbs: {
          name: "1. कार्बोहाइड्रेट पाचन",
          en: "Starch → Glucose",
          role: "एमाइलेज (मुख व छोटी आँत)",
          summary: "मुख में लार एमाइलेज से शुरू होकर छोटी आँत में ग्लूकोज़ बनकर पूरा होता है।",
          keyFact: "अंतिम उत्पाद: ग्लूकोज़ (रक्त केशिकाओं में अवशोषित)।",
        },
        proteins: {
          name: "2. प्रोटीन पाचन",
          en: "Proteins → Amino Acids",
          role: "पेप्सिन (pH 2) व ट्रिप्सिन (pH 8)",
          summary: "आमाशय में पेप्सिन और छोटी आँत में ट्रिप्सिन प्रोटीन को अमीनो अम्लों में तोड़ते हैं।",
          keyFact: "अंतिम उत्पाद: अमीनो अम्ल (शरीर निर्माण व मरम्मत हेतु)।",
        },
        fats: {
          name: "3. वसा पाचन",
          en: "Fats → Fatty Acids + Glycerol",
          role: "पित्त लवण + लाइपेज",
          summary: "पित्त लवण वसा का पायसीकरण करते हैं और लाइपेज उसे वसीय अम्ल व ग्लिसरॉल में तोड़ता है।",
          keyFact: "अंतिम उत्पाद दीर्घरोम के मध्य लैक्टियल में अवशोषित होते हैं।",
        },
      },
      lesson: {
        heading: "कक्षा 9–10 पाठ योजना: मानव पाचन तंत्र",
        sections: [
          {
            title: "1. प्राणीसम पोषण के 5 चरण",
            html: `<p>1. <strong>अंतर्ग्रहण (Ingestion)</strong> → 2. <strong>पाचन (Digestion)</strong> → 3. <strong>अवशोषण (Absorption)</strong> → 4. <strong>स्वांगीकरण (Assimilation)</strong> → 5. <strong>बहिःक्षेपण (Egestion)</strong>।</p>`,
          },
          {
            title: "2. बोर्ड परीक्षा एंजाइम सारणी",
            html: `<div class="detail-fact" style="margin-top:4px">• <strong>लार (pH 6.8):</strong> लार एमाइलेज → स्टार्च → माल्टोज़।<br/>• <strong>जठर रस (pH 2.0):</strong> HCl + पेप्सिन (प्रोटीन) + श्लेष्मा।<br/>• <strong>पित्त रस (यकृत):</strong> एंजाइम नहीं; क्षारीय माध्यम + वसा पायसीकरण।<br/>• <strong>अग्न्याशय रस (pH 8.0):</strong> एमाइलेज, ट्रिप्सिन, लाइपेज।<br/>• <strong>अंतिम उत्पाद:</strong> ग्लूकोज़, अमीनो अम्ल, वसीय अम्ल व ग्लिसरॉल।</div>`,
          },
          {
            title: "3. आमाशय का अम्ल स्वयं आमाशय को क्यों नहीं गलाता?",
            html: `<p>आमाशय की भीतरी सतह पर <strong>श्लेष्मा (Mucus)</strong> की मोटी सुरक्षा परत होती है जो HCl और पेप्सिन से दीवार की रक्षा करती है।</p>`,
          },
        ],
      },
      quiz: {
        title: "पाचन तंत्र त्वरित जाँच",
        correctMsg: "बिल्कुल सही! सटीक अवधारणा।",
        wrongMsg: "सही नहीं — नीचे स्पष्टीकरण पढ़ें।",
        nextBtn: "अगला प्रश्न",
        restartBtn: "फिर से शुरू करें",
        scoreLabel: "स्कोर",
        questions: [
          {
            q: "मानव आहारनाल में स्टार्च (मंड) का रासायनिक पाचन सबसे पहले कहाँ शुरू होता है?",
            options: ["आमाशय", "मुखगुहा (Mouth)", "बड़ी आँत", "ग्रसिका"],
            answer: 1,
            explain: "लार में स्थित लार एमाइलेज मुख में ही स्टार्च को शर्करा में तोड़ना शुरू कर देता है।",
          },
          {
            q: "आमाशय में हाइड्रोक्लोरिक अम्ल (HCl) का मुख्य कार्य क्या है?",
            options: ["वसा पचाना", "रोगाणु नष्ट करना व पेप्सिन हेतु अम्लीय माध्यम बनाना", "जल सोखना", "पित्त को निष्क्रिय करना"],
            answer: 1,
            explain: "HCl हानिकारक जीवाणुओं को मारता है और पेप्सिन एंजाइम को सक्रिय करता है।",
          },
          {
            q: "भोजन का पूर्ण पाचन और मुख्य अवशोषण किस अंग में होता है?",
            options: ["आमाशय", "बड़ी आँत", "छोटी आँत (क्षुद्रांत्र)", "यकृत"],
            answer: 2,
            explain: "छोटी आँत में सभी पोषक तत्वों का पूर्ण पाचन व दीर्घरोम द्वारा अवशोषण होता है।",
          },
          {
            q: "ट्रिप्सिन, लाइपेज और एमाइलेज कौन-सी ग्रंथि स्रावित करती है?",
            options: ["लार ग्रंथि", "अग्न्याशय (Pancreas)", "थायरॉइड", "पित्ताशय"],
            answer: 1,
            explain: "अग्न्याशय ये तीनों प्रमुख पाचक एंजाइम छोटी आँत में भेजता है।",
          },
          {
            q: "कार्बोहाइड्रेट, प्रोटीन और वसा के अंतिम पाचन उत्पाद क्रमशः क्या हैं?",
            options: [
              "ग्लूकोज़, अमीनो अम्ल और वसीय अम्ल + ग्लिसरॉल",
              "स्टार्च, पेप्टोन और पित्त",
              "यूरिया, ऑक्सीजन और जल",
              "माल्टोज़, HCl और श्लेष्मा",
            ],
            answer: 0,
            explain: "पूर्ण पाचन से ग्लूकोज़, अमीनो अम्ल तथा वसीय अम्ल व ग्लिसरॉल बनते हैं।",
          },
        ],
      },

      villiSec: {
        title: "दीर्घरोम (Villi) और पित्त क्रिया — 3D फ्लिप लैब",
        subtitle:
          "सामने: उंगली जैसे दीर्घरोम द्वारा पोषक अवशोषण • कार्ड पलटें और पित्त द्वारा वसा पायसीकरण देखें",
        flipMain: "कार्ड पलटें: दीर्घरोम अवशोषण ↔ पित्त क्रिया",
        frontBadge: "सामने • छोटी आँत के दीर्घरोम (अवशोषण)",
        flipToBile: "वसा पायसीकरण (पित्त) देखें",
        absorbBtn: "पचे पोषक तत्व अवशोषित करें!",
        villiPrompt: "पचा हुआ भोजन रक्त में कैसे प्रवेश करता है, जानने के लिए किसी भी भाग पर टैप करें:",
        backBadge: "पीछे • यकृत पित्त व वसा पायसीकरण",
        flipToVilli: "वापस दीर्घरोम पर जाएँ",
        bileBtn: "पित्त लवण छोड़ें (वसा को छोटी बूंदों में तोड़ें!)",
        bilePrompt: "देखें कि पित्त में कोई एंजाइम न होने पर भी यह वसा पाचन के लिए क्यों अनिवार्य है:",
        lessonTab: "दीर्घरोम व पित्त नोट्स (कक्षा 9–10)",
        quizTab: "दीर्घरोम व पित्त क्विज़",
        analogyLabel: "सरल उदाहरण",
        villiHud: "लाखों दीर्घरोम: विशाल सतह क्षेत्र से रक्त में तेज़ अवशोषण!",
        bileHud: [
          "चरण 1: बड़ी वसा गोलिका आती है (लाइपेज के लिए बहुत बड़ी!)",
          "चरण 2: यकृत के पित्त लवण वसा गोलिका को घेरते हैं",
          "चरण 3: पायसीकरण से हजारों सूक्ष्म बूंदें बनती हैं (सतह क्षेत्र ↑)",
          "चरण 4: लाइपेज इन्हें वसीय अम्ल + ग्लिसरॉल में तोड़ देता है!",
        ],
      },
      villiParts: {
        folds: {
          name: "उंगली जैसे दीर्घरोम (Villi)",
          en: "Surface Area Multiplier",
          role: "अवशोषण क्षेत्र बढ़ाते हैं",
          analogy: "रोएँदार तौलिये की तरह जो समतल कपड़े से कई गुना अधिक पानी सोखता है!",
          summary: "छोटी आँत की भीतरी दीवार पर लाखों उंगली जैसे उभार जो अवशोषण की सतह कई गुना बढ़ा देते हैं।",
        },
        epithelium: {
          name: "एक-कोशिका पतली दीवार",
          en: "1-Cell Epithelium",
          role: "तेज़ विसरण झिल्ली",
          analogy: "पतले टी-बैग की तरह जिससे पोषक तत्व बिना रुके पार हो जाते हैं।",
          summary: "अत्यंत पतली झिल्ली जिससे ग्लूकोज़ व अमीनो अम्ल तुरंत रक्त में पहुँचते हैं।",
        },
        capillaries: {
          name: "रक्त केशिकाएँ",
          en: "Blood Capillaries",
          role: "ग्लूकोज़ व अमीनो अम्ल वाहक",
          analogy: "दीवार के पीछे खड़े डिलीवरी ट्रक जो पोषण को तुरंत यकृत व कोशिकाओं तक ले जाते हैं।",
          summary: "दीर्घरोम के भीतर घना केशिका जाल जो ग्लूकोज़, अमीनो अम्ल व खनिज सोखता है।",
        },
        lacteal: {
          name: "केंद्रीय लैक्टियल",
          en: "Central Lacteal",
          role: "वसा अवशोषण नलिका",
          analogy: "केवल पची हुई वसा ले जाने के लिए बनी विशेष लेन।",
          summary: "प्रत्येक दीर्घरोम के मध्य स्थित लसीका नलिका जो वसीय अम्ल व ग्लिसरॉल सोखती है।",
        },
      },
      bileSteps: {
        step1: {
          name: "1. बड़ी वसा गोलिका",
          en: "कम सतह क्षेत्र",
          role: "लाइपेज भीतर नहीं पहुँच पाता",
          analogy: "बर्फ के बड़े टुकड़े की तरह जो धीरे-धीरे पिघलता है।",
          summary: "बड़ी वसा गोलिका पर लाइपेज केवल बाहरी सतह पर ही काम कर पाता है।",
        },
        step2: {
          name: "2. पित्त लवण का आगमन",
          en: "यकृत से स्रावित",
          role: "जैविक साबुन",
          analogy: "बर्तन धोने वाले साबुन की तरह जो चिकनाई को तोड़ देता है!",
          summary: "यकृत द्वारा बना पित्त रस पित्ताशय से आकर बड़ी वसा गोलिकाओं को घेर लेता है।",
        },
        step3: {
          name: "3. वसा पायसीकरण",
          en: "Emulsification",
          role: "सूक्ष्म बूंदें = विशाल सतह क्षेत्र",
          analogy: "बर्फ को पीसकर चूरा बनाने से वह तुरंत पिघल जाती है!",
          summary: "पित्त लवण बड़ी गोलिका को हजारों सूक्ष्म बूंदों में तोड़ देते हैं ताकि एंजाइम तेज़ी से काम करें।",
        },
        step4: {
          name: "4. लाइपेज द्वारा पाचन",
          en: "रासायनिक विखंडन",
          role: "वसीय अम्ल + ग्लिसरॉल",
          analogy: "अब लाइपेज कैंची हर छोटी बूंद को तुरंत काटकर अवशोषण योग्य बना देती है।",
          summary: "अग्न्याशयी लाइपेज छोटी बूंदों को वसीय अम्ल और ग्लिसरॉल में बदल देता है।",
        },
      },
      vbLesson: {
        heading: "कक्षा 9–10 नोट्स: दीर्घरोम और पित्त पायसीकरण",
        sections: [
          {
            title: "1. छोटी आँत अवशोषण के लिए कैसे अनुकूलित है?",
            html: `<p>1. लाखों उंगली जैसे <strong>दीर्घरोम (Villi)</strong> सतह क्षेत्र बढ़ाते हैं।<br/>2. दीवार केवल <strong>एक कोशिका मोटी</strong> होती है।<br/>3. भीतर <strong>रक्त केशिकाएँ</strong> (ग्लूकोज़/अमीनो अम्ल) व <strong>लैक्टियल</strong> (वसा) होते हैं।</p>`,
          },
          {
            title: "2. पित्त रस के दो मुख्य कार्य (बिना किसी एंजाइम के)",
            html: `<p>1. आमाशय से आए अम्लीय भोजन को <strong>क्षारीय</strong> बनाना।<br/>2. बड़ी वसा गोलिकाओं का <strong>पायसीकरण (Emulsification)</strong> करना।</p>`,
          },
        ],
      },
      vbQuiz: {
        title: "दीर्घरोम व पित्त क्विज़",
        correctMsg: "शानदार! बोर्ड परीक्षा के लिए तैयार।",
        wrongMsg: "सही नहीं — नीचे स्पष्टीकरण पढ़ें।",
        nextBtn: "अगला प्रश्न",
        restartBtn: "फिर से शुरू करें",
        scoreLabel: "स्कोर",
        questions: [
          {
            q: "छोटी आँत में लाखों दीर्घरोम (Villi) का मुख्य कार्य क्या है?",
            options: ["HCl स्रावित करना", "पचे भोजन के अवशोषण हेतु सतह क्षेत्र बढ़ाना", "भोजन चबाना", "रक्त पंप करना"],
            answer: 1,
            explain: "दीर्घरोम सतह क्षेत्र कई गुना बढ़ाकर पोषक तत्वों का तेज़ अवशोषण करते हैं।",
          },
          {
            q: "किस पाचक रस में कोई एंजाइम नहीं होता, फिर भी वसा पाचन के लिए अनिवार्य है?",
            options: ["लार", "जठर रस", "पित्त रस (Bile)", "अग्न्याशय रस"],
            answer: 2,
            explain: "पित्त रस वसा का पायसीकरण करता है और माध्यम को क्षारीय बनाता है।",
          },
          {
            q: "पित्त लवणों द्वारा बड़ी वसा गोलिकाओं को छोटी बूंदों में तोड़ना क्या कहलाता है?",
            options: ["क्रमाकुंचन", "पायसीकरण (Emulsification)", "किण्वन", "वाष्पोत्सर्जन"],
            answer: 1,
            explain: "पायसीकरण से लाइपेज एंजाइम की क्रियाशीलता बहुत बढ़ जाती है।",
          },
          {
            q: "दीर्घरोम के भीतर पची हुई वसा (वसीय अम्ल व ग्लिसरॉल) कौन अवशोषित करता है?",
            options: ["महाधमनी", "केंद्रीय लैक्टियल (लसीका वाहिनी)", "श्वासनली", "मूत्रवाहिनी"],
            answer: 1,
            explain: "लैक्टियल विशेष रूप से पची हुई वसा का अवशोषण करता है।",
          },
        ],
      },
    },

    bn: {
      chapterBadge: "অধ্যায় ০৬ • শ্রেণি ৯–১০ ল্যাব",
      title: "মানব পরিপাক তন্ত্র — লাইভ ল্যাব",
      subtitle:
        "লাইভ pH পরিবর্তনসহ পৌষ্টিকনালীতে খাদ্যের যাত্রা দেখুন, অথবা উৎসেচক (Enzyme) রসায়ন ল্যাব খুলুন",
      views: {
        tract: "পরিপাক পথ (পৌষ্টিকনালী)",
        enzymes: "উৎসেচক ও pH ল্যাব",
      },
      toggles: {
        autoOn: "অটো পরিপাক: চালু",
        autoOff: "অটো পরিপাক: বন্ধ",
        pins: "হটস্পট পিন",
        pause: "থামান",
        play: "চালান",
      },
      metrics: {
        ph: "স্থানীয় pH",
        organ: "খাদ্যের অবস্থান",
        enzyme: "সক্রিয় রস",
        prog: "পরিপাক হার",
      },
      journeyControl: "খাদ্য যাত্রার অবস্থান",
      presets: {
        mouth: "মুখ (pH 6.8)",
        stomach: "পাকস্থলী (pH 2.0)",
        small: "ক্ষুদ্রান্ত্র (pH 8.0)",
        large: "বৃহদন্ত্র (জল)",
      },
      tabs: {
        inspect: "অঙ্গ পরিদর্শক",
        lesson: "শ্রেণি ৯–১০ পাঠ",
        quiz: "দ্রুত যাচাই",
      },
      selectPrompt:
        "গ্রন্থি, পাচক রস ও রাসায়নিক ক্রিয়া জানতে যেকোনো জ্বলন্ত পিনে ট্যাপ করুন (অথবা উৎসেচক ল্যাব দেখুন)।",
      journeyStages: [
        { min: 0, max: 14, organ: "মুখগহ্বর", ph: "6.8", juice: "লালা অ্যামাইলেজ" },
        { min: 14, max: 26, organ: "গ্রাসনালী", ph: "6.8", juice: "পেরিস্ট্যালসিস" },
        { min: 26, max: 48, organ: "পাকস্থলী", ph: "2.0", juice: "HCl + পেপসিন" },
        { min: 48, max: 82, organ: "ক্ষুদ্রান্ত্র", ph: "8.0", juice: "পিত্ত + অগ্ন্যাশয় রস" },
        { min: 82, max: 101, organ: "বৃহদন্ত্র", ph: "7.0", juice: "জল শোষণ" },
      ],
      tractHotspots: {
        mouth: {
          name: "মুখগহ্বর ও লালাগ্রন্থি",
          en: "Mouth • pH 6.8",
          role: "খাদ্যগ্রহণ ও শ্বেতসার পরিপাক শুরু",
          summary:
            "দাঁত খাদ্য চিবিয়ে নরম করে এবং লালারসের টায়ালিন/অ্যামাইলেজ (Salivary Amylase) জটিল শ্বেতসারকে (Starch) মিষ্টি মল্টোজ শর্করায় ভাঙতে শুরু করে।",
          keyFact: "এক টুকরো রুটি ৩০ সেকেন্ড চিবোলে মিষ্টি লাগে—এর কারণ লালারসের অ্যামাইলেজ!",
        },
        esophagus: {
          name: "গ্রাসনালী (খাদ্যনালী)",
          en: "Esophagus",
          role: "পেরিস্ট্যালসিস চলন",
          summary:
            "প্রায় ২৫ সেমি লম্বা পেশীবহুল নালী যা ক্রমসংকোচন (Peristalsis) তরঙ্গের মাধ্যমে খাদ্যকে পাকস্থলীতে নামিয়ে আনে। এখানে কোনো উৎসেচক ক্ষরিত হয় না।",
          keyFact: "পেরিস্ট্যালসিসের ফলে খাদ্য সর্বদা একমুখীভাবে পাকস্থলীতে পৌঁছায়।",
        },
        stomach: {
          name: "পাকস্থলী (পাচক গ্রন্থি)",
          en: "Stomach • pH 2.0",
          role: "অম্লীয় মন্থন ও প্রোটিন পরিপাক",
          summary:
            "J-আকৃতির থলি যাতে পাচক রসের ৩টি উপাদান থাকে: (১) HCl (জীবাণু নাশ ও অম্লীয় মাধ্যম), (২) পেপসিন (প্রোটিন পরিপাক), (৩) মিউকাস (পাকস্থলীর প্রাচীরকে অ্যাসিড থেকে বাঁচায়)।",
          keyFact: "পেপসিন শুধুমাত্র অম্লীয় মাধ্যমে (HCl-এর উপস্থিতিতে) সক্রিয় হয়।",
        },
        liver: {
          name: "যকৃত ও পিত্তাশয়",
          en: "Liver & Gallbladder",
          role: "ক্ষারীয় মাধ্যম ও ফ্যাট ইমালসিফিকেশন",
          summary:
            "যকৃত মানবদেহের বৃহত্তম গ্রন্থি, যা পিত্তরস (Bile) তৈরি করে ও পিত্তাশয়ে জমা রাখে। এতে কোনো উৎসেচক নেই, কিন্তু এটি খাদ্যকে ক্ষারীয় করে এবং বড় ফ্যাট কণাকে ক্ষুদ্র বিন্দুতে ভাঙে।",
          keyFact: "পিত্তরস অম্লীয় খাদ্যকে ক্ষারীয় (pH ~8) করে অগ্ন্যাশয় উৎসেচককে সক্রিয় করে।",
        },
        pancreas: {
          name: "অগ্ন্যাশয় (Pancreas)",
          en: "Pancreas",
          role: "ট্রিপসিন • লাইপেজ • অ্যামাইলেজ",
          summary:
            "পাতার মতো দেখতে মিশ্রগ্রন্থি যা ক্ষুদ্রান্ত্রে অগ্ন্যাশয় রস পাঠায়: ট্রিপসিন (প্রোটিন), লাইপেজ (ফ্যাট) ও অ্যামাইলেজ (শ্বেতসার) পরিপাক করে।",
          keyFact: "অগ্ন্যাশয় পাচক রস ছাড়াও রক্তে শর্করা নিয়ন্ত্রক ইনসুলিন হরমোন ক্ষরণ করে।",
        },
        smallInt: {
          name: "ক্ষুদ্রান্ত্র (Small Intestine)",
          en: "Small Intestine (~6m)",
          role: "সম্পূর্ণ পরিপাক ও শোষণ কেন্দ্র",
          summary:
            "পৌষ্টিকনালীর দীর্ঘতম কুণ্ডলীকৃত অংশ যেখানে পরিপাক সম্পূর্ণ হয়: শর্করা → গ্লুকোজ, প্রোটিন → অ্যামিনো অ্যাসিড, ফ্যাট → ফ্যাটি অ্যাসিড + গ্লিসারল। ভিলাই (Villi) এগুলো শোষণ করে।",
          keyFact: "সেলুলোজ পরিপাকের জন্য তৃণভোজীদের ক্ষুদ্রান্ত্র মাংসাশীদের চেয়ে লম্বা হয়।",
        },
        largeInt: {
          name: "বৃহদন্ত্র (Large Intestine)",
          en: "Large Intestine",
          role: "জল শোষণ ও বহিষ্করণ",
          summary:
            "অপাচ্য খাদ্য থেকে অতিরিক্ত জল ও খনিজ লবণ শোষণ করে অবশিষ্ট বর্জ্য মলাশয় ও পায়ু দিয়ে বের করে দেয়।",
          keyFact: "বৃহদন্ত্রের উপকারী ব্যাকটেরিয়া ভিটামিন K তৈরিতে সাহায্য করে।",
        },
      },
      enzymeHotspots: {
        carbs: {
          name: "১. শর্করা পরিপাক",
          en: "Starch → Glucose",
          role: "অ্যামাইলেজ (মুখ ও ক্ষুদ্রান্ত্র)",
          summary: "মুখে লালা অ্যামাইলেজ দিয়ে শুরু হয়ে ক্ষুদ্রান্ত্রে গ্লুকোজ তৈরি হয়ে শেষ হয়।",
          keyFact: "অন্তিম পদার্থ: গ্লুকোজ (রক্তজালকে শোষিত হয়)।",
        },
        proteins: {
          name: "২. প্রোটিন পরিপাক",
          en: "Proteins → Amino Acids",
          role: "পেপসিন (pH 2) ও ট্রিপসিন (pH 8)",
          summary: "পাকস্থলীতে পেপসিন ও ক্ষুদ্রান্ত্রে ট্রিপসিন প্রোটিনকে অ্যামিনো অ্যাসিডে ভাঙে।",
          keyFact: "অন্তিম পদার্থ: অ্যামিনো অ্যাসিড (দেহগঠন ও ক্ষয়পূরণে ব্যবহৃত)।",
        },
        fats: {
          name: "৩. ফ্যাট পরিপাক",
          en: "Fats → Fatty Acids + Glycerol",
          role: "পিত্তলবণ + লাইপেজ",
          summary: "পিত্তলবণ ফ্যাটকে ক্ষুদ্র কণায় ভাঙে এবং লাইপেজ তাকে ফ্যাটি অ্যাসিড ও গ্লিসারলে পরিণত করে।",
          keyFact: "অন্তিম পদার্থ ভিলাইয়ের ল্যাকটিয়ালে শোষিত হয়।",
        },
      },
      lesson: {
        heading: "শ্রেণি ৯–১০ পাঠ পরিকল্পনা: মানব পরিপাক তন্ত্র",
        sections: [
          {
            title: "১. হলোজোয়িক পুষ্টির ৫টি ধাপ",
            html: `<p>১. <strong>খাদ্যগ্রহণ (Ingestion)</strong> → ২. <strong>পরিপাক (Digestion)</strong> → ৩. <strong>শোষণ (Absorption)</strong> → ৪. <strong>আত্মীকরণ (Assimilation)</strong> → ৫. <strong>বহিষ্করণ (Egestion)</strong>।</p>`,
          },
          {
            title: "২. মাধ্যমিক / বোর্ড পরীক্ষার উৎসেচক তালিকা",
            html: `<div class="detail-fact" style="margin-top:4px">• <strong>লালারস (pH 6.8):</strong> টায়ালিন/অ্যামাইলেজ → শ্বেতসার → মল্টোজ।<br/>• <strong>পাকস্থলী (pH 2.0):</strong> HCl + পেপসিন (প্রোটিন) + মিউকাস।<br/>• <strong>পিত্তরস (যকৃত):</strong> উৎসেচকহীন; ক্ষারীয় মাধ্যম + ফ্যাট ইমালসিফিকেশন।<br/>• <strong>অগ্ন্যাশয় রস (pH 8.0):</strong> অ্যামাইলেজ, ট্রিপসিন, লাইপেজ।<br/>• <strong>অন্তিম পদার্থ:</strong> গ্লুকোজ, অ্যামিনো অ্যাসিড, ফ্যাটি অ্যাসিড ও গ্লিসারল।</div>`,
          },
          {
            title: "৩. পাকস্থলীর HCl অ্যাসিড নিজের প্রাচীরকে হজম করে না কেন?",
            html: `<p>পাকস্থলীর ভেতরের প্রাচীরে ক্ষারীয় <strong>মিউকাস (Mucus)</strong>-এর পুরু স্তর থাকে যা HCl ও পেপসিনের ক্ষয় থেকে প্রাচীরকে রক্ষা করে।</p>`,
          },
        ],
      },
      quiz: {
        title: "পরিপাক তন্ত্র দ্রুত যাচাই",
        correctMsg: "একদম সঠিক! ধারণাটি পরিষ্কার।",
        wrongMsg: "সঠিক নয় — নিচের ব্যাখ্যাটি দেখুন।",
        nextBtn: "পরবর্তী প্রশ্ন",
        restartBtn: "আবার শুরু করুন",
        scoreLabel: "স্কোর",
        questions: [
          {
            q: "মানব পৌষ্টিকনালীর কোথায় শ্বেতসারের (Starch) রাসায়নিক পরিপাক প্রথম শুরু হয়?",
            options: ["পাকস্থলী", "মুখগহ্বর (Mouth)", "বৃহদন্ত্র", "গ্রাসনালী"],
            answer: 1,
            explain: "লালারসের অ্যামাইলেজ (টায়ালিন) মুখের ভেতরেই শ্বেতসার ভাঙতে শুরু করে।",
          },
          {
            q: "পাকস্থলীতে হাইড্রোক্লোরিক অ্যাসিডের (HCl) প্রধান কাজ কী?",
            options: ["ফ্যাট পরিপাক", "জীবাণু ধ্বংস ও পেপসিনের জন্য অম্লীয় মাধ্যম তৈরি", "জল শোষণ", "পিত্ত নিষ্ক্রিয় করা"],
            answer: 1,
            explain: "HCl খাদ্যের জীবাণু মারে এবং পেপসিন উৎসেচককে সক্রিয় করে।",
          },
          {
            q: "খাদ্যের সম্পূর্ণ পরিপাক ও প্রধান শোষণ কোন অঙ্গে ঘটে?",
            options: ["পাকস্থলী", "বৃহদন্ত্র", "ক্ষুদ্রান্ত্র (Small Intestine)", "যকৃত"],
            answer: 2,
            explain: "ক্ষুদ্রান্ত্রে সব খাদ্যের পরিপাক সম্পূর্ণ হয় এবং ভিলাইয়ের মাধ্যমে শোষিত হয়।",
          },
          {
            q: "ট্রিপসিন, লাইপেজ ও অ্যামাইলেজ কোন গ্রন্থি ক্ষরণ করে?",
            options: ["লালাগ্রন্থি", "অগ্ন্যাশয় (Pancreas)", "থাইরয়েড", "পিত্তাশয়"],
            answer: 1,
            explain: "অগ্ন্যাশয় এই তিনটি প্রধান পাচক উৎসেচক ক্ষুদ্রান্ত্রে পাঠায়।",
          },
          {
            q: "শর্করা, প্রোটিন ও ফ্যাটের অন্তিম পরিপাক পদার্থ যথাক্রমে কী কী?",
            options: [
              "গ্লুকোজ, অ্যামিনো অ্যাসিড এবং ফ্যাটি অ্যাসিড + গ্লিসারল",
              "শ্বেতসার, পেপটোন এবং পিত্ত",
              "ইউরিয়া, অক্সিজেন এবং জল",
              "মল্টোজ, HCl এবং মিউকাস",
            ],
            answer: 0,
            explain: "সম্পূর্ণ পরিপাকে গ্লুকোজ, অ্যামিনো অ্যাসিড এবং ফ্যাটি অ্যাসিড ও গ্লিসারল উৎপন্ন হয়।",
          },
        ],
      },

      villiSec: {
        title: "ক্ষুদ্রান্ত্রের ভিলাই ও পিত্ত ক্রিয়া — 3D ফ্লিপ ল্যাব",
        subtitle:
          "সামনে: আঙুলের মতো ভিলাই দিয়ে পুষ্টি শোষণ • কার্ড উল্টান এবং পিত্তের ফ্যাট ইমালসিফিকেশন দেখুন",
        flipMain: "কার্ড উল্টান: ভিলাই শোষণ ↔ পিত্ত ক্রিয়া",
        frontBadge: "সামনে • ক্ষুদ্রান্ত্রের ভিলাই (শোষণ)",
        flipToBile: "ফ্যাট ইমালসিফিকেশন (পিত্ত) দেখুন",
        absorbBtn: "পাচিত পুষ্টি শোষণ করুন!",
        villiPrompt: "পাচিত খাদ্য কীভাবে রক্তে প্রবেশ করে জানতে ভিলাইয়ের যেকোনো অংশে ট্যাপ করুন:",
        backBadge: "পিছনে • যকৃতের পিত্ত ও ফ্যাট ইমালসিফিকেশন",
        flipToVilli: "ভিলাইয়ে ফিরে যান",
        bileBtn: "পিত্তলবণ ছাড়ুন (বড় ফ্যাট কণা ভাঙুন!)",
        bilePrompt: "দেখুন পিত্তরসে কোনো উৎসেচক না থাকলেও ফ্যাট পরিপাকে এটি কেন অপরিহার্য:",
        lessonTab: "ভিলাই ও পিত্ত নোটস (শ্রেণি ৯–১০)",
        quizTab: "ভিলাই ও পিত্ত কুইজ",
        analogyLabel: "সহজ উদাহরণ",
        villiHud: "লক্ষ লক্ষ ভিলাই: বিশাল পৃষ্ঠতল দিয়ে রক্তে দ্রুত পুষ্টি শোষণ!",
        bileHud: [
          "ধাপ ১: বড় ফ্যাট কণা আসে (লাইপেজের জন্য অনেক বড়!)",
          "ধাপ ২: যকৃতের পিত্তলবণ বড় ফ্যাট কণাকে ঘিরে ধরে",
          "ধাপ ৩: ইমালসিফিকেশনে হাজারো ক্ষুদ্র বিন্দু তৈরি হয় (পৃষ্ঠতল ↑)",
          "ধাপ ৪: লাইপেজ এগুলোকে ফ্যাটি অ্যাসিড + গ্লিসারলে ভেঙে দেয়!",
        ],
      },
      villiParts: {
        folds: {
          name: "আঙুলের মতো ভিলাই (Villi)",
          en: "Surface Area Multiplier",
          role: "শোষণ তল বাড়ায়",
          analogy: "তোয়ালের অসংখ্য রোঁয়ার মতো যা সমতল কাপড়ের চেয়ে অনেক বেশি জল শুষে নেয়!",
          summary: "ক্ষুদ্রান্ত্রের ভেতরের প্রাচীরে থাকা লক্ষ লক্ষ আঙুলের মতো প্রবর্ধক যা শোষণের পৃষ্ঠতল বহুগুণ বাড়িয়ে দেয়।",
        },
        epithelium: {
          name: "এক-কোষ পাতলা প্রাচীর",
          en: "1-Cell Epithelium",
          role: "দ্রুত ব্যাপন পর্দা",
          analogy: "পাতলা টি-ব্যাগের মতো যার ভেতর দিয়ে পুষ্টি সহজেই পার হয়ে যায়।",
          summary: "মাত্র এক কোষ পুরু আর্দ্র প্রাচীর, ফলে গ্লুকোজ ও অ্যামিনো অ্যাসিড দ্রুত রক্তে মেশে।",
        },
        capillaries: {
          name: "রক্তজালক (Capillaries)",
          en: "Blood Capillaries",
          role: "গ্লুকোজ ও অ্যামিনো অ্যাসিড বাহক",
          analogy: "প্রাচীরের পেছনে থাকা ডেলিভারি ভ্যান যা পুষ্টিকে সোজা যকৃত ও কোষে পৌঁছে দেয়।",
          summary: "ভিলাইয়ের ভেতরের ঘন রক্তজালক গ্লুকোজ, অ্যামিনো অ্যাসিড ও খনিজ শোষণ করে।",
        },
        lacteal: {
          name: "কেন্দ্রীয় ল্যাকটিয়াল",
          en: "Central Lacteal",
          role: "ফ্যাট শোষণ নালী",
          analogy: "শুধুমাত্র পাচিত ফ্যাট বহনের জন্য তৈরি বিশেষ পথ।",
          summary: "প্রতিটি ভিলাইয়ের কেন্দ্রে থাকা লসিকা নালী যা ফ্যাটি অ্যাসিড ও গ্লিসারল শোষণ করে।",
        },
      },
      bileSteps: {
        step1: {
          name: "১. বড় ফ্যাট কণা",
          en: "কম পৃষ্ঠতল",
          role: "লাইপেজ ভেতরে পৌঁছতে পারে না",
          analogy: "বড় বরফের চাঁইয়ের মতো যা গলতে অনেক সময় লাগে।",
          summary: "বড় তেলের বিন্দুতে লাইপেজ কেবল বাইরের দিকেই কাজ করতে পারে, তাই পরিপাক ধীর হয়।",
        },
        step2: {
          name: "২. পিত্তলবণের আগমন",
          en: "যকৃত থেকে ক্ষরিত",
          role: "প্রাকৃতিক সাবান",
          analogy: "বাসন ধোয়ার সাবানের মতো যা তেল-চর্বিকে ভেঙে দেয়!",
          summary: "যকৃতে তৈরি পিত্তরস পিত্তাশয় থেকে এসে বড় ফ্যাট কণাগুলোকে ঘিরে ধরে।",
        },
        step3: {
          name: "৩. ফ্যাট ইমালসিফিকেশন",
          en: "Emulsification",
          role: "ক্ষুদ্র বিন্দু = বিশাল পৃষ্ঠতল",
          analogy: "বরফের চাঁই গুঁড়ো করে দিলে মুহূর্তেই গলে যায়!",
          summary: "পিত্তলবণ বড় ফ্যাট কণাকে হাজারো ক্ষুদ্র বিন্দুতে ভেঙে উৎসেচকের কাজের এলাকা বাড়িয়ে দেয়।",
        },
        step4: {
          name: "৪. লাইপেজ পরিপাক",
          en: "রাসায়নিক বিশ্লেষণ",
          role: "ফ্যাটি অ্যাসিড + গ্লিসারল",
          analogy: "এবার লাইপেজ কাঁচি প্রতিটি ক্ষুদ্র বিন্দুকে কেটে শোষণযোগ্য করে তোলে।",
          summary: "অগ্ন্যাশয় লাইপেজ ক্ষুদ্র বিন্দুগুলোকে ফ্যাটি অ্যাসিড ও গ্লিসারলে পরিণত করে।",
        },
      },
      vbLesson: {
        heading: "শ্রেণি ৯–১০ নোটস: ভিলাই ও পিত্ত ইমালসিফিকেশন",
        sections: [
          {
            title: "১. শোষণের জন্য ক্ষুদ্রান্ত্র কীভাবে অভিযোজিত?",
            html: `<p>১. লক্ষ লক্ষ <strong>ভিলাই (Villi)</strong> শোষণের পৃষ্ঠতল বাড়ায়।<br/>২. প্রাচীর মাত্র <strong>এক কোষ পুরু</strong>।<br/>৩. ভেতরে ঘন <strong>রক্তজালক</strong> (গ্লুকোজ/অ্যামিনো অ্যাসিড) ও কেন্দ্রীয় <strong>ল্যাকটিয়াল</strong> (ফ্যাট) থাকে।</p>`,
          },
          {
            title: "২. পিত্তরসের দুটি প্রধান কাজ (উৎসেচকহীন হয়েও)",
            html: `<p>১. পাকস্থলীর অম্লীয় খাদ্যকে <strong>ক্ষারীয়</strong> করা।<br/>২. বড় ফ্যাট কণার <strong>ইমালসিফিকেশন (Emulsification)</strong> ঘটানো।</p>`,
          },
        ],
      },
      vbQuiz: {
        title: "ভিলাই ও পিত্ত কুইজ",
        correctMsg: "দারুণ! পরীক্ষার জন্য প্রস্তুত।",
        wrongMsg: "সঠিক নয় — নিচের ব্যাখ্যাটি দেখুন।",
        nextBtn: "পরবর্তী প্রশ্ন",
        restartBtn: "আবার শুরু করুন",
        scoreLabel: "স্কোর",
        questions: [
          {
            q: "ক্ষুদ্রান্ত্রের ভেতরের লক্ষ লক্ষ ভিলাইয়ের (Villi) প্রধান কাজ কী?",
            options: ["HCl ক্ষরণ করা", "পাচিত পুষ্টি শোষণের পৃষ্ঠতল বহুগুণ বাড়ানো", "খাদ্য চিবানো", "রক্ত পাম্প করা"],
            answer: 1,
            explain: "ভিলাই শোষণের ক্ষেত্রফল বাড়িয়ে দ্রুত পুষ্টি রক্তে পৌঁছাতে সাহায্য করে।",
          },
          {
            q: "কোন পাচক রসে কোনো উৎসেচক থাকে না, তবুও ফ্যাট পরিপাকে অপরিহার্য?",
            options: ["লালারস", "পাকরস", "পিত্তরস (Bile)", "অগ্ন্যাশয় রস"],
            answer: 2,
            explain: "পিত্তরস ফ্যাটের ইমালসিফিকেশন ঘটায় এবং মাধ্যমকে ক্ষারীয় করে।",
          },
          {
            q: "পিত্তলবণ দ্বারা বড় ফ্যাট কণাকে ক্ষুদ্র বিন্দুতে ভাঙার প্রক্রিয়াকে কী বলে?",
            options: ["পেরিস্ট্যালসিস", "ইমালসিফিকেশন (Emulsification)", "সন্ধান", "বাষ্পমোচন"],
            answer: 1,
            explain: "ইমালসিফিকেশন ফ্যাটের পৃষ্ঠতল বাড়িয়ে লাইপেজের কাজ সহজ করে।",
          },
          {
            q: "প্রতিটি ভিলাইয়ের ভেতরে পাচিত ফ্যাট (ফ্যাটি অ্যাসিড ও গ্লিসারল) কোন নালী শোষণ করে?",
            options: ["মহাধমনী", "কেন্দ্রীয় ল্যাকটিয়াল (লসিকা নালী)", "শ্বাসনালী", "গবিনী"],
            answer: 1,
            explain: "রক্তজালক গ্লুকোজ ও অ্যামিনো অ্যাসিড শোষণ করে, আর ল্যাকটিয়াল ফ্যাট শোষণ করে।",
          },
        ],
      },
    },
  };

  // Hotspot Pins (percentages on 420x440 stage)
  const TRACT_PINS = [
    { id: "mouth", x: 50.0, y: 11.5, tone: "venous" },
    { id: "esophagus", x: 50.0, y: 24.5, tone: "venous" },
    { id: "liver", x: 34.0, y: 39.5, tone: "arterial" },
    { id: "stomach", x: 63.0, y: 42.5, tone: "electric" },
    { id: "pancreas", x: 54.0, y: 52.0, tone: "electric" },
    { id: "smallInt", x: 50.0, y: 69.0, tone: "arterial" },
    { id: "largeInt", x: 75.5, y: 64.0, tone: "venous" },
  ];

  const ENZYME_PINS = [
    { id: "carbs", x: 18.0, y: 21.0, tone: "venous" },
    { id: "proteins", x: 18.0, y: 49.0, tone: "arterial" },
    { id: "fats", x: 18.0, y: 76.0, tone: "electric" },
  ];

  // Bolus journey polyline across 420x440 alimentary canal
  const TRACT_PATH = [
    [210, 48],  // Mouth
    [210, 96],  // Esophagus upper
    [210, 152], // Esophagus lower
    [244, 174], // Stomach fundus
    [262, 198], // Stomach body
    [232, 218], // Pylorus -> Duodenum
    [194, 240], // Small intestine loops
    [246, 260],
    [176, 282],
    [244, 304],
    [182, 326], // Ileocecal junction
    [122, 314], // Ascending colon (viewer's left)
    [122, 248],
    [210, 242], // Transverse colon
    [298, 248], // Descending colon (viewer's right)
    [298, 324],
    [216, 344], // Rectum
  ];

  const ui = {
    view: "tract", // "tract" | "enzymes"
    autoDigest: true,
    journeyPct: 10, // 0..100
    showPins: true,
    selectedTractHotspot: "stomach",
    selectedEnzymeHotspot: "carbs",
    digTab: "inspect", // "inspect" | "lesson" | "quiz"
    digQ: 0,
    digOpt: null,
    digScore: 0,
    digQuizDone: false,

    // Section 2: 3D Flip Card
    isFlipped: false,
    villiPaused: false,
    selectedVilliPart: "folds",
    nutrientParticles: [],
    bileStage: 0, // 0..3
    bileAutoTimer: 0,
    vbTab: "lesson", // "lesson" | "quiz"
    vbQ: 0,
    vbOpt: null,
    vbScore: 0,
    vbQuizDone: false,
  };

  function getDD() {
    const lang = BL.getState().lang;
    return DIG_DICT[lang] || DIG_DICT.en;
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

  function spawnNutrientBurst(count) {
    const kinds = ["glucose", "glucose", "amino", "amino", "fat"];
    const villiXs = [110, 230, 350];
    for (let i = 0; i < count; i++) {
      const kind = kinds[i % kinds.length];
      const targetVillus = villiXs[i % 3];
      ui.nutrientParticles.push({
        kind,
        x: targetVillus + (Math.random() - 0.5) * 74,
        y: 34 + Math.random() * 24,
        targetX: kind === "fat" ? targetVillus : targetVillus + (i % 2 === 0 ? -16 : 16),
        progress: 0,
        speed: 0.28 + Math.random() * 0.22,
      });
    }
    if (ui.nutrientParticles.length > 44) {
      ui.nutrientParticles = ui.nutrientParticles.slice(-44);
    }
  }

  // =========================================================
  // RENDER UI PANELS
  // =========================================================
  function renderDigPins() {
    const layer = document.getElementById("dig-pins-layer");
    if (!layer) return;
    const dd = getDD();
    const isTract = ui.view === "tract";
    const pins = isTract ? TRACT_PINS : ENZYME_PINS;
    const dictMap = isTract ? dd.tractHotspots : dd.enzymeHotspots;
    const selId = isTract ? ui.selectedTractHotspot : ui.selectedEnzymeHotspot;

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
        if (isTract) ui.selectedTractHotspot = pin.id;
        else ui.selectedEnzymeHotspot = pin.id;
        ui.digTab = "inspect";
        syncDigUI();
      });

      layer.appendChild(btn);
    });
  }

  function renderQuizInto(container, quizObj, prefix) {
    const qs = quizObj.questions;
    const qIdx = prefix === "dig" ? ui.digQ : ui.vbQ;
    const selOpt = prefix === "dig" ? ui.digOpt : ui.vbOpt;
    const score = prefix === "dig" ? ui.digScore : ui.vbScore;
    const done = prefix === "dig" ? ui.digQuizDone : ui.vbQuizDone;

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
          if (prefix === "dig") {
            ui.digQ = 0;
            ui.digOpt = null;
            ui.digScore = 0;
            ui.digQuizDone = false;
            renderDigReader();
          } else {
            ui.vbQ = 0;
            ui.vbOpt = null;
            ui.vbScore = 0;
            ui.vbQuizDone = false;
            renderVBReader();
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
        if (prefix === "dig") {
          ui.digOpt = idx;
          if (idx === cur.answer) ui.digScore += 1;
          renderDigReader();
        } else {
          ui.vbOpt = idx;
          if (idx === cur.answer) ui.vbScore += 1;
          renderVBReader();
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
          if (prefix === "dig") {
            if (ui.digQ + 1 < qs.length) {
              ui.digQ += 1;
              ui.digOpt = null;
            } else {
              ui.digQuizDone = true;
            }
            renderDigReader();
          } else {
            if (ui.vbQ + 1 < qs.length) {
              ui.vbQ += 1;
              ui.vbOpt = null;
            } else {
              ui.vbQuizDone = true;
            }
            renderVBReader();
          }
        });
      }
    }
  }

  function renderDigReader() {
    const bodyEl = document.getElementById("dig-reader-body");
    if (!bodyEl) return;
    const dd = getDD();

    document.querySelectorAll("#dig-reader-panel .tab-btn").forEach((b) => {
      b.classList.toggle("active", b.getAttribute("data-dig-tab") === ui.digTab);
    });

    bodyEl.innerHTML = "";
    if (ui.digTab === "inspect") {
      const hint = document.createElement("p");
      hint.className = "heart-subtitle";
      hint.textContent = dd.selectPrompt;
      bodyEl.appendChild(hint);

      const isTract = ui.view === "tract";
      const dictMap = isTract ? dd.tractHotspots : dd.enzymeHotspots;
      const selId = isTract ? ui.selectedTractHotspot : ui.selectedEnzymeHotspot;

      const pillsWrap = document.createElement("div");
      pillsWrap.className = "part-pills";
      Object.keys(dictMap).forEach((id) => {
        const item = dictMap[id];
        const pill = document.createElement("button");
        pill.type = "button";
        pill.className = `part-pill${selId === id ? " active" : ""}`;
        pill.textContent = item.name;
        pill.addEventListener("click", () => {
          if (isTract) ui.selectedTractHotspot = id;
          else ui.selectedEnzymeHotspot = id;
          syncDigUI();
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
    } else if (ui.digTab === "lesson") {
      const h = document.createElement("h2");
      h.className = "detail-title";
      h.style.marginTop = "0";
      h.textContent = dd.lesson.heading;
      bodyEl.appendChild(h);

      dd.lesson.sections.forEach((sec) => {
        const card = document.createElement("div");
        card.className = "chapter-sec";
        card.innerHTML = `<h3>${sec.title}</h3><div style="margin-top:6px;font-size:13.5px;line-height:1.68">${sec.html}</div>`;
        bodyEl.appendChild(card);
      });
    } else {
      renderQuizInto(bodyEl, dd.quiz, "dig");
    }
  }

  function renderFlipDetails() {
    const dd = getDD();

    const vChips = document.getElementById("villi-parts-chips");
    const vDetail = document.getElementById("villi-part-detail");
    if (vChips && vDetail) {
      vChips.innerHTML = "";
      Object.keys(dd.villiParts).forEach((pid) => {
        const item = dd.villiParts[pid];
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `part-pill${ui.selectedVilliPart === pid ? " active" : ""}`;
        btn.textContent = item.name;
        btn.addEventListener("click", () => {
          ui.selectedVilliPart = pid;
          renderFlipDetails();
        });
        vChips.appendChild(btn);
      });

      const cur = dd.villiParts[ui.selectedVilliPart] || dd.villiParts.folds;
      vDetail.innerHTML = `
        <span class="detail-type">${cur.role}</span>
        <h3 class="detail-title">${BL.term(cur)}</h3>
        <p class="detail-summary">${cur.summary}</p>
        <div class="detail-fact">✨ <strong>${dd.villiSec.analogyLabel}:</strong> ${cur.analogy}</div>
      `;
    }

    const bChips = document.getElementById("bile-steps-chips");
    const bDetail = document.getElementById("bile-step-detail");
    if (bChips && bDetail) {
      bChips.innerHTML = "";
      const order = ["step1", "step2", "step3", "step4"];
      order.forEach((sid, idx) => {
        const item = dd.bileSteps[sid];
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `part-pill${ui.bileStage === idx ? " active" : ""}`;
        btn.textContent = item.name;
        btn.addEventListener("click", () => {
          ui.bileStage = idx;
          ui.bileAutoTimer = 0;
          renderFlipDetails();
        });
        bChips.appendChild(btn);
      });

      const curB = dd.bileSteps[order[ui.bileStage]] || dd.bileSteps.step1;
      bDetail.innerHTML = `
        <span class="detail-type">${curB.role}</span>
        <h3 class="detail-title">${BL.term(curB)}</h3>
        <p class="detail-summary">${curB.summary}</p>
        <div class="detail-fact">✨ <strong>${dd.villiSec.analogyLabel}:</strong> ${curB.analogy}</div>
      `;
    }
  }

  function renderVBReader() {
    const bodyEl = document.getElementById("vb-reader-body");
    if (!bodyEl) return;
    const dd = getDD();

    document.querySelectorAll("#vb-reader-panel .tab-btn").forEach((b) => {
      b.classList.toggle("active", b.getAttribute("data-vb-tab") === ui.vbTab);
    });

    bodyEl.innerHTML = "";
    if (ui.vbTab === "lesson") {
      const h = document.createElement("h3");
      h.className = "detail-title";
      h.style.marginTop = "0";
      h.textContent = dd.vbLesson.heading;
      bodyEl.appendChild(h);

      dd.vbLesson.sections.forEach((sec) => {
        const card = document.createElement("div");
        card.className = "chapter-sec";
        card.innerHTML = `<h3>${sec.title}</h3><div style="margin-top:6px;font-size:13.5px;line-height:1.68">${sec.html}</div>`;
        bodyEl.appendChild(card);
      });
    } else {
      renderQuizInto(bodyEl, dd.vbQuiz, "vb");
    }
  }

  function updateJourneyMetrics() {
    const dd = getDD();
    const pct = Math.round(ui.journeyPct);
    const st =
      dd.journeyStages.find((s) => pct >= s.min && pct < s.max) || dd.journeyStages[0];

    const setText = (id, txt) => {
      const el = document.getElementById(id);
      if (el) el.textContent = txt;
    };

    setText("metric-ph", st.ph);
    setText("metric-dig-organ", st.organ);
    setText("metric-dig-enzyme", st.juice);
    setText("metric-dig-prog", String(pct));
    setText("journey-pill", `${st.organ} • pH ${st.ph}`);

    const slider = document.getElementById("journey-slider");
    if (slider && document.activeElement !== slider) slider.value = String(pct);
  }

  function syncDigUI() {
    const dd = getDD();
    const setText = (id, txt) => {
      const el = document.getElementById(id);
      if (el) el.textContent = txt;
    };

    setText("dig-chapter-badge", dd.chapterBadge);
    setText("dig-title", dd.title);
    setText("dig-subtitle", dd.subtitle);
    setText("lbl-view-tract", dd.views.tract);
    setText("lbl-view-enzymes", dd.views.enzymes);
    setText("lbl-dig-auto", ui.autoDigest ? dd.toggles.autoOn : dd.toggles.autoOff);
    setText("lbl-dig-pins", dd.toggles.pins);

    setText("lbl-m-ph", dd.metrics.ph);
    setText("lbl-m-organ", dd.metrics.organ);
    setText("lbl-m-enzyme", dd.metrics.enzyme);
    setText("lbl-m-prog", dd.metrics.prog);
    setText("lbl-journey-control", dd.journeyControl);

    setText("preset-mouth", dd.presets.mouth);
    setText("preset-stomach", dd.presets.stomach);
    setText("preset-small", dd.presets.small);
    setText("preset-large", dd.presets.large);

    setText("tab-dig-inspect", dd.tabs.inspect);
    setText("tab-dig-lesson", dd.tabs.lesson);
    setText("tab-dig-quiz", dd.tabs.quiz);

    // Section 2 labels
    setText("villi-sec-title", dd.villiSec.title);
    setText("villi-sec-subtitle", dd.villiSec.subtitle);
    setText("lbl-dig-flip-main", dd.villiSec.flipMain);
    setText("lbl-villi-front-badge", dd.villiSec.frontBadge);
    setText("lbl-flip-to-bile", dd.villiSec.flipToBile);
    setText("lbl-absorb-nutrients", dd.villiSec.absorbBtn);
    setText("lbl-villi-prompt", dd.villiSec.villiPrompt);
    setText("lbl-villi-back-badge", dd.villiSec.backBadge);
    setText("lbl-flip-to-villi", dd.villiSec.flipToVilli);
    setText("lbl-release-bile", dd.villiSec.bileBtn);
    setText("lbl-bile-prompt", dd.villiSec.bilePrompt);
    setText("tab-vb-lesson", dd.villiSec.lessonTab);
    setText("tab-vb-quiz", dd.villiSec.quizTab);

    const btnTract = document.getElementById("btn-view-tract");
    const btnEnz = document.getElementById("btn-view-enzymes");
    if (btnTract) {
      btnTract.classList.toggle("active-accent", ui.view === "tract");
      btnTract.setAttribute("aria-pressed", String(ui.view === "tract"));
    }
    if (btnEnz) {
      btnEnz.classList.toggle("active-accent", ui.view === "enzymes");
      btnEnz.setAttribute("aria-pressed", String(ui.view === "enzymes"));
    }

    const btnAuto = document.getElementById("btn-dig-auto");
    if (btnAuto) {
      btnAuto.classList.toggle("active-electric", ui.autoDigest);
      btnAuto.setAttribute("aria-pressed", String(ui.autoDigest));
    }

    const btnPins = document.getElementById("btn-dig-pins");
    if (btnPins) {
      btnPins.classList.toggle("active-accent", ui.showPins);
      btnPins.setAttribute("aria-pressed", String(ui.showPins));
    }

    const btnVPause = document.getElementById("btn-villi-pause");
    if (btnVPause) {
      btnVPause.innerHTML = ui.villiPaused
        ? `▶ <span>${dd.toggles.play}</span>`
        : `⏸ <span>${dd.toggles.pause}</span>`;
    }

    const flipCard = document.getElementById("dig-flip-card");
    const flipMain = document.getElementById("btn-dig-flip-main");
    if (flipCard) flipCard.classList.toggle("is-flipped", ui.isFlipped);
    if (flipMain) flipMain.setAttribute("aria-pressed", String(ui.isFlipped));

    document.querySelectorAll("[data-journey]").forEach((b) => {
      b.classList.toggle(
        "active",
        !ui.autoDigest && Math.abs(Number(b.getAttribute("data-journey")) - ui.journeyPct) < 8
      );
    });

    updateJourneyMetrics();
    renderDigPins();
    renderDigReader();
    renderFlipDetails();
    renderVBReader();
  }

  // =========================================================
  // CANVAS 1: 60 FPS ALIMENTARY CANAL & ENZYME LAB (420x440)
  // =========================================================
  function startDigCanvas() {
    const canvas = document.getElementById("dig-canvas");
    const box = document.getElementById("dig-canvas-box");
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

    function drawTractView(ctx, isLight, dd) {
      const sel = ui.selectedTractHotspot;
      const gold = isLight ? "#b58428" : "#fbbf24";
      const orange = "#f97316";
      const rose = isLight ? "#c24b65" : "#e0637d";
      const mint = "#56c99b";
      const cyan = isLight ? "#2c88a8" : "#68b8e6";
      const textCol = isLight ? "#162235" : "#e6effa";

      ctx.save();
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      // 1. Mouth & Salivary Glands (Top Center)
      ctx.fillStyle = isLight ? "rgba(44,136,168,0.22)" : "rgba(104,184,230,0.24)";
      ctx.strokeStyle = sel === "mouth" ? gold : cyan;
      ctx.lineWidth = sel === "mouth" ? 3 : 1.8;
      ctx.beginPath();
      ctx.ellipse(210, 48, 30, 18, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // 2. Esophagus (Food Pipe)
      ctx.strokeStyle = sel === "esophagus" ? gold : isLight ? "rgba(249,115,22,0.55)" : "rgba(253,186,116,0.55)";
      ctx.lineWidth = 14;
      ctx.beginPath();
      ctx.moveTo(210, 66);
      ctx.lineTo(210, 162);
      ctx.stroke();

      // 3. Large Intestine (Colon Frame)
      ctx.strokeStyle = sel === "largeInt" ? gold : isLight ? "rgba(194,75,101,0.42)" : "rgba(224,99,125,0.42)";
      ctx.lineWidth = 26;
      ctx.beginPath();
      ctx.moveTo(122, 326);
      ctx.lineTo(122, 250);
      ctx.quadraticCurveTo(122, 238, 140, 238);
      ctx.lineTo(282, 238);
      ctx.quadraticCurveTo(298, 238, 298, 252);
      ctx.lineTo(298, 324);
      ctx.quadraticCurveTo(298, 342, 272, 342);
      ctx.lineTo(216, 342);
      ctx.lineTo(216, 356);
      ctx.stroke();

      // 4. Coiled Small Intestine (Inside Colon Frame)
      ctx.strokeStyle = sel === "smallInt" ? gold : isLight ? "rgba(234,88,12,0.58)" : "rgba(251,146,60,0.62)";
      ctx.lineWidth = 13;
      ctx.beginPath();
      ctx.moveTo(222, 224);
      ctx.bezierCurveTo(156, 256, 266, 256, 266, 272);
      ctx.bezierCurveTo(266, 288, 154, 282, 154, 298);
      ctx.bezierCurveTo(154, 314, 264, 308, 264, 322);
      ctx.bezierCurveTo(264, 334, 174, 332, 156, 324);
      ctx.stroke();

      // 5. Liver (Anatomical Right / Viewer's Left) + Gallbladder
      ctx.fillStyle = isLight ? "rgba(180,62,48,0.42)" : "rgba(224,99,125,0.45)";
      ctx.strokeStyle = sel === "liver" ? gold : rose;
      ctx.lineWidth = sel === "liver" ? 3 : 1.8;
      ctx.beginPath();
      ctx.moveTo(116, 152);
      ctx.bezierCurveTo(148, 134, 198, 142, 212, 158);
      ctx.bezierCurveTo(186, 176, 162, 198, 126, 202);
      ctx.bezierCurveTo(110, 192, 108, 166, 116, 152);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Green Gallbladder tucked under Liver
      ctx.fillStyle = "rgba(86,201,155,0.75)";
      ctx.strokeStyle = mint;
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.ellipse(154, 196, 8, 11, 0.25, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // 6. J-Shaped Stomach (Viewer's Right)
      ctx.fillStyle = isLight ? "rgba(249,115,22,0.34)" : "rgba(251,146,60,0.38)";
      ctx.strokeStyle = sel === "stomach" ? gold : orange;
      ctx.lineWidth = sel === "stomach" ? 3 : 2;
      ctx.beginPath();
      ctx.moveTo(212, 158);
      ctx.bezierCurveTo(264, 148, 294, 180, 276, 212);
      ctx.bezierCurveTo(260, 236, 218, 232, 204, 212);
      ctx.bezierCurveTo(200, 196, 212, 180, 212, 158);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // 7. Leaf-Shaped Pancreas (Tucked below Stomach)
      ctx.fillStyle = isLight ? "rgba(181,132,40,0.42)" : "rgba(223,176,82,0.48)";
      ctx.strokeStyle = sel === "pancreas" ? "#ffffff" : gold;
      ctx.lineWidth = sel === "pancreas" ? 2.6 : 1.5;
      ctx.beginPath();
      ctx.ellipse(226, 228, 32, 9, -0.1, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // 8. Live Glowing Food Bolus Traveling Along Alimentary Canal
      const t = ui.journeyPct / 100;
      const [bx, by] = samplePolyline(TRACT_PATH, t);
      const bolusGlow = ctx.createRadialGradient(bx, by, 2, bx, by, 18);
      bolusGlow.addColorStop(0, "#fef08a");
      bolusGlow.addColorStop(0.55, "rgba(251,191,36,0.55)");
      bolusGlow.addColorStop(1, "rgba(251,191,36,0)");
      ctx.fillStyle = bolusGlow;
      ctx.beginPath();
      ctx.arc(bx, by, 18, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(bx, by, 5, 0, Math.PI * 2);
      ctx.fill();

      // 9. Bottom Live pH Spectrum HUD
      ctx.fillStyle = isLight ? "rgba(15,23,42,0.05)" : "rgba(4,10,20,0.75)";
      ctx.strokeStyle = isLight ? "rgba(15,23,42,0.12)" : "rgba(104,184,230,0.22)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(16, 376, 388, 48, 10);
      ctx.fill();
      ctx.stroke();

      const st =
        dd.journeyStages.find((s) => ui.journeyPct >= s.min && ui.journeyPct < s.max) ||
        dd.journeyStages[0];

      // pH Gradient Bar (Acidic Red -> Neutral Green -> Alkaline Blue)
      const phGrad = ctx.createLinearGradient(28, 0, 392, 0);
      phGrad.addColorStop(0, "#e0637d");
      phGrad.addColorStop(0.5, "#56c99b");
      phGrad.addColorStop(1, "#68b8e6");
      ctx.fillStyle = phGrad;
      ctx.beginPath();
      ctx.roundRect(28, 405, 364, 8, 4);
      ctx.fill();

      // Current pH Marker on Bar (pH 1..10 mapped across bar)
      const phNum = parseFloat(st.ph) || 7;
      const phX = 28 + Math.max(0, Math.min(1, (phNum - 1) / 9)) * 364;
      ctx.fillStyle = "#ffffff";
      ctx.strokeStyle = "#040811";
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.arc(phX, 409, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.font = "700 10.5px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = textCol;
      ctx.textAlign = "left";
      ctx.fillText(`${st.organ} • ${st.juice}`, 28, 395);
      ctx.textAlign = "right";
      ctx.fillText(`pH ${st.ph}`, 392, 395);
      ctx.restore();
    }

    function drawEnzymesView(ctx, isLight, dd) {
      const sel = ui.selectedEnzymeHotspot;
      const cyan = isLight ? "#2c88a8" : "#68b8e6";
      const rose = isLight ? "#c24b65" : "#e0637d";
      const gold = isLight ? "#b58428" : "#dfb052";
      const textCol = isLight ? "#162235" : "#e6effa";

      const cycle = (elapsed * 0.35) % 1; // 0..1 continuous cleavage cycle

      const drawRow = (y, id, title, col, subLabel) => {
        const isSel = sel === id;
        ctx.save();
        ctx.fillStyle = isLight ? "rgba(255,255,255,0.68)" : "rgba(14,24,41,0.74)";
        ctx.strokeStyle = isSel ? col : isLight ? "rgba(30,58,95,0.14)" : "rgba(130,186,230,0.22)";
        ctx.lineWidth = isSel ? 2.4 : 1.2;
        ctx.beginPath();
        ctx.roundRect(18, y, 384, 114, 16);
        ctx.fill();
        ctx.stroke();

        ctx.font = "800 11px 'Plus Jakarta Sans', sans-serif";
        ctx.fillStyle = col;
        ctx.textAlign = "left";
        ctx.fillText(title, 34, y + 22);

        ctx.font = "700 9.5px 'Plus Jakarta Sans', sans-serif";
        ctx.fillStyle = textCol;
        ctx.textAlign = "right";
        ctx.fillText(subLabel, 386, y + 22);
        ctx.restore();
      };

      // ROW 1: CARBOHYDRATES (Starch Chain -> Amylase -> Glucose Rings)
      drawRow(24, "carbs", dd.enzymeHotspots.carbs.name, cyan, "Amylase → Glucose");
      const split1 = Math.max(0, (cycle - 0.35) / 0.65);
      for (let i = 0; i < 6; i++) {
        const x = 114 + i * 24 + split1 * (i * 18);
        if (x > 382) continue;
        ctx.fillStyle = cyan;
        ctx.beginPath();
        ctx.arc(x, 82, 8.5, 0, Math.PI * 2);
        ctx.fill();
        if (split1 < 0.2 && i < 5) {
          ctx.strokeStyle = textCol;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(x + 8, 82);
          ctx.lineTo(x + 16, 82);
          ctx.stroke();
        }
      }

      // ROW 2: PROTEINS (Polypeptide -> Pepsin/Trypsin -> Amino Acids)
      drawRow(156, "proteins", dd.enzymeHotspots.proteins.name, rose, "Pepsin/Trypsin → Amino Acids");
      const split2 = Math.max(0, (cycle - 0.35) / 0.65);
      for (let i = 0; i < 6; i++) {
        const x = 114 + i * 24 + split2 * (i * 18);
        const y = 216 + Math.sin(i * 1.4) * (1 - split2) * 8;
        if (x > 382) continue;
        ctx.fillStyle = rose;
        ctx.beginPath();
        ctx.roundRect(x - 8, y - 8, 16, 16, 4);
        ctx.fill();
      }

      // ROW 3: FATS (Fat Globule -> Bile + Lipase -> Fatty Acids + Glycerol)
      drawRow(288, "fats", dd.enzymeHotspots.fats.name, gold, "Bile + Lipase → Fatty Acids");
      const split3 = Math.max(0, (cycle - 0.35) / 0.65);
      if (split3 < 0.15) {
        ctx.fillStyle = gold;
        ctx.beginPath();
        ctx.arc(176, 348, 22, 0, Math.PI * 2);
        ctx.fill();
      } else {
        for (let i = 0; i < 7; i++) {
          const fx = 136 + i * 36 + split3 * 12;
          const fy = 348 + Math.sin(i * 2.1) * 14;
          if (fx > 382) continue;
          ctx.fillStyle = gold;
          ctx.beginPath();
          ctx.arc(fx, fy, 6, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    function frame(now) {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      elapsed += dt;

      if (ui.autoDigest && ui.view === "tract") {
        ui.journeyPct = (ui.journeyPct + dt * 9.5) % 100;
        if (now - lastMetricTick > 110) {
          lastMetricTick = now;
          updateJourneyMetrics();
        }
      }

      const isLight = BL.getState().theme === "light";
      const dd = getDD();

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform((width / 420) * dpr, 0, 0, (height / 440) * dpr, 0, 0);

      if (ui.view === "tract") {
        drawTractView(ctx, isLight, dd);
      } else {
        drawEnzymesView(ctx, isLight, dd);
      }

      requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
    void ro;
  }

  // =========================================================
  // CANVAS 2: 60 FPS INTESTINAL VILLI ABSORPTION (460x300)
  // =========================================================
  function startVilliCanvas() {
    const canvas = document.getElementById("villi-canvas");
    const box = document.getElementById("villi-canvas-box");
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

    spawnNutrientBurst(18);
    let lastTime = performance.now();
    let spawnTimer = 0;

    function frame(now) {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      if (!ui.villiPaused) {
        spawnTimer += dt;
        if (spawnTimer > 0.5) {
          spawnTimer = 0;
          spawnNutrientBurst(3);
        }
        ui.nutrientParticles.forEach((p) => {
          p.progress += p.speed * dt;
        });
        ui.nutrientParticles = ui.nutrientParticles.filter((p) => p.progress < 1);
      }

      const isLight = BL.getState().theme === "light";
      const dd = getDD();
      const sel = ui.selectedVilliPart;
      const gold = isLight ? "#b58428" : "#fbbf24";
      const rose = isLight ? "#c24b65" : "#e0637d";
      const cyan = isLight ? "#2c88a8" : "#68b8e6";
      const mint = "#56c99b";
      const textCol = isLight ? "#162235" : "#e6effa";

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform((width / 460) * dpr, 0, 0, (height / 300) * dpr, 0, 0);

      // 3 Finger-like Villi Projections (x = 110, 230, 350)
      const villiXs = [110, 230, 350];
      villiXs.forEach((vx) => {
        ctx.save();
        // Outer 1-cell-thick Epithelium Finger
        ctx.fillStyle = isLight ? "rgba(251,146,60,0.16)" : "rgba(251,146,60,0.18)";
        ctx.strokeStyle =
          sel === "folds" || sel === "epithelium" ? gold : "#fb923c";
        ctx.lineWidth = sel === "epithelium" ? 3.4 : 2.2;
        ctx.beginPath();
        ctx.moveTo(vx - 44, 236);
        ctx.lineTo(vx - 36, 118);
        ctx.arc(vx, 118, 36, Math.PI, 0, false);
        ctx.lineTo(vx + 44, 236);
        ctx.stroke();
        ctx.fill();

        // Blood Capillary Arch (Arterial Red -> Venous Blue)
        ctx.strokeStyle = sel === "capillaries" ? gold : rose;
        ctx.lineWidth = sel === "capillaries" ? 4.2 : 2.8;
        ctx.beginPath();
        ctx.moveTo(vx - 18, 236);
        ctx.lineTo(vx - 18, 122);
        ctx.arc(vx, 122, 18, Math.PI, -Math.PI / 2, false);
        ctx.stroke();

        ctx.strokeStyle = sel === "capillaries" ? gold : cyan;
        ctx.beginPath();
        ctx.arc(vx, 122, 18, -Math.PI / 2, 0, false);
        ctx.lineTo(vx + 18, 236);
        ctx.stroke();

        // Central Lacteal (Lymphatic Fat Vessel)
        ctx.fillStyle = sel === "lacteal" ? gold : "rgba(86,201,155,0.45)";
        ctx.strokeStyle = sel === "lacteal" ? gold : mint;
        ctx.lineWidth = sel === "lacteal" ? 2.6 : 1.6;
        ctx.beginPath();
        ctx.roundRect(vx - 6, 116, 12, 120, 6);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      });

      // Flowing Digested Nutrients Entering Capillaries (Glucose/Amino) & Lacteals (Fats)
      ui.nutrientParticles.forEach((p) => {
        const curX = p.x + (p.targetX - p.x) * Math.min(1, p.progress * 1.6);
        const curY = p.y + p.progress * 195;
        ctx.fillStyle =
          p.kind === "glucose" ? cyan : p.kind === "amino" ? rose : mint;
        ctx.beginPath();
        ctx.arc(curX, curY, 4.2, 0, Math.PI * 2);
        ctx.fill();
      });

      // Top Legend
      ctx.font = "700 9.5px 'Plus Jakarta Sans', sans-serif";
      ctx.textAlign = "left";
      ctx.fillStyle = cyan;
      ctx.fillText("● Glucose", 20, 22);
      ctx.fillStyle = rose;
      ctx.fillText("● Amino Acids", 96, 22);
      ctx.fillStyle = mint;
      ctx.fillText("● Fatty Acids (→ Lacteal)", 196, 22);

      // Bottom HUD
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
      ctx.fillText(`🍎 ${dd.villiSec.villiHud}`, 230, 271);

      requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
    void ro;
  }

  // =========================================================
  // CANVAS 3: 60 FPS BILE FAT EMULSIFICATION (460x300)
  // =========================================================
  function startBileCanvas() {
    const canvas = document.getElementById("bile-canvas");
    const box = document.getElementById("bile-canvas-box");
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

      if (!ui.villiPaused && ui.isFlipped) {
        elapsed += dt;
        ui.bileAutoTimer += dt;
        if (ui.bileAutoTimer > 4.0) {
          ui.bileAutoTimer = 0;
          ui.bileStage = (ui.bileStage + 1) % 4;
          renderFlipDetails();
        }
      }

      const isLight = BL.getState().theme === "light";
      const dd = getDD();
      const stage = ui.bileStage; // 0..3
      const gold = "#dfb052";
      const mint = "#56c99b";
      const cyan = "#68b8e6";
      const textCol = isLight ? "#162235" : "#e6effa";

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform((width / 460) * dpr, 0, 0, (height / 300) * dpr, 0, 0);

      // Stage Progress Indicators
      for (let i = 0; i < 4; i++) {
        ctx.fillStyle = i <= stage ? mint : "rgba(148,163,184,0.3)";
        ctx.beginPath();
        ctx.roundRect(142 + i * 46, 24, 36, 6, 3);
        ctx.fill();
      }

      if (stage === 0) {
        // STAGE 1: One Giant Fat Globule
        const g = ctx.createRadialGradient(230, 134, 10, 230, 134, 62);
        g.addColorStop(0, "#fde047");
        g.addColorStop(1, "#ca8a04");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(230, 134, 58 + Math.sin(elapsed * 3) * 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.font = "800 11px 'Plus Jakarta Sans', sans-serif";
        ctx.fillStyle = "#040811";
        ctx.textAlign = "center";
        ctx.fillText("LARGE FAT GLOBULE", 230, 138);
      } else if (stage === 1) {
        // STAGE 2: Green Bile Salts Surrounding & Pinching the Globule
        ctx.fillStyle = gold;
        ctx.beginPath();
        ctx.arc(230, 134, 52, 0, Math.PI * 2);
        ctx.fill();

        for (let i = 0; i < 12; i++) {
          const ang = elapsed * 1.4 + (i / 12) * Math.PI * 2;
          const bx = 230 + Math.cos(ang) * 60;
          const by = 134 + Math.sin(ang) * 60;
          ctx.fillStyle = mint;
          ctx.beginPath();
          ctx.arc(bx, by, 7, 0, Math.PI * 2);
          ctx.fill();
        }
      } else if (stage === 2) {
        // STAGE 3: Emulsified Tiny Fat Droplets Coated in Bile Salts
        for (let i = 0; i < 14; i++) {
          const ang = (i / 14) * Math.PI * 2 + elapsed * 0.4;
          const rad = i % 2 === 0 ? 52 : 84;
          const dx = 230 + Math.cos(ang) * rad;
          const dy = 134 + Math.sin(ang) * (rad * 0.65);
          ctx.fillStyle = gold;
          ctx.strokeStyle = mint;
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.arc(dx, dy, 11, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        }
      } else {
        // STAGE 4: Lipase Cleaving Tiny Droplets into Fatty Acids + Glycerol
        for (let i = 0; i < 16; i++) {
          const ang = (i / 16) * Math.PI * 2 + elapsed * 0.6;
          const rad = 36 + (i % 3) * 34;
          const fx = 230 + Math.cos(ang) * rad * 1.25;
          const fy = 134 + Math.sin(ang) * rad * 0.72;
          ctx.fillStyle = i % 2 === 0 ? cyan : mint;
          ctx.beginPath();
          ctx.arc(fx, fy, 5.5, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.font = "800 12px 'Plus Jakarta Sans', sans-serif";
        ctx.fillStyle = mint;
        ctx.textAlign = "center";
        ctx.fillText("✓ FATTY ACIDS + GLYCEROL", 230, 138);
      }

      // Bottom HUD
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
      ctx.fillText(dd.villiSec.bileHud[stage], 230, 271);

      requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
    void ro;
  }

  // =========================================================
  // BOOTSTRAP & EVENT WIRING
  // =========================================================
  document.addEventListener("DOMContentLoaded", () => {
    const btnTract = document.getElementById("btn-view-tract");
    const btnEnz = document.getElementById("btn-view-enzymes");
    if (btnTract) {
      btnTract.addEventListener("click", () => {
        ui.view = "tract";
        syncDigUI();
      });
    }
    if (btnEnz) {
      btnEnz.addEventListener("click", () => {
        ui.view = "enzymes";
        syncDigUI();
      });
    }

    const btnAuto = document.getElementById("btn-dig-auto");
    if (btnAuto) {
      btnAuto.addEventListener("click", () => {
        ui.autoDigest = !ui.autoDigest;
        syncDigUI();
      });
    }

    const btnPins = document.getElementById("btn-dig-pins");
    if (btnPins) {
      btnPins.addEventListener("click", () => {
        ui.showPins = !ui.showPins;
        syncDigUI();
      });
    }

    const slider = document.getElementById("journey-slider");
    if (slider) {
      slider.addEventListener("input", (e) => {
        ui.autoDigest = false;
        ui.view = "tract";
        ui.journeyPct = Math.max(0, Math.min(100, Number(e.target.value) || 0));
        syncDigUI();
      });
    }

    document.querySelectorAll("[data-journey]").forEach((b) => {
      b.addEventListener("click", () => {
        ui.autoDigest = false;
        ui.view = "tract";
        ui.journeyPct = Number(b.getAttribute("data-journey")) || 10;
        syncDigUI();
      });
    });

    document.querySelectorAll("#dig-reader-panel .tab-btn").forEach((b) => {
      b.addEventListener("click", () => {
        ui.digTab = b.getAttribute("data-dig-tab");
        renderDigReader();
      });
    });

    // Section 2: 3D Flip Card Controls
    const toggleFlip = (force) => {
      ui.isFlipped = typeof force === "boolean" ? force : !ui.isFlipped;
      if (ui.isFlipped) ui.bileAutoTimer = 0;
      syncDigUI();
    };
    const btnFlipMain = document.getElementById("btn-dig-flip-main");
    const btnFlipBile = document.getElementById("btn-flip-to-bile");
    const btnFlipVilli = document.getElementById("btn-flip-to-villi");
    if (btnFlipMain) btnFlipMain.addEventListener("click", () => toggleFlip());
    if (btnFlipBile) btnFlipBile.addEventListener("click", () => toggleFlip(true));
    if (btnFlipVilli) btnFlipVilli.addEventListener("click", () => toggleFlip(false));

    const btnVPause = document.getElementById("btn-villi-pause");
    if (btnVPause) {
      btnVPause.addEventListener("click", () => {
        ui.villiPaused = !ui.villiPaused;
        syncDigUI();
      });
    }

    const btnAbsorb = document.getElementById("btn-absorb-nutrients");
    if (btnAbsorb) {
      btnAbsorb.addEventListener("click", () => {
        ui.villiPaused = false;
        spawnNutrientBurst(14);
      });
    }

    const btnBile = document.getElementById("btn-release-bile");
    if (btnBile) {
      btnBile.addEventListener("click", () => {
        ui.villiPaused = false;
        ui.bileStage = (ui.bileStage + 1) % 4;
        ui.bileAutoTimer = 0;
        renderFlipDetails();
      });
    }

    document.querySelectorAll("#vb-reader-panel .tab-btn").forEach((b) => {
      b.addEventListener("click", () => {
        ui.vbTab = b.getAttribute("data-vb-tab");
        renderVBReader();
      });
    });

    syncDigUI();
    BL.subscribe(syncDigUI);

    startDigCanvas();
    startVilliCanvas();
    startBileCanvas();
  });
})();