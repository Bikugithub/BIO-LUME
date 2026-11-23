(function () {
  const BL = window.BioLume;
  if (!BL) return;

  // =========================================================
  // TRILINGUAL CLASS 9–10 SKELETAL SYSTEM DICTIONARY (EN/HI/BN)
  // =========================================================
  const SKEL_DICT = {
    en: {
      chapterBadge: "Chapter 05 • Class 9–10 Lab",
      title: "Human Skeletal System — Live Lab",
      subtitle:
        "Filter Axial (80) vs. Appendicular (126) bones, or switch to the 4 Movable Joints live simulator",
      views: {
        bones: "206 Bones Map",
        joints: "4 Movable Joints",
      },
      toggles: {
        pause: "Pause",
        play: "Resume",
        pins: "Hotspot Pins",
      },
      metrics: {
        total: "Adult Bones",
        axial: "Axial",
        append: "Appendicular",
        focus: "Active Filter",
        allLabel: "All 206",
        axialLabel: "Axial (80)",
        appendLabel: "Append. (126)",
        jointsLabel: "4 Joints",
      },
      divControl: "Skeleton Division Highlight",
      divPills: {
        all: "All 206 Bones",
        axial: "Axial Skeleton • 80 Bones",
        appendicular: "Appendicular Skeleton • 126 Bones",
        joints: "4 Synovial Movable Joints",
      },
      presets: {
        all: "All (206)",
        axial: "Axial (80)",
        append: "Appendicular (126)",
        joints: "4 Joints Lab",
      },
      tabs: {
        inspect: "Bone & Joint Inspector",
        lesson: "Class 9–10 Lesson",
        quiz: "Quick Check",
      },
      selectPrompt:
        "Tap any glowing pin on the skeleton (or switch to the 4 Movable Joints view) to inspect bone counts and mechanics.",
      boneHotspots: {
        skull: {
          name: "Skull (Cranium & Face)",
          en: "Skull • 22 Bones",
          role: "Axial Skeleton • Protective Helmet",
          summary:
            "Made of 8 fused cranial bones protecting the brain and 14 facial bones shaping the face. All skull joints are immovable (fixed sutures) except the lower jaw (Mandible), which moves so you can speak and chew.",
          keyFact: "Inside each middle ear sit the 3 smallest bones in the human body—the Stirrup (Stapes) is only ~3 mm long!",
        },
        spine: {
          name: "Vertebral Column (Spine)",
          en: "Backbone • 26 Bones (33 in Infants)",
          role: "Axial Skeleton • Central Pillar",
          summary:
            "A flexible S-shaped column of stacked ring-like bones (vertebrae) cushioned by cartilage discs. It supports your upright posture and forms a bony tunnel shielding the delicate Spinal Cord.",
          keyFact: "Divided into 7 Cervical (neck), 12 Thoracic, 5 Lumbar, 1 fused Sacrum, and 1 Coccyx (tailbone).",
        },
        ribcage: {
          name: "Ribcage & Sternum",
          en: "12 Pairs of Ribs + Breastbone (25 Bones)",
          role: "Axial Skeleton • Heart & Lung Shield",
          summary:
            "12 pairs of curved ribs wrap from the spine around to the flat central Sternum (breastbone). Pairs 1–7 are True Ribs, 8–10 are False Ribs, and 11–12 are Floating Ribs.",
          keyFact: "Expands outward and upward during inhalation so your lungs can draw air in.",
        },
        arms: {
          name: "Shoulder Girdle & Arm Bones",
          en: "64 Bones (Both Arms + Clavicles/Scapulae)",
          role: "Appendicular Skeleton • Precision Reach",
          summary:
            "Anchored by the Collarbone (Clavicle) and Shoulder Blade (Scapula). Each arm contains the Humerus (upper arm), Radius & Ulna (forearm), plus 27 tiny bones in the wrist and hand for fine grip.",
          keyFact: "Your hands and wrists alone contain 54 bones—over a quarter of all bones in your body!",
        },
        pelvis: {
          name: "Pelvic Girdle (Hip Bones)",
          en: "Pelvis • 2 Coxal Bones",
          role: "Appendicular Skeleton • Weight Transfer",
          summary:
            "A sturdy basin-shaped ring connecting the spine to the leg bones. It transfers upper-body weight to the legs and protects the urinary bladder and reproductive organs.",
          keyFact: "The female pelvis is naturally wider and shallower than the male pelvis to support childbirth.",
        },
        legs: {
          name: "Femur & Leg Bones",
          en: "60 Bones (Both Legs & Feet)",
          role: "Appendicular Skeleton • Locomotion",
          summary:
            "Built around the Femur (thigh bone), Patella (kneecap), Tibia (shin bone), Fibula, and 26 foot bones forming springy arches for walking and running.",
          keyFact: "The Femur is the longest, heaviest, and strongest bone in the entire human body.",
        },
      },
      jointHotspots: {
        ballSocket: {
          name: "1. Ball & Socket Joint",
          en: "360° Multi-Axis Motion",
          role: "Shoulder & Hip Joints",
          summary:
            "The rounded ball-shaped head of one bone fits snugly into a cup-like cavity (socket) of another bone, allowing wide movement in all directions including rotation.",
          keyFact: "Lets you bowl a cricket ball or swing your leg in a full circle.",
        },
        hinge: {
          name: "2. Hinge Joint",
          en: "1-Plane Back & Forth",
          role: "Elbow, Knee & Finger Joints",
          summary:
            "Works exactly like a door hinge—allows strong bending (flexion) and straightening (extension) in a single plane while preventing sideways wobbling.",
          keyFact: "Supports heavy lifting and walking stability without buckling sideways.",
        },
        pivot: {
          name: "3. Pivot Joint",
          en: "Side-to-Side Rotation",
          role: "Neck (Atlas–Axis) & Forearm",
          summary:
            "A cylindrical bone or ring rotates around a stationary central peg, enabling smooth twisting or shaking motions.",
          keyFact: "Allows you to turn your head left and right to say 'No'.",
        },
        gliding: {
          name: "4. Gliding Joint",
          en: "Smooth Sliding Motion",
          role: "Wrist (Carpals) & Ankle (Tarsals)",
          summary:
            "Flat or slightly curved bone surfaces glide smoothly past one another in multiple directions within tight ligament limits.",
          keyFact: "Gives your wrist and ankle smooth flexibility when writing or walking on uneven ground.",
        },
      },
      lesson: {
        heading: "Class 9–10 Lesson Plan: Human Skeletal System",
        sections: [
          {
            title: "1. Two Main Divisions of the 206 Bones",
            html: `<p>A newborn baby has ~<strong>300 bones</strong>; many fuse during growth leaving <strong>206 adult bones</strong> divided into two groups:</p>
            <p style="margin-top:6px">• <strong>Axial Skeleton (80 bones):</strong> Central body axis — Skull (22), Ear ossicles (6), Hyoid (1), Vertebral Column (26), Ribcage &amp; Sternum (25).<br/>
            • <strong>Appendicular Skeleton (126 bones):</strong> Limbs &amp; Girdles — Pectoral girdle &amp; Arms (64) + Pelvic girdle &amp; Legs (62).</p>`,
          },
          {
            title: "2. Five Essential Functions of the Skeleton",
            html: `<p>1. <strong>Shape &amp; Support:</strong> Rigid framework for upright posture.<br/>
            2. <strong>Protection:</strong> Skull shields Brain; Ribcage shields Heart &amp; Lungs; Spine shields Spinal Cord.<br/>
            3. <strong>Movement:</strong> Acts as levers pulled by skeletal muscles.<br/>
            4. <strong>Blood Cell Factory:</strong> Red Bone Marrow manufactures RBCs, WBCs, and Platelets.<br/>
            5. <strong>Mineral Bank:</strong> Stores Calcium (Ca²⁺) and Phosphorus.</p>`,
          },
          {
            title: "3. Three Types of Joints",
            html: `<p>• <strong>Fixed (Immovable) Joints:</strong> Interlocking skull sutures (no movement).<br/>
            • <strong>Slightly Movable Joints:</strong> Cartilage pads between spinal vertebrae.<br/>
            • <strong>Freely Movable (Synovial) Joints:</strong> Lubricated by <em>synovial fluid</em> &amp; cushioned by cartilage — includes <strong>Ball &amp; Socket, Hinge, Pivot,</strong> and <strong>Gliding</strong> joints.</p>`,
          },
          {
            title: "4. Bone vs. Cartilage (Exam Comparison)",
            html: `<div class="detail-fact" style="margin-top:4px"><strong>Bone:</strong> Hard, rigid, rich in Calcium &amp; Phosphorus salts, contains blood vessels &amp; marrow.<br/><strong>Cartilage:</strong> Smooth, flexible, elastic (no calcium salts), cushions joint ends, ear pinna, nose tip, and trachea rings.</div>`,
          },
        ],
      },
      quiz: {
        title: "Skeletal System Quick Check",
        correctMsg: "Spot on! Solid anatomy knowledge.",
        wrongMsg: "Not quite — review the explanation below.",
        nextBtn: "Next Question",
        restartBtn: "Restart Quiz",
        scoreLabel: "Score",
        questions: [
          {
            q: "How many bones make up the Axial Skeleton and the Appendicular Skeleton in an adult human?",
            options: [
              "Axial: 126, Appendicular: 80",
              "Axial: 80, Appendicular: 126",
              "Axial: 100, Appendicular: 106",
              "Axial: 60, Appendicular: 146",
            ],
            answer: 1,
            explain: "The Axial Skeleton (skull, spine, ribcage) has 80 bones and the Appendicular Skeleton (limbs & girdles) has 126 bones (Total = 206).",
          },
          {
            q: "Which type of movable joint is found in the Shoulder and Hip, allowing 360° rotation?",
            options: ["Hinge Joint", "Pivot Joint", "Ball & Socket Joint", "Gliding Joint"],
            answer: 2,
            explain: "A Ball & Socket joint fits a rounded bone head into a cup socket for full multi-directional movement.",
          },
          {
            q: "Which is the longest and strongest bone in the human body?",
            options: ["Humerus", "Tibia", "Femur", "Sternum"],
            answer: 2,
            explain: "The Femur (thigh bone) supports body weight and is the longest and strongest bone in the body.",
          },
          {
            q: "Which movable joint allows you to shake your head left and right?",
            options: ["Pivot Joint", "Hinge Joint", "Fixed Joint", "Gliding Joint"],
            answer: 0,
            explain: "The Pivot joint between the first two neck vertebrae (Atlas & Axis) allows side-to-side head rotation.",
          },
          {
            q: "Which bone in the human skull is movable?",
            options: ["Cranium", "Lower Jaw (Mandible)", "Nasal Bone", "Upper Jaw (Maxilla)"],
            answer: 1,
            explain: "Every skull joint is a fixed suture except the Mandible (lower jaw), which moves for chewing and speaking.",
          },
        ],
      },

      // =========================================================
      // SECTION 2: 3D FLIPPABLE LIVING BONE <-> FRACTURE HEALING
      // =========================================================
      boneSec: {
        title: "Inside a Living Bone & Fracture Healing — 3D Flippable Lab",
        subtitle:
          "Front side: Compact Bone, Spongy Bone & Red Marrow blood factory • Flip the card to see how a broken bone heals",
        flipMain: "Flip Card: Bone Marrow ↔ Fracture Repair",
        frontBadge: "FRONT • LIVING BONE & MARROW FACTORY",
        flipToHeal: "Flip to Fracture Healing",
        produceBtn: "Produce Fresh Blood Cells (Red Marrow!)",
        marrowPrompt:
          "Tap any layer of a living bone below to highlight it and see why bones are strong yet lightweight:",
        backBadge: "BACK • 4 STAGES OF BONE FRACTURE HEALING",
        flipToMarrow: "Flip Back to Bone Anatomy",
        nextHealBtn: "Advance Healing Stage (Step 1 → 4)",
        healPrompt:
          "Follow the 4 biological stages of how living bone cells (Osteoblasts) rebuild a fracture:",
        lessonTab: "Bone Structure & Health Notes (Class 9–10)",
        quizTab: "Bone Marrow & Healing Quiz",
        analogyLabel: "Easy Analogy",
        marrowHud: "RED BONE MARROW: Manufacturing ~2 Million Fresh RBCs Every Second!",
        healHud: [
          "STAGE 1 (Days 1–5): Hematoma blood clot seals the fracture gap",
          "STAGE 2 (Weeks 1–3): Soft Cartilage Callus splints the broken ends",
          "STAGE 3 (Weeks 4–8): Osteoblasts build Hard Bony Callus with Calcium",
          "STAGE 4 (Months): Bone Remodeling restores smooth original strength!",
        ],
      },
      marrowParts: {
        compact: {
          name: "Compact Bone",
          en: "Dense Outer Shell",
          role: "Structural Armor",
          analogy: "Like the hard steel walls of a skyscraper pillar—handles heavy weight without bending.",
          summary:
            "The smooth, dense, rock-hard outer layer made of tightly packed microscopic cylinders (Osteons) rich in Calcium Phosphate and flexible Collagen fibers.",
        },
        spongy: {
          name: "Spongy Bone",
          en: "Honeycomb Ends",
          role: "Lightweight Shock Absorber",
          analogy: "Like the crisscross steel trusses of a bridge—super strong while keeping the bone light enough to run!",
          summary:
            "Found inside the rounded ends (epiphyses) of long bones. Its honeycomb network of struts absorbs jumping shock and houses Red Bone Marrow.",
        },
        redMarrow: {
          name: "Red Bone Marrow",
          en: "Blood Cell Factory",
          role: "Hematopoiesis (RBC, WBC & Platelets)",
          analogy: "Like a 24/7 factory shipping millions of fresh Red Blood Cells, White Blood Cells, and Platelets into the bloodstream.",
          summary:
            "Soft stem-cell-rich tissue tucked inside spongy bone (femur ends, sternum, ribs, pelvis). It produces almost all of your body's blood cells.",
        },
        yellowMarrow: {
          name: "Yellow Bone Marrow",
          en: "Fat Energy Reserve",
          role: "Central Shaft Cavity",
          analogy: "Like an emergency backup battery storing fat energy inside the hollow shaft.",
          summary:
            "Fills the central hollow medullary cavity of long bones. Stores fat cells and can even turn back into Red Marrow during severe blood loss.",
        },
        cartilage: {
          name: "Articular Cartilage",
          en: "Smooth Joint Cushion",
          role: "Frictionless Gliding Cap",
          analogy: "Like smooth Teflon pads on the ends of bones so they never grind against each other.",
          summary:
            "A glassy, rubbery layer covering both joint ends of the bone. Together with synovial fluid, it creates a joint smoother than ice on ice.",
        },
      },
      healSteps: {
        stage1: {
          name: "1. Blood Clot (Hematoma)",
          en: "Days 1–5 • Emergency Seal",
          role: "Stop Bleeding & Clean Debris",
          analogy: "Like emergency road barriers closing a cracked bridge while cleanup crews clear broken rubble.",
          summary:
            "Because bone is LIVING tissue full of blood vessels, a fracture bleeds and quickly forms a protective blood clot (Hematoma). White blood cells clear dead debris.",
        },
        stage2: {
          name: "2. Soft Cartilage Callus",
          en: "Weeks 1–3 • Flexible Splint",
          role: "Fibrocartilage Bridge",
          analogy: "Like laying temporary wooden scaffolding to hold the two bridge halves steady.",
          summary:
            "Specialized cells weave collagen fibers and soft cartilage across the gap, forming a soft collar (Callus) that gently holds the broken bone ends together.",
        },
        stage3: {
          name: "3. Hard Bony Callus",
          en: "Weeks 4–8 • Mineralization",
          role: "Osteoblasts Deposit Calcium",
          analogy: "Pouring solid concrete reinforced with steel over the scaffolding so it can carry weight again.",
          summary:
            "Bone-building cells called Osteoblasts replace the soft cartilage with hard, mineral-rich spongy bone using Calcium and Vitamin D.",
        },
        stage4: {
          name: "4. Bone Remodeling",
          en: "Months • Final Polish",
          role: "Osteoclasts Smooth the Surface",
          analogy: "Removing the extra scaffolding and polishing the repaired bridge so it looks brand new.",
          summary:
            "Bone-reshaping cells (Osteoclasts) trim away the extra bump while Osteoblasts lay down sleek Compact Bone—often making the healed spot as strong as before!",
        },
      },
      bmLesson: {
        heading: "Class 9–10 Master Notes: Living Bone & Bone Health",
        sections: [
          {
            title: "1. Bones Are Alive!",
            html: `<p>Many students think bones are dry, dead sticks—actually, living bone is packed with <strong>blood vessels, nerves, bone-building cells (Osteoblasts)</strong>, and <strong>Red Bone Marrow</strong> that manufactures your blood cells every second.</p>`,
          },
          {
            title: "2. Why Vitamin D & Calcium Matter (Deficiency Diseases)",
            html: `<p>• <strong>Calcium &amp; Phosphorus:</strong> Give bones rock-like hardness.<br/>
            • <strong>Vitamin D (Sunshine Vitamin):</strong> Essential for the intestine to absorb Calcium from food.<br/>
            • <strong>Rickets (Children):</strong> Vitamin D deficiency causes soft, bowed legs.<br/>
            • <strong>Osteoporosis (Older Adults):</strong> Loss of bone density makes bones porous and fragile.</p>`,
          },
        ],
      },
      bmQuiz: {
        title: "Bone Marrow & Healing Quiz",
        correctMsg: "Excellent! You know your bone biology.",
        wrongMsg: "Not quite — check the explanation below.",
        nextBtn: "Next Question",
        restartBtn: "Restart Quiz",
        scoreLabel: "Score",
        questions: [
          {
            q: "Where in the human skeleton are most Red Blood Cells (RBCs), WBCs, and Platelets manufactured?",
            options: ["Articular Cartilage", "Red Bone Marrow", "Yellow Bone Marrow", "Compact Bone Surface"],
            answer: 1,
            explain: "Red Bone Marrow inside spongy bone (ribs, sternum, pelvis, femur ends) is the body's blood cell factory.",
          },
          {
            q: "Which vitamin is essential for absorbing Calcium to keep bones strong and prevent Rickets?",
            options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
            answer: 2,
            explain: "Vitamin D enables Calcium absorption in the gut; its deficiency in children leads to Rickets.",
          },
          {
            q: "Why are the rounded ends of long bones filled with honeycomb-like Spongy Bone instead of solid rock?",
            options: [
              "To keep bones lightweight while absorbing shock",
              "To make bones snap easily",
              "To store stomach acid",
              "To block blood flow",
            ],
            answer: 0,
            explain: "Spongy bone's criss-cross trabeculae provide immense strength without heavy weight and shelter Red Marrow.",
          },
          {
            q: "Which specialized cells deposit Calcium to rebuild hard bone during fracture healing?",
            options: ["Neurons", "Osteoblasts", "Alveoli", "Nephrons"],
            answer: 1,
            explain: "Osteoblasts are bone-forming cells that convert the soft callus into hard, mineralized bone.",
          },
        ],
      },
    },

    hi: {
      chapterBadge: "अध्याय 05 • कक्षा 9–10 लैब",
      title: "मानव कंकाल तंत्र — लाइव लैब",
      subtitle:
        "अक्षीय (80) बनाम उपांगीय (126) अस्थियाँ फ़िल्टर करें, या 4 चल संधियों (Movable Joints) का लाइव सिम्युलेटर देखें",
      views: {
        bones: "206 अस्थियों का मानचित्र",
        joints: "4 चल संधियाँ",
      },
      toggles: {
        pause: "रोकें",
        play: "चलाएँ",
        pins: "हॉटस्पॉट पिन",
      },
      metrics: {
        total: "वयस्क अस्थियाँ",
        axial: "अक्षीय",
        append: "उपांगीय",
        focus: "सक्रिय फ़िल्टर",
        allLabel: "सभी 206",
        axialLabel: "अक्षीय (80)",
        appendLabel: "उपांगीय (126)",
        jointsLabel: "4 संधियाँ",
      },
      divControl: "कंकाल विभाजन हाइलाइट",
      divPills: {
        all: "सभी 206 अस्थियाँ",
        axial: "अक्षीय कंकाल • 80 अस्थियाँ",
        appendicular: "उपांगीय कंकाल • 126 अस्थियाँ",
        joints: "4 चल सिनोवियल संधियाँ",
      },
      presets: {
        all: "सभी (206)",
        axial: "अक्षीय (80)",
        append: "उपांगीय (126)",
        joints: "4 संधियाँ लैब",
      },
      tabs: {
        inspect: "अस्थि व संधि निरीक्षक",
        lesson: "कक्षा 9–10 पाठ",
        quiz: "त्वरित जाँच",
      },
      selectPrompt:
        "अस्थि संख्या और कार्य समझने के लिए कंकाल के किसी भी पिन पर टैप करें (या 4 संधियाँ दृश्य चुनें)।",
      boneHotspots: {
        skull: {
          name: "खोपड़ी (कपाल व चेहरा)",
          en: "Skull • 22 Bones",
          role: "अक्षीय कंकाल • मस्तिष्क कवच",
          summary:
            "8 कपाल अस्थियों (जो मस्तिष्क की रक्षा करती हैं) और 14 चेहरे की अस्थियों से बनी है। केवल निचला जबड़ा (Mandible) ही चल (Movable) होता है।",
          keyFact: "मध्य कान में शरीर की सबसे छोटी हड्डी 'स्टेपीज़' (Stapes, ~3 मिमी) होती है।",
        },
        spine: {
          name: "कशेरुक दंड (रीढ़ की हड्डी)",
          en: "Vertebral Column • 26 Bones",
          role: "अक्षीय कंकाल • केंद्रीय स्तंभ",
          summary:
            "उपास्थि गद्दियों से जुड़ी कशेरुकाओं का लचीला S-आकार स्तंभ, जो शरीर को सीधा रखता है और मेरुरज्जु (Spinal Cord) की रक्षा करता है।",
          keyFact: "इसमें 7 ग्रीवा (गर्दन), 12 वक्षीय, 5 कटि, 1 त्रिकास्थि और 1 अनुत्रिक अस्थि होती है।",
        },
        ribcage: {
          name: "पसली पिंजर व उरोस्थि",
          en: "12 Pairs Ribs + Sternum (25)",
          role: "अक्षीय कंकाल • हृदय व फेफड़ों का कवच",
          summary:
            "12 जोड़ी घुमावदार पसलियाँ रीढ़ से आगे की चपटी उरोस्थि (Sternum) से जुड़कर हृदय और फेफड़ों को सुरक्षित पिंजरे में रखती हैं।",
          keyFact: "11वीं और 12वीं जोड़ी आगे से जुड़ी नहीं होतीं—इन्हें तैरती पसलियाँ (Floating Ribs) कहते हैं।",
        },
        arms: {
          name: "अंस मेखला और भुजा अस्थियाँ",
          en: "64 Bones (Arms + Clavicle/Scapula)",
          role: "उपांगीय कंकाल",
          summary:
            "हँसली (Clavicle) व कंधे की अस्थि से जुड़ी ह्यूमरस, रेडियस, अल्ना और कलाई-हाथ की 27 सूक्ष्म अस्थियाँ।",
          keyFact: "दोनों हाथों और कलाइयों में कुल 54 अस्थियाँ होती हैं—पूरे शरीर की एक-चौथाई से अधिक!",
        },
        pelvis: {
          name: "श्रोणि मेखला (कूल्हे की हड्डी)",
          en: "Pelvic Girdle • 2 Bones",
          role: "उपांगीय कंकाल • भार स्थानांतरण",
          summary: "रीढ़ को पैरों से जोड़ने वाला मजबूत घेरा जो मूत्राशय व प्रजनन अंगों की रक्षा करता है।",
          keyFact: "प्रसव में सहायता हेतु महिलाओं की श्रोणि मेखला अपेक्षाकृत चौड़ी होती है।",
        },
        legs: {
          name: "फीमर और पैर की अस्थियाँ",
          en: "60 Bones (Legs & Feet)",
          role: "उपांगीय कंकाल • चलना-दौड़ना",
          summary: "जाँघ की फीमर, घुटने की पटेला, पिंडली की टिबिया-फिबुला और पैर की 26 अस्थियों से बना है।",
          keyFact: "फीमर (Femur) मानव शरीर की सबसे लंबी और सबसे मजबूत हड्डी है।",
        },
      },
      jointHotspots: {
        ballSocket: {
          name: "1. कंदुक-खल्लिका संधि",
          en: "Ball & Socket Joint",
          role: "कंधा और कूल्हा • 360° गति",
          summary: "एक हड्डी का गोल सिरा दूसरी हड्डी के कटोरी जैसे गड्ढे में फिट होकर सभी दिशाओं में घूम सकता है।",
          keyFact: "क्रिकेट में गेंद फेंकने या हाथ को पूरा घुमाने में यही संधि काम आती है।",
        },
        hinge: {
          name: "2. कब्जा संधि (Hinge)",
          en: "Hinge Joint",
          role: "कोहनी और घुटना • एक ही तल में गति",
          summary: "दरवाज़े के कब्जे की तरह केवल एक ही दिशा में मुड़ने और सीधा होने की अनुमति देती है।",
          keyFact: "चलते और वजन उठाते समय जोड़ों को स्थिर बनाए रखती है।",
        },
        pivot: {
          name: "3. धुराग्र संधि (Pivot)",
          en: "Pivot Joint",
          role: "गर्दन (एटलस-एक्सिस)",
          summary: "एक बेलनाकार हड्डी दूसरी हड्डी की धुरी के चारों ओर दाएँ-बाएँ घूमती है।",
          keyFact: "इसी के कारण आप सिर को दाएँ-बाएँ घुमाकर 'नहीं' कह पाते हैं।",
        },
        gliding: {
          name: "4. विसर्पी संधि (Gliding)",
          en: "Gliding Joint",
          role: "कलाई और टखना",
          summary: "चपटी अस्थि सतहें एक-दूसरे के ऊपर धीरे से फिसलती हैं।",
          keyFact: "लिखते समय कलाई को लचीलापन प्रदान करती है।",
        },
      },
      lesson: {
        heading: "कक्षा 9–10 पाठ योजना: मानव कंकाल तंत्र",
        sections: [
          {
            title: "1. 206 अस्थियों के दो मुख्य भाग",
            html: `<p>शिशु में ~<strong>300 अस्थियाँ</strong> होती हैं जो जुड़कर वयस्क में <strong>206 अस्थियाँ</strong> बनाती हैं:<br/>• <strong>अक्षीय कंकाल (80):</strong> खोपड़ी (22), कान (6), हायॉइड (1), रीढ़ (26), पसली व उरोस्थि (25)।<br/>• <strong>उपांगीय कंकाल (126):</strong> हाथ व अंस मेखला (64) + पैर व श्रोणि मेखला (62)।</p>`,
          },
          {
            title: "2. कंकाल के 5 प्रमुख कार्य",
            html: `<p>1. आकार व सहारा • 2. कोमल अंगों की सुरक्षा • 3. पेशियों के साथ गति • 4. <strong>लाल अस्थि मज्जा</strong> में रक्त कोशिका निर्माण • 5. कैल्शियम व फॉस्फोरस का संग्रह।</p>`,
          },
          {
            title: "3. संधियों (Joints) के प्रकार",
            html: `<p>• <strong>अचल संधि:</strong> खोपड़ी के जोड़।<br/>• <strong>अर्धचल संधि:</strong> रीढ़ की कशेरुकाएँ।<br/>• <strong>चल (सिनोवियल) संधि:</strong> कंदुक-खल्लिका, कब्जा, धुराग्र और विसर्पी संधि।</p>`,
          },
          {
            title: "4. अस्थि बनाम उपास्थि (Bone vs. Cartilage)",
            html: `<div class="detail-fact" style="margin-top:4px"><strong>अस्थि (Bone):</strong> कठोर, कैल्शियम लवण युक्त।<br/><strong>उपास्थि (Cartilage):</strong> कोमल व लचीली (कान का पिन्ना, नाक की नोक, श्वासनली वलय)।</div>`,
          },
        ],
      },
      quiz: {
        title: "कंकाल तंत्र त्वरित जाँच",
        correctMsg: "बिल्कुल सही! सटीक जानकारी।",
        wrongMsg: "सही नहीं — नीचे स्पष्टीकरण पढ़ें।",
        nextBtn: "अगला प्रश्न",
        restartBtn: "फिर से शुरू करें",
        scoreLabel: "स्कोर",
        questions: [
          {
            q: "वयस्क मानव में अक्षीय और उपांगीय कंकाल में कितनी अस्थियाँ होती हैं?",
            options: ["अक्षीय: 126, उपांगीय: 80", "अक्षीय: 80, उपांगीय: 126", "अक्षीय: 100, उपांगीय: 106", "अक्षीय: 60, उपांगीय: 146"],
            answer: 1,
            explain: "अक्षीय कंकाल में 80 और उपांगीय कंकाल में 126 अस्थियाँ (कुल 206) होती हैं।",
          },
          {
            q: "कंधे और कूल्हे में 360° घूमने वाली कौन-सी संधि होती है?",
            options: ["कब्जा संधि", "धुराग्र संधि", "कंदुक-खल्लिका संधि (Ball & Socket)", "विसर्पी संधि"],
            answer: 2,
            explain: "कंदुक-खल्लिका संधि सभी दिशाओं में गति की अनुमति देती है।",
          },
          {
            q: "मानव शरीर की सबसे लंबी और सबसे मजबूत हड्डी कौन-सी है?",
            options: ["ह्यूमरस", "टिबिया", "फीमर (Femur)", "उरोस्थि"],
            answer: 2,
            explain: "जाँघ की फीमर हड्डी शरीर की सबसे लंबी और मजबूत अस्थि है।",
          },
          {
            q: "सिर को दाएँ-बाएँ घुमाने में कौन-सी संधि मदद करती है?",
            options: ["धुराग्र संधि (Pivot)", "कब्जा संधि", "अचल संधि", "विसर्पी संधि"],
            answer: 0,
            explain: "गर्दन की धुराग्र संधि सिर को दोनों ओर घुमाती है।",
          },
          {
            q: "मानव खोपड़ी की कौन-सी हड्डी चल (Movable) होती है?",
            options: ["कपाल", "निचला जबड़ा (Mandible)", "नाक की हड्डी", "ऊपरी जबड़ा"],
            answer: 1,
            explain: "बोलने और चबाने के लिए केवल निचला जबड़ा ही हिल सकता है।",
          },
        ],
      },

      boneSec: {
        title: "जीवित अस्थि और फ्रैक्चर उपचार — 3D फ्लिप लैब",
        subtitle:
          "सामने: सघन अस्थि, स्पंजी अस्थि व लाल अस्थि मज्जा • कार्ड पलटें और टूटी हड्डी जुड़ने के 4 चरण देखें",
        flipMain: "कार्ड पलटें: अस्थि मज्जा ↔ फ्रैक्चर उपचार",
        frontBadge: "सामने • जीवित अस्थि व रक्त निर्माण केंद्र",
        flipToHeal: "फ्रैक्चर उपचार देखें",
        produceBtn: "ताज़ी रक्त कोशिकाएँ बनाएँ (लाल अस्थि मज्जा!)",
        marrowPrompt: "जीवित अस्थि की किसी भी परत पर टैप करें और उसकी संरचना समझें:",
        backBadge: "पीछे • टूटी हड्डी जुड़ने के 4 चरण",
        flipToMarrow: "वापस अस्थि संरचना पर जाएँ",
        nextHealBtn: "अगला उपचार चरण देखें (चरण 1 → 4)",
        healPrompt: "जीवित अस्थि कोशिकाएँ (Osteoblasts) टूटी हड्डी को कैसे जोड़ती हैं, 4 चरणों में देखें:",
        lessonTab: "अस्थि संरचना व स्वास्थ्य नोट्स (कक्षा 9–10)",
        quizTab: "अस्थि मज्जा व उपचार क्विज़",
        analogyLabel: "सरल उदाहरण",
        marrowHud: "लाल अस्थि मज्जा: प्रति सेकंड ~20 लाख नई RBC का निर्माण!",
        healHud: [
          "चरण 1 (दिन 1–5): रक्त का थक्का (Hematoma) दरार को बंद करता है",
          "चरण 2 (सप्ताह 1–3): कोमल उपास्थि कैलस दोनों सिरों को जोड़ता है",
          "चरण 3 (सप्ताह 4–8): ऑस्टियोब्लास्ट कैल्शियम से कठोर अस्थि बनाते हैं",
          "चरण 4 (महीने): पुनर्निर्माण से हड्डी पहले जैसी चिकनी व मजबूत हो जाती है!",
        ],
      },
      marrowParts: {
        compact: {
          name: "सघन अस्थि (Compact)",
          en: "Compact Bone",
          role: "मजबूत बाहरी कवच",
          analogy: "ऊँची इमारत के स्टील के खंभे की तरह जो भारी वजन सहता है।",
          summary: "कैल्शियम फॉस्फेट व कोलेजन से बनी अत्यंत कठोर बाहरी परत।",
        },
        spongy: {
          name: "स्पंजी अस्थि (Spongy)",
          en: "Spongy Bone",
          role: "हल्का झटका-शोषक",
          analogy: "पुल के जालीदार ढाँचे की तरह—मजबूत भी और हल्का भी!",
          summary: "लंबी हड्डियों के गोल सिरों पर मधुमक्खी के छत्ते जैसी जाली, जिसमें लाल अस्थि मज्जा रहती है।",
        },
        redMarrow: {
          name: "लाल अस्थि मज्जा",
          en: "Red Bone Marrow",
          role: "रक्त कोशिका कारखाना",
          analogy: "24 घंटे चलने वाले कारखाने की तरह जो RBC, WBC और प्लेटलेट्स बनाता है।",
          summary: "स्पंजी अस्थि के भीतर स्थित ऊतक जहाँ शरीर की लगभग सभी रक्त कोशिकाएँ बनती हैं।",
        },
        yellowMarrow: {
          name: "पीली अस्थि मज्जा",
          en: "Yellow Bone Marrow",
          role: "वसा ऊर्जा भंडार",
          analogy: "आपातकालीन बैटरी की तरह जो हड्डी के बीच वसा संचित रखती है।",
          summary: "अस्थि के मध्य खोखले भाग में वसा संचित करती है।",
        },
        cartilage: {
          name: "संधि उपास्थि",
          en: "Articular Cartilage",
          role: "चिकना गद्दा",
          analogy: "चिकने पैड की तरह जो हड्डियों को आपस में घिसने से बचाता है।",
          summary: "हड्डी के दोनों सिरों पर चिकनी परत जो जोड़ों को घर्षण-रहित बनाती है।",
        },
      },
      healSteps: {
        stage1: {
          name: "1. रक्त का थक्का (Hematoma)",
          en: "दिन 1–5",
          role: "रक्तस्राव रोकना व सफाई",
          analogy: "टूटे पुल पर बैरिकेड लगाकर मलबा साफ करने जैसा।",
          summary: "टूटी हुई हड्डी की रक्त वाहिकाओं से थक्का बनता है और WBC सफाई करती हैं।",
        },
        stage2: {
          name: "2. कोमल कैलस (Soft Callus)",
          en: "सप्ताह 1–3",
          role: "उपास्थि का अस्थायी पुल",
          analogy: "दोनों सिरों को थामने के लिए अस्थायी मचान लगाने जैसा।",
          summary: "कोलेजन और उपास्थि मिलकर टूटे सिरों को जोड़ने वाला लचीला पुल बनाते हैं।",
        },
        stage3: {
          name: "3. कठोर अस्थि कैलस",
          en: "सप्ताह 4–8",
          role: "ऑस्टियोब्लास्ट द्वारा कैल्शियम जमाव",
          analogy: "मचान पर मजबूत कंक्रीट ढालकर पुल को पक्का करना।",
          summary: "ऑस्टियोब्लास्ट कोशिकाएँ कैल्शियम और विटामिन D की मदद से ठोस हड्डी बनाती हैं।",
        },
        stage4: {
          name: "4. अस्थि पुनर्निर्माण",
          en: "महीने",
          role: "अंतिम चिकना आकार",
          analogy: "अतिरिक्त मचान हटाकर पुल को बिल्कुल नया बना देना।",
          summary: "ऑस्टियोक्लास्ट अतिरिक्त उभार हटाकर हड्डी को पहले जैसा मजबूत बना देते हैं।",
        },
      },
      bmLesson: {
        heading: "कक्षा 9–10 नोट्स: जीवित अस्थि और अस्थि स्वास्थ्य",
        sections: [
          {
            title: "1. अस्थियाँ जीवित ऊतक हैं",
            html: `<p>जीवित हड्डियों में रक्त वाहिकाएँ, तंत्रिकाएँ और <strong>लाल अस्थि मज्जा</strong> होती है जो प्रतिदिन करोड़ों रक्त कोशिकाएँ बनाती है।</p>`,
          },
          {
            title: "2. कैल्शियम व विटामिन D का महत्व",
            html: `<p>• <strong>विटामिन D</strong> की कमी से बच्चों में <strong>रिकेट्स (Rickets)</strong> और बुजुर्गों में <strong>ऑस्टियोपोरोसिस</strong> (हड्डियाँ भुरभुरी होना) रोग होता है।</p>`,
          },
        ],
      },
      bmQuiz: {
        title: "अस्थि मज्जा व उपचार क्विज़",
        correctMsg: "शानदार! बिल्कुल सही।",
        wrongMsg: "सही नहीं — नीचे स्पष्टीकरण पढ़ें।",
        nextBtn: "अगला प्रश्न",
        restartBtn: "फिर से शुरू करें",
        scoreLabel: "स्कोर",
        questions: [
          {
            q: "अधिकांश RBC, WBC और प्लेटलेट्स का निर्माण कहाँ होता है?",
            options: ["उपास्थि", "लाल अस्थि मज्जा (Red Bone Marrow)", "पीली अस्थि मज्जा", "त्वचा"],
            answer: 1,
            explain: "लाल अस्थि मज्जा शरीर का मुख्य रक्त निर्माण केंद्र है।",
          },
          {
            q: "बच्चों में हड्डियों के कमजोर होने (रिकेट्स) से बचाने हेतु कौन-सा विटामिन आवश्यक है?",
            options: ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन K"],
            answer: 2,
            explain: "विटामिन D आंतों में कैल्शियम के अवशोषण के लिए अनिवार्य है।",
          },
          {
            q: "लंबी हड्डियों के सिरों में स्पंजी अस्थि (Spongy Bone) क्यों होती है?",
            options: ["हड्डी को हल्का रखने व झटका सहने के लिए", "हड्डी तोड़ने के लिए", "अम्ल रखने के लिए", "रक्त रोकने के लिए"],
            answer: 0,
            explain: "स्पंजी अस्थि हल्की होते हुए भी अत्यधिक भार व झटका सहती है।",
          },
          {
            q: "टूटी हड्डी को कैल्शियम जमाकर फिर से बनाने वाली कोशिकाएँ कौन-सी हैं?",
            options: ["न्यूरॉन", "ऑस्टियोब्लास्ट (Osteoblasts)", "कूपिका", "नेफ्रॉन"],
            answer: 1,
            explain: "ऑस्टियोब्लास्ट नई कठोर अस्थि का निर्माण करती हैं।",
          },
        ],
      },
    },

    bn: {
      chapterBadge: "অধ্যায় ০৫ • শ্রেণি ৯–১০ ল্যাব",
      title: "মানব কঙ্কাল তন্ত্র — লাইভ ল্যাব",
      subtitle:
        "অক্ষীয় (80) বনাম উপাঙ্গীয় (126) অস্থি ফিল্টার করুন, অথবা ৪ প্রকার সচল অস্থিসন্ধি (Movable Joints) লাইভ দেখুন",
      views: {
        bones: "২০৬ অস্থির মানচিত্র",
        joints: "৪ সচল অস্থিসন্ধি",
      },
      toggles: {
        pause: "থামান",
        play: "চালান",
        pins: "হটস্পট পিন",
      },
      metrics: {
        total: "প্রাপ্তবয়স্ক অস্থি",
        axial: "অক্ষীয়",
        append: "উপাঙ্গীয়",
        focus: "সক্রিয় ফিল্টার",
        allLabel: "সব ২০৬",
        axialLabel: "অক্ষীয় (80)",
        appendLabel: "উপাঙ্গীয় (126)",
        jointsLabel: "৪ সন্ধি",
      },
      divControl: "কঙ্কাল বিভাজন হাইলাইট",
      divPills: {
        all: "সব ২০৬টি অস্থি",
        axial: "অক্ষীয় কঙ্কাল • ৮০টি অস্থি",
        appendicular: "উপাঙ্গীয় কঙ্কাল • ১২৬টি অস্থি",
        joints: "৪ প্রকার সচল অস্থিসন্ধি",
      },
      presets: {
        all: "সব (206)",
        axial: "অক্ষীয় (80)",
        append: "উপাঙ্গীয় (126)",
        joints: "৪ সন্ধি ল্যাব",
      },
      tabs: {
        inspect: "অস্থি ও সন্ধি পরিদর্শক",
        lesson: "শ্রেণি ৯–১০ পাঠ",
        quiz: "দ্রুত যাচাই",
      },
      selectPrompt:
        "অস্থির সংখ্যা ও কাজ জানতে কঙ্কালের যেকোনো জ্বলন্ত পিনে ট্যাপ করুন (অথবা ৪ সন্ধি দেখুন)।",
      boneHotspots: {
        skull: {
          name: "করোটি (মাথার খুলি)",
          en: "Skull • 22 Bones",
          role: "অক্ষীয় কঙ্কাল • মস্তিষ্কের বর্ম",
          summary:
            "মস্তিষ্ক রক্ষাকারী ৮টি করোটি অস্থি ও মুখমণ্ডলের ১৪টি অস্থি নিয়ে গঠিত। একমাত্র নিচের চোয়াল (Mandible) ছাড়া বাকি সব সন্ধি অচল।",
          keyFact: "মধ্যকর্ণে মানবদেহের ক্ষুদ্রতম অস্থি 'স্টেপিস' (Stapes, ~৩ মিমি) থাকে।",
        },
        spine: {
          name: "মেরুদণ্ড (কশেরুকা স্তম্ভ)",
          en: "Vertebral Column • 26 Bones",
          role: "অক্ষীয় কঙ্কাল • কেন্দ্রীয় স্তম্ভ",
          summary:
            "তরুণাস্থি চাকতিসহ সাজানো কশেরুকার নমনীয় S-আকৃতি স্তম্ভ, যা দেহকে সোজা রাখে এবং সুষুম্নাকাণ্ডকে রক্ষা করে।",
          keyFact: "৭টি গ্রীবা, ১২টি বক্ষ, ৫টি কটি, ১টি স্যাক্রাম ও ১টি কক্সিক্স নিয়ে গঠিত।",
        },
        ribcage: {
          name: "বক্ষপিঞ্জর ও স্টার্নাম",
          en: "12 Pairs Ribs + Sternum (25)",
          role: "অক্ষীয় কঙ্কাল • হৃৎপিণ্ড ও ফুসফুসের সুরক্ষা",
          summary:
            "১২ জোড়া বাঁকানো পাঁজর মেরুদণ্ড থেকে সামনের স্টার্নামের সাথে যুক্ত হয়ে হৃৎপিণ্ড ও ফুসফুসকে নিরাপদ খাঁচায় রাখে।",
          keyFact: "১১ ও ১২তম জোড়া সামনে যুক্ত থাকে না—এদের ভাসমান পাঁজর (Floating Ribs) বলে।",
        },
        arms: {
          name: "বক্ষ অস্থিচক্র ও হাতের অস্থি",
          en: "64 Bones (Arms + Clavicle/Scapula)",
          role: "উপাঙ্গীয় কঙ্কাল",
          summary:
            "ক্ল্যাভিকল ও স্ক্যাপুলার সাথে যুক্ত হিউমেরাস, রেডিয়াস, আলনা এবং কব্জি ও হাতের ২৭টি সূক্ষ্ম অস্থি।",
          keyFact: "দুই হাত ও কব্জিতে মোট ৫৪টি অস্থি আছে—সারা দেহের এক-চতুর্থাংশেরও বেশি!",
        },
        pelvis: {
          name: "শ্রোণি অস্থিচক্র (কোমরের হাড়)",
          en: "Pelvic Girdle • 2 Bones",
          role: "উপাঙ্গীয় কঙ্কাল • ওজন বহন",
          summary: "মেরুদণ্ডকে পায়ের হাড়ের সাথে যুক্ত করে এবং মূত্রাশয় ও প্রজনন অঙ্গকে সুরক্ষা দেয়।",
          keyFact: "সন্তান জন্মদানের সুবিধার্থে নারীদের শ্রোণিচক্র তুলনামূলক চওড়া হয়।",
        },
        legs: {
          name: "ফিমার ও পায়ের অস্থি",
          en: "60 Bones (Legs & Feet)",
          role: "উপাঙ্গীয় কঙ্কাল • চলাচল",
          summary: "উরুর ফিমার, হাঁটুর প্যাটেলা, পায়ের টিবিয়া-ফিবুলা ও পায়ের পাতার ২৬টি অস্থি নিয়ে গঠিত।",
          keyFact: "ফিমার (Femur) মানবদেহের দীর্ঘতম এবং সবচেয়ে শক্তিশালী অস্থি।",
        },
      },
      jointHotspots: {
        ballSocket: {
          name: "১. বল ও সকেট সন্ধি",
          en: "Ball & Socket Joint",
          role: "কাঁধ ও কোমর • ৩৬০° ঘূর্ণন",
          summary: "একটি হাড়ের গোল মাথা অন্য হাড়ের বাটির মতো গর্তে বসে সব দিকে ঘুরতে পারে।",
          keyFact: "ক্রিকেট বল বোলিং করতে বা হাত পুরো ঘোরাতে এই সন্ধি সাহায্য করে।",
        },
        hinge: {
          name: "২. কব্জা সন্ধি (Hinge)",
          en: "Hinge Joint",
          role: "কনুই ও হাঁটু • এক তলে নড়াচড়া",
          summary: "দরজার কব্জার মতো কেবল একদিকে ভাঁজ ও সোজা হতে দেয়, পাশে বাঁকতে দেয় না।",
          keyFact: "হাঁটাচলা ও ভারী জিনিস তোলার সময় স্থায়িত্ব বজায় রাখে।",
        },
        pivot: {
          name: "৩. পিভট সন্ধি (Pivot)",
          en: "Pivot Joint",
          role: "ঘাড় (অ্যাটলাস–অ্যাক্সিস)",
          summary: "একটি অস্থি অপর অস্থির অক্ষকে কেন্দ্র করে ডানে-বামে ঘুরতে পারে।",
          keyFact: "এর সাহায্যেই মাথা ডানে-বামে ঘুরিয়ে 'না' বলা যায়।",
        },
        gliding: {
          name: "৪. গ্লাইডিং সন্ধি (Gliding)",
          en: "Gliding Joint",
          role: "কব্জি ও গোড়ালি",
          summary: "চ্যাপ্টা অস্থিতলগুলো একে অপরের ওপর মসৃণভাবে পিছলে চলে।",
          keyFact: "লেখার সময় কব্জিকে নমনীয়তা দেয়।",
        },
      },
      lesson: {
        heading: "শ্রেণি ৯–১০ পাঠ পরিকল্পনা: মানব কঙ্কাল তন্ত্র",
        sections: [
          {
            title: "১. ২০৬টি অস্থির দুটি প্রধান ভাগ",
            html: `<p>নবজাতকের ~<strong>৩০০টি অস্থি</strong> থাকে, যা জুড়ে প্রাপ্তবয়স্কে <strong>২০৬টি অস্থি</strong> হয়:<br/>• <strong>অক্ষীয় কঙ্কাল (৮০):</strong> করোটি (২২), কর্ণঅস্থি (৬), হায়য়েড (১), মেরুদণ্ড (২৬), পাঁজর ও স্টার্নাম (২৫)।<br/>• <strong>উপাঙ্গীয় কঙ্কাল (১২৬):</strong> হাত ও বক্ষচক্র (৬৪) + পা ও শ্রোণিচক্র (৬২)।</p>`,
          },
          {
            title: "২. কঙ্কালের ৫টি প্রধান কাজ",
            html: `<p>১. আকৃতি ও দৃঢ়তা • ২. নরম অঙ্গের সুরক্ষা • ৩. পেশীর সাথে গমন • ৪. <strong>লাল অস্থিমজ্জায়</strong> রক্তকণিকা তৈরি • ৫. ক্যালসিয়াম ও ফসফরাস সঞ্চয়।</p>`,
          },
          {
            title: "৩. অস্থিসন্ধির (Joints) প্রকারভেদ",
            html: `<p>• <strong>অচল সন্ধি:</strong> করোটির সন্ধি।<br/>• <strong>আংশিক সচল:</strong> মেরুদণ্ডের কশেরুকা।<br/>• <strong>সচল (সাইনোভিয়াল) সন্ধি:</strong> বল ও সকেট, কব্জা, পিভট এবং গ্লাইডিং সন্ধি।</p>`,
          },
          {
            title: "৪. অস্থি বনাম তরুণাস্থি (Bone vs. Cartilage)",
            html: `<div class="detail-fact" style="margin-top:4px"><strong>অস্থি (Bone):</strong> শক্ত, ক্যালসিয়াম লবণসমৃদ্ধ।<br/><strong>তরুণাস্থি (Cartilage):</strong> মসৃণ ও স্থিতিস্থাপক (কানের পিনা, নাকের ডগা, শ্বাসনালীর বলয়)।</div>`,
          },
        ],
      },
      quiz: {
        title: "কঙ্কাল তন্ত্র দ্রুত যাচাই",
        correctMsg: "একদম সঠিক! ধারণাটি পরিষ্কার।",
        wrongMsg: "সঠিক নয় — নিচের ব্যাখ্যাটি দেখুন।",
        nextBtn: "পরবর্তী প্রশ্ন",
        restartBtn: "আবার শুরু করুন",
        scoreLabel: "স্কোর",
        questions: [
          {
            q: "প্রাপ্তবয়স্ক মানুষের অক্ষীয় ও উপাঙ্গীয় কঙ্কালে কয়টি করে অস্থি থাকে?",
            options: ["অক্ষীয়: ১২৬, উপাঙ্গীয়: ৮০", "অক্ষীয়: ৮০, উপাঙ্গীয়: ১২৬", "অক্ষীয়: ১০০, উপাঙ্গীয়: ১০৬", "অক্ষীয়: ৬০, উপাঙ্গীয়: ১৪৬"],
            answer: 1,
            explain: "অক্ষীয় কঙ্কালে ৮০টি এবং উপাঙ্গীয় কঙ্কালে ১২৬টি (মোট ২০৬টি) অস্থি থাকে।",
          },
          {
            q: "কাঁধ ও কোমরে ৩৬০° ঘোরার উপযোগী কোন অস্থিসন্ধি থাকে?",
            options: ["কব্জা সন্ধি", "পিভট সন্ধি", "বল ও সকেট সন্ধি", "গ্লাইডিং সন্ধি"],
            answer: 2,
            explain: "বল ও সকেট সন্ধি সব দিকে অবাধ ঘূর্ণনের সুযোগ দেয়।",
          },
          {
            q: "মানবদেহের দীর্ঘতম ও সবচেয়ে শক্তিশালী অস্থি কোনটি?",
            options: ["হিউমেরাস", "টিবিয়া", "ফিমার (Femur)", "স্টার্নাম"],
            answer: 2,
            explain: "উরুর ফিমার হলো দেহের দীর্ঘতম ও দৃঢ়তম অস্থি।",
          },
          {
            q: "মাথা ডানে-বামে ঘোরাতে কোন সন্ধি সাহায্য করে?",
            options: ["পিভট সন্ধি (Pivot)", "কব্জা সন্ধি", "অচল সন্ধি", "গ্লাইডিং সন্ধি"],
            answer: 0,
            explain: "ঘাড়ের পিভট সন্ধি মাথাকে দু'পাশে ঘোরাতে সাহায্য করে।",
          },
          {
            q: "মানব করোটির কোন অস্থিটি সচল (Movable)?",
            options: ["কপাল", "নিচের চোয়াল (Mandible)", "নাকের হাড়", "উপরের চোয়াল"],
            answer: 1,
            explain: "কথা বলা ও চিবানোর জন্য একমাত্র নিচের চোয়ালই নড়াচড়া করতে পারে।",
          },
        ],
      },

      boneSec: {
        title: "জীবন্ত অস্থি ও হাড় জোড়া লাগা — 3D ফ্লিপ ল্যাব",
        subtitle:
          "সামনে: নিরেট অস্থি, স্পঞ্জি অস্থি ও লাল অস্থিমজ্জা • কার্ড উল্টান এবং ভাঙা হাড় জোড়ার ৪ ধাপ দেখুন",
        flipMain: "কার্ড উল্টান: অস্থিমজ্জা ↔ হাড় জোড়া লাগা",
        frontBadge: "সামনে • জীবন্ত অস্থি ও রক্ত তৈরির কারখানা",
        flipToHeal: "ভাঙা হাড় জোড়া লাগা দেখুন",
        produceBtn: "তাজা রক্তকণিকা তৈরি করুন (লাল অস্থিমজ্জা!)",
        marrowPrompt: "জীবন্ত অস্থির যেকোনো স্তরে ট্যাপ করে তার গঠন ও কাজ জানুন:",
        backBadge: "পিছনে • ভাঙা হাড় জোড়ার ৪টি ধাপ",
        flipToMarrow: "অস্থির গঠনে ফিরে যান",
        nextHealBtn: "পরবর্তী নিরাময় ধাপ দেখুন (ধাপ ১ → ৪)",
        healPrompt: "জীবন্ত অস্থিকোষ (Osteoblasts) কীভাবে ভাঙা হাড় পুনরায় গড়ে তোলে তা দেখুন:",
        lessonTab: "অস্থির গঠন ও স্বাস্থ্য নোটস (শ্রেণি ৯–১০)",
        quizTab: "অস্থিমজ্জা ও নিরাময় কুইজ",
        analogyLabel: "সহজ উদাহরণ",
        marrowHud: "লাল অস্থিমজ্জা: প্রতি সেকেন্ডে ~২০ লক্ষ নতুন RBC তৈরি হচ্ছে!",
        healHud: [
          "ধাপ ১ (দিন ১–৫): রক্তজমাট (Hematoma) ফাটল বন্ধ করে",
          "ধাপ ২ (সপ্তাহ ১–৩): নরম তরুণাস্থি ক্যালাস দুই প্রান্ত আটকে রাখে",
          "ধাপ ৩ (সপ্তাহ ৪–৮): অস্টিওব্লাস্ট ক্যালসিয়াম জমিয়ে শক্ত হাড় গড়ে",
          "ধাপ ৪ (কয়েক মাস): রিমডেলিংয়ে হাড় আবার আগের মতো মসৃণ ও শক্ত হয়!",
        ],
      },
      marrowParts: {
        compact: {
          name: "নিরেট অস্থি (Compact)",
          en: "Compact Bone",
          role: "শক্ত বাইরের আবরণ",
          analogy: "বড় দালানের স্টিলের পিলারের মতো যা ভারী ওজন ধরে রাখে।",
          summary: "ক্যালসিয়াম ফসফেট ও কোলাজেন নির্মিত অত্যন্ত দৃঢ় বাইরের স্তর।",
        },
        spongy: {
          name: "স্পঞ্জি অস্থি (Spongy)",
          en: "Spongy Bone",
          role: "হালকা আঘাত-শোষক",
          analogy: "ব্রিজের জালিকাঠামোর মতো—অত্যন্ত শক্ত অথচ হালকা!",
          summary: "লম্বা হাড়ের দুই প্রান্তে মৌচাকের মতো জাল, যার ভেতর লাল অস্থিমজ্জা থাকে।",
        },
        redMarrow: {
          name: "লাল অস্থিমজ্জা",
          en: "Red Bone Marrow",
          role: "রক্তকণিকা তৈরির কারখানা",
          analogy: "২৪ ঘণ্টা চলা কারখানার মতো যা RBC, WBC ও অণুচক্রিকা তৈরি করে।",
          summary: "স্পঞ্জি অস্থির ভেতরে থাকা কলা যেখানে দেহের প্রায় সব রক্তকণিকা তৈরি হয়।",
        },
        yellowMarrow: {
          name: "হলুদ অস্থিমজ্জা",
          en: "Yellow Bone Marrow",
          role: "চর্বি শক্তি ভাণ্ডার",
          analogy: "জরুরি ব্যাটারির মতো যা হাড়ের মাঝে চর্বি সঞ্চয় করে রাখে।",
          summary: "লম্বা হাড়ের মাঝের ফাঁপা অংশে চর্বি সঞ্চয় করে।",
        },
        cartilage: {
          name: "সন্ধি তরুণাস্থি",
          en: "Articular Cartilage",
          role: "মসৃণ কুশন",
          analogy: "মসৃণ প্যাডের মতো যা হাড়ের প্রান্তকে ঘষা লাগা থেকে বাঁচায়।",
          summary: "অস্থির দুই প্রান্তে থাকা পিচ্ছিল স্তর যা সন্ধিকে ঘর্ষণমুক্ত রাখে।",
        },
      },
      healSteps: {
        stage1: {
          name: "১. রক্তজমাট (Hematoma)",
          en: "দিন ১–৫",
          role: "রক্তপাত বন্ধ ও পরিষ্কার",
          analogy: "ভাঙা ব্রিজে ব্যারিকেড দিয়ে আবর্জনা পরিষ্কার করার মতো।",
          summary: "ভাঙা হাড়ের রক্তনালী থেকে জমাট বাঁধে এবং WBC মৃত কোষ সরিয়ে দেয়।",
        },
        stage2: {
          name: "২. নরম ক্যালাস (Soft Callus)",
          en: "সপ্তাহ ১–৩",
          role: "তরুণাস্থির অস্থায়ী সেতু",
          analogy: "দুই প্রান্ত ধরে রাখার জন্য অস্থায়ী কাঠের মাচা বসানোর মতো।",
          summary: "কোলাজেন ও তরুণাস্থি মিলে ভাঙা দুই প্রান্তকে নরমভাবে আটকে রাখে।",
        },
        stage3: {
          name: "৩. শক্ত অস্থি ক্যালাস",
          en: "সপ্তাহ ৪–৮",
          role: "অস্টিওব্লাস্টের ক্যালসিয়াম জমা",
          analogy: "মাচার ওপর শক্ত কংক্রিট ঢেলে ব্রিজ মজবুত করা।",
          summary: "অস্টিওব্লাস্ট কোষ ক্যালসিয়াম ও ভিটামিন D-র সাহায্যে শক্ত হাড় গড়ে তোলে।",
        },
        stage4: {
          name: "৪. অস্থি রিমডেলিং",
          en: "কয়েক মাস",
          role: "চূড়ান্ত মসৃণ আকার",
          analogy: "অতিরিক্ত মাচা সরিয়ে ব্রিজটিকে একদম নতুনের মতো করে তোলা।",
          summary: "অস্টিওক্লাস্ট বাড়তি উঁচু অংশ মসৃণ করে হাড়কে আগের মতো শক্তিশালী করে।",
        },
      },
      bmLesson: {
        heading: "শ্রেণি ৯–১০ নোটস: জীবন্ত অস্থি ও হাড়ের স্বাস্থ্য",
        sections: [
          {
            title: "১. হাড় জীবন্ত কলা",
            html: `<p>জীবন্ত অস্থিতে রক্তনালী, স্নায়ু এবং <strong>লাল অস্থিমজ্জা</strong> থাকে যা প্রতি সেকেন্ডে লক্ষ লক্ষ রক্তকণিকা তৈরি করে।</p>`,
          },
          {
            title: "২. ক্যালসিয়াম ও ভিটামিন D-র গুরুত্ব",
            html: `<p>• <strong>ভিটামিন D</strong>-র অভাবে শিশুদের <strong>রিকেটস (Rickets)</strong> এবং বয়স্কদের <strong>অস্টিওপোরোসিস</strong> (হাড় ভঙ্গুর হওয়া) হয়।</p>`,
          },
        ],
      },
      bmQuiz: {
        title: "অস্থিমজ্জা ও নিরাময় কুইজ",
        correctMsg: "দারুণ! একদম সঠিক।",
        wrongMsg: "সঠিক নয় — নিচের ব্যাখ্যাটি দেখুন।",
        nextBtn: "পরবর্তী প্রশ্ন",
        restartBtn: "আবার শুরু করুন",
        scoreLabel: "স্কোর",
        questions: [
          {
            q: "মানবদেহের অধিকাংশ RBC, WBC ও অণুচক্রিকা কোথায় তৈরি হয়?",
            options: ["তরুণাস্থি", "লাল অস্থিমজ্জা (Red Bone Marrow)", "হলুদ অস্থিমজ্জা", "ত্বক"],
            answer: 1,
            explain: "লাল অস্থিমজ্জা হলো দেহের প্রধান রক্তকণিকা তৈরির কারখানা।",
          },
          {
            q: "ক্যালসিয়াম শোষণ ও শিশুদের রিকেটস প্রতিরোধে কোন ভিটামিন অপরিহার্য?",
            options: ["ভিটামিন A", "ভিটামিন C", "ভিটামিন D", "ভিটামিন K"],
            answer: 2,
            explain: "ভিটামিন D অন্ত্রে ক্যালসিয়াম শোষণে সাহায্য করে এবং হাড় মজবুত রাখে।",
          },
          {
            q: "লম্বা হাড়ের দুই প্রান্তে স্পঞ্জি অস্থি থাকে কেন?",
            options: ["হাড়কে হালকা রাখতে ও ধাক্কা শোষণ করতে", "হাড় ভেঙে যেতে", "অ্যাসিড রাখতে", "রক্ত আটকাতে"],
            answer: 0,
            explain: "স্পঞ্জি অস্থি কম ওজনে প্রচুর শক্তি ও ধাক্কা সহ্য করার ক্ষমতা দেয়।",
          },
          {
            q: "ভাঙা হাড় জোড়া লাগানোর সময় কোন কোষ ক্যালসিয়াম জমিয়ে নতুন হাড় তৈরি করে?",
            options: ["নিউরন", "অস্টিওব্লাস্ট (Osteoblasts)", "অ্যালভিওলাই", "নেফ্রন"],
            answer: 1,
            explain: "অস্টিওব্লাস্ট নতুন শক্ত অস্থি গঠনে মূল ভূমিকা নেয়।",
          },
        ],
      },
    },
  };

  // Hotspot Pins (percentages on 420x440 stage)
  const BONE_PINS = [
    { id: "skull", x: 50.0, y: 12.5, tone: "venous" },
    { id: "ribcage", x: 43.0, y: 31.0, tone: "venous" },
    { id: "spine", x: 50.0, y: 42.5, tone: "venous" },
    { id: "arms", x: 25.0, y: 37.0, tone: "arterial" },
    { id: "pelvis", x: 50.0, y: 53.5, tone: "arterial" },
    { id: "legs", x: 41.0, y: 71.0, tone: "arterial" },
  ];

  const JOINT_PINS = [
    { id: "ballSocket", x: 27.0, y: 26.0, tone: "arterial" },
    { id: "hinge", x: 73.0, y: 26.0, tone: "venous" },
    { id: "pivot", x: 27.0, y: 69.0, tone: "electric" },
    { id: "gliding", x: 73.0, y: 69.0, tone: "venous" },
  ];

  const ui = {
    view: "bones", // "bones" | "joints"
    division: "all", // "all" | "axial" | "appendicular"
    paused: false,
    showPins: true,
    selectedBoneHotspot: "skull",
    selectedJointHotspot: "ballSocket",
    skelTab: "inspect", // "inspect" | "lesson" | "quiz"
    skelQ: 0,
    skelOpt: null,
    skelScore: 0,
    skelQuizDone: false,

    // Section 2: 3D Flip Card
    isFlipped: false,
    bonePaused: false,
    selectedMarrowPart: "redMarrow",
    marrowCells: [],
    healStage: 0, // 0..3 (Stage 1..4)
    healAutoTimer: 0,
    bmTab: "lesson", // "lesson" | "quiz"
    bmQ: 0,
    bmOpt: null,
    bmScore: 0,
    bmQuizDone: false,
  };

  function getSD() {
    const lang = BL.getState().lang;
    return SKEL_DICT[lang] || SKEL_DICT.en;
  }

  function spawnMarrowBurst(count) {
    const types = ["rbc", "rbc", "rbc", "wbc", "platelet"];
    for (let i = 0; i < count; i++) {
      ui.marrowCells.push({
        kind: types[i % types.length],
        x: 78 + Math.random() * 44,
        y: 120 + (Math.random() - 0.5) * 44,
        vx: 46 + Math.random() * 42,
        vy: (Math.random() - 0.5) * 14,
      });
    }
    if (ui.marrowCells.length > 48) {
      ui.marrowCells = ui.marrowCells.slice(-48);
    }
  }

  // =========================================================
  // RENDER UI PANELS
  // =========================================================
  function renderSkelPins() {
    const layer = document.getElementById("skel-pins-layer");
    if (!layer) return;
    const sd = getSD();
    const isBones = ui.view === "bones";
    const pins = isBones ? BONE_PINS : JOINT_PINS;
    const dictMap = isBones ? sd.boneHotspots : sd.jointHotspots;
    const selId = isBones ? ui.selectedBoneHotspot : ui.selectedJointHotspot;

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
        if (isBones) ui.selectedBoneHotspot = pin.id;
        else ui.selectedJointHotspot = pin.id;
        ui.skelTab = "inspect";
        syncSkelUI();
      });

      layer.appendChild(btn);
    });
  }

  function renderQuizInto(container, quizObj, prefix) {
    const qs = quizObj.questions;
    const qIdx = prefix === "skel" ? ui.skelQ : ui.bmQ;
    const selOpt = prefix === "skel" ? ui.skelOpt : ui.bmOpt;
    const score = prefix === "skel" ? ui.skelScore : ui.bmScore;
    const done = prefix === "skel" ? ui.skelQuizDone : ui.bmQuizDone;

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
          if (prefix === "skel") {
            ui.skelQ = 0;
            ui.skelOpt = null;
            ui.skelScore = 0;
            ui.skelQuizDone = false;
            renderSkelReader();
          } else {
            ui.bmQ = 0;
            ui.bmOpt = null;
            ui.bmScore = 0;
            ui.bmQuizDone = false;
            renderBMReader();
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
        if (prefix === "skel") {
          ui.skelOpt = idx;
          if (idx === cur.answer) ui.skelScore += 1;
          renderSkelReader();
        } else {
          ui.bmOpt = idx;
          if (idx === cur.answer) ui.bmScore += 1;
          renderBMReader();
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
          if (prefix === "skel") {
            if (ui.skelQ + 1 < qs.length) {
              ui.skelQ += 1;
              ui.skelOpt = null;
            } else {
              ui.skelQuizDone = true;
            }
            renderSkelReader();
          } else {
            if (ui.bmQ + 1 < qs.length) {
              ui.bmQ += 1;
              ui.bmOpt = null;
            } else {
              ui.bmQuizDone = true;
            }
            renderBMReader();
          }
        });
      }
    }
  }

  function renderSkelReader() {
    const bodyEl = document.getElementById("skel-reader-body");
    if (!bodyEl) return;
    const sd = getSD();

    document.querySelectorAll("#skel-reader-panel .tab-btn").forEach((b) => {
      b.classList.toggle("active", b.getAttribute("data-skel-tab") === ui.skelTab);
    });

    bodyEl.innerHTML = "";
    if (ui.skelTab === "inspect") {
      const hint = document.createElement("p");
      hint.className = "heart-subtitle";
      hint.textContent = sd.selectPrompt;
      bodyEl.appendChild(hint);

      const isBones = ui.view === "bones";
      const dictMap = isBones ? sd.boneHotspots : sd.jointHotspots;
      const selId = isBones ? ui.selectedBoneHotspot : ui.selectedJointHotspot;

      const pillsWrap = document.createElement("div");
      pillsWrap.className = "part-pills";
      Object.keys(dictMap).forEach((id) => {
        const item = dictMap[id];
        const pill = document.createElement("button");
        pill.type = "button";
        pill.className = `part-pill${selId === id ? " active" : ""}`;
        pill.textContent = item.name;
        pill.addEventListener("click", () => {
          if (isBones) ui.selectedBoneHotspot = id;
          else ui.selectedJointHotspot = id;
          syncSkelUI();
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
    } else if (ui.skelTab === "lesson") {
      const h = document.createElement("h2");
      h.className = "detail-title";
      h.style.marginTop = "0";
      h.textContent = sd.lesson.heading;
      bodyEl.appendChild(h);

      sd.lesson.sections.forEach((sec) => {
        const card = document.createElement("div");
        card.className = "chapter-sec";
        card.innerHTML = `<h3>${sec.title}</h3><div style="margin-top:6px;font-size:13.5px;line-height:1.68">${sec.html}</div>`;
        bodyEl.appendChild(card);
      });
    } else {
      renderQuizInto(bodyEl, sd.quiz, "skel");
    }
  }

  function renderFlipDetails() {
    const sd = getSD();

    const mChips = document.getElementById("marrow-parts-chips");
    const mDetail = document.getElementById("marrow-part-detail");
    if (mChips && mDetail) {
      mChips.innerHTML = "";
      Object.keys(sd.marrowParts).forEach((pid) => {
        const item = sd.marrowParts[pid];
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `part-pill${ui.selectedMarrowPart === pid ? " active" : ""}`;
        btn.textContent = item.name;
        btn.addEventListener("click", () => {
          ui.selectedMarrowPart = pid;
          renderFlipDetails();
        });
        mChips.appendChild(btn);
      });

      const cur = sd.marrowParts[ui.selectedMarrowPart] || sd.marrowParts.redMarrow;
      mDetail.innerHTML = `
        <span class="detail-type">${cur.role}</span>
        <h3 class="detail-title">${BL.term(cur)}</h3>
        <p class="detail-summary">${cur.summary}</p>
        <div class="detail-fact">✨ <strong>${sd.boneSec.analogyLabel}:</strong> ${cur.analogy}</div>
      `;
    }

    const hChips = document.getElementById("heal-steps-chips");
    const hDetail = document.getElementById("heal-step-detail");
    if (hChips && hDetail) {
      hChips.innerHTML = "";
      const order = ["stage1", "stage2", "stage3", "stage4"];
      order.forEach((sid, idx) => {
        const item = sd.healSteps[sid];
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `part-pill${ui.healStage === idx ? " active" : ""}`;
        btn.textContent = item.name;
        btn.addEventListener("click", () => {
          ui.healStage = idx;
          ui.healAutoTimer = 0;
          renderFlipDetails();
        });
        hChips.appendChild(btn);
      });

      const curH = sd.healSteps[order[ui.healStage]] || sd.healSteps.stage1;
      hDetail.innerHTML = `
        <span class="detail-type">${curH.role}</span>
        <h3 class="detail-title">${BL.term(curH)}</h3>
        <p class="detail-summary">${curH.summary}</p>
        <div class="detail-fact">✨ <strong>${sd.boneSec.analogyLabel}:</strong> ${curH.analogy}</div>
      `;
    }
  }

  function renderBMReader() {
    const bodyEl = document.getElementById("bm-reader-body");
    if (!bodyEl) return;
    const sd = getSD();

    document.querySelectorAll("#bm-reader-panel .tab-btn").forEach((b) => {
      b.classList.toggle("active", b.getAttribute("data-bm-tab") === ui.bmTab);
    });

    bodyEl.innerHTML = "";
    if (ui.bmTab === "lesson") {
      const h = document.createElement("h3");
      h.className = "detail-title";
      h.style.marginTop = "0";
      h.textContent = sd.bmLesson.heading;
      bodyEl.appendChild(h);

      sd.bmLesson.sections.forEach((sec) => {
        const card = document.createElement("div");
        card.className = "chapter-sec";
        card.innerHTML = `<h3>${sec.title}</h3><div style="margin-top:6px;font-size:13.5px;line-height:1.68">${sec.html}</div>`;
        bodyEl.appendChild(card);
      });
    } else {
      renderQuizInto(bodyEl, sd.bmQuiz, "bm");
    }
  }

  function syncSkelUI() {
    const sd = getSD();
    const setText = (id, txt) => {
      const el = document.getElementById(id);
      if (el) el.textContent = txt;
    };

    setText("skel-chapter-badge", sd.chapterBadge);
    setText("skel-title", sd.title);
    setText("skel-subtitle", sd.subtitle);
    setText("lbl-view-bones", sd.views.bones);
    setText("lbl-view-joints", sd.views.joints);
    setText("lbl-skel-pins", sd.toggles.pins);

    setText("lbl-m-total", sd.metrics.total);
    setText("lbl-m-axial", sd.metrics.axial);
    setText("lbl-m-append", sd.metrics.append);
    setText("lbl-m-focus", sd.metrics.focus);
    setText("lbl-div-control", sd.divControl);

    setText("preset-div-all", sd.presets.all);
    setText("preset-div-axial", sd.presets.axial);
    setText("preset-div-append", sd.presets.append);
    setText("preset-div-joints", sd.presets.joints);

    setText("tab-skel-inspect", sd.tabs.inspect);
    setText("tab-skel-lesson", sd.tabs.lesson);
    setText("tab-skel-quiz", sd.tabs.quiz);

    // Active Filter Telemetry
    const focusKey = ui.view === "joints" ? "joints" : ui.division;
    setText("div-pill", sd.divPills[focusKey]);
    const focusLabelMap = {
      all: sd.metrics.allLabel,
      axial: sd.metrics.axialLabel,
      appendicular: sd.metrics.appendLabel,
      joints: sd.metrics.jointsLabel,
    };
    setText("metric-skel-focus", focusLabelMap[focusKey]);

    // Section 2 Labels
    setText("bone-sec-title", sd.boneSec.title);
    setText("bone-sec-subtitle", sd.boneSec.subtitle);
    setText("lbl-skel-flip-main", sd.boneSec.flipMain);
    setText("lbl-bone-front-badge", sd.boneSec.frontBadge);
    setText("lbl-flip-to-heal", sd.boneSec.flipToHeal);
    setText("lbl-produce-cells", sd.boneSec.produceBtn);
    setText("lbl-marrow-prompt", sd.boneSec.marrowPrompt);
    setText("lbl-bone-back-badge", sd.boneSec.backBadge);
    setText("lbl-flip-to-marrow", sd.boneSec.flipToMarrow);
    setText("lbl-next-heal-stage", sd.boneSec.nextHealBtn);
    setText("lbl-heal-prompt", sd.boneSec.healPrompt);
    setText("tab-bm-lesson", sd.boneSec.lessonTab);
    setText("tab-bm-quiz", sd.boneSec.quizTab);

    const btnBones = document.getElementById("btn-view-bones");
    const btnJoints = document.getElementById("btn-view-joints");
    if (btnBones) {
      btnBones.classList.toggle("active-accent", ui.view === "bones");
      btnBones.setAttribute("aria-pressed", String(ui.view === "bones"));
    }
    if (btnJoints) {
      btnJoints.classList.toggle("active-accent", ui.view === "joints");
      btnJoints.setAttribute("aria-pressed", String(ui.view === "joints"));
    }

    const pauseBtn = document.getElementById("btn-skel-pause");
    if (pauseBtn) {
      pauseBtn.innerHTML = ui.paused
        ? `▶ <span>${sd.toggles.play}</span>`
        : `⏸ <span>${sd.toggles.pause}</span>`;
    }

    const pinsBtn = document.getElementById("btn-skel-pins");
    if (pinsBtn) {
      pinsBtn.classList.toggle("active-accent", ui.showPins);
      pinsBtn.setAttribute("aria-pressed", String(ui.showPins));
    }

    const bPauseBtn = document.getElementById("btn-bone-pause");
    if (bPauseBtn) {
      bPauseBtn.innerHTML = ui.bonePaused
        ? `▶ <span>${sd.toggles.play}</span>`
        : `⏸ <span>${sd.toggles.pause}</span>`;
    }

    document.querySelectorAll("[data-div]").forEach((b) => {
      const val = b.getAttribute("data-div");
      const active =
        (ui.view === "joints" && val === "joints") ||
        (ui.view === "bones" && val === ui.division);
      b.classList.toggle("active", active);
    });

    const flipCard = document.getElementById("skel-flip-card");
    const flipMain = document.getElementById("btn-skel-flip-main");
    if (flipCard) flipCard.classList.toggle("is-flipped", ui.isFlipped);
    if (flipMain) flipMain.setAttribute("aria-pressed", String(ui.isFlipped));

    renderSkelPins();
    renderSkelReader();
    renderFlipDetails();
    renderBMReader();
  }

  // =========================================================
  // CANVAS 1: 60 FPS 206 BONES MAP & 4 MOVABLE JOINTS (420x440)
  // =========================================================
  function startSkelCanvas() {
    const canvas = document.getElementById("skel-canvas");
    const box = document.getElementById("skel-canvas-box");
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

    function drawBonesView(ctx, isLight, sd) {
      const axialCol = isLight ? "#2b7eb3" : "#7dd3fc";
      const appendCol = isLight ? "#c24b65" : "#f472b6";
      const gold = isLight ? "#b58428" : "#fbbf24";
      const textCol = isLight ? "#162235" : "#e6effa";

      const axialAlpha = ui.division === "appendicular" ? 0.18 : 0.96;
      const appendAlpha = ui.division === "axial" ? 0.18 : 0.96;
      const pulse = (Math.sin(elapsed * 3.0) + 1) / 2;

      ctx.save();
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      // ---------- AXIAL SKELETON (80 BONES) ----------
      ctx.save();
      ctx.globalAlpha = axialAlpha;
      ctx.strokeStyle = axialCol;
      ctx.fillStyle = isLight ? "rgba(43,126,179,0.12)" : "rgba(125,211,252,0.14)";

      // 1. Anatomical Cranium & Jaw
      ctx.lineWidth = ui.selectedBoneHotspot === "skull" ? 2.8 : 2.0;
      ctx.beginPath();
      ctx.moveTo(210, 26);
      ctx.bezierCurveTo(192, 26, 184, 38, 186, 52);
      ctx.lineTo(192, 66);
      ctx.quadraticCurveTo(210, 76, 228, 66);
      ctx.lineTo(234, 52);
      ctx.bezierCurveTo(236, 38, 228, 26, 210, 26);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Subtle Eye Orbits & Nasal Cavity
      ctx.fillStyle = isLight ? "rgba(22,34,53,0.35)" : "rgba(4,8,17,0.65)";
      ctx.beginPath();
      ctx.ellipse(201, 49, 5.5, 3.6, 0, 0, Math.PI * 2);
      ctx.ellipse(219, 49, 5.5, 3.6, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(210, 52);
      ctx.lineTo(207.5, 58);
      ctx.lineTo(212.5, 58);
      ctx.closePath();
      ctx.fill();

      // 2. Segmented Vertebral Column (Spine)
      ctx.lineWidth = ui.selectedBoneHotspot === "spine" ? 4.5 : 3.2;
      ctx.beginPath();
      ctx.moveTo(210, 74);
      ctx.lineTo(210, 232);
      ctx.stroke();

      ctx.lineWidth = 1.6;
      for (let vy = 84; vy <= 224; vy += 11) {
        ctx.beginPath();
        ctx.moveTo(204, vy);
        ctx.lineTo(216, vy);
        ctx.stroke();
      }

      // 3. Ribcage & Sternum
      ctx.lineWidth = ui.selectedBoneHotspot === "ribcage" ? 2.4 : 1.7;
      ctx.fillStyle = isLight ? "rgba(43,126,179,0.22)" : "rgba(125,211,252,0.24)";
      ctx.beginPath();
      ctx.roundRect(206, 98, 8, 58, 3);
      ctx.fill();
      ctx.stroke();

      for (let r = 0; r < 6; r++) {
        const ry = 104 + r * 11;
        const span = 34 + (r < 4 ? r * 4 : (5 - r) * 3);
        ctx.beginPath();
        ctx.moveTo(206, ry);
        ctx.quadraticCurveTo(206 - span, ry - 4, 206 - span + 4, ry + 8);
        ctx.moveTo(214, ry);
        ctx.quadraticCurveTo(214 + span, ry - 4, 214 + span - 4, ry + 8);
        ctx.stroke();
      }
      ctx.restore();

      // ---------- APPENDICULAR SKELETON (126 BONES) ----------
      ctx.save();
      ctx.globalAlpha = appendAlpha;
      ctx.strokeStyle = appendCol;
      ctx.fillStyle = isLight ? "rgba(194,75,101,0.14)" : "rgba(244,114,182,0.16)";

      // 4. Clavicles & Arms (Humerus, Radius/Ulna, Hands)
      ctx.lineWidth = ui.selectedBoneHotspot === "arms" ? 3.2 : 2.3;
      ctx.beginPath();
      ctx.moveTo(154, 96);
      ctx.quadraticCurveTo(182, 88, 210, 94);
      ctx.quadraticCurveTo(238, 88, 266, 96);
      ctx.stroke();

      // Left & Right Arm Chains
      [
        [152, 98, 128, 166, 108, 232],
        [268, 98, 292, 166, 312, 232],
      ].forEach(([sx, sy, ex, ey, wx, wy]) => {
        // Shoulder & Elbow joints
        ctx.beginPath();
        ctx.arc(sx, sy, 5, 0, Math.PI * 2);
        ctx.arc(ex, ey, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Humerus
        ctx.lineWidth = 3.2;
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(ex, ey);
        ctx.stroke();

        // Radius & Ulna
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(ex - 2, ey);
        ctx.lineTo(wx - 2, wy);
        ctx.moveTo(ex + 2, ey);
        ctx.lineTo(wx + 2, wy);
        ctx.stroke();

        // Hand digits
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(wx, wy);
        ctx.lineTo(wx - 6, wy + 16);
        ctx.moveTo(wx, wy);
        ctx.lineTo(wx, wy + 18);
        ctx.moveTo(wx, wy);
        ctx.lineTo(wx + 6, wy + 16);
        ctx.stroke();
      });

      // 5. Pelvis (Hip Basin)
      ctx.lineWidth = ui.selectedBoneHotspot === "pelvis" ? 3.0 : 2.2;
      ctx.beginPath();
      ctx.moveTo(170, 224);
      ctx.quadraticCurveTo(210, 246, 250, 224);
      ctx.quadraticCurveTo(244, 256, 210, 258);
      ctx.quadraticCurveTo(176, 256, 170, 224);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // 6. Legs (Femurs, Patellae, Tibia/Fibula, Feet)
      [182, 238].forEach((hx, idx) => {
        const dir = idx === 0 ? -1 : 1;
        ctx.lineWidth = ui.selectedBoneHotspot === "legs" ? 4.2 : 3.4;
        // Hip ball
        ctx.beginPath();
        ctx.arc(hx, 252, 5.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        // Femur
        ctx.beginPath();
        ctx.moveTo(hx, 256);
        ctx.lineTo(hx + dir * 2, 336);
        ctx.stroke();
        // Kneecap (Patella)
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.ellipse(hx + dir * 2, 342, 5, 6, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        // Tibia & Fibula
        ctx.lineWidth = 2.6;
        ctx.beginPath();
        ctx.moveTo(hx + dir * 1, 349);
        ctx.lineTo(hx + dir * 2, 412);
        ctx.stroke();
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        ctx.moveTo(hx + dir * 6, 352);
        ctx.lineTo(hx + dir * 6, 410);
        ctx.stroke();
        // Foot arch
        ctx.lineWidth = 2.0;
        ctx.beginPath();
        ctx.moveTo(hx + dir * 2, 414);
        ctx.lineTo(hx + dir * 18, 422);
        ctx.stroke();
      });
      ctx.restore();

      // Pulsing Highlight Ring on Active Bone Pin
      const activePin = BONE_PINS.find((p) => p.id === ui.selectedBoneHotspot);
      if (activePin) {
        const px = (activePin.x / 100) * 420;
        const py = (activePin.y / 100) * 440;
        const g = ctx.createRadialGradient(px, py, 2, px, py, 24 + pulse * 8);
        g.addColorStop(0, "rgba(251,191,36,0.45)");
        g.addColorStop(1, "rgba(251,191,36,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(px, py, 32, 0, Math.PI * 2);
        ctx.fill();
      }

      // Legend Strip at Top Corners
      ctx.font = "700 10px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = axialCol;
      ctx.textAlign = "left";
      ctx.fillText(`● ${sd.metrics.axialLabel}`, 18, 26);
      ctx.fillStyle = appendCol;
      ctx.textAlign = "right";
      ctx.fillText(`● ${sd.metrics.appendLabel}`, 402, 26);
      void gold;
      void textCol;
      ctx.restore();
    }

    function drawJointsView(ctx, isLight, sd) {
      const sel = ui.selectedJointHotspot;
      const artCol = isLight ? "#c24b65" : "#e0637d";
      const venCol = isLight ? "#2c88a8" : "#68b8e6";
      const gold = isLight ? "#b58428" : "#dfb052";
      const boneStroke = isLight ? "#475569" : "#cbd5e1";

      const drawCard = (x, y, id, title, col) => {
        const isSel = sel === id;
        ctx.save();
        ctx.fillStyle = isLight ? "rgba(255,255,255,0.72)" : "rgba(14,24,41,0.76)";
        ctx.strokeStyle = isSel ? col : isLight ? "rgba(30,58,95,0.14)" : "rgba(130,186,230,0.22)";
        ctx.lineWidth = isSel ? 2.5 : 1.2;
        ctx.beginPath();
        ctx.roundRect(x, y, 186, 186, 18);
        ctx.fill();
        ctx.stroke();

        ctx.font = "800 10.5px 'Plus Jakarta Sans', sans-serif";
        ctx.fillStyle = col;
        ctx.textAlign = "center";
        ctx.fillText(title, x + 93, y + 22);
        ctx.restore();
      };

      // 1. BALL & SOCKET (Top Left: 18, 22)
      drawCard(18, 22, "ballSocket", sd.jointHotspots.ballSocket.name, artCol);
      ctx.save();
      const bAngle = Math.sin(elapsed * 2.0) * 0.72;
      // Cup Socket
      ctx.strokeStyle = boneStroke;
      ctx.lineWidth = 7;
      ctx.beginPath();
      ctx.arc(111, 114, 24, Math.PI * 0.65, Math.PI * 1.35);
      ctx.stroke();
      // Rotating Ball + Bone Shaft
      ctx.translate(111, 114);
      ctx.rotate(bAngle);
      ctx.fillStyle = artCol;
      ctx.beginPath();
      ctx.arc(0, 0, 15, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = artCol;
      ctx.lineWidth = 10;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(10, 0);
      ctx.lineTo(54, 0);
      ctx.stroke();
      ctx.restore();

      // 2. HINGE JOINT (Top Right: 216, 22)
      drawCard(216, 22, "hinge", sd.jointHotspots.hinge.name, venCol);
      ctx.save();
      const hAngle = -0.25 - ((Math.sin(elapsed * 2.2) + 1) / 2) * 1.15;
      // Fixed Upper Bone
      ctx.strokeStyle = boneStroke;
      ctx.lineWidth = 11;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(286, 70);
      ctx.lineTo(286, 134);
      ctx.stroke();
      // Swinging Forearm Bone
      ctx.translate(286, 134);
      ctx.rotate(hAngle);
      ctx.strokeStyle = venCol;
      ctx.lineWidth = 10;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(58, 0);
      ctx.stroke();
      ctx.fillStyle = gold;
      ctx.beginPath();
      ctx.arc(0, 0, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // 3. PIVOT JOINT (Bottom Left: 18, 224)
      drawCard(18, 224, "pivot", sd.jointHotspots.pivot.name, gold);
      ctx.save();
      const pRot = Math.sin(elapsed * 2.4) * 0.65;
      // Central Axis Peg
      ctx.strokeStyle = boneStroke;
      ctx.lineWidth = 10;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(111, 290);
      ctx.lineTo(111, 378);
      ctx.stroke();
      // Rotating Atlas Ring + Side Wings
      ctx.translate(111, 326);
      ctx.fillStyle = "rgba(223,176,82,0.28)";
      ctx.strokeStyle = gold;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.ellipse(0, 0, 32 + Math.cos(pRot) * 14, 14, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      // Indicator dot orbiting the ring
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(Math.sin(pRot) * 34, 6, 4.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // 4. GLIDING JOINT (Bottom Right: 216, 224)
      drawCard(216, 224, "gliding", sd.jointHotspots.gliding.name, venCol);
      ctx.save();
      const slide = Math.sin(elapsed * 2.2) * 16;
      ctx.fillStyle = isLight ? "rgba(71,85,105,0.25)" : "rgba(203,213,225,0.24)";
      ctx.strokeStyle = boneStroke;
      ctx.lineWidth = 2.2;
      // Lower carpal block
      ctx.beginPath();
      ctx.roundRect(262, 336, 94, 28, 8);
      ctx.fill();
      ctx.stroke();
      // Upper sliding carpal block
      ctx.fillStyle = isLight ? "rgba(44,136,168,0.28)" : "rgba(104,184,230,0.32)";
      ctx.strokeStyle = venCol;
      ctx.beginPath();
      ctx.roundRect(262 + slide, 300, 94, 28, 8);
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    }

    function frame(now) {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      if (!ui.paused) elapsed += dt;

      const isLight = BL.getState().theme === "light";
      const sd = getSD();

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform((width / 420) * dpr, 0, 0, (height / 440) * dpr, 0, 0);

      if (ui.view === "bones") {
        drawBonesView(ctx, isLight, sd);
      } else {
        drawJointsView(ctx, isLight, sd);
      }

      requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
    void ro;
  }

  // =========================================================
  // CANVAS 2: 60 FPS LIVING BONE MARROW FACTORY (460x300)
  // =========================================================
  function startMarrowCanvas() {
    const canvas = document.getElementById("marrow-canvas");
    const box = document.getElementById("marrow-canvas-box");
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

    spawnMarrowBurst(16);

    let lastTime = performance.now();
    let spawnTimer = 0;

    function frame(now) {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      if (!ui.bonePaused) {
        spawnTimer += dt;
        if (spawnTimer > 0.45) {
          spawnTimer = 0;
          spawnMarrowBurst(2);
        }
        ui.marrowCells.forEach((c) => {
          c.x += c.vx * dt;
          c.y += c.vy * dt;
          if (c.y < 104 || c.y > 142) c.vy *= -1;
        });
        ui.marrowCells = ui.marrowCells.filter((c) => c.x < 430);
      }

      const isLight = BL.getState().theme === "light";
      const sd = getSD();
      const sel = ui.selectedMarrowPart;
      const gold = isLight ? "#b58428" : "#fbbf24";
      const accent = isLight ? "#2b7eb3" : "#7dd3fc";
      const rose = isLight ? "#c24b65" : "#e0637d";
      const textCol = isLight ? "#162235" : "#e6effa";

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform((width / 460) * dpr, 0, 0, (height / 300) * dpr, 0, 0);

      // 1. Outer Long Bone Silhouette (Compact Bone Shell)
      ctx.save();
      ctx.fillStyle =
        sel === "compact"
          ? isLight ? "rgba(181,132,40,0.28)" : "rgba(251,191,36,0.28)"
          : isLight ? "rgba(226,232,240,0.88)" : "rgba(148,163,184,0.25)";
      ctx.strokeStyle = sel === "compact" ? gold : isLight ? "#475569" : "#e2e8f0";
      ctx.lineWidth = sel === "compact" ? 3.5 : 2.4;
      ctx.beginPath();
      ctx.moveTo(118, 86);
      ctx.lineTo(342, 86);
      ctx.bezierCurveTo(378, 56, 424, 68, 424, 102);
      ctx.bezierCurveTo(424, 118, 412, 124, 424, 146);
      ctx.bezierCurveTo(424, 180, 378, 192, 342, 162);
      ctx.lineTo(118, 162);
      ctx.bezierCurveTo(82, 192, 36, 180, 36, 146);
      ctx.bezierCurveTo(48, 124, 36, 118, 36, 102);
      ctx.bezierCurveTo(36, 68, 82, 56, 118, 86);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // 2. Articular Cartilage Caps (Left & Right Ends)
      ctx.strokeStyle = sel === "cartilage" ? gold : accent;
      ctx.lineWidth = sel === "cartilage" ? 6 : 4.5;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.arc(54, 124, 36, Math.PI * 0.65, Math.PI * 1.35);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(406, 124, 36, -Math.PI * 0.35, Math.PI * 0.35);
      ctx.stroke();

      // 3. Spongy Bone + Red Marrow Pockets (Both Rounded Epiphyses)
      [84, 376].forEach((cx) => {
        ctx.fillStyle =
          sel === "redMarrow"
            ? "rgba(224,99,125,0.68)"
            : isLight ? "rgba(194,75,101,0.38)" : "rgba(224,99,125,0.42)";
        ctx.beginPath();
        ctx.ellipse(cx, 124, 34, 32, 0, 0, Math.PI * 2);
        ctx.fill();

        // Honeycomb Spongy Trabeculae Mesh
        ctx.strokeStyle = sel === "spongy" ? gold : "rgba(255,255,255,0.42)";
        ctx.lineWidth = sel === "spongy" ? 2.2 : 1.2;
        for (let a = 0; a < 6; a++) {
          const ang = (a / 6) * Math.PI;
          ctx.beginPath();
          ctx.moveTo(cx - Math.cos(ang) * 26, 124 - Math.sin(ang) * 24);
          ctx.lineTo(cx + Math.cos(ang) * 26, 124 + Math.sin(ang) * 24);
          ctx.stroke();
        }
      });

      // 4. Yellow Bone Marrow Shaft Cavity (Center)
      ctx.fillStyle =
        sel === "yellowMarrow"
          ? "rgba(251,191,36,0.65)"
          : isLight ? "rgba(217,119,6,0.32)" : "rgba(223,176,82,0.34)";
      ctx.strokeStyle = sel === "yellowMarrow" ? gold : "rgba(223,176,82,0.5)";
      ctx.lineWidth = sel === "yellowMarrow" ? 2.4 : 1.2;
      ctx.beginPath();
      ctx.roundRect(122, 102, 216, 44, 14);
      ctx.fill();
      ctx.stroke();

      // 5. Freshly Produced Blood Cells Streaming Out from Red Marrow!
      ui.marrowCells.forEach((c) => {
        if (c.kind === "rbc") {
          ctx.fillStyle = rose;
          ctx.beginPath();
          ctx.ellipse(c.x, c.y, 6, 4, 0, 0, Math.PI * 2);
          ctx.fill();
        } else if (c.kind === "wbc") {
          ctx.fillStyle = "#e2e8f0";
          ctx.strokeStyle = accent;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.arc(c.x, c.y, 5.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        } else {
          ctx.fillStyle = gold;
          ctx.beginPath();
          ctx.arc(c.x, c.y, 2.8, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Compact Callout Labels
      ctx.font = "700 9.5px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = textCol;
      ctx.textAlign = "center";
      ctx.fillText("RED MARROW", 84, 58);
      ctx.fillText("YELLOW MARROW", 230, 76);
      ctx.fillText("CARTILAGE", 404, 58);

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
      ctx.fillText(`🩸 ${sd.boneSec.marrowHud}`, 230, 271);
      ctx.restore();

      requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
    void ro;
  }

  // =========================================================
  // CANVAS 3: 60 FPS 4-STAGE FRACTURE HEALING (460x300)
  // =========================================================
  function startHealCanvas() {
    const canvas = document.getElementById("heal-canvas");
    const box = document.getElementById("heal-canvas-box");
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

      if (!ui.bonePaused && ui.isFlipped) {
        elapsed += dt;
        ui.healAutoTimer += dt;
        if (ui.healAutoTimer > 4.2) {
          ui.healAutoTimer = 0;
          ui.healStage = (ui.healStage + 1) % 4;
          renderFlipDetails();
        }
      }

      const isLight = BL.getState().theme === "light";
      const sd = getSD();
      const stage = ui.healStage; // 0, 1, 2, 3
      const pulse = (Math.sin(elapsed * 4) + 1) / 2;
      const boneFill = isLight ? "rgba(226,232,240,0.92)" : "rgba(203,213,225,0.28)";
      const boneStroke = isLight ? "#475569" : "#e2e8f0";
      const textCol = isLight ? "#162235" : "#e6effa";

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform((width / 460) * dpr, 0, 0, (height / 300) * dpr, 0, 0);

      // Stage Indicator Dots (Top)
      for (let i = 0; i < 4; i++) {
        ctx.fillStyle = i <= stage ? "#68b8e6" : "rgba(148,163,184,0.3)";
        ctx.beginPath();
        ctx.roundRect(142 + i * 46, 26, 36, 6, 3);
        ctx.fill();
      }

      const gap = stage === 0 ? 12 : stage === 1 ? 7 : stage === 2 ? 2 : 0;

      // Left & Right Bone Halves
      ctx.save();
      ctx.fillStyle = boneFill;
      ctx.strokeStyle = boneStroke;
      ctx.lineWidth = 2.4;

      // Left Shaft
      ctx.beginPath();
      ctx.moveTo(46, 98);
      ctx.lineTo(226 - gap, 98);
      ctx.lineTo(234 - gap, 130);
      ctx.lineTo(224 - gap, 164);
      ctx.lineTo(46, 164);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Right Shaft
      ctx.beginPath();
      ctx.moveTo(414, 98);
      ctx.lineTo(234 + gap, 98);
      ctx.lineTo(242 + gap, 130);
      ctx.lineTo(232 + gap, 164);
      ctx.lineTo(414, 164);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Stage-specific biological healing overlay
      if (stage === 0) {
        // STAGE 1: HEMATOMA (Crimson Blood Clot)
        const hg = ctx.createRadialGradient(230, 131, 6, 230, 131, 56 + pulse * 6);
        hg.addColorStop(0, "rgba(224,99,125,0.82)");
        hg.addColorStop(1, "rgba(224,99,125,0)");
        ctx.fillStyle = hg;
        ctx.beginPath();
        ctx.ellipse(230, 131, 54, 50, 0, 0, Math.PI * 2);
        ctx.fill();
      } else if (stage === 1) {
        // STAGE 2: SOFT CARTILAGE CALLUS (Translucent Blue Cushion)
        ctx.fillStyle = "rgba(104,184,230,0.42)";
        ctx.strokeStyle = "#7dd3fc";
        ctx.lineWidth = 2.2;
        ctx.setLineDash([5, 4]);
        ctx.beginPath();
        ctx.ellipse(230, 131, 52, 46, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.setLineDash([]);
      } else if (stage === 2) {
        // STAGE 3: HARD BONY CALLUS (Osteoblasts Depositing Golden Calcium)
        ctx.fillStyle = "rgba(223,176,82,0.45)";
        ctx.strokeStyle = "#dfb052";
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.ellipse(230, 131, 48, 42, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Sparkling Osteoblast Calcium crystals
        for (let i = 0; i < 8; i++) {
          const ang = elapsed * 2 + (i / 8) * Math.PI * 2;
          const ox = 230 + Math.cos(ang) * 28;
          const oy = 131 + Math.sin(ang) * 22;
          ctx.fillStyle = "#fef08a";
          ctx.beginPath();
          ctx.arc(ox, oy, 3.2, 0, Math.PI * 2);
          ctx.fill();
        }
      } else {
        // STAGE 4: REMODELED SOLID BONE (Clean Green Check Glow)
        ctx.fillStyle = boneFill;
        ctx.strokeStyle = "#56c99b";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.roundRect(46, 98, 368, 66, 8);
        ctx.fill();
        ctx.stroke();

        ctx.font = "800 12px 'Plus Jakarta Sans', sans-serif";
        ctx.fillStyle = "#56c99b";
        ctx.textAlign = "center";
        ctx.fillText("✓ 100% REMODELED & STRONG", 230, 136);
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
      ctx.fillText(sd.boneSec.healHud[stage], 230, 271);
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
    const btnBones = document.getElementById("btn-view-bones");
    const btnJoints = document.getElementById("btn-view-joints");
    if (btnBones) {
      btnBones.addEventListener("click", () => {
        ui.view = "bones";
        syncSkelUI();
      });
    }
    if (btnJoints) {
      btnJoints.addEventListener("click", () => {
        ui.view = "joints";
        syncSkelUI();
      });
    }

    const pauseBtn = document.getElementById("btn-skel-pause");
    if (pauseBtn) {
      pauseBtn.addEventListener("click", () => {
        ui.paused = !ui.paused;
        syncSkelUI();
      });
    }

    const pinsBtn = document.getElementById("btn-skel-pins");
    if (pinsBtn) {
      pinsBtn.addEventListener("click", () => {
        ui.showPins = !ui.showPins;
        syncSkelUI();
      });
    }

    document.querySelectorAll("[data-div]").forEach((b) => {
      b.addEventListener("click", () => {
        const val = b.getAttribute("data-div");
        if (val === "joints") {
          ui.view = "joints";
        } else {
          ui.view = "bones";
          ui.division = val;
        }
        syncSkelUI();
      });
    });

    document.querySelectorAll("#skel-reader-panel .tab-btn").forEach((b) => {
      b.addEventListener("click", () => {
        ui.skelTab = b.getAttribute("data-skel-tab");
        renderSkelReader();
      });
    });

    // Section 2: 3D Flip Card Controls
    const toggleFlip = (force) => {
      ui.isFlipped = typeof force === "boolean" ? force : !ui.isFlipped;
      if (ui.isFlipped) ui.healAutoTimer = 0;
      syncSkelUI();
    };
    const btnFlipMain = document.getElementById("btn-skel-flip-main");
    const btnFlipHeal = document.getElementById("btn-flip-to-heal");
    const btnFlipMar = document.getElementById("btn-flip-to-marrow");
    if (btnFlipMain) btnFlipMain.addEventListener("click", () => toggleFlip());
    if (btnFlipHeal) btnFlipHeal.addEventListener("click", () => toggleFlip(true));
    if (btnFlipMar) btnFlipMar.addEventListener("click", () => toggleFlip(false));

    const btnBPause = document.getElementById("btn-bone-pause");
    if (btnBPause) {
      btnBPause.addEventListener("click", () => {
        ui.bonePaused = !ui.bonePaused;
        syncSkelUI();
      });
    }

    const btnProduce = document.getElementById("btn-produce-cells");
    if (btnProduce) {
      btnProduce.addEventListener("click", () => {
        ui.bonePaused = false;
        ui.selectedMarrowPart = "redMarrow";
        spawnMarrowBurst(12);
        renderFlipDetails();
      });
    }

    const btnNextHeal = document.getElementById("btn-next-heal-stage");
    if (btnNextHeal) {
      btnNextHeal.addEventListener("click", () => {
        ui.healStage = (ui.healStage + 1) % 4;
        ui.healAutoTimer = 0;
        renderFlipDetails();
      });
    }

    document.querySelectorAll("#bm-reader-panel .tab-btn").forEach((b) => {
      b.addEventListener("click", () => {
        ui.bmTab = b.getAttribute("data-bm-tab");
        renderBMReader();
      });
    });

    syncSkelUI();
    BL.subscribe(syncSkelUI);

    startSkelCanvas();
    startMarrowCanvas();
    startHealCanvas();
  });
})();