import { Module, CodeExample } from './types';

export const COURSE_CONTENT: Module[] = [
  {
    id: 'mod-a',
    title: 'Module A: The Big Picture',
    slides: [
      {
        id: 'a-1',
        title: 'Welcome to QuantumQuest',
        content: [
          "Welcome! This is a journey into the subatomic world of computing.",
          "Quantum computing isn't just 'faster' computing—it's a completely different way of processing information.",
          "We use the laws of physics (quantum mechanics) to solve problems impossible for supercomputers.",
          "No PhD required. Just curiosity."
        ],
        visualType: 'bloch'
      },
      {
        id: 'a-2',
        title: 'Why Should You Care?',
        content: [
          "Classical computers (like your laptop) struggle with specific types of complexity.",
          "Quantum computers could revolutionize:",
          "• Drug Discovery: Simulating molecules exactly.",
          "• Finance: Optimizing massive portfolios.",
          "• Cryptography: Breaking current security (and making new, unhackable keys)."
        ],
        visualType: 'none'
      },
      {
        id: 'a-3',
        title: 'Conceptual Shift',
        content: [
          "Classical: Deterministic. A bit is 0 OR 1. Like a light switch.",
          "Quantum: Probabilistic. A qubit can be 0 AND 1 at the same time (sort of).",
          "It's like a coin spinning on a table—it's heads and tails until you stop it.",
          "We manipulate these spinning coins to perform calculation."
        ],
        visualType: 'bloch'
      },
      {
        id: 'a-4',
        title: 'The Road Ahead',
        content: [
          "We will cover 7 main areas:",
          "1. Quantum Mechanics Basics",
          "2. Quantum in Nature (Biology)",
          "3. Quantum Hardware (The Machines)",
          "4. Computation & Logic",
          "5. Qubits & Gates",
          "6. Algorithms",
          "7. The Quantum Future"
        ],
        visualType: 'none'
      }
    ],
    quiz: [
      {
        id: 'mod-a-q1',
        question: 'What makes quantum computing fundamentally different from classical computing?',
        options: [
          'It simply runs the same logic gates at a higher clock speed',
          'It uses qubits that can exist in superpositions instead of only 0 or 1',
          'It stores data on hard disks instead of RAM',
          'It only works at room temperature'
        ],
        correctIndex: 1,
        explanation: 'Quantum computers use qubits that can be in superpositions and entangled, enabling new kinds of algorithms beyond faster classical gates.'
      },
      {
        id: 'mod-a-q2',
        question: 'Which of the following is a realistic application area for quantum computing?',
        options: [
          'Rendering 4K video faster in a browser',
          'Improving Wi‑Fi signal strength',
          'Simulating complex molecules for drug discovery',
          'Replacing all cloud servers for web apps'
        ],
        correctIndex: 2,
        explanation: 'Quantum computers are especially promising for simulating quantum systems like molecules, which are hard for classical computers.'
      },
      {
        id: 'mod-a-q3',
        question: 'Why is quantum computing often described as a “big conceptual shift” rather than just an incremental improvement?',
        options: [
          'Because it uses larger servers in data centers',
          'Because it is programmed in a different language than classical computers',
          'Because it relies on quantum mechanics with probabilistic states instead of deterministic bits',
          'Because it replaces CPUs with GPUs'
        ],
        correctIndex: 2,
        explanation: 'Quantum computation leverages superposition, interference and entanglement, which changes how we think about information and algorithms.'
      },
      {
        id: 'mod-a-q4',
        question: 'Which field is LEAST likely to be transformed by quantum computing according to the introduction?',
        options: [
          'Drug discovery',
          'Large-scale financial optimization',
          'Classical web page layout rendering',
          'Cryptography and secure communication'
        ],
        correctIndex: 2,
        explanation: 'The intro highlights chemistry, finance and cryptography; rendering web pages is a classical graphics/UX task.'
      },
      {
        id: 'mod-a-q5',
        question: 'From a learning perspective, what is the key requirement emphasized in Module A to start your quantum journey?',
        options: [
          'A PhD in physics',
          'A deep background in abstract algebra',
          'Access to a physical quantum computer',
          'Curiosity and willingness to build intuition'
        ],
        correctIndex: 3,
        explanation: 'The course stresses that you do not need a PhD—curiosity and intuition-building are enough to begin.'
      }
    ]
  },
  {
    id: 'mod-b',
    title: 'Module B: Quantum Basics',
    slides: [
      {
        id: 'b-1',
        title: 'Schrödinger’s Cat',
        content: [
          "A famous thought experiment by Erwin Schrödinger.",
          "A cat is in a box with a radioactive atom that might kill it.",
          "Until we open the box, quantum mechanics says the cat is BOTH dead and alive.",
          "This is 'Superposition'.",
          "Observation forces nature to 'choose' a state."
        ],
        visualType: 'cat'
      },
      {
        id: 'b-2',
        title: 'Particles vs. Waves',
        content: [
          "In our world, things are particles (solid) or waves (ripples).",
          "In the quantum world, everything is both.",
          "Light is a wave, but also hits like a particle (photon).",
          "Electrons are particles, but interfere like waves."
        ],
        visualType: 'double-slit'
      },
      {
        id: 'b-3',
        title: 'The Double Slit Experiment: Setup',
        content: [
          "Imagine firing marbles at a wall with two slits.",
          "You'd expect two piles of marbles behind the slits.",
          "Now, imagine water waves hitting the slits.",
          "The waves ripple out and overlap, creating an 'interference pattern' (many bands)."
        ],
        visualType: 'double-slit',
        visualProps: { mode: 'classical' }
      },
      {
        id: 'b-4',
        title: 'Double Slit: The Quantum Surprise',
        content: [
          "If we fire single electrons (particles) one by one...",
          "They arrive as single dots.",
          "BUT, over time, they form an interference pattern (bands) like a wave!",
          "The electron goes through 'both' slits at once."
        ],
        visualType: 'double-slit',
        visualProps: { mode: 'quantum' }
      },
      {
        id: 'b-5',
        title: 'Measurement Kills the Magic',
        content: [
          "What if we put a sensor to see which slit the electron actually went through?",
          "Nature behaves differently when watched.",
          "The wave function 'collapses'.",
          "The interference pattern disappears, and we get two piles again.",
          "Observation affects reality."
        ],
        visualType: 'double-slit',
        visualProps: { mode: 'observer' }
      },
      {
        id: 'b-6',
        title: 'Superposition',
        content: [
          "Superposition is the ability to be in multiple states at once.",
          "Mathematically, it's a linear combination: a|0⟩ + b|1⟩.",
          "It's not 'either/or', it's a weighted blend.",
          "This allows parallel processing on a massive scale."
        ],
        visualType: 'bloch'
      },
      {
        id: 'b-7',
        title: 'Entanglement: Spooky Action',
        content: [
          "Einstein called this 'Spooky action at a distance'.",
          "Two particles can become linked.",
          "Measure one, and the other INSTANTLY changes to match, no matter how far apart.",
          "There is no hidden wire. They share a single quantum existence."
        ],
        visualType: 'circuit',
        visualProps: { demo: 'entanglement' }
      },
      {
        id: 'b-8',
        title: 'Interference',
        content: [
          "Quantum states have 'phases' (like waves have peaks and troughs).",
          "Positive amplitudes can cancel out negative amplitudes.",
          "Constructive Interference: Increases probability of right answer.",
          "Destructive Interference: Cancels out wrong answers.",
          "This is how quantum algorithms actually work."
        ],
        visualType: 'none'
      },
      {
        id: 'b-9',
        title: 'Tunneling',
        content: [
          "A quantum particle can pass through a barrier it shouldn't be able to cross.",
          "It 'borrows' energy to jump the wall, then pays it back.",
          "Classical computers use this for SSDs.",
          "Quantum computers use it for optimization (finding the lowest valley)."
        ],
        visualType: 'none'
      },
      {
        id: 'b-10',
        title: 'Probabilities',
        content: [
          "We never know the outcome with 100% certainty until we measure.",
          "We calculate probabilities based on the 'Amplitude'.",
          "Probability = Amplitude squared.",
          "Programming a QC is about manipulating amplitudes to make the right answer likely."
        ],
        visualType: 'bloch'
      }
    ],
    quiz: [
      {
        id: 'mod-b-q1',
        question: 'In the double-slit experiment, why is the interference pattern surprising?',
        options: [
          'Because particles never hit the screen',
          'Because single particles build up a wave-like pattern over time',
          'Because the slits randomly open and close',
          'Because the screen moves during the experiment'
        ],
        correctIndex: 1,
        explanation: 'Even when fired one-by-one, particles form an interference pattern, revealing underlying wave-like behavior.'
      },
      {
        id: 'mod-b-q2',
        question: 'What does “measurement collapses the wavefunction” mean?',
        options: [
          'The particle physically shrinks',
          'The probability distribution becomes a definite outcome when we observe it',
          'The experiment stops working',
          'The particle disappears permanently'
        ],
        correctIndex: 1,
        explanation: 'Before measurement, a quantum state is a distribution over possibilities. Measurement yields a single outcome and destroys the previous superposition.'
      },
      {
        id: 'mod-b-q3',
        question: 'Entanglement is best described as:',
        options: [
          'Two particles orbiting each other like planets',
          'A signal traveling faster than light',
          'A shared quantum state where measuring one instantly determines the other',
          'A classical radio communication channel'
        ],
        correctIndex: 2,
        explanation: 'Entangled systems share a single quantum state; their outcomes are correlated beyond what classical variables can explain.'
      },
      {
        id: 'mod-b-q4',
        question: 'Which statement about superposition is most accurate?',
        options: [
          'A qubit in superposition is rapidly switching between 0 and 1',
          'A qubit in superposition has a well-defined hidden value we cannot see',
          'A qubit in superposition is described by a combination of basis states with amplitudes',
          'Superposition only exists in thought experiments, not in real systems'
        ],
        correctIndex: 2,
        explanation: 'Mathematically, superposition is a linear combination of basis states with complex amplitudes; measurement samples from the resulting probabilities.'
      },
      {
        id: 'mod-b-q5',
        question: 'What role does phase play in quantum interference?',
        options: [
          'It only changes the color of photons',
          'It determines whether amplitudes add or cancel, affecting probabilities',
          'It controls the temperature of the quantum device',
          'It is only relevant in classical wave theory, not quantum mechanics'
        ],
        correctIndex: 1,
        explanation: 'Relative phases between components of a superposition determine whether paths interfere constructively or destructively.'
      }
    ]
  },
  {
    id: 'mod-bio',
    title: 'Module C: Quantum In Nature',
    slides: [
      {
        id: 'bio-1',
        title: 'Is Nature Quantum?',
        content: [
          "For a long time, physicists thought quantum effects were too fragile for biology.",
          "Biological systems are warm and wet (noisy).",
          "Quantum states usually require absolute zero temperature.",
          "But Nature has had billions of years to optimize."
        ],
        visualType: 'none'
      },
      {
        id: 'bio-2',
        title: 'Photosynthesis',
        content: [
          "Plants turn sunlight into chemical energy with 95%+ efficiency.",
          "How does the energy find the reaction center so quickly without getting lost?",
          "It doesn't take one path.",
          "It takes ALL paths simultaneously (Superposition) to find the most efficient route."
        ],
        visualType: 'biology-photo'
      },
      {
        id: 'bio-3',
        title: 'Quantum Coherence in Plants',
        content: [
          "This phenomenon is called 'Quantum Coherence'.",
          "The exciton (energy packet) behaves like a wave washing over the plant structure.",
          "It instantly collapses at the most efficient destination.",
          "If plants used random walking (classical), they would be far less efficient."
        ],
        visualType: 'biology-photo'
      },
      {
        id: 'bio-4',
        title: 'Bird Navigation',
        content: [
          "European Robins migrate thousands of miles.",
          "They can effectively 'see' the Earth's magnetic field.",
          "The leading theory involves 'Radical Pairs' in their eyes.",
          "Two entangled electrons are created by light hitting the retina."
        ],
        visualType: 'biology-bird'
      },
      {
        id: 'bio-5',
        title: 'The Chemical Compass',
        content: [
          "These entangled electrons are sensitive to magnetic fields.",
          "The Earth's weak field alters the spin of the electrons.",
          "This changes chemical reactions in the bird's eye.",
          "The bird sees a heads-up display of North and South."
        ],
        visualType: 'biology-bird'
      },
      {
        id: 'bio-6',
        title: 'Enzymes & Tunneling',
        content: [
          "Enzymes speed up chemical reactions in your body.",
          "Some reactions require moving protons across barriers.",
          "Classical physics says this should be slow.",
          "Quantum Tunneling allows protons to 'teleport' through the barrier, speeding up life itself."
        ],
        visualType: 'none'
      },
      {
        id: 'bio-7',
        title: 'Quantum Olfaction (Smell)',
        content: [
          "How do we distinguish thousands of smells?",
          "Shape theory (lock and key) doesn't explain everything.",
          "Vibration theory suggests our nose detects the 'vibrational frequency' of molecules.",
          "Electrons tunnel across the odorant molecule if it vibrates at the right frequency.",
          "Our nose might be a quantum spectrometer."
        ],
        visualType: 'none'
      }
    ],
    quiz: [
      {
        id: 'mod-bio-q1',
        question: 'Why do scientists think quantum effects might play a role in photosynthesis?',
        options: [
          'Because plants operate at absolute zero',
          'Because energy seems to explore many paths at once to find the most efficient route',
          'Because photons never interact with plant molecules',
          'Because chlorophyll is a superconductor'
        ],
        correctIndex: 1,
        explanation: 'Quantum coherence could let excitations sample many paths simultaneously, increasing transport efficiency.'
      },
      {
        id: 'mod-bio-q2',
        question: 'The “chemical compass” hypothesis for bird navigation involves:',
        options: [
          'Tiny magnets implanted in the bird’s beak',
          'Entangled electron spins in radical pairs affected by Earth’s magnetic field',
          'GPS receivers embedded in bird feathers',
          'Purely classical electrical currents in nerves'
        ],
        correctIndex: 1,
        explanation: 'Radical pair models suggest entangled electron spins respond sensitively to weak magnetic fields, acting like a quantum compass.'
      },
      {
        id: 'mod-bio-q3',
        question: 'What challenge do warm, wet biological environments pose for quantum effects?',
        options: [
          'They perfectly preserve coherence indefinitely',
          'They introduce noise and decoherence that usually destroy fragile quantum states',
          'They prevent any interaction between molecules',
          'They stop tunneling from occurring'
        ],
        correctIndex: 1,
        explanation: 'Thermal noise and interactions normally destroy coherence quickly; seeing quantum effects in biology is therefore surprising and interesting.'
      },
      {
        id: 'mod-bio-q4',
        question: 'Quantum tunneling in enzymes helps explain:',
        options: [
          'Why enzymes are poor catalysts at body temperature',
          'How protons can effectively “teleport” through energy barriers and speed up reactions',
          'Why chemical reactions never complete',
          'Why enzymes only work at absolute zero'
        ],
        correctIndex: 1,
        explanation: 'Tunneling allows particles to traverse classically forbidden barriers, increasing reaction rates beyond classical expectations.'
      },
      {
        id: 'mod-bio-q5',
        question: 'Quantum olfaction suggests our sense of smell may depend on:',
        options: [
          'Only the macroscopic shape of molecules',
          'The color of light absorbed by molecules',
          'The vibrational frequencies of molecules and electron tunneling',
          'The electric charge of the entire body'
        ],
        correctIndex: 2,
        explanation: 'In vibration theory, electrons tunnel when molecular vibrations match certain frequencies, giving smell a quantum flavor.'
      }
    ]
  },
  {
    id: 'mod-hw',
    title: 'Module D: Quantum Hardware',
    slides: [
      {
        id: 'hw-1',
        title: 'How do we build one?',
        content: [
          "Building a qubit is incredibly hard.",
          "It must be isolated from the universe to prevent decoherence.",
          "But we must also be able to control it.",
          "There are several competing technologies."
        ],
        visualType: 'hardware-chip'
      },
      {
        id: 'hw-2',
        title: 'Superconducting Qubits',
        content: [
          "Used by IBM and Google.",
          "Tiny loops of superconducting metal (zero resistance).",
          "They behave like artificial atoms.",
          "Pros: Fast control, solid state.",
          "Cons: Extremely sensitive to noise, require millikelvin temperatures."
        ],
        visualType: 'hardware-chip'
      },
      {
        id: 'hw-3',
        title: 'The Golden Chandelier',
        content: [
          "You've seen the gold hanging computers.",
          "That is NOT the computer. That is the fridge.",
          "It's a 'Dilution Refrigerator'.",
          "It cools the chip at the bottom to near absolute zero (colder than outer space)."
        ],
        visualType: 'hardware-chip'
      },
      {
        id: 'hw-4',
        title: 'Trapped Ions',
        content: [
          "Used by IonQ and Honeywell.",
          "Actual individual atoms hovering in a vacuum.",
          "Held in place by electric fields.",
          "Manipulated with lasers.",
          "Pros: Very stable, identical qubits (nature made them).",
          "Cons: Slow operation speeds."
        ],
        visualType: 'hardware-ion'
      },
      {
        id: 'hw-5',
        title: 'Photonic Quantum Computing',
        content: [
          "Using particles of light (photons) as qubits.",
          "Pros: Works at room temperature! No giant fridges.",
          "Cons: Photons don't like to interact with each other, making 2-qubit gates hard.",
          "Companies like Xanadu are leading this approach."
        ],
        visualType: 'none'
      },
      {
        id: 'hw-6',
        title: 'Topological Qubits',
        content: [
          "The holy grail of hardware (Microsoft is working on this).",
          "Uses quasiparticles called 'Anyons'.",
          "Information is braided into the path of the particles.",
          "Extremely resistant to noise by design.",
          "Has not been fully experimentally proven yet."
        ],
        visualType: 'none'
      },
      {
        id: 'hw-7',
        title: 'Decoherence: The Enemy',
        content: [
          "Quantum states are fragile.",
          "Vibration, heat, or stray radiation causes 'Decoherence'.",
          "The qubit loses its quantum magic and becomes a regular bit.",
          "This happens in microseconds.",
          "The race is to calculate before the system crashes."
        ],
        visualType: 'none'
      },
      {
        id: 'hw-8',
        title: 'Physical vs Logical Qubits',
        content: [
          "Because individual qubits are noisy, we need Error Correction.",
          "We might need 1,000 'Physical Qubits' to create 1 stable 'Logical Qubit'.",
          "A logical qubit distributes information across many physical ones to survive errors.",
          "This is the current engineering hurdle."
        ],
        visualType: 'none'
      }
    ],
    quiz: [
      {
        id: 'mod-hw-q1',
        question: 'Why do superconducting qubits need to be cooled to extremely low temperatures?',
        options: [
          'To make the chip physically smaller',
          'To reduce thermal noise and preserve fragile quantum states',
          'To increase the voltage of classical control signals',
          'To prevent photons from escaping the chip'
        ],
        correctIndex: 1,
        explanation: 'Millikelvin temperatures suppress thermal excitations that would otherwise quickly decohere superconducting qubits.'
      },
      {
        id: 'mod-hw-q2',
        question: 'Which hardware platform uses individual atoms held in place by electric fields?',
        options: [
          'Superconducting qubits',
          'Photonic quantum computers',
          'Trapped ions',
          'Topological qubits'
        ],
        correctIndex: 2,
        explanation: 'Trapped ion systems confine single ions in vacuum using electromagnetic fields and manipulate them with lasers.'
      },
      {
        id: 'mod-hw-q3',
        question: 'What is the main advantage of photonic quantum computing highlighted in the module?',
        options: [
          'It requires dilution refrigerators',
          'It works at room temperature',
          'It uses electrons instead of photons',
          'It does not require error correction'
        ],
        correctIndex: 1,
        explanation: 'Photonic approaches can operate at or near room temperature, but two-qubit interactions are challenging.'
      },
      {
        id: 'mod-hw-q4',
        question: '“Decoherence” refers to:',
        options: [
          'The process of cooling qubits',
          'The loss of quantum behavior due to interaction with the environment',
          'The act of measuring a classical bit',
          'The reversal of a quantum gate'
        ],
        correctIndex: 1,
        explanation: 'Decoherence occurs when a quantum system leaks information to its environment and behaves more classically.'
      },
      {
        id: 'mod-hw-q5',
        question: 'Why do we talk about “physical” versus “logical” qubits?',
        options: [
          'Logical qubits are simulated on laptops, physical qubits are on phones',
          'Logical qubits are purely mathematical, physical ones are imaginary',
          'Many noisy physical qubits are combined to encode one error-corrected logical qubit',
          'Logical qubits only appear in software documentation'
        ],
        correctIndex: 2,
        explanation: 'Quantum error correction uses multiple physical qubits to redundantly encode a single more stable logical qubit.'
      }
    ]
  },
  {
    id: 'mod-logic',
    title: 'Module E: What is Computation?',
    slides: [
      {
        id: 'c-1',
        title: 'Bits and Logic',
        content: [
          "Computation is manipulating information.",
          "Basic unit: Bit (0 or 1).",
          "Operations: Logic Gates (AND, OR, NOT).",
          "All software, from Minecraft to Excel, is just piles of these simple gates."
        ],
        visualType: 'turing'
      },
      {
        id: 'c-2',
        title: 'The Turing Machine',
        content: [
          "Alan Turing defined the universal computer.",
          "An infinite tape of cells, a head that reads/writes, and a set of rules.",
          "Any calculation possible can be done by this simple machine.",
          "Quantum computers are also Turing machines, just faster at specific tasks."
        ],
        visualType: 'turing'
      },
      {
        id: 'c-3',
        title: 'Reversibility',
        content: [
          "Classical AND gate: If output is 0, was input (0,0), (0,1), or (1,0)?",
          "We don't know. Information is lost (as heat).",
          "Quantum computation must be Reversible.",
          "If you know the output and the gate, you must be able to reconstruct the input.",
          "This preserves the delicate quantum state."
        ],
        visualType: 'none'
      },
      {
        id: 'c-4',
        title: 'Complexity Classes',
        content: [
          "P: Problems solved quickly (Multiplication).",
          "NP: Hard to solve, easy to check (Sudoku, Factoring).",
          "Quantum computers don't solve ALL NP problems instantly.",
          "They solve specific subset (BQP) exponentially faster."
        ],
        visualType: 'none'
      }
    ],
    quiz: [
      {
        id: 'mod-logic-q1',
        question: 'In classical computing, a bit is best described as:',
        options: [
          'A continuous value between 0 and 1',
          'A quantum state with infinite possibilities',
          'A unit of information that is either 0 or 1',
          'A physical wire on a chip'
        ],
        correctIndex: 2,
        explanation: 'At the logical level, a bit is a binary variable taking values 0 or 1.'
      },
      {
        id: 'mod-logic-q2',
        question: 'Why must quantum computation be reversible?',
        options: [
          'Because it uses only mechanical switches',
          'Because quantum evolution is unitary and preserves information',
          'Because it is easier to implement in hardware',
          'Because it avoids using electricity'
        ],
        correctIndex: 1,
        explanation: 'Quantum dynamics are reversible (unitary), so valid quantum gates must be invertible operations that do not erase information.'
      },
      {
        id: 'mod-logic-q3',
        question: 'Which informal description of complexity classes is most accurate?',
        options: [
          'P: problems impossible to solve, NP: trivial problems',
          'P: solved quickly, NP: verifiable quickly but may be hard to solve',
          'P and NP are identical classes',
          'NP problems are always easy for quantum computers'
        ],
        correctIndex: 1,
        explanation: 'P are efficiently solvable; NP problems have solutions that can be checked quickly, but may be hard to find.'
      },
      {
        id: 'mod-logic-q4',
        question: 'What does BQP represent in the context of quantum computing?',
        options: [
          'All problems quantum computers can solve instantly',
          'The class of problems efficiently solvable by a quantum computer',
          'Only factoring and search problems',
          'The set of all NP problems'
        ],
        correctIndex: 1,
        explanation: 'BQP is the class of decision problems solvable in polynomial time with bounded error on a quantum computer.'
      },
      {
        id: 'mod-logic-q5',
        question: 'What is the role of logic gates in both classical and quantum computing?',
        options: [
          'They only provide power to the chip',
          'They define how information is transformed step by step',
          'They are purely decorative symbols',
          'They store data permanently'
        ],
        correctIndex: 1,
        explanation: 'Computation is structured as a sequence of elementary operations (gates) that transform the state of the system.'
      }
    ]
  },
  {
    id: 'mod-gates',
    title: 'Module F: Qubits & Gates',
    slides: [
      {
        id: 'd-1',
        title: 'The Qubit',
        content: [
          "The fundamental unit of quantum info.",
          "Represented as a vector on a sphere (Bloch Sphere).",
          "North Pole = |0⟩, South Pole = |1⟩.",
          "Any point on the surface is a valid state."
        ],
        visualType: 'bloch'
      },
      {
        id: 'd-2',
        title: 'Vector Notation',
        content: [
          "|0⟩ = [1, 0] (Top)",
          "|1⟩ = [0, 1] (Bottom)",
          "Superposition = [0.707, 0.707] (Equator).",
          "Don't worry about the math, just visualize the arrow pointing sideways."
        ],
        visualType: 'bloch'
      },
      {
        id: 'd-3',
        title: 'X Gate (NOT Gate)',
        content: [
          "The quantum equivalent of a NOT gate.",
          "Flips |0⟩ to |1⟩ and vice versa.",
          "On the sphere: Rotates 180° around the X-axis.",
          "Analogy: Flipping a coin over."
        ],
        visualType: 'bloch',
        visualProps: { demoGate: 'X' }
      },
      {
        id: 'd-4',
        title: 'Hadamard Gate (H)',
        content: [
          "The Superposition Creator.",
          "Turns |0⟩ into (|0⟩ + |1⟩) / √2.",
          "Turns a definite state into a 50/50 probability.",
          "On sphere: Rotates to the equator (X axis).",
          "Analogy: Spinning the coin on the table."
        ],
        visualType: 'bloch',
        visualProps: { demoGate: 'H' }
      },
      {
        id: 'd-5',
        title: 'Z Gate (Phase Flip)',
        content: [
          "Leaves |0⟩ alone, but flips the phase of |1⟩.",
          "Doesn't change probability of measuring 0 or 1.",
          "Changes the 'sign' internally.",
          "Crucial for interference effects.",
          "On sphere: Rotates around vertical Z-axis."
        ],
        visualType: 'bloch',
        visualProps: { demoGate: 'Z' }
      },
      {
        id: 'd-s',
        title: 'S Gate & T Gate',
        content: [
          "Z Gate is a 180° rotation around Z.",
          "S Gate is a 90° rotation (Square root of Z).",
          "T Gate is a 45° rotation (Square root of S).",
          "These allow for complex interference patterns.",
          "T gates are very 'expensive' to perform on hardware."
        ],
        visualType: 'bloch'
      },
      {
        id: 'd-6',
        title: 'CNOT (Controlled-NOT)',
        content: [
          "A 2-qubit gate.",
          "Control Qubit (top) and Target Qubit (bottom).",
          "If Control is 1, FLIP Target.",
          "If Control is 0, do nothing.",
          "This is how we create entanglement."
        ],
        visualType: 'circuit',
        visualProps: { demo: 'cnot' }
      },
      {
        id: 'd-swap',
        title: 'SWAP Gate',
        content: [
          "Sometimes qubits aren't connected physically on the chip.",
          "We need to move information around.",
          "SWAP exchanges the state of two qubits.",
          "It's often built using 3 CNOT gates."
        ],
        visualType: 'circuit'
      },
      {
        id: 'd-toffoli',
        title: 'Toffoli Gate (CCNOT)',
        content: [
          "The 'Quantum AND' gate.",
          "Has 2 controls and 1 target.",
          "If BOTH controls are 1, flip the target.",
          "This gate is 'Universal' for classical logic (you can build any classical circuit with it).",
          "See the Code Lab for implementation."
        ],
        visualType: 'circuit'
      },
      {
        id: 'd-7',
        title: 'Circuit Diagrams',
        content: [
          "Read from left to right.",
          "Lines are qubits (time flows right).",
          "Boxes are gates.",
          "Measurements are usually at the end (look like distinct meters)."
        ],
        visualType: 'circuit',
        visualProps: { demo: 'simple' }
      }
    ],
    quiz: [
      {
        id: 'mod-gates-q1',
        question: 'What does the Hadamard (H) gate do to the state |0⟩?',
        options: [
          'Leaves it unchanged',
          'Flips it to |1⟩ with certainty',
          'Creates an equal superposition (|0⟩ + |1⟩)/√2',
          'Destroys the qubit'
        ],
        correctIndex: 2,
        explanation: 'H maps |0⟩ to an equal superposition of |0⟩ and |1⟩, enabling interference-based algorithms.'
      },
      {
        id: 'mod-gates-q2',
        question: 'What is the main effect of the Z gate on a single qubit?',
        options: [
          'It flips |0⟩ to |1⟩',
          'It swaps the amplitudes of |0⟩ and |1⟩',
          'It changes the relative phase of |1⟩ while leaving probabilities unchanged',
          'It measures the qubit'
        ],
        correctIndex: 2,
        explanation: 'Z multiplies the |1⟩ component by -1, altering phase but not measurement probabilities.'
      },
      {
        id: 'mod-gates-q3',
        question: 'The CNOT gate acts as:',
        options: [
          'A single-qubit NOT gate',
          'A controlled operation that flips the target qubit only when the control is 1',
          'A measurement on both qubits',
          'A swap between quantum and classical bits'
        ],
        correctIndex: 1,
        explanation: 'CNOT is a two-qubit gate that conditionally flips the target, essential for entanglement.'
      },
      {
        id: 'mod-gates-q4',
        question: 'Which statement about S and T gates is correct?',
        options: [
          'They are both measurement operations',
          'They are fractional phase rotations derived from the Z gate',
          'They always flip |0⟩ to |1⟩',
          'They remove entanglement from a circuit'
        ],
        correctIndex: 1,
        explanation: 'S and T are smaller rotations around the Z axis (√Z and 4th-root-of-Z), used for fine-grained phase control.'
      },
      {
        id: 'mod-gates-q5',
        question: 'Why are circuit diagrams useful in quantum computing?',
        options: [
          'They show the physical layout of the lab equipment',
          'They encode the temporal sequence of gates on qubits in a readable way',
          'They are only used for marketing slides',
          'They replace the need for math entirely'
        ],
        correctIndex: 1,
        explanation: 'Diagrams show qubits as wires over time and gates as operations, providing a visual representation of the algorithm.'
      }
    ]
  },
  {
    id: 'mod-algo',
    title: 'Module G: Famous Algorithms',
    slides: [
      {
        id: 'e-1',
        title: 'Deutsch’s Algorithm',
        content: [
          "The 'Hello World' of Quantum.",
          "Problem: Is a secret function constant (all 0s or all 1s) or balanced (half 0s, half 1s)?",
          "Classical: Needs 2 checks.",
          "Quantum: Solves it in ONE check.",
          "Demonstrates 'quantum parallelism'."
        ],
        visualType: 'none'
      },
      {
        id: 'e-bv',
        title: 'Bernstein-Vazirani',
        content: [
          "Imagine a black box with a secret code number inside (e.g., 101).",
          "Classical computer needs to check each bit one by one.",
          "Quantum computer finds the entire secret code in ONE step.",
          "It uses interference to reveal the hidden structure instantly."
        ],
        visualType: 'none'
      },
      {
        id: 'e-simon',
        title: 'Simon’s Algorithm',
        content: [
          "The first algorithm to show an EXPONENTIAL speedup over classical.",
          "Finds a hidden period in a function.",
          "It proved that quantum computers are fundamentally more powerful, not just faster.",
          "It inspired Shor's Algorithm."
        ],
        visualType: 'none'
      },
      {
        id: 'e-2',
        title: 'Grover’s Algorithm (Search)',
        content: [
          "Imagine an unsorted phone book with N names.",
          "Classical search: Check N/2 entries on average.",
          "Grover's Search: Check √N entries.",
          "Example: For 1,000,000 items, classical needs 500,000 checks. Grover needs 1,000.",
          "Massive speedup for databases."
        ],
        visualType: 'search-analogy'
      },
      {
        id: 'e-3',
        title: 'How Grover Works (Intuition)',
        content: [
          "1. Create equal superposition of all answers.",
          "2. 'Oracle' marks the correct answer (flips its phase).",
          "3. 'Amplitude Amplification' boosts the probability of the marked answer while suppressing others.",
          "Repeat until probability is near 100%."
        ],
        visualType: 'search-analogy'
      },
      {
        id: 'e-4',
        title: 'Shor’s Algorithm (Factoring)',
        content: [
          "Problem: Given integer N, find prime factors (e.g., 15 = 3 x 5).",
          "This is hard for big numbers (basis of RSA encryption).",
          "Shor’s algorithm solves it exponentially faster than classical computers.",
          "It turns factoring into a 'period finding' problem."
        ],
        visualType: 'shor-visual'
      },
      {
        id: 'e-5',
        title: 'RSA Encryption at Risk',
        content: [
          "Current web security relies on factoring being hard.",
          "A powerful enough quantum computer running Shor's could break mostly all current encryption.",
          "Don't panic: We are developing 'Post-Quantum Cryptography' to be safe."
        ],
        visualType: 'none'
      },
      {
        id: 'e-6',
        title: 'Variational Algorithms (VQE)',
        content: [
          "Shor's algorithm needs perfect qubits.",
          "For current (noisy) machines, we use VQE.",
          "Hybrid approach: Classical computer does the optimization, Quantum computer measures energy.",
          "Used for simulating chemistry and materials."
        ],
        visualType: 'none'
      }
    ],
    quiz: [
      {
        id: 'mod-algo-q1',
        question: 'Deutsch’s algorithm demonstrates which key idea?',
        options: [
          'Using many classical queries to check a function',
          'Using superposition to evaluate a function on multiple inputs at once',
          'Simulating molecules on a quantum computer',
          'Breaking RSA encryption directly'
        ],
        correctIndex: 1,
        explanation: 'Deutsch’s algorithm is an early example of quantum parallelism: one query explores multiple inputs simultaneously.'
      },
      {
        id: 'mod-algo-q2',
        question: 'Grover’s algorithm provides a speedup for which type of problem?',
        options: [
          'Sorting a list',
          'Searching an unstructured database',
          'Computing matrix inverses',
          'Factoring large integers'
        ],
        correctIndex: 1,
        explanation: 'Grover’s algorithm accelerates unstructured search from O(N) to O(√N).'
      },
      {
        id: 'mod-algo-q3',
        question: 'What is the core breakthrough of Shor’s algorithm?',
        options: [
          'Solving linear equations',
          'Finding shortest paths in graphs',
          'Factoring large integers efficiently via period finding',
          'Simulating classical chaotic systems'
        ],
        correctIndex: 2,
        explanation: 'Shor reduces factoring to a quantum period-finding problem, giving an exponential speedup over the best known classical algorithms.'
      },
      {
        id: 'mod-algo-q4',
        question: 'Why are variational algorithms like VQE especially relevant today?',
        options: [
          'They require fully error-corrected, large-scale quantum computers',
          'They are purely classical algorithms',
          'They are designed for current noisy quantum devices by combining classical optimization with quantum measurements',
          'They only work on perfect qubits at absolute zero'
        ],
        correctIndex: 2,
        explanation: 'VQE and related methods are hybrid algorithms tailored to NISQ hardware, offloading optimization to classical machines.'
      },
      {
        id: 'mod-algo-q5',
        question: 'Why is Simon’s algorithm historically important?',
        options: [
          'It was the first algorithm to solve NP-complete problems',
          'It provided one of the first proofs of an exponential quantum speedup over classical algorithms',
          'It is the only algorithm that uses entanglement',
          'It replaces all classical encryption schemes'
        ],
        correctIndex: 1,
        explanation: 'Simon’s problem admits an exponential quantum speedup, giving strong evidence that quantum computers are fundamentally more powerful.'
      }
    ]
  },
  {
    id: 'mod-future',
    title: 'Module H: The Future',
    slides: [
      {
        id: 'future-1',
        title: 'Quantum Internet',
        content: [
          "Imagine a network where information is teleported between nodes.",
          "Not faster speed of light (impossible), but perfectly secure.",
          "We can use entanglement to distribute encryption keys (QKD)."
        ],
        visualType: 'none'
      },
      {
        id: 'future-2',
        title: 'QKD (Quantum Key Distribution)',
        content: [
          "If a hacker tries to intercept the key, the quantum state collapses.",
          "We instantly know someone is listening.",
          "Unbreakable security based on the laws of physics.",
          "Already used by some banks and governments."
        ],
        visualType: 'none'
      },
      {
        id: 'future-3',
        title: 'Quantum Ethics',
        content: [
          "With great power comes great responsibility.",
          "What happens when encryption breaks?",
          "Who owns the quantum advantage? Governments? Corporations?",
          "We need to ensure equitable access to this technology."
        ],
        visualType: 'none'
      },
      {
        id: 'future-4',
        title: 'When will we have one?',
        content: [
          "We are in the 'NISQ' era (Noisy Intermediate-Scale Quantum).",
          "Useful for small experiments, but not world-changing yet.",
          "Fault-tolerant (perfect) quantum computers are likely 10-20 years away.",
          "But the software is being written TODAY."
        ],
        visualType: 'none'
      }
    ],
    quiz: [
      {
        id: 'mod-future-q1',
        question: 'What is the main goal of a “quantum internet” as described in the module?',
        options: [
          'To make the classical internet faster than light',
          'To provide perfectly secure communication using quantum states',
          'To replace all fiber cables with wireless links',
          'To stream quantum movies'
        ],
        correctIndex: 1,
        explanation: 'A quantum internet uses entanglement and quantum key distribution to enable fundamentally secure communication, not faster-than-light signaling.'
      },
      {
        id: 'mod-future-q2',
        question: 'Quantum Key Distribution (QKD) is powerful because:',
        options: [
          'It hides messages using better math formulas',
          'Any eavesdropping attempt irreversibly disturbs the quantum states, revealing an attacker',
          'It relies on unbreakable classical codes',
          'It uses satellites only'
        ],
        correctIndex: 1,
        explanation: 'Measuring quantum states changes them, so eavesdropping can be detected by checking error rates in the key.'
      },
      {
        id: 'mod-future-q3',
        question: 'What does NISQ stand for?',
        options: [
          'Non‑Interactive Secure Quantum',
          'Noisy Intermediate‑Scale Quantum',
          'Non‑Ideal Superconducting Qubits',
          'Next‑Iteration Super Quantum'
        ],
        correctIndex: 1,
        explanation: 'NISQ describes today’s era: quantum devices with tens–thousands of noisy qubits, not yet fully error‑corrected.'
      },
      {
        id: 'mod-future-q4',
        question: 'Why are ethics discussed in the context of quantum computing?',
        options: [
          'Because quantum computers will make people immortal',
          'Because breaking current encryption and creating new capabilities has societal impact',
          'Because ethics determine the speed of quantum gates',
          'Because ethics replace technical standards'
        ],
        correctIndex: 1,
        explanation: 'Quantum tech can disrupt security, economics and power structures, so responsible deployment and equitable access matter.'
      },
      {
        id: 'mod-future-q5',
        question: 'According to the module, what is the opportunity for students learning quantum now?',
        options: [
          'The field is mature and fixed, so there is little room to contribute',
          'They are early in a young field and can help shape it',
          'Quantum computing will soon be obsolete',
          'Only hardware companies can meaningfully influence the field'
        ],
        correctIndex: 1,
        explanation: 'Because the field is still young, learners today can directly influence technology, applications and policy.'
      }
    ]
  },
  {
    id: 'mod-play',
    title: 'Module I: Try It Yourself',
    slides: [
      {
        id: 'f-1',
        title: 'Ready to Code?',
        content: [
          "Theory is great, but practice is better.",
          "We have a dedicated 'Code Lab' in this app.",
          "You can find Python/Qiskit implementations for every gate and algorithm we discussed.",
          "Click the 'Code Lab' button in the top nav to explore."
        ],
        visualType: 'code-editor',
        codeInitial: `# Welcome to the Quantum Playground
# Click 'Code Lab' in the menu for the full library.

from qiskit import QuantumCircuit

qc = QuantumCircuit(1)
qc.h(0)
print("Hello Quantum World")`,
        codeLanguage: 'python'
      },
      {
        id: 'f-5',
        title: 'Conclusion',
        content: [
          "You've taken your first steps into Quantum Computing.",
          "The field is growing rapidly.",
          "Keep experimenting with Qiskit and linear algebra.",
          "The future is probabilistic!",
          "Thank you for playing QuantumQuest."
        ],
        visualType: 'none'
      }
    ]
  }
];

