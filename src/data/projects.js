// TODO Add a couple lines about each project
const data = [
  {
    title: 'Biochemically-Informed Neural Networks',
    subtitle: 'Configurable Neural Networks with Biochemically-Informed Data Generation',
    link: 'https://github.com/pierg/neural-networks',
    github: 'https://github.com/pierg/neural-networks',
    image: '/images/projects/nn.png',
    desc: 'TensorFlow-based framework for neural networks, emphasizing customizable designs, dynamic synthetic data generation rooted in biochemical models, and seamless integration with high-performance computing for enhanced efficiency and scalability.',
  },
  {
    title: 'Fact-Fortress',
    subtitle: 'On-Chain Zero-Knowledge Proof Solution to Fact-Checking',
    link: 'https://pierg.github.io/fact-fortress-web/',
    github: 'https://github.com/pierg/fact-fortress-dapp',
    image: '/images/projects/fact-fortress.png',
    desc: 'Bockchain-based framework that uses Zero-Knowledge Proofs (ZKP) for trustworthy and private fact-checking leveraging on proof of data provenance, auditable data-access policies and democratizing the construction of ZKP circuits.',
  },
  {
    title: 'Pacti',
    subtitle:
      'Open-source Python package for carrying out compositional system analysis and design.',
    link: 'https://www.pacti.org',
    github: 'https://github.com/pacti-org/pacti',
    image: '/images/projects/pacti.png',
    desc: 'Contributed to PACTI development, an open-source tool for scalable system analysis using Assume-Guarantee contracts with polyhedral constraints. Conducted UAV topology study with contract-based design enforcing context-free grammar rules for feasible topologies.',
  },
  {
    title: 'Sym-CPS',
    subtitle: 'Symbiotic Design for Cyber-Physical Systems',
    // link: 'https://crome-tool.duckdns.org',
    github:
      'https://github.com/uc-berkeley-data-discovery-2022/berkeley-cps-symbiotic-design',
    image: '/images/projects/sym-cps.png',
    desc: 'Developed software infrastructure to design, model, and optimize Cyber-Physical Systems (UAVs) at multiple levels of abstraction, including topology, component selection, parameter optimization, and control.',
  },
  {
    title: 'CROME',
    subtitle: 'Contract-Based Robotic Mission Specification',
    link: 'https://crome-tool.duckdns.org',
    github: 'https://github.com/pierg/crome-cgg',
    image: '/images/projects/crome.png',
    desc: 'This tool enables designers to model and deploy robotic missions using contracts, allowing them to define the environment and goals using LTL or Specification Patterns. The tool then analyzes the goals, builds a CGG (contract graph), and creates the controllers via reactive synthesis, allowing designers to simulate and test the robotic mission.',
    points: [
      'Tools used: NuSMV (LTL satisfiability, validity checks), Strix (controller synthesis), Docker, React, Flask',
    ],
  },
  {
    title: 'Crome-Contracts',
    subtitle: 'Contracts Manipulation Tool',
    link: 'https://contracts-tool.duckdns.org',
    github: 'https://github.com/pierg/crome-contracts',
    image: '/images/projects/contracts.png',
    desc: 'Implemented contract algebra operations for expressing behaviors in Linear Temporal Logic. Currently developing a new web-based version of the tool that supports multiple formalisms in the contracts and greatly simplifies the system specification process.',
    points: [],
  },
  {
    title: 'Crome-Logic',
    subtitle: 'Linear Temporal Logic manipulation library',
    github: 'https://github.com/pierg/crome-logic',
    image: '/images/projects/logic.png',
    desc: 'The tool enables the mapping of LTL formulas to boolean formulas in CNF/DNF and their subsequent simplification using heuristic logic minimization techniques.',
    points: [
      'Tools used: NuSMV (LTL satisfiability, validity checks), Spot (LTL tree parser), Espresso (Logic Minimizer)',
    ],
  },
  {
    title: 'Crome-Synthesis',
    subtitle: 'Controllers Synthesis and Manipulation Tool',
    github: 'https://github.com/pierg/crome-synthesis',
    image: '/images/projects/synthesis.png',
    desc: 'The tool is capable of breaking down an LTL formula into conjunctions of independent formulas, synthesizing them concurrently into Mealy machines, and running the Mealy machine in parallel, even in the presence of multiple "fix points".',
    points: ['Tools used: Crome-Logic, Strix (synthesis)'],
  },
  {
    title: 'Cogomo',
    subtitle: 'Requirement Engineering Tool',
    github: 'https://github.com/pierg/cogomo',
    image: '/images/projects/cogomo.png',
    desc: 'Tool for formally analyzing and refining requirements of component libraries, featuring conflict and incompleteness detection, as well as a greedy optimization algorithm for mapping specifications to components in a library.',
    points: ['Tools used: Z3 (SMT solver and unsat-core), Strix (synthesis)'],
  },
  {
    title: 'WiseML',
    subtitle: 'Runtime monitoring tool for Safe reinforcement learning',
    image: '/images/projects/wiseml.png',
    link: 'https://rose-workshops.github.io/files/rose2019/papers/rose2019_2.pdf',
    desc: "Tool for safe and efficient model-free reinforcement learning (RL) in unknown environments. It uses runtime monitoring with a set of monitors to prevent unsafe actions and provide feedback to the agent, which enables the agent to learn faster and achieve the goal efficiently. The approach has been evaluated in randomly generated learning environments and has shown to prevent dangerous actions and improve the agent's performance.",
    points: [],
  },
  {
    title: 'Movemo',
    subtitle:
      'Engineering of Reward Functions for reinforcement learning agents',
    image: '/images/projects/movemo.png',
    link: 'http://raulpardo.net/papers/irc2018.pdf',
    desc: 'Tool for formally expressing and verifying reward functions in structured state machines, enhancing the design and formal verification of reward functions in reinforcement learning.',
    points: [],
  },
  {
    title: 'Search and Rescue Challenge',
    subtitle:
      'Part of the WASP Autonomous System Program',
    image: '/images/projects/search.png',
    github: 'https://github.com/pierg/wasp_cht2_catkin',
    desc: 'Designed and implemented the complete software stack (Motion Planner, SLAM, Computer Vision, Control) for a cooperative search and rescue mission involving a drone and a land robot (turtlebot).',
    points: [],
  },
  {
    title: 'NASA DAIDALUS',
    subtitle:
      'NextGen collision avoidance system Simulator using Formal verification',
    image: '/images/projects/nasa.png',
    link: 'https://vimeo.com/manage/videos/140775294',
    github: 'https://github.com/pierg/wasp_cht2_catkin',
    desc: 'Flight simulator showcasing NASA Langley\'s NextGen collision avoidance system (DAIDALUS), incorporating PVS verification for mathematical model execution.',
    points: [],
  },
  {
    title: 'CHI+MED Integrated Clinical Environment',
    subtitle:
      'Reverse Engineering of Medical Devices to a formal model',
    image: '/images/projects/chimed.png',
    link: 'https://vimeo.com/manage/videos/140775294',
    github: 'https://bitbucket.org/piergiuseppe/network_controller/src/master/',
    desc: 'Communication middleware enabling co-simulation of device prototypes, facilitating interoperability with medical devices represented as mathematical models (using PVS).',
    points: [],
  },
];

export default data;
