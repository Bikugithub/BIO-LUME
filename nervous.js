(function () {
  const BL = window.BioLume;
  if (!BL) return;

  // =========================================================
  // TRILINGUAL CLASS 9–10 NERVOUS SYSTEM DICTIONARY (EN/HI/BN)
  // =========================================================
  const NERV_DICT = {
    en: {
      chapterBadge: "Chapter 03 • Class 9–10 Lab",
      title: "Human Brain & Nervous System — Live Lab",
      subtitle:
        "Tap any brain lobe to inspect its functions, or switch to the live Reflex Arc pathway",
      views: {
        brain: "Brain & Lobes",
        reflex: "Reflex Arc Live",
      },
      toggles: {
        pause: "Pause",
        play: "Resume",
        pins: "Hotspot Pins",
      },
      metrics: {
        speed: "Impulse Speed",
        freq: "Brain Wave",
        mode: "Control Center",
        lobe: "Active Region",
        forebrain: "Forebrain",
        hindbrain: "Hindbrain",
        spinalCenter: "Spinal Cord",
      },
      freqControl: "Neural Activity & Impulse Rate",
      presets: [
        { level: 1, label: "Deep Sleep", badge: "Delta • 4 Hz", hz: 4, speed: 60 },
        { level: 2, label: "Study Focus", badge: "Beta • 18 Hz", hz: 18, speed: 100 },
        { level: 3, label: "High Alert", badge: "Gamma • 32 Hz", hz: 32, speed: 115 },
        { level: 4, label: "Reflex Burst", badge: "Peak • 45 Hz", hz: 45, speed: 120 },
      ],
      tabs: {
        inspect: "Brain & Lobes",
        lesson: "Class 9–10 Lesson",
        quiz: "Quick Check",
      },
      selectPrompt:
        "Tap any glowing pin on the brain or reflex diagram to explore how that region controls your body.",
      brainHotspots: {
        frontal: {
          name: "Frontal Lobe",
          en: "Frontal Lobe",
          division: "Forebrain • Cerebrum",
          summary:
            "The 'CEO' of your brain located right behind the forehead. It controls logical thinking, math problem-solving, planning, speech production (Broca's area), emotions, and voluntary body movements.",
          keyFact:
            "Real-life example: Solving an exam equation, deciding what to say, or choosing to lift your hand all start in the Frontal Lobe.",
        },
        parietal: {
          name: "Parietal Lobe",
          en: "Parietal Lobe",
          division: "Forebrain • Cerebrum",
          summary:
            "The brain's sensory integration center at the upper-back crown. It processes touch, temperature, pain, pressure, and spatial awareness (knowing where your limbs are without looking).",
          keyFact:
            "Real-life example: Feeling whether a cup of tea is hot or cold, or catching a ball in mid-air.",
        },
        temporal: {
          name: "Temporal Lobe",
          en: "Temporal Lobe",
          division: "Forebrain • Cerebrum",
          summary:
            "Located near the ears on both sides. It decodes sound, music, and spoken language (Wernicke's area) and houses the Hippocampus for forming long-term memories.",
          keyFact:
            "Real-life example: Recognizing your friend's voice on the phone and remembering yesterday's biology lesson.",
        },
        occipital: {
          name: "Occipital Lobe",
          en: "Occipital Lobe",
          division: "Forebrain • Cerebrum",
          summary:
            "The visual processing headquarters at the very back of the head. It turns raw light signals from the retina into sharp images, colors, shapes, and motion.",
          keyFact:
            "Real-life example: Reading these words on your screen and spotting a moving car across the road.",
        },
        cerebellum: {
          name: "Cerebellum",
          en: "Cerebellum (Little Brain)",
          division: "Hindbrain",
          summary:
            "Tucked below the occipital lobe with finely folded ridges. It coordinates smooth voluntary muscle movements, posture, and physical balance.",
          keyFact:
            "Real-life example: Riding a bicycle, walking in a straight line, or writing neatly without shaky hands.",
        },
        brainstem: {
          name: "Brainstem & Medulla",
          en: "Pons & Medulla Oblongata",
          division: "Hindbrain",
          summary:
            "Connects the brain to the spinal cord. The Medulla Oblongata runs automatic life-support functions you never have to think about—heartbeat, breathing rate, blood pressure, swallowing, and sneezing.",
          keyFact:
            "Even while you are fast asleep, the Medulla keeps your heart beating and lungs breathing nonstop.",
        },
        hypothalamus: {
          name: "Hypothalamus",
          en: "Hypothalamus",
          division: "Forebrain • Diencephalon",
          summary:
            "A tiny almond-sized control hub deep inside the brain that maintains homeostasis—body temperature, hunger, thirst, sleep cycles, and links the nervous system to the Pituitary gland.",
          keyFact:
            "Makes you sweat when hot, shiver when cold, and feel hungry when blood sugar drops.",
        },
      },
      reflexHotspots: {
        receptor: {
          name: "1. Stimulus & Receptor",
          en: "Thermoreceptor (Skin)",
          division: "Reflex Arc • Step 1",
          summary:
            "Specialized nerve endings in the skin instantly detect a sudden dangerous stimulus (like touching a hot flame or sharp pin) and convert it into an electrical nerve impulse.",
          keyFact: "Speed matters: receptors fire within milliseconds to prevent tissue burns.",
        },
        sensory: {
          name: "2. Sensory Neuron",
          en: "Afferent Neuron",
          division: "Reflex Arc • Step 2",
          summary:
            "Carries the urgent electrical message from the skin receptor inward through the dorsal root straight into the spinal cord.",
          keyFact: "Always travels ONE WAY: from sense organs toward the CNS (Spinal Cord/Brain).",
        },
        spinal: {
          name: "3. Spinal Cord (Relay)",
          en: "Interneuron / Relay Neuron",
          division: "Reflex Arc • Step 3",
          summary:
            "Inside the spinal cord's H-shaped gray matter, a Relay Neuron connects the sensory neuron directly to a motor neuron—making an instant protective decision WITHOUT waiting for the brain to think!",
          keyFact: "A separate copy of the signal travels up to the brain afterward so you feel the pain.",
        },
        motor: {
          name: "4. Motor Neuron",
          en: "Efferent Neuron",
          division: "Reflex Arc • Step 4",
          summary:
            "Carries the rapid command signal outward from the spinal cord through the ventral root directly to the arm muscle.",
          keyFact: "Motor neurons always carry orders AWAY from the CNS to muscles or glands.",
        },
        effector: {
          name: "5. Effector Muscle",
          en: "Biceps / Effector",
          division: "Reflex Arc • Step 5",
          summary:
            "The arm muscle contracts immediately upon receiving the motor impulse, jerking your hand away from danger in under 0.1 seconds.",
          keyFact: "Pathway formula for exams: Stimulus → Receptor → Sensory Neuron → Spinal Cord → Motor Neuron → Effector → Response.",
        },
      },
      brainLesson: {
        heading: "Class 9–10 Lesson Plan: Human Nervous System & Brain",
        sections: [
          {
            title: "1. Organization of the Nervous System",
            html: `<p>The nervous system is the body's high-speed electrical command network divided into two main parts:</p>
            <p style="margin-top:6px">• <strong>Central Nervous System (CNS):</strong> Brain + Spinal Cord (processes information and makes decisions).<br/>
            • <strong>Peripheral Nervous System (PNS):</strong> 12 pairs of Cranial Nerves (from brain) + 31 pairs of Spinal Nerves (from spinal cord) connecting the CNS to every organ.</p>`,
          },
          {
            title: "2. Three Major Regions of the Human Brain",
            html: `<p>• <strong>Forebrain:</strong> Largest part. Includes the <strong>Cerebrum</strong> (4 Lobes: Frontal, Parietal, Temporal, Occipital for thinking, memory, vision, hearing, touch) and <strong>Hypothalamus</strong> (temperature, hunger, thirst).<br/>
            • <strong>Midbrain:</strong> Relays visual and auditory reflex signals (like turning your head toward a sudden loud sound).<br/>
            • <strong>Hindbrain:</strong> Includes <strong>Cerebellum</strong> (balance &amp; posture), <strong>Pons</strong> (breathing rhythm bridge), and <strong>Medulla Oblongata</strong> (involuntary heartbeat, breathing, blood pressure).</p>`,
          },
          {
            title: "3. Reflex Action vs. Voluntary Action",
            html: `<p><strong>Reflex Action:</strong> Automatic, rapid, involuntary response controlled by the <strong>Spinal Cord</strong> to protect the body (e.g., pulling your hand off a hot pan, blinking).</p>
            <p style="margin-top:6px"><strong>Voluntary Action:</strong> Conscious, planned action controlled by the <strong>Cerebrum</strong> (e.g., writing notes, kicking a football).</p>
            <div class="detail-fact" style="margin-top:8px"><strong>Reflex Arc Formula:</strong><br/>Stimulus → Receptor → Sensory Neuron → Relay Neuron (Spinal Cord) → Motor Neuron → Effector (Muscle) → Response</div>`,
          },
          {
            title: "4. How the Brain & Spinal Cord Are Protected",
            html: `<p>• <strong>Bony Armor:</strong> Brain sits inside the hard skull (<strong>Cranium</strong>); spinal cord runs inside the <strong>Vertebral Column</strong>.<br/>
            • <strong>Three Meninges:</strong> Protective membranes wrapping the brain and spinal cord.<br/>
            • <strong>Cerebrospinal Fluid (CSF):</strong> Clear fluid between the membranes that acts as a liquid shock absorber against bumps and jolts.</p>`,
          },
        ],
      },
      brainQuiz: {
        title: "Brain & Reflex Quick Check",
        correctMsg: "Spot on! Clear scientific concept.",
        wrongMsg: "Not quite — read the explanation below.",
        nextBtn: "Next Question",
        restartBtn: "Restart Quiz",
        scoreLabel: "Score",
        questions: [
          {
            q: "Which part of the brain controls balance, posture, and smooth riding of a bicycle?",
            options: ["Medulla Oblongata", "Cerebellum", "Occipital Lobe", "Hypothalamus"],
            answer: 1,
            explain: "The Cerebellum (hindbrain) coordinates precision voluntary movements, posture, and physical equilibrium.",
          },
          {
            q: "Which brain lobe processes vision and images received from the eyes?",
            options: ["Frontal Lobe", "Temporal Lobe", "Occipital Lobe", "Parietal Lobe"],
            answer: 2,
            explain: "The Occipital Lobe at the back of the cerebrum is the primary visual cortex.",
          },
          {
            q: "Involuntary life-support activities like heartbeat, breathing, and blood pressure are regulated by the:",
            options: ["Medulla Oblongata", "Cerebellum", "Frontal Lobe", "Spinal Nerves"],
            answer: 0,
            explain: "The Medulla Oblongata in the brainstem controls vital involuntary actions continuously.",
          },
          {
            q: "In a reflex arc, which structure connects the sensory neuron directly to the motor neuron for an instant reaction?",
            options: ["Cerebrum", "Relay Neuron in the Spinal Cord", "Pituitary Gland", "Hypothalamus"],
            answer: 1,
            explain: "The spinal cord's relay neuron creates a short-circuit reflex arc so you pull away before the brain even finishes analyzing the pain.",
          },
          {
            q: "What is the shock-absorbing liquid that cushions the brain inside the cranium?",
            options: ["Plasma", "Lymph", "Cerebrospinal Fluid (CSF)", "Bile"],
            answer: 2,
            explain: "Cerebrospinal Fluid (CSF) circulates within the meninges to cushion and nourish the CNS.",
          },
        ],
      },

      // =========================================================
      // SECTION 2: 3D FLIPPABLE NEURON <-> SYNAPSE LAB
      // =========================================================
      neuronSec: {
        title: "Neuron & Synapse — 3D Flippable Lab",
        subtitle:
          "Front side: Neuron parts & electrical impulse • Flip the card to see the chemical Synapse mechanism",
        flipMain: "Flip Card: Neuron ↔ Synapse",
        frontBadge: "FRONT • NEURON STRUCTURE & IMPULSE",
        flipToSynapse: "Flip to Synapse Mechanism",
        fireImpulse: "Fire Nerve Impulse (Send Signal!)",
        neuronPrompt:
          "Tap any neuron part below to highlight it on the animation and learn its role:",
        backBadge: "BACK • SYNAPSE MECHANISM (CHEMICAL BRIDGE)",
        flipToNeuron: "Flip Back to Neuron Parts",
        fireSynapse: "Trigger Synaptic Signal (Release Chemicals!)",
        synapsePrompt:
          "Follow the 4 easy steps of how a signal crosses the microscopic gap between two neurons:",
        lessonTab: "Neuron & Synapse Lesson (Class 9–10)",
        quizTab: "Neuron & Synapse Quiz",
        analogyLabel: "Easy Analogy",
        canvasNeuronHud: "ELECTRICAL IMPULSE: Dendrites → Soma → Axon (Saltatory Jump) → Terminals",
        canvasSynapseStepHud: [
          "STEP 1: Electrical impulse arrives at Presynaptic Axon Terminal",
          "STEP 2: Vesicles fuse with membrane & release Neurotransmitters",
          "STEP 3: Neurotransmitters diffuse across the Synaptic Cleft gap",
          "STEP 4: Chemicals bind to Receptors → New electrical impulse fires!",
        ],
      },
      neuronParts: {
        dendrite: {
          name: "Dendrites",
          en: "Signal Receivers",
          role: "Branching Input Fibers",
          analogy: "Like TV antennas catching incoming signals from neighboring neurons or sense organs.",
          summary:
            "Short, tree-like extensions around the cell body. Their tips detect chemical signals at a synapse and convert them into an electrical impulse traveling toward the cell body.",
        },
        soma: {
          name: "Cell Body (Soma)",
          en: "Cyton / Soma",
          role: "Metabolic Control Center",
          analogy: "Like a computer's motherboard that collects all incoming inputs and decides whether to fire.",
          summary:
            "The star-shaped main body containing cytoplasm, Nissl's granules (for protein synthesis), and mitochondria to power continuous electrical signaling.",
        },
        nucleus: {
          name: "Nucleus",
          en: "Genetic Core",
          role: "DNA Command Center",
          analogy: "Like the operating system storing instructions to maintain and repair the neuron.",
          summary:
            "Large central sphere inside the cell body carrying DNA. Mature neurons do not divide (lack functional centrioles), making brain and spinal protection vital.",
        },
        axon: {
          name: "Axon",
          en: "Nerve Fiber",
          role: "Long-Distance Output Cable",
          analogy: "Like a high-speed fiber-optic wire carrying electricity from your spine all the way to your toe.",
          summary:
            "A single long cylindrical fiber (up to 1 meter long!) that carries the electrical action potential strictly AWAY from the cell body toward the axon terminals.",
        },
        myelin: {
          name: "Myelin Sheath",
          en: "Insulating Coat",
          role: "Schwann Cell Fatty Insulation",
          analogy: "Like the plastic rubber coating around a copper electric wire that prevents short-circuits and boosts speed.",
          summary:
            "A glistening white lipid layer wrapped around the axon by Schwann cells. It insulates the axon so signals travel up to 120 m/s instead of ~2 m/s.",
        },
        ranvier: {
          name: "Nodes of Ranvier",
          en: "Speed Booster Gaps",
          role: "Uninsulated Relay Points",
          analogy: "Like stepping stones across a river—letting the electrical impulse leap instead of walking inch by inch.",
          summary:
            "Tiny bare gaps between myelin segments. The electrical impulse jumps rapidly from node to node—a super-fast process called Saltatory Conduction.",
        },
        terminal: {
          name: "Axon Terminals",
          en: "Synaptic Knobs",
          role: "Chemical Signal Transmitters",
          analogy: "Like mail delivery stations packing chemical letters (neurotransmitters) to send across the gap.",
          summary:
            "Swollen branching tips at the end of the axon packed with tiny sacs (synaptic vesicles) ready to release neurotransmitters into the synapse.",
        },
      },
      synapseSteps: {
        step1: {
          name: "1. Impulse Arrives",
          en: "Presynaptic Terminal",
          role: "Electrical Signal Reaches the Edge",
          analogy: "A fast train reaches the edge of a river where the tracks stop—it needs a ferry boat to cross.",
          summary:
            "An electrical nerve impulse travels down the axon and reaches the swollen Axon Terminal (Presynaptic Knob). Because two neurons NEVER physically touch, electricity cannot jump the microscopic gap directly.",
        },
        step2: {
          name: "2. Vesicles Open",
          en: "Neurotransmitter Release",
          role: "Electrical → Chemical Conversion",
          analogy: "The arriving train triggers dock gates to open, launching dozens of tiny ferry boats.",
          summary:
            "The electrical charge opens calcium channels, signaling tiny bubble-like Synaptic Vesicles to fuse with the membrane and release chemical messengers called Neurotransmitters (like Acetylcholine or Dopamine).",
        },
        step3: {
          name: "3. Crossing the Cleft",
          en: "Synaptic Cleft Diffusion",
          role: "Microscopic 20 nm Gap",
          analogy: "Ferry boats rapidly cross the narrow river to reach the opposite shore.",
          summary:
            "Neurotransmitter molecules diffuse across the ultra-narrow fluid gap (Synaptic Cleft, only ~20 nanometers wide) from the first neuron toward the dendrite of the next neuron.",
        },
        step4: {
          name: "4. Receptor Lock & Fire",
          en: "Postsynaptic Dendrite",
          role: "Chemical → Fresh Electrical Impulse",
          analogy: "Each ferry key fits a matching lock on the far shore, starting a brand-new train on the next track!",
          summary:
            "Neurotransmitters bind like keys into matching Receptor proteins on the next neuron's dendrite. This triggers a brand-new electrical impulse in Neuron #2. Afterward, enzymes clear the cleft so the synapse resets for the next signal.",
        },
      },
      nsLesson: {
        heading: "Class 9–10 Master Notes: Neuron & Synapse Mechanism",
        sections: [
          {
            title: "1. What Is a Neuron?",
            html: `<p>A <strong>Neuron (Nerve Cell)</strong> is the structural and functional unit of the nervous system—and the <strong>longest cell in the human body</strong> (up to 1 metre). Every thought, sensation, and movement is carried by billions of neurons working together.</p>`,
          },
          {
            title: "2. Direction of Impulse (Always One-Way!)",
            html: `<div class="detail-fact" style="margin-top:4px"><strong>Dendrite → Cell Body (Soma) → Axon → Axon Terminal → (Synapse) → Next Neuron's Dendrite</strong></div>
            <p style="margin-top:8px">Why can a nerve signal <strong>never travel backward</strong> across a synapse? Because <em>neurotransmitter vesicles</em> exist ONLY on the Axon Terminal side, while <em>chemical receptors</em> exist ONLY on the Dendrite side—acting like a one-way valve!</p>`,
          },
          {
            title: "3. Electrical vs. Chemical Signaling",
            html: `<p>• <strong>Inside a single neuron:</strong> Signal travels as a fast <strong>Electrical Impulse</strong> (boosted by the Myelin Sheath &amp; Nodes of Ranvier).<br/>
            • <strong>Between two neurons (at the Synapse):</strong> Signal converts into a <strong>Chemical Signal</strong> (Neurotransmitters crossing the synaptic cleft), then turns back into an electrical impulse in the next neuron.</p>`,
          },
        ],
      },
      nsQuiz: {
        title: "Neuron & Synapse Quiz",
        correctMsg: "Brilliant! You mastered the mechanism.",
        wrongMsg: "Close — review the explanation below.",
        nextBtn: "Next Question",
        restartBtn: "Restart Quiz",
        scoreLabel: "Score",
        questions: [
          {
            q: "What is the microscopic functional gap between the axon terminal of one neuron and the dendrite of the next?",
            options: ["Myelin Sheath", "Synapse", "Node of Ranvier", "Axon"],
            answer: 1,
            explain: "A Synapse is the microscopic junction where chemical neurotransmitters bridge the gap between two neurons.",
          },
          {
            q: "Which part of the neuron receives incoming signals from sense organs or previous neurons?",
            options: ["Axon Terminal", "Myelin Sheath", "Dendrites", "Nucleus"],
            answer: 2,
            explain: "Tree-like Dendrites act as receiving antennas that pick up signals and direct them to the cell body.",
          },
          {
            q: "How does the electrical impulse cross the synaptic cleft between two neurons?",
            options: [
              "By jumping as a direct spark",
              "Via chemical messengers called Neurotransmitters",
              "Through blood plasma",
              "By muscle contraction",
            ],
            answer: 1,
            explain: "At the synapse, the electrical impulse triggers vesicles to release chemical neurotransmitters across the cleft.",
          },
          {
            q: "What is the main role of the Myelin Sheath wrapping an axon?",
            options: [
              "Digesting bacteria",
              "Insulating the axon to greatly speed up nerve impulses",
              "Storing DNA",
              "Pumping blood",
            ],
            answer: 1,
            explain: "Myelin insulates the axon so impulses jump rapidly from Node of Ranvier to Node of Ranvier (saltatory conduction).",
          },
          {
            q: "Why do nerve impulses always flow in ONE direction across a synapse?",
            options: [
              "Because gravity pulls them downward",
              "Because neurotransmitters are released only from axon terminals and receptors sit only on dendrites",
              "Because axons are thicker than dendrites",
              "Because the skull blocks backward signals",
            ],
            answer: 1,
            explain: "The one-sided placement of neurotransmitter vesicles (axon terminal) and receptors (dendrite) enforces strict one-way transmission.",
          },
        ],
      },
    },

    hi: {
      chapterBadge: "अध्याय 03 • कक्षा 9–10 लैब",
      title: "मानव मस्तिष्क और तंत्रिका तंत्र — लाइव लैब",
      subtitle:
        "मस्तिष्क के किसी भी खंड (Lobe) पर टैप करें, या लाइव प्रतिवर्ती चाप (Reflex Arc) देखें",
      views: {
        brain: "मस्तिष्क और खंड",
        reflex: "प्रतिवर्ती चाप (लाइव)",
      },
      toggles: {
        pause: "रोकें",
        play: "चलाएँ",
        pins: "हॉटस्पॉट पिन",
      },
      metrics: {
        speed: "आवेग गति",
        freq: "मस्तिष्क तरंग",
        mode: "नियंत्रण केंद्र",
        lobe: "सक्रिय भाग",
        forebrain: "अग्रमस्तिष्क",
        hindbrain: "पश्चमस्तिष्क",
        spinalCenter: "मेरुरज्जु",
      },
      freqControl: "तंत्रिका सक्रियता व आवेग दर",
      presets: [
        { level: 1, label: "गहरी नींद", badge: "डेल्टा • 4 Hz", hz: 4, speed: 60 },
        { level: 2, label: "अध्ययन एकाग्रता", badge: "बीटा • 18 Hz", hz: 18, speed: 100 },
        { level: 3, label: "उच्च सतर्कता", badge: "गामा • 32 Hz", hz: 32, speed: 115 },
        { level: 4, label: "तीव्र प्रतिवर्त", badge: "चरम • 45 Hz", hz: 45, speed: 120 },
      ],
      tabs: {
        inspect: "मस्तिष्क व खंड",
        lesson: "कक्षा 9–10 पाठ",
        quiz: "त्वरित जाँच",
      },
      selectPrompt:
        "यह भाग शरीर को कैसे नियंत्रित करता है, जानने के लिए चित्र के किसी भी पिन पर टैप करें।",
      brainHotspots: {
        frontal: {
          name: "ललाट खंड (Frontal)",
          en: "Frontal Lobe",
          division: "अग्रमस्तिष्क • प्रमस्तिष्क",
          summary:
            "माथे के ठीक पीछे स्थित मस्तिष्क का 'मुख्य प्रबंधक'। यह तर्क, गणित हल करने, योजना बनाने, बोलने, भावनाओं और ऐच्छिक गतियों को नियंत्रित करता है।",
          keyFact: "उदाहरण: परीक्षा का सवाल हल करना या सोचकर हाथ उठाना यहीं से शुरू होता है।",
        },
        parietal: {
          name: "पार्श्विका खंड (Parietal)",
          en: "Parietal Lobe",
          division: "अग्रमस्तिष्क • प्रमस्तिष्क",
          summary:
            "सिर के ऊपरी-पिछले भाग में स्थित संवेदी केंद्र। यह स्पर्श, तापमान (गर्म/ठंडा), दर्द, दाब और स्थान-बोध को समझता है।",
          keyFact: "उदाहरण: चाय का कप गर्म है या ठंडा महसूस करना, या गेंद पकड़ना।",
        },
        temporal: {
          name: "शंख खंड (Temporal)",
          en: "Temporal Lobe",
          division: "अग्रमस्तिष्क • प्रमस्तिष्क",
          summary:
            "कानों के पास स्थित यह खंड ध्वनि, संगीत और भाषा को समझता है तथा हिप्पोकैम्पस की मदद से दीर्घकालिक स्मृति बनाता है।",
          keyFact: "उदाहरण: फोन पर मित्र की आवाज़ पहचानना और कल पढ़ा हुआ पाठ याद रखना।",
        },
        occipital: {
          name: "पश्चकपाल खंड (Occipital)",
          en: "Occipital Lobe",
          division: "अग्रमस्तिष्क • प्रमस्तिष्क",
          summary:
            "सिर के सबसे पिछले हिस्से में स्थित दृष्टि केंद्र। यह आँखों से आए प्रकाश संकेतों को स्पष्ट चित्र, रंग और गति में बदलता है।",
          keyFact: "उदाहरण: स्क्रीन पर लिखे शब्द पढ़ना और सड़क पर चलती गाड़ी देखना।",
        },
        cerebellum: {
          name: "अनुमस्तिष्क (Cerebellum)",
          en: "Cerebellum",
          division: "पश्चमस्तिष्क",
          summary:
            "मस्तिष्क के पिछले निचले हिस्से में स्थित। यह शरीर का संतुलन, सही मुद्रा (Posture) और ऐच्छिक पेशियों की सटीक गति को नियंत्रित करता है।",
          keyFact: "उदाहरण: साइकिल चलाना, सीधी रेखा में चलना और साफ लिखावट बनाना।",
        },
        brainstem: {
          name: "मेडुला व मस्तिष्क स्तंभ",
          en: "Pons & Medulla Oblongata",
          division: "पश्चमस्तिष्क",
          summary:
            "मस्तिष्क को मेरुरज्जु से जोड़ता है। मेडुला सभी अनैच्छिक जीवन-रक्षक क्रियाएँ—हृदय धड़कन, श्वसन, रक्तचाप, निगलना व छींकना—नियंत्रित करता है।",
          keyFact: "गहरी नींद में भी मेडुला हृदय और फेफड़ों को निरंतर चलाए रखता है।",
        },
        hypothalamus: {
          name: "हाइपोथैलेमस",
          en: "Hypothalamus",
          division: "अग्रमस्तिष्क",
          summary:
            "मस्तिष्क के भीतर स्थित छोटा नियंत्रण केंद्र जो शरीर का तापमान, भूख, प्यास, नींद और पीयूष ग्रंथि (Pituitary) को नियंत्रित करता है।",
          keyFact: "गर्मी में पसीना लाना और ठंड में कंपकंपी पैदा करना इसी का काम है।",
        },
      },
      reflexHotspots: {
        receptor: {
          name: "1. उद्दीपन व ग्राही",
          en: "Receptor (Skin)",
          division: "प्रतिवर्ती चाप • चरण 1",
          summary: "त्वचा की संवेदी कोशिकाएँ गर्म वस्तु या काँटे के चुभते ही उसे विद्युत आवेग में बदल देती हैं।",
          keyFact: "त्वचा को जलने से बचाने के लिए मिलीसेकंड में संकेत बनता है।",
        },
        sensory: {
          name: "2. संवेदी तंत्रिका कोशिका",
          en: "Sensory Neuron",
          division: "प्रतिवर्ती चाप • चरण 2",
          summary: "यह विद्युत आवेग को त्वचा से सीधे मेरुरज्जु (Spinal Cord) तक ले जाती है।",
          keyFact: "संकेत सदैव ग्राही से केंद्रीय तंत्रिका तंत्र की ओर जाता है।",
        },
        spinal: {
          name: "3. मेरुरज्जु (रिले न्यूरॉन)",
          en: "Spinal Cord Relay",
          division: "प्रतिवर्ती चाप • चरण 3",
          summary:
            "मेरुरज्जु के भीतर रिले न्यूरॉन बिना मस्तिष्क के सोचने की प्रतीक्षा किए तुरंत रक्षात्मक आदेश प्रेरक न्यूरॉन को भेज देता है।",
          keyFact: "दर्द का एहसास कराने हेतु संकेत की एक प्रति बाद में मस्तिष्क को जाती है।",
        },
        motor: {
          name: "4. प्रेरक तंत्रिका कोशिका",
          en: "Motor Neuron",
          division: "प्रतिवर्ती चाप • चरण 4",
          summary: "मेरुरज्जु से आदेश को तेज़ी से भुजा की पेशी (Effector) तक पहुँचाती है।",
          keyFact: "प्रेरक न्यूरॉन सदैव CNS से पेशियों की ओर आदेश ले जाते हैं।",
        },
        effector: {
          name: "5. कार्यकारी पेशी",
          en: "Effector Muscle",
          division: "प्रतिवर्ती चाप • चरण 5",
          summary: "आदेश मिलते ही भुजा की पेशी सिकुड़ती है और 0.1 सेकंड से कम समय में हाथ खतरे से हट जाता है।",
          keyFact: "परीक्षा सूत्र: उद्दीपन → ग्राही → संवेदी न्यूरॉन → मेरुरज्जु → प्रेरक न्यूरॉन → पेशी → अनुक्रिया।",
        },
      },
      brainLesson: {
        heading: "कक्षा 9–10 पाठ योजना: मानव तंत्रिका तंत्र व मस्तिष्क",
        sections: [
          {
            title: "1. तंत्रिका तंत्र के मुख्य भाग",
            html: `<p>• <strong>केंद्रीय तंत्रिका तंत्र (CNS):</strong> मस्तिष्क + मेरुरज्जु (सूचना संसाधन व निर्णय)।<br/>• <strong>परिधीय तंत्रिका तंत्र (PNS):</strong> 12 जोड़ी कपाल तंत्रिकाएँ + 31 जोड़ी मेरु तंत्रिकाएँ।</p>`,
          },
          {
            title: "2. मानव मस्तिष्क के तीन भाग",
            html: `<p>• <strong>अग्रमस्तिष्क (Forebrain):</strong> प्रमस्तिष्क (सोच, स्मृति, दृष्टि, श्रवण, स्पर्श के 4 खंड) और हाइपोथैलेमस (तापमान, भूख, प्यास)।<br/>• <strong>मध्यमस्तिष्क (Midbrain):</strong> दृश्य व श्रवण प्रतिवर्त नियंत्रण।<br/>• <strong>पश्चमस्तिष्क (Hindbrain):</strong> अनुमस्तिष्क (संतुलन व मुद्रा), पॉन्स और मेडुला (हृदय गति, श्वसन व रक्तचाप)।</p>`,
          },
          {
            title: "3. प्रतिवर्ती क्रिया बनाम ऐच्छिक क्रिया",
            html: `<p><strong>प्रतिवर्ती क्रिया (Reflex):</strong> मेरुरज्जु द्वारा नियंत्रित अचानक, स्वचालित रक्षात्मक क्रिया (जैसे गर्म बर्तन से हाथ हटना)।<br/><strong>ऐच्छिक क्रिया (Voluntary):</strong> प्रमस्तिष्क द्वारा सोच-समझकर की गई क्रिया (जैसे लिखना)।</p>
            <div class="detail-fact" style="margin-top:8px">उद्दीपन → ग्राही → संवेदी न्यूरॉन → रिले न्यूरॉन (मेरुरज्जु) → प्रेरक न्यूरॉन → पेशी</div>`,
          },
          {
            title: "4. मस्तिष्क व मेरुरज्जु की सुरक्षा",
            html: `<p>कठोर कपाल (Cranium), कशेरुक दंड, तीन मेनिन्जेस झिल्लियाँ और झटके सोखने वाला <strong>प्रमस्तिष्कमेरु द्रव (CSF)</strong> इनकी रक्षा करते हैं।</p>`,
          },
        ],
      },
      brainQuiz: {
        title: "मस्तिष्क व प्रतिवर्त जाँच",
        correctMsg: "बिल्कुल सही! अवधारणा स्पष्ट है।",
        wrongMsg: "सही नहीं — नीचे दिया गया स्पष्टीकरण पढ़ें।",
        nextBtn: "अगला प्रश्न",
        restartBtn: "फिर से शुरू करें",
        scoreLabel: "स्कोर",
        questions: [
          {
            q: "साइकिल चलाते समय शरीर का संतुलन और मुद्रा मस्तिष्क का कौन-सा भाग नियंत्रित करता है?",
            options: ["मेडुला", "अनुमस्तिष्क (Cerebellum)", "पश्चकपाल खंड", "हाइपोथैलेमस"],
            answer: 1,
            explain: "अनुमस्तिष्क (Cerebellum) ऐच्छिक पेशियों के समन्वय व संतुलन का केंद्र है।",
          },
          {
            q: "आँखों से प्राप्त दृश्य संकेतों को कौन-सा खंड संसाधित करता है?",
            options: ["ललाट खंड", "शंख खंड", "पश्चकपाल खंड (Occipital)", "पार्श्विका खंड"],
            answer: 2,
            explain: "पश्चकपाल खंड (Occipital Lobe) मस्तिष्क का मुख्य दृष्टि केंद्र है।",
          },
          {
            q: "हृदय गति, श्वसन और रक्तचाप जैसी अनैच्छिक क्रियाएँ कौन नियंत्रित करता है?",
            options: ["मेडुला ऑब्लोंगाटा", "अनुमस्तिष्क", "ललाट खंड", "त्वचा ग्राही"],
            answer: 0,
            explain: "मेडुला जीवन-रक्षक अनैच्छिक क्रियाओं का संचालन करता है।",
          },
          {
            q: "प्रतिवर्ती चाप (Reflex Arc) में तुरंत निर्णय कौन लेता है?",
            options: ["प्रमस्तिष्क", "मेरुरज्जु (Spinal Cord)", "पीयूष ग्रंथि", "हाइपोथैलेमस"],
            answer: 1,
            explain: "मेरुरज्जु का रिले न्यूरॉन तुरंत रक्षात्मक आदेश भेज देता है।",
          },
          {
            q: "कपाल के भीतर मस्तिष्क को झटकों से बचाने वाला द्रव कौन-सा है?",
            options: ["प्लाज़्मा", "लसीका", "प्रमस्तिष्कमेरु द्रव (CSF)", "पित्त रस"],
            answer: 2,
            explain: "CSF तरल गद्दे की तरह मस्तिष्क को बाहरी आघात से बचाता है।",
          },
        ],
      },

      neuronSec: {
        title: "न्यूरॉन और सिनैप्स — 3D फ्लिप लैब",
        subtitle:
          "आगे का भाग: न्यूरॉन के अंग व विद्युत आवेग • कार्ड पलटें (Flip) और सिनैप्स की रासायनिक क्रियाविधि देखें",
        flipMain: "कार्ड पलटें: न्यूरॉन ↔ सिनैप्स",
        frontBadge: "सामने • न्यूरॉन संरचना व विद्युत आवेग",
        flipToSynapse: "सिनैप्स क्रियाविधि देखें",
        fireImpulse: "विद्युत आवेग भेजें (Fire Signal!)",
        neuronPrompt:
          "एनीमेशन पर हाइलाइट देखने और कार्य समझने के लिए किसी भी भाग पर टैप करें:",
        backBadge: "पीछे • सिनैप्स क्रियाविधि (रासायनिक सेतु)",
        flipToNeuron: "वापस न्यूरॉन पर जाएँ",
        fireSynapse: "सिनैप्स संकेत चलाएँ (रसायन छोड़ें!)",
        synapsePrompt:
          "दो न्यूरॉन के बीच सूक्ष्म खाली स्थान से संकेत कैसे गुजरता है, 4 सरल चरणों में देखें:",
        lessonTab: "न्यूरॉन व सिनैप्स पाठ (कक्षा 9–10)",
        quizTab: "न्यूरॉन व सिनैप्स प्रश्नोत्तरी",
        analogyLabel: "सरल उदाहरण",
        canvasNeuronHud: "विद्युत आवेग: द्रुमिका → कोशिकाकाय → तंत्रिकाक्ष (उछलकर) → अंतिम सिरा",
        canvasSynapseStepHud: [
          "चरण 1: विद्युत आवेग तंत्रिकाक्ष के अंतिम सिरे पर पहुँचता है",
          "चरण 2: पुटिकाएँ खुलती हैं और न्यूरोट्रांसमीटर रसायन छोड़ती हैं",
          "चरण 3: रसायन सिनैप्टिक दरार (खाली स्थान) को पार करते हैं",
          "चरण 4: रसायन ग्राही से जुड़ते हैं → अगले न्यूरॉन में नया आवेग शुरू!",
        ],
      },
      neuronParts: {
        dendrite: {
          name: "द्रुमिका (Dendrites)",
          en: "Dendrites",
          role: "संकेत ग्रहण करने वाले तंतु",
          analogy: "टीवी एंटीना की तरह जो पड़ोसी न्यूरॉन या इंद्रियों से संकेत पकड़ता है।",
          summary: "कोशिकाकाय से निकली शाखित संरचनाएँ जो रासायनिक संकेत ग्रहण कर विद्युत आवेग बनाती हैं।",
        },
        soma: {
          name: "कोशिकाकाय (Soma)",
          en: "Cell Body / Cyton",
          role: "उपापचय नियंत्रण केंद्र",
          analogy: "कंप्यूटर के मदरबोर्ड की तरह जो सभी संकेतों को जोड़कर आगे भेजता है।",
          summary: "तारे जैसा मुख्य भाग जिसमें कोशिकाद्रव्य, निसल कण व माइटोकॉन्ड्रिया होते हैं।",
        },
        nucleus: {
          name: "केंद्रक (Nucleus)",
          en: "Nucleus",
          role: "आनुवंशिक केंद्र",
          analogy: "ऑपरेटिंग सिस्टम की तरह जो कोशिका के सारे निर्देश संभालता है।",
          summary: "कोशिकाकाय के बीच स्थित बड़ा केंद्रक जिसमें DNA होता है। परिपक्व न्यूरॉन विभाजित नहीं होते।",
        },
        axon: {
          name: "तंत्रिकाक्ष (Axon)",
          en: "Axon",
          role: "लंबा संचरण तार",
          analogy: "हाई-स्पीड फाइबर तार की तरह जो रीढ़ से पैर की उंगली तक बिजली ले जाता है।",
          summary: "एक लंबा बेलनाकार तंतु (1 मीटर तक) जो विद्युत आवेग को कोशिकाकाय से दूर अंतिम सिरे तक ले जाता है।",
        },
        myelin: {
          name: "मायलिन आवरण",
          en: "Myelin Sheath",
          role: "वसायुक्त रोधक परत",
          analogy: "बिजली के तार पर प्लास्टिक कवर की तरह जो गति कई गुना बढ़ा देता है।",
          summary: "श्वान कोशिकाओं द्वारा बना सफेद वसा आवरण, जिससे आवेग की गति 120 मी/सेकंड तक पहुँच जाती है।",
        },
        ranvier: {
          name: "रैनवियर के नोड",
          en: "Nodes of Ranvier",
          role: "गति बढ़ाने वाले अंतराल",
          analogy: "नदी पार करने वाले पत्थरों की तरह जिन पर आवेग उछलकर तेज़ी से दौड़ता है।",
          summary: "मायलिन खंडों के बीच छोटे खुले स्थान जिन पर आवेग छलांग लगाकर (Saltatory Conduction) आगे बढ़ता है।",
        },
        terminal: {
          name: "तंत्रिकाक्ष सिरा",
          en: "Axon Terminals",
          role: "रासायनिक प्रेषक सिरे",
          analogy: "डाकघर की तरह जो खाली स्थान पार कराने के लिए रासायनिक संदेश छोड़ते हैं।",
          summary: "अंतिम फूले हुए सिरे जिनमें न्यूरोट्रांसमीटर से भरी सूक्ष्म पुटिकाएँ होती हैं।",
        },
      },
      synapseSteps: {
        step1: {
          name: "1. आवेग का आगमन",
          en: "Presynaptic Terminal",
          role: "विद्युत संकेत सिरे पर पहुँचा",
          analogy: "तेज़ ट्रेन नदी के किनारे पहुँची जहाँ पटरी खत्म होती है—अब नाव चाहिए।",
          summary: "दो न्यूरॉन आपस में चिपके नहीं होते। इसलिए विद्युत आवेग सीधे खाली स्थान पर कूद नहीं सकता।",
        },
        step2: {
          name: "2. पुटिकाओं का खुलना",
          en: "Neurotransmitter Release",
          role: "विद्युत → रासायनिक रूपांतरण",
          analogy: "ट्रेन आते ही घाट के दरवाजे खुलते हैं और दर्जनों छोटी नावें चल पड़ती हैं।",
          summary: "विद्युत आवेग से पुटिकाएँ झिल्ली से जुड़कर न्यूरोट्रांसमीटर रसायन (जैसे एसिटिलकोलिन) छोड़ती हैं।",
        },
        step3: {
          name: "3. दरार पार करना",
          en: "Synaptic Cleft",
          role: "~20 नैनोमीटर सूक्ष्म अंतराल",
          analogy: "नावें संकरी नदी पार कर दूसरे किनारे तक पहुँचती हैं।",
          summary: "न्यूरोट्रांसमीटर अणु विसरण द्वारा सिनैप्टिक दरार को पार कर अगले न्यूरॉन की द्रुमिका तक पहुँचते हैं।",
        },
        step4: {
          name: "4. ग्राही से जुड़ना",
          en: "Postsynaptic Firing",
          role: "रासायनिक → नया विद्युत आवेग",
          analogy: "चाबी ताले में फिट होते ही अगली पटरी पर नई ट्रेन चल पड़ती है!",
          summary: "रसायन अगले न्यूरॉन के ग्राही (Receptor) से जुड़कर नया विद्युत आवेग शुरू करते हैं।",
        },
      },
      nsLesson: {
        heading: "कक्षा 9–10 मुख्य नोट्स: न्यूरॉन और सिनैप्स",
        sections: [
          {
            title: "1. न्यूरॉन क्या है?",
            html: `<p><strong>न्यूरॉन (तंत्रिका कोशिका)</strong> तंत्रिका तंत्र की संरचनात्मक व कार्यात्मक इकाई है—यह मानव शरीर की <strong>सबसे लंबी कोशिका</strong> है (1 मीटर तक)।</p>`,
          },
          {
            title: "2. आवेग की दिशा (सदैव एकदिशीय!)",
            html: `<div class="detail-fact" style="margin-top:4px"><strong>द्रुमिका → कोशिकाकाय → तंत्रिकाक्ष → अंतिम सिरा → (सिनैप्स) → अगले न्यूरॉन की द्रुमिका</strong></div>
            <p style="margin-top:8px">संकेत उल्टा क्यों नहीं जाता? क्योंकि न्यूरोट्रांसमीटर केवल तंत्रिकाक्ष के सिरे पर और ग्राही केवल द्रुमिका पर होते हैं।</p>`,
          },
          {
            title: "3. विद्युत बनाम रासायनिक संकेत",
            html: `<p>• <strong>न्यूरॉन के भीतर:</strong> तेज़ विद्युत आवेग (मायलिन आवरण द्वारा त्वरित)।<br/>• <strong>सिनैप्स पर:</strong> रासायनिक संकेत (न्यूरोट्रांसमीटर)।</p>`,
          },
        ],
      },
      nsQuiz: {
        title: "न्यूरॉन व सिनैप्स प्रश्नोत्तरी",
        correctMsg: "शानदार! क्रियाविधि स्पष्ट है।",
        wrongMsg: "थोड़ा चूक गए — नीचे स्पष्टीकरण पढ़ें।",
        nextBtn: "अगला प्रश्न",
        restartBtn: "फिर से शुरू करें",
        scoreLabel: "स्कोर",
        questions: [
          {
            q: "दो न्यूरॉन के बीच के सूक्ष्म खाली स्थान को क्या कहते हैं?",
            options: ["मायलिन आवरण", "सिनैप्स (Synapse)", "रैनवियर नोड", "तंत्रिकाक्ष"],
            answer: 1,
            explain: "दो न्यूरॉन के बीच का कार्यात्मक अंतराल सिनैप्स कहलाता है।",
          },
          {
            q: "न्यूरॉन का कौन-सा भाग आने वाले संकेतों को ग्रहण करता है?",
            options: ["अंतिम सिरा", "मायलिन", "द्रुमिका (Dendrites)", "केंद्रक"],
            answer: 2,
            explain: "शाखित द्रुमिकाएँ संकेत ग्रहण कर कोशिकाकाय को भेजती हैं।",
          },
          {
            q: "सिनैप्स के पार संकेत किस रूप में जाता है?",
            options: ["सीधी बिजली की चिंगारी", "न्यूरोट्रांसमीटर रसायन द्वारा", "रक्त द्वारा", "पेशी द्वारा"],
            answer: 1,
            explain: "सिनैप्स पर विद्युत आवेग रासायनिक न्यूरोट्रांसमीटर में बदलकर दरार पार करता है।",
          },
          {
            q: "मायलिन आवरण (Myelin Sheath) का मुख्य कार्य क्या है?",
            options: ["जीवाणु नष्ट करना", "तंत्रिकाक्ष को रोधित कर आवेग की गति बढ़ाना", "DNA संग्रह", "रक्त पंप करना"],
            answer: 1,
            explain: "मायलिन आवरण आवेग को नोड्स पर उछालकर गति कई गुना बढ़ाता है।",
          },
          {
            q: "सिनैप्स पर संकेत सदैव एक ही दिशा में क्यों जाता है?",
            options: [
              "गुरुत्वाकर्षण के कारण",
              "क्योंकि रसायन केवल तंत्रिकाक्ष सिरे से निकलते हैं और ग्राही केवल द्रुमिका पर होते हैं",
              "तंत्रिकाक्ष मोटा होता है",
              "कपाल इसे रोकता है",
            ],
            answer: 1,
            explain: "एक ओर रसायन और दूसरी ओर ग्राही होने से सिनैप्स एकदिशीय वाल्व की तरह काम करता है।",
          },
        ],
      },
    },

    bn: {
      chapterBadge: "অধ্যায় ০৩ • শ্রেণি ৯–১০ ল্যাব",
      title: "মানব মস্তিষ্ক ও স্নায়ুতন্ত্র — লাইভ ল্যাব",
      subtitle:
        "মস্তিষ্কের যেকোনো খণ্ডে (Lobe) ট্যাপ করে কাজ জানুন, অথবা লাইভ প্রতিবর্ত চাপ (Reflex Arc) দেখুন",
      views: {
        brain: "মস্তিষ্ক ও খণ্ডসমূহ",
        reflex: "প্রতিবর্ত চাপ (লাইভ)",
      },
      toggles: {
        pause: "থামান",
        play: "চালান",
        pins: "হটস্পট পিন",
      },
      metrics: {
        speed: "স্নায়ুবেগ",
        freq: "মস্তিষ্ক তরঙ্গ",
        mode: "নিয়ন্ত্রণ কেন্দ্র",
        lobe: "সক্রিয় অংশ",
        forebrain: "অগ্রমস্তিষ্ক",
        hindbrain: "পশ্চাৎমস্তিষ্ক",
        spinalCenter: "সুষুম্নাকাণ্ড",
      },
      freqControl: "স্নায়ু সক্রিয়তা ও আবেগের হার",
      presets: [
        { level: 1, label: "গভীর ঘুম", badge: "ডেল্টা • 4 Hz", hz: 4, speed: 60 },
        { level: 2, label: "পড়াশোনার মনোযোগ", badge: "বিটা • 18 Hz", hz: 18, speed: 100 },
        { level: 3, label: "উচ্চ সতর্কতা", badge: "গামা • 32 Hz", hz: 32, speed: 115 },
        { level: 4, label: "দ্রুত প্রতিবর্ত", badge: "সর্বোচ্চ • 45 Hz", hz: 45, speed: 120 },
      ],
      tabs: {
        inspect: "মস্তিষ্ক ও খণ্ড",
        lesson: "শ্রেণি ৯–১০ পাঠ",
        quiz: "দ্রুত যাচাই",
      },
      selectPrompt:
        "কোন অংশ শরীরকে কীভাবে নিয়ন্ত্রণ করে তা জানতে চিত্রের যেকোনো জ্বলন্ত পিনে ট্যাপ করুন।",
      brainHotspots: {
        frontal: {
          name: "ফ্রন্টাল লোব",
          en: "Frontal Lobe",
          division: "অগ্রমস্তিষ্ক • গুরুমস্তিষ্ক",
          summary:
            "কপালের ঠিক পেছনে থাকা মস্তিষ্কের 'প্রধান পরিচালক'। এটি যুক্তি, অঙ্ক কষা, পরিকল্পনা, কথা বলা, আবেগ এবং ঐচ্ছিক পেশীর নড়াচড়া নিয়ন্ত্রণ করে।",
          keyFact: "বাস্তব উদাহরণ: পরীক্ষার অঙ্ক সমাধান করা বা ভেবেচিন্তে হাত তোলা এখান থেকেই শুরু হয়।",
        },
        parietal: {
          name: "প্যারাইটাল লোব",
          en: "Parietal Lobe",
          division: "অগ্রমস্তিষ্ক • গুরুমস্তিষ্ক",
          summary:
            "মাথার ওপরের পেছনের অংশে থাকা সংবেদী কেন্দ্র। এটি স্পর্শ, গরম-ঠান্ডা, ব্যথা, চাপ ও স্থান-বোধ বিশ্লেষণ করে।",
          keyFact: "বাস্তব উদাহরণ: চায়ের কাপ গরম না ঠান্ডা বোঝা বা আকাশে বল ক্যাচ ধরা।",
        },
        temporal: {
          name: "টেম্পোরাল লোব",
          en: "Temporal Lobe",
          division: "অগ্রমস্তিষ্ক • গুরুমস্তিষ্ক",
          summary:
            "কানের দুই পাশে অবস্থিত। এটি শব্দ, গান ও ভাষা বুঝতে সাহায্য করে এবং হিপ্পোক্যাম্পাসের সাহায্যে দীর্ঘমেয়াদী স্মৃতি গঠন করে।",
          keyFact: "বাস্তব উদাহরণ: ফোনে বন্ধুর গলা চেনা এবং গতকালের পড়া মনে রাখা।",
        },
        occipital: {
          name: "অক্সিপিটাল লোব",
          en: "Occipital Lobe",
          division: "অগ্রমস্তিষ্ক • গুরুমস্তিষ্ক",
          summary:
            "মাথার একদম পেছনের অংশে থাকা দর্শন কেন্দ্র। এটি চোখ থেকে আসা আলোর সংকেতকে স্পষ্ট ছবি, রঙ ও গতিতে রূপান্তর করে।",
          keyFact: "বাস্তব উদাহরণ: স্ক্রিনের এই লেখা পড়া এবং রাস্তায় চলন্ত গাড়ি দেখা।",
        },
        cerebellum: {
          name: "লঘুমস্তিষ্ক",
          en: "Cerebellum",
          division: "পশ্চাৎমস্তিষ্ক",
          summary:
            "মস্তিষ্কের নিচের পেছনের অংশে অবস্থিত। এটি দেহের ভারসাম্য (Balance), ভঙ্গিমা (Posture) এবং ঐচ্ছিক পেশীর নিখুঁত সমন্বয় রক্ষা করে।",
          keyFact: "বাস্তব উদাহরণ: সাইকেল চালানো, সোজা হাঁটা এবং হাত না কাঁপিয়ে সুন্দর করে লেখা।",
        },
        brainstem: {
          name: "সুষুম্নাশীর্ষক ও ব্রেইনস্টেম",
          en: "Pons & Medulla Oblongata",
          division: "পশ্চাৎমস্তিষ্ক",
          summary:
            "মস্তিষ্ককে সুষুম্নাকাণ্ডের সাথে যুক্ত করে। সুষুম্নাশীর্ষক (Medulla) সমস্ত অনৈচ্ছিক জীবনরক্ষাকারী কাজ—হৃদস্পন্দন, শ্বাসক্রিয়া, রক্তচাপ ও গলাধঃকরণ—নিয়ন্ত্রণ করে।",
          keyFact: "গভীর ঘুমেও সুষুম্নাশীর্ষক হৃৎপিণ্ড ও ফুসফুসকে অবিরাম সচল রাখে।",
        },
        hypothalamus: {
          name: "হাইপোথ্যালামাস",
          en: "Hypothalamus",
          division: "অগ্রমস্তিষ্ক",
          summary:
            "মস্তিষ্কের গভীরে থাকা ক্ষুদ্র নিয়ন্ত্রণ কেন্দ্র যা দেহের তাপমাত্রা, খিদে, তৃষ্ণা, ঘুম ও পিটুইটারি গ্রন্থিকে নিয়ন্ত্রণ করে।",
          keyFact: "গরমে ঘাম হওয়া ও শীতে কাঁপুনি তৈরি করা এর কাজ।",
        },
      },
      reflexHotspots: {
        receptor: {
          name: "১. উদ্দীপক ও গ্রাহক",
          en: "Receptor (Skin)",
          division: "প্রতিবর্ত চাপ • ধাপ ১",
          summary: "ত্বকের গ্রাহক কোষ গরম বস্তু বা কাঁটা ফোটার সাথে সাথে তা বৈদ্যুতিক স্নায়ুআবেগে বদলে দেয়।",
          keyFact: "হাত পোড়া থেকে বাঁচাতে মিলিসেকেন্ডেই সংকেত তৈরি হয়।",
        },
        sensory: {
          name: "২. সংজ্ঞাবহ নিউরন",
          en: "Sensory Neuron",
          division: "প্রতিবর্ত চাপ • ধাপ ২",
          summary: "ত্বকের গ্রাহক থেকে জরুরি বৈদ্যুতিক সংকেত সরাসরি সুষুম্নাকাণ্ডে নিয়ে যায়।",
          keyFact: "সংকেত সর্বদা গ্রাহক থেকে কেন্দ্রীয় স্নায়ুতন্ত্রের দিকে যায়।",
        },
        spinal: {
          name: "৩. সুষুম্নাকাণ্ড (রিলে নিউরন)",
          en: "Spinal Cord Relay",
          division: "প্রতিবর্ত চাপ • ধাপ ৩",
          summary:
            "সুষুম্নাকাণ্ডের রিলে নিউরন মস্তিষ্কের ভাবার অপেক্ষা না করেই তাৎক্ষণিক আত্মরক্ষার নির্দেশ আজ্ঞাবহ নিউরনে পাঠায়।",
          keyFact: "ব্যথা অনুভব করার জন্য সংকেতের একটি কপি পরে মস্তিষ্কে পৌঁছায়।",
        },
        motor: {
          name: "৪. আজ্ঞাবহ নিউরন",
          en: "Motor Neuron",
          division: "প্রতিবর্ত চাপ • ধাপ ৪",
          summary: "সুষুম্নাকাণ্ড থেকে দ্রুত নির্দেশ বহন করে হাতের পেশীতে পৌঁছে দেয়।",
          keyFact: "আজ্ঞাবহ নিউরন সর্বদা CNS থেকে পেশী বা গ্রন্থিতে নির্দেশ বয়ে আনে।",
        },
        effector: {
          name: "৫. কারক পেশী",
          en: "Effector Muscle",
          division: "প্রতিবর্ত চাপ • ধাপ ৫",
          summary: "নির্দেশ পাওয়ামাত্র হাতের পেশী সংকুচিত হয়ে ০.১ সেকেন্ডের কমে হাত বিপদ থেকে সরিয়ে নেয়।",
          keyFact: "পরীক্ষার সূত্র: উদ্দীপক → গ্রাহক → সংজ্ঞাবহ নিউরন → সুষুম্নাকাণ্ড → আজ্ঞাবহ নিউরন → কারক পেশী।",
        },
      },
      brainLesson: {
        heading: "শ্রেণি ৯–১০ পাঠ পরিকল্পনা: মানব স্নায়ুতন্ত্র ও মস্তিষ্ক",
        sections: [
          {
            title: "১. স্নায়ুতন্ত্রের শ্রেণিবিভাগ",
            html: `<p>• <strong>কেন্দ্রীয় স্নায়ুতন্ত্র (CNS):</strong> মস্তিষ্ক + সুষুম্নাকাণ্ড (তথ্য বিশ্লেষণ ও সিদ্ধান্ত গ্রহণ)।<br/>• <strong>প্রান্তীয় স্নায়ুতন্ত্র (PNS):</strong> ১২ জোড়া করোটি স্নায়ু + ৩১ জোড়া সুষুম্না স্নায়ু।</p>`,
          },
          {
            title: "২. মানব মস্তিষ্কের তিনটি অংশ",
            html: `<p>• <strong>অগ্রমস্তিষ্ক (Forebrain):</strong> গুরুমস্তিষ্ক (চিন্তা, স্মৃতি, দর্শন, শ্রবণ ও স্পর্শের ৪টি লোব) এবং হাইপোথ্যালামাস (তাপমাত্রা, খিদে, তৃষ্ণা)।<br/>• <strong>মধ্যমস্তিষ্ক (Midbrain):</strong> দর্শন ও শ্রবণ প্রতিবর্ত নিয়ন্ত্রণ।<br/>• <strong>পশ্চাৎমস্তিষ্ক (Hindbrain):</strong> লঘুমস্তিষ্ক (ভারসাম্য ও ভঙ্গিমা), পন্স এবং সুষুম্নাশীর্ষক/মেডুলা (হৃদস্পন্দন, শ্বাসক্রিয়া ও রক্তচাপ)।</p>`,
          },
          {
            title: "৩. প্রতিবর্ত ক্রিয়া বনাম ঐচ্ছিক ক্রিয়া",
            html: `<p><strong>প্রতিবর্ত ক্রিয়া (Reflex):</strong> সুষুম্নাকাণ্ড দ্বারা নিয়ন্ত্রিত তাৎক্ষণিক অনৈচ্ছিক আত্মরক্ষামূলক ক্রিয়া (যেমন গরম বস্তু থেকে হাত সরানো)।<br/><strong>ঐচ্ছিক ক্রিয়া (Voluntary):</strong> গুরুমস্তিষ্ক দ্বারা সচেতনভাবে করা কাজ (যেমন লেখা বা ফুটবল খেলা)।</p>
            <div class="detail-fact" style="margin-top:8px">উদ্দীপক → গ্রাহক → সংজ্ঞাবহ নিউরন → রিলে নিউরন (সুষুম্নাকাণ্ড) → আজ্ঞাবহ নিউরন → কারক পেশী</div>`,
          },
          {
            title: "৪. মস্তিষ্ক ও সুষুম্নাকাণ্ডের সুরক্ষা",
            html: `<p>শক্ত করোটি (Cranium), মেরুদণ্ড, তিন স্তরীয় মেনিনজেস পর্দা এবং আঘাত-শোষক <strong>সেরিব্রোস্পাইনাল ফ্লুইড (CSF)</strong> মস্তিষ্ককে রক্ষা করে।</p>`,
          },
        ],
      },
      brainQuiz: {
        title: "মস্তিষ্ক ও প্রতিবর্ত যাচাই",
        correctMsg: "একদম সঠিক! ধারণাটি পরিষ্কার।",
        wrongMsg: "সঠিক নয় — নিচের ব্যাখ্যাটি পড়ে নিন।",
        nextBtn: "পরবর্তী প্রশ্ন",
        restartBtn: "আবার শুরু করুন",
        scoreLabel: "স্কোর",
        questions: [
          {
            q: "সাইকেল চালানোর সময় দেহের ভারসাম্য ও ভঙ্গিমা মস্তিষ্কের কোন অংশ নিয়ন্ত্রণ করে?",
            options: ["সুষুম্নাশীর্ষক", "লঘুমস্তিষ্ক (Cerebellum)", "অক্সিপিটাল লোব", "হাইপোথ্যালামাস"],
            answer: 1,
            explain: "লঘুমস্তিষ্ক (Cerebellum) দেহের ভারসাম্য ও পেশীর সুষম সমন্বয় রক্ষা করে।",
          },
          {
            q: "চোখ থেকে আসা দৃশ্যের সংকেত কোন লোবে বিশ্লেষিত হয়?",
            options: ["ফ্রন্টাল লোব", "টেম্পোরাল লোব", "অক্সিপিটাল লোব", "প্যারাইটাল লোব"],
            answer: 2,
            explain: "মাথার পেছনে থাকা অক্সিপিটাল লোব হলো প্রধান দর্শন কেন্দ্র।",
          },
          {
            q: "হৃদস্পন্দন, শ্বাসক্রিয়া ও রক্তচাপের মতো অনৈচ্ছিক কাজ কোন অংশ নিয়ন্ত্রণ করে?",
            options: ["সুষুম্নাশীর্ষক (Medulla)", "লঘুমস্তিষ্ক", "ফ্রন্টাল লোব", "ত্বকের গ্রাহক"],
            answer: 0,
            explain: "সুষুম্নাশীর্ষক বা মেডুলা সমস্ত জীবনরক্ষাকারী অনৈচ্ছিক কাজ চালায়।",
          },
          {
            q: "প্রতিবর্ত চাপে (Reflex Arc) তাৎক্ষণিক সিদ্ধান্ত কে নেয়?",
            options: ["গুরুমস্তিষ্ক", "সুষুম্নাকাণ্ড (Spinal Cord)", "পিটুইটারি গ্রন্থি", "হাইপোথ্যালামাস"],
            answer: 1,
            explain: "সুষুম্নাকাণ্ডের রিলে নিউরন মুহূর্তেই হাত সরিয়ে নেওয়ার নির্দেশ পাঠায়।",
          },
          {
            q: "করোটির ভেতরে মস্তিষ্ককে ধাক্কা থেকে রক্ষা করে কোন তরল?",
            options: ["প্লাজমা", "লসিকা", "সেরিব্রোস্পাইনাল ফ্লুইড (CSF)", "পিত্তরস"],
            answer: 2,
            explain: "CSF তরল বালিশের মতো মস্তিষ্ককে বাইরের আঘাত থেকে বাঁচায়।",
          },
        ],
      },

      neuronSec: {
        title: "নিউরন ও সাইন্যাপস — 3D ফ্লিপ ল্যাব",
        subtitle:
          "সামনের পিঠ: নিউরনের অংশ ও বৈদ্যুতিক আবেগ • কার্ড উল্টান (Flip) এবং সাইন্যাপসের রাসায়নিক প্রক্রিয়া দেখুন",
        flipMain: "কার্ড উল্টান: নিউরন ↔ সাইন্যাপস",
        frontBadge: "সামনে • নিউরনের গঠন ও বৈদ্যুতিক আবেগ",
        flipToSynapse: "সাইন্যাপস প্রক্রিয়া দেখুন",
        fireImpulse: "স্নায়ুআবেগ পাঠান (Fire Signal!)",
        neuronPrompt:
          "অ্যানিমেশনে হাইলাইট দেখতে ও কাজ বুঝতে নিচের যেকোনো অংশে ট্যাপ করুন:",
        backBadge: "পিছনে • সাইন্যাপস প্রক্রিয়া (রাসায়নিক সেতু)",
        flipToNeuron: "নিউরনে ফিরে যান",
        fireSynapse: "সাইন্যাপস সংকেত চালান (রাসায়নিক ক্ষরণ!)",
        synapsePrompt:
          "দুটি নিউরনের মাঝের সূক্ষ্ম ফাঁকা স্থান কীভাবে সংকেত পার হয়, ৪টি সহজ ধাপে দেখুন:",
        lessonTab: "নিউরন ও সাইন্যাপস পাঠ (শ্রেণি ৯–১০)",
        quizTab: "নিউরন ও সাইন্যাপস কুইজ",
        analogyLabel: "সহজ উদাহরণ",
        canvasNeuronHud: "বৈদ্যুতিক আবেগ: ডেনড্রাইট → কোষদেহ → অ্যাক্সন (লাফিয়ে) → প্রান্তবুরুশ",
        canvasSynapseStepHud: [
          "ধাপ ১: বৈদ্যুতিক আবেগ অ্যাক্সনের প্রান্তবুরুশে পৌঁছায়",
          "ধাপ ২: সাইন্যাপটিক থলি খুলে নিউরোট্রান্সমিটার ক্ষরণ করে",
          "ধাপ ৩: রাসায়নিক অণু সাইন্যাপটিক ফাঁক (Cleft) পার হয়",
          "ধাপ ৪: গ্রাহকে যুক্ত হয়ে পরের নিউরনে নতুন আবেগ তৈরি করে!",
        ],
      },
      neuronParts: {
        dendrite: {
          name: "ডেনড্রাইট",
          en: "Dendrites",
          role: "সংকেত গ্রহণকারী শাখা",
          analogy: "টিভি অ্যান্টেনার মতো যা পাশের নিউরন বা ইন্দ্রিয় থেকে সংকেত ধরে।",
          summary: "কোষদেহ থেকে বেরোনো গাছের ডালের মতো প্রবর্ধক যা রাসায়নিক সংকেত গ্রহণ করে বৈদ্যুতিক আবেগ তৈরি করে।",
        },
        soma: {
          name: "কোষদেহ (সাইটন)",
          en: "Cell Body / Soma",
          role: "বিপাকীয় নিয়ন্ত্রণ কেন্দ্র",
          analogy: "কম্পিউটারের মাদারবোর্ডের মতো যা সব সংকেত একত্রিত করে।",
          summary: "তারকাকৃতি প্রধান অংশ যাতে সাইটোপ্লাজম, নিজল দানা ও মাইটোকন্ড্রিয়া থাকে।",
        },
        nucleus: {
          name: "নিউক্লিয়াস",
          en: "Nucleus",
          role: "জিনগত কেন্দ্র",
          analogy: "অপারেটিং সিস্টেমের মতো যা কোষের সব নির্দেশনা ধরে রাখে।",
          summary: "কোষদেহের কেন্দ্রে অবস্থিত বড় নিউক্লিয়াস। পরিণত নিউরন বিভাজিত হয় না।",
        },
        axon: {
          name: "অ্যাক্সন",
          en: "Axon",
          role: "দীর্ঘ সংকেত পরিবাহী তার",
          analogy: "হাই-স্পিড ফাইবার তারের মতো যা মেরুদণ্ড থেকে পায়ের আঙুল পর্যন্ত বিদ্যুৎ পাঠায়।",
          summary: "একটি লম্বা নলাকার তন্তু (১ মিটার পর্যন্ত) যা আবেগকে কোষদেহ থেকে প্রান্তবুরুশে নিয়ে যায়।",
        },
        myelin: {
          name: "মায়েলিন আবরণী",
          en: "Myelin Sheath",
          role: "চর্বিযুক্ত অন্তরক স্তর",
          analogy: "বিদ্যুতের তারের প্লাস্টিক কভারের মতো যা সংকেতের গতি বহুগুণ বাড়িয়ে দেয়।",
          summary: "শোয়ান কোষ নির্মিত সাদা আবরণী, যা আবেগের গতি সেকেন্ডে ১২০ মিটার পর্যন্ত করে।",
        },
        ranvier: {
          name: "র‍্যানভিয়রের পর্ব",
          en: "Nodes of Ranvier",
          role: "গতিবর্ধক ফাঁকা অংশ",
          analogy: "নদী পার হওয়ার পাথরের মতো যার ওপর দিয়ে আবেগ লাফিয়ে দ্রুত এগোয়।",
          summary: "মায়েলিন খণ্ডের মাঝের ক্ষুদ্র ফাঁকা স্থান, যেখানে আবেগ লাফিয়ে (Saltatory Conduction) চলে।",
        },
        terminal: {
          name: "প্রান্তবুরুশ",
          en: "Axon Terminals",
          role: "রাসায়নিক প্রেরক প্রান্ত",
          analogy: "ডাকঘরের মতো যা ফাঁকা স্থান পার করার জন্য রাসায়নিক চিঠি ছাড়ে।",
          summary: "অ্যাক্সনের শেষের স্ফীত শাখা যেখানে নিউরোট্রান্সমিটার ভর্তি সাইন্যাপটিক থলি থাকে।",
        },
      },
      synapseSteps: {
        step1: {
          name: "১. আবেগের আগমন",
          en: "Presynaptic Terminal",
          role: "বৈদ্যুতিক সংকেত প্রান্তে পৌঁছায়",
          analogy: "দ্রুতগামী ট্রেন নদীর পাড়ে এসে থামল যেখানে রেললাইন শেষ—এখন খেয়ানৌকা দরকার।",
          summary: "দুটি নিউরন কখনোই সরাসরি ছুঁয়ে থাকে না, তাই বিদ্যুৎ সরাসরি মাঝের ফাঁক লাফিয়ে পার হতে পারে না।",
        },
        step2: {
          name: "২. থলি খুলে ক্ষরণ",
          en: "Neurotransmitter Release",
          role: "বৈদ্যুতিক → রাসায়নিক রূপান্তর",
          analogy: "ট্রেন আসামাত্র ঘাটের দরজা খুলে অসংখ্য ছোট নৌকা ছেড়ে দেওয়া হলো।",
          summary: "বৈদ্যুতিক আবেগে সাইন্যাপটিক থলি পর্দার সাথে মিশে নিউরোট্রান্সমিটার (যেমন অ্যাসিটাইলকোলিন) ক্ষরণ করে।",
        },
        step3: {
          name: "৩. ফাঁক অতিক্রম",
          en: "Synaptic Cleft",
          role: "~২০ ন্যানোমিটার সূক্ষ্ম ফাঁক",
          analogy: "নৌকাগুলো সরু নদী পার হয়ে ওপারে পৌঁছে গেল।",
          summary: "নিউরোট্রান্সমিটার অণুগুলো ব্যাপন প্রক্রিয়ায় সাইন্যাপটিক ফাঁক পেরিয়ে পরের নিউরনের ডেনড্রাইটে পৌঁছায়।",
        },
        step4: {
          name: "৪. গ্রাহকে যুক্ত হওয়া",
          en: "Postsynaptic Firing",
          role: "রাসায়নিক → নতুন বৈদ্যুতিক আবেগ",
          analogy: "চাবি তালায় বসতেই ওপারের রেললাইনে নতুন ট্রেন চালু হয়ে গেল!",
          summary: "রাসায়নিক অণু পরের নিউরনের গ্রাহকে যুক্ত হয়ে নতুন বৈদ্যুতিক আবেগ সৃষ্টি করে।",
        },
      },
      nsLesson: {
        heading: "শ্রেণি ৯–১০ মূল নোটস: নিউরন ও সাইন্যাপস",
        sections: [
          {
            title: "১. নিউরন কী?",
            html: `<p><strong>নিউরন (স্নায়ুকোষ)</strong> হলো স্নায়ুতন্ত্রের গঠনগত ও কার্যগত একক—এটি মানবদেহের <strong>দীর্ঘতম কোষ</strong> (প্রায় ১ মিটার)।</p>`,
          },
          {
            title: "২. আবেগের দিক (সর্বদা একমুখী!)",
            html: `<div class="detail-fact" style="margin-top:4px"><strong>ডেনড্রাইট → কোষদেহ → অ্যাক্সন → প্রান্তবুরুশ → (সাইন্যাপস) → পরের নিউরনের ডেনড্রাইট</strong></div>
            <p style="margin-top:8px">সংকেত উল্টোদিকে যায় না কেন? কারণ নিউরোট্রান্সমিটার থাকে শুধু অ্যাক্সন প্রান্তে আর গ্রাহক থাকে শুধু ডেনড্রাইটে।</p>`,
          },
          {
            title: "৩. বৈদ্যুতিক বনাম রাসায়নিক সংকেত",
            html: `<p>• <strong>নিউরনের ভেতরে:</strong> দ্রুত বৈদ্যুতিক আবেগ (মায়েলিন আবরণী গতি বাড়ায়)।<br/>• <strong>সাইন্যাপসে:</strong> রাসায়নিক সংকেত (নিউরোট্রান্সমিটার)।</p>`,
          },
        ],
      },
      nsQuiz: {
        title: "নিউরন ও সাইন্যাপস কুইজ",
        correctMsg: "দারুণ! প্রক্রিয়াটি স্পষ্ট হয়েছে।",
        wrongMsg: "সঠিক নয় — নিচের ব্যাখ্যাটি দেখুন।",
        nextBtn: "পরবর্তী প্রশ্ন",
        restartBtn: "আবার শুরু করুন",
        scoreLabel: "স্কোর",
        questions: [
          {
            q: "দুটি নিউরনের মাঝের সূক্ষ্ম কার্যগত ফাঁকা স্থানকে কী বলে?",
            options: ["মায়েলিন আবরণী", "সাইন্যাপস (Synapse)", "র‍্যানভিয়রের পর্ব", "অ্যাক্সন"],
            answer: 1,
            explain: "এক নিউরনের অ্যাক্সন প্রান্ত ও পরের নিউরনের ডেনড্রাইটের সংযোগস্থলকে সাইন্যাপস বলে।",
          },
          {
            q: "নিউরনের কোন অংশ বাইরের বা আগের নিউরনের সংকেত গ্রহণ করে?",
            options: ["প্রান্তবুরুশ", "মায়েলিন", "ডেনড্রাইট (Dendrites)", "নিউক্লিয়াস"],
            answer: 2,
            explain: "ডেনড্রাইট অ্যান্টেনার মতো সংকেত গ্রহণ করে কোষদেহে পাঠায়।",
          },
          {
            q: "সাইন্যাপসের ফাঁকা স্থান সংকেত কীভাবে পার হয়?",
            options: ["সরাসরি বিদ্যুৎ ঝলকে", "নিউরোট্রান্সমিটার নামক রাসায়নিক পদার্থের মাধ্যমে", "রক্তের মাধ্যমে", "পেশী সংকোচনে"],
            answer: 1,
            explain: "সাইন্যাপসে বৈদ্যুতিক আবেগ নিউরোট্রান্সমিটার রাসায়নিকে রূপান্তরিত হয়ে ফাঁক পার হয়।",
          },
          {
            q: "মায়েলিন আবরণীর (Myelin Sheath) প্রধান কাজ কী?",
            options: ["জীবাণু ধ্বংস", "অ্যাক্সনকে অন্তরিত করে স্নায়ুআবেগের গতি বাড়ানো", "DNA সঞ্চয়", "রক্ত পাম্প করা"],
            answer: 1,
            explain: "মায়েলিন আবরণী র‍্যানভিয়রের পর্বের মাধ্যমে আবেগের গতি অনেক বাড়িয়ে দেয়।",
          },
          {
            q: "সাইন্যাপসে স্নায়ুআবেগ সর্বদা একদিকে প্রবাহিত হয় কেন?",
            options: [
              "অভিকর্ষের কারণে",
              "কারণ নিউরোট্রান্সমিটার শুধু প্রান্তবুরুশ থেকে বেরোয় এবং গ্রাহক শুধু ডেনড্রাইটে থাকে",
              "অ্যাক্সন মোটা হয়",
              "করোটি উল্টো প্রবাহ আটকায়",
            ],
            answer: 1,
            explain: "একদিকে ক্ষরণ ও অন্যদিকে গ্রাহক থাকায় সাইন্যাপস একমুখী কপাটিকার মতো কাজ করে।",
          },
        ],
      },
    },
  };

  // Pin coordinates (percentage on 420x440 brain canvas)
  const BRAIN_PINS = [
    { id: "frontal", x: 30.0, y: 34.0, tone: "arterial" },
    { id: "parietal", x: 56.0, y: 24.0, tone: "venous" },
    { id: "occipital", x: 78.0, y: 42.0, tone: "electric" },
    { id: "temporal", x: 48.0, y: 50.0, tone: "venous" },
    { id: "hypothalamus", x: 47.0, y: 38.0, tone: "electric" },
    { id: "cerebellum", x: 70.0, y: 63.0, tone: "arterial" },
    { id: "brainstem", x: 54.0, y: 74.0, tone: "venous" },
  ];

  const REFLEX_PINS = [
    { id: "receptor", x: 18.0, y: 27.0, tone: "arterial" },
    { id: "sensory", x: 48.0, y: 20.0, tone: "venous" },
    { id: "spinal", x: 79.0, y: 46.0, tone: "electric" },
    { id: "motor", x: 48.0, y: 66.0, tone: "arterial" },
    { id: "effector", x: 18.0, y: 62.0, tone: "arterial" },
  ];

  // Reflex Arc polyline paths on 420x440 canvas
  const REFLEX_SENSORY_PATH = [
    [76, 120],
    [146, 92],
    [224, 88],
    [296, 128],
    [326, 178],
  ];
  const REFLEX_RELAY_PATH = [
    [326, 178],
    [336, 202],
    [326, 232],
  ];
  const REFLEX_MOTOR_PATH = [
    [326, 232],
    [292, 272],
    [220, 294],
    [140, 290],
    [78, 274],
  ];

  const ui = {
    view: "brain", // "brain" | "reflex"
    freqLevel: 2, // 1..4
    paused: false,
    showPins: true,
    selectedBrainHotspot: "frontal",
    selectedReflexHotspot: "receptor",
    brainTab: "inspect", // "inspect" | "lesson" | "quiz"
    brainQ: 0,
    brainOpt: null,
    brainScore: 0,
    brainQuizDone: false,

    // Section 2: 3D Flippable Neuron <-> Synapse
    isFlipped: false,
    neuronPaused: false,
    selectedNeuronPart: "dendrite",
    selectedSynapseStep: "step1",
    nsTab: "lesson", // "lesson" | "quiz"
    nsQ: 0,
    nsOpt: null,
    nsScore: 0,
    nsQuizDone: false,

    // Active impulses for interactive firing
    neuronPulses: [0.15],
    synapsePhase: 0, // 0..1 continuous cycle
  };

  function getND() {
    const lang = BL.getState().lang;
    return NERV_DICT[lang] || NERV_DICT.en;
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

  // =========================================================
  // RENDERING UI PANELS (BRAIN + NEURON/SYNAPSE FLIP CARD)
  // =========================================================
  function renderBrainPins() {
    const layer = document.getElementById("brain-pins-layer");
    if (!layer) return;
    const nd = getND();
    const isBrain = ui.view === "brain";
    const pins = isBrain ? BRAIN_PINS : REFLEX_PINS;
    const dictMap = isBrain ? nd.brainHotspots : nd.reflexHotspots;
    const selId = isBrain ? ui.selectedBrainHotspot : ui.selectedReflexHotspot;

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
        if (isBrain) ui.selectedBrainHotspot = pin.id;
        else ui.selectedReflexHotspot = pin.id;
        ui.brainTab = "inspect";
        syncNervousUI();
      });

      layer.appendChild(btn);
    });
  }

  function renderBrainReader() {
    const bodyEl = document.getElementById("brain-reader-body");
    if (!bodyEl) return;
    const nd = getND();

    document.querySelectorAll("#brain-reader-panel .tab-btn").forEach((b) => {
      b.classList.toggle("active", b.getAttribute("data-brain-tab") === ui.brainTab);
    });

    bodyEl.innerHTML = "";

    if (ui.brainTab === "inspect") {
      const hint = document.createElement("p");
      hint.className = "heart-subtitle";
      hint.textContent = nd.selectPrompt;
      bodyEl.appendChild(hint);

      const isBrain = ui.view === "brain";
      const dictMap = isBrain ? nd.brainHotspots : nd.reflexHotspots;
      const selId = isBrain ? ui.selectedBrainHotspot : ui.selectedReflexHotspot;

      const pillsWrap = document.createElement("div");
      pillsWrap.className = "part-pills";
      Object.keys(dictMap).forEach((id) => {
        const item = dictMap[id];
        const pill = document.createElement("button");
        pill.type = "button";
        pill.className = `part-pill${selId === id ? " active" : ""}`;
        pill.textContent = item.name;
        pill.addEventListener("click", () => {
          if (isBrain) ui.selectedBrainHotspot = id;
          else ui.selectedReflexHotspot = id;
          syncNervousUI();
        });
        pillsWrap.appendChild(pill);
      });
      bodyEl.appendChild(pillsWrap);

      const cur = dictMap[selId] || Object.values(dictMap)[0];
      const box = document.createElement("div");
      box.className = "detail-box";
      box.innerHTML = `
        <span class="detail-type">${cur.division}</span>
        <h2 class="detail-title">${BL.term(cur)}</h2>
        <p class="detail-summary">${cur.summary}</p>
        <div class="detail-fact">💡 ${cur.keyFact}</div>
      `;
      bodyEl.appendChild(box);
    } else if (ui.brainTab === "lesson") {
      const heading = document.createElement("h2");
      heading.className = "detail-title";
      heading.style.marginTop = "0";
      heading.textContent = nd.brainLesson.heading;
      bodyEl.appendChild(heading);

      nd.brainLesson.sections.forEach((sec) => {
        const card = document.createElement("div");
        card.className = "chapter-sec";
        card.innerHTML = `<h3>${sec.title}</h3><div style="margin-top:6px;font-size:13.5px;line-height:1.68">${sec.html}</div>`;
        bodyEl.appendChild(card);
      });
    } else if (ui.brainTab === "quiz") {
      renderQuizInto(bodyEl, nd.brainQuiz, "brain");
    }
  }

  function renderFlipCardDetails() {
    const nd = getND();

    // Front Face: Neuron Parts Chips & Detail
    const nChips = document.getElementById("neuron-parts-chips");
    const nDetail = document.getElementById("neuron-part-detail");
    if (nChips && nDetail) {
      nChips.innerHTML = "";
      Object.keys(nd.neuronParts).forEach((pid) => {
        const item = nd.neuronParts[pid];
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `part-pill${ui.selectedNeuronPart === pid ? " active" : ""}`;
        btn.textContent = item.name;
        btn.addEventListener("click", () => {
          ui.selectedNeuronPart = pid;
          renderFlipCardDetails();
        });
        nChips.appendChild(btn);
      });

      const curPart = nd.neuronParts[ui.selectedNeuronPart] || nd.neuronParts.dendrite;
      nDetail.innerHTML = `
        <span class="detail-type">${curPart.role}</span>
        <h3 class="detail-title">${BL.term(curPart)}</h3>
        <p class="detail-summary">${curPart.summary}</p>
        <div class="detail-fact">✨ <strong>${nd.neuronSec.analogyLabel}:</strong> ${curPart.analogy}</div>
      `;
    }

    // Back Face: Synapse 4-Step Chips & Detail
    const sChips = document.getElementById("synapse-steps-chips");
    const sDetail = document.getElementById("synapse-step-detail");
    if (sChips && sDetail) {
      sChips.innerHTML = "";
      const stepOrder = ["step1", "step2", "step3", "step4"];
      stepOrder.forEach((sid, idx) => {
        const item = nd.synapseSteps[sid];
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `part-pill${ui.selectedSynapseStep === sid ? " active" : ""}`;
        btn.textContent = item.name;
        btn.addEventListener("click", () => {
          ui.selectedSynapseStep = sid;
          ui.synapsePhase = idx * 0.25 + 0.02;
          renderFlipCardDetails();
        });
        sChips.appendChild(btn);
      });

      const curStep = nd.synapseSteps[ui.selectedSynapseStep] || nd.synapseSteps.step1;
      sDetail.innerHTML = `
        <span class="detail-type">${curStep.role}</span>
        <h3 class="detail-title">${BL.term(curStep)}</h3>
        <p class="detail-summary">${curStep.summary}</p>
        <div class="detail-fact">✨ <strong>${nd.neuronSec.analogyLabel}:</strong> ${curStep.analogy}</div>
      `;
    }
  }

  function renderNSReader() {
    const bodyEl = document.getElementById("ns-reader-body");
    if (!bodyEl) return;
    const nd = getND();

    document.querySelectorAll("#ns-reader-panel .tab-btn").forEach((b) => {
      b.classList.toggle("active", b.getAttribute("data-ns-tab") === ui.nsTab);
    });

    bodyEl.innerHTML = "";
    if (ui.nsTab === "lesson") {
      const h = document.createElement("h3");
      h.className = "detail-title";
      h.style.marginTop = "0";
      h.textContent = nd.nsLesson.heading;
      bodyEl.appendChild(h);

      nd.nsLesson.sections.forEach((sec) => {
        const card = document.createElement("div");
        card.className = "chapter-sec";
        card.innerHTML = `<h3>${sec.title}</h3><div style="margin-top:6px;font-size:13.5px;line-height:1.68">${sec.html}</div>`;
        bodyEl.appendChild(card);
      });
    } else {
      renderQuizInto(bodyEl, nd.nsQuiz, "ns");
    }
  }

  function renderQuizInto(container, quizObj, prefix) {
    const qs = quizObj.questions;
    const qIdx = prefix === "brain" ? ui.brainQ : ui.nsQ;
    const selOpt = prefix === "brain" ? ui.brainOpt : ui.nsOpt;
    const score = prefix === "brain" ? ui.brainScore : ui.nsScore;
    const done = prefix === "brain" ? ui.brainQuizDone : ui.nsQuizDone;

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
          if (prefix === "brain") {
            ui.brainQ = 0;
            ui.brainOpt = null;
            ui.brainScore = 0;
            ui.brainQuizDone = false;
            renderBrainReader();
          } else {
            ui.nsQ = 0;
            ui.nsOpt = null;
            ui.nsScore = 0;
            ui.nsQuizDone = false;
            renderNSReader();
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
        if (prefix === "brain") {
          ui.brainOpt = idx;
          if (idx === cur.answer) ui.brainScore += 1;
          renderBrainReader();
        } else {
          ui.nsOpt = idx;
          if (idx === cur.answer) ui.nsScore += 1;
          renderNSReader();
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
          if (prefix === "brain") {
            if (ui.brainQ + 1 < qs.length) {
              ui.brainQ += 1;
              ui.brainOpt = null;
            } else {
              ui.brainQuizDone = true;
            }
            renderBrainReader();
          } else {
            if (ui.nsQ + 1 < qs.length) {
              ui.nsQ += 1;
              ui.nsOpt = null;
            } else {
              ui.nsQuizDone = true;
            }
            renderNSReader();
          }
        });
      }
    }
  }

  function syncNervousUI() {
    const nd = getND();
    const setText = (id, txt) => {
      const el = document.getElementById(id);
      if (el) el.textContent = txt;
    };

    // Header & Section 1 Labels
    setText("nerv-chapter-badge", nd.chapterBadge);
    setText("nerv-title", nd.title);
    setText("nerv-subtitle", nd.subtitle);
    setText("lbl-view-brain", nd.views.brain);
    setText("lbl-view-reflex", nd.views.reflex);
    setText("lbl-nerv-pins", nd.toggles.pins);

    setText("lbl-m-speed", nd.metrics.speed);
    setText("lbl-m-freq", nd.metrics.freq);
    setText("lbl-m-mode", nd.metrics.mode);
    setText("lbl-m-lobe", nd.metrics.lobe);
    setText("lbl-freq-control", nd.freqControl);

    setText("tab-brain-inspect", nd.tabs.inspect);
    setText("tab-brain-lesson", nd.tabs.lesson);
    setText("tab-brain-quiz", nd.tabs.quiz);

    // Preset labels & live telemetry
    const presetIds = ["preset-sleep", "preset-focus", "preset-alert", "preset-reflex"];
    nd.presets.forEach((pr, idx) => {
      setText(presetIds[idx], pr.label);
    });
    const curPreset = nd.presets[ui.freqLevel - 1] || nd.presets[1];
    setText("metric-speed", String(curPreset.speed));
    setText("metric-freq", String(curPreset.hz));
    setText("freq-pill", curPreset.badge);

    const slider = document.getElementById("freq-slider");
    if (slider && document.activeElement !== slider) slider.value = String(ui.freqLevel);

    document.querySelectorAll("[data-freq]").forEach((b) => {
      b.classList.toggle("active", Number(b.getAttribute("data-freq")) === ui.freqLevel);
    });

    // Active Region & Control Center Telemetry
    if (ui.view === "brain") {
      const sel = nd.brainHotspots[ui.selectedBrainHotspot] || nd.brainHotspots.frontal;
      setText("metric-lobe", sel.name);
      const isHind = ["cerebellum", "brainstem"].includes(ui.selectedBrainHotspot);
      setText("metric-mode", isHind ? nd.metrics.hindbrain : nd.metrics.forebrain);
    } else {
      const sel = nd.reflexHotspots[ui.selectedReflexHotspot] || nd.reflexHotspots.receptor;
      setText("metric-lobe", sel.name);
      setText("metric-mode", nd.metrics.spinalCenter);
    }

    // View buttons
    const btnBrain = document.getElementById("btn-view-brain");
    const btnReflex = document.getElementById("btn-view-reflex");
    if (btnBrain) {
      btnBrain.classList.toggle("active-accent", ui.view === "brain");
      btnBrain.setAttribute("aria-pressed", String(ui.view === "brain"));
    }
    if (btnReflex) {
      btnReflex.classList.toggle("active-accent", ui.view === "reflex");
      btnReflex.setAttribute("aria-pressed", String(ui.view === "reflex"));
    }

    const pauseBtn = document.getElementById("btn-nerv-pause");
    if (pauseBtn) {
      pauseBtn.innerHTML = ui.paused
        ? `▶ <span>${nd.toggles.play}</span>`
        : `⏸ <span>${nd.toggles.pause}</span>`;
    }

    const pinsBtn = document.getElementById("btn-nerv-pins");
    if (pinsBtn) {
      pinsBtn.classList.toggle("active-accent", ui.showPins);
      pinsBtn.setAttribute("aria-pressed", String(ui.showPins));
    }

    // Section 2: Flippable Neuron <-> Synapse Labels
    setText("neuron-sec-title", nd.neuronSec.title);
    setText("neuron-sec-subtitle", nd.neuronSec.subtitle);
    setText("lbl-flip-main", nd.neuronSec.flipMain);
    setText("lbl-front-badge", nd.neuronSec.frontBadge);
    setText("lbl-flip-to-synapse", nd.neuronSec.flipToSynapse);
    setText("lbl-fire-impulse", nd.neuronSec.fireImpulse);
    setText("lbl-neuron-prompt", nd.neuronSec.neuronPrompt);
    setText("lbl-back-badge", nd.neuronSec.backBadge);
    setText("lbl-flip-to-neuron", nd.neuronSec.flipToNeuron);
    setText("lbl-fire-synapse", nd.neuronSec.fireSynapse);
    setText("lbl-synapse-prompt", nd.neuronSec.synapsePrompt);
    setText("tab-ns-lesson", nd.neuronSec.lessonTab);
    setText("tab-ns-quiz", nd.neuronSec.quizTab);

    const nPauseBtn = document.getElementById("btn-neuron-pause");
    if (nPauseBtn) {
      nPauseBtn.innerHTML = ui.neuronPaused
        ? `▶ <span>${nd.toggles.play}</span>`
        : `⏸ <span>${nd.toggles.pause}</span>`;
    }

    const flipCard = document.getElementById("neuron-flip-card");
    const flipMainBtn = document.getElementById("btn-flip-main");
    if (flipCard) flipCard.classList.toggle("is-flipped", ui.isFlipped);
    if (flipMainBtn) flipMainBtn.setAttribute("aria-pressed", String(ui.isFlipped));

    renderBrainPins();
    renderBrainReader();
    renderFlipCardDetails();
    renderNSReader();
  }

  // =========================================================
  // CANVAS 1: 60 FPS BRAIN LOBES & REFLEX ARC ENGINE (420x440)
  // =========================================================
  function startBrainCanvas() {
    const canvas = document.getElementById("brain-canvas");
    const box = document.getElementById("brain-canvas-box");
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

    function drawBrainView(ctx, isLight, nd) {
      const sel = ui.selectedBrainHotspot;
      const curPreset = nd.presets[ui.freqLevel - 1] || nd.presets[1];
      const pulse = (Math.sin(elapsed * (2.5 + ui.freqLevel * 1.4)) + 1) / 2;

      const drawLobe = (id, pathFn, baseCol, strokeCol) => {
        const isSel = sel === id;
        ctx.save();
        pathFn();
        ctx.fillStyle = baseCol;
        ctx.globalAlpha = isSel ? 0.52 + pulse * 0.22 : 0.22;
        ctx.fill();
        ctx.globalAlpha = isSel ? 1 : 0.55;
        ctx.strokeStyle = strokeCol;
        ctx.lineWidth = isSel ? 3 : 1.6;
        if (isSel && !isLight) {
          ctx.shadowColor = strokeCol;
          ctx.shadowBlur = 16;
        }
        ctx.stroke();
        ctx.restore();
      };

      // 1. Brainstem (Pons & Medulla)
      drawLobe(
        "brainstem",
        () => {
          ctx.beginPath();
          ctx.moveTo(208, 224);
          ctx.quadraticCurveTo(234, 240, 240, 294);
          ctx.lineTo(250, 352);
          ctx.lineTo(224, 356);
          ctx.lineTo(212, 292);
          ctx.quadraticCurveTo(194, 260, 208, 224);
          ctx.closePath();
        },
        "#52bed6",
        isLight ? "#2c88a8" : "#67e8f9"
      );

      // 2. Cerebellum (Little Brain with Arbor Vitae folds)
      drawLobe(
        "cerebellum",
        () => {
          ctx.beginPath();
          ctx.moveTo(240, 232);
          ctx.bezierCurveTo(298, 226, 344, 250, 336, 288);
          ctx.bezierCurveTo(328, 318, 272, 320, 242, 292);
          ctx.closePath();
        },
        "#e0637d",
        isLight ? "#c24b65" : "#fda4af"
      );
      // Cerebellum fine horizontal ridges
      ctx.save();
      ctx.strokeStyle = isLight ? "rgba(194,75,101,0.45)" : "rgba(255,228,235,0.35)";
      ctx.lineWidth = 1.2;
      for (let y = 250; y <= 296; y += 9) {
        ctx.beginPath();
        ctx.moveTo(256, y);
        ctx.quadraticCurveTo(292, y - 4, 326, y + 2);
        ctx.stroke();
      }
      ctx.restore();

      // 3. Frontal Lobe (Left-Front)
      drawLobe(
        "frontal",
        () => {
          ctx.beginPath();
          ctx.moveTo(204, 62);
          ctx.bezierCurveTo(132, 62, 74, 110, 74, 174);
          ctx.bezierCurveTo(74, 214, 102, 232, 146, 224);
          ctx.quadraticCurveTo(176, 200, 196, 176);
          ctx.quadraticCurveTo(208, 124, 204, 62);
          ctx.closePath();
        },
        "#e0637d",
        isLight ? "#c24b65" : "#ff6b8b"
      );

      // 4. Parietal Lobe (Upper-Back)
      drawLobe(
        "parietal",
        () => {
          ctx.beginPath();
          ctx.moveTo(204, 62);
          ctx.bezierCurveTo(266, 62, 314, 90, 330, 142);
          ctx.quadraticCurveTo(280, 166, 248, 178);
          ctx.lineTo(196, 176);
          ctx.quadraticCurveTo(208, 124, 204, 62);
          ctx.closePath();
        },
        "#68b8e6",
        isLight ? "#2b7eb3" : "#7dd3fc"
      );

      // 5. Occipital Lobe (Far Back)
      drawLobe(
        "occipital",
        () => {
          ctx.beginPath();
          ctx.moveTo(330, 142);
          ctx.bezierCurveTo(356, 176, 356, 224, 326, 242);
          ctx.quadraticCurveTo(284, 244, 260, 228);
          ctx.lineTo(248, 178);
          ctx.quadraticCurveTo(286, 162, 330, 142);
          ctx.closePath();
        },
        "#dfb052",
        isLight ? "#b58428" : "#fde047"
      );

      // 6. Temporal Lobe (Lower-Middle Side)
      drawLobe(
        "temporal",
        () => {
          ctx.beginPath();
          ctx.moveTo(146, 224);
          ctx.quadraticCurveTo(178, 192, 248, 178);
          ctx.lineTo(260, 228);
          ctx.bezierCurveTo(234, 256, 166, 264, 140, 242);
          ctx.closePath();
        },
        "#52bed6",
        isLight ? "#2c88a8" : "#67e8f9"
      );

      // 7. Hypothalamus (Deep Central Core)
      drawLobe(
        "hypothalamus",
        () => {
          ctx.beginPath();
          ctx.ellipse(198, 174, 16, 12, -0.2, 0, Math.PI * 2);
        },
        "#dfb052",
        isLight ? "#b58428" : "#fef08a"
      );

      // Subtle Gyri / Sulci Cortical Folds Overlay
      ctx.save();
      ctx.strokeStyle = isLight ? "rgba(22,34,53,0.18)" : "rgba(255,255,255,0.22)";
      ctx.lineWidth = 1.6;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(106, 146);
      ctx.quadraticCurveTo(136, 124, 164, 146);
      ctx.moveTo(118, 184);
      ctx.quadraticCurveTo(150, 172, 176, 192);
      ctx.moveTo(228, 96);
      ctx.quadraticCurveTo(264, 108, 288, 134);
      ctx.moveTo(278, 188);
      ctx.quadraticCurveTo(306, 196, 326, 212);
      ctx.moveTo(176, 226);
      ctx.quadraticCurveTo(208, 218, 236, 232);
      ctx.stroke();
      ctx.restore();

      // Firing Neural Sparks inside the Selected Region
      const pinObj = BRAIN_PINS.find((p) => p.id === sel) || BRAIN_PINS[0];
      const cx = (pinObj.x / 100) * 420;
      const cy = (pinObj.y / 100) * 440;
      ctx.save();
      for (let i = 0; i < 6; i++) {
        const ang = elapsed * (1.8 + ui.freqLevel * 0.6) + (i / 6) * Math.PI * 2;
        const dist = 10 + Math.sin(elapsed * 4 + i * 2) * 14;
        const sx = cx + Math.cos(ang) * dist;
        const sy = cy + Math.sin(ang) * dist * 0.75;
        ctx.fillStyle = "#fef08a";
        ctx.globalAlpha = 0.55 + Math.sin(elapsed * 8 + i) * 0.4;
        ctx.beginPath();
        ctx.arc(sx, sy, 2.4, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // Live EEG Brainwave Strip (Bottom HUD)
      const eegTop = 378;
      const eegH = 46;
      ctx.save();
      ctx.fillStyle = isLight ? "rgba(15,23,42,0.05)" : "rgba(4,10,20,0.75)";
      ctx.strokeStyle = isLight ? "rgba(15,23,42,0.12)" : "rgba(104,184,230,0.22)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(16, eegTop, 388, eegH, 10);
      ctx.fill();
      ctx.stroke();

      ctx.strokeStyle = isLight ? "#b58428" : "#dfb052";
      ctx.lineWidth = 2;
      ctx.beginPath();
      const cycles = 2 + ui.freqLevel * 2.2;
      for (let i = 0; i <= 110; i++) {
        const r = i / 110;
        const x = 26 + r * 368;
        const wave =
          Math.sin(r * Math.PI * 2 * cycles - elapsed * (4 + ui.freqLevel * 2.5)) * 11 +
          Math.sin(r * Math.PI * 2 * cycles * 1.9 + elapsed * 3) * 4;
        const y = eegTop + 23 + wave;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      ctx.font = "700 9.5px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = isLight ? "#556982" : "#8ca4c0";
      ctx.textAlign = "right";
      ctx.fillText(`EEG • ${curPreset.badge}`, 394, eegTop + 14);
      ctx.restore();
    }

    function drawReflexView(ctx, isLight, nd) {
      const venColor = isLight ? "#2c88a8" : "#52bed6";
      const artColor = isLight ? "#c24b65" : "#e0637d";
      const elecColor = isLight ? "#b58428" : "#fbbf24";
      const textCol = isLight ? "#162235" : "#e6effa";

      // 1. Spinal Cord Cross-Section (Right Side with H-Shaped Gray Matter)
      ctx.save();
      ctx.fillStyle = isLight ? "rgba(226,232,240,0.9)" : "rgba(24,38,60,0.92)";
      ctx.strokeStyle = isLight ? "#64748b" : "#68b8e6";
      ctx.lineWidth = 2.4;
      ctx.beginPath();
      ctx.ellipse(336, 204, 58, 72, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Butterfly Gray Matter
      ctx.fillStyle = isLight ? "rgba(100,116,139,0.35)" : "rgba(104,184,230,0.28)";
      ctx.beginPath();
      ctx.moveTo(318, 168);
      ctx.quadraticCurveTo(336, 188, 354, 168);
      ctx.quadraticCurveTo(364, 204, 354, 240);
      ctx.quadraticCurveTo(336, 220, 318, 240);
      ctx.quadraticCurveTo(308, 204, 318, 168);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // 2. Skin Receptor + Heat Flame Stimulus (Top Left)
      ctx.save();
      const flicker = Math.sin(elapsed * 12) * 3;
      ctx.fillStyle = "#f97316";
      ctx.beginPath();
      ctx.moveTo(46, 152);
      ctx.quadraticCurveTo(30, 126, 46, 102 + flicker);
      ctx.quadraticCurveTo(62, 126, 46, 152);
      ctx.fill();
      ctx.fillStyle = "#fde047";
      ctx.beginPath();
      ctx.moveTo(46, 148);
      ctx.quadraticCurveTo(38, 132, 46, 118 + flicker * 0.5);
      ctx.quadraticCurveTo(54, 132, 46, 148);
      ctx.fill();

      // Skin Receptor Pad
      ctx.fillStyle = isLight ? "rgba(251,146,60,0.28)" : "rgba(251,146,60,0.25)";
      ctx.strokeStyle = "#fb923c";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(62, 104, 28, 34, 8);
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      // 3. Sensory Neuron (Top Curve: Receptor -> Spinal Cord)
      ctx.save();
      ctx.strokeStyle = venColor;
      ctx.lineWidth = 5;
      ctx.lineCap = "round";
      drawSmoothCurve(ctx, REFLEX_SENSORY_PATH);
      ctx.stroke();

      // Relay Neuron inside Spinal Cord
      ctx.strokeStyle = elecColor;
      ctx.lineWidth = 4;
      drawSmoothCurve(ctx, REFLEX_RELAY_PATH);
      ctx.stroke();

      // Motor Neuron (Bottom Curve: Spinal Cord -> Effector Muscle)
      ctx.strokeStyle = artColor;
      ctx.lineWidth = 5;
      drawSmoothCurve(ctx, REFLEX_MOTOR_PATH);
      ctx.stroke();
      ctx.restore();

      // 4. Effector Muscle (Bottom Left — Flexes when motor signal arrives!)
      const cycle = (elapsed * (0.28 + ui.freqLevel * 0.08)) % 1;
      const flex = cycle > 0.78 ? Math.sin(((cycle - 0.78) / 0.22) * Math.PI) : 0;

      ctx.save();
      ctx.translate(64, 274);
      ctx.scale(1 + flex * 0.14, 1 - flex * 0.12);
      ctx.fillStyle = isLight ? "rgba(194,75,101,0.34)" : "rgba(224,99,125,0.42)";
      ctx.strokeStyle = artColor;
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.ellipse(0, 0, 34, 18, 0.15, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      // 5. Traveling Golden Action Potential Pulse along Full Reflex Arc
      let px = 76;
      let py = 120;
      let activeLabel = nd.reflexHotspots.receptor.name;
      if (cycle < 0.42) {
        [px, py] = samplePolyline(REFLEX_SENSORY_PATH, cycle / 0.42);
        activeLabel = nd.reflexHotspots.sensory.name;
      } else if (cycle < 0.54) {
        [px, py] = samplePolyline(REFLEX_RELAY_PATH, (cycle - 0.42) / 0.12);
        activeLabel = nd.reflexHotspots.spinal.name;
      } else if (cycle < 0.92) {
        [px, py] = samplePolyline(REFLEX_MOTOR_PATH, (cycle - 0.54) / 0.38);
        activeLabel = nd.reflexHotspots.motor.name;
      } else {
        px = 64;
        py = 274;
        activeLabel = nd.reflexHotspots.effector.name;
      }

      ctx.save();
      const glow = ctx.createRadialGradient(px, py, 2, px, py, 16);
      glow.addColorStop(0, "#fef08a");
      glow.addColorStop(1, "rgba(251,191,36,0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(px, py, 16, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(px, py, 4.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Bottom Live Reflex Step HUD
      ctx.save();
      ctx.fillStyle = isLight ? "rgba(15,23,42,0.05)" : "rgba(4,10,20,0.75)";
      ctx.strokeStyle = isLight ? "rgba(15,23,42,0.12)" : "rgba(104,184,230,0.22)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(16, 378, 388, 46, 10);
      ctx.fill();
      ctx.stroke();

      ctx.font = "700 11px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = textCol;
      ctx.textAlign = "center";
      ctx.fillText(`⚡ ${activeLabel}`, 210, 405);
      ctx.restore();
    }

    function frame(now) {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      if (!ui.paused) elapsed += dt;

      const isLight = BL.getState().theme === "light";
      const nd = getND();

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform((width / 420) * dpr, 0, 0, (height / 440) * dpr, 0, 0);

      if (ui.view === "brain") {
        drawBrainView(ctx, isLight, nd);
      } else {
        drawReflexView(ctx, isLight, nd);
      }

      requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
    void ro;
  }

  // =========================================================
  // CANVAS 2: 60 FPS NEURON & SALTATORY CONDUCTION (460x300)
  // =========================================================
  function startNeuronCanvas() {
    const canvas = document.getElementById("neuron-canvas");
    const box = document.getElementById("neuron-canvas-box");
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
    let autoTimer = 0;

    function frame(now) {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      if (!ui.neuronPaused) {
        elapsed += dt;
        autoTimer += dt;
        if (autoTimer > 3.2) {
          autoTimer = 0;
          ui.neuronPulses.push(0);
        }
        ui.neuronPulses = ui.neuronPulses
          .map((t) => t + dt * 0.42)
          .filter((t) => t <= 1.05);
      }

      const isLight = BL.getState().theme === "light";
      const nd = getND();
      const sel = ui.selectedNeuronPart;
      const accent = isLight ? "#2b7eb3" : "#68b8e6";
      const gold = isLight ? "#b58428" : "#fbbf24";
      const rose = isLight ? "#c24b65" : "#e0637d";
      const textCol = isLight ? "#162235" : "#e6effa";

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform((width / 460) * dpr, 0, 0, (height / 300) * dpr, 0, 0);

      // 1. Branching Dendrites (Left of Soma)
      ctx.save();
      ctx.strokeStyle = sel === "dendrite" ? gold : accent;
      ctx.lineWidth = sel === "dendrite" ? 3.5 : 2.3;
      ctx.lineCap = "round";
      const dendBranches = [
        [[86, 134], [52, 94], [26, 78]],
        [[52, 94], [48, 62]],
        [[82, 144], [38, 128], [18, 118]],
        [[80, 152], [36, 166], [20, 182]],
        [[88, 164], [58, 198], [34, 214]],
        [[58, 198], [62, 226]],
      ];
      dendBranches.forEach((pts) => {
        drawSmoothCurve(ctx, pts);
        ctx.stroke();
      });
      ctx.restore();

      // 2. Long Axon Wire (x = 122 -> 386)
      ctx.save();
      ctx.strokeStyle = sel === "axon" ? gold : accent;
      ctx.lineWidth = sel === "axon" ? 6 : 4.2;
      ctx.beginPath();
      ctx.moveTo(122, 148);
      ctx.lineTo(386, 148);
      ctx.stroke();
      ctx.restore();

      // 3. Myelin Sheath Segments (4 Insulating Pads) + Nodes of Ranvier Gaps
      const myelinX = [148, 206, 264, 322];
      myelinX.forEach((mx) => {
        ctx.save();
        ctx.fillStyle =
          sel === "myelin"
            ? isLight ? "rgba(181,132,40,0.34)" : "rgba(251,191,36,0.36)"
            : isLight ? "rgba(43,126,179,0.22)" : "rgba(104,184,230,0.26)";
        ctx.strokeStyle = sel === "myelin" ? gold : isLight ? "#2b7eb3" : "#7dd3fc";
        ctx.lineWidth = sel === "myelin" ? 2.6 : 1.6;
        ctx.beginPath();
        ctx.roundRect(mx, 134, 44, 28, 11);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      });

      // Highlight Nodes of Ranvier if selected
      const nodeXs = [199, 257, 315];
      if (sel === "ranvier") {
        nodeXs.forEach((nx) => {
          ctx.save();
          ctx.strokeStyle = gold;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(nx, 148, 10 + Math.sin(elapsed * 6) * 2, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        });
      }

      // 4. Cell Body (Soma) & Nucleus
      ctx.save();
      ctx.fillStyle =
        sel === "soma"
          ? isLight ? "rgba(181,132,40,0.34)" : "rgba(251,191,36,0.32)"
          : isLight ? "rgba(43,126,179,0.24)" : "rgba(104,184,230,0.28)";
      ctx.strokeStyle = sel === "soma" ? gold : accent;
      ctx.lineWidth = sel === "soma" ? 3 : 2;
      ctx.beginPath();
      ctx.ellipse(104, 148, 26, 24, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Nucleus
      ctx.fillStyle = sel === "nucleus" ? gold : rose;
      ctx.globalAlpha = 0.85;
      ctx.beginPath();
      ctx.arc(103, 148, sel === "nucleus" ? 11.5 : 9.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // 5. Axon Terminals (Right Branching Knobs)
      ctx.save();
      ctx.strokeStyle = sel === "terminal" ? gold : rose;
      ctx.lineWidth = sel === "terminal" ? 3.2 : 2.2;
      ctx.lineCap = "round";
      const termTips = [
        [434, 102],
        [442, 132],
        [442, 164],
        [434, 194],
      ];
      termTips.forEach(([tx, ty]) => {
        ctx.beginPath();
        ctx.moveTo(386, 148);
        ctx.quadraticCurveTo(412, (148 + ty) / 2, tx, ty);
        ctx.stroke();

        ctx.fillStyle = sel === "terminal" ? gold : rose;
        ctx.beginPath();
        ctx.arc(tx, ty, 5.2, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();

      // 6. Live Animated Electrical Impulses (Saltatory Jumping!)
      ui.neuronPulses.forEach((t) => {
        let px = 30;
        let py = 148;
        if (t < 0.22) {
          // Dendrite -> Soma
          const lt = t / 0.22;
          px = 34 + lt * 70;
          py = 128 + lt * 20;
        } else if (t < 0.86) {
          // Saltatory Jump along Axon Nodes!
          const lt = (t - 0.22) / 0.64;
          px = 122 + lt * 264;
          const jumpArc = Math.abs(Math.sin(lt * Math.PI * 4)) * 22;
          py = 148 - jumpArc;
        } else {
          // Axon Terminals flash
          const lt = (t - 0.86) / 0.14;
          px = 386 + lt * 54;
          py = 148;
        }

        ctx.save();
        const g = ctx.createRadialGradient(px, py, 2, px, py, 16);
        g.addColorStop(0, "#fef08a");
        g.addColorStop(1, "rgba(251,191,36,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(px, py, 16, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(px, py, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Bottom HUD Label
      ctx.save();
      ctx.fillStyle = isLight ? "rgba(15,23,42,0.05)" : "rgba(4,10,20,0.75)";
      ctx.strokeStyle = isLight ? "rgba(15,23,42,0.12)" : "rgba(104,184,230,0.22)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(14, 248, 432, 38, 9);
      ctx.fill();
      ctx.stroke();

      ctx.font = "700 10px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = textCol;
      ctx.textAlign = "center";
      ctx.fillText(`⚡ ${nd.neuronSec.canvasNeuronHud}`, 230, 271);
      ctx.restore();

      requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
    void ro;
  }

  // =========================================================
  // CANVAS 3: 60 FPS SYNAPSE MECHANISM ZOOM (460x300)
  // =========================================================
  function startSynapseCanvas() {
    const canvas = document.getElementById("synapse-canvas");
    const box = document.getElementById("synapse-canvas-box");
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
    let lastAutoStep = "step1";

    function frame(now) {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      if (!ui.neuronPaused) {
        ui.synapsePhase = (ui.synapsePhase + dt * 0.16) % 1;
      }

      const p = ui.synapsePhase;
      const stepIdx = p < 0.25 ? 0 : p < 0.5 ? 1 : p < 0.75 ? 2 : 3;
      const stepKey = `step${stepIdx + 1}`;
      if (stepKey !== lastAutoStep && ui.isFlipped) {
        lastAutoStep = stepKey;
        ui.selectedSynapseStep = stepKey;
        renderFlipCardDetails();
      }

      const isLight = BL.getState().theme === "light";
      const nd = getND();
      const accent = isLight ? "#2b7eb3" : "#68b8e6";
      const rose = isLight ? "#c24b65" : "#e0637d";
      const gold = isLight ? "#b58428" : "#fbbf24";
      const mint = "#56c99b";
      const textCol = isLight ? "#162235" : "#e6effa";

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform((width / 460) * dpr, 0, 0, (height / 300) * dpr, 0, 0);

      // Synaptic Cleft Fluid Zone (Center Gap x = 188..272)
      ctx.save();
      ctx.fillStyle = isLight ? "rgba(43,126,179,0.06)" : "rgba(104,184,230,0.08)";
      ctx.fillRect(184, 34, 92, 200);
      ctx.font = "700 9.5px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = isLight ? "#556982" : "#8ca4c0";
      ctx.textAlign = "center";
      ctx.fillText("SYNAPTIC CLEFT (20 nm)", 230, 50);
      ctx.restore();

      // 1. Presynaptic Axon Terminal Bulb (Left)
      ctx.save();
      ctx.fillStyle = isLight ? "rgba(194,75,101,0.18)" : "rgba(224,99,125,0.22)";
      ctx.strokeStyle = rose;
      ctx.lineWidth = 2.6;
      ctx.beginPath();
      ctx.moveTo(14, 108);
      ctx.lineTo(94, 108);
      ctx.bezierCurveTo(132, 62, 188, 66, 188, 134);
      ctx.bezierCurveTo(188, 202, 132, 206, 94, 160);
      ctx.lineTo(14, 160);
      ctx.stroke();
      ctx.fill();
      ctx.restore();

      // 2. Postsynaptic Dendrite Membrane (Right)
      ctx.save();
      ctx.fillStyle = isLight ? "rgba(43,126,179,0.18)" : "rgba(104,184,230,0.22)";
      ctx.strokeStyle = accent;
      ctx.lineWidth = 2.6;
      ctx.beginPath();
      ctx.moveTo(446, 106);
      ctx.lineTo(356, 106);
      ctx.bezierCurveTo(318, 68, 272, 72, 272, 134);
      ctx.bezierCurveTo(272, 196, 318, 200, 356, 162);
      ctx.lineTo(446, 162);
      ctx.stroke();
      ctx.fill();
      ctx.restore();

      // 3. Shaped Receptor Locks on Postsynaptic Membrane (Right)
      const receptorYs = [100, 124, 148, 172];
      receptorYs.forEach((ry) => {
        ctx.save();
        ctx.fillStyle = stepIdx === 3 ? gold : accent;
        ctx.beginPath();
        ctx.roundRect(264, ry - 7, 14, 14, 4);
        ctx.fill();
        ctx.restore();
      });

      // 4. Stage 1: Electrical Impulse Arriving Down Left Axon
      if (p < 0.3) {
        const t1 = Math.min(1, p / 0.25);
        const ex = 22 + t1 * 124;
        ctx.save();
        const eg = ctx.createRadialGradient(ex, 134, 2, ex, 134, 18);
        eg.addColorStop(0, "#fef08a");
        eg.addColorStop(1, "rgba(251,191,36,0)");
        ctx.fillStyle = eg;
        ctx.beginPath();
        ctx.arc(ex, 134, 18, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // 5. Stage 2: Synaptic Vesicles Moving to Membrane Edge
      const vesProgress = p < 0.25 ? 0 : Math.min(1, (p - 0.25) / 0.22);
      const vesYs = [104, 134, 164];
      vesYs.forEach((vy) => {
        const vx = 136 + vesProgress * 40;
        ctx.save();
        ctx.strokeStyle = mint;
        ctx.fillStyle = "rgba(86,201,155,0.22)";
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.arc(vx, vy, 11, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Tiny neurotransmitter dots inside vesicle
        ctx.fillStyle = mint;
        ctx.beginPath();
        ctx.arc(vx - 3, vy - 2, 2.2, 0, Math.PI * 2);
        ctx.arc(vx + 3, vy + 2, 2.2, 0, Math.PI * 2);
        ctx.arc(vx, vy - 4, 2.0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // 6. Stage 3 & 4: Neurotransmitters Crossing Cleft & Locking into Receptors
      if (p >= 0.42) {
        const crossT = Math.min(1, (p - 0.42) / 0.34);
        receptorYs.forEach((ry, idx) => {
          const startY = vesYs[idx % vesYs.length];
          const nx = 186 + crossT * 78;
          const ny = startY + (ry - startY) * crossT + Math.sin(crossT * Math.PI * 2 + idx) * 6;
          ctx.save();
          ctx.fillStyle = crossT > 0.92 ? gold : mint;
          ctx.beginPath();
          ctx.arc(nx, ny, 4.2, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        });
      }

      // 7. Stage 4: Brand-New Electrical Impulse Firing Down Postsynaptic Neuron!
      if (p >= 0.74) {
        const t4 = (p - 0.74) / 0.26;
        const fx = 286 + t4 * 150;
        ctx.save();
        const fg = ctx.createRadialGradient(fx, 134, 2, fx, 134, 18);
        fg.addColorStop(0, "#fef08a");
        fg.addColorStop(1, "rgba(251,191,36,0)");
        ctx.fillStyle = fg;
        ctx.beginPath();
        ctx.arc(fx, 134, 18, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(fx, 134, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Bottom Live Step HUD
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
      ctx.fillText(nd.neuronSec.canvasSynapseStepHud[stepIdx], 230, 271);
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
    // Section 1 Controls
    const btnBrain = document.getElementById("btn-view-brain");
    const btnReflex = document.getElementById("btn-view-reflex");
    if (btnBrain) {
      btnBrain.addEventListener("click", () => {
        ui.view = "brain";
        syncNervousUI();
      });
    }
    if (btnReflex) {
      btnReflex.addEventListener("click", () => {
        ui.view = "reflex";
        syncNervousUI();
      });
    }

    const pauseBtn = document.getElementById("btn-nerv-pause");
    if (pauseBtn) {
      pauseBtn.addEventListener("click", () => {
        ui.paused = !ui.paused;
        syncNervousUI();
      });
    }

    const pinsBtn = document.getElementById("btn-nerv-pins");
    if (pinsBtn) {
      pinsBtn.addEventListener("click", () => {
        ui.showPins = !ui.showPins;
        syncNervousUI();
      });
    }

    const slider = document.getElementById("freq-slider");
    if (slider) {
      slider.addEventListener("input", (e) => {
        ui.freqLevel = Math.max(1, Math.min(4, Number(e.target.value) || 2));
        syncNervousUI();
      });
    }

    document.querySelectorAll("[data-freq]").forEach((b) => {
      b.addEventListener("click", () => {
        ui.freqLevel = Number(b.getAttribute("data-freq")) || 2;
        syncNervousUI();
      });
    });

    document.querySelectorAll("#brain-reader-panel .tab-btn").forEach((b) => {
      b.addEventListener("click", () => {
        ui.brainTab = b.getAttribute("data-brain-tab");
        renderBrainReader();
      });
    });

    // Section 2: 3D Flip Card Controls
    const toggleFlip = (forceState) => {
      ui.isFlipped = typeof forceState === "boolean" ? forceState : !ui.isFlipped;
      if (ui.isFlipped) ui.synapsePhase = 0;
      syncNervousUI();
    };

    const btnFlipMain = document.getElementById("btn-flip-main");
    const btnFlipSyn = document.getElementById("btn-flip-to-synapse");
    const btnFlipNeu = document.getElementById("btn-flip-to-neuron");
    if (btnFlipMain) btnFlipMain.addEventListener("click", () => toggleFlip());
    if (btnFlipSyn) btnFlipSyn.addEventListener("click", () => toggleFlip(true));
    if (btnFlipNeu) btnFlipNeu.addEventListener("click", () => toggleFlip(false));

    const btnNPause = document.getElementById("btn-neuron-pause");
    if (btnNPause) {
      btnNPause.addEventListener("click", () => {
        ui.neuronPaused = !ui.neuronPaused;
        syncNervousUI();
      });
    }

    const btnFireImp = document.getElementById("btn-fire-impulse");
    if (btnFireImp) {
      btnFireImp.addEventListener("click", () => {
        ui.neuronPaused = false;
        ui.neuronPulses.push(0);
      });
    }

    const btnFireSyn = document.getElementById("btn-fire-synapse");
    if (btnFireSyn) {
      btnFireSyn.addEventListener("click", () => {
        ui.neuronPaused = false;
        ui.synapsePhase = 0;
        ui.selectedSynapseStep = "step1";
        renderFlipCardDetails();
      });
    }

    document.querySelectorAll("#ns-reader-panel .tab-btn").forEach((b) => {
      b.addEventListener("click", () => {
        ui.nsTab = b.getAttribute("data-ns-tab");
        renderNSReader();
      });
    });

    syncNervousUI();
    BL.subscribe(syncNervousUI);

    startBrainCanvas();
    startNeuronCanvas();
    startSynapseCanvas();
  });
})();