// TODO Add a couple lines about each project
const data = [
  {
    title: 'CROME',
    subtitle: 'Contract-Based Robotic Mission Specification',
    link: 'https://crome-tool.duckdns.org',
    github: 'https://github.com/pierg/crome-cgg',
    image: '/images/projects/crome.png',
    desc:
      'The tool helps the designer model and deploy robotic missions using contracts. The designer can model the environment, and the goals that the robot must achieve using LTL or Specification Patterns. The tool analyze the goals, build the CGG (a graph of contracts) and realize the controllers via reactive synthesis and simulate the robotic mission.',
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
    desc:
      'Implementation of the contract algebra operations where behaviours are expressed in Linear Temporal Logic. A newer web-based version of the tools is currently under development where contracts support multiple formalisms and the `system` specification is greatly simplified.',
    points: [
    ],
  },
  {
    title: 'Crome-Logic',
    subtitle: 'Linear Temporal Logic manipulation library',
    github: 'https://github.com/pierg/crome-logic',
    image: '/images/projects/logic.png',
    desc:
      'The tools allows LTL formulas to be mapped to boolean formulas in conjunctive or disjunctive normal form (CNF/DNF) and then they can be simplified using heuristic logic minimization techniques.',
    points: [
      'Tools used: NuSMV (LTL satisfiability, validity checks), Spot (LTL tree parser), Espresso (Logic Minimizer)',
    ],
  },
  {
    title: 'Crome-Synthesis',
    subtitle: 'Controllers Synthesis and Manipulation Tool',
    github: 'https://github.com/pierg/crome-synthesis',
    image: '/images/projects/synthesis.png',
    desc:
      'Given an LTL formula the tool: 1) breaks it down in conjunctions of `independent` formulas, 2) synthesize them into Mealy machines concurrently, 4) runs the Mealy machine in parallel even in presence of multiple `fix points`.',
    points: [
      'Tools used: Crome-Logic, Strix (synthesis)',
    ],
  },
  {
    title: 'Cogomo',
    subtitle: 'Requirement Engineering Tool',
    github: 'https://github.com/pierg/cogomo',
    image: '/images/projects/cogomo.png',
    desc:
      'Formal requirement analysis and refinement to libraries of components. Features: 1) conflicts/incompleteness detection, 2) greedy optimization algorithm for mapping specification to components in a library.',
    points: [
      'Tools used: Z3 (SMT solver and unsat-core), Strix (synthesis)',
    ],
  },
  {
    title: 'WiseML',
    subtitle: 'Runtime monitoring tool for Safe reinforcement learning',
    image: '/images/projects/wiseml.png',
    github: 'https://github.com/pierg/wiseml',
    desc:
      'Given an LTL formula the tool: 1) breaks it down in conjunctions of `independent` formulas, 2) synthesize them into Mealy machines concurrently, 4) runs the Mealy machine in parallel even in presence of multiple `fix points`.',
    points: [
    ],
  },
  {
    title: 'Movemo',
    subtitle: 'Engineering of Reward Functions for reinforcement learning agents',
    image: '/images/projects/movemo.png',
    desc:
      'Given an LTL formula the tool: 1) breaks it down in conjunctions of `independent` formulas, 2) synthesize them into Mealy machines concurrently, 4) runs the Mealy machine in parallel even in presence of multiple `fix points`.',
    points: [
    ],
  },
];

export default data;
