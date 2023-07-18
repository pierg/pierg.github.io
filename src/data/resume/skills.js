// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title:
      'Deploying ZKP Frameworks with Real-World Data: Challenges and Proposed Solutions',
    authors: 'Piergiuseppe Mallozzi',
    venue: 'under review',
    year: 2023,
    category: ['Blockchain', 'Zero-Knowledge Proof'],
    pdflink: 'https://arxiv.org/abs/2307.06408',
    file: 'zkp',
  },
  {
    title:
      'A Grammar for the Representation of Unmanned Aerial Vehicles with 3D Topologies',
    authors:
      'Piergiuseppe Mallozzi, Hussein Sibai, Inigo Incer, Sanjit A. Seshia, Alberto Sangiovanni-Vincentelli',
    venue: 'under review',
    year: 2023,
    category: [
      'Autonomous Vehicles',
      'Requirement Engineering',
      'Formal Verification',
    ],
    pdflink: 'https://arxiv.org/abs/2302.13980',
    file: 'grammar',
  },
  {
    title:
      'Contract-Based Specification Refinement and Repair for Mission Planning',
    authors:
      'Piergiuseppe Mallozzi, Inigo Incer, Pierluigi Nuzzo, Alberto Sangiovanni‑Vincentelli',
    venue:
      'International Conference of Formal Methods in Software Engineering (FORMALISE)',
    year: 2023,
    category: [
      'Contract-Based Design',
      'Requirement Engineering',
      'Formal Verification',
    ],
    pdflink: 'https://arxiv.org/abs/2211.11908',
    file: 'repair',
  },
  {
    title:
      'Pacti: Scaling Assume‐Guarantee Reasoning for System Analysis and Design',
    authors:
      'Inigo Incer, Apurva Badithela, Josefine Graebener, Piergiuseppe Mallozzi, Ayush Pandey, Sheng‐Jung Yu, Albert Benveniste, Benoit Caillaud, Richard Murray, Alberto Sangiovanni‐Vincentelli, Sanjit Seshia',
    venue: 'submitted to CAV23',
    year: 2023,
    category: [
      'Requirement Engineering',
      'Formal Verification',
      'Contract-Based Design',
    ],
    pdflink: 'https://arxiv.org/abs/2303.17751',
    file: 'pacti',
  },
  {
    title:
      'Correct-by-Construction Design of Contextual Robotic Missions Using Contracts',
    authors:
      'Piergiuseppe Mallozzi, Pierluigi Nuzzo, Nir Piterman, Patrizio Pelliccione, Gerardo Schneider',
    venue: 'under review',
    year: 2023,
    category: [
      'Contract-Based Design',
      'Requirement Engineering',
      'Robotic Missions',
      'Reactive Synthesis',
    ],
    pdflink: 'https://arxiv.org/abs/2306.08144',
    file: 'contextual',
  },
  {
    title: 'Incremental Refinement of Goal Models with Contracts',
    authors: 'Piergiuseppe Mallozzi, Pierluigi Nuzzo, Patrizio Pelliccione',
    venue: 'Fundamentals of Software Engineering (FSEN)',
    year: 2021,
    category: [
      'Contract-Based Design',
      'Requirement Engineering',
      'Formal Verification',
    ],
    pdflink:
      'https://drive.google.com/file/d/1-eNqWYwT6OC50h8bSkgqgcXurFTfvW1X/view?usp=sharing',
    file: 'mallozzi2021incremental',
  },
  {
    title: 'CROME: Contract‑Based Robotic Mission Speciﬁcation',
    authors:
      'Piergiuseppe Mallozzi, Pierluigi Nuzzo, Patrizio Pelliccione, Gerardo Schneider',
    venue:
      'International Conference on Formal Methods and Models for System Design (MEMOCODE)',
    year: 2020,
    category: [
      'Contract-Based Design',
      'Robotic Missions',
      'Requirement Engineering',
      'Reactive Synthesis',
    ],
    pdflink:
      'https://drive.google.com/file/d/1tJg-N7DqAx--lxcxifpvh4kXIC5caQD6/view?usp=sharing',
    file: 'mallozzi2020crome',
  },
  {
    title:
      'A Runtime Monitoring Framework to Enforce Invariants on Reinforcement Learning Agents Exploring Complex Environments',
    authors:
      'Piergiuseppe Mallozzi, Ezequiel Castellano, Patrizio Pelliccione, Gerardo Schneider, Kenji Tei',
    venue:
      'International Workshop on Robotics Software Engineering (RoSE), Co‑located with ICSE',
    year: 2019,
    category: [
      'Reinforcement Learning',
      'Robotic Missions',
      'Run-time Monitoring',
    ],
    pdflink:
      'https://drive.google.com/file/d/1mjwnZl74XFlF4J5cp-Fw8GBJ83tXJzcl/view?usp=sharing',
    file: 'mallozzi2019runtime',
  },
  {
    title: 'MoVEMo: a structured approach for engineering reward functions',
    authors:
      'Piergiuseppe Mallozzi,Raul Pardo, Vincent Duplessis, Patrizio Pelliccione, Gerardo Schneider',
    venue: 'International Conference on Robotic Computing (IRC)',
    year: 2018,
    category: [
      'Reinforcement Learning',
      'Requirement Engineering',
      'Robotic Missions',
    ],
    pdflink:
      'https://drive.google.com/file/d/1iPgOMHZnV6uHRCpRwbzaxbb4pd3eB1Eh/view?usp=sharing',
    file: 'movemo2018',
  },
  {
    title: 'Engineering Trustworthy Self‑Adaptive Autonomous Systems',
    authors: 'Piergiuseppe Mallozzi',
    venue: 'Licentiate in Engineering Thesis',
    year: 2018,
    category: [
      'Reinforcement Learning',
      'Robotic Missions',
      'Run-time Monitoring',
    ],
    pdflink:
      'https://drive.google.com/file/d/1qLkpnpxzeoXnJCGkDBy8_xSGAr_xagQl/view?usp=sharing',
    file: 'licentiate',
  },
  {
    title: 'Designing Trustworthy Autonomous Systems',
    authors: 'Piergiuseppe Mallozzi',
    venue: 'PhD Thesis',
    year: 2021,
    category: [
      'Autonomous Vehicles',
      'Formal Verification',
      'Reactive Synthesis',
      'Run-time Monitoring',
      'Contract-Based Design',
      'Reinforcement Learning',
      'Robotic Missions',
      'Requirement Engineering',
      'Machine Learning',
    ],
    pdflink:
      'https://drive.google.com/file/d/14d-Dx5No6juhWeT5E5PUFVTMiaZ3cQJV/view?usp=sharing',
    file: 'phdthesis',
  },
  {
    title: 'Keeping Intelligence Under Control',
    authors: 'Piergiuseppe Mallozzi, Patrizio Pelliccione, Claudio Menghi',
    venue:
      'International Workshop on Software Engineering for Cognitive Services (SE4COG), Co‑located with ICSE',
    year: 2018,
    category: [
      'Reinforcement Learning',
      'Robotic Missions',
      'Machine Learning',
    ],
    pdflink:
      'https://drive.google.com/file/d/1qdblh7eb8Sjx_SVwA1ItCKx_cDpUkv7F/view?usp=sharing',
    file: 'keep2018',
  },
  {
    title:
      'Combining Machine‑learning with Invariants Assurance Techniques for Autonomous Systems',
    authors: 'Piergiuseppe Mallozzi',
    venue:
      'Doctoral Symposium at International Conference on Software Engineering (ICSE)',
    year: 2017,
    category: [
      'Reinforcement Learning',
      'Machine Learning',
      'Run-time Monitoring',
    ],
    pdflink:
      'https://drive.google.com/file/d/1Clwkaq2Lo6t6D3Win8HXZxa-gmu4DPU4/view?usp=sharing',
    file: 'combining2017',
  },
  {
    title:
      'Autonomous Vehicles: State of the Art, Future Trends, and Challenges',
    authors:
      'Piergiuseppe Mallozzi, Patrizio Pelliccione, Alessia Knauss, Christian Berger, Nassar Mohammadiha',
    venue: 'Book Chapter in Automotive Systems and Software Engineering',
    year: 2019,
    category: ['Autonomous Vehicles'],
    pdflink:
      'https://drive.google.com/file/d/1VF8ePKJttQlO57juYmcyLAarZyNIxpEO/view?usp=sharing',
    file: 'mallozzi2019autonomous',
  },
  {
    title:
      'PVSio-web: Mathematically Based Tool Support for the Design of Interactive and Interoperable Medical Systems',
    authors:
      'Paul Curzon, Paolo Masci, Patrick Oladimeji, Piergiuseppe Mallozzi',
    venue: 'EAI Endorsed Transactions on Collaborative Computing',
    year: 2015,
    category: ['Formal Verification', 'Medical Devices'],
    pdflink:
      'https://drive.google.com/file/d/1gEh0ArIgGDwbF9HQYTgBRkc1vhsxjquY/view?usp=sharing',
    file: 'curzon2015pvsio',
  },
  {
    title: 'Automotive Architecture Framework: The Experience of Volvo Cars',
    authors:
      'Patrizio Pelliccione, Eric Knauss, Rogardt Heldal, S Magnus Ågren, Piergiuseppe Mallozzi, Anders Alminger, Daniel Borgentun',
    venue: 'Journal of Systems Architecture',
    year: 2017,
    category: ['Autonomous Vehicles', 'Software Architecture'],
    pdflink:
      'https://drive.google.com/file/d/1SuVD0f3y7O44IyWlmV1S1bSrAVJZTyHd/view?usp=sharing',
    file: 'pelliccione2017automotive',
  },
  {
    title: 'Formal Verification of the on-the-fly Vehicle Platooning Protocol',
    authors:
      'Piergiuseppe Mallozzi, Massimo Sciancalepore, Patrizio Pelliccione',
    venue:
      'International Workshop on Software Engineering for Resilient Systems (SERENE)',
    year: 2016,
    category: ['Autonomous Vehicles', 'Formal Verification'],
    pdflink:
      'https://drive.google.com/file/d/1_SKeGB9LZFD-ikhwDfFYD9ESM28HiHqg/view?usp=sharing',
    file: 'mallozzi2016formal',
  },
  {
    title: 'A Proposal for an Automotive Architecture Framework for Volvo Cars',
    authors:
      'Patrizio Pelliccione, Eric Knauss, Rogardt Heldal, Magnus Ågren, Piergiuseppe Mallozzi, Anders Alminger, Daniel Borgentun',
    venue: 'Workshop on Automotive Systems/Software Architectures (WASA)',
    year: 2016,
    category: ['Autonomous Vehicles', 'Software Architecture'],
    pdflink:
      'https://drive.google.com/file/d/1kuXG7okJOGe0M-mSKzkuLQiQC9XEbFar/view?usp=sharing',
    file: 'pelliccione2016proposal',
  },
  {
    title:
      'Design and Development of a Co-simulation Library for the PVSio-web Prototyping Tool',
    authors: 'Piergiuseppe Mallozzi',
    venue: 'Master Thesis',
    year: 2015,
    category: [
      'Formal Verification',
      'Software Architecture',
      'Medical Devices',
    ],
    pdflink:
      'https://drive.google.com/file/d/12BpsiNYdcuGiOASl_Vwxzcn5K_CPnQw3/view?usp=sharing',
    file: 'mallozzimaster',
  },
  {
    title:
      'Using PVSio-web and SAPERE for Rapid Prototyping of User Interfaces in Integrated Clinical Environments',
    authors:
      'Paolo Masci, Piergiuseppe Mallozzi, Francesco Luca De Angelis, G Di Marzo Serugendo, Paul Curzon',
    venue:
      'Verisure2015, Workshop on Verification and Assurance, Co‑located with CAV',
    year: 2015,
    category: [
      'Formal Verification',
      'Software Architecture',
      'Medical Devices',
    ],
    pdflink:
      'https://drive.google.com/file/d/18Z1TM5s_l2xMKONuuKmHYoY1QsghqACg/view?usp=sharing',
    file: 'masci2015using',
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
