(function () {
  const BL = window.BioLume;
  if (!BL) return;

  // =========================================================
  // TRILINGUAL CLASS 9–10 REPRODUCTIVE SYSTEM DICTIONARY
  // =========================================================
  const REP_DICT = {
    en: {
      chapterBadge: "Chapter 07 • Class 9–10 Lab",
      title: "Human Reproductive System — Live Lab",
      subtitle:
        "Explore complete Male & Female connected anatomy, or trace the live Sperm Journey to Fertilization",
      views: {
        male: "Male System",
        female: "Female System",
        fert: "Sperm Path & Fusion",
      },
      toggles: {
        pause: "Pause",
        play: "Resume",
        pins: "Hotspot Pins",
      },
      metrics: {
        gamete: "Gamete",
        chromo: "Chromosomes",
        hormone: "Key Hormone",
        site: "Active Site",
        maleGamete: "Sperm (n = 23)",
        femaleGamete: "Ovum / Egg (n = 23)",
        zygoteGamete: "Zygote (2n = 46)",
        maleHormone: "Testosterone",
        femaleHormone: "Estrogen & Progest.",
        fertHormone: "hCG & Progesterone",
        maleSite: "Testes → Urethra",
        femaleSite: "Ovary → Uterus",
        fertSite: "Fallopian Tube",
      },
      pathControl: "Sperm Journey & Fertilization Progress",
      pathPills: {
        male: "Male Pathway • Connected Tract",
        female: "Female Pathway • Ovulation Live",
        entry: "1. Vagina & Cervix Entry",
        uterus: "2. Swimming Up Uterus",
        tube: "3. Fallopian Tube Encounter",
        zygote: "4. Fertilization → Zygote (46)",
      },
      presets: {
        entry: "1. Vagina Entry",
        uterus: "2. Uterus Swim",
        tube: "3. Fallopian Meet",
        zygote: "4. Zygote (46)",
      },
      tabs: {
        inspect: "Anatomy Inspector",
        lesson: "Class 9–10 Lesson",
        quiz: "Quick Check",
      },
      selectPrompt:
        "Tap any glowing pin on the diagram to inspect its exact anatomical connection and biological function.",
      maleHotspots: {
        testis: {
          name: "Testes (Testicles) & Scrotum",
          en: "Primary Male Sex Organs",
          role: "Sperm & Testosterone Production",
          summary:
            "A pair of oval organs housed inside the Scrotum (a pouch outside the abdominal cavity). They produce millions of male gametes (Sperm) and secrete the male sex hormone Testosterone.",
          keyFact:
            "Board-exam favorite: Testes lie outside the body in the Scrotum because sperm formation requires a temperature 2–3 °C LOWER than normal body temperature (37 °C).",
        },
        epididymis: {
          name: "Epididymis",
          en: "Sperm Maturation Coil",
          role: "Storage & Swimming Maturity",
          summary:
            "A tightly coiled tube sitting right on the back and top of each testis. Newly made sperm spend days here maturing and gaining the ability to swim before entering the Vas Deferens.",
          keyFact: "Connects directly from the seminiferous tubules of the testis into the Vas Deferens.",
        },
        vasDeferens: {
          name: "Vas Deferens (Sperm Duct)",
          en: "Transport Tube",
          role: "Carries Sperm Up & Over Bladder",
          summary:
            "A long muscular duct rising from each epididymis, looping over the Urinary Bladder, and joining the duct from the Seminal Vesicle to carry sperm toward the Urethra.",
          keyFact: "Muscular peristaltic waves propel mature sperm rapidly upward along this duct.",
        },
        seminal: {
          name: "Seminal Vesicles",
          en: "Accessory Gland (Paired)",
          role: "Fructose Energy Fluid",
          summary:
            "Paired pouch-like glands behind the bladder that add a nutrient-rich fluid (containing fructose sugar) to sperm. This fluid gives sperm the ATP energy needed for their long swim.",
          keyFact: "Together with Prostate secretions, this fluid turns sperm into Semen.",
        },
        prostate: {
          name: "Prostate Gland",
          en: "Accessory Gland (Below Bladder)",
          role: "Alkaline Protective Fluid",
          summary:
            "A walnut-sized gland wrapped directly around the upper Urethra below the bladder. It secretes a slightly alkaline milky fluid that nourishes sperm and protects them from acidic conditions.",
          keyFact: "Provides fluid volume so sperm can swim freely and survive inside the female reproductive tract.",
        },
        urethra: {
          name: "Urethra & Penis Shaft",
          en: "Common Passage",
          role: "Carries Urine or Semen (Never Together)",
          summary:
            "A central tube running through the muscular Penis shaft. It serves as a shared exit passage for urine from the bladder and semen from the reproductive ducts (a valve prevents both from flowing at once).",
          keyFact: "Delivers semen safely into the female vagina during reproduction.",
        },
        glans: {
          name: "Glans Penis",
          en: "Sensitive Tip of Penis",
          role: "Terminal Opening (Urethral Meatus)",
          summary:
            "The smooth, rounded, nerve-rich tip at the end of the penis where the urethra opens externally to release urine or semen.",
          keyFact: "Protected by a fold of skin (foreskin/prepuce) and rich in sensory nerve endings.",
        },
      },
      femaleHotspots: {
        ovary: {
          name: "Ovaries (Paired)",
          en: "Primary Female Sex Organs",
          role: "Ovum (Egg) & Estrogen/Progesterone",
          summary:
            "Two almond-shaped organs located on either side of the lower abdomen. Each month from puberty, one ovary matures and releases a single Egg (Ovulation) while secreting Estrogen and Progesterone.",
          keyFact: "A baby girl is born with thousands of immature eggs already present in her ovaries.",
        },
        fimbriae: {
          name: "Fimbriae",
          en: "Finger-like Catchers",
          role: "Sweeps Ovulated Egg Into Tube",
          summary:
            "Delicate, finger-like fringes at the funnel-shaped open end of each Fallopian Tube that sweep gently over the ovary to guide the newly released egg inside.",
          keyFact: "Ensures the non-motile egg enters the Fallopian Tube smoothly after ovulation.",
        },
        fallopian: {
          name: "Fallopian Tube (Oviduct)",
          en: "Site of Fertilization!",
          role: "Connects Ovary to Uterus",
          summary:
            "Two thin muscular tubes lined with hair-like cilia leading from each ovary into the Uterus. Fertilization (fusion of Sperm and Egg) happens right here in the widened upper-middle part (Ampulla).",
          keyFact: "High-yield exam fact: Fertilization happens in the Fallopian Tube (Oviduct), NOT in the Uterus!",
        },
        uterus: {
          name: "Uterus (Womb)",
          en: "Hollow Muscular Pear-Shaped Organ",
          role: "Site of Implantation & Foetus Growth",
          summary:
            "A strong, elastic, inverted pear-shaped organ where the fertilized egg implants and grows for ~9 months into a full baby. Its muscular walls contract during childbirth.",
          keyFact: "Can expand dramatically during pregnancy to house the growing foetus and amniotic fluid.",
        },
        endometrium: {
          name: "Endometrium (Uterine Lining)",
          en: "Blood-Rich Inner Cushion",
          role: "Nourishes Embryo / Sheds in Menstruation",
          summary:
            "The spongy, blood-vessel-rich inner lining of the uterus that thickens every month to prepare for an embryo. If fertilization does not occur, it breaks down and exits as menstrual flow.",
          keyFact: "If an embryo implants, the endometrium helps form the life-supporting Placenta.",
        },
        cervix: {
          name: "Cervix",
          en: "Lower Neck of Uterus",
          role: "Protective Muscular Gateway",
          summary:
            "The narrow lower ring-shaped neck connecting the Uterus to the Vagina. It keeps the uterus sealed during pregnancy and widens during childbirth.",
          keyFact: "Produces mucus that thins around ovulation to let healthy sperm swim into the uterus.",
        },
        vagina: {
          name: "Vagina (Birth Canal)",
          en: "Muscular Elastic Canal",
          role: "Receives Sperm & Exit for Childbirth",
          summary:
            "An elastic muscular tube connecting the Cervix to the outside of the body. It receives sperm during intercourse, carries menstrual flow out, and serves as the birth canal.",
          keyFact: "First checkpoint of the sperm journey toward the Fallopian Tube.",
        },
      },
      fertHotspots: {
        entry: {
          name: "1. Vagina & Cervix Entry",
          en: "Start of Sperm Journey",
          role: "Millions of Sperm Begin Swimming",
          summary:
            "Semen is deposited in the Vagina. Powered by fructose from seminal fluid, sperm whip their tails (flagella) and swim upward through the narrow Cervix.",
          keyFact: "Out of millions of sperm entering, only a few hundred reach the Fallopian Tube!",
        },
        uterusSwim: {
          name: "2. Uterus Ascent",
          en: "Swimming Upward",
          role: "Guided Toward Oviducts",
          summary:
            "Sperm swim rapidly upward across the warm uterine cavity, assisted by gentle rhythmic contractions of the uterine wall, splitting toward both Fallopian Tubes.",
          keyFact: "Chemical signals released near the egg help guide sperm toward the correct Fallopian Tube.",
        },
        meet: {
          name: "3. Fallopian Tube Encounter",
          en: "Ampulla of Oviduct",
          role: "Sperm Meets Ovulated Egg",
          summary:
            "Inside the Fallopian Tube, swimming sperm surround the much larger, nutrient-rich Egg (Ovum) that was recently released from the ovary.",
          keyFact: "An egg survives for about 24 hours after ovulation waiting for fertilization.",
        },
        fusion: {
          name: "4. Fertilization → Zygote",
          en: "23 + 23 = 46 Chromosomes",
          role: "First Cell of New Human Life",
          summary:
            "One winning sperm penetrates the egg membrane. The egg instantly locks its outer wall against all other sperm. Male (23) and Female (23) nuclei fuse to create a diploid Zygote (46 chromosomes).",
          keyFact: "Flip the 3D card below to watch this Zygote divide and grow into a full Foetus!",
        },
      },
      lesson: {
        heading: "Class 9–10 Lesson Plan: Human Reproductive System",
        sections: [
          {
            title: "1. Male Reproductive System (Connected Pathway)",
            html: `<div class="detail-fact" style="margin-top:4px"><strong>Sperm Path:</strong> Testes (in Scrotum) → Epididymis → Vas Deferens → (+ Seminal Vesicle &amp; Prostate Fluids) → Urethra (inside Penis) → Glans Penis</div>
            <p style="margin-top:8px">• <strong>Testes:</strong> Make sperm and Testosterone; sit outside the abdomen in the <strong>Scrotum</strong> (2–3 °C cooler).<br/>
            • <strong>Seminal Vesicles &amp; Prostate Gland:</strong> Add alkaline, fructose-rich fluid making sperm mobile and nourished.</p>`,
          },
          {
            title: "2. Female Reproductive System (Vagina to Ovary)",
            html: `<p>• <strong>Ovaries:</strong> Produce 1 mature Egg (Ovum) every ~28 days + Estrogen &amp; Progesterone.<br/>
            • <strong>Fallopian Tubes (Oviducts):</strong> Carry egg from ovary to uterus; <strong>exact site of Fertilization</strong>.<br/>
            • <strong>Uterus (Womb):</strong> Muscular organ with blood-rich <strong>Endometrium</strong> where the embryo implants and grows.<br/>
            • <strong>Cervix &amp; Vagina:</strong> Gateway into uterus and elastic birth canal.</p>`,
          },
          {
            title: "3. What Happens If the Egg Is NOT Fertilized? (Menstruation)",
            html: `<p>Every month, the uterus builds a thick, spongy, blood-rich lining (<strong>Endometrium</strong>) expecting a fertilized egg. If fertilization does not happen, the egg lives ~1 day, the lining is no longer needed, and it breaks down and exits through the vagina as blood and mucus for 3–5 days (<strong>Menstruation</strong>, repeating roughly every 28 days).</p>`,
          },
        ],
      },
      quiz: {
        title: "Reproductive System Quick Check",
        correctMsg: "Spot on! Accurate biology.",
        wrongMsg: "Not quite — review the explanation below.",
        nextBtn: "Next Question",
        restartBtn: "Restart Quiz",
        scoreLabel: "Score",
        questions: [
          {
            q: "Why are the human Testes located outside the abdominal cavity inside the Scrotum?",
            options: [
              "To keep them warmer than 40 °C",
              "Because sperm formation requires a temperature 2–3 °C lower than normal body temperature",
              "To protect them from blood flow",
              "To store urine",
            ],
            answer: 1,
            explain: "Sperm production (spermatogenesis) works optimally at 2–3 °C below core body temperature (37 °C).",
          },
          {
            q: "In the human female reproductive system, where does Fertilization (fusion of sperm and egg) normally occur?",
            options: ["Vagina", "Uterus", "Fallopian Tube (Oviduct)", "Cervix"],
            answer: 2,
            explain: "Sperm swim up through the cervix and uterus to meet and fertilize the egg inside the Fallopian Tube.",
          },
          {
            q: "What is the role of the Prostate Gland and Seminal Vesicles in the male reproductive system?",
            options: [
              "To produce eggs",
              "To add fluid that nourishes sperm and makes their transport smooth",
              "To filter urea from blood",
              "To pump blood to the legs",
            ],
            answer: 1,
            explain: "Their secretions supply fructose energy, alkaline protection, and liquid medium so sperm can swim easily.",
          },
          {
            q: "Which muscular duct carries sperm upward from the Epididymis toward the Urethra?",
            options: ["Ureter", "Vas Deferens", "Trachea", "Fallopian Tube"],
            answer: 1,
            explain: "The Vas Deferens loops over the bladder to deliver mature sperm to the ejaculatory duct and urethra.",
          },
          {
            q: "Where does the fertilized egg (embryo) implant and develop into a baby?",
            options: ["Ovary", "Uterus (Endometrium)", "Prostate Gland", "Vagina"],
            answer: 1,
            explain: "After fertilization in the Fallopian Tube, the dividing embryo travels down and implants in the thick Uterine lining.",
          },
        ],
      },

      // =========================================================
      // SECTION 2: 3D FLIPPABLE SPERM-EGG FUSION <-> FOETUS LAB
      // =========================================================
      ffSec: {
        title: "Sperm–Egg Fusion & Foetus Formation — 3D Flippable Lab",
        subtitle:
          "Front side: Microscopic fusion of Sperm (23) + Egg (23) = Zygote (46) • Flip the card to follow Zygote → Embryo → Foetus",
        flipMain: "Flip Card: Sperm–Egg Fusion ↔ Foetus Formation",
        frontBadge: "FRONT • SPERM + EGG FUSION (23 + 23 = 46)",
        flipToFoetus: "Flip to Foetus Formation",
        fusionBtn: "Trigger Sperm–Egg Fusion (Form Zygote!)",
        fusionPrompt:
          "Tap any part of the Sperm, Egg, or Fusion process below to see how a new life begins:",
        backBadge: "BACK • FOETUS FORMATION (ZYGOTE TO 9 MONTHS)",
        flipToFusion: "Flip Back to Sperm–Egg Fusion",
        nextFoetusBtn: "Advance Foetus Stage (1 → 4)",
        foetusPrompt:
          "Follow the 4 clear stages from a single-cell Zygote to a fully formed Foetus nourished by the Placenta:",
        lessonTab: "Fertilization, Placenta & Foetus Notes (Class 9–10)",
        quizTab: "Fertilization & Foetus Quiz",
        analogyLabel: "Easy Analogy",
        fusionHud: [
          "APPROACH: Motile Sperm (n=23) swims toward Egg (n=23) using its Flagellum",
          "ENTRY: Acrosome enzymes open Zona Pellucida → Only 1 Sperm enters!",
          "FUSION COMPLETE: 23 + 23 = 46 Chromosomes → Diploid ZYGOTE Formed!",
        ],
        foetusHud: [
          "STAGE 1 (Day 1): Single-cell Diploid Zygote (46 chromosomes) formed!",
          "STAGE 2 (Days 2–7): Rapid Mitotic Cleavage → Ball of Cells (Blastocyst)",
          "STAGE 3 (Weeks 2–8): Implantation in Uterus → Embryo + Placenta + Heartbeat",
          "STAGE 4 (Weeks 9–38): Foetus in Amniotic Sac nourished via Umbilical Cord!",
        ],
      },
      fusionParts: {
        spermHead: {
          name: "Sperm Head & Acrosome",
          en: "23 Chromosomes + Enzyme Cap",
          role: "Father's DNA Delivery",
          analogy: "Like a tiny biological key carrying half the genetic blueprint, tipped with an enzyme drill to unlock the egg's coat.",
          summary:
            "The pointed head holds a tightly packed haploid Nucleus (23 chromosomes from the father) capped by the Acrosome, which releases enzymes to penetrate the egg's outer layer.",
        },
        spermTail: {
          name: "Middle Piece & Tail",
          en: "Mitochondria + Flagellum",
          role: "Engine & Propeller",
          analogy: "The middle piece is a packed battery bank (mitochondria) powering the whipping propeller tail!",
          summary:
            "Spiral mitochondria in the middle piece generate nonstop ATP energy so the long whip-like Flagellum can propel the sperm all the way to the Fallopian Tube.",
        },
        ovum: {
          name: "Ovum (Egg Cell)",
          en: "23 Chromosomes + Stored Food",
          role: "Mother's DNA + Nutrient Reserve",
          analogy: "The largest human cell—stocked like a self-contained spacecraft with food reserves for the first days of growth.",
          summary:
            "A large, spherical, non-motile female gamete containing 23 chromosomes from the mother, nutrient-rich cytoplasm, and a protective outer jelly coat (Zona Pellucida).",
        },
        zygoteFusion: {
          name: "Nuclear Fusion (Zygote)",
          en: "23 + 23 = 46 Chromosomes",
          role: "Fertilization Complete",
          analogy: "Merging two half-blueprints into one complete, unique 46-chromosome instruction manual for a new human!",
          summary:
            "As soon as the first sperm nucleus enters, the egg membrane hardens instantly (preventing extra sperm from entering). Both haploid nuclei fuse to form a single diploid cell: the Zygote.",
        },
      },
      foetusSteps: {
        stage1: {
          name: "1. Zygote (Day 1)",
          en: "Single Diploid Cell (46)",
          role: "Formed in Fallopian Tube",
          analogy: "The very first seed cell containing the complete DNA for eye color, height, and every organ.",
          summary:
            "Immediately after sperm–egg fusion in the Fallopian Tube, the single-cell Zygote holds a full set of 46 chromosomes (23 pairs) and begins its journey toward the uterus.",
        },
        stage2: {
          name: "2. Cleavage & Blastocyst",
          en: "Days 2–7 • Rapid Mitosis",
          role: "1 → 2 → 4 → 8 → Ball of Cells",
          analogy: "Like one building block rapidly copying itself into a neat hollow cluster while gliding down a conveyor belt.",
          summary:
            "As cilia push it along the Fallopian Tube, the Zygote divides repeatedly by Mitosis into 2, 4, 8, 16, and ~100 cells, forming a hollow sphere called a Blastocyst.",
        },
        stage3: {
          name: "3. Implantation & Embryo",
          en: "Weeks 2–8 • Placenta Forms",
          role: "Attaches to Uterine Wall",
          analogy: "Planting the growing seed into warm, nutrient-rich soil and connecting its supply lifeline.",
          summary:
            "The Blastocyst embeds securely into the blood-rich Uterine Endometrium (Implantation). Cells differentiate into tissues and organs—now called an Embryo—while the Placenta starts forming and the tiny heart begins beating.",
        },
        stage4: {
          name: "4. Foetus (Weeks 9–38)",
          en: "Placenta • Umbilical Cord • Amniotic Sac",
          role: "Full Organ Growth & Birth (~9 Months)",
          analogy: "A protected astronaut floating weightlessly in warm liquid cushion, receiving O₂ and food through a flexible lifeline.",
          summary:
            "Once all major body parts (head, limbs, fingers, organs) are recognizable, the Embryo is called a Foetus. The disc-shaped Placenta and Umbilical Cord supply O₂ & Glucose from the mother's blood and remove CO₂ & wastes, while Amniotic Fluid cushions bumps until birth (~9 months / 280 days).",
        },
      },
      ffLesson: {
        heading: "Class 9–10 Master Notes: Fertilization, Placenta & Foetus",
        sections: [
          {
            title: "1. Step-by-Step Formula: Gametes to Baby",
            html: `<div class="detail-fact" style="margin-top:4px"><strong>Sperm (n = 23) + Egg (n = 23) ──(Fertilization in Fallopian Tube)──► Zygote (2n = 46) ──(Mitosis)──► Blastocyst ──(Implantation in Uterus)──► Embryo ──(Week 9+)──► Foetus (~9 Months Gestation)</strong></div>`,
          },
          {
            title: "2. Role of the Placenta (High-Yield 3-Mark Board Question)",
            html: `<p>The <strong>Placenta</strong> is a special disc-shaped tissue embedded in the uterine wall with tiny finger-like <strong>Villi</strong> on the embryo's side surrounded by mother's blood spaces. Connected to the baby by the <strong>Umbilical Cord</strong>, it performs 2 vital jobs:<br/>
            1. <strong>Nutrition &amp; Oxygen:</strong> Passes Glucose, Amino Acids, and O₂ from mother's blood to the foetus.<br/>
            2. <strong>Waste Removal:</strong> Carries CO₂ and nitrogenous wastes from the foetus back into the mother's blood for excretion.</p>`,
          },
          {
            title: "3. How Sex of the Baby Is Determined (XX vs. XY)",
            html: `<p>Every Egg carries an <strong>X</strong> chromosome. Half of a father's Sperm carry <strong>X</strong> and half carry <strong>Y</strong>:<br/>
            • <strong>X (egg) + X (sperm) = XX (Girl)</strong><br/>
            • <strong>X (egg) + Y (sperm) = XY (Boy)</strong><br/>
            Thus, the father's sperm scientifically determines the sex of the child (50%–50% chance).</p>`,
          },
        ],
      },
      ffQuiz: {
        title: "Fertilization & Foetus Quiz",
        correctMsg: "Brilliant! Complete mastery.",
        wrongMsg: "Not quite — read the explanation below.",
        nextBtn: "Next Question",
        restartBtn: "Restart Quiz",
        scoreLabel: "Score",
        questions: [
          {
            q: "How many chromosomes are present in a human Sperm, Egg, and Zygote respectively?",
            options: ["46, 46, 92", "23, 23, 46", "23, 46, 69", "12, 12, 24"],
            answer: 1,
            explain: "Both Sperm and Egg are haploid (23 chromosomes each); their fusion restores the diploid human count of 46 in the Zygote.",
          },
          {
            q: "Which disc-like organ embedded in the uterine wall supplies O₂ and Glucose from the mother to the developing foetus?",
            options: ["Placenta", "Prostate Gland", "Gallbladder", "Pancreas"],
            answer: 0,
            explain: "The Placenta exchanges oxygen, nutrients, and wastes between mother and foetus via the Umbilical Cord.",
          },
          {
            q: "What is the embedding of the developing ball of cells (Blastocyst) into the thick uterine wall called?",
            options: ["Ovulation", "Implantation", "Peristalsis", "Emulsification"],
            answer: 1,
            explain: "Implantation anchors the embryo into the nutrient-rich Endometrium of the uterus.",
          },
          {
            q: "At what stage is the developing human inside the womb called a 'Foetus'?",
            options: [
              "Before fertilization",
              "When all major body parts and limbs become recognizable (from ~Week 9 onward)",
              "Only after birth",
              "When it is a single cell",
            ],
            answer: 1,
            explain: "It begins as a single-cell Zygote, becomes an Embryo during early organ formation, and is called a Foetus once body parts are clearly recognizable.",
          },
        ],
      },
    },

    hi: {
      chapterBadge: "अध्याय 07 • कक्षा 9–10 लैब",
      title: "मानव प्रजनन तंत्र — लाइव लैब",
      subtitle:
        "नर व मादा की पूर्ण जुड़ी हुई संरचना देखें, या निषेचन तक शुक्राणु की लाइव यात्रा ट्रैक करें",
      views: {
        male: "नर प्रजनन तंत्र",
        female: "मादा प्रजनन तंत्र",
        fert: "शुक्राणु पथ व निषेचन",
      },
      toggles: {
        pause: "रोकें",
        play: "चलाएँ",
        pins: "हॉटस्पॉट पिन",
      },
      metrics: {
        gamete: "युग्मक (Gamete)",
        chromo: "गुणसूत्र",
        hormone: "प्रमुख हार्मोन",
        site: "सक्रिय स्थल",
        maleGamete: "शुक्राणु (n = 23)",
        femaleGamete: "अंडाणु (n = 23)",
        zygoteGamete: "युग्मनज (2n = 46)",
        maleHormone: "टेस्टोस्टेरोन",
        femaleHormone: "एस्ट्रोजन व प्रोजे.",
        fertHormone: "hCG व प्रोजेस्टेरोन",
        maleSite: "वृषण → मूत्रमार्ग",
        femaleSite: "अंडाशय → गर्भाशय",
        fertSite: "फैलोपियन नलिका",
      },
      pathControl: "शुक्राणु यात्रा और निषेचन प्रगति",
      pathPills: {
        male: "नर मार्ग • जुड़ा हुआ तंत्र",
        female: "मादा मार्ग • अंडोत्सर्ग लाइव",
        entry: "1. योनि व गर्भाशय ग्रीवा प्रवेश",
        uterus: "2. गर्भाशय में ऊपर तैरना",
        tube: "3. फैलोपियन नलिका में मिलन",
        zygote: "4. निषेचन → युग्मनज (46)",
      },
      presets: {
        entry: "1. योनि प्रवेश",
        uterus: "2. गर्भाशय यात्रा",
        tube: "3. नलिका मिलन",
        zygote: "4. युग्मनज (46)",
      },
      tabs: {
        inspect: "अंग निरीक्षक",
        lesson: "कक्षा 9–10 पाठ",
        quiz: "त्वरित जाँच",
      },
      selectPrompt:
        "सटीक संरचनात्मक जुड़ाव और कार्य पढ़ने के लिए चित्र के किसी भी पिन पर टैप करें।",
      maleHotspots: {
        testis: {
          name: "वृषण (Testes) और वृषणकोष",
          en: "Testes & Scrotum",
          role: "शुक्राणु व टेस्टोस्टेरोन निर्माण",
          summary:
            "उदर गुहा के बाहर वृषणकोष (Scrotum) में स्थित एक जोड़ी अंडाकार अंग, जो लाखों शुक्राणु (Sperm) और नर हार्मोन टेस्टोस्टेरोन बनाते हैं।",
          keyFact: "बोर्ड प्रश्न: शुक्राणु निर्माण के लिए शरीर के तापमान से 2–3 °C कम ताप चाहिए, इसलिए वृषण वृषणकोष में बाहर स्थित होते हैं।",
        },
        epididymis: {
          name: "अधिवृषण (Epididymis)",
          en: "Epididymis",
          role: "शुक्राणु परिपक्वता व भंडारण",
          summary: "प्रत्येक वृषण के पीछे व ऊपर लिपटी कुंडलित नलिका जहाँ नए शुक्राणु परिपक्व होकर तैरने की क्षमता प्राप्त करते हैं।",
          keyFact: "यह वृषण को सीधे शुक्रवाहिका (Vas Deferens) से जोड़ता है।",
        },
        vasDeferens: {
          name: "शुक्रवाहिका (Vas Deferens)",
          en: "Vas Deferens",
          role: "शुक्राणु परिवहन नलिका",
          summary: "अधिवृषण से ऊपर उठकर मूत्राशय के ऊपर से घूमती हुई शुक्राशय नलिका से जुड़ती है और शुक्राणु को मूत्रमार्ग तक ले जाती है।",
          keyFact: "पेशीय संकुचन द्वारा शुक्राणु को तेज़ी से आगे बढ़ाती है।",
        },
        seminal: {
          name: "शुक्राशय (Seminal Vesicles)",
          en: "Seminal Vesicles",
          role: "फ्रुक्टोज़ ऊर्जा द्रव",
          summary: "मूत्राशय के पीछे स्थित ग्रंथियाँ जो फ्रुक्टोज़ शर्करा युक्त पोषक द्रव मिलाकर शुक्राणुओं को तैरने की ऊर्जा देती हैं।",
          keyFact: "प्रोस्टेट स्राव के साथ मिलकर वीर्य (Semen) बनाती हैं।",
        },
        prostate: {
          name: "प्रोस्टेट ग्रंथि (Prostate Gland)",
          en: "Prostate Gland",
          role: "क्षारीय सुरक्षात्मक द्रव",
          summary: "मूत्राशय के ठीक नीचे मूत्रमार्ग के चारों ओर स्थित अखरोट के आकार की ग्रंथि जो क्षारीय द्रव स्रावित कर शुक्राणुओं की रक्षा करती है।",
          keyFact: "मादा मार्ग में शुक्राणुओं को जीवित व गतिशील बनाए रखती है।",
        },
        urethra: {
          name: "मूत्रमार्ग और शिश्न (Penis)",
          en: "Urethra & Penis Shaft",
          role: "साझा निर्गम मार्ग",
          summary: "शिश्न के भीतर से गुजरने वाली नलिका जो मूत्र और वीर्य दोनों का साझा मार्ग है (एक समय में केवल एक ही प्रवाहित होता है)।",
          keyFact: "प्रजनन के दौरान वीर्य को सुरक्षित रूप से योनि में पहुँचाता है।",
        },
        glans: {
          name: "शिश्न मुंड (Glans Penis)",
          en: "Glans Penis",
          role: "संवेदी अग्र सिरा",
          summary: "शिश्न का चिकना, गोल और संवेदनशील अग्र सिरा जहाँ मूत्रमार्ग बाहर खुलता है।",
          keyFact: "यह संवेदी तंत्रिका सिरों से समृद्ध होता है।",
        },
      },
      femaleHotspots: {
        ovary: {
          name: "अंडाशय (Ovaries)",
          en: "Ovaries (Paired)",
          role: "अंडाणु व एस्ट्रोजन/प्रोजेस्टेरोन",
          summary: "निचले उदर के दोनों ओर स्थित बादाम के आकार के अंग। हर महीने एक अंडाशय एक परिपक्व अंडाणु (Ovum) छोड़ता है।",
          keyFact: "अंडाशय मादा हार्मोन एस्ट्रोजन और प्रोजेस्टेरोन स्रावित करते हैं।",
        },
        fimbriae: {
          name: "झालर (Fimbriae)",
          en: "Fimbriae",
          role: "अंडाणु पकड़ने वाले सिरे",
          summary: "फैलोपियन नलिका के खुले सिरे पर उंगली जैसे प्रवर्ध जो अंडोत्सर्ग के बाद अंडाणु को नलिका के भीतर समेट लेते हैं।",
          keyFact: "अंडाणु को सुरक्षित रूप से अंडवाहिनी में प्रवेश कराते हैं।",
        },
        fallopian: {
          name: "फैलोपियन नलिका (अंडवाहिनी)",
          en: "Fallopian Tube (Oviduct)",
          role: "निषेचन का मुख्य स्थल!",
          summary: "अंडाशय को गर्भाशय से जोड़ने वाली दो पतली नलिकाएँ। शुक्राणु और अंडाणु का निषेचन (Fertilization) ठीक यहीं होता है!",
          keyFact: "परीक्षा तथ्य: निषेचन फैलोपियन नलिका में होता है, गर्भाशय में नहीं!",
        },
        uterus: {
          name: "गर्भाशय (Uterus / Womb)",
          en: "Uterus",
          role: "रोपण व भ्रूण विकास स्थल",
          summary: "उल्टे नाशपाती के आकार का मजबूत पेशीय अंग जहाँ निषेचित अंडा रोपित होकर ~9 महीने तक शिशु के रूप में बढ़ता है।",
          keyFact: "प्रसव के समय इसकी पेशीय दीवारें संकुचित होकर जन्म में मदद करती हैं।",
        },
        endometrium: {
          name: "एंडोमेट्रियम (भीतरी परत)",
          en: "Endometrium",
          role: "रक्त-समृद्ध गद्दा",
          summary: "गर्भाशय की स्पंजी भीतरी परत जो हर महीने भ्रूण के पोषण हेतु मोटी होती है। निषेचन न होने पर यह ऋतुस्राव के रूप में बाहर निकल जाती है।",
          keyFact: "रोपण होने पर यही परत प्लेसेंटा बनाने में मदद करती है।",
        },
        cervix: {
          name: "गर्भाशय ग्रीवा (Cervix)",
          en: "Cervix",
          role: "सुरक्षात्मक प्रवेश द्वार",
          summary: "गर्भाशय को योनि से जोड़ने वाला संकरा निचला पेशीय मुख।",
          keyFact: "गर्भावस्था के दौरान गर्भाशय को सुरक्षित बंद रखता है।",
        },
        vagina: {
          name: "योनि (Vagina)",
          en: "Vagina (Birth Canal)",
          role: "शुक्राणु ग्रहण व जन्म नाल",
          summary: "गर्भाशय ग्रीवा को शरीर के बाहर से जोड़ने वाली लचीली पेशीय नाल।",
          keyFact: "यह शुक्राणु की यात्रा का प्रथम चरण तथा प्रसव मार्ग है।",
        },
      },
      fertHotspots: {
        entry: {
          name: "1. योनि व ग्रीवा प्रवेश",
          en: "Vagina & Cervix Entry",
          role: "लाखों शुक्राणुओं की दौड़ शुरू",
          summary: "शुक्राणु अपनी पूँछ की सहायता से योनि से गर्भाशय ग्रीवा पार कर ऊपर तैरना शुरू करते हैं।",
          keyFact: "लाखों में से केवल कुछ सौ ही फैलोपियन नलिका तक पहुँच पाते हैं।",
        },
        uterusSwim: {
          name: "2. गर्भाशय में आरोहण",
          en: "Uterus Swim",
          role: "अंडवाहिनी की ओर दिशा",
          summary: "शुक्राणु गर्भाशय गुहा से ऊपर बढ़ते हुए दोनों फैलोपियन नलिकाओं की ओर जाते हैं।",
          keyFact: "अंडाणु के पास से निकलने वाले रासायनिक संकेत उन्हें सही दिशा दिखाते हैं।",
        },
        meet: {
          name: "3. फैलोपियन नलिका में मिलन",
          en: "Fallopian Tube Meet",
          role: "शुक्राणु व अंडाणु का संपर्क",
          summary: "फैलोपियन नलिका में शुक्राणु अंडाशय से आए बड़े अंडाणु को चारों ओर से घेर लेते हैं।",
          keyFact: "अंडोत्सर्ग के बाद अंडाणु लगभग 24 घंटे सक्रिय रहता है।",
        },
        fusion: {
          name: "4. निषेचन → युग्मनज",
          en: "23 + 23 = 46 Chromosomes",
          role: "नए जीवन की प्रथम कोशिका",
          summary: "केवल एक शुक्राणु अंडाणु में प्रवेश करता है और दोनों के केंद्रक मिलकर 46 गुणसूत्रों वाला द्विगुणित युग्मनज (Zygote) बनाते हैं।",
          keyFact: "नीचे का 3D कार्ड पलटें और देखें कि यह युग्मनज भ्रूण (Foetus) कैसे बनता है!",
        },
      },
      lesson: {
        heading: "कक्षा 9–10 पाठ योजना: मानव प्रजनन तंत्र",
        sections: [
          {
            title: "1. नर प्रजनन तंत्र (जुड़ा हुआ मार्ग)",
            html: `<div class="detail-fact" style="margin-top:4px"><strong>शुक्राणु पथ:</strong> वृषण (वृषणकोष) → अधिवृषण → शुक्रवाहिका → (+ शुक्राशय व प्रोस्टेट द्रव) → मूत्रमार्ग (शिश्न) → शिश्न मुंड</div>`,
          },
          {
            title: "2. मादा प्रजनन तंत्र (योनि से अंडाशय तक)",
            html: `<p>• <strong>अंडाशय:</strong> अंडाणु व हार्मोन निर्माण।<br/>• <strong>फैलोपियन नलिका:</strong> <strong>निषेचन का स्थल</strong>।<br/>• <strong>गर्भाशय (एंडोमेट्रियम):</strong> भ्रूण का रोपण व 9 महीने विकास।<br/>• <strong>ग्रीवा व योनि:</strong> प्रवेश व जन्म नाल।</p>`,
          },
          {
            title: "3. निषेचन न होने पर क्या होता है? (ऋतुस्राव / Menstruation)",
            html: `<p>यदि अंडाणु निषेचित नहीं होता, तो गर्भाशय की मोटी रक्त-समृद्ध परत (एंडोमेट्रियम) टूटकर योनि मार्ग से 3–5 दिनों तक बाहर निकलती है। यह चक्र लगभग हर 28 दिन में दोहराता है।</p>`,
          },
        ],
      },
      quiz: {
        title: "प्रजनन तंत्र त्वरित जाँच",
        correctMsg: "बिल्कुल सही! सटीक उत्तर।",
        wrongMsg: "सही नहीं — नीचे स्पष्टीकरण पढ़ें।",
        nextBtn: "अगला प्रश्न",
        restartBtn: "फिर से शुरू करें",
        scoreLabel: "स्कोर",
        questions: [
          {
            q: "मानव वृषण (Testes) उदर गुहा के बाहर वृषणकोष में क्यों स्थित होते हैं?",
            options: ["40 °C से अधिक ताप हेतु", "शुक्राणु निर्माण के लिए शरीर से 2–3 °C कम तापमान आवश्यक है", "रक्त रोकने हेतु", "मूत्र संग्रह हेतु"],
            answer: 1,
            explain: "शुक्राणु निर्माण के लिए कम तापमान आवश्यक होता है।",
          },
          {
            q: "मादा प्रजनन तंत्र में निषेचन (शुक्राणु व अंडाणु का संलयन) कहाँ होता है?",
            options: ["योनि", "गर्भाशय", "फैलोपियन नलिका (अंडवाहिनी)", "ग्रीवा"],
            answer: 2,
            explain: "निषेचन फैलोपियन नलिका में होता है और रोपण गर्भाशय में।",
          },
          {
            q: "प्रोस्टेट ग्रंथि और शुक्राशय का मुख्य कार्य क्या है?",
            options: ["अंडाणु बनाना", "शुक्राणुओं को पोषण व तरल माध्यम देना", "रक्त छानना", "ऑक्सीजन देना"],
            answer: 1,
            explain: "इनका स्राव शुक्राणुओं को फ्रुक्टोज़ ऊर्जा व गतिशीलता देता है।",
          },
          {
            q: "अधिवृषण से शुक्राणु को मूत्रमार्ग की ओर कौन-सी नलिका ले जाती है?",
            options: ["मूत्रवाहिनी", "शुक्रवाहिका (Vas Deferens)", "श्वासनली", "अंडवाहिनी"],
            answer: 1,
            explain: "शुक्रवाहिका शुक्राणु को ऊपर से मूत्रमार्ग तक पहुँचाती है।",
          },
          {
            q: "निषेचित अंडा (भ्रूण) कहाँ रोपित होकर शिशु के रूप में विकसित होता है?",
            options: ["अंडाशय", "गर्भाशय (एंडोमेट्रियम)", "प्रोस्टेट", "योनि"],
            answer: 1,
            explain: "भ्रूण गर्भाशय की मोटी एंडोमेट्रियम दीवार में रोपित होता है।",
          },
        ],
      },

      ffSec: {
        title: "शुक्राणु–अंडाणु संलयन और भ्रूण निर्माण — 3D फ्लिप लैब",
        subtitle:
          "सामने: शुक्राणु (23) + अंडाणु (23) = युग्मनज (46) • कार्ड पलटें और युग्मनज → भ्रूण (Foetus) निर्माण देखें",
        flipMain: "कार्ड पलटें: निषेचन संलयन ↔ भ्रूण निर्माण",
        frontBadge: "सामने • शुक्राणु + अंडाणु संलयन (23 + 23 = 46)",
        flipToFoetus: "भ्रूण (Foetus) निर्माण देखें",
        fusionBtn: "शुक्राणु–अंडाणु संलयन चलाएँ (युग्मनज बनाएँ!)",
        fusionPrompt: "नया जीवन कैसे शुरू होता है, जानने के लिए किसी भी भाग पर टैप करें:",
        backBadge: "पीछे • भ्रूण निर्माण (युग्मनज से 9 महीने तक)",
        flipToFusion: "वापस निषेचन संलयन पर जाएँ",
        nextFoetusBtn: "अगला विकास चरण देखें (1 → 4)",
        foetusPrompt: "एक कोशिका युग्मनज से प्लेसेंटा द्वारा पोषित पूर्ण भ्रूण (Foetus) बनने के 4 चरण देखें:",
        lessonTab: "निषेचन, प्लेसेंटा व भ्रूण नोट्स (कक्षा 9–10)",
        quizTab: "निषेचन व भ्रूण क्विज़",
        analogyLabel: "सरल उदाहरण",
        fusionHud: [
          "चरण 1: गतिशील शुक्राणु (23) पूँछ से तैरकर अंडाणु (23) के पास आता है",
          "चरण 2: एक्रोसोम एंजाइम परत खोलते हैं → केवल 1 शुक्राणु प्रवेश करता है!",
          "निषेचन पूर्ण: 23 + 23 = 46 गुणसूत्र → द्विगुणित युग्मनज (ZYGOTE) बना!",
        ],
        foetusHud: [
          "चरण 1 (दिन 1): एक-कोशिकीय द्विगुणित युग्मनज (46 गुणसूत्र) बना!",
          "चरण 2 (दिन 2–7): तीव्र समसूत्री विभाजन → कोशिका गोला (ब्लास्टोसिस्ट)",
          "चरण 3 (सप्ताह 2–8): गर्भाशय में रोपण → एम्ब्रियो + प्लेसेंटा + धड़कन",
          "चरण 4 (सप्ताह 9–38): एम्नियोटिक थैली में पूर्ण भ्रूण (Foetus) व नाभि रज्जु!",
        ],
      },
      fusionParts: {
        spermHead: {
          name: "शुक्राणु सिर व एक्रोसोम",
          en: "23 Chromosomes + Acrosome",
          role: "पिता का DNA वाहक",
          analogy: "आधी आनुवंशिक चाबी जिसके सिरे पर अंडाणु का द्वार खोलने वाले एंजाइम होते हैं।",
          summary: "सिर में पिता के 23 गुणसूत्र और अग्र सिरे पर एक्रोसोम होता है जो अंडाणु की झिल्ली भेदता है।",
        },
        spermTail: {
          name: "मध्य भाग व पूँछ",
          en: "Mitochondria + Flagellum",
          role: "ऊर्जा इंजन व प्रोपेलर",
          analogy: "माइटोकॉन्ड्रिया बैटरी की तरह पूँछ को लगातार तैरने की ATP ऊर्जा देते हैं।",
          summary: "मध्य भाग में माइटोकॉन्ड्रिया ATP बनाते हैं जिससे पूँछ शुक्राणु को अंडवाहिनी तक पहुँचाती है।",
        },
        ovum: {
          name: "अंडाणु (Ovum / Egg)",
          en: "23 Chromosomes + Food",
          role: "माता का DNA व पोषण",
          analogy: "मानव शरीर की सबसे बड़ी कोशिका जिसमें शुरुआती विकास का भोजन पहले से भरा है।",
          summary: "माता के 23 गुणसूत्र और सुरक्षात्मक ज़ोना पेलुसिडा परत युक्त गोल मादा युग्मक।",
        },
        zygoteFusion: {
          name: "केंद्रक संलयन (युग्मनज)",
          en: "23 + 23 = 46 Chromosomes",
          role: "निषेचन पूर्ण",
          analogy: "दो आधे ब्लूप्रिंट मिलकर एक नए इंसान का पूरा 46-गुणसूत्र नक्शा बनाते हैं!",
          summary: "दोनों केंद्रक जुड़कर 46 गुणसूत्रों वाला युग्मनज (Zygote) बनाते हैं और बाहरी झिल्ली अन्य शुक्राणुओं को रोक देती है।",
        },
      },
      foetusSteps: {
        stage1: {
          name: "1. युग्मनज (दिन 1)",
          en: "Zygote (46)",
          role: "फैलोपियन नलिका में बना",
          analogy: "प्रथम बीज कोशिका जिसमें पूरे शरीर का DNA कोड मौजूद है।",
          summary: "निषेचन के तुरंत बाद बनी 46 गुणसूत्रों वाली एकल कोशिका।",
        },
        stage2: {
          name: "2. विदलन व ब्लास्टोसिस्ट",
          en: "दिन 2–7 • समसूत्री विभाजन",
          role: "1 → 2 → 4 → 8 → कोशिका गोला",
          analogy: "एक ईंट तेजी से विभाजित होकर सुंदर खोखला गोला बनाती हुई गर्भाशय की ओर बढ़ती है।",
          summary: "युग्मनज बार-बार विभाजित होकर ब्लास्टोसिस्ट (कोशिकाओं की गेंद) बनाता है।",
        },
        stage3: {
          name: "3. रोपण व एम्ब्रियो",
          en: "सप्ताह 2–8 • प्लेसेंटा निर्माण",
          role: "गर्भाशय दीवार से जुड़ाव",
          analogy: "पौधे के बीज को उपजाऊ मिट्टी में रोपकर पोषण पाइप जोड़ने जैसा।",
          summary: "ब्लास्टोसिस्ट एंडोमेट्रियम में धँस जाता है (रोपण); अंग बनना व हृदय धड़कन शुरू होती है।",
        },
        stage4: {
          name: "4. भ्रूण / Foetus (सप्ताह 9–38)",
          en: "प्लेसेंटा • नाभि रज्जु • एम्नियोटिक द्रव",
          role: "पूर्ण विकास (~9 महीने)",
          analogy: "सुरक्षित तरल गद्दे में तैरता शिशु जिसे नाभि रज्जु से O₂ व भोजन मिलता है।",
          summary: "हाथ-पैर व सभी अंग स्पष्ट होने पर इसे भ्रूण (Foetus) कहते हैं। प्लेसेंटा माँ के रक्त से O₂ व ग्लूकोज़ देता है और अपशिष्ट हटाता है।",
        },
      },
      ffLesson: {
        heading: "कक्षा 9–10 नोट्स: निषेचन, प्लेसेंटा और भ्रूण निर्माण",
        sections: [
          {
            title: "1. युग्मक से शिशु तक का क्रम",
            html: `<div class="detail-fact" style="margin-top:4px"><strong>शुक्राणु (23) + अंडाणु (23) → युग्मनज (46) → ब्लास्टोसिस्ट → रोपण (गर्भाशय) → एम्ब्रियो → भ्रूण / Foetus (~9 महीने)</strong></div>`,
          },
          {
            title: "2. प्लेसेंटा (अपरा) की भूमिका",
            html: `<p>गर्भाशय की दीवार में धँसी तश्तरीनुमा संरचना जो <strong>नाभि रज्जु (Umbilical Cord)</strong> द्वारा भ्रूण को माँ के रक्त से <strong>ग्लूकोज़ व O₂</strong> पहुँचाती है और <strong>CO₂ व अपशिष्ट</strong> बाहर निकालती है।</p>`,
          },
          {
            title: "3. लिंग निर्धारण (XX बनाम XY)",
            html: `<p>अंडाणु में सदैव <strong>X</strong> होता है; शुक्राणु में <strong>X</strong> या <strong>Y</strong>। अतः <strong>XX = लड़की</strong> और <strong>XY = लड़का</strong> (50%–50% संभावना)।</p>`,
          },
        ],
      },
      ffQuiz: {
        title: "निषेचन व भ्रूण क्विज़",
        correctMsg: "शानदार! पूर्ण स्पष्टता।",
        wrongMsg: "सही नहीं — नीचे स्पष्टीकरण पढ़ें।",
        nextBtn: "अगला प्रश्न",
        restartBtn: "फिर से शुरू करें",
        scoreLabel: "स्कोर",
        questions: [
          {
            q: "मानव शुक्राणु, अंडाणु और युग्मनज (Zygote) में क्रमशः कितने गुणसूत्र होते हैं?",
            options: ["46, 46, 92", "23, 23, 46", "23, 46, 69", "12, 12, 24"],
            answer: 1,
            explain: "युग्मकों में 23-23 गुणसूत्र होते हैं जो जुड़कर युग्मनज में 46 बनाते हैं।",
          },
          {
            q: "माँ के रक्त से भ्रूण को ग्लूकोज़ व ऑक्सीजन पहुँचाने वाली संरचना कौन-सी है?",
            options: ["प्लेसेंटा (अपरा)", "प्रोस्टेट", "पित्ताशय", "अग्न्याशय"],
            answer: 0,
            explain: "प्लेसेंटा और नाभि रज्जु भ्रूण को पोषण व O₂ देते हैं।",
          },
          {
            q: "ब्लास्टोसिस्ट का गर्भाशय की मोटी दीवार में धँसना क्या कहलाता है?",
            options: ["अंडोत्सर्ग", "रोपण (Implantation)", "क्रमाकुंचन", "पायसीकरण"],
            answer: 1,
            explain: "रोपण द्वारा भ्रूण गर्भाशय की एंडोमेट्रियम से जुड़ता है।",
          },
          {
            q: "गर्भ में विकसित शिशु को 'भ्रूण (Foetus)' किस अवस्था में कहा जाता है?",
            options: ["निषेचन से पहले", "जब सभी प्रमुख अंग व हाथ-पैर स्पष्ट दिखने लगें (~सप्ताह 9 से)", "जन्म के बाद", "एक कोशिका अवस्था में"],
            answer: 1,
            explain: "अंग स्पष्ट रूप से पहचाने जाने पर एम्ब्रियो को भ्रूण (Foetus) कहा जाता है।",
          },
        ],
      },
    },

    bn: {
      chapterBadge: "অধ্যায় ০৭ • শ্রেণি ৯–১০ ল্যাব",
      title: "মানব প্রজনন তন্ত্র — লাইভ ল্যাব",
      subtitle:
        "পুরুষ ও নারীর সম্পূর্ণ সংযুক্ত অঙ্গসংস্থান দেখুন, অথবা নিষেক পর্যন্ত শুক্রাণুর লাইভ যাত্রা অনুসরণ করুন",
      views: {
        male: "পুরুষ প্রজনন তন্ত্র",
        female: "নারী প্রজনন তন্ত্র",
        fert: "শুক্রাণু পথ ও নিষেক",
      },
      toggles: {
        pause: "থামান",
        play: "চালান",
        pins: "হটস্পট পিন",
      },
      metrics: {
        gamete: "গ্যামেট (জননকোষ)",
        chromo: "ক্রোমোজোম",
        hormone: "প্রধান হরমোন",
        site: "সক্রিয় স্থান",
        maleGamete: "শুক্রাণু (n = 23)",
        femaleGamete: "ডিম্বাণু (n = 23)",
        zygoteGamete: "জাইগোট (2n = 46)",
        maleHormone: "টেস্টোস্টেরন",
        femaleHormone: "ইস্ট্রোজেন ও প্রজে.",
        fertHormone: "hCG ও প্রজেস্টেরন",
        maleSite: "শুক্রাশয় → মূত্রনালী",
        femaleSite: "ডিম্বাশয় → জরায়ু",
        fertSite: "ফ্যালোপিয়ান নালী",
      },
      pathControl: "শুক্রাণু যাত্রা ও নিষেক অগ্রগতি",
      pathPills: {
        male: "পুরুষ পথ • সংযুক্ত নালীতন্ত্র",
        female: "নারী পথ • ডিম্বপাত লাইভ",
        entry: "১. যোনি ও সারভিক্স প্রবেশ",
        uterus: "২. জরায়ুতে ওপরে সাঁতার",
        tube: "৩. ফ্যালোপিয়ান নালীতে মিলন",
        zygote: "৪. নিষেক → জাইগোট (46)",
      },
      presets: {
        entry: "১. যোনি প্রবেশ",
        uterus: "২. জরায়ু যাত্রা",
        tube: "৩. নালীতে মিলন",
        zygote: "৪. জাইগোট (46)",
      },
      tabs: {
        inspect: "অঙ্গ পরিদর্শক",
        lesson: "শ্রেণি ৯–১০ পাঠ",
        quiz: "দ্রুত যাচাই",
      },
      selectPrompt:
        "সঠিক গঠনগত সংযোগ ও কাজ জানতে চিত্রের যেকোনো জ্বলন্ত পিনে ট্যাপ করুন।",
      maleHotspots: {
        testis: {
          name: "শুক্রাশয় (Testes) ও স্ক্রোটাম",
          en: "Testes & Scrotum",
          role: "শুক্রাণু ও টেস্টোস্টেরন তৈরি",
          summary:
            "উদর গহ্বরের বাইরে স্ক্রোটাম থলির ভেতর অবস্থিত একজোড়া ডিম্বাকৃতি অঙ্গ, যা লক্ষ লক্ষ শুক্রাণু ও পুরুষ হরমোন টেস্টোস্টেরন তৈরি করে।",
          keyFact: "পরীক্ষার প্রশ্ন: শুক্রাণু উৎপাদনের জন্য দেহের তাপমাত্রার চেয়ে ২–৩ °C কম তাপ দরকার, তাই শুক্রাশয় স্ক্রোটামে বাইরে থাকে।",
        },
        epididymis: {
          name: "এপিডিডাইমিস (Epididymis)",
          en: "Epididymis",
          role: "শুক্রাণুর পরিণতি ও সঞ্চয়",
          summary: "প্রতিটি শুক্রাশয়ের পেছনে ও ওপরে পেঁচানো নালী যেখানে নতুন শুক্রাণু পরিণত হয়ে সাঁতার কাটার ক্ষমতা পায়।",
          keyFact: "এটি শুক্রাশয়কে সরাসরি শুক্রনালীর (Vas Deferens) সাথে যুক্ত করে।",
        },
        vasDeferens: {
          name: "শুক্রনালী (Vas Deferens)",
          en: "Vas Deferens",
          role: "শুক্রাণু পরিবহন নালী",
          summary: "এপিডিডাইমিস থেকে ওপরে উঠে মূত্রাশয়ের ওপর দিয়ে ঘুরে সেমিনাল ভেসিকলের সাথে যুক্ত হয়ে শুক্রাণুকে মূত্রনালীতে নিয়ে যায়।",
          keyFact: "পেশীর সংকোচনে পরিণত শুক্রাণু দ্রুত ওপরে এগিয়ে যায়।",
        },
        seminal: {
          name: "সেমিনাল ভেসিকল",
          en: "Seminal Vesicles",
          role: "ফ্রুক্টোজ পুষ্টি রস",
          summary: "মূত্রাশয়ের পেছনে থাকা একজোড়া গ্রন্থি যা ফ্রুক্টোজ শর্করাযুক্ত তরল যোগ করে শুক্রাণুকে সাঁতারের শক্তি দেয়।",
          keyFact: "প্রোস্টেট রসের সাথে মিলে বীর্য (Semen) গঠন করে।",
        },
        prostate: {
          name: "প্রোস্টেট গ্রন্থি (Prostate Gland)",
          en: "Prostate Gland",
          role: "ক্ষারীয় সুরক্ষা তরল",
          summary: "মূত্রাশয়ের ঠিক নিচে মূত্রনালীকে ঘিরে থাকা গ্রন্থি, যা ক্ষারীয় তরল ক্ষরণ করে শুক্রাণুকে পুষ্টি ও সুরক্ষা দেয়।",
          keyFact: "নারী প্রজনন পথে শুক্রাণুকে সচল ও জীবিত রাখতে সাহায্য করে।",
        },
        urethra: {
          name: "মূত্রনালী ও শিশ্ন (Penis)",
          en: "Urethra & Penis Shaft",
          role: "যৌথ নির্গমন পথ",
          summary: "পেশীবহুল শিশ্নের ভেতর দিয়ে যাওয়া নালী যা মূত্র ও বীর্য উভয়ের নির্গমন পথ (একসাথে কখনোই বের হয় না)।",
          keyFact: "প্রজননের সময় বীর্যকে নিরাপদে যোনিতে পৌঁছে দেয়।",
        },
        glans: {
          name: "গ্ল্যান্স পেনিস (শিশ্ন মুণ্ড)",
          en: "Glans Penis",
          role: "সংবেদী প্রান্তভাগ",
          summary: "শিশ্নের মসৃণ, গোলাকার ও অত্যন্ত সংবেদী অগ্রভাগ যেখানে মূত্রনালী বাইরে উন্মুক্ত হয়।",
          keyFact: "অসংখ্য সংবেদী স্নায়ুপ্রান্তে সমৃদ্ধ।",
        },
      },
      femaleHotspots: {
        ovary: {
          name: "ডিম্বাশয় (Ovaries)",
          en: "Ovaries (Paired)",
          role: "ডিম্বাণু ও ইস্ট্রোজেন/প্রজেস্টেরন",
          summary: "তলপেটের দু'পাশে থাকা বাদাম-আকৃতির একজোড়া অঙ্গ। প্রতি মাসে একটি ডিম্বাশয় থেকে একটি পরিণত ডিম্বাণু (Ovum) নির্গত হয়।",
          keyFact: "ইস্ট্রোজেন ও প্রজেস্টেরন হরমোন ক্ষরণ করে।",
        },
        fimbriae: {
          name: "ফিম্ব্রি (Fimbriae)",
          en: "Fimbriae",
          role: "ডিম্বাণু সংগ্রহকারী প্রান্ত",
          summary: "ফ্যালোপিয়ান নালীর খোলা মুখে আঙুলের মতো প্রবর্ধক যা ডিম্বপাতের পর ডিম্বাণুকে নালীর ভেতর টেনে নেয়।",
          keyFact: "নিশ্চল ডিম্বাণুকে ফ্যালোপিয়ান নালীতে প্রবেশে সাহায্য করে।",
        },
        fallopian: {
          name: "ফ্যালোপিয়ান নালী (ডিম্বনালী)",
          en: "Fallopian Tube (Oviduct)",
          role: "নিষেকের মূল স্থান!",
          summary: "ডিম্বাশয়কে জরায়ুর সাথে যুক্ত করা দুটি সরু নালী। শুক্রাণু ও ডিম্বাণুর নিষেক (Fertilization) ঠিক এখানেই ঘটে!",
          keyFact: "গুরুত্বপূর্ণ তথ্য: নিষেক ফ্যালোপিয়ান নালীতে ঘটে, জরায়ুতে নয়!",
        },
        uterus: {
          name: "জরায়ু (Uterus / Womb)",
          en: "Uterus",
          role: "রোপণ ও ভ্রূণ বৃদ্ধির স্থান",
          summary: "উল্টো নাশপাতি আকৃতির পেশীবহুল অঙ্গ যেখানে নিষিক্ত ডিম্বাণু রোপিত হয়ে প্রায় ৯ মাস ধরে শিশুরূপে বড় হয়।",
          keyFact: "প্রসবের সময় এর পেশী সংকুচিত হয়ে শিশু জন্মদানে সাহায্য করে।",
        },
        endometrium: {
          name: "এন্ডোমেট্রিয়াম (ভেতরের স্তর)",
          en: "Endometrium",
          role: "রক্তসমৃদ্ধ পুষ্টি স্তর",
          summary: "জরায়ুর ভেতরের নরম রক্তজালকসমৃদ্ধ স্তর যা প্রতি মাসে ভ্রূণের জন্য পুরু হয়। নিষেক না হলে এটি ঋতুস্রাব রূপে বেরিয়ে যায়।",
          keyFact: "ভ্রূণ রোপিত হলে এটি অমরা (Placenta) গঠনে অংশ নেয়।",
        },
        cervix: {
          name: "সারভিক্স (জরায়ু গ্রীবা)",
          en: "Cervix",
          role: "সুরক্ষা দ্বার",
          summary: "জরায়ুকে যোনির সাথে যুক্ত করা সরু পেশীবহুল মুখ।",
          keyFact: "গর্ভাবস্থায় জরায়ুকে নিরাপদে বন্ধ রাখে।",
        },
        vagina: {
          name: "যোনি (Vagina)",
          en: "Vagina (Birth Canal)",
          role: "শুক্রাণু গ্রহণ ও প্রসব পথ",
          summary: "সারভিক্সকে দেহের বাইরের সাথে যুক্ত করা স্থিতিস্থাপক পেশীবহুল নালী।",
          keyFact: "শুক্রাণুর যাত্রার প্রথম ধাপ এবং প্রসব পথ।",
        },
      },
      fertHotspots: {
        entry: {
          name: "১. যোনি ও সারভিক্স প্রবেশ",
          en: "Vagina & Cervix Entry",
          role: "লক্ষ লক্ষ শুক্রাণুর যাত্রা শুরু",
          summary: "শুক্রাণু লেজের সাহায্যে সাঁতরে যোনি থেকে সারভিক্স পেরিয়ে জরায়ুতে ঢোকে।",
          keyFact: "লক্ষ লক্ষ শুক্রাণুর মধ্যে মাত্র কয়েকশো ফ্যালোপিয়ান নালীতে পৌঁছায়।",
        },
        uterusSwim: {
          name: "২. জরায়ুতে ওপরে সাঁতার",
          en: "Uterus Swim",
          role: "ডিম্বনালীর দিকে অগ্রগতি",
          summary: "শুক্রাণু জরায়ু গহ্বর দিয়ে দ্রুত ওপরে উঠে উভয় ফ্যালোপিয়ান নালীর দিকে ছোটে।",
          keyFact: "ডিম্বাণুর আশপাশের রাসায়নিক সংকেত সঠিক পথ দেখায়।",
        },
        meet: {
          name: "৩. ফ্যালোপিয়ান নালীতে মিলন",
          en: "Fallopian Tube Meet",
          role: "শুক্রাণু ও ডিম্বাণুর সাক্ষাৎ",
          summary: "ফ্যালোপিয়ান নালীতে শুক্রাণুগুলো ডিম্বাশয় থেকে আসা বড় ডিম্বাণুটিকে ঘিরে ধরে।",
          keyFact: "ডিম্বপাতের পর ডিম্বাণু প্রায় ২৪ ঘণ্টা সজীব থাকে।",
        },
        fusion: {
          name: "৪. নিষেক → জাইগোট",
          en: "23 + 23 = 46 Chromosomes",
          role: "নতুন জীবনের প্রথম কোষ",
          summary: "একটি শুক্রাণু ডিম্বাণুতে প্রবেশ করে এবং দুটি নিউক্লিয়াস মিলে ৪৬ ক্রোমোজোমযুক্ত ডিপ্লয়েড জাইগোট (Zygote) তৈরি করে।",
          keyFact: "নিচের 3D কার্ড উল্টান এবং দেখুন জাইগোট থেকে কীভাবে পূর্ণ ভ্রূণ (Foetus) তৈরি হয়!",
        },
      },
      lesson: {
        heading: "শ্রেণি ৯–১০ পাঠ পরিকল্পনা: মানব প্রজনন তন্ত্র",
        sections: [
          {
            title: "১. পুরুষ প্রজনন তন্ত্র (সংযুক্ত পথ)",
            html: `<div class="detail-fact" style="margin-top:4px"><strong>শুক্রাণুর পথ:</strong> শুক্রাশয় (স্ক্রোটাম) → এপিডিডাইমিস → শুক্রনালী → (+ সেমিনাল ভেসিকল ও প্রোস্টেট রস) → মূত্রনালী (শিশ্ন) → গ্ল্যান্স পেনিস</div>`,
          },
          {
            title: "২. নারী প্রজনন তন্ত্র (যোনি থেকে ডিম্বাশয়)",
            html: `<p>• <strong>ডিম্বাশয়:</strong> ডিম্বাণু ও হরমোন তৈরি।<br/>• <strong>ফ্যালোপিয়ান নালী:</strong> <strong>নিষেকের স্থান</strong>।<br/>• <strong>জরায়ু (এন্ডোমেট্রিয়াম):</strong> ভ্রূণের রোপণ ও ৯ মাস বৃদ্ধি।<br/>• <strong>সারভিক্স ও যোনি:</strong> প্রবেশ ও প্রসব পথ।</p>`,
          },
          {
            title: "৩. ডিম্বাণু নিষিক্ত না হলে কী হয়? (ঋতুস্রাব / Menstruation)",
            html: `<p>নিষেক না হলে জরায়ুর পুরু রক্তসমৃদ্ধ এন্ডোমেট্রিয়াম স্তর ভেঙে গিয়ে যোনি পথে ৩–৫ দিন ধরে বেরিয়ে আসে। এই চক্র প্রতি ~২৮ দিন পরপর ঘটে।</p>`,
          },
        ],
      },
      quiz: {
        title: "প্রজনন তন্ত্র দ্রুত যাচাই",
        correctMsg: "একদম সঠিক! ধারণাটি পরিষ্কার।",
        wrongMsg: "সঠিক নয় — নিচের ব্যাখ্যাটি দেখুন।",
        nextBtn: "পরবর্তী প্রশ্ন",
        restartBtn: "আবার শুরু করুন",
        scoreLabel: "স্কোর",
        questions: [
          {
            q: "মানুষের শুক্রাশয় (Testes) উদর গহ্বরের বাইরে স্ক্রোটামে থাকে কেন?",
            options: ["৪০ °C-এর বেশি তাপের জন্য", "শুক্রাণু তৈরির জন্য দেহের চেয়ে ২–৩ °C কম তাপমাত্রা দরকার", "রক্ত আটকাতে", "মূত্র জমা রাখতে"],
            answer: 1,
            explain: "শুক্রাণু উৎপাদনের জন্য দেহের স্বাভাবিক তাপমাত্রার চেয়ে ২–৩ °C কম তাপ প্রয়োজন।",
          },
          {
            q: "নারী প্রজনন তন্ত্রে নিষেক (শুক্রাণু ও ডিম্বাণুর মিলন) সাধারণত কোথায় ঘটে?",
            options: ["যোনি", "জরায়ু", "ফ্যালোপিয়ান নালী (ডিম্বনালী)", "সারভিক্স"],
            answer: 2,
            explain: "নিষেক ফ্যালোপিয়ান নালীতে ঘটে এবং ভ্রূণ রোপিত হয় জরায়ুতে।",
          },
          {
            q: "প্রোস্টেট গ্রন্থি ও সেমিনাল ভেসিকলের কাজ কী?",
            options: ["ডিম্বাণু তৈরি", "শুক্রাণুকে পুষ্টি ও সাঁতারের তরল মাধ্যম জোগানো", "রক্ত ছাঁকা", "অক্সিজেন দেওয়া"],
            answer: 1,
            explain: "এদের ক্ষরিত রস শুক্রাণুকে ফ্রুক্টোজ শক্তি ও সুরক্ষা দেয়।",
          },
          {
            q: "এপিডিডাইমিস থেকে শুক্রাণুকে মূত্রনালীর দিকে কোন নালী নিয়ে যায়?",
            options: ["গবিনী", "শুক্রনালী (Vas Deferens)", "শ্বাসনালী", "ডিম্বনালী"],
            answer: 1,
            explain: "শুক্রনালী (Vas Deferens) শুক্রাণু পরিবহন করে মূত্রনালীতে পৌঁছায়।",
          },
          {
            q: "নিষিক্ত ডিম্বাণু (ভ্রূণ) কোথায় রোপিত হয়ে শিশুরূপে বেড়ে ওঠে?",
            options: ["ডিম্বাশয়", "জরায়ু (এন্ডোমেট্রিয়াম)", "প্রোস্টেট", "যোনি"],
            answer: 1,
            explain: "জরায়ুর রক্তসমৃদ্ধ এন্ডোমেট্রিয়াম স্তরে ভ্রূণ রোপিত হয়।",
          },
        ],
      },

      ffSec: {
        title: "শুক্রাণু–ডিম্বাণু মিলন ও ভ্রূণ গঠন — 3D ফ্লিপ ল্যাব",
        subtitle:
          "সামনে: শুক্রাণু (23) + ডিম্বাণু (23) = জাইগোট (46) • কার্ড উল্টান এবং জাইগোট → ভ্রূণ (Foetus) গঠন দেখুন",
        flipMain: "কার্ড উল্টান: নিষেক মিলন ↔ ভ্রূণ গঠন",
        frontBadge: "সামনে • শুক্রাণু + ডিম্বাণু মিলন (23 + 23 = 46)",
        flipToFoetus: "ভ্রূণ (Foetus) গঠন দেখুন",
        fusionBtn: "শুক্রাণু–ডিম্বাণু মিলন চালান (জাইগোট গড়ুন!)",
        fusionPrompt: "নতুন জীবন কীভাবে শুরু হয় জানতে নিচের যেকোনো অংশে ট্যাপ করুন:",
        backBadge: "পিছনে • ভ্রূণ গঠন (জাইগোট থেকে ৯ মাস)",
        flipToFusion: "নিষেক মিলনে ফিরে যান",
        nextFoetusBtn: "পরবর্তী ভ্রূণ ধাপ দেখুন (১ → ৪)",
        foetusPrompt: "এককোষী জাইগোট থেকে অমরা (Placenta) দ্বারা পুষ্ট পূর্ণ ভ্রূণ (Foetus) গঠনের ৪ ধাপ দেখুন:",
        lessonTab: "নিষেক, অমরা ও ভ্রূণ নোটস (শ্রেণি ৯–১০)",
        quizTab: "নিষেক ও ভ্রূণ কুইজ",
        analogyLabel: "সহজ উদাহরণ",
        fusionHud: [
          "ধাপ ১: সচল শুক্রাণু (23) লেজ নেড়ে ডিম্বাণুর (23) দিকে এগিয়ে আসে",
          "ধাপ ২: অ্যাক্রোজোম উৎসেচক পর্দা খোলে → কেবল ১টি শুক্রাণু ঢোকে!",
          "নিষেক সম্পূর্ণ: 23 + 23 = 46 ক্রোমোজোম → ডিপ্লয়েড জাইগোট (ZYGOTE)!",
        ],
        foetusHud: [
          "ধাপ ১ (দিন ১): এককোষী ডিপ্লয়েড জাইগোট (46 ক্রোমোজোম) তৈরি হলো!",
          "ধাপ ২ (দিন ২–৭): দ্রুত মাইটোসিস বিভাজন → কোষগুচ্ছ (ব্লাস্টোসিস্ট)",
          "ধাপ ৩ (সপ্তাহ ২–৮): জরায়ুতে রোপণ → এমব্রায়ো + অমরা + হৃদস্পন্দন",
          "ধাপ ৪ (সপ্তাহ ৯–৩৮): অ্যামনিওটিক থলিতে পূর্ণ ভ্রূণ (Foetus) ও নাভিরজ্জু!",
        ],
      },
      fusionParts: {
        spermHead: {
          name: "শুক্রাণুর মস্তক ও অ্যাক্রোজোম",
          en: "23 Chromosomes + Acrosome",
          role: "পিতার DNA বাহক",
          analogy: "অর্ধেক জিনগত চাবির মতো যার ডগায় ডিম্বাণুর আবরণ খোলার উৎসেচক থাকে।",
          summary: "মস্তকে পিতার ২৩টি ক্রোমোজোম ও অগ্রভাগে অ্যাক্রোজোম থাকে যা ডিম্বাণুর পর্দা ভেদ করে।",
        },
        spermTail: {
          name: "মধ্যখণ্ড ও লেজ",
          en: "Mitochondria + Flagellum",
          role: "ইঞ্জিন ও প্রপেলার",
          analogy: "মাইটোকন্ড্রিয়া ব্যাটারির মতো লেজকে অবিরাম সাঁতার কাটার ATP শক্তি জোগায়।",
          summary: "মধ্যখণ্ডের মাইটোকন্ড্রিয়া ATP শক্তি তৈরি করে আর লম্বা লেজ শুক্রাণুকে সাঁতরে এগিয়ে নেয়।",
        },
        ovum: {
          name: "ডিম্বাণু (Ovum / Egg)",
          en: "23 Chromosomes + Food",
          role: "মাতার DNA ও সঞ্চিত খাদ্য",
          analogy: "মানবদেহের বৃহত্তম কোষ—যার ভেতর প্রথম কয়েকদিনের বৃদ্ধির খাবার মজুত থাকে।",
          summary: "মাতার ২৩টি ক্রোমোজোম, পুষ্টিসমৃদ্ধ সাইটোপ্লাজম ও জোনা পেলুসিডা আবরণযুক্ত গোলাকার কোষ।",
        },
        zygoteFusion: {
          name: "নিউক্লিয়াস মিলন (জাইগোট)",
          en: "23 + 23 = 46 Chromosomes",
          role: "নিষেক সম্পূর্ণ",
          analogy: "দুটি অর্ধেক নকশা মিলে একজন নতুন মানুষের সম্পূর্ণ ৪৬-ক্রোমোজোম ব্লুপ্রিন্ট তৈরি করে!",
          summary: "উভয় নিউক্লিয়াস মিলে ৪৬ ক্রোমোজোমযুক্ত জাইগোট তৈরি করে এবং পর্দা শক্ত হয়ে বাকি শুক্রাণু আটকে দেয়।",
        },
      },
      foetusSteps: {
        stage1: {
          name: "১. জাইগোট (দিন ১)",
          en: "Zygote (46)",
          role: "ফ্যালোপিয়ান নালীতে গঠিত",
          analogy: "প্রথম বীজ কোষ যাতে চোখের রঙ, উচ্চতা ও সব অঙ্গের পূর্ণ DNA আছে।",
          summary: "নিষেকের পরপরই তৈরি ৪৬ ক্রোমোজোমবিশিষ্ট এককোষী ডিপ্লয়েড জাইগোট।",
        },
        stage2: {
          name: "২. বিভাজন ও ব্লাস্টোসিস্ট",
          en: "দিন ২–৭ • মাইটোসিস",
          role: "১ → ২ → ৪ → ৮ → কোষের গোলক",
          analogy: "একটি কোষ দ্রুত বিভাজিত হয়ে সুন্দর ফাঁপা গোলক গড়ে জরায়ুর দিকে এগিয়ে চলে।",
          summary: "জাইগোট বারবার মাইটোসিস বিভাজনে বিভক্ত হয়ে ব্লাস্টোসিস্ট তৈরি করে।",
        },
        stage3: {
          name: "৩. রোপণ ও এমব্রায়ো",
          en: "সপ্তাহ ২–৮ • অমরা গঠন",
          role: "জরায়ু প্রাচীরে সংযুক্তি",
          analogy: "উর্বর মাটিতে বীজ রোপণ করে পুষ্টি সরবরাহ লাইন জুড়ে দেওয়ার মতো।",
          summary: "ব্লাস্টোসিস্ট এন্ডোমেট্রিয়ামে রোপিত হয়; অঙ্গ গঠন ও ক্ষুদ্র হৃদস্পন্দন শুরু হয়।",
        },
        stage4: {
          name: "৪. ভ্রূণ / Foetus (সপ্তাহ ৯–৩৮)",
          en: "অমরা • নাভিরজ্জু • অ্যামনিওটিক তরল",
          role: "পূর্ণাঙ্গ বৃদ্ধি (~৯ মাস)",
          analogy: "উষ্ণ তরল কুশনে নিরাপদে ভাসমান শিশু যা নাভিরজ্জু দিয়ে O₂ ও পুষ্টি পায়।",
          summary: "হাত-পা ও সব অঙ্গ স্পষ্ট হলে একে ফিটাস (Foetus) বলে। অমরা (Placenta) মায়ের রক্ত থেকে O₂ ও গ্লুকোজ দেয় এবং বর্জ্য সরায়।",
        },
      },
      ffLesson: {
        heading: "শ্রেণি ৯–১০ নোটস: নিষেক, অমরা ও ভ্রূণ গঠন",
        sections: [
          {
            title: "১. গ্যামেট থেকে শিশু গঠনের ধাপ",
            html: `<div class="detail-fact" style="margin-top:4px"><strong>শুক্রাণু (23) + ডিম্বাণু (23) → জাইগোট (46) → ব্লাস্টোসিস্ট → রোপণ (জরায়ু) → এমব্রায়ো → ফিটাস / Foetus (~৯ মাস)</strong></div>`,
          },
          {
            title: "২. অমরার (Placenta) কাজ",
            html: `<p>জরায়ু প্রাচীরে যুক্ত চাকতির মতো কলা যা <strong>নাভিরজ্জু (Umbilical Cord)</strong> দিয়ে মায়ের রক্ত থেকে ভ্রূণে <strong>গ্লুকোজ ও O₂</strong> পৌঁছে দেয় এবং <strong>CO₂ ও বর্জ্য</strong> বের করে আনে।</p>`,
          },
          {
            title: "৩. লিঙ্গ নির্ধারণ (XX বনাম XY)",
            html: `<p>ডিম্বাণুতে সর্বদা <strong>X</strong> থাকে; শুক্রাণুতে <strong>X</strong> বা <strong>Y</strong>। তাই <strong>XX = কন্যা</strong> এবং <strong>XY = পুত্র</strong> (৫০%–৫০% সম্ভাবনা)।</p>`,
          },
        ],
      },
      ffQuiz: {
        title: "নিষেক ও ভ্রূণ কুইজ",
        correctMsg: "দারুণ! সম্পূর্ণ পরিষ্কার ধারণা।",
        wrongMsg: "সঠিক নয় — নিচের ব্যাখ্যাটি দেখুন।",
        nextBtn: "পরবর্তী প্রশ্ন",
        restartBtn: "আবার শুরু করুন",
        scoreLabel: "স্কোর",
        questions: [
          {
            q: "মানুষের শুক্রাণু, ডিম্বাণু ও জাইগোটে যথাক্রমে কয়টি ক্রোমোজোম থাকে?",
            options: ["৪৬, ৪৬, ৯২", "২৩, ২৩, ৪৬", "২৩, ৪৬, ৬৯", "১২, ১২, ২৪"],
            answer: 1,
            explain: "গ্যামেটে ২৩টি করে ক্রোমোজোম থাকে, যা মিলে জাইগোটে ৪৬টি হয়।",
          },
          {
            q: "মায়ের রক্ত থেকে ভ্রূণে গ্লুকোজ ও অক্সিজেন পৌঁছে দেয় কোন অঙ্গ?",
            options: ["অমরা (Placenta)", "প্রোস্টেট", "পিত্তাশয়", "অগ্ন্যাশয়"],
            answer: 0,
            explain: "অমরা ও নাভিরজ্জু ভ্রূণের পুষ্টি, শ্বসন ও রেচনে সাহায্য করে।",
          },
          {
            q: "জরায়ুর পুরু প্রাচীরে ব্লাস্টোসিস্টের গেঁথে যাওয়াকে কী বলে?",
            options: ["ডিম্বপাত", "রোপণ (Implantation)", "পেরিস্ট্যালসিস", "ইমালসিফিকেশন"],
            answer: 1,
            explain: "রোপণের মাধ্যমে ভ্রূণ জরায়ু প্রাচীরের সাথে যুক্ত হয়।",
          },
          {
            q: "গর্ভস্থ শিশুকে কখন 'ফিটাস (Foetus)' বলা হয়?",
            options: ["নিষেকের আগে", "যখন হাত-পা ও সব প্রধান অঙ্গ স্পষ্টভাবে চেনা যায় (~সপ্তাহ ৯ থেকে)", "জন্মের পরে", "এককোষী অবস্থায়"],
            answer: 1,
            explain: "সব প্রধান অঙ্গ স্পষ্ট হলে এমব্রায়োকে ফিটাস (Foetus) বলে।",
          },
        ],
      },
    },
  };

  // Hotspot Pins (percentages on 420x440 stage)
  const MALE_PINS = [
    { id: "vasDeferens", x: 34.0, y: 22.0, tone: "venous" },
    { id: "seminal", x: 64.0, y: 31.0, tone: "electric" },
    { id: "prostate", x: 52.0, y: 46.0, tone: "electric" },
    { id: "epididymis", x: 25.0, y: 63.0, tone: "venous" },
    { id: "testis", x: 35.0, y: 74.0, tone: "arterial" },
    { id: "urethra", x: 62.0, y: 60.0, tone: "venous" },
    { id: "glans", x: 82.0, y: 68.0, tone: "arterial" },
  ];

  const FEMALE_PINS = [
    { id: "fallopian", x: 74.0, y: 21.0, tone: "electric" },
    { id: "fimbriae", x: 84.0, y: 34.0, tone: "venous" },
    { id: "ovary", x: 75.0, y: 42.0, tone: "arterial" },
    { id: "uterus", x: 50.0, y: 27.0, tone: "arterial" },
    { id: "endometrium", x: 50.0, y: 44.0, tone: "arterial" },
    { id: "cervix", x: 50.0, y: 60.0, tone: "electric" },
    { id: "vagina", x: 50.0, y: 76.0, tone: "venous" },
  ];

  const FERT_PINS = [
    { id: "entry", x: 50.0, y: 76.0, tone: "venous" },
    { id: "uterusSwim", x: 50.0, y: 44.0, tone: "electric" },
    { id: "meet", x: 72.0, y: 21.0, tone: "arterial" },
    { id: "fusion", x: 62.0, y: 24.0, tone: "electric" },
  ];

  // Male Connected Sperm Duct Path (Testis -> Epididymis -> Vas Deferens -> Prostate -> Urethra -> Glans)
  const MALE_DUCT_PATH = [
    [146, 326], // Testis
    [114, 304], // Epididymis lower
    [112, 268], // Epididymis upper
    [118, 178], // Vas Deferens rising
    [146, 98],  // Vas Deferens looping over bladder
    [224, 96],
    [254, 152], // Joining Seminal Vesicle duct
    [222, 200], // Through Prostate Gland
    [244, 248], // Urethra entering Penis shaft
    [304, 282], // Penis shaft
    [346, 298], // Glans Penis tip
  ];

  // Female / Fertilization Sperm Swim Path (Vagina -> Cervix -> Uterus -> Right Fallopian Tube Ampulla)
  const SPERM_SWIM_PATH = [
    [210, 358], // Vagina entrance
    [210, 310], // Vagina upper
    [210, 264], // Cervix
    [210, 204], // Uterus cavity
    [232, 156], // Uterine horn
    [268, 108], // Fallopian tube isthmus
    [306, 94],  // Ampulla (Fertilization site!)
  ];

  const ui = {
    view: "male", // "male" | "female" | "fert"
    paused: false,
    showPins: true,
    pathPct: 25, // 0..100 for Fertilization journey
    autoPath: true,
    selectedMaleHotspot: "testis",
    selectedFemaleHotspot: "fallopian",
    selectedFertHotspot: "entry",
    repTab: "inspect",
    repQ: 0,
    repOpt: null,
    repScore: 0,
    repQuizDone: false,

    // Section 2: 3D Flip Card
    isFlipped: false,
    ffPaused: false,
    selectedFusionPart: "spermHead",
    fusionProgress: 0, // 0..1 continuous cycle
    foetusStage: 0, // 0..3
    foetusAutoTimer: 0,
    ffTab: "lesson",
    ffQ: 0,
    ffOpt: null,
    ffScore: 0,
    ffQuizDone: false,
  };

  function getRD() {
    const lang = BL.getState().lang;
    return REP_DICT[lang] || REP_DICT.en;
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

  function drawSpermSprite(ctx, x, y, angle, phase, scale, color) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.scale(scale, scale);

    // Wiggling flagellum tail
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.6;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(-4, 0);
    for (let i = 1; i <= 4; i++) {
      ctx.lineTo(-4 - i * 4.2, Math.sin(phase + i * 1.4) * (1.8 + i * 0.5));
    }
    ctx.stroke();

    // Oval sperm head
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.ellipse(1, 0, 5.2, 3.1, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  // =========================================================
  // RENDER UI PANELS
  // =========================================================
  function renderRepPins() {
    const layer = document.getElementById("rep-pins-layer");
    if (!layer) return;
    const rd = getRD();
    const pins =
      ui.view === "male"
        ? MALE_PINS
        : ui.view === "female"
        ? FEMALE_PINS
        : FERT_PINS;
    const dictMap =
      ui.view === "male"
        ? rd.maleHotspots
        : ui.view === "female"
        ? rd.femaleHotspots
        : rd.fertHotspots;
    const selId =
      ui.view === "male"
        ? ui.selectedMaleHotspot
        : ui.view === "female"
        ? ui.selectedFemaleHotspot
        : ui.selectedFertHotspot;

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
        if (ui.view === "male") ui.selectedMaleHotspot = pin.id;
        else if (ui.view === "female") ui.selectedFemaleHotspot = pin.id;
        else ui.selectedFertHotspot = pin.id;
        ui.repTab = "inspect";
        syncRepUI();
      });

      layer.appendChild(btn);
    });
  }

  function renderQuizInto(container, quizObj, prefix) {
    const qs = quizObj.questions;
    const qIdx = prefix === "rep" ? ui.repQ : ui.ffQ;
    const selOpt = prefix === "rep" ? ui.repOpt : ui.ffOpt;
    const score = prefix === "rep" ? ui.repScore : ui.ffScore;
    const done = prefix === "rep" ? ui.repQuizDone : ui.ffQuizDone;

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
          if (prefix === "rep") {
            ui.repQ = 0;
            ui.repOpt = null;
            ui.repScore = 0;
            ui.repQuizDone = false;
            renderRepReader();
          } else {
            ui.ffQ = 0;
            ui.ffOpt = null;
            ui.ffScore = 0;
            ui.ffQuizDone = false;
            renderFFReader();
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
        if (prefix === "rep") {
          ui.repOpt = idx;
          if (idx === cur.answer) ui.repScore += 1;
          renderRepReader();
        } else {
          ui.ffOpt = idx;
          if (idx === cur.answer) ui.ffScore += 1;
          renderFFReader();
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
          if (prefix === "rep") {
            if (ui.repQ + 1 < qs.length) {
              ui.repQ += 1;
              ui.repOpt = null;
            } else {
              ui.repQuizDone = true;
            }
            renderRepReader();
          } else {
            if (ui.ffQ + 1 < qs.length) {
              ui.ffQ += 1;
              ui.ffOpt = null;
            } else {
              ui.ffQuizDone = true;
            }
            renderFFReader();
          }
        });
      }
    }
  }

  function renderRepReader() {
    const bodyEl = document.getElementById("rep-reader-body");
    if (!bodyEl) return;
    const rd = getRD();

    document.querySelectorAll("#rep-reader-panel .tab-btn").forEach((b) => {
      b.classList.toggle("active", b.getAttribute("data-rep-tab") === ui.repTab);
    });

    bodyEl.innerHTML = "";
    if (ui.repTab === "inspect") {
      const hint = document.createElement("p");
      hint.className = "heart-subtitle";
      hint.textContent = rd.selectPrompt;
      bodyEl.appendChild(hint);

      const dictMap =
        ui.view === "male"
          ? rd.maleHotspots
          : ui.view === "female"
          ? rd.femaleHotspots
          : rd.fertHotspots;
      const selId =
        ui.view === "male"
          ? ui.selectedMaleHotspot
          : ui.view === "female"
          ? ui.selectedFemaleHotspot
          : ui.selectedFertHotspot;

      const pillsWrap = document.createElement("div");
      pillsWrap.className = "part-pills";
      Object.keys(dictMap).forEach((id) => {
        const item = dictMap[id];
        const pill = document.createElement("button");
        pill.type = "button";
        pill.className = `part-pill${selId === id ? " active" : ""}`;
        pill.textContent = item.name;
        pill.addEventListener("click", () => {
          if (ui.view === "male") ui.selectedMaleHotspot = id;
          else if (ui.view === "female") ui.selectedFemaleHotspot = id;
          else ui.selectedFertHotspot = id;
          syncRepUI();
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
    } else if (ui.repTab === "lesson") {
      const h = document.createElement("h2");
      h.className = "detail-title";
      h.style.marginTop = "0";
      h.textContent = rd.lesson.heading;
      bodyEl.appendChild(h);

      rd.lesson.sections.forEach((sec) => {
        const card = document.createElement("div");
        card.className = "chapter-sec";
        card.innerHTML = `<h3>${sec.title}</h3><div style="margin-top:6px;font-size:13.5px;line-height:1.68">${sec.html}</div>`;
        bodyEl.appendChild(card);
      });
    } else {
      renderQuizInto(bodyEl, rd.quiz, "rep");
    }
  }

  function renderFlipDetails() {
    const rd = getRD();

    const fChips = document.getElementById("fusion-parts-chips");
    const fDetail = document.getElementById("fusion-part-detail");
    if (fChips && fDetail) {
      fChips.innerHTML = "";
      Object.keys(rd.fusionParts).forEach((pid) => {
        const item = rd.fusionParts[pid];
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `part-pill${ui.selectedFusionPart === pid ? " active" : ""}`;
        btn.textContent = item.name;
        btn.addEventListener("click", () => {
          ui.selectedFusionPart = pid;
          renderFlipDetails();
        });
        fChips.appendChild(btn);
      });

      const cur = rd.fusionParts[ui.selectedFusionPart] || rd.fusionParts.spermHead;
      fDetail.innerHTML = `
        <span class="detail-type">${cur.role}</span>
        <h3 class="detail-title">${BL.term(cur)}</h3>
        <p class="detail-summary">${cur.summary}</p>
        <div class="detail-fact">✨ <strong>${rd.ffSec.analogyLabel}:</strong> ${cur.analogy}</div>
      `;
    }

    const sChips = document.getElementById("foetus-steps-chips");
    const sDetail = document.getElementById("foetus-step-detail");
    if (sChips && sDetail) {
      sChips.innerHTML = "";
      const order = ["stage1", "stage2", "stage3", "stage4"];
      order.forEach((sid, idx) => {
        const item = rd.foetusSteps[sid];
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `part-pill${ui.foetusStage === idx ? " active" : ""}`;
        btn.textContent = item.name;
        btn.addEventListener("click", () => {
          ui.foetusStage = idx;
          ui.foetusAutoTimer = 0;
          renderFlipDetails();
        });
        sChips.appendChild(btn);
      });

      const curS = rd.foetusSteps[order[ui.foetusStage]] || rd.foetusSteps.stage1;
      sDetail.innerHTML = `
        <span class="detail-type">${curS.role}</span>
        <h3 class="detail-title">${BL.term(curS)}</h3>
        <p class="detail-summary">${curS.summary}</p>
        <div class="detail-fact">✨ <strong>${rd.ffSec.analogyLabel}:</strong> ${curS.analogy}</div>
      `;
    }
  }

  function renderFFReader() {
    const bodyEl = document.getElementById("ff-reader-body");
    if (!bodyEl) return;
    const rd = getRD();

    document.querySelectorAll("#ff-reader-panel .tab-btn").forEach((b) => {
      b.classList.toggle("active", b.getAttribute("data-ff-tab") === ui.ffTab);
    });

    bodyEl.innerHTML = "";
    if (ui.ffTab === "lesson") {
      const h = document.createElement("h3");
      h.className = "detail-title";
      h.style.marginTop = "0";
      h.textContent = rd.ffLesson.heading;
      bodyEl.appendChild(h);

      rd.ffLesson.sections.forEach((sec) => {
        const card = document.createElement("div");
        card.className = "chapter-sec";
        card.innerHTML = `<h3>${sec.title}</h3><div style="margin-top:6px;font-size:13.5px;line-height:1.68">${sec.html}</div>`;
        bodyEl.appendChild(card);
      });
    } else {
      renderQuizInto(bodyEl, rd.ffQuiz, "ff");
    }
  }

  function updatePathTelemetry() {
    const rd = getRD();
    const pct = Math.round(ui.pathPct);
    const setText = (id, txt) => {
      const el = document.getElementById(id);
      if (el) el.textContent = txt;
    };

    const slider = document.getElementById("path-slider");
    if (slider && document.activeElement !== slider) slider.value = String(pct);

    if (ui.view === "male") {
      setText("metric-gamete", rd.metrics.maleGamete);
      setText("metric-chromo", "23");
      setText("metric-hormone", rd.metrics.maleHormone);
      setText("metric-site", rd.metrics.maleSite);
      setText("path-pill", rd.pathPills.male);
    } else if (ui.view === "female") {
      setText("metric-gamete", rd.metrics.femaleGamete);
      setText("metric-chromo", "23");
      setText("metric-hormone", rd.metrics.femaleHormone);
      setText("metric-site", rd.metrics.femaleSite);
      setText("path-pill", rd.pathPills.female);
    } else {
      const isFused = pct >= 82;
      setText("metric-gamete", isFused ? rd.metrics.zygoteGamete : rd.metrics.maleGamete);
      setText("metric-chromo", isFused ? "46" : "23 + 23");
      setText("metric-hormone", rd.metrics.fertHormone);
      setText("metric-site", rd.metrics.fertSite);

      const pillTxt =
        pct < 28
          ? rd.pathPills.entry
          : pct < 58
          ? rd.pathPills.uterus
          : pct < 82
          ? rd.pathPills.tube
          : rd.pathPills.zygote;
      setText("path-pill", pillTxt);
    }
  }

  function syncRepUI() {
    const rd = getRD();
    const setText = (id, txt) => {
      const el = document.getElementById(id);
      if (el) el.textContent = txt;
    };

    setText("rep-chapter-badge", rd.chapterBadge);
    setText("rep-title", rd.title);
    setText("rep-subtitle", rd.subtitle);
    setText("lbl-view-male", rd.views.male);
    setText("lbl-view-female", rd.views.female);
    setText("lbl-view-fert", rd.views.fert);
    setText("lbl-rep-pins", rd.toggles.pins);

    setText("lbl-m-gamete", rd.metrics.gamete);
    setText("lbl-m-chromo", rd.metrics.chromo);
    setText("lbl-m-hormone", rd.metrics.hormone);
    setText("lbl-m-site", rd.metrics.site);
    setText("lbl-path-control", rd.pathControl);

    setText("preset-entry", rd.presets.entry);
    setText("preset-uterus", rd.presets.uterus);
    setText("preset-tube", rd.presets.tube);
    setText("preset-zygote", rd.presets.zygote);

    setText("tab-rep-inspect", rd.tabs.inspect);
    setText("tab-rep-lesson", rd.tabs.lesson);
    setText("tab-rep-quiz", rd.tabs.quiz);

    // Section 2 labels
    setText("ff-sec-title", rd.ffSec.title);
    setText("ff-sec-subtitle", rd.ffSec.subtitle);
    setText("lbl-rep-flip-main", rd.ffSec.flipMain);
    setText("lbl-ff-front-badge", rd.ffSec.frontBadge);
    setText("lbl-flip-to-foetus", rd.ffSec.flipToFoetus);
    setText("lbl-trigger-fusion", rd.ffSec.fusionBtn);
    setText("lbl-fusion-prompt", rd.ffSec.fusionPrompt);
    setText("lbl-ff-back-badge", rd.ffSec.backBadge);
    setText("lbl-flip-to-fusion", rd.ffSec.flipToFusion);
    setText("lbl-next-foetus-stage", rd.ffSec.nextFoetusBtn);
    setText("lbl-foetus-prompt", rd.ffSec.foetusPrompt);
    setText("tab-ff-lesson", rd.ffSec.lessonTab);
    setText("tab-ff-quiz", rd.ffSec.quizTab);

    const setActiveBtn = (id, active) => {
      const el = document.getElementById(id);
      if (el) {
        el.classList.toggle("active-accent", active);
        el.setAttribute("aria-pressed", String(active));
      }
    };
    setActiveBtn("btn-view-male", ui.view === "male");
    setActiveBtn("btn-view-female", ui.view === "female");
    setActiveBtn("btn-view-fert", ui.view === "fert");
    setActiveBtn("btn-rep-pins", ui.showPins);

    const pBtn = document.getElementById("btn-rep-pause");
    if (pBtn) {
      pBtn.innerHTML = ui.paused
        ? `▶ <span>${rd.toggles.play}</span>`
        : `⏸ <span>${rd.toggles.pause}</span>`;
    }

    const ffPBtn = document.getElementById("btn-ff-pause");
    if (ffPBtn) {
      ffPBtn.innerHTML = ui.ffPaused
        ? `▶ <span>${rd.toggles.play}</span>`
        : `⏸ <span>${rd.toggles.pause}</span>`;
    }

    const flipCard = document.getElementById("rep-flip-card");
    const flipMain = document.getElementById("btn-rep-flip-main");
    if (flipCard) flipCard.classList.toggle("is-flipped", ui.isFlipped);
    if (flipMain) flipMain.setAttribute("aria-pressed", String(ui.isFlipped));

    document.querySelectorAll("[data-path]").forEach((b) => {
      b.classList.toggle(
        "active",
        ui.view === "fert" && Math.abs(Number(b.getAttribute("data-path")) - ui.pathPct) < 12
      );
    });

    updatePathTelemetry();
    renderRepPins();
    renderRepReader();
    renderFlipDetails();
    renderFFReader();
  }

  // =========================================================
  // CANVAS 1: 60 FPS MALE, FEMALE & FERTILIZATION (420x440)
  // =========================================================
  function startRepCanvas() {
    const canvas = document.getElementById("rep-canvas");
    const box = document.getElementById("rep-canvas-box");
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
    let lastTick = 0;

    function drawMaleSystem(ctx, isLight) {
      const sel = ui.selectedMaleHotspot;
      const cyan = isLight ? "#2b7eb3" : "#68b8e6";
      const rose = isLight ? "#c24b65" : "#e0637d";
      const gold = isLight ? "#b58428" : "#fbbf24";
      const textCol = isLight ? "#162235" : "#e6effa";

      ctx.save();
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      // 1. Urinary Bladder (Reference organ sitting above Prostate)
      ctx.fillStyle = isLight ? "rgba(43,126,179,0.12)" : "rgba(104,184,230,0.14)";
      ctx.strokeStyle = isLight ? "rgba(43,126,179,0.45)" : "rgba(104,184,230,0.45)";
      ctx.lineWidth = 1.6;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.ellipse(202, 146, 44, 34, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.font = "700 9px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = isLight ? "#556982" : "#8ca4c0";
      ctx.textAlign = "center";
      ctx.fillText("BLADDER", 202, 149);

      // 2. Scrotum Outer Pouch
      ctx.fillStyle = isLight ? "rgba(194,75,101,0.10)" : "rgba(224,99,125,0.12)";
      ctx.strokeStyle = sel === "testis" ? gold : isLight ? "rgba(194,75,101,0.45)" : "rgba(224,99,125,0.45)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(142, 326, 46, 52, 0.1, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // 3. Penis Shaft & Connected Glans Penis
      ctx.fillStyle = isLight ? "rgba(43,126,179,0.16)" : "rgba(104,184,230,0.18)";
      ctx.strokeStyle = sel === "urethra" ? gold : cyan;
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.moveTo(212, 224);
      ctx.lineTo(324, 272);
      ctx.quadraticCurveTo(334, 294, 310, 310);
      ctx.lineTo(196, 260);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Glans Penis (Smooth rounded cap at tip)
      ctx.fillStyle = sel === "glans" ? "rgba(251,191,36,0.35)" : isLight ? "rgba(194,75,101,0.28)" : "rgba(224,99,125,0.34)";
      ctx.strokeStyle = sel === "glans" ? gold : rose;
      ctx.lineWidth = sel === "glans" ? 3 : 2.2;
      ctx.beginPath();
      ctx.ellipse(336, 295, 22, 18, 0.42, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // 4. Testis (Oval Testicle inside Scrotum)
      ctx.fillStyle = sel === "testis" ? "rgba(251,191,36,0.32)" : isLight ? "rgba(194,75,101,0.32)" : "rgba(224,99,125,0.38)";
      ctx.strokeStyle = sel === "testis" ? gold : rose;
      ctx.lineWidth = sel === "testis" ? 3 : 2.2;
      ctx.beginPath();
      ctx.ellipse(148, 326, 24, 32, 0.12, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // 5. Epididymis (Comma-shaped coil hugging back/top of Testis)
      ctx.strokeStyle = sel === "epididymis" ? gold : cyan;
      ctx.lineWidth = sel === "epididymis" ? 9 : 7.5;
      ctx.beginPath();
      ctx.moveTo(128, 344);
      ctx.bezierCurveTo(104, 328, 104, 286, 126, 274);
      ctx.stroke();

      // 6. Vas Deferens (Connected loop rising UP and OVER the Bladder!)
      ctx.strokeStyle = sel === "vasDeferens" ? gold : cyan;
      ctx.lineWidth = sel === "vasDeferens" ? 5.5 : 4.2;
      ctx.beginPath();
      ctx.moveTo(122, 274);
      ctx.bezierCurveTo(106, 188, 122, 92, 184, 92);
      ctx.bezierCurveTo(234, 92, 266, 126, 250, 166);
      ctx.lineTo(222, 198);
      ctx.stroke();

      // 7. Seminal Vesicle (Connected pouch behind Bladder)
      ctx.fillStyle = sel === "seminal" ? "rgba(251,191,36,0.42)" : "rgba(223,176,82,0.32)";
      ctx.strokeStyle = sel === "seminal" ? "#ffffff" : gold;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(268, 138, 14, 24, 0.45, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // 8. Prostate Gland (Walnut-shaped gland wrapped around upper Urethra)
      ctx.fillStyle = sel === "prostate" ? "rgba(251,191,36,0.42)" : "rgba(167,139,250,0.36)";
      ctx.strokeStyle = sel === "prostate" ? gold : "#c084fc";
      ctx.lineWidth = sel === "prostate" ? 3 : 2;
      ctx.beginPath();
      ctx.ellipse(218, 200, 24, 19, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // 9. Continuous Urethra running from Bladder -> Prostate -> Penis -> Glans Tip
      ctx.strokeStyle = sel === "urethra" ? gold : "#7dd3fc";
      ctx.lineWidth = 4.5;
      ctx.beginPath();
      ctx.moveTo(208, 180);
      ctx.quadraticCurveTo(222, 212, 238, 244);
      ctx.lineTo(354, 302);
      ctx.stroke();

      // 10. Animated Sperm Flowing Continuously Along the Connected Male Tract!
      for (let i = 0; i < 6; i++) {
        const t = (elapsed * 0.14 + i / 6) % 1;
        const p1 = samplePolyline(MALE_DUCT_PATH, t);
        const p2 = samplePolyline(MALE_DUCT_PATH, Math.min(0.999, t + 0.02));
        const ang = Math.atan2(p2[1] - p1[1], p2[0] - p1[0]);
        drawSpermSprite(ctx, p1[0], p1[1], ang, elapsed * 14 + i, 0.9, "#fef08a");
      }

      // Bottom Legend Strip
      ctx.fillStyle = isLight ? "rgba(15,23,42,0.05)" : "rgba(4,10,20,0.75)";
      ctx.strokeStyle = isLight ? "rgba(15,23,42,0.12)" : "rgba(104,184,230,0.22)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(16, 386, 388, 38, 10);
      ctx.fill();
      ctx.stroke();

      ctx.font = "700 10px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = textCol;
      ctx.textAlign = "center";
      ctx.fillText("♂ Testis → Epididymis → Vas Deferens → Prostate → Urethra → Glans", 210, 409);
      ctx.restore();
    }

    function drawFemaleAnatomyBase(ctx, isLight, highlightId) {
      const rose = isLight ? "#c24b65" : "#f472b6";
      const softRose = isLight ? "rgba(194,75,101,0.24)" : "rgba(244,114,182,0.26)";
      const cyan = isLight ? "#2b7eb3" : "#68b8e6";
      const gold = isLight ? "#b58428" : "#fbbf24";

      ctx.save();
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      // 1. Left & Right Fallopian Tubes (Oviducts curving symmetrically out from Uterus)
      ctx.strokeStyle = highlightId === "fallopian" ? gold : rose;
      ctx.lineWidth = highlightId === "fallopian" ? 13 : 11;
      ctx.beginPath();
      // Left tube
      ctx.moveTo(166, 138);
      ctx.bezierCurveTo(132, 84, 78, 86, 66, 144);
      // Right tube
      ctx.moveTo(254, 138);
      ctx.bezierCurveTo(288, 84, 342, 86, 354, 144);
      ctx.stroke();

      // Inner hollow canal of Fallopian tubes
      ctx.strokeStyle = isLight ? "#f1f5fa" : "#0b1422";
      ctx.lineWidth = 4.5;
      ctx.beginPath();
      ctx.moveTo(166, 138);
      ctx.bezierCurveTo(132, 84, 78, 86, 66, 144);
      ctx.moveTo(254, 138);
      ctx.bezierCurveTo(288, 84, 342, 86, 354, 144);
      ctx.stroke();

      // 2. Finger-like Fimbriae at both ends
      ctx.strokeStyle = highlightId === "fimbriae" ? gold : cyan;
      ctx.lineWidth = 2.4;
      [66, 354].forEach((fx) => {
        [-10, -4, 4, 10].forEach((off) => {
          ctx.beginPath();
          ctx.moveTo(fx, 142);
          ctx.lineTo(fx + off, 162);
          ctx.stroke();
        });
      });

      // 3. Left & Right Almond-Shaped Ovaries + Ovarian Ligaments
      ctx.strokeStyle = isLight ? "rgba(194,75,101,0.45)" : "rgba(244,114,182,0.45)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(126, 186);
      ctx.lineTo(162, 186);
      ctx.moveTo(294, 186);
      ctx.lineTo(258, 186);
      ctx.stroke();

      [104, 316].forEach((ox) => {
        ctx.fillStyle = highlightId === "ovary" ? "rgba(251,191,36,0.38)" : softRose;
        ctx.strokeStyle = highlightId === "ovary" ? gold : rose;
        ctx.lineWidth = highlightId === "ovary" ? 3 : 2.2;
        ctx.beginPath();
        ctx.ellipse(ox, 186, 22, 15, ox < 200 ? -0.25 : 0.25, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      });

      // 4. Pear-Shaped Muscular Uterus (Womb)
      ctx.fillStyle = softRose;
      ctx.strokeStyle = highlightId === "uterus" ? gold : rose;
      ctx.lineWidth = highlightId === "uterus" ? 3.2 : 2.4;
      ctx.beginPath();
      ctx.moveTo(210, 106);
      ctx.bezierCurveTo(268, 106, 272, 166, 244, 222);
      ctx.lineTo(232, 266);
      ctx.lineTo(188, 266);
      ctx.lineTo(176, 222);
      ctx.bezierCurveTo(148, 166, 152, 106, 210, 106);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // 5. Blood-Rich Inner Endometrium Cushion (Inverted Triangle Cavity)
      ctx.fillStyle =
        highlightId === "endometrium"
          ? "rgba(251,191,36,0.35)"
          : isLight ? "rgba(194,75,101,0.34)" : "rgba(224,99,125,0.36)";
      ctx.strokeStyle = highlightId === "endometrium" ? gold : "#e0637d";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(176, 144);
      ctx.quadraticCurveTo(210, 134, 244, 144);
      ctx.lineTo(220, 246);
      ctx.lineTo(200, 246);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // 6. Cervix (Narrow Muscular Neck)
      ctx.fillStyle = highlightId === "cervix" ? "rgba(251,191,36,0.35)" : "rgba(167,139,250,0.28)";
      ctx.strokeStyle = highlightId === "cervix" ? gold : "#c084fc";
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.roundRect(188, 250, 44, 26, 8);
      ctx.fill();
      ctx.stroke();

      // 7. Vagina (Elastic Muscular Canal)
      ctx.fillStyle = highlightId === "vagina" ? "rgba(251,191,36,0.26)" : isLight ? "rgba(43,126,179,0.16)" : "rgba(104,184,230,0.18)";
      ctx.strokeStyle = highlightId === "vagina" ? gold : cyan;
      ctx.lineWidth = highlightId === "vagina" ? 3 : 2.2;
      ctx.beginPath();
      ctx.moveTo(190, 276);
      ctx.lineTo(182, 366);
      ctx.lineTo(238, 366);
      ctx.lineTo(230, 276);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.restore();
    }

    function drawFemaleSystem(ctx, isLight) {
      const textCol = isLight ? "#162235" : "#e6effa";
      drawFemaleAnatomyBase(ctx, isLight, ui.selectedFemaleHotspot);

      // Live Ovulation: Egg released from Right Ovary -> swept by Fimbriae -> gliding down Fallopian Tube
      const eggPath = [
        [316, 186],
        [346, 152],
        [342, 108],
        [306, 94],
        [268, 114],
        [232, 154],
      ];
      const t = (elapsed * 0.16) % 1;
      const [ex, ey] = samplePolyline(eggPath, t);

      ctx.save();
      const eg = ctx.createRadialGradient(ex, ey, 2, ex, ey, 14);
      eg.addColorStop(0, "#fef08a");
      eg.addColorStop(1, "rgba(251,191,36,0)");
      ctx.fillStyle = eg;
      ctx.beginPath();
      ctx.arc(ex, ey, 14, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#fde047";
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.arc(ex, ey, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Bottom Legend Strip
      ctx.fillStyle = isLight ? "rgba(15,23,42,0.05)" : "rgba(4,10,20,0.75)";
      ctx.strokeStyle = isLight ? "rgba(15,23,42,0.12)" : "rgba(104,184,230,0.22)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(16, 386, 388, 38, 10);
      ctx.fill();
      ctx.stroke();

      ctx.font = "700 10px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = textCol;
      ctx.textAlign = "center";
      ctx.fillText("♀ Vagina → Cervix → Uterus (Endometrium) → Fallopian Tube ← Ovary", 210, 409);
      ctx.restore();
    }

    function drawFertilizationSystem(ctx, isLight, rd) {
      const textCol = isLight ? "#162235" : "#e6effa";
      drawFemaleAnatomyBase(ctx, isLight, "");

      const p = ui.pathPct / 100; // 0..1
      const isFused = p >= 0.82;

      // Highlight glowing sperm pathway trail up to current position
      ctx.save();
      ctx.strokeStyle = "rgba(125,211,252,0.45)";
      ctx.lineWidth = 3;
      ctx.setLineDash([5, 5]);
      drawSmoothPolyline(ctx, SPERM_SWIM_PATH);
      ctx.stroke();
      ctx.setLineDash([]);

      // Waiting Ovulated Egg in Right Fallopian Tube Ampulla (306, 94)
      const eggX = isFused ? 306 - ((p - 0.82) / 0.18) * 56 : 306;
      const eggY = isFused ? 94 + ((p - 0.82) / 0.18) * 44 : 94;

      const eg = ctx.createRadialGradient(eggX, eggY, 2, eggX, eggY, isFused ? 22 : 16);
      eg.addColorStop(0, isFused ? "rgba(86,201,155,0.95)" : "rgba(251,191,36,0.92)");
      eg.addColorStop(1, "rgba(251,191,36,0)");
      ctx.fillStyle = eg;
      ctx.beginPath();
      ctx.arc(eggX, eggY, isFused ? 22 : 16, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = isFused ? "#56c99b" : "#fde047";
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.arc(eggX, eggY, isFused ? 9.5 : 7.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      if (isFused) {
        ctx.font = "800 8.5px 'Plus Jakarta Sans', sans-serif";
        ctx.fillStyle = "#040811";
        ctx.textAlign = "center";
        ctx.fillText("46", eggX, eggY + 3);
      }

      // Swimming Sperm Wave Following the Path (Vagina -> Cervix -> Uterus -> Fallopian Tube)
      if (!isFused) {
        const swimT = Math.min(0.98, p / 0.82);
        for (let i = 0; i < 7; i++) {
          const offset = i * 0.045;
          const st = Math.max(0.01, swimT - offset);
          const pos1 = samplePolyline(SPERM_SWIM_PATH, st);
          const pos2 = samplePolyline(SPERM_SWIM_PATH, Math.min(0.999, st + 0.02));
          const ang = Math.atan2(pos2[1] - pos1[1], pos2[0] - pos1[0]);
          const spread = (i % 2 === 0 ? 1 : -1) * (i === 0 ? 0 : 4.5);
          drawSpermSprite(
            ctx,
            pos1[0] + spread,
            pos1[1],
            ang,
            elapsed * 16 + i * 1.3,
            i === 0 ? 1.05 : 0.82,
            i === 0 ? "#ffffff" : "#7dd3fc"
          );
        }
      }

      // Bottom Status HUD
      ctx.fillStyle = isLight ? "rgba(15,23,42,0.05)" : "rgba(4,10,20,0.78)";
      ctx.strokeStyle = isLight ? "rgba(15,23,42,0.12)" : "rgba(104,184,230,0.22)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(16, 386, 388, 38, 10);
      ctx.fill();
      ctx.stroke();

      const msg =
        p < 0.28
          ? rd.pathPills.entry
          : p < 0.58
          ? rd.pathPills.uterus
          : p < 0.82
          ? rd.pathPills.tube
          : rd.pathPills.zygote;

      ctx.font = "700 10.5px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = isFused ? "#56c99b" : textCol;
      ctx.textAlign = "center";
      ctx.fillText(`🧬 ${msg}`, 210, 409);
      ctx.restore();
    }

    function frame(now) {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      if (!ui.paused) {
        elapsed += dt;
        if (ui.view === "fert" && ui.autoPath) {
          ui.pathPct = (ui.pathPct + dt * 11.5) % 100;
          if (now - lastTick > 110) {
            lastTick = now;
            updatePathTelemetry();
          }
        }
      }

      const isLight = BL.getState().theme === "light";
      const rd = getRD();

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform((width / 420) * dpr, 0, 0, (height / 440) * dpr, 0, 0);

      if (ui.view === "male") {
        drawMaleSystem(ctx, isLight);
      } else if (ui.view === "female") {
        drawFemaleSystem(ctx, isLight);
      } else {
        drawFertilizationSystem(ctx, isLight, rd);
      }

      requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
    void ro;
  }

  // =========================================================
  // CANVAS 2: 60 FPS MICROSCOPIC SPERM & EGG FUSION (460x300)
  // =========================================================
  function startFusionCanvas() {
    const canvas = document.getElementById("fusion-canvas");
    const box = document.getElementById("fusion-canvas-box");
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

      if (!ui.ffPaused) {
        elapsed += dt;
        ui.fusionProgress = (ui.fusionProgress + dt * 0.14) % 1;
      }

      const p = ui.fusionProgress; // 0..0.45 approach, 0.45..0.72 entry, 0.72..1.0 fused zygote
      const isLight = BL.getState().theme === "light";
      const rd = getRD();
      const sel = ui.selectedFusionPart;
      const gold = isLight ? "#b58428" : "#fbbf24";
      const rose = isLight ? "#c24b65" : "#f472b6";
      const cyan = isLight ? "#2b7eb3" : "#7dd3fc";
      const mint = "#56c99b";
      const textCol = isLight ? "#162235" : "#e6effa";

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform((width / 460) * dpr, 0, 0, (height / 300) * dpr, 0, 0);

      const eggCx = 310;
      const eggCy = 132;
      const isFused = p >= 0.72;

      // 1. Large Ovum (Egg Cell) + Zona Pellucida Outer Coat
      ctx.save();
      // Cortical hardened glow ring once fused
      const zRing = ctx.createRadialGradient(eggCx, eggCy, 54, eggCx, eggCy, 86);
      zRing.addColorStop(0, isFused ? "rgba(86,201,155,0.45)" : "rgba(244,114,182,0.28)");
      zRing.addColorStop(1, "rgba(244,114,182,0)");
      ctx.fillStyle = zRing;
      ctx.beginPath();
      ctx.arc(eggCx, eggCy, 86, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = isLight ? "rgba(244,114,182,0.18)" : "rgba(244,114,182,0.20)";
      ctx.strokeStyle = sel === "ovum" ? gold : isFused ? mint : rose;
      ctx.lineWidth = isFused ? 4 : 3;
      ctx.beginPath();
      ctx.arc(eggCx, eggCy, 68, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Female Nucleus (23 chromosomes) -> merges into Diploid 46 Zygote Nucleus
      const nucR = isFused ? 24 + Math.sin(elapsed * 5) * 2 : 18;
      ctx.fillStyle = isFused ? "rgba(86,201,155,0.75)" : "rgba(244,114,182,0.65)";
      ctx.strokeStyle = sel === "zygoteFusion" ? gold : "#ffffff";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(eggCx + (isFused ? 0 : 8), eggCy, nucR, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.font = "800 10.5px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.fillText(isFused ? "2n = 46" : "n = 23", eggCx + (isFused ? 0 : 8), eggCy + 4);
      ctx.restore();

      // 2. Detailed Winning Sperm Swimming In From Left
      if (!isFused) {
        const spermX = p < 0.45 ? 72 + (p / 0.45) * 164 : 236 + ((p - 0.45) / 0.27) * 66;
        const spermY = eggCy + Math.sin(elapsed * 6) * (p < 0.45 ? 4 : 1);

        ctx.save();
        // Flagellum Tail (stays outside once head penetrates!)
        if (p < 0.56) {
          ctx.strokeStyle = sel === "spermTail" ? gold : cyan;
          ctx.lineWidth = sel === "spermTail" ? 3.5 : 2.5;
          ctx.lineCap = "round";
          ctx.beginPath();
          ctx.moveTo(spermX - 24, spermY);
          for (let i = 1; i <= 10; i++) {
            ctx.lineTo(spermX - 24 - i * 6.5, spermY + Math.sin(elapsed * 16 + i * 0.9) * (2 + i * 0.7));
          }
          ctx.stroke();

          // Mitochondria Middle Piece
          ctx.fillStyle = sel === "spermTail" ? gold : "#dfb052";
          ctx.beginPath();
          ctx.roundRect(spermX - 26, spermY - 4.5, 13, 9, 4);
          ctx.fill();
        }

        // Sperm Head (n=23 Nucleus) + Acrosome Cap
        ctx.fillStyle = sel === "spermHead" ? gold : cyan;
        ctx.beginPath();
        ctx.ellipse(spermX - 4, spermY, 12, 7.5, 0, 0, Math.PI * 2);
        ctx.fill();

        // Acrosome Enzyme Tip
        ctx.fillStyle = "#fef08a";
        ctx.beginPath();
        ctx.arc(spermX + 6, spermY, 4.5, -Math.PI / 2, Math.PI / 2);
        ctx.fill();

        ctx.font = "800 8px 'Plus Jakarta Sans', sans-serif";
        ctx.fillStyle = "#040811";
        ctx.textAlign = "center";
        ctx.fillText("23", spermX - 4, spermY + 3);
        ctx.restore();
      }

      // Secondary competing sperm blocked outside once fertilized
      [
        [152, 68, 0.35],
        [168, 198, -0.35],
      ].forEach(([sx, sy, ang], idx) => {
        const wobble = Math.sin(elapsed * 4 + idx) * 6;
        drawSpermSprite(ctx, sx + wobble, sy, ang, elapsed * 14 + idx * 2, 1.0, "rgba(125,211,252,0.55)");
      });

      // Bottom HUD
      const hudIdx = p < 0.45 ? 0 : p < 0.72 ? 1 : 2;
      ctx.fillStyle = isLight ? "rgba(15,23,42,0.05)" : "rgba(4,10,20,0.78)";
      ctx.strokeStyle = isLight ? "rgba(15,23,42,0.12)" : "rgba(104,184,230,0.22)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(14, 248, 432, 38, 9);
      ctx.fill();
      ctx.stroke();

      ctx.font = "700 10px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = hudIdx === 2 ? mint : textCol;
      ctx.textAlign = "center";
      ctx.fillText(rd.ffSec.fusionHud[hudIdx], 230, 271);

      requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
    void ro;
  }

  // =========================================================
  // CANVAS 3: 60 FPS 4-STAGE FOETUS FORMATION (460x300)
  // =========================================================
  function startFoetusCanvas() {
    const canvas = document.getElementById("foetus-canvas");
    const box = document.getElementById("foetus-canvas-box");
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

      if (!ui.ffPaused && ui.isFlipped) {
        elapsed += dt;
        ui.foetusAutoTimer += dt;
        if (ui.foetusAutoTimer > 4.5) {
          ui.foetusAutoTimer = 0;
          ui.foetusStage = (ui.foetusStage + 1) % 4;
          renderFlipDetails();
        }
      }

      const isLight = BL.getState().theme === "light";
      const rd = getRD();
      const stage = ui.foetusStage; // 0..3
      const pulse = (Math.sin(elapsed * 4.2) + 1) / 2;
      const rose = isLight ? "#c24b65" : "#f472b6";
      const cyan = isLight ? "#2b7eb3" : "#7dd3fc";
      const mint = "#56c99b";
      const textCol = isLight ? "#162235" : "#e6effa";

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform((width / 460) * dpr, 0, 0, (height / 300) * dpr, 0, 0);

      // Stage Progress Bar (Top)
      for (let i = 0; i < 4; i++) {
        ctx.fillStyle = i <= stage ? rose : "rgba(148,163,184,0.3)";
        ctx.beginPath();
        ctx.roundRect(142 + i * 46, 22, 36, 6, 3);
        ctx.fill();
      }

      if (stage === 0) {
        // STAGE 1: SINGLE-CELL DIPLOID ZYGOTE (46 Chromosomes)
        const g = ctx.createRadialGradient(230, 134, 8, 230, 134, 62 + pulse * 6);
        g.addColorStop(0, "rgba(86,201,155,0.45)");
        g.addColorStop(1, "rgba(86,201,155,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(230, 134, 68, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(86,201,155,0.22)";
        ctx.strokeStyle = mint;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(230, 134, 48, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = mint;
        ctx.beginPath();
        ctx.arc(230, 134, 18, 0, Math.PI * 2);
        ctx.fill();

        ctx.font = "800 11px 'Plus Jakarta Sans', sans-serif";
        ctx.fillStyle = "#040811";
        ctx.textAlign = "center";
        ctx.fillText("2n = 46", 230, 138);
      } else if (stage === 1) {
        // STAGE 2: RAPID CLEAVAGE & BLASTOCYST (Cluster of Dividing Cells)
        ctx.strokeStyle = cyan;
        ctx.lineWidth = 2.2;
        ctx.setLineDash([5, 4]);
        ctx.beginPath();
        ctx.arc(230, 134, 58, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);

        const offsets = [
          [0, 0], [-24, -18], [24, -18], [-26, 18], [26, 18],
          [0, -34], [0, 34], [-38, 0], [38, 0],
        ];
        offsets.forEach(([ox, oy], idx) => {
          const b = Math.sin(elapsed * 4 + idx) * 2;
          ctx.fillStyle = idx % 2 === 0 ? "rgba(104,184,230,0.45)" : "rgba(244,114,182,0.45)";
          ctx.strokeStyle = "#ffffff";
          ctx.lineWidth = 1.4;
          ctx.beginPath();
          ctx.arc(230 + ox + b, 134 + oy, 14, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        });
      } else if (stage === 2) {
        // STAGE 3: IMPLANTATION, EMBRYO + DEVELOPING PLACENTA + HEARTBEAT
        // Uterine Endometrium Wall (Left Side)
        ctx.fillStyle = "rgba(224,99,125,0.28)";
        ctx.strokeStyle = rose;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.roundRect(42, 54, 72, 166, 16);
        ctx.fill();
        ctx.stroke();

        // Placenta Disc embedded in Uterine Wall
        ctx.fillStyle = "rgba(224,99,125,0.68)";
        ctx.beginPath();
        ctx.ellipse(116, 134, 16, 44, 0, 0, Math.PI * 2);
        ctx.fill();

        // Umbilical Cord linking Placenta -> Embryo
        ctx.strokeStyle = "#fde047";
        ctx.lineWidth = 5;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(126, 134);
        ctx.quadraticCurveTo(176, 152, 224, 138);
        ctx.stroke();

        // C-Shaped Embryo
        ctx.fillStyle = "rgba(244,114,182,0.42)";
        ctx.strokeStyle = rose;
        ctx.lineWidth = 2.6;
        ctx.beginPath();
        ctx.arc(256, 114, 24, 0, Math.PI * 2); // Embryo head
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.ellipse(252, 156, 20, 28, -0.35, 0, Math.PI * 2); // Embryo trunk
        ctx.fill();
        ctx.stroke();

        // Tiny Beating Embryo Heart!
        ctx.fillStyle = "#e0637d";
        ctx.beginPath();
        ctx.arc(244, 148, 5.5 + pulse * 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.font = "700 9.5px 'Plus Jakarta Sans', sans-serif";
        ctx.fillStyle = textCol;
        ctx.textAlign = "center";
        ctx.fillText("PLACENTA", 116, 80);
        ctx.fillText("EMBRYO + HEARTBEAT", 268, 204);
      } else {
        // STAGE 4: FULLY FORMED FOETUS IN AMNIOTIC SAC + PLACENTA NUTRIENT FLOW
        // Amniotic Sac filled with warm Amniotic Fluid
        const sacGrad = ctx.createRadialGradient(256, 132, 14, 256, 132, 86);
        sacGrad.addColorStop(0, "rgba(104,184,230,0.26)");
        sacGrad.addColorStop(1, "rgba(104,184,230,0.08)");
        ctx.fillStyle = sacGrad;
        ctx.strokeStyle = cyan;
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        ctx.ellipse(256, 132, 92, 76, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Mother's Placenta Disc (Left side of sac)
        ctx.fillStyle = "rgba(224,99,125,0.72)";
        ctx.strokeStyle = rose;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(164, 132, 16, 48, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Flexible Umbilical Cord
        ctx.strokeStyle = "#fde047";
        ctx.lineWidth = 5.5;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(174, 132);
        ctx.bezierCurveTo(202, 168, 224, 158, 246, 144);
        ctx.stroke();

        // Flowing O2 & Glucose Nutrient Dots along Umbilical Cord
        for (let i = 0; i < 4; i++) {
          const nt = (elapsed * 0.65 + i * 0.25) % 1;
          const nx = 176 + nt * 70;
          const ny = 134 + Math.sin(nt * Math.PI) * 24;
          ctx.fillStyle = mint;
          ctx.beginPath();
          ctx.arc(nx, ny, 3.2, 0, Math.PI * 2);
          ctx.fill();
        }

        // Curled Foetus Silhouette (Head, Torso, Tucked Arms & Legs)
        const floatY = Math.sin(elapsed * 2) * 3;
        ctx.save();
        ctx.translate(0, floatY);
        ctx.fillStyle = isLight ? "rgba(244,114,182,0.34)" : "rgba(253,164,175,0.36)";
        ctx.strokeStyle = rose;
        ctx.lineWidth = 2.4;
        // Head
        ctx.beginPath();
        ctx.arc(266, 102, 23, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        // Curved Back & Body
        ctx.beginPath();
        ctx.ellipse(274, 148, 24, 34, 0.22, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        // Tucked Arm & Leg
        ctx.lineWidth = 7;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(260, 128);
        ctx.lineTo(240, 134);
        ctx.moveTo(262, 166);
        ctx.quadraticCurveTo(238, 174, 244, 154);
        ctx.stroke();
        ctx.restore();

        ctx.font = "700 9.5px 'Plus Jakarta Sans', sans-serif";
        ctx.fillStyle = textCol;
        ctx.textAlign = "center";
        ctx.fillText("PLACENTA", 122, 136);
        ctx.fillText("AMNIOTIC FLUID", 268, 224);
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
      ctx.fillText(rd.ffSec.foetusHud[stage], 230, 271);

      requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
    void ro;
  }

  // =========================================================
  // BOOTSTRAP & EVENT WIRING
  // =========================================================
  document.addEventListener("DOMContentLoaded", () => {
    // Match initial view to user's selected Male/Female body on index.html
    ui.view = BL.getState().sex === "female" ? "female" : "male";

    const btnMale = document.getElementById("btn-view-male");
    const btnFemale = document.getElementById("btn-view-female");
    const btnFert = document.getElementById("btn-view-fert");
    if (btnMale) {
      btnMale.addEventListener("click", () => {
        ui.view = "male";
        syncRepUI();
      });
    }
    if (btnFemale) {
      btnFemale.addEventListener("click", () => {
        ui.view = "female";
        syncRepUI();
      });
    }
    if (btnFert) {
      btnFert.addEventListener("click", () => {
        ui.view = "fert";
        ui.autoPath = true;
        syncRepUI();
      });
    }

    const pBtn = document.getElementById("btn-rep-pause");
    if (pBtn) {
      pBtn.addEventListener("click", () => {
        ui.paused = !ui.paused;
        syncRepUI();
      });
    }

    const pinsBtn = document.getElementById("btn-rep-pins");
    if (pinsBtn) {
      pinsBtn.addEventListener("click", () => {
        ui.showPins = !ui.showPins;
        syncRepUI();
      });
    }

    const slider = document.getElementById("path-slider");
    if (slider) {
      slider.addEventListener("input", (e) => {
        ui.view = "fert";
        ui.autoPath = false;
        ui.pathPct = Math.max(0, Math.min(100, Number(e.target.value) || 0));
        syncRepUI();
      });
    }

    document.querySelectorAll("[data-path]").forEach((b) => {
      b.addEventListener("click", () => {
        ui.view = "fert";
        ui.autoPath = false;
        ui.pathPct = Number(b.getAttribute("data-path")) || 10;
        if (ui.pathPct < 25) ui.selectedFertHotspot = "entry";
        else if (ui.pathPct < 55) ui.selectedFertHotspot = "uterusSwim";
        else if (ui.pathPct < 82) ui.selectedFertHotspot = "meet";
        else ui.selectedFertHotspot = "fusion";
        syncRepUI();
      });
    });

    document.querySelectorAll("#rep-reader-panel .tab-btn").forEach((b) => {
      b.addEventListener("click", () => {
        ui.repTab = b.getAttribute("data-rep-tab");
        renderRepReader();
      });
    });

    // Section 2: 3D Flip Card Controls
    const toggleFlip = (force) => {
      ui.isFlipped = typeof force === "boolean" ? force : !ui.isFlipped;
      if (ui.isFlipped) ui.foetusAutoTimer = 0;
      syncRepUI();
    };
    const btnFlipMain = document.getElementById("btn-rep-flip-main");
    const btnFlipFoetus = document.getElementById("btn-flip-to-foetus");
    const btnFlipFusion = document.getElementById("btn-flip-to-fusion");
    if (btnFlipMain) btnFlipMain.addEventListener("click", () => toggleFlip());
    if (btnFlipFoetus) btnFlipFoetus.addEventListener("click", () => toggleFlip(true));
    if (btnFlipFusion) btnFlipFusion.addEventListener("click", () => toggleFlip(false));

    const ffPBtn = document.getElementById("btn-ff-pause");
    if (ffPBtn) {
      ffPBtn.addEventListener("click", () => {
        ui.ffPaused = !ui.ffPaused;
        syncRepUI();
      });
    }

    const btnTriggerFusion = document.getElementById("btn-trigger-fusion");
    if (btnTriggerFusion) {
      btnTriggerFusion.addEventListener("click", () => {
        ui.ffPaused = false;
        ui.fusionProgress = 0;
        ui.selectedFusionPart = "zygoteFusion";
        renderFlipDetails();
      });
    }

    const btnNextFoetus = document.getElementById("btn-next-foetus-stage");
    if (btnNextFoetus) {
      btnNextFoetus.addEventListener("click", () => {
        ui.foetusStage = (ui.foetusStage + 1) % 4;
        ui.foetusAutoTimer = 0;
        renderFlipDetails();
      });
    }

    document.querySelectorAll("#ff-reader-panel .tab-btn").forEach((b) => {
      b.addEventListener("click", () => {
        ui.ffTab = b.getAttribute("data-ff-tab");
        renderFFReader();
      });
    });

    syncRepUI();
    BL.subscribe(syncRepUI);

    startRepCanvas();
    startFusionCanvas();
    startFoetusCanvas();
  });
})();