export const CODE_EXAMPLES: CodeExample[] = [
  {
    id: 'code-h',
    category: 'Basic Gates',
    title: 'The Hadamard Gate',
    description: 'Creating superposition from a standard state.',
    code: `from qiskit import QuantumCircuit, Aer, execute

# Create a quantum circuit with 1 qubit
qc = QuantumCircuit(1, 1)

# Apply Hadamard gate to qubit 0
# This puts it into state |+> = (|0> + |1>) / sqrt(2)
qc.h(0)

# Measure the qubit
qc.measure(0, 0)

# Run on simulator
backend = Aer.get_backend('qasm_simulator')
job = execute(qc, backend, shots=1000)
result = job.result()

# Results should be approx 50% 0 and 50% 1
print(result.get_counts(qc))`
  },
  {
    id: 'code-x',
    category: 'Basic Gates',
    title: 'The X Gate (NOT)',
    description: 'Flipping a bit from 0 to 1.',
    code: `from qiskit import QuantumCircuit, Aer, execute

qc = QuantumCircuit(1, 1)

# X Gate acts like a classical NOT
qc.x(0) 

qc.measure(0, 0)

backend = Aer.get_backend('qasm_simulator')
result = execute(qc, backend, shots=1000).result()

# Result should be 100% '1'
print(result.get_counts(qc))`
  },
  {
    id: 'code-phase',
    category: 'Basic Gates',
    title: 'S and T Gates (Phase)',
    description: 'Rotations around the Z-axis (Phase shifts).',
    code: `from qiskit import QuantumCircuit, Aer, execute
import math

qc = QuantumCircuit(1)

# Put in superposition first so phase matters
qc.h(0)

# S Gate (90 degrees or pi/2)
qc.s(0)

# T Gate (45 degrees or pi/4)
qc.t(0)

# Custom Phase Rotation (e.g. pi/8)
qc.rz(math.pi/8, 0)

print("Circuit created with phase gates.")
# Note: Phase is only visible via interference or tomography
qc.draw()`
  },
  {
    id: 'code-cx',
    category: 'Multi-Qubit',
    title: 'CNOT Gate',
    description: 'The fundamental building block of entanglement.',
    code: `from qiskit import QuantumCircuit, Aer, execute

qc = QuantumCircuit(2, 2)

# Set first qubit to 1 to trigger the CNOT
qc.x(0) 

# Apply CNOT. Control: 0, Target: 1
# Since control is 1, target flips from 0 to 1
qc.cx(0, 1)

qc.measure([0,1], [0,1])

backend = Aer.get_backend('qasm_simulator')
result = execute(qc, backend, shots=1000).result()
print(result.get_counts(qc)) # Should get '11'`
  },
  {
    id: 'code-toffoli',
    category: 'Multi-Qubit',
    title: 'Toffoli Gate (CCNOT)',
    description: 'A 3-qubit gate. If q0=1 and q1=1, flip q2.',
    code: `from qiskit import QuantumCircuit, Aer, execute

qc = QuantumCircuit(3, 3)

# Enable both controls
qc.x(0)
qc.x(1)

# Apply Toffoli (Control 0, Control 1, Target 2)
qc.ccx(0, 1, 2)

qc.measure([0,1,2], [0,1,2])

# Should result in '111' (q2 flipped to 1)
backend = Aer.get_backend('qasm_simulator')
print(execute(qc, backend).result().get_counts())`
  },
  {
    id: 'code-bell',
    category: 'Entanglement',
    title: 'Bell State Generator',
    description: 'Creating maximal entanglement between two qubits.',
    code: `from qiskit import QuantumCircuit, Aer, execute

qc = QuantumCircuit(2, 2)

# 1. Put Qubit 0 into Superposition
qc.h(0)

# 2. CNOT with Qubit 0 as control
# If Q0 was 0, Q1 stays 0 -> |00>
# If Q0 was 1, Q1 becomes 1 -> |11>
qc.cx(0, 1)

qc.measure([0,1], [0,1])

backend = Aer.get_backend('qasm_simulator')
result = execute(qc, backend, shots=1000).result()

# Results: ~50% '00' and ~50% '11'
# You should virtually NEVER see '01' or '10'
print(result.get_counts(qc))`
  },
  {
    id: 'code-swap',
    category: 'Multi-Qubit',
    title: 'SWAP Gate',
    description: 'Exchanging states between two qubits.',
    code: `from qiskit import QuantumCircuit, Aer, execute

qc = QuantumCircuit(2, 2)

# Initialize Qubit 0 to |1> and Qubit 1 to |0>
qc.x(0) 

# SWAP them
qc.swap(0, 1)

qc.measure([0,1], [0,1])

# Qubit 0 should be 0, Qubit 1 should be 1
# Result: '10' (Qiskit reads right-to-left q1q0) -> actually q1=1, q0=0 is '10'
print(execute(qc, Aer.get_backend('qasm_simulator')).result().get_counts())`
  },
  {
    id: 'code-teleport',
    category: 'Advanced Circuits',
    title: 'Quantum Teleportation',
    description: 'Sending a state using entanglement and classical bits.',
    code: `from qiskit import QuantumCircuit, Aer, execute

# 3 Qubits, 3 Bits
qc = QuantumCircuit(3, 3)

# Step 1: Create Bell Pair between Alice(1) and Bob(2)
qc.h(1)
qc.cx(1, 2)

# Step 2: Prepare payload on Alice(0) - e.g., Rotate it
qc.rx(0.5, 0)

# Step 3: Alice performs Bell Measurement
qc.cx(0, 1)
qc.h(0)
qc.measure(0, 0)
qc.measure(1, 1)

# Step 4: Bob applies corrections based on Alice's bits
qc.x(2).c_if(qc.clbits[1], 1) # If bit 1 is 1, apply X
qc.z(2).c_if(qc.clbits[0], 1) # If bit 0 is 1, apply Z

# Verify Bob(2) has the state
print("Circuit created. Run simulation to verify fidelity.")`
  },
  {
    id: 'code-deutsch',
    category: 'Algorithms',
    title: 'Deutsch-Jozsa Algorithm',
    description: 'Determining if a function is constant or balanced.',
    code: `from qiskit import QuantumCircuit, Aer, execute

# 3 Qubits (2 input, 1 output for oracle)
n = 2 
qc = QuantumCircuit(n+1, n)

# 1. Initialize input to |+> and output to |->
qc.h(range(n))
qc.x(n)
qc.h(n)

# 2. Apply Oracle (Balanced Example: CNOTs)
qc.cx(0, n)
qc.cx(1, n)

# 3. Interference (Hadamard again)
qc.h(range(n))

# 4. Measure
qc.measure(range(n), range(n))

# If result is '00', function is Constant.
# If result is anything else, function is Balanced.
print(execute(qc, Aer.get_backend('qasm_simulator')).result().get_counts())`
  },
  {
    id: 'code-bv',
    category: 'Algorithms',
    title: 'Bernstein-Vazirani',
    description: 'Finding a secret string s in one shot.',
    code: `from qiskit import QuantumCircuit, Aer, execute

s = '101' # Secret string
n = len(s)
qc = QuantumCircuit(n+1, n)

# Initialize
qc.h(range(n))
qc.x(n)
qc.h(n)

# Oracle for '101'
for i, char in enumerate(reversed(s)):
    if char == '1':
        qc.cx(i, n)

# Uncompute
qc.h(range(n))

qc.measure(range(n), range(n))

# Result should equal '101' exactly
print(execute(qc, Aer.get_backend('qasm_simulator')).result().get_counts())`
  },
  {
    id: 'code-grover',
    category: 'Algorithms',
    title: 'Grover Search (2 Qubits)',
    description: 'Finding marked state |11> in O(sqrt(N)).',
    code: `from qiskit import QuantumCircuit, Aer, execute

qc = QuantumCircuit(2, 2)

# 1. Initialization (Superposition)
qc.h([0,1])

# 2. Oracle (Mark state |11> with Phase Flip)
qc.cz(0, 1) 

# 3. Diffuser (Amplification)
qc.h([0,1])
qc.z([0,1])
qc.cz(0, 1)
qc.h([0,1])

# 4. Measure
qc.measure([0,1], [0,1])

# Result should be '11' with 100% probability
print(execute(qc, Aer.get_backend('qasm_simulator')).result().get_counts())`
  },
  {
    id: 'code-shor',
    category: 'Algorithms',
    title: 'Shor\'s Algorithm (Conceptual)',
    description: 'Period finding subroutine setup (QPE).',
    code: `from qiskit import QuantumCircuit

# Shor's is complex. This is the Quantum Phase Estimation (QPE) core.
# We need 'n' counting qubits and 'm' target qubits.

n_count = 3
qc = QuantumCircuit(n_count + 4, n_count)

# 1. Initialize counting qubits to |+>
qc.h(range(n_count))

# 2. Initialize target to |1>
qc.x(n_count)

# 3. Apply Controlled-U operations (Modular Exponentiation)
# In a real Shor implementation, these are modular multipliers 
# tailored to the number N we are factoring.
# qc.append(controlled_unitary, ...)

# 4. Inverse QFT (Quantum Fourier Transform) on counting qubits
# This extracts the period info from the phases.
# qc.append(inverse_qft, range(n_count))

qc.measure(range(n_count), range(n_count))

print("Shor's skeleton circuit built. Requires modular exponentiation oracle.")`
  }
];
