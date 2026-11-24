(function () {
  const BL = window.BioLume;
  if (!BL) return;

  // =========================================================
  // TRILINGUAL CLASS 9–10 ENDOCRINE SYSTEM DICTIONARY (EN/HI/BN)
  // =========================================================
  const ENDO_DICT = {
    en: {
      chapterBadge: "Chapter 08 • Class 9–10 Lab",
      title: "Human Endocrine System — Live Lab",
      subtitle:
        "Tap any of the 9 endocrine glands to trace hormone delivery, or trigger the Adrenaline Fight-or-Flight simulator",
      views: {
        glands: "9 Endocrine Glands",
        adrenaline: "Adrenaline Fight-or-Flight",
      },
      sexLabels: {
        male: "Male (Testes)",
        female: "Female (Ovaries)",
      },
      toggles: {
        pause: "Pause",
        play: "Resume",
        pins: "Hotspot Pins",
      },
      metrics: {
        gland: "Active Gland",
        hormone: "Key Hormone",
        target: "Target Organ",
        stress: "Adrenaline",
        calm: "Calm (Baseline)",
        alert: "Alert",
        danger: "High Surge",
        flight: "Fight-or-Flight!",
      },
      stressControl: "Stress & Adrenaline Response Level",
      presets: {
        calm: "Calm (Rest)",
        exam: "Exam Alert",
        danger: "Sudden Danger",
        flight: "Fight-or-Flight!",
      },
      tabs: {
        inspect: "9 Glands Guide",
        lesson: "Class 9–10 Lesson",
        quiz: "Quick Check",
      },
      selectPrompt:
        "Tap any of the 9 glowing glands below (or on the body) to watch its hormone travel through the bloodstream to its target organ.",
      glands: {
        hypothalamus: {
          name: "1. Hypothalamus",
          en: "Neuro-Endocrine Bridge",
          hormone: "Releasing Hormones",
          target: "Pituitary Gland",
          location: "Base of Forebrain",
          summary:
            "The bridge between your Nervous System and Endocrine System. It monitors body temperature, hunger, and stress, then sends 'Releasing' or 'Inhibiting' hormones to tell the Pituitary Gland when to act.",
          keyFact:
            "If the Pituitary is the 'Master Gland', the Hypothalamus is the 'Master of the Master Gland'!",
        },
        pituitary: {
          name: "2. Pituitary Gland",
          en: "The Master Gland",
          hormone: "Growth Hormone (GH), TSH",
          target: "Bones & Other Glands",
          location: "Pea-sized, below Hypothalamus",
          summary:
            "A pea-sized powerhouse called the Master Gland because its hormones regulate almost every other endocrine gland (Thyroid, Adrenals, Gonads). It also secretes Growth Hormone (GH) controlling height and bone growth.",
          keyFact:
            "Disorders: Too little GH in childhood causes Dwarfism; too much GH causes Gigantism.",
        },
        pineal: {
          name: "3. Pineal Gland",
          en: "Biological Clock",
          hormone: "Melatonin",
          target: "Brain Sleep Centers",
          location: "Deep center of Brain",
          summary:
            "A tiny pinecone-shaped gland deep inside the brain that secretes Melatonin in response to darkness, controlling your daily sleep–wake rhythm (Circadian Rhythm).",
          keyFact:
            "Bright blue phone screens at night trick the Pineal gland into slowing Melatonin, making it harder to fall asleep!",
        },
        thyroid: {
          name: "4. Thyroid Gland",
          en: "Metabolism Regulator",
          hormone: "Thyroxine (T₄)",
          target: "All Body Cells",
          location: "Butterfly-shaped in Neck",
          summary:
            "A butterfly-shaped gland wrapped around the windpipe (trachea). It uses dietary Iodine to produce Thyroxine, which regulates carbohydrate, protein, and fat metabolism for balanced energy and growth.",
          keyFact:
            "Exam favorite: Lack of Iodine in food prevents Thyroxine production and causes the neck to swell—a deficiency disease called Goitre!",
        },
        parathyroid: {
          name: "5. Parathyroid Glands",
          en: "Calcium Balancers",
          hormone: "Parathormone (PTH)",
          target: "Bones & Kidneys",
          location: "4 tiny dots behind Thyroid",
          summary:
            "Four rice-grain-sized glands embedded on the back surface of the Thyroid. They secrete Parathormone (PTH) to keep Blood Calcium (Ca²⁺) and Phosphate levels perfectly balanced for strong bones, nerves, and muscle contraction.",
          keyFact:
            "When blood calcium drops, PTH signals bones to release calcium and kidneys to conserve it.",
        },
        thymus: {
          name: "6. Thymus Gland",
          en: "Immune Training School",
          hormone: "Thymosin",
          target: "White Blood Cells (T-Cells)",
          location: "Upper Chest (behind Sternum)",
          summary:
            "A bilobed gland sitting just above the heart. It secretes Thymosin, which trains immature White Blood Cells into infection-fighting T-Lymphocytes during childhood and youth.",
          keyFact:
            "Unique trait: The Thymus is large in children and gradually shrinks in old age, explaining why immunity weakens in elderly people.",
        },
        adrenal: {
          name: "7. Adrenal Glands",
          en: "Emergency Action Caps",
          hormone: "Adrenaline (Epinephrine)",
          target: "Heart, Lungs & Muscles",
          location: "Triangular caps on Kidneys",
          summary:
            "Two triangular glands perched on top of both kidneys. During fear, anger, or sudden danger, they flood the bloodstream with Adrenaline—the 'Fight-or-Flight' hormone.",
          keyFact:
            "Adrenaline speeds up heartbeat, widens lung airways for extra O₂, raises blood sugar, and diverts blood to leg muscles so you can run or react instantly!",
        },
        pancreas: {
          name: "8. Pancreas (Dual Gland)",
          en: "Blood Sugar Controller",
          hormone: "Insulin & Glucagon",
          target: "Liver & Body Cells",
          location: "Behind & below Stomach",
          summary:
            "A leaf-shaped heterocrine (dual) gland: its exocrine part makes digestive enzymes, while special cell clusters called Islets of Langerhans act as an endocrine gland—Beta cells secrete Insulin (lowers blood sugar) and Alpha cells secrete Glucagon (raises blood sugar).",
          keyFact:
            "Disorder: Insufficient Insulin causes high blood sugar—Diabetes Mellitus (treated with healthy diet or Insulin injections).",
        },
        gonads: {
          name: "9. Gonads (Testes / Ovaries)",
          en: "Puberty & Reproduction",
          hormone: "Testosterone / Estrogen",
          target: "Reproductive Organs & Body",
          location: "Pelvic Region / Scrotum",
          summary:
            "In Males, Testes secrete Testosterone (sperm production, deep voice, facial hair, muscle growth). In Females, Ovaries secrete Estrogen & Progesterone (egg maturation, menstrual cycle, pregnancy support).",
          keyFact:
            "Triggered at puberty by Pituitary hormones (FSH & LH) to develop secondary sexual characteristics.",
        },
      },
      adrenalineHotspots: {
        adrenalSource: {
          name: "Adrenal Glands (Trigger)",
          en: "Instant Adrenaline Surge",
          hormone: "Adrenaline",
          target: "Whole Bloodstream",
          summary:
            "The brain detects sudden danger (like a stray dog chasing you or a loud crash) and signals the Adrenal Glands to pour Adrenaline straight into the blood within seconds.",
          keyFact: "Because Adrenaline travels via blood, it activates multiple organs simultaneously!",
        },
        heartBoost: {
          name: "Heart Rate Surges",
          en: "Pumps Faster (72 → 160 BPM)",
          hormone: "Adrenaline",
          target: "Cardiac Muscle",
          summary:
            "Adrenaline forces the heart to beat faster and stronger, pushing oxygen-rich blood rapidly to skeletal muscles while reducing blood flow to the digestive system.",
          keyFact: "That pounding chest you feel before an exam or race is Adrenaline in action.",
        },
        lungBoost: {
          name: "Breathing Deepens",
          en: "Bronchioles Dilate",
          hormone: "Adrenaline",
          target: "Lungs & Diaphragm",
          summary:
            "Diaphragm and rib muscles contract faster while lung airways widen, flooding the blood with maximum Oxygen for rapid ATP energy production.",
          keyFact: "More O₂ + more Glucose = instant burst of muscle power.",
        },
        muscleBoost: {
          name: "Liver & Leg Muscles",
          en: "Glucose Release + Power",
          hormone: "Adrenaline",
          target: "Liver & Skeletal Muscles",
          summary:
            "The Liver rapidly converts stored Glycogen into Glucose and releases it into the blood, fueling your arm and leg muscles to fight or sprint away safely.",
          keyFact: "Once danger passes, adrenaline clears and your body returns to calm resting mode.",
        },
      },
      lesson: {
        heading: "Class 9–10 Lesson Plan: Human Endocrine System",
        sections: [
          {
            title: "1. Endocrine (Ductless) vs. Exocrine Glands",
            html: `<p>• <strong>Endocrine Glands (Ductless):</strong> Have NO ducts—they pour chemical messengers called <strong>Hormones</strong> directly into the <strong>bloodstream</strong>, which carries them to specific target organs (e.g., Pituitary, Thyroid, Adrenal).<br/>
            • <strong>Exocrine Glands:</strong> Have ducts that carry secretions to a specific surface or cavity (e.g., Salivary glands, Sweat glands).<br/>
            • <strong>Heterocrine (Dual) Gland:</strong> The <strong>Pancreas</strong> acts as BOTH exocrine (digestive juice) and endocrine (Insulin &amp; Glucagon)!</p>`,
          },
          {
            title: "2. Board-Exam Master Table (Gland → Hormone → Disorder)",
            html: `<div class="detail-fact" style="margin-top:4px">• <strong>Pituitary (Master Gland):</strong> Growth Hormone → <em>Dwarfism / Gigantism</em>.<br/>
            • <strong>Thyroid (Neck):</strong> Thyroxine (needs Iodine) → <em>Goitre</em>.<br/>
            • <strong>Pancreas (Islets of Langerhans):</strong> Insulin &amp; Glucagon → <em>Diabetes Mellitus</em>.<br/>
            • <strong>Adrenal (Above Kidneys):</strong> Adrenaline → <em>Fight-or-Flight emergency response</em>.<br/>
            • <strong>Testes / Ovaries:</strong> Testosterone / Estrogen &amp; Progesterone → <em>Puberty &amp; Reproduction</em>.</div>`,
          },
          {
            title: "3. Nervous Control vs. Hormonal Control",
            html: `<p>• <strong>Nervous System:</strong> Fast electrical impulses along nerves; short-lived, localized effect.<br/>
            • <strong>Endocrine System:</strong> Slower chemical hormones traveling via blood; longer-lasting, widespread effect across the body.</p>`,
          },
        ],
      },
      quiz: {
        title: "Endocrine Glands Quick Check",
        correctMsg: "Spot on! Crystal clear concept.",
        wrongMsg: "Not quite — review the explanation below.",
        nextBtn: "Next Question",
        restartBtn: "Restart Quiz",
        scoreLabel: "Score",
        questions: [
          {
            q: "Why is the Pituitary Gland called the 'Master Gland' of the human body?",
            options: [
              "It is the largest organ in the body",
              "Its hormones regulate the activity of almost all other endocrine glands",
              "It digests food in the stomach",
              "It filters urine from blood",
            ],
            answer: 1,
            explain: "Pituitary hormones (like TSH, ACTH, FSH, LH) control the Thyroid, Adrenals, and Gonads, while GH controls body growth.",
          },
          {
            q: "Why is the use of iodised salt strongly advised in our daily diet?",
            options: [
              "Iodine helps the Pancreas make Insulin",
              "Iodine is essential for the Thyroid gland to make Thyroxine and prevent Goitre",
              "Iodine digests starch in the mouth",
              "Iodine produces red blood cells",
            ],
            answer: 1,
            explain: "Without Iodine, the Thyroid cannot synthesize Thyroxine and swells into a Goitre.",
          },
          {
            q: "Which hormone is secreted directly into the blood during sudden fear or danger ('Fight-or-Flight')?",
            options: ["Insulin", "Melatonin", "Adrenaline", "Thymosin"],
            answer: 2,
            explain: "Adrenaline from the Adrenal glands accelerates heart rate, breathing, and muscle blood flow during emergencies.",
          },
          {
            q: "Which gland acts as BOTH an Exocrine gland (digestive enzymes) and an Endocrine gland (Insulin & Glucagon)?",
            options: ["Thyroid Gland", "Pancreas", "Pineal Gland", "Parathyroid Gland"],
            answer: 1,
            explain: "The Pancreas is a dual (heterocrine) gland: acinar cells make pancreatic juice, while Islets of Langerhans secrete Insulin & Glucagon.",
          },
          {
            q: "Which tiny gland in the brain secretes Melatonin to regulate your sleep–wake biological clock?",
            options: ["Pineal Gland", "Thymus Gland", "Adrenal Gland", "Parathyroid Gland"],
            answer: 0,
            explain: "The Pineal gland releases Melatonin in darkness to promote restful sleep.",
          },
        ],
      },

      // =========================================================
      // SECTION 2: 3D FLIPPABLE PANCREAS <-> THYROID FEEDBACK LAB
      // =========================================================
      fbSec: {
        title: "Pancreas Sugar Balance & Thyroid Feedback — 3D Flippable Lab",
        subtitle:
          "Front side: Detailed Pancreas (Islets of Langerhans) Insulin vs. Glucagon • Flip the card for Pituitary–Thyroid Feedback & Goitre",
        flipMain: "Flip Card: Pancreas Sugar ↔ Thyroid Goitre",
        frontBadge: "FRONT • PANCREAS (ISLETS OF LANGERHANS) & BLOOD SUGAR",
        flipToThyroid: "Flip to Thyroid & Goitre Loop",
        eatBtn: "Eat Sweet Meal (Insulin)",
        fastBtn: "Exercise / Fast (Glucagon)",
        pancreasPrompt:
          "Tap any part of the Pancreas below to see how Beta & Alpha cells keep blood sugar balanced:",
        backBadge: "BACK • PITUITARY–THYROID FEEDBACK & GOITRE",
        flipToPancreas: "Flip Back to Pancreas Lab",
        iodineOnBtn: "Simulate Iodine Deficiency (Trigger Goitre!)",
        iodineOffBtn: "Restore Iodised Salt (Heal Thyroid Loop)",
        thyroidPrompt:
          "Understand how Negative Feedback works like a thermostat—and why lack of Iodine causes Goitre:",
        lessonTab: "Feedback Loop & Hormonal Disorders (Class 9–10)",
        quizTab: "Pancreas & Thyroid Quiz",
        analogyLabel: "Easy Analogy",
        pancreasHud: {
          balanced: "BLOOD SUGAR NORMAL (~95 mg/dL) • Pancreas Monitoring Smoothly",
          high: "HIGH SUGAR! Beta (β) Cells release INSULIN → Liver stores Glucose as Glycogen",
          low: "LOW SUGAR! Alpha (α) Cells release GLUCAGON → Liver releases stored Glucose",
        },
        thyroidHud: {
          normal: "NEGATIVE FEEDBACK OK: Iodine + TSH → Thyroxine → Tells Pituitary 'Enough!'",
          goitre: "NO IODINE! No Thyroxine → Pituitary floods TSH → Thyroid Swells (GOITRE!)",
        },
      },
      pancreasParts: {
        anatomy: {
          name: "Pancreas Head, Body & Tail",
          en: "Dual (Heterocrine) Gland",
          role: "Nestled in Duodenum Curve",
          analogy: "Like a two-in-one factory: one wing sends digestive juice through a pipe (duct), while tiny islands ship hormones straight into blood!",
          summary:
            "The Pancreas has a rounded Head tucked inside the C-shaped Duodenum, a horizontal Body, and a tapered Tail. Its main pancreatic duct carries digestive enzymes (exocrine), while embedded Islets of Langerhans release hormones directly into capillaries (endocrine).",
        },
        betaCells: {
          name: "Beta (β) Cells → Insulin",
          en: "Lowers High Blood Sugar",
          role: "Glucose → Stored Glycogen",
          analogy: "Insulin acts like a tiny key unlocking cell doors so extra sugar in your blood can safely move inside for storage!",
          summary:
            "After a sweet or carb-rich meal, blood glucose rises. Beta cells inside the Islets of Langerhans detect this spike and release Insulin, signaling Liver and muscle cells to absorb glucose and store it as Glycogen.",
        },
        alphaCells: {
          name: "Alpha (α) Cells → Glucagon",
          en: "Raises Low Blood Sugar",
          role: "Stored Glycogen → Glucose",
          analogy: "When your fuel gauge drops during fasting or sports, Glucagon unlocks the Liver's emergency sugar pantry!",
          summary:
            "Between meals or during heavy exercise, blood glucose falls. Alpha cells inside the Islets of Langerhans release Glucagon, prompting the Liver to break stored Glycogen back into Glucose.",
        },
        diabetes: {
          name: "Diabetes Mellitus",
          en: "Insulin Deficiency Disorder",
          role: "Why Sugar Stays High",
          analogy: "Without enough Insulin keys, sugar stays locked outside cells and piles up inside the bloodstream.",
          summary:
            "When Beta cells fail to produce enough Insulin (or cells ignore it), blood glucose stays dangerously high and spills into urine. Doctors manage severe cases with controlled diet, exercise, and Insulin injections.",
        },
      },
      thyroidSteps: {
        tsh: {
          name: "1. Pituitary Releases TSH",
          en: "Thyroid Stimulating Hormone",
          role: "The Thermostat Command",
          analogy: "Like a smart room thermostat turning on the heater when the room gets too chilly.",
          summary:
            "When Thyroxine levels in the blood dip slightly, the Pituitary Gland releases TSH (Thyroid Stimulating Hormone) into the bloodstream to stimulate the Thyroid.",
        },
        iodine: {
          name: "2. Thyroid + Iodine → Thyroxine",
          en: "Iodine Is the Raw Material",
          role: "Metabolism Hormone Made",
          analogy: "Even with the factory running full speed, a car plant cannot build cars without steel—Thyroid cannot build Thyroxine without Iodine!",
          summary:
            "The butterfly-shaped Thyroid absorbs Iodine from your diet (iodised salt, seafood) and combines it with amino acids to manufacture Thyroxine (T₄).",
        },
        feedback: {
          name: "3. Negative Feedback Loop",
          en: "Automatic Self-Regulation",
          role: "Stops Over-Production",
          analogy: "Once the room reaches 24 °C, the thermostat automatically clicks OFF so it never overheats.",
          summary:
            "As Thyroxine rises back to the healthy level in the blood, it sends a 'Negative Feedback' signal back to the Pituitary to slow down TSH secretion—keeping hormones in exact balance.",
        },
        goitre: {
          name: "4. Iodine Deficiency → Goitre",
          en: "Swollen Neck Gland",
          role: "Broken Feedback Loop",
          analogy: "Because no Thyroxine comes back to say 'Stop!', the Pituitary keeps shouting TSH nonstop—forcing the Thyroid to grow huge!",
          summary:
            "If diet lacks Iodine, Thyroxine cannot be made. With zero negative feedback, the Pituitary keeps pumping excess TSH, causing Thyroid cells to multiply and swell visibly in the neck (Goitre).",
        },
      },
      fbLesson: {
        heading: "Class 9–10 Master Notes: Feedback Mechanism & Hormonal Disorders",
        sections: [
          {
            title: "1. What Is a Feedback Mechanism? (Guaranteed Board Question)",
            html: `<p>Hormones must be secreted in <strong>exact quantities</strong> at the <strong>exact right time</strong>. A <strong>Feedback Mechanism</strong> automatically regulates hormone release based on the body's current level:</p>
            <div class="detail-fact" style="margin-top:6px"><strong>Example (Blood Sugar):</strong> High Blood Sugar → Detected by Pancreas → <strong>More Insulin</strong> released → Sugar drops to normal → Pancreas automatically <strong>reduces Insulin</strong> secretion!</div>`,
          },
          {
            title: "2. Why Are Some Diabetic Patients Given Insulin Injections?",
            html: `<p>In Diabetes Mellitus, the Pancreas fails to produce enough <strong>Insulin</strong>, so blood sugar rises abnormally and harms organs. Injecting Insulin helps body cells and the liver absorb excess glucose from the blood, bringing sugar back to safe levels.</p>`,
          },
        ],
      },
      fbQuiz: {
        title: "Pancreas & Thyroid Quiz",
        correctMsg: "Brilliant! Full marks on this topic.",
        wrongMsg: "Not quite — read the explanation below.",
        nextBtn: "Next Question",
        restartBtn: "Restart Quiz",
        scoreLabel: "Score",
        questions: [
          {
            q: "Which specialized cell clusters inside the Pancreas secrete Insulin and Glucagon?",
            options: ["Alveoli", "Islets of Langerhans", "Nephrons", "Villi"],
            answer: 1,
            explain: "Islets of Langerhans contain Beta cells (Insulin) and Alpha cells (Glucagon) that regulate blood sugar.",
          },
          {
            q: "After eating a sweet dessert, which hormone is released to lower blood glucose by storing it as Glycogen?",
            options: ["Glucagon", "Insulin", "Adrenaline", "Melatonin"],
            answer: 1,
            explain: "Beta cells release Insulin when blood sugar rises, signaling liver and body cells to absorb glucose.",
          },
          {
            q: "What causes the Thyroid gland to swell into a Goitre when Iodine is missing from the diet?",
            options: [
              "Too much Insulin",
              "Lack of Thyroxine removes negative feedback, so the Pituitary keeps sending excess TSH",
              "Too much Melatonin",
              "Blocked salivary ducts",
            ],
            answer: 1,
            explain: "Without Iodine, no Thyroxine is made; continuous TSH stimulation from the Pituitary enlarges the Thyroid gland.",
          },
          {
            q: "The automatic process that controls the timing and exact amount of hormone released is called:",
            options: ["Peristalsis", "Feedback Mechanism", "Emulsification", "Reflex Arc"],
            answer: 1,
            explain: "Feedback mechanisms (like blood sugar controlling Insulin) prevent over- or under-secretion of hormones.",
          },
        ],
      },
    },

    hi: {
      chapterBadge: "अध्याय 08 • कक्षा 9–10 लैब",
      title: "मानव अंतःस्रावी तंत्र — लाइव लैब",
      subtitle:
        "रक्त में हार्मोन प्रवाह देखने के लिए 9 अंतःस्रावी ग्रंथियों में से किसी पर टैप करें, या एड्रेनालिन सिम्युलेटर चलाएँ",
      views: {
        glands: "9 अंतःस्रावी ग्रंथियाँ",
        adrenaline: "एड्रेनालिन (आपातकालीन)",
      },
      sexLabels: {
        male: "पुरुष (वृषण)",
        female: "महिला (अंडाशय)",
      },
      toggles: {
        pause: "रोकें",
        play: "चलाएँ",
        pins: "हॉटस्पॉट पिन",
      },
      metrics: {
        gland: "सक्रिय ग्रंथि",
        hormone: "प्रमुख हार्मोन",
        target: "लक्ष्य अंग",
        stress: "एड्रेनालिन",
        calm: "शांत (सामान्य)",
        alert: "सतर्क",
        danger: "उच्च स्राव",
        flight: "लड़ो या भागो!",
      },
      stressControl: "तनाव व एड्रेनालिन प्रतिक्रिया स्तर",
      presets: {
        calm: "शांत (विश्राम)",
        exam: "परीक्षा सतर्कता",
        danger: "अचानक खतरा",
        flight: "लड़ो या भागो!",
      },
      tabs: {
        inspect: "9 ग्रंथियाँ गाइड",
        lesson: "कक्षा 9–10 पाठ",
        quiz: "त्वरित जाँच",
      },
      selectPrompt:
        "हार्मोन रक्त से लक्ष्य अंग तक कैसे पहुँचता है, देखने के लिए किसी भी ग्रंथि पर टैप करें।",
      glands: {
        hypothalamus: {
          name: "1. हाइपोथैलेमस",
          en: "Hypothalamus",
          hormone: "मोचक हार्मोन (Releasing)",
          target: "पीयूष ग्रंथि",
          location: "अग्रमस्तिष्क का आधार",
          summary: "तंत्रिका तंत्र और अंतःस्रावी तंत्र के बीच का सेतु। यह पीयूष ग्रंथि को हार्मोन छोड़ने या रोकने का आदेश देता है।",
          keyFact: "इसे 'मास्टर ऑफ मास्टर ग्लैंड' (सर्वोच्च नियंत्रक) कहा जाता है!",
        },
        pituitary: {
          name: "2. पीयूष ग्रंथि (मास्टर)",
          en: "Pituitary Gland",
          hormone: "वृद्धि हार्मोन (GH), TSH",
          target: "अस्थियाँ व अन्य ग्रंथियाँ",
          location: "मस्तिष्क के नीचे (मटर के आकार की)",
          summary: "इसे 'मास्टर ग्रंथि' कहते हैं क्योंकि यह अन्य ग्रंथियों को नियंत्रित करती है तथा शरीर की लंबाई बढ़ाने वाला वृद्धि हार्मोन (GH) स्रावित करती है।",
          keyFact: "बचपन में GH की कमी से बौनापन (Dwarfism) और अधिकता से महाकायता (Gigantism) होती है।",
        },
        pineal: {
          name: "3. पीनियल ग्रंथि",
          en: "Pineal Gland",
          hormone: "मेलाटोनिन (Melatonin)",
          target: "मस्तिष्क निद्रा केंद्र",
          location: "मस्तिष्क के भीतर",
          summary: "अंधेरे में मेलाटोनिन हार्मोन स्रावित कर शरीर की जैविक घड़ी और नींद-जागने का चक्र नियंत्रित करती है।",
          keyFact: "रात में मोबाइल की तेज़ रोशनी मेलाटोनिन को कम कर नींद खराब करती है।",
        },
        thyroid: {
          name: "4. थायरॉइड (अवटु) ग्रंथि",
          en: "Thyroid Gland",
          hormone: "थायरॉक्सिन (Thyroxine)",
          target: "सभी शरीर कोशिकाएँ",
          location: "गले में (तितली के आकार की)",
          summary: "आयोडीन की मदद से थायरॉक्सिन बनाती है जो कार्बोहाइड्रेट, प्रोटीन और वसा के उपापचय (Metabolism) को नियंत्रित करता है।",
          keyFact: "आयोडीन की कमी से गला फूल जाता है—जिसे घेंघा (Goitre) रोग कहते हैं!",
        },
        parathyroid: {
          name: "5. पैराथायरॉइड ग्रंथियाँ",
          en: "Parathyroid Glands",
          hormone: "पैराथॉर्मोन (PTH)",
          target: "अस्थियाँ व वृक्क",
          location: "थायरॉइड के पीछे 4 बिंदु",
          summary: "रक्त में कैल्शियम (Ca²⁺) और फॉस्फेट के संतुलन को बनाए रखती हैं।",
          keyFact: "हड्डियों, नसों और पेशियों के सही काम के लिए रक्त कैल्शियम आवश्यक है।",
        },
        thymus: {
          name: "6. थाइमस ग्रंथि",
          en: "Thymus Gland",
          hormone: "थाइमोसिन (Thymosin)",
          target: "श्वेत रक्त कोशिकाएँ (T-Cells)",
          location: "ऊपरी छाती (हृदय के ऊपर)",
          summary: "थाइमोसिन हार्मोन बनाकर T-लिम्फोसाइट (प्रतिरक्षा कोशिकाओं) को प्रशिक्षित करती है।",
          keyFact: "बढ़ती उम्र के साथ यह सिकुड़ जाती है, इसलिए बुजुर्गों में प्रतिरक्षा कम हो जाती है।",
        },
        adrenal: {
          name: "7. अधिवृक्क (Adrenal) ग्रंथि",
          en: "Adrenal Glands",
          hormone: "एड्रेनालिन (Adrenaline)",
          target: "हृदय, फेफड़े व पेशियाँ",
          location: "दोनों किडनी के ऊपर",
          summary: "भय, क्रोध या अचानक खतरे में 'लड़ो या भागो' (Fight-or-Flight) हार्मोन एड्रेनालिन को सीधे रक्त में छोड़ती है।",
          keyFact: "इससे हृदय गति व श्वास तेज़ होती है और पैरों की पेशियों को अधिक रक्त मिलता है।",
        },
        pancreas: {
          name: "8. अग्न्याशय (मिश्रित ग्रंथि)",
          en: "Pancreas (Dual Gland)",
          hormone: "इंसुलिन व ग्लूकागॉन",
          target: "यकृत व शरीर कोशिकाएँ",
          location: "आमाशय के ठीक नीचे",
          summary: "इसके लैंगरहैंस की द्वीपिकाओं की बीटा कोशिकाएँ इंसुलिन (शुगर घटाती है) और अल्फा कोशिकाएँ ग्लूकागॉन (शुगर बढ़ाती है) बनाती हैं।",
          keyFact: "इंसुलिन की कमी से रक्त शर्करा बढ़ जाती है—इसे मधुमेह (Diabetes) कहते हैं।",
        },
        gonads: {
          name: "9. जनन ग्रंथियाँ (वृषण / अंडाशय)",
          en: "Testes / Ovaries",
          hormone: "टेस्टोस्टेरोन / एस्ट्रोजन",
          target: "प्रजनन अंग व शरीर",
          location: "श्रोणि क्षेत्र / वृषणकोष",
          summary: "पुरुषों में वृषण टेस्टोस्टेरोन और महिलाओं में अंडाशय एस्ट्रोजन व प्रोजेस्टेरोन स्रावित कर यौवनारंभ और प्रजनन नियंत्रित करते हैं।",
          keyFact: "किशोरावस्था में द्वितीयक लैंगिक लक्षणों का विकास इन्हीं हार्मोनों से होता है।",
        },
      },
      adrenalineHotspots: {
        adrenalSource: {
          name: "अधिवृक्क ग्रंथि (स्रोत)",
          en: "Adrenal Trigger",
          hormone: "एड्रेनालिन",
          target: "पूरा रक्त प्रवाह",
          summary: "अचानक खतरा दिखते ही मस्तिष्क के संकेत से अधिवृक्क ग्रंथियाँ रक्त में एड्रेनालिन छोड़ देती हैं।",
          keyFact: "यह सेकंडों में पूरे शरीर को आपातकाल के लिए तैयार कर देता है।",
        },
        heartBoost: {
          name: "हृदय गति में उछाल",
          en: "72 → 160 BPM",
          hormone: "एड्रेनालिन",
          target: "हृदय पेशी",
          summary: "हृदय तेज़ी से धड़ककर पेशियों को अधिक ऑक्सीजनयुक्त रक्त पहुँचाता है।",
          keyFact: "डर या दौड़ से पहले सीने में तेज़ धड़कन इसी का असर है।",
        },
        lungBoost: {
          name: "तेज़ व गहरी श्वास",
          en: "अधिक ऑक्सीजन",
          hormone: "एड्रेनालिन",
          target: "फेफड़े व डायाफ्राम",
          summary: "श्वसन दर बढ़ जाती है और श्वसनिकाएँ चौड़ी होकर भरपूर O₂ खींचती हैं।",
          keyFact: "अधिक O₂ से पेशियों में तुरंत ऊर्जा बनती है।",
        },
        muscleBoost: {
          name: "यकृत व पैर की पेशियाँ",
          en: "ग्लूकोज़ + शक्ति",
          hormone: "एड्रेनालिन",
          target: "यकृत व कंकाल पेशी",
          summary: "यकृत संचित ग्लाइकोजन से ग्लूकोज़ रक्त में छोड़ता है ताकि पेशियाँ तेज़ी से दौड़ सकें।",
          keyFact: "खतरा टलने पर शरीर पुनः सामान्य हो जाता है।",
        },
      },
      lesson: {
        heading: "कक्षा 9–10 पाठ योजना: मानव अंतःस्रावी तंत्र",
        sections: [
          {
            title: "1. अंतःस्रावी (नलिकाविहीन) बनाम बहिःस्रावी ग्रंथियाँ",
            html: `<p>• <strong>अंतःस्रावी ग्रंथियाँ:</strong> इनमें नलिकाएँ नहीं होतीं—हार्मोन सीधे <strong>रक्त</strong> में छोड़े जाते हैं।<br/>• <strong>मिश्रित ग्रंथि:</strong> <strong>अग्न्याशय (Pancreas)</strong> पाचक एंजाइम और हार्मोन दोनों बनाता है।</p>`,
          },
          {
            title: "2. बोर्ड परीक्षा सारणी (ग्रंथि → हार्मोन → रोग)",
            html: `<div class="detail-fact" style="margin-top:4px">• <strong>पीयूष (मास्टर):</strong> वृद्धि हार्मोन → <em>बौनापन / महाकायता</em>।<br/>• <strong>थायरॉइड:</strong> थायरॉक्सिन (आयोडीन) → <em>घेंघा (Goitre)</em>।<br/>• <strong>अग्न्याशय:</strong> इंसुलिन → <em>मधुमेह (Diabetes)</em>।<br/>• <strong>अधिवृक्क:</strong> एड्रेनालिन → <em>आपातकालीन प्रतिक्रिया</em>।</div>`,
          },
          {
            title: "3. तंत्रिका बनाम हार्मोन नियंत्रण",
            html: `<p>तंत्रिका संकेत बिजली जैसे तेज़ व क्षणिक होते हैं; हार्मोन रक्त से धीमे चलते हैं पर इनका प्रभाव लंबे समय तक और पूरे शरीर पर होता है।</p>`,
          },
        ],
      },
      quiz: {
        title: "अंतःस्रावी तंत्र त्वरित जाँच",
        correctMsg: "बिल्कुल सही! सटीक उत्तर।",
        wrongMsg: "सही नहीं — नीचे स्पष्टीकरण पढ़ें।",
        nextBtn: "अगला प्रश्न",
        restartBtn: "फिर से शुरू करें",
        scoreLabel: "स्कोर",
        questions: [
          {
            q: "पीयूष ग्रंथि (Pituitary) को 'मास्टर ग्रंथि' क्यों कहा जाता है?",
            options: ["यह सबसे बड़ा अंग है", "इसके हार्मोन लगभग सभी अन्य अंतःस्रावी ग्रंथियों को नियंत्रित करते हैं", "यह भोजन पचाती है", "यह मूत्र छानती है"],
            answer: 1,
            explain: "पीयूष ग्रंथि थायरॉइड, अधिवृक्क व जनन ग्रंथियों के कार्य को नियंत्रित करती है।",
          },
          {
            q: "दैनिक आहार में आयोडीनयुक्त नमक की सलाह क्यों दी जाती है?",
            options: ["इंसुलिन बनाने के लिए", "थायरॉइड द्वारा थायरॉक्सिन बनाने और घेंघा रोकने के लिए", "स्टार्च पचाने के लिए", "RBC बनाने के लिए"],
            answer: 1,
            explain: "आयोडीन की कमी से थायरॉक्सिन नहीं बनता और घेंघा (Goitre) हो जाता है।",
          },
          {
            q: "अचानक भय या खतरे के समय कौन-सा 'लड़ो या भागो' हार्मोन रक्त में स्रावित होता है?",
            options: ["इंसुलिन", "मेलाटोनिन", "एड्रेनालिन", "थाइमोसिन"],
            answer: 2,
            explain: "अधिवृक्क ग्रंथि से निकला एड्रेनालिन शरीर को आपातकाल के लिए तैयार करता है।",
          },
          {
            q: "कौन-सी ग्रंथि बहिःस्रावी (एंजाइम) और अंतःस्रावी (इंसुलिन) दोनों का कार्य करती है?",
            options: ["थायरॉइड", "अग्न्याशय (Pancreas)", "पीनियल", "पैराथायरॉइड"],
            answer: 1,
            explain: "अग्न्याशय एक मिश्रित (Heterocrine) ग्रंथि है।",
          },
          {
            q: "मस्तिष्क की कौन-सी ग्रंथि मेलाटोनिन स्रावित कर नींद चक्र नियंत्रित करती है?",
            options: ["पीनियल ग्रंथि", "थाइमस", "अधिवृक्क", "पैराथायरॉइड"],
            answer: 0,
            explain: "पीनियल ग्रंथि अंधेरे में मेलाटोनिन बनाकर नींद को नियंत्रित करती है।",
          },
        ],
      },

      fbSec: {
        title: "अग्न्याशय शुगर संतुलन और थायरॉइड फीडबैक — 3D फ्लिप लैब",
        subtitle:
          "सामने: विस्तृत अग्न्याशय (लैंगरहैंस द्वीपिकाएँ) इंसुलिन बनाम ग्लूकागॉन • कार्ड पलटें और घेंघा (Goitre) लूप देखें",
        flipMain: "कार्ड पलटें: अग्न्याशय शुगर ↔ थायरॉइड घेंघा",
        frontBadge: "सामने • अग्न्याशय (लैंगरहैंस द्वीपिकाएँ) व रक्त शर्करा",
        flipToThyroid: "थायरॉइड व घेंघा लूप देखें",
        eatBtn: "मीठा भोजन खाएँ (इंसुलिन)",
        fastBtn: "व्यायाम / उपवास (ग्लूकागॉन)",
        pancreasPrompt: "बीटा व अल्फा कोशिकाएँ रक्त शर्करा कैसे संतुलित रखती हैं, जानने के लिए टैप करें:",
        backBadge: "पीछे • पीयूष–थायरॉइड फीडबैक व घेंघा",
        flipToPancreas: "वापस अग्न्याशय लैब पर जाएँ",
        iodineOnBtn: "आयोडीन की कमी चलाएँ (घेंघा देखें!)",
        iodineOffBtn: "आयोडीनयुक्त नमक बहाल करें (सामान्य लूप)",
        thyroidPrompt: "पुनर्भरण क्रियाविधि (Feedback Loop) और आयोडीन कमी से घेंघा कैसे होता है, देखें:",
        lessonTab: "फीडबैक क्रियाविधि व विकार नोट्स (कक्षा 9–10)",
        quizTab: "अग्न्याशय व थायरॉइड क्विज़",
        analogyLabel: "सरल उदाहरण",
        pancreasHud: {
          balanced: "रक्त शर्करा सामान्य (~95 mg/dL) • अग्न्याशय संतुलित",
          high: "उच्च शुगर! बीटा (β) कोशिकाएँ इंसुलिन छोड़ती हैं → यकृत ग्लाइकोजन बनाता है",
          low: "कम शुगर! अल्फा (α) कोशिकाएँ ग्लूकागॉन छोड़ती हैं → यकृत ग्लूकोज़ छोड़ता है",
        },
        thyroidHud: {
          normal: "फीडबैक सामान्य: आयोडीन + TSH → थायरॉक्सिन → पीयूष को 'रोकें' संकेत",
          goitre: "आयोडीन नहीं! थायरॉक्सिन बंद → अतिरिक्त TSH → थायरॉइड सूजन (घेंघा!)",
        },
      },
      pancreasParts: {
        anatomy: {
          name: "अग्न्याशय सिर, काय व पूँछ",
          en: "Head, Body & Tail",
          role: "ग्रहणी (Duodenum) के भीतर स्थित",
          analogy: "दो-इन-वन कारखाना: मुख्य नलिका से पाचक रस और द्वीपिकाओं से सीधे रक्त में हार्मोन!",
          summary: "गोल सिर, मध्य काय व पतली पूँछ वाली मिश्रित ग्रंथि जिसमें मुख्य अग्न्याशय नलिका और लैंगरहैंस की द्वीपिकाएँ होती हैं।",
        },
        betaCells: {
          name: "बीटा (β) कोशिकाएँ → इंसुलिन",
          en: "Beta Cells → Insulin",
          role: "बढ़ी रक्त शर्करा घटाती हैं",
          analogy: "इंसुलिन चाबी की तरह कोशिकाओं के दरवाजे खोलकर अतिरिक्त ग्लूकोज़ अंदर भर देता है।",
          summary: "मीठा खाने पर बीटा कोशिकाएँ इंसुलिन छोड़ती हैं, जिससे यकृत ग्लूकोज़ को ग्लाइकोजन में बदल देता है।",
        },
        alphaCells: {
          name: "अल्फा (α) कोशिकाएँ → ग्लूकागॉन",
          en: "Alpha Cells → Glucagon",
          role: "घटी रक्त शर्करा बढ़ाती हैं",
          analogy: "ऊर्जा कम होने पर यकृत के आपातकालीन ग्लूकोज़ भंडार को खोलता है।",
          summary: "उपवास या दौड़ में अल्फा कोशिकाएँ ग्लूकागॉन छोड़कर ग्लाइकोजन से ग्लूकोज़ बनवाती हैं।",
        },
        diabetes: {
          name: "मधुमेह (Diabetes Mellitus)",
          en: "इंसुलिन की कमी",
          role: "उच्च रक्त शर्करा रोग",
          analogy: "इंसुलिन चाबियाँ न होने से शर्करा रक्त में ही जमा रहती है।",
          summary: "इंसुलिन कम बनने से रक्त में ग्लूकोज़ बढ़ जाता है, जिसे संतुलित आहार या इंसुलिन इंजेक्शन से नियंत्रित किया जाता है।",
        },
      },
      thyroidSteps: {
        tsh: {
          name: "1. पीयूष से TSH स्राव",
          en: "TSH Command",
          role: "थायरॉइड को सक्रिय करना",
          analogy: "कमरा ठंडा होने पर थर्मोस्टेट द्वारा हीटर चालू करने जैसा।",
          summary: "थायरॉक्सिन कम होने पर पीयूष ग्रंथि TSH हार्मोन भेजकर थायरॉइड को सक्रिय करती है।",
        },
        iodine: {
          name: "2. आयोडीन → थायरॉक्सिन",
          en: "Iodine Raw Material",
          role: "उपापचय हार्मोन निर्माण",
          analogy: "बिना कच्चे माल के कारखाना उत्पाद नहीं बना सकता—आयोडीन थायरॉक्सिन का कच्चा माल है।",
          summary: "थायरॉइड भोजन के आयोडीन से थायरॉक्सिन हार्मोन बनाता है।",
        },
        feedback: {
          name: "3. नकारात्मक पुनर्भरण (Feedback)",
          en: "Negative Feedback",
          role: "स्वचालित संतुलन",
          analogy: "तापमान सही होते ही थर्मोस्टेट अपने आप बंद हो जाता है।",
          summary: "पर्याप्त थायरॉक्सिन बनते ही यह पीयूष को TSH धीमा करने का संकेत भेजता है।",
        },
        goitre: {
          name: "4. आयोडीन कमी → घेंघा",
          en: "Goitre Swelling",
          role: "थायरॉइड का फूलना",
          analogy: "थायरॉक्सिन न बनने से पीयूष लगातार TSH भेजता रहता है और थायरॉइड फूलकर बड़ा हो जाता है।",
          summary: "आयोडीन के बिना थायरॉक्सिन नहीं बनता और लगातार TSH के दबाव से गले में घेंघा हो जाता है।",
        },
      },
      fbLesson: {
        heading: "कक्षा 9–10 नोट्स: पुनर्भरण क्रियाविधि (Feedback) व विकार",
        sections: [
          {
            title: "1. पुनर्भरण क्रियाविधि (Feedback Mechanism) क्या है?",
            html: `<p>हार्मोन की सटीक मात्रा व समय को स्वतः नियंत्रित करने वाली प्रणाली। जैसे—रक्त में शर्करा बढ़ते ही अग्न्याशय अधिक <strong>इंसुलिन</strong> छोड़ता है और शर्करा सामान्य होते ही स्राव घटा देता है।</p>`,
          },
          {
            title: "2. मधुमेह रोगियों को इंसुलिन के इंजेक्शन क्यों दिए जाते हैं?",
            html: `<p>क्योंकि उनका अग्न्याशय पर्याप्त इंसुलिन नहीं बना पाता। इंसुलिन का इंजेक्शन रक्त से अतिरिक्त ग्लूकोज़ को कोशिकाओं में भेजकर शुगर स्तर सामान्य रखता है।</p>`,
          },
        ],
      },
      fbQuiz: {
        title: "अग्न्याशय व थायरॉइड क्विज़",
        correctMsg: "शानदार! सटीक उत्तर।",
        wrongMsg: "सही नहीं — नीचे स्पष्टीकरण पढ़ें।",
        nextBtn: "अगला प्रश्न",
        restartBtn: "फिर से शुरू करें",
        scoreLabel: "स्कोर",
        questions: [
          {
            q: "अग्न्याशय के किस भाग से इंसुलिन और ग्लूकागॉन स्रावित होते हैं?",
            options: ["कूपिकाएँ", "लैंगरहैंस की द्वीपिकाएँ (Islets of Langerhans)", "नेफ्रॉन", "दीर्घरोम"],
            answer: 1,
            explain: "लैंगरहैंस की द्वीपिकाओं की बीटा व अल्फा कोशिकाएँ ये हार्मोन बनाती हैं।",
          },
          {
            q: "मीठा भोजन करने के बाद बढ़ी हुई रक्त शर्करा को कौन-सा हार्मोन कम करता है?",
            options: ["ग्लूकागॉन", "इंसुलिन", "एड्रेनालिन", "मेलाटोनिन"],
            answer: 1,
            explain: "इंसुलिन अतिरिक्त ग्लूकोज़ को यकृत में ग्लाइकोजन के रूप में संचित कराता है।",
          },
          {
            q: "आयोडीन की कमी से थायरॉइड ग्रंथि फूलकर घेंघा (Goitre) क्यों बन जाती है?",
            options: ["अधिक इंसुलिन से", "थायरॉक्सिन न बनने पर पीयूष द्वारा लगातार अधिक TSH भेजने से", "मेलाटोनिन से", "लार रुकने से"],
            answer: 1,
            explain: "नकारात्मक पुनर्भरण टूटने से अतिरिक्त TSH थायरॉइड को फुला देता है।",
          },
          {
            q: "हार्मोन के स्राव की मात्रा व समय को नियंत्रित करने वाली प्रणाली क्या कहलाती है?",
            options: ["क्रमाकुंचन", "पुनर्भरण क्रियाविधि (Feedback Mechanism)", "पायसीकरण", "प्रतिवर्ती चाप"],
            answer: 1,
            explain: "पुनर्भरण क्रियाविधि हार्मोन का संतुलन बनाए रखती है।",
          },
        ],
      },
    },

    bn: {
      chapterBadge: "অধ্যায় ০৮ • শ্রেণি ৯–১০ ল্যাব",
      title: "মানব অন্তঃক্ষরা তন্ত্র — লাইভ ল্যাব",
      subtitle:
        "রক্তে হরমোন প্রবাহ দেখতে ৯টি অন্তঃক্ষরা গ্রন্থির যেকোনোটিতে ট্যাপ করুন, অথবা অ্যাড্রেনালিন সিমুলেটর চালান",
      views: {
        glands: "৯টি অন্তঃক্ষরা গ্রন্থি",
        adrenaline: "অ্যাড্রেনালিন (জরুরি)",
      },
      sexLabels: {
        male: "পুরুষ (শুক্রাশয়)",
        female: "নারী (ডিম্বাশয়)",
      },
      toggles: {
        pause: "থামান",
        play: "চালান",
        pins: "হটস্পট পিন",
      },
      metrics: {
        gland: "সক্রিয় গ্রন্থি",
        hormone: "প্রধান হরমোন",
        target: "লক্ষ্য অঙ্গ",
        stress: "অ্যাড্রেনালিন",
        calm: "শান্ত (স্বাভাবিক)",
        alert: "সতর্ক",
        danger: "উচ্চ ক্ষরণ",
        flight: "লড়ো অথবা পালাও!",
      },
      stressControl: "উত্তেজনা ও অ্যাড্রেনালিন প্রতিক্রিয়া স্তর",
      presets: {
        calm: "শান্ত (বিশ্রাম)",
        exam: "পরীক্ষা সতর্কতা",
        danger: "হঠাৎ বিপদ",
        flight: "লড়ো বা পালাও!",
      },
      tabs: {
        inspect: "৯ গ্রন্থি গাইড",
        lesson: "শ্রেণি ৯–১০ পাঠ",
        quiz: "দ্রুত যাচাই",
      },
      selectPrompt:
        "হরমোন কীভাবে রক্তপথে লক্ষ্য অঙ্গে পৌঁছায় তা দেখতে নিচের যেকোনো গ্রন্থিতে ট্যাপ করুন।",
      glands: {
        hypothalamus: {
          name: "১. হাইপোথ্যালামাস",
          en: "Hypothalamus",
          hormone: "রিলিজিং হরমোন",
          target: "পিটুইটারি গ্রন্থি",
          location: "অগ্রমস্তিষ্কের তলদেশে",
          summary: "স্নায়ুতন্ত্র ও অন্তঃক্ষরা তন্ত্রের সংযোগ সেতু। এটি পিটুইটারি গ্রন্থিকে হরমোন ক্ষরণ শুরু বা বন্ধ করার নির্দেশ দেয়।",
          keyFact: "একে 'সুপ্রিম কমান্ডার' বা 'মাস্টার অফ মাস্টার গ্ল্যান্ড' বলা হয়!",
        },
        pituitary: {
          name: "২. পিটুইটারি গ্রন্থি (প্রভুগ্রন্থি)",
          en: "Pituitary Gland",
          hormone: "গ্রোথ হরমোন (GH), TSH",
          target: "অস্থি ও অন্যান্য গ্রন্থি",
          location: "মস্তিষ্কের নিচে (মটরদানার মতো)",
          summary: "অন্যান্য অন্তঃক্ষরা গ্রন্থিকে নিয়ন্ত্রণ করে বলে একে 'প্রভুগ্রন্থি' (Master Gland) বলে। এর গ্রোথ হরমোন (GH) দেহের উচ্চতা বাড়ায়।",
          keyFact: "শৈশবে GH কম হলে বামনত্ব (Dwarfism) এবং বেশি হলে অতিকায়ত্ব (Gigantism) হয়।",
        },
        pineal: {
          name: "৩. পিনিয়াল গ্রন্থি",
          en: "Pineal Gland",
          hormone: "মেলাটোনিন (Melatonin)",
          target: "মস্তিষ্কের ঘুম কেন্দ্র",
          location: "মস্তিষ্কের গভীরে",
          summary: "অন্ধকারে মেলাটোনিন হরমোন ক্ষরণ করে দেহের জৈব ঘড়ি ও ঘুম-জাগরণ চক্র নিয়ন্ত্রণ করে।",
          keyFact: "রাতে মোবাইলের উজ্জ্বল আলো মেলাটোনিন কমিয়ে ঘুমের ব্যাঘাত ঘটায়।",
        },
        thyroid: {
          name: "৪. থাইরয়েড গ্রন্থি",
          en: "Thyroid Gland",
          hormone: "থাইরক্সিন (Thyroxine)",
          target: "সারা দেহের কোষ",
          location: "গলায় (প্রজাপতি আকৃতি)",
          summary: "খাদ্যের আয়োডিন ব্যবহার করে থাইরক্সিন তৈরি করে, যা শর্করা, প্রোটিন ও ফ্যাটের বিপাক (Metabolism) নিয়ন্ত্রণ করে।",
          keyFact: "আয়োডিনের অভাবে থাইরয়েড ফুলে গিয়ে গলগণ্ড (Goitre) রোগ হয়!",
        },
        parathyroid: {
          name: "৫. প্যারাথাইরয়েড গ্রন্থি",
          en: "Parathyroid Glands",
          hormone: "প্যারাথর্মোন (PTH)",
          target: "অস্থি ও বৃক্ক",
          location: "থাইরয়েডের পেছনে ৪টি বিন্দু",
          summary: "রক্তে ক্যালসিয়াম (Ca²⁺) ও ফসফেটের মাত্রা সঠিক রাখে, যা হাড় ও স্নায়ুর জন্য জরুরি।",
          keyFact: "রক্তে ক্যালসিয়াম কমলে PTH হাড় থেকে ক্যালসিয়াম মুক্ত করে ভারসাম্য ফেরায়।",
        },
        thymus: {
          name: "৬. থাইমাস গ্রন্থি",
          en: "Thymus Gland",
          hormone: "থাইমোসিন (Thymosin)",
          target: "শ্বেত রক্তকণিকা (T-Cells)",
          location: "বুকের ওপরে (হৃৎপিণ্ডের ওপরে)",
          summary: "থাইমোসিন ক্ষরণ করে রোগ প্রতিরোধী T-লিম্ফোসাইট কোষ তৈরি ও প্রশিক্ষণ দেয়।",
          keyFact: "বয়স বাড়ার সাথে সাথে এটি ছোট হয়ে যায়, তাই বার্ধক্যে রোগ প্রতিরোধ ক্ষমতা কমে।",
        },
        adrenal: {
          name: "৭. অ্যাড্রেনাল গ্রন্থি",
          en: "Adrenal Glands",
          hormone: "অ্যাড্রেনালিন (Adrenaline)",
          target: "হৃৎপিণ্ড, ফুসফুস ও পেশী",
          location: "দুটি কিডনির ওপরে",
          summary: "ভয়, রাগ বা হঠাৎ বিপদে জরুরি 'লড়ো বা পালাও' হরমোন অ্যাড্রেনালিন সরাসরি রক্তে ছেড়ে দেয়।",
          keyFact: "হৃদস্পন্দন ও শ্বাসক্রিয়া বাড়িয়ে এবং পেশীতে রক্ত পাঠিয়ে তাৎক্ষণিক শক্তি জোগায়!",
        },
        pancreas: {
          name: "৮. অগ্ন্যাশয় (মিশ্রগ্রন্থি)",
          en: "Pancreas (Dual Gland)",
          hormone: "ইনসুলিন ও গ্লুকাগন",
          target: "যকৃত ও দেহকোষ",
          location: "পাকস্থলীর নিচে",
          summary: "এর আইলেটস অফ ল্যাঙ্গারহ্যান্সের বিটা কোষ ইনসুলিন (শর্করা কমায়) এবং আলফা কোষ গ্লুকাগন (শর্করা বাড়ায়) ক্ষরণ করে।",
          keyFact: "ইনসুলিনের অভাবে রক্তে শর্করা বেড়ে মধুমেহ (Diabetes Mellitus) রোগ হয়।",
        },
        gonads: {
          name: "৯. জনন গ্রন্থি (শুক্রাশয় / ডিম্বাশয়)",
          en: "Testes / Ovaries",
          hormone: "টেস্টোস্টেরন / ইস্ট্রোজেন",
          target: "প্রজনন অঙ্গ ও দেহ",
          location: "শ্রোণিদেশ / স্ক্রোটাম",
          summary: "পুরুষের শুক্রাশয় টেস্টোস্টেরন এবং নারীর ডিম্বাশয় ইস্ট্রোজেন ও প্রজেস্টেরন ক্ষরণ করে বয়ঃসন্ধি ও প্রজনন নিয়ন্ত্রণ করে।",
          keyFact: "পিটুইটারির FSH ও LH হরমোন বয়ঃসন্ধিকালে এদের সক্রিয় করে।",
        },
      },
      adrenalineHotspots: {
        adrenalSource: {
          name: "অ্যাড্রেনাল গ্রন্থি (উৎস)",
          en: "Adrenal Trigger",
          hormone: "অ্যাড্রেনালিন",
          target: "সারা রক্তপ্রবাহ",
          summary: "হঠাৎ বিপদ দেখলে মস্তিষ্কের নির্দেশে অ্যাড্রেনাল গ্রন্থি মুহূর্তেই রক্তে অ্যাড্রেনালিন ছেড়ে দেয়।",
          keyFact: "রক্তপথে গিয়ে একসাথে একাধিক অঙ্গকে সক্রিয় করে।",
        },
        heartBoost: {
          name: "হৃদস্পন্দন বৃদ্ধি",
          en: "72 → 160 BPM",
          hormone: "অ্যাড্রেনালিন",
          target: "হৃৎপেশী",
          summary: "হৃৎপিণ্ড দ্রুত পাম্প করে পেশীতে অক্সিজেনযুক্ত রক্তের জোগান বাড়িয়ে দেয়।",
          keyFact: "পরীক্ষা বা দৌড়ের আগে বুক ধড়ফড় করা অ্যাড্রেনালিনেরই কাজ।",
        },
        lungBoost: {
          name: "দ্রুত ও গভীর শ্বাস",
          en: "বেশি অক্সিজেন",
          hormone: "অ্যাড্রেনালিন",
          target: "ফুসফুস ও মধ্যচ্ছদা",
          summary: "শ্বাসনালী প্রশস্ত হয়ে ফুসফুসে বেশি অক্সিজেন প্রবেশ করে।",
          keyFact: "বেশি O₂ মানে তাৎক্ষণিক বেশি ATP শক্তি।",
        },
        muscleBoost: {
          name: "যকৃত ও পায়ের পেশী",
          en: "গ্লুকোজ + শক্তি",
          hormone: "অ্যাড্রেনালিন",
          target: "যকৃত ও ঐচ্ছিক পেশী",
          summary: "যকৃত সঞ্চিত গ্লাইকোজেন ভেঙে রক্তে গ্লুকোজ ছাড়ে যাতে পেশী দ্রুত ছুটতে পারে।",
          keyFact: "বিপদ কেটে গেলে দেহ আবার শান্ত অবস্থায় ফিরে আসে।",
        },
      },
      lesson: {
        heading: "শ্রেণি ৯–১০ পাঠ পরিকল্পনা: মানব অন্তঃক্ষরা তন্ত্র",
        sections: [
          {
            title: "১. অন্তঃক্ষরা (অনাল) বনাম বহিঃক্ষরা (সনাল) গ্রন্থি",
            html: `<p>• <strong>অন্তঃক্ষরা গ্রন্থি:</strong> কোনো নালী নেই—হরমোন সরাসরি <strong>রক্তে</strong> মেশে।<br/>• <strong>মিশ্রগ্রন্থি:</strong> <strong>অগ্ন্যাশয় (Pancreas)</strong> পাচক উৎসেচক ও হরমোন উভয়ই ক্ষরণ করে।</p>`,
          },
          {
            title: "২. মাধ্যমিক / বোর্ড পরীক্ষার মূল তালিকা",
            html: `<div class="detail-fact" style="margin-top:4px">• <strong>পিটুইটারি (প্রভুগ্রন্থি):</strong> গ্রোথ হরমোন → <em>বামনত্ব / অতিকায়ত্ব</em>।<br/>• <strong>থাইরয়েড:</strong> থাইরক্সিন (আয়োডিন) → <em>গলগণ্ড (Goitre)</em>।<br/>• <strong>অগ্ন্যাশয়:</strong> ইনসুলিন → <em>মধুমেহ (Diabetes)</em>।<br/>• <strong>অ্যাড্রেনাল:</strong> অ্যাড্রেনালিন → <em>জরুরি প্রতিক্রিয়া</em>।</div>`,
          },
          {
            title: "৩. স্নায়ু বনাম হরমোন নিয়ন্ত্রণ",
            html: `<p>স্নায়ু সংকেত বিদ্যুতের মতো দ্রুত ও ক্ষণস্থায়ী; হরমোন রক্তে ধীরে চলে কিন্তু দীর্ঘস্থায়ী ও ব্যাপক প্রভাব ফেলে।</p>`,
          },
        ],
      },
      quiz: {
        title: "অন্তঃক্ষরা তন্ত্র দ্রুত যাচাই",
        correctMsg: "একদম সঠিক! ধারণাটি পরিষ্কার।",
        wrongMsg: "সঠিক নয় — নিচের ব্যাখ্যাটি দেখুন।",
        nextBtn: "পরবর্তী প্রশ্ন",
        restartBtn: "আবার শুরু করুন",
        scoreLabel: "স্কোর",
        questions: [
          {
            q: "পিটুইটারি গ্রন্থিকে 'প্রভুগ্রন্থি' (Master Gland) বলা হয় কেন?",
            options: ["এটি সবচেয়ে বড় অঙ্গ", "এর হরমোন প্রায় সব অন্যান্য অন্তঃক্ষরা গ্রন্থির কাজ নিয়ন্ত্রণ করে", "এটি খাদ্য হজম করে", "এটি মূত্র তৈরি করে"],
            answer: 1,
            explain: "পিটুইটারির হরমোন থাইরয়েড, অ্যাড্রেনাল ও জনন গ্রন্থিকে নিয়ন্ত্রণ করে।",
          },
          {
            q: "প্রতিদিনের খাবারে আয়োডিনযুক্ত লবণ খাওয়ার পরামর্শ দেওয়া হয় কেন?",
            options: ["ইনসুলিন তৈরির জন্য", "থাইরয়েডে থাইরক্সিন তৈরি ও গলগণ্ড (Goitre) প্রতিরোধের জন্য", "শ্বেতসার হজমের জন্য", "RBC তৈরির জন্য"],
            answer: 1,
            explain: "আয়োডিনের অভাবে থাইরক্সিন তৈরি ব্যাহত হয়ে গলগণ্ড হয়।",
          },
          {
            q: "হঠাৎ ভয় বা বিপদে কোন 'জরুরি হরমোন' রক্তে ক্ষরিত হয়?",
            options: ["ইনসুলিন", "মেলাটোনিন", "অ্যাড্রেনালিন", "থাইমোসিন"],
            answer: 2,
            explain: "অ্যাড্রেনাল গ্রন্থি থেকে ক্ষরিত অ্যাড্রেনালিন দেহকে জরুরি অবস্থার জন্য প্রস্তুত করে।",
          },
          {
            q: "কোন গ্রন্থি বহিঃক্ষরা (উৎসেচক) ও অন্তঃক্ষরা (ইনসুলিন)—দুই কাজই করে?",
            options: ["থাইরয়েড", "অগ্ন্যাশয় (Pancreas)", "পিনিয়াল", "প্যারাথাইরয়েড"],
            answer: 1,
            explain: "অগ্ন্যাশয় হলো মানবদেহের প্রধান মিশ্রগ্রন্থি।",
          },
          {
            q: "মস্তিষ্কের কোন গ্রন্থি মেলাটোনিন ক্ষরণ করে ঘুমের ছন্দ নিয়ন্ত্রণ করে?",
            options: ["পিনিয়াল গ্রন্থি", "থাইমাস", "অ্যাড্রেনাল", "প্যারাথাইরয়েড"],
            answer: 0,
            explain: "পিনিয়াল গ্রন্থি অন্ধকারে মেলাটোনিন ক্ষরণ করে।",
          },
        ],
      },

      fbSec: {
        title: "অগ্ন্যাশয় শর্করা নিয়ন্ত্রণ ও থাইরয়েড ফিডব্যাক — 3D ফ্লিপ ল্যাব",
        subtitle:
          "সামনে: বিস্তারিত অগ্ন্যাশয় (আইলেটস অফ ল্যাঙ্গারহ্যান্স) ইনসুলিন বনাম গ্লুকাগন • কার্ড উল্টে গলগণ্ড লুপ দেখুন",
        flipMain: "কার্ড উল্টান: অগ্ন্যাশয় শর্করা ↔ থাইরয়েড গলগণ্ড",
        frontBadge: "সামনে • অগ্ন্যাশয় (আইলেটস অফ ল্যাঙ্গারহ্যান্স) ও রক্ত শর্করা",
        flipToThyroid: "থাইরয়েড ও গলগণ্ড লুপ দেখুন",
        eatBtn: "মিষ্টি খাবার খান (ইনসুলিন)",
        fastBtn: "ব্যায়াম / উপবাস (গ্লুকাগন)",
        pancreasPrompt: "বিটা ও আলফা কোষ কীভাবে রক্তে শর্করা ঠিক রাখে তা জানতে ট্যাপ করুন:",
        backBadge: "পিছনে • পিটুইটারি–থাইরয়েড ফিডব্যাক ও গলগণ্ড",
        flipToPancreas: "অগ্ন্যাশয় ল্যাবে ফিরে যান",
        iodineOnBtn: "আয়োডিনের অভাব দেখুন (গলগণ্ড!)",
        iodineOffBtn: "আয়োডিনযুক্ত লবণ ফেরান (স্বাভাবিক লুপ)",
        thyroidPrompt: "ফিডব্যাক প্রক্রিয়া ও আয়োডিনের অভাবে গলগণ্ড কীভাবে হয় তা সহজে দেখুন:",
        lessonTab: "ফিডব্যাক প্রক্রিয়া ও হরমোনজনিত রোগ (শ্রেণি ৯–১০)",
        quizTab: "অগ্ন্যাশয় ও থাইরয়েড কুইজ",
        analogyLabel: "সহজ উদাহরণ",
        pancreasHud: {
          balanced: "রক্ত শর্করা স্বাভাবিক (~95 mg/dL) • অগ্ন্যাশয় স্থিতিশীল",
          high: "বেশি শর্করা! বিটা (β) কোষ ইনসুলিন ছাড়ে → যকৃত গ্লাইকোজেন জমায়",
          low: "কম শর্করা! আলফা (α) কোষ গ্লুকাগন ছাড়ে → যকৃত গ্লুকোজ মুক্ত করে",
        },
        thyroidHud: {
          normal: "ফিডব্যাক স্বাভাবিক: আয়োডিন + TSH → থাইরক্সিন → পিটুইটারিকে 'থামুন' সংকেত",
          goitre: "আয়োডিন নেই! থাইরক্সিন বন্ধ → অতিরিক্ত TSH → থাইরয়েড ফুলে গলগণ্ড!",
        },
      },
      pancreasParts: {
        anatomy: {
          name: "অগ্ন্যাশয় মস্তক, দেহ ও পুচ্ছ",
          en: "Head, Body & Tail",
          role: "ডিওডেনামের বাঁকে অবস্থিত",
          analogy: "টু-ইন-ওয়ান কারখানা: নালী দিয়ে পাচক রস আর কোষদ্বীপ থেকে সরাসরি রক্তে হরমোন!",
          summary: "গোলাকার মস্তক, মধ্যদেহ ও সরু পুচ্ছযুক্ত মিশ্রগ্রন্থি যাতে প্রধান অগ্ন্যাশয় নালী এবং আইলেটস অফ ল্যাঙ্গারহ্যান্স থাকে।",
        },
        betaCells: {
          name: "বিটা (β) কোষ → ইনসুলিন",
          en: "Beta Cells → Insulin",
          role: "বাড়তি রক্ত শর্করা কমায়",
          analogy: "ইনসুলিন চাবির মতো কোষের দরজা খুলে বাড়তি গ্লুকোজ ভেতরে ঢুকিয়ে দেয়।",
          summary: "মিষ্টি খাওয়ার পর বিটা কোষ ইনসুলিন ছেড়ে যকৃতে গ্লুকোজকে গ্লাইকোজেন রূপে জমা করে।",
        },
        alphaCells: {
          name: "আলফা (α) কোষ → গ্লুকাগন",
          en: "Alpha Cells → Glucagon",
          role: "কমে যাওয়া শর্করা বাড়ায়",
          analogy: "খিদে বা ব্যায়ামে শক্তি কমলে যকৃতের জরুরি গ্লুকোজ ভাণ্ডার খুলে দেয়।",
          summary: "রক্তে গ্লুকোজ কমলে আলফা কোষ গ্লুকাগন ছেড়ে গ্লাইকোজেন থেকে গ্লুকোজ তৈরি করে।",
        },
        diabetes: {
          name: "মধুমেহ (Diabetes Mellitus)",
          en: "ইনসুলিনের অভাব",
          role: "উচ্চ রক্ত শর্করা রোগ",
          analogy: "পর্যাপ্ত ইনসুলিন চাবি না থাকায় শর্করা রক্তেই জমতে থাকে।",
          summary: "ইনসুলিন কম তৈরি হলে রক্তে গ্লুকোজ বেড়ে যায়; নিয়ন্ত্রিত খাদ্য বা ইনসুলিন ইনজেকশনে এর চিকিৎসা হয়।",
        },
      },
      thyroidSteps: {
        tsh: {
          name: "১. পিটুইটারির TSH ক্ষরণ",
          en: "TSH Command",
          role: "থাইরয়েডকে উদ্দীপ্ত করা",
          analogy: "ঘর ঠান্ডা হলে থার্মোস্ট্যাট যেমন হিটার চালু করে।",
          summary: "থাইরক্সিন কমলে পিটুইটারি TSH পাঠিয়ে থাইরয়েডকে সক্রিয় করে।",
        },
        iodine: {
          name: "২. আয়োডিন → থাইরক্সিন",
          en: "Iodine Raw Material",
          role: "বিপাক হরমোন তৈরি",
          analogy: "কাঁচামাল ছাড়া যেমন কারখানা চলে না—আয়োডিন হলো থাইরক্সিনের কাঁচামাল।",
          summary: "থাইরয়েড খাদ্যের আয়োডিন নিয়ে থাইরক্সিন তৈরি করে।",
        },
        feedback: {
          name: "৩. নেগেটিভ ফিডব্যাক লুপ",
          en: "Negative Feedback",
          role: "স্বয়ংক্রিয় ভারসাম্য",
          analogy: "সঠিক তাপমাত্রায় পৌঁছালে থার্মোস্ট্যাট নিজে থেকেই বন্ধ হয়ে যায়।",
          summary: "থাইরক্সিন স্বাভাবিক হলেই পিটুইটারি TSH ক্ষরণ কমিয়ে দেয়।",
        },
        goitre: {
          name: "৪. আয়োডিনের অভাব → গলগণ্ড",
          en: "Goitre Swelling",
          role: "থাইরয়েড ফুলে যাওয়া",
          analogy: "থাইরক্সিন না আসায় পিটুইটারি অনবরত TSH পাঠাতে থাকে, ফলে থাইরয়েড ফুলে বড় হয়।",
          summary: "আয়োডিন না থাকলে থাইরক্সিন তৈরি হয় না এবং অতিরিক্ত TSH-এর প্রভাবে গলা ফুলে গলগণ্ড হয়।",
        },
      },
      fbLesson: {
        heading: "শ্রেণি ৯–১০ নোটস: ফিডব্যাক প্রক্রিয়া ও হরমোনজনিত রোগ",
        sections: [
          {
            title: "১. ফিডব্যাক প্রক্রিয়া (Feedback Mechanism) কী?",
            html: `<p>হরমোন সঠিক সময়ে সঠিক পরিমাণে ক্ষরণ নিয়ন্ত্রণ করার স্বয়ংক্রিয় পদ্ধতি। যেমন—রক্তে শর্করা বাড়লে অগ্ন্যাশয় বেশি <strong>ইনসুলিন</strong> ছাড়ে, আর শর্করা স্বাভাবিক হলে ক্ষরণ কমিয়ে দেয়।</p>`,
          },
          {
            title: "২. ডায়াবেটিস রোগীদের ইনসুলিন ইনজেকশন দেওয়া হয় কেন?",
            html: `<p>কারণ তাঁদের অগ্ন্যাশয় পর্যাপ্ত ইনসুলিন তৈরি করতে পারে না। ইনসুলিন ইনজেকশন রক্তের বাড়তি গ্লুকোজকে কোষে প্রবেশ করিয়ে শর্করার মাত্রা নিয়ন্ত্রণে রাখে।</p>`,
          },
        ],
      },
      fbQuiz: {
        title: "অগ্ন্যাশয় ও থাইরয়েড কুইজ",
        correctMsg: "দারুণ! সম্পূর্ণ সঠিক।",
        wrongMsg: "সঠিক নয় — নিচের ব্যাখ্যাটি দেখুন।",
        nextBtn: "পরবর্তী প্রশ্ন",
        restartBtn: "আবার শুরু করুন",
        scoreLabel: "স্কোর",
        questions: [
          {
            q: "অগ্ন্যাশয়ের কোন অংশ থেকে ইনসুলিন ও গ্লুকাগন ক্ষরিত হয়?",
            options: ["অ্যালভিওলাই", "আইলেটস অফ ল্যাঙ্গারহ্যান্স", "নেফ্রন", "ভিলাই"],
            answer: 1,
            explain: "আইলেটস অফ ল্যাঙ্গারহ্যান্সের বিটা ও আলফা কোষ এই দুটি হরমোন তৈরি করে।",
          },
          {
            q: "মিষ্টি খাবার খাওয়ার পর রক্তের বাড়তি গ্লুকোজ কোন হরমোন কমায়?",
            options: ["গ্লুকাগন", "ইনসুলিন", "অ্যাড্রেনালিন", "মেলাটোনিন"],
            answer: 1,
            explain: "ইনসুলিন গ্লুকোজকে যকৃতে গ্লাইকোজেন রূপে সঞ্চয় করে রক্তে শর্করা কমায়।",
          },
          {
            q: "আয়োডিনের অভাবে থাইরয়েড ফুলে গলগণ্ড (Goitre) হয় কেন?",
            options: ["বেশি ইনসুলিনে", "থাইরক্সিন না হওয়ায় পিটুইটারি অনবরত অতিরিক্ত TSH পাঠায় বলে", "মেলাটোনিনে", "লালা বন্ধ হওয়ায়"],
            answer: 1,
            explain: "নেগেটিভ ফিডব্যাক ভেঙে যাওয়ায় অতিরিক্ত TSH থাইরয়েডকে ফুলিয়ে তোলে।",
          },
          {
            q: "হরমোনের ক্ষরণের সময় ও পরিমাণ নিয়ন্ত্রণকারী স্বয়ংক্রিয় পদ্ধতিকে কী বলে?",
            options: ["পেরিস্ট্যালসিস", "ফিডব্যাক প্রক্রিয়া (Feedback Mechanism)", "ইমালসিফিকেশন", "প্রতিবর্ত চাপ"],
            answer: 1,
            explain: "ফিডব্যাক প্রক্রিয়া হরমোনের সঠিক ভারসাম্য রক্ষা করে।",
          },
        ],
      },
    },
  };

  // Hotspot Pins for the 9 Endocrine Glands on 420x440 body map
  const GLAND_PINS = [
    { id: "hypothalamus", x: 47.0, y: 12.2, tone: "electric" },
    { id: "pineal", x: 54.5, y: 12.0, tone: "venous" },
    { id: "pituitary", x: 50.0, y: 16.5, tone: "arterial" },
    { id: "thyroid", x: 50.0, y: 26.2, tone: "electric" },
    { id: "parathyroid", x: 57.0, y: 25.2, tone: "venous" },
    { id: "thymus", x: 50.0, y: 35.0, tone: "venous" },
    { id: "pancreas", x: 55.5, y: 48.0, tone: "electric" },
    { id: "adrenal", x: 40.5, y: 50.5, tone: "arterial" },
    { id: "gonads", x: 50.0, y: 72.5, tone: "arterial" },
  ];

  const ADRENALINE_PINS = [
    { id: "adrenalSource", x: 50.0, y: 51.0, tone: "electric" },
    { id: "heartBoost", x: 31.0, y: 26.0, tone: "arterial" },
    { id: "lungBoost", x: 70.0, y: 26.0, tone: "venous" },
    { id: "muscleBoost", x: 50.0, y: 76.0, tone: "arterial" },
  ];

  // Target coordinate for animated bloodstream hormone packets per gland
  const GLAND_COORDS = {
    hypothalamus: [204, 54],
    pineal: [224, 52],
    pituitary: [210, 72],
    thyroid: [210, 115],
    parathyroid: [224, 112],
    thymus: [210, 154],
    pancreas: [224, 212],
    adrenal: [176, 220],
    gonads: [210, 318],
  };

  const GLAND_TARGET_COORDS = {
    hypothalamus: [210, 72],
    pineal: [200, 42],
    pituitary: [210, 295],
    thyroid: [210, 250],
    parathyroid: [152, 270],
    thymus: [256, 178],
    pancreas: [176, 198],
    adrenal: [214, 168],
    gonads: [210, 255],
  };

  const ui = {
    view: "glands", // "glands" | "adrenaline"
    sex: "male", // "male" | "female"
    paused: false,
    showPins: true,
    stressLevel: 15, // 0..100
    selectedGland: "pituitary",
    selectedAdr: "adrenalSource",
    endoTab: "inspect",
    endoQ: 0,
    endoOpt: null,
    endoScore: 0,
    endoQuizDone: false,

    // Section 2: 3D Flip Card
    isFlipped: false,
    fbPaused: false,
    selectedPancreasPart: "anatomy",
    sugarMode: "balanced", // "balanced" | "high" | "low"
    bloodGlucose: 95, // mg/dL
    targetGlucose: 95,
    iodineDeficient: false,
    selectedThyroidStep: "tsh",
    fbTab: "lesson",
    fbQ: 0,
    fbOpt: null,
    fbScore: 0,
    fbQuizDone: false,
  };

  function getED() {
    const lang = BL.getState().lang;
    return ENDO_DICT[lang] || ENDO_DICT.en;
  }

  // =========================================================
  // RENDER UI PANELS
  // =========================================================
  function renderEndoPins() {
    const layer = document.getElementById("endo-pins-layer");
    if (!layer) return;
    const ed = getED();
    const isGlands = ui.view === "glands";
    const pins = isGlands ? GLAND_PINS : ADRENALINE_PINS;
    const dictMap = isGlands ? ed.glands : ed.adrenalineHotspots;
    const selId = isGlands ? ui.selectedGland : ui.selectedAdr;

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
        if (isGlands) ui.selectedGland = pin.id;
        else ui.selectedAdr = pin.id;
        ui.endoTab = "inspect";
        syncEndoUI();
      });

      layer.appendChild(btn);
    });
  }

  function renderQuizInto(container, quizObj, prefix) {
    const qs = quizObj.questions;
    const qIdx = prefix === "endo" ? ui.endoQ : ui.fbQ;
    const selOpt = prefix === "endo" ? ui.endoOpt : ui.fbOpt;
    const score = prefix === "endo" ? ui.endoScore : ui.fbScore;
    const done = prefix === "endo" ? ui.endoQuizDone : ui.fbQuizDone;

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
          if (prefix === "endo") {
            ui.endoQ = 0;
            ui.endoOpt = null;
            ui.endoScore = 0;
            ui.endoQuizDone = false;
            renderEndoReader();
          } else {
            ui.fbQ = 0;
            ui.fbOpt = null;
            ui.fbScore = 0;
            ui.fbQuizDone = false;
            renderFBReader();
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
        if (prefix === "endo") {
          ui.endoOpt = idx;
          if (idx === cur.answer) ui.endoScore += 1;
          renderEndoReader();
        } else {
          ui.fbOpt = idx;
          if (idx === cur.answer) ui.fbScore += 1;
          renderFBReader();
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
          if (prefix === "endo") {
            if (ui.endoQ + 1 < qs.length) {
              ui.endoQ += 1;
              ui.endoOpt = null;
            } else {
              ui.endoQuizDone = true;
            }
            renderEndoReader();
          } else {
            if (ui.fbQ + 1 < qs.length) {
              ui.fbQ += 1;
              ui.fbOpt = null;
            } else {
              ui.fbQuizDone = true;
            }
            renderFBReader();
          }
        });
      }
    }
  }

  function renderEndoReader() {
    const bodyEl = document.getElementById("endo-reader-body");
    if (!bodyEl) return;
    const ed = getED();

    document.querySelectorAll("#endo-reader-panel .tab-btn").forEach((b) => {
      b.classList.toggle("active", b.getAttribute("data-endo-tab") === ui.endoTab);
    });

    bodyEl.innerHTML = "";
    if (ui.endoTab === "inspect") {
      const hint = document.createElement("p");
      hint.className = "heart-subtitle";
      hint.textContent = ed.selectPrompt;
      bodyEl.appendChild(hint);

      const isGlands = ui.view === "glands";
      const dictMap = isGlands ? ed.glands : ed.adrenalineHotspots;
      const selId = isGlands ? ui.selectedGland : ui.selectedAdr;

      const pillsWrap = document.createElement("div");
      pillsWrap.className = "part-pills";
      Object.keys(dictMap).forEach((id) => {
        const item = dictMap[id];
        const pill = document.createElement("button");
        pill.type = "button";
        pill.className = `part-pill${selId === id ? " active" : ""}`;
        pill.textContent = item.name;
        pill.addEventListener("click", () => {
          if (isGlands) ui.selectedGland = id;
          else ui.selectedAdr = id;
          syncEndoUI();
        });
        pillsWrap.appendChild(pill);
      });
      bodyEl.appendChild(pillsWrap);

      const cur = dictMap[selId] || Object.values(dictMap)[0];
      const box = document.createElement("div");
      box.className = "detail-box";
      box.innerHTML = `
        <span class="detail-type">${cur.hormone} • ${cur.target}</span>
        <h2 class="detail-title">${BL.term(cur)}</h2>
        ${cur.location ? `<p class="micro-label" style="margin-top:4px;color:var(--muted)">📍 ${cur.location}</p>` : ""}
        <p class="detail-summary">${cur.summary}</p>
        <div class="detail-fact">💡 ${cur.keyFact}</div>
      `;
      bodyEl.appendChild(box);
    } else if (ui.endoTab === "lesson") {
      const h = document.createElement("h2");
      h.className = "detail-title";
      h.style.marginTop = "0";
      h.textContent = ed.lesson.heading;
      bodyEl.appendChild(h);

      ed.lesson.sections.forEach((sec) => {
        const card = document.createElement("div");
        card.className = "chapter-sec";
        card.innerHTML = `<h3>${sec.title}</h3><div style="margin-top:6px;font-size:13.5px;line-height:1.68">${sec.html}</div>`;
        bodyEl.appendChild(card);
      });
    } else {
      renderQuizInto(bodyEl, ed.quiz, "endo");
    }
  }

  function renderFlipDetails() {
    const ed = getED();

    const pChips = document.getElementById("pancreas-parts-chips");
    const pDetail = document.getElementById("pancreas-part-detail");
    if (pChips && pDetail) {
      pChips.innerHTML = "";
      Object.keys(ed.pancreasParts).forEach((pid) => {
        const item = ed.pancreasParts[pid];
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `part-pill${ui.selectedPancreasPart === pid ? " active" : ""}`;
        btn.textContent = item.name;
        btn.addEventListener("click", () => {
          ui.selectedPancreasPart = pid;
          if (pid === "betaCells") {
            ui.sugarMode = "high";
            ui.bloodGlucose = 165;
            ui.targetGlucose = 95;
          } else if (pid === "alphaCells") {
            ui.sugarMode = "low";
            ui.bloodGlucose = 62;
            ui.targetGlucose = 95;
          }
          renderFlipDetails();
        });
        pChips.appendChild(btn);
      });

      const cur = ed.pancreasParts[ui.selectedPancreasPart] || ed.pancreasParts.anatomy;
      pDetail.innerHTML = `
        <span class="detail-type">${cur.role}</span>
        <h3 class="detail-title">${BL.term(cur)}</h3>
        <p class="detail-summary">${cur.summary}</p>
        <div class="detail-fact">✨ <strong>${ed.fbSec.analogyLabel}:</strong> ${cur.analogy}</div>
      `;
    }

    const tChips = document.getElementById("thyroid-steps-chips");
    const tDetail = document.getElementById("thyroid-step-detail");
    if (tChips && tDetail) {
      tChips.innerHTML = "";
      Object.keys(ed.thyroidSteps).forEach((tid) => {
        const item = ed.thyroidSteps[tid];
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `part-pill${ui.selectedThyroidStep === tid ? " active" : ""}`;
        btn.textContent = item.name;
        btn.addEventListener("click", () => {
          ui.selectedThyroidStep = tid;
          ui.iodineDeficient = tid === "goitre";
          syncEndoUI();
        });
        tChips.appendChild(btn);
      });

      const curT = ed.thyroidSteps[ui.selectedThyroidStep] || ed.thyroidSteps.tsh;
      tDetail.innerHTML = `
        <span class="detail-type">${curT.role}</span>
        <h3 class="detail-title">${BL.term(curT)}</h3>
        <p class="detail-summary">${curT.summary}</p>
        <div class="detail-fact">✨ <strong>${ed.fbSec.analogyLabel}:</strong> ${curT.analogy}</div>
      `;
    }
  }

  function renderFBReader() {
    const bodyEl = document.getElementById("fb-reader-body");
    if (!bodyEl) return;
    const ed = getED();

    document.querySelectorAll("#fb-reader-panel .tab-btn").forEach((b) => {
      b.classList.toggle("active", b.getAttribute("data-fb-tab") === ui.fbTab);
    });

    bodyEl.innerHTML = "";
    if (ui.fbTab === "lesson") {
      const h = document.createElement("h3");
      h.className = "detail-title";
      h.style.marginTop = "0";
      h.textContent = ed.fbLesson.heading;
      bodyEl.appendChild(h);

      ed.fbLesson.sections.forEach((sec) => {
        const card = document.createElement("div");
        card.className = "chapter-sec";
        card.innerHTML = `<h3>${sec.title}</h3><div style="margin-top:6px;font-size:13.5px;line-height:1.68">${sec.html}</div>`;
        bodyEl.appendChild(card);
      });
    } else {
      renderQuizInto(bodyEl, ed.fbQuiz, "fb");
    }
  }

  function syncEndoUI() {
    const ed = getED();
    const setText = (id, txt) => {
      const el = document.getElementById(id);
      if (el) el.textContent = txt;
    };

    setText("endo-chapter-badge", ed.chapterBadge);
    setText("endo-title", ed.title);
    setText("endo-subtitle", ed.subtitle);
    setText("lbl-view-glands", ed.views.glands);
    setText("lbl-view-adrenaline", ed.views.adrenaline);
    setText("lbl-endo-sex", ui.sex === "female" ? ed.sexLabels.female : ed.sexLabels.male);
    setText("lbl-endo-pins", ed.toggles.pins);

    setText("lbl-m-gland", ed.metrics.gland);
    setText("lbl-m-hormone", ed.metrics.hormone);
    setText("lbl-m-target", ed.metrics.target);
    setText("lbl-m-stress", ed.metrics.stress);
    setText("lbl-stress-control", ed.stressControl);

    setText("preset-calm", ed.presets.calm);
    setText("preset-exam", ed.presets.exam);
    setText("preset-danger", ed.presets.danger);
    setText("preset-flight", ed.presets.flight);

    setText("tab-endo-inspect", ed.tabs.inspect);
    setText("tab-endo-lesson", ed.tabs.lesson);
    setText("tab-endo-quiz", ed.tabs.quiz);

    // Live Telemetry
    const activeData =
      ui.view === "glands"
        ? ed.glands[ui.selectedGland] || ed.glands.pituitary
        : ed.adrenalineHotspots[ui.selectedAdr] || ed.adrenalineHotspots.adrenalSource;
    setText("metric-endo-gland", activeData.name);
    setText("metric-endo-hormone", activeData.hormone);
    setText("metric-endo-target", activeData.target);

    const sLvl = ui.stressLevel;
    const stressTxt =
      sLvl < 30
        ? ed.metrics.calm
        : sLvl < 60
        ? ed.metrics.alert
        : sLvl < 88
        ? ed.metrics.danger
        : ed.metrics.flight;
    setText("metric-endo-stress", stressTxt);
    setText("stress-pill", `${stressTxt} • ${sLvl}%`);

    const slider = document.getElementById("stress-slider");
    if (slider && document.activeElement !== slider) slider.value = String(sLvl);

    // Section 2 labels
    setText("fb-sec-title", ed.fbSec.title);
    setText("fb-sec-subtitle", ed.fbSec.subtitle);
    setText("lbl-endo-flip-main", ed.fbSec.flipMain);
    setText("lbl-fb-front-badge", ed.fbSec.frontBadge);
    setText("lbl-flip-to-thyroid", ed.fbSec.flipToThyroid);
    setText("lbl-eat-sweet", ed.fbSec.eatBtn);
    setText("lbl-fast-exercise", ed.fbSec.fastBtn);
    setText("lbl-pancreas-prompt", ed.fbSec.pancreasPrompt);
    setText("lbl-fb-back-badge", ed.fbSec.backBadge);
    setText("lbl-flip-to-pancreas", ed.fbSec.flipToPancreas);
    setText(
      "lbl-toggle-iodine",
      ui.iodineDeficient ? ed.fbSec.iodineOffBtn : ed.fbSec.iodineOnBtn
    );
    setText("lbl-thyroid-prompt", ed.fbSec.thyroidPrompt);
    setText("tab-fb-lesson", ed.fbSec.lessonTab);
    setText("tab-fb-quiz", ed.fbSec.quizTab);

    const btnGlands = document.getElementById("btn-view-glands");
    const btnAdr = document.getElementById("btn-view-adrenaline");
    if (btnGlands) {
      btnGlands.classList.toggle("active-accent", ui.view === "glands");
      btnGlands.setAttribute("aria-pressed", String(ui.view === "glands"));
    }
    if (btnAdr) {
      btnAdr.classList.toggle("active-accent", ui.view === "adrenaline");
      btnAdr.setAttribute("aria-pressed", String(ui.view === "adrenaline"));
    }

    const pBtn = document.getElementById("btn-endo-pause");
    if (pBtn) {
      pBtn.innerHTML = ui.paused
        ? `▶ <span>${ed.toggles.play}</span>`
        : `⏸ <span>${ed.toggles.pause}</span>`;
    }

    const pinsBtn = document.getElementById("btn-endo-pins");
    if (pinsBtn) {
      pinsBtn.classList.toggle("active-accent", ui.showPins);
      pinsBtn.setAttribute("aria-pressed", String(ui.showPins));
    }

    const fbPBtn = document.getElementById("btn-fb-pause");
    if (fbPBtn) {
      fbPBtn.innerHTML = ui.fbPaused
        ? `▶ <span>${ed.toggles.play}</span>`
        : `⏸ <span>${ed.toggles.pause}</span>`;
    }

    const flipCard = document.getElementById("endo-flip-card");
    const flipMain = document.getElementById("btn-endo-flip-main");
    if (flipCard) flipCard.classList.toggle("is-flipped", ui.isFlipped);
    if (flipMain) flipMain.setAttribute("aria-pressed", String(ui.isFlipped));

    document.querySelectorAll("[data-stress]").forEach((b) => {
      b.classList.toggle("active", Math.abs(Number(b.getAttribute("data-stress")) - sLvl) < 12);
    });

    renderEndoPins();
    renderEndoReader();
    renderFlipDetails();
    renderFBReader();
  }

  // =========================================================
  // CANVAS 1: 60 FPS 9-GLAND MAP & ADRENALINE FIGHT-OR-FLIGHT
  // =========================================================
  function startEndoCanvas() {
    const canvas = document.getElementById("endo-canvas");
    const box = document.getElementById("endo-canvas-box");
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

    function drawGlandsMap(ctx, isLight, ed) {
      const sel = ui.selectedGland;
      const isFemale = ui.sex === "female";
      const gold = isLight ? "#b58428" : "#fbbf24";
      const purple = isLight ? "#7c3aed" : "#c084fc";
      const rose = isLight ? "#c24b65" : "#f472b6";
      const cyan = isLight ? "#2b7eb3" : "#68b8e6";
      const textCol = isLight ? "#162235" : "#e6effa";
      const pulse = (Math.sin(elapsed * 3.8) + 1) / 2;

      ctx.save();
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      // 1. Clean Anatomical Human Head & Torso Silhouette
      ctx.fillStyle = isLight ? "rgba(43,126,179,0.06)" : "rgba(104,184,230,0.07)";
      ctx.strokeStyle = isLight ? "rgba(43,126,179,0.28)" : "rgba(104,184,230,0.28)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      // Head
      ctx.arc(210, 56, 36, Math.PI * 0.65, Math.PI * 2.35);
      // Neck & Shoulders
      ctx.lineTo(226, 98);
      ctx.quadraticCurveTo(286, 108, 294, 150);
      ctx.lineTo(282, 306);
      ctx.quadraticCurveTo(278, 356, 246, 366);
      ctx.lineTo(174, 366);
      ctx.quadraticCurveTo(142, 356, 138, 306);
      ctx.lineTo(126, 150);
      ctx.quadraticCurveTo(134, 108, 194, 98);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Subtle Central Bloodstream Highway (Ductless Hormone Transport!)
      ctx.strokeStyle = isLight ? "rgba(194,75,101,0.22)" : "rgba(224,99,125,0.24)";
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(210, 68);
      ctx.lineTo(210, 332);
      ctx.stroke();

      // 2. Hypothalamus, Pineal & Pituitary (Inside Brain)
      // Hypothalamus
      ctx.fillStyle = sel === "hypothalamus" ? gold : purple;
      ctx.beginPath();
      ctx.ellipse(203, 54, 8, 5, 0, 0, Math.PI * 2);
      ctx.fill();
      // Pineal
      ctx.fillStyle = sel === "pineal" ? gold : cyan;
      ctx.beginPath();
      ctx.arc(225, 52, 5, 0, Math.PI * 2);
      ctx.fill();
      // Pituitary dangling by infundibulum stalk
      ctx.strokeStyle = purple;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(207, 58);
      ctx.lineTo(210, 67);
      ctx.stroke();
      ctx.fillStyle = sel === "pituitary" ? gold : rose;
      ctx.beginPath();
      ctx.arc(210, 72, 6.5, 0, Math.PI * 2);
      ctx.fill();

      // 3. Butterfly-Shaped Thyroid & 4 Parathyroid Dots (Neck)
      ctx.fillStyle = sel === "thyroid" ? "rgba(251,191,36,0.55)" : "rgba(192,132,252,0.45)";
      ctx.strokeStyle = sel === "thyroid" ? gold : purple;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(210, 111);
      ctx.bezierCurveTo(196, 100, 188, 118, 196, 126);
      ctx.quadraticCurveTo(205, 122, 210, 120);
      ctx.quadraticCurveTo(215, 122, 224, 126);
      ctx.bezierCurveTo(232, 118, 224, 100, 210, 111);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // 4 Tiny Parathyroid Dots on Thyroid lobes
      ctx.fillStyle = sel === "parathyroid" ? "#ffffff" : "#38bdf8";
      [
        [196, 109], [197, 121], [224, 109], [223, 121],
      ].forEach(([px, py]) => {
        ctx.beginPath();
        ctx.arc(px, py, sel === "parathyroid" ? 3.2 : 2.3, 0, Math.PI * 2);
        ctx.fill();
      });

      // 4. Thymus Gland (Bilobed, Upper Chest)
      ctx.fillStyle = sel === "thymus" ? "rgba(251,191,36,0.5)" : "rgba(104,184,230,0.42)";
      ctx.strokeStyle = sel === "thymus" ? gold : cyan;
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.ellipse(203, 154, 9, 14, -0.15, 0, Math.PI * 2);
      ctx.ellipse(217, 154, 9, 14, 0.15, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // 5. Kidneys + Triangular Adrenal Glands Perched on Top
      [176, 244].forEach((kx) => {
        // Faint Kidney Reference
        ctx.fillStyle = isLight ? "rgba(100,116,139,0.14)" : "rgba(148,163,184,0.14)";
        ctx.strokeStyle = isLight ? "rgba(100,116,139,0.35)" : "rgba(148,163,184,0.32)";
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.ellipse(kx, 240, 13, 20, kx < 210 ? -0.15 : 0.15, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Triangular Adrenal Cap on top of each kidney
        ctx.fillStyle = sel === "adrenal" ? "rgba(251,191,36,0.65)" : "rgba(224,99,125,0.52)";
        ctx.strokeStyle = sel === "adrenal" ? gold : rose;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(kx, 206);
        ctx.lineTo(kx - 13, 224);
        ctx.lineTo(kx + 13, 224);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      });

      // 6. Anatomically Shaped Pancreas (Head -> Body -> Tapered Tail across Abdomen)
      ctx.fillStyle = sel === "pancreas" ? "rgba(251,191,36,0.60)" : "rgba(223,176,82,0.44)";
      ctx.strokeStyle = sel === "pancreas" ? "#ffffff" : gold;
      ctx.lineWidth = 2;
      ctx.beginPath();
      // Rounded Head on viewer's left (anatomical right)
      ctx.moveTo(192, 208);
      ctx.bezierCurveTo(182, 208, 182, 226, 196, 226);
      // Lower body tapering up toward Tail on viewer's right
      ctx.quadraticCurveTo(222, 222, 248, 208);
      // Tapered Tail tip
      ctx.quadraticCurveTo(252, 202, 244, 200);
      // Upper body back to Head
      ctx.quadraticCurveTo(216, 206, 192, 208);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Pancreatic Duct line inside Pancreas
      ctx.strokeStyle = "rgba(255,255,255,0.55)";
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(194, 217);
      ctx.quadraticCurveTo(218, 214, 242, 205);
      ctx.stroke();

      // 7. Gonads (Auto-Switches Testes for Male vs. Ovaries for Female!)
      ctx.fillStyle = sel === "gonads" ? "rgba(251,191,36,0.55)" : "rgba(244,114,182,0.48)";
      ctx.strokeStyle = sel === "gonads" ? gold : rose;
      ctx.lineWidth = 2;
      if (isFemale) {
        // Paired Ovaries in Pelvis
        [184, 236].forEach((ox) => {
          ctx.beginPath();
          ctx.ellipse(ox, 304, 11, 7, ox < 210 ? -0.2 : 0.2, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        });
      } else {
        // Paired Testes in Scrotum
        [200, 220].forEach((tx) => {
          ctx.beginPath();
          ctx.ellipse(tx, 330, 8.5, 12, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        });
      }

      // 8. Live Animated Hormone Packets Traveling From Active Gland → Bloodstream → Target!
      const src = GLAND_COORDS[sel] || GLAND_COORDS.pituitary;
      const dst = GLAND_TARGET_COORDS[sel] || GLAND_TARGET_COORDS.pituitary;

      // Glowing Aura on Selected Gland
      const aura = ctx.createRadialGradient(src[0], src[1], 2, src[0], src[1], 20 + pulse * 8);
      aura.addColorStop(0, "rgba(251,191,36,0.58)");
      aura.addColorStop(1, "rgba(251,191,36,0)");
      ctx.fillStyle = aura;
      ctx.beginPath();
      ctx.arc(src[0], src[1], 28, 0, Math.PI * 2);
      ctx.fill();

      // Streaming Hormone Dots along Bloodstream
      for (let i = 0; i < 5; i++) {
        const t = (elapsed * 0.52 + i * 0.2) % 1;
        const hx = src[0] + (dst[0] - src[0]) * t + Math.sin(t * Math.PI) * 14;
        const hy = src[1] + (dst[1] - src[1]) * t;
        ctx.fillStyle = "#fef08a";
        ctx.beginPath();
        ctx.arc(hx, hy, 3.4, 0, Math.PI * 2);
        ctx.fill();
      }

      // Bottom Live HUD
      const gData = ed.glands[sel] || ed.glands.pituitary;
      ctx.fillStyle = isLight ? "rgba(15,23,42,0.05)" : "rgba(4,10,20,0.78)";
      ctx.strokeStyle = isLight ? "rgba(15,23,42,0.12)" : "rgba(104,184,230,0.22)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(16, 386, 388, 38, 10);
      ctx.fill();
      ctx.stroke();

      ctx.font = "700 10px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = textCol;
      ctx.textAlign = "center";
      ctx.fillText(`✨ ${gData.name} → ${gData.hormone} → ${gData.target}`, 210, 409);
      ctx.restore();
    }

    function drawAdrenalineLab(ctx, isLight) {
      const s = ui.stressLevel / 100; // 0..1
      const bpm = Math.round(70 + s * 95);
      const beat = Math.pow((Math.sin(elapsed * (bpm / 60) * Math.PI * 2) + 1) / 2, 4);
      const breath = (Math.sin(elapsed * (1.8 + s * 3.2)) + 1) / 2;
      const rose = isLight ? "#c24b65" : "#e0637d";
      const cyan = isLight ? "#2b7eb3" : "#68b8e6";
      const gold = "#fbbf24";
      const mint = "#56c99b";
      const textCol = isLight ? "#162235" : "#e6effa";

      ctx.save();

      // Central Adrenal Gland Hub (Middle: 210, 224)
      const adrGlow = ctx.createRadialGradient(210, 224, 6, 210, 224, 38 + s * 28);
      adrGlow.addColorStop(0, `rgba(251,191,36,${0.35 + s * 0.5})`);
      adrGlow.addColorStop(1, "rgba(251,191,36,0)");
      ctx.fillStyle = adrGlow;
      ctx.beginPath();
      ctx.arc(210, 224, 66, 0, Math.PI * 2);
      ctx.fill();

      // Triangular Adrenal Gland
      ctx.fillStyle = "rgba(251,191,36,0.35)";
      ctx.strokeStyle = gold;
      ctx.lineWidth = 2.6;
      ctx.beginPath();
      ctx.moveTo(210, 194);
      ctx.lineTo(174, 246);
      ctx.lineTo(246, 246);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.font = "800 9.5px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = textCol;
      ctx.textAlign = "center";
      ctx.fillText("ADRENAL", 210, 232);

      // 3 Target Organ Nodes: Heart (Top-Left), Lungs (Top-Right), Muscles+Liver (Bottom)
      const targets = [
        { x: 120, y: 112, label: `HEART • ${bpm} BPM`, col: rose, scale: 1 + beat * (0.1 + s * 0.14) },
        { x: 300, y: 112, label: `LUNGS • +${Math.round(s * 120)}% O₂`, col: cyan, scale: 1 + breath * (0.08 + s * 0.14) },
        { x: 210, y: 332, label: `MUSCLES & LIVER • +${Math.round(s * 95)}% GLUCOSE`, col: mint, scale: 1 + s * 0.08 },
      ];

      targets.forEach((tg, idx) => {
        // Bloodstream artery connector from Adrenal -> Target
        ctx.strokeStyle = tg.col;
        ctx.globalAlpha = 0.35 + s * 0.5;
        ctx.lineWidth = 2.5 + s * 2;
        ctx.beginPath();
        ctx.moveTo(210, 224);
        ctx.lineTo(tg.x, tg.y);
        ctx.stroke();
        ctx.globalAlpha = 1;

        // Streaming Adrenaline Packets flying faster as Stress rises!
        const pktCount = 2 + Math.floor(s * 4);
        for (let i = 0; i < pktCount; i++) {
          const t = (elapsed * (0.45 + s * 1.1) + i / pktCount + idx * 0.17) % 1;
          const px = 210 + (tg.x - 210) * t;
          const py = 224 + (tg.y - 224) * t;
          ctx.fillStyle = gold;
          ctx.beginPath();
          ctx.arc(px, py, 3.8, 0, Math.PI * 2);
          ctx.fill();
        }

        // Target Card Node
        ctx.save();
        ctx.translate(tg.x, tg.y);
        ctx.scale(tg.scale, tg.scale);
        ctx.fillStyle = isLight ? "rgba(255,255,255,0.85)" : "rgba(14,24,41,0.88)";
        ctx.strokeStyle = tg.col;
        ctx.lineWidth = 2.4;
        ctx.beginPath();
        ctx.roundRect(idx === 2 ? -128 : -72, -26, idx === 2 ? 256 : 144, 52, 16);
        ctx.fill();
        ctx.stroke();

        ctx.font = "800 10px 'Plus Jakarta Sans', sans-serif";
        ctx.fillStyle = tg.col;
        ctx.textAlign = "center";
        ctx.fillText(tg.label, 0, 4);
        ctx.restore();
      });

      // Bottom HUD
      ctx.fillStyle = isLight ? "rgba(15,23,42,0.05)" : "rgba(4,10,20,0.78)";
      ctx.strokeStyle = isLight ? "rgba(15,23,42,0.12)" : "rgba(104,184,230,0.22)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(16, 386, 388, 38, 10);
      ctx.fill();
      ctx.stroke();

      ctx.font = "700 10px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = s > 0.65 ? rose : textCol;
      ctx.textAlign = "center";
      ctx.fillText(
        `⚡ ADRENALINE SURGE: ${Math.round(ui.stressLevel)}% • Heart ${bpm} BPM • Airways Wide Open`,
        210,
        409
      );
      ctx.restore();
    }

    function frame(now) {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      if (!ui.paused) elapsed += dt;

      const isLight = BL.getState().theme === "light";
      const ed = getED();

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform((width / 420) * dpr, 0, 0, (height / 440) * dpr, 0, 0);

      if (ui.view === "glands") {
        drawGlandsMap(ctx, isLight, ed);
      } else {
        drawAdrenalineLab(ctx, isLight);
      }

      requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
    void ro;
  }

  // =========================================================
  // CANVAS 2: ANATOMICALLY DETAILED PANCREAS & ISLETS (460x300)
  // =========================================================
  function startPancreasCanvas() {
    const canvas = document.getElementById("pancreas-canvas");
    const box = document.getElementById("pancreas-canvas-box");
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

      if (!ui.fbPaused) {
        elapsed += dt;
        // Smoothly regulate blood glucose back toward normal 95 mg/dL via Insulin/Glucagon!
        const diff = ui.targetGlucose - ui.bloodGlucose;
        if (Math.abs(diff) > 0.6) {
          ui.bloodGlucose += diff * dt * 0.28;
        } else {
          ui.bloodGlucose = 95;
          ui.sugarMode = "balanced";
        }
      }

      const isLight = BL.getState().theme === "light";
      const ed = getED();
      const sel = ui.selectedPancreasPart;
      const gold = isLight ? "#b58428" : "#dfb052";
      const cyan = isLight ? "#2b7eb3" : "#68b8e6";
      const rose = isLight ? "#c24b65" : "#e0637d";
      const mint = "#56c99b";
      const textCol = isLight ? "#162235" : "#e6effa";

      const isHigh = ui.bloodGlucose > 112;
      const isLow = ui.bloodGlucose < 82;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform((width / 460) * dpr, 0, 0, (height / 300) * dpr, 0, 0);

      ctx.save();
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      // 1. C-SHAPED DUODENUM CURVE CRADLING THE PANCREAS HEAD (Left)
      ctx.strokeStyle = isLight ? "rgba(234,88,12,0.34)" : "rgba(251,146,60,0.36)";
      ctx.lineWidth = 22;
      ctx.beginPath();
      ctx.moveTo(86, 46);
      ctx.bezierCurveTo(26, 52, 24, 164, 92, 168);
      ctx.stroke();

      ctx.font = "700 8.5px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = isLight ? "#9a3412" : "#fdba74";
      ctx.textAlign = "center";
      ctx.fillText("DUODENUM", 54, 34);

      // 2. ANATOMICALLY CONTOURED PANCREAS (Rounded Head -> Neck -> Body -> Tapered Tail)
      ctx.fillStyle =
        sel === "anatomy"
          ? "rgba(251,191,36,0.44)"
          : isLight
          ? "rgba(217,119,6,0.28)"
          : "rgba(223,176,82,0.32)";
      ctx.strokeStyle = sel === "anatomy" ? "#ffffff" : gold;
      ctx.lineWidth = 2.4;
      ctx.beginPath();
      // Rounded Head nestled inside Duodenum curve
      ctx.moveTo(92, 74);
      ctx.bezierCurveTo(54, 72, 52, 148, 96, 146);
      // Uncinate process / Neck transition
      ctx.quadraticCurveTo(118, 142, 134, 126);
      // Lower Body tapering gracefully upward toward Tail
      ctx.bezierCurveTo(176, 122, 224, 108, 258, 84);
      // Tapered Tail tip
      ctx.quadraticCurveTo(266, 72, 250, 68);
      // Upper Body back to Head
      ctx.bezierCurveTo(206, 78, 152, 84, 118, 82);
      ctx.quadraticCurveTo(106, 74, 92, 74);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Lobular Acinar Texture Bubbles inside Pancreas
      ctx.strokeStyle = isLight ? "rgba(181,132,40,0.35)" : "rgba(254,240,138,0.28)";
      ctx.lineWidth = 1.2;
      [
        [84, 98], [94, 124], [126, 106], [164, 102], [202, 92], [234, 80],
      ].forEach(([lx, ly]) => {
        ctx.beginPath();
        ctx.arc(lx, ly, 8, 0, Math.PI * 2);
        ctx.stroke();
      });

      // Main Pancreatic Duct (Wirsung Duct) running from Tail -> Head -> Opening into Duodenum!
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 2.6;
      ctx.beginPath();
      ctx.moveTo(246, 77);
      ctx.bezierCurveTo(196, 96, 136, 106, 98, 112);
      ctx.lineTo(54, 112); // Opens into Duodenum!
      ctx.stroke();

      // Side Duct Branches
      ctx.lineWidth = 1.3;
      [
        [210, 90, 206, 78], [174, 99, 170, 114], [138, 106, 134, 90], [104, 112, 98, 132],
      ].forEach(([x1, y1, x2, y2]) => {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      });

      // Callout Labels for Head / Body / Tail
      ctx.font = "700 8.5px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = textCol;
      ctx.textAlign = "center";
      ctx.fillText("HEAD", 88, 162);
      ctx.fillText("BODY", 168, 138);
      ctx.fillText("TAIL", 248, 60);

      // 3. MAGNIFIED CALLOUT: ISLET OF LANGERHANS (Right Side Circle: 368, 102)
      // Dashed zoom connector lines from Pancreas Tail -> Zoom Lens
      ctx.strokeStyle = "rgba(104,184,230,0.45)";
      ctx.lineWidth = 1.2;
      ctx.setLineDash([4, 3]);
      ctx.beginPath();
      ctx.moveTo(222, 86);
      ctx.lineTo(324, 54);
      ctx.moveTo(222, 98);
      ctx.lineTo(324, 150);
      ctx.stroke();
      ctx.setLineDash([]);

      // Magnified Islet Lens
      ctx.fillStyle = isLight ? "rgba(255,255,255,0.88)" : "rgba(14,24,41,0.92)";
      ctx.strokeStyle = isHigh ? cyan : isLow ? gold : rose;
      ctx.lineWidth = 2.6;
      ctx.beginPath();
      ctx.arc(368, 102, 56, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Central Capillary inside Islet
      ctx.strokeStyle = "rgba(224,99,125,0.45)";
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(318, 102);
      ctx.quadraticCurveTo(368, 92, 418, 102);
      ctx.stroke();

      // Distinct BETA (β) Cells (Cyan — Secrete INSULIN!)
      [
        [350, 82], [368, 76], [386, 84], [358, 104], [378, 106],
      ].forEach(([bx, by], i) => {
        const glow = isHigh || sel === "betaCells" ? Math.sin(elapsed * 8 + i) * 2 : 0;
        ctx.fillStyle = cyan;
        ctx.beginPath();
        ctx.arc(bx, by, 7.5 + glow * 0.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.font = "800 8px 'Plus Jakarta Sans', sans-serif";
        ctx.fillStyle = "#040811";
        ctx.fillText("β", bx, by + 3);
      });

      // Distinct ALPHA (α) Cells (Gold — Secrete GLUCAGON!)
      [
        [346, 124], [368, 130], [390, 124],
      ].forEach(([ax, ay], i) => {
        const glow = isLow || sel === "alphaCells" ? Math.sin(elapsed * 8 + i) * 2 : 0;
        ctx.fillStyle = gold;
        ctx.beginPath();
        ctx.arc(ax, ay, 7.5 + glow * 0.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.font = "800 8px 'Plus Jakarta Sans', sans-serif";
        ctx.fillStyle = "#040811";
        ctx.fillText("α", ax, ay + 3);
      });

      ctx.font = "800 8.5px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = textCol;
      ctx.fillText("ISLET OF LANGERHANS", 368, 36);

      // 4. LIVE BLOOD GLUCOSE METER & HORMONE STREAM (y = 186..232)
      ctx.fillStyle = isLight ? "rgba(224,99,125,0.12)" : "rgba(224,99,125,0.18)";
      ctx.strokeStyle = rose;
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.roundRect(22, 184, 416, 48, 12);
      ctx.fill();
      ctx.stroke();

      // Blood Glucose Numerical Readout
      const gluVal = Math.round(ui.bloodGlucose);
      ctx.font = "800 11px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = isHigh ? rose : isLow ? gold : mint;
      ctx.textAlign = "left";
      ctx.fillText(`BLOOD GLUCOSE: ${gluVal} mg/dL`, 36, 204);

      ctx.textAlign = "right";
      ctx.fillStyle = isHigh ? cyan : isLow ? gold : mint;
      ctx.fillText(
        isHigh ? "β → INSULIN ACTIVE" : isLow ? "α → GLUCAGON ACTIVE" : "✓ BALANCED (90–100)",
        424,
        204
      );

      // Animated Glucose & Active Hormone Particles Flowing in Bloodstream
      const gluCount = Math.max(4, Math.min(18, Math.round((ui.bloodGlucose - 40) / 8)));
      for (let i = 0; i < gluCount; i++) {
        const gx = 36 + ((elapsed * 55 + i * (380 / gluCount)) % 386);
        const gy = 219 + Math.sin(elapsed * 4 + i) * 4;
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(gx, gy, 3.2, 0, Math.PI * 2);
        ctx.fill();
      }
      if (isHigh || isLow) {
        for (let i = 0; i < 6; i++) {
          const hx = 36 + ((elapsed * 85 + i * 64) % 386);
          ctx.fillStyle = isHigh ? cyan : gold;
          ctx.beginPath();
          ctx.arc(hx, 217, 4.4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Bottom HUD
      ctx.fillStyle = isLight ? "rgba(15,23,42,0.05)" : "rgba(4,10,20,0.78)";
      ctx.strokeStyle = isLight ? "rgba(15,23,42,0.12)" : "rgba(104,184,230,0.22)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(14, 248, 432, 38, 9);
      ctx.fill();
      ctx.stroke();

      const hudMsg = isHigh
        ? ed.fbSec.pancreasHud.high
        : isLow
        ? ed.fbSec.pancreasHud.low
        : ed.fbSec.pancreasHud.balanced;

      ctx.font = "700 10px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = textCol;
      ctx.textAlign = "center";
      ctx.fillText(hudMsg, 230, 271);
      ctx.restore();

      requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
    void ro;
  }

  // =========================================================
  // CANVAS 3: PITUITARY–THYROID NEGATIVE FEEDBACK & GOITRE
  // =========================================================
  function startThyroidCanvas() {
    const canvas = document.getElementById("thyroid-canvas");
    const box = document.getElementById("thyroid-canvas-box");
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
      if (!ui.fbPaused) elapsed += dt;

      const isLight = BL.getState().theme === "light";
      const ed = getED();
      const isGoitre = ui.iodineDeficient;
      const pulse = (Math.sin(elapsed * 4.5) + 1) / 2;
      const purple = isLight ? "#7c3aed" : "#c084fc";
      const rose = isLight ? "#c24b65" : "#e0637d";
      const cyan = isLight ? "#2b7eb3" : "#68b8e6";
      const mint = "#56c99b";
      const textCol = isLight ? "#162235" : "#e6effa";

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform((width / 460) * dpr, 0, 0, (height / 300) * dpr, 0, 0);

      ctx.save();
      // 1. PITUITARY GLAND (Top Center: 230, 52)
      ctx.fillStyle = isGoitre ? "rgba(224,99,125,0.34)" : "rgba(192,132,252,0.28)";
      ctx.strokeStyle = isGoitre ? rose : purple;
      ctx.lineWidth = 2.4;
      ctx.beginPath();
      ctx.roundRect(156, 28, 148, 42, 14);
      ctx.fill();
      ctx.stroke();

      ctx.font = "800 10.5px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = textCol;
      ctx.textAlign = "center";
      ctx.fillText(isGoitre ? "PITUITARY (FLOODING TSH!)" : "PITUITARY GLAND", 230, 53);

      // 2. TRACHEA + BUTTERFLY THYROID GLAND (Bottom Center: 230, 174)
      // Trachea rings
      ctx.strokeStyle = isLight ? "rgba(100,116,139,0.32)" : "rgba(148,163,184,0.28)";
      ctx.lineWidth = 22;
      ctx.beginPath();
      ctx.moveTo(230, 118);
      ctx.lineTo(230, 224);
      ctx.stroke();

      // Butterfly Thyroid (Visibly swells huge when Iodine is missing -> GOITRE!)
      const swell = isGoitre ? 1.42 + pulse * 0.1 : 1.0;
      ctx.save();
      ctx.translate(230, 174);
      ctx.scale(swell, swell);
      ctx.fillStyle = isGoitre ? "rgba(224,99,125,0.52)" : "rgba(192,132,252,0.36)";
      ctx.strokeStyle = isGoitre ? rose : purple;
      ctx.lineWidth = 2.4;
      ctx.beginPath();
      ctx.moveTo(0, -10);
      ctx.bezierCurveTo(-34, -36, -54, 10, -28, 30);
      ctx.quadraticCurveTo(-10, 22, 0, 14);
      ctx.quadraticCurveTo(10, 22, 28, 30);
      ctx.bezierCurveTo(54, 10, 34, -36, 0, -10);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      ctx.font = "800 10px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = isGoitre ? rose : textCol;
      ctx.fillText(isGoitre ? "⚠ SWOLLEN GOITRE!" : "THYROID GLAND", 230, 228);

      // 3. LEFT ARC: TSH SIGNAL TRAVELING DOWN (Pituitary -> Thyroid)
      ctx.strokeStyle = isGoitre ? rose : cyan;
      ctx.lineWidth = isGoitre ? 3.5 : 2.2;
      ctx.beginPath();
      ctx.moveTo(156, 52);
      ctx.quadraticCurveTo(96, 112, 168, 170);
      ctx.stroke();

      const tshCount = isGoitre ? 7 : 3;
      for (let i = 0; i < tshCount; i++) {
        const t = (elapsed * (isGoitre ? 0.9 : 0.45) + i / tshCount) % 1;
        const mt = 1 - t;
        const x = mt * mt * 156 + 2 * mt * t * 96 + t * t * 168;
        const y = mt * mt * 52 + 2 * mt * t * 112 + t * t * 170;
        ctx.fillStyle = isGoitre ? rose : cyan;
        ctx.beginPath();
        ctx.arc(x, y, isGoitre ? 4.8 : 3.8, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.font = "800 9.5px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = isGoitre ? rose : cyan;
      ctx.textAlign = "right";
      ctx.fillText(isGoitre ? "EXCESS TSH!" : "TSH ↓", 118, 114);

      // 4. RIGHT ARC: THYROXINE NEGATIVE FEEDBACK UP (Thyroid -> Pituitary)
      ctx.strokeStyle = isGoitre ? "rgba(148,163,184,0.28)" : mint;
      ctx.lineWidth = 2.4;
      ctx.setLineDash(isGoitre ? [5, 5] : []);
      ctx.beginPath();
      ctx.moveTo(292, 170);
      ctx.quadraticCurveTo(364, 112, 304, 52);
      ctx.stroke();
      ctx.setLineDash([]);

      if (!isGoitre) {
        for (let i = 0; i < 3; i++) {
          const t = (elapsed * 0.45 + i / 3) % 1;
          const mt = 1 - t;
          const x = mt * mt * 292 + 2 * mt * t * 364 + t * t * 304;
          const y = mt * mt * 170 + 2 * mt * t * 112 + t * t * 52;
          ctx.fillStyle = mint;
          ctx.beginPath();
          ctx.arc(x, y, 4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.font = "800 9.5px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = isGoitre ? rose : mint;
      ctx.textAlign = "left";
      ctx.fillText(isGoitre ? "NO THYROXINE ✕" : "THYROXINE ↑", 342, 108);
      ctx.fillText(isGoitre ? "(No Iodine!)" : "(Slows TSH)", 342, 122);

      // Bottom HUD
      ctx.fillStyle = isLight ? "rgba(15,23,42,0.05)" : "rgba(4,10,20,0.78)";
      ctx.strokeStyle = isLight ? "rgba(15,23,42,0.12)" : "rgba(104,184,230,0.22)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(14, 248, 432, 38, 9);
      ctx.fill();
      ctx.stroke();

      ctx.font = "700 10px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = isGoitre ? rose : textCol;
      ctx.textAlign = "center";
      ctx.fillText(
        isGoitre ? ed.fbSec.thyroidHud.goitre : ed.fbSec.thyroidHud.normal,
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
    ui.sex = BL.getState().sex === "female" ? "female" : "male";

    const btnGlands = document.getElementById("btn-view-glands");
    const btnAdr = document.getElementById("btn-view-adrenaline");
    if (btnGlands) {
      btnGlands.addEventListener("click", () => {
        ui.view = "glands";
        syncEndoUI();
      });
    }
    if (btnAdr) {
      btnAdr.addEventListener("click", () => {
        ui.view = "adrenaline";
        if (ui.stressLevel < 40) ui.stressLevel = 78;
        syncEndoUI();
      });
    }

    const btnSex = document.getElementById("btn-endo-sex");
    if (btnSex) {
      btnSex.addEventListener("click", () => {
        ui.sex = ui.sex === "male" ? "female" : "male";
        syncEndoUI();
      });
    }

    const pBtn = document.getElementById("btn-endo-pause");
    if (pBtn) {
      pBtn.addEventListener("click", () => {
        ui.paused = !ui.paused;
        syncEndoUI();
      });
    }

    const pinsBtn = document.getElementById("btn-endo-pins");
    if (pinsBtn) {
      pinsBtn.addEventListener("click", () => {
        ui.showPins = !ui.showPins;
        syncEndoUI();
      });
    }

    const slider = document.getElementById("stress-slider");
    if (slider) {
      slider.addEventListener("input", (e) => {
        ui.view = "adrenaline";
        ui.stressLevel = Math.max(0, Math.min(100, Number(e.target.value) || 0));
        syncEndoUI();
      });
    }

    document.querySelectorAll("[data-stress]").forEach((b) => {
      b.addEventListener("click", () => {
        ui.view = "adrenaline";
        ui.stressLevel = Number(b.getAttribute("data-stress")) || 10;
        syncEndoUI();
      });
    });

    document.querySelectorAll("#endo-reader-panel .tab-btn").forEach((b) => {
      b.addEventListener("click", () => {
        ui.endoTab = b.getAttribute("data-endo-tab");
        renderEndoReader();
      });
    });

    // Section 2: 3D Flip Card Controls
    const toggleFlip = (force) => {
      ui.isFlipped = typeof force === "boolean" ? force : !ui.isFlipped;
      syncEndoUI();
    };
    const btnFlipMain = document.getElementById("btn-endo-flip-main");
    const btnFlipThy = document.getElementById("btn-flip-to-thyroid");
    const btnFlipPan = document.getElementById("btn-flip-to-pancreas");
    if (btnFlipMain) btnFlipMain.addEventListener("click", () => toggleFlip());
    if (btnFlipThy) btnFlipThy.addEventListener("click", () => toggleFlip(true));
    if (btnFlipPan) btnFlipPan.addEventListener("click", () => toggleFlip(false));

    const fbPBtn = document.getElementById("btn-fb-pause");
    if (fbPBtn) {
      fbPBtn.addEventListener("click", () => {
        ui.fbPaused = !ui.fbPaused;
        syncEndoUI();
      });
    }

    const btnEat = document.getElementById("btn-eat-sweet");
    const btnFast = document.getElementById("btn-fast-exercise");
    if (btnEat) {
      btnEat.addEventListener("click", () => {
        ui.fbPaused = false;
        ui.sugarMode = "high";
        ui.bloodGlucose = 175;
        ui.targetGlucose = 95;
        ui.selectedPancreasPart = "betaCells";
        renderFlipDetails();
      });
    }
    if (btnFast) {
      btnFast.addEventListener("click", () => {
        ui.fbPaused = false;
        ui.sugarMode = "low";
        ui.bloodGlucose = 58;
        ui.targetGlucose = 95;
        ui.selectedPancreasPart = "alphaCells";
        renderFlipDetails();
      });
    }

    const btnIodine = document.getElementById("btn-toggle-iodine");
    if (btnIodine) {
      btnIodine.addEventListener("click", () => {
        ui.fbPaused = false;
        ui.iodineDeficient = !ui.iodineDeficient;
        ui.selectedThyroidStep = ui.iodineDeficient ? "goitre" : "feedback";
        syncEndoUI();
      });
    }

    document.querySelectorAll("#fb-reader-panel .tab-btn").forEach((b) => {
      b.addEventListener("click", () => {
        ui.fbTab = b.getAttribute("data-fb-tab");
        renderFBReader();
      });
    });

    syncEndoUI();
    BL.subscribe(syncEndoUI);

    startEndoCanvas();
    startPancreasCanvas();
    startThyroidCanvas();
  });
})();