// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'A Framework for Specifying and Realizing Correct–by–Construction Contextual Robotic Missions Using Contracts',
    authors: 'Piergiuseppe Mallozzi, Pierluigi Nuzzo, Nir Piterman, Patrizio Pelliccione, Gerardo Schneider',
    venue: 'under review',
    year: 2021,
    category: ['Contract-Based Design', 'Requirement Engineering', 'Robotic Missions', 'Reactive Synthesis'],
    file: 'contextual_controllers',
  },
  {
    title: 'A Framework to Refine and Repair Specifications of Robotic Missions Using Contracts',
    authors: 'Piergiuseppe Mallozzi, Inigo Incer, Pierluigi Nuzzo, Alberto Sangiovanni‑Vincentelli',
    venue: 'under review',
    year: 2022,
    category: ['Contract-Based Design', 'Requirement Engineering', 'Formal Verification'],
    file: 'search_repair',
  },
  {
    title: 'Incremental Refinement of Goal Models with Contracts',
    authors: 'Piergiuseppe Mallozzi, Pierluigi Nuzzo, Patrizio Pelliccione',
    venue: 'Fundamentals of Software Engineering (FSEN)',
    year: 2021,
    category: ['Contract-Based Design', 'Requirement Engineering', 'Formal Verification'],
    file: 'mallozzi2021incremental',
  },
  {
    title: 'CROME: Contract‑Based Robotic Mission Speciﬁcation',
    authors: 'Piergiuseppe Mallozzi, Pierluigi Nuzzo, Patrizio Pelliccione, Gerardo Schneider',
    venue: 'International Conference on Formal Methods and Models for System Design (MEMOCODE)',
    year: 2020,
    category: ['Contract-Based Design', 'Robotic Missions', 'Requirement Engineering', 'Reactive Synthesis'],
    file: 'mallozzi2020crome',
  },
  {
    title: 'A Runtime Monitoring Framework to Enforce Invariants on Reinforcement Learning Agents Exploring Complex Environments',
    authors: 'Piergiuseppe Mallozzi, Ezequiel Castellano, Patrizio Pelliccione, Gerardo Schneider, Kenji Tei',
    venue: 'International Workshop on Robotics Software Engineering (RoSE), Co‑located with ICSE',
    year: 2019,
    category: ['Reinforcement Learning', 'Robotic Missions', 'Run-time Monitoring'],
    file: 'mallozzi2020crome',
  },
  {
    title: 'Engineering Trustworthy Self‑Adaptive Autonomous Systems',
    authors: 'Piergiuseppe Mallozzi',
    venue: 'Licentiate in Engineering Thesis',
    year: 2018,
    category: ['Reinforcement Learning', 'Robotic Missions', 'Run-time Monitoring'],
    file: 'licentiate',
  },
  {
    title: 'Keeping Intelligence Under Control',
    authors: 'Piergiuseppe Mallozzi, Patrizio Pelliccione, Claudio Menghi',
    venue: 'International Workshop on Software Engineering for Cognitive Services (SE4COG), Co‑located with ICSE',
    year: 2018,
    category: ['Reinforcement Learning', 'Robotic Missions', 'Machine Learning'],
    file: 'keep2018',
  },
  {
    title: 'Combining Machine‑learning with Invariants Assurance Techniques for Autonomous Systems',
    authors: 'Piergiuseppe Mallozzi',
    venue: 'Doctoral Symposium at International Conference on Software Engineering (ICSE)',
    year: 2017,
    category: ['Reinforcement Learning', 'Machine Learning', 'Run-time Monitoring'],
    file: 'combining2017',
  },
  {
    title: 'Autonomous Vehicles: State of the Art, Future Trends, and Challenges',
    authors: 'Piergiuseppe Mallozzi, Patrizio Pelliccione, Alessia Knauss, Christian Berger, Nassar Mohammadiha',
    venue: 'Book Chapter in Automotive Systems and Software Engineering',
    year: 2019,
    category: ['Autonomous Vehicles'],
    file: 'mallozzi2019autonomous',
  },
  {
    title: 'PVSio-web: Mathematically Based Tool Support for the Design of Interactive and Interoperable Medical Systems',
    authors: 'Paul Curzon, Paolo Masci, Patrick Oladimeji, Piergiuseppe Mallozzi',
    venue: 'EAI Endorsed Transactions on Collaborative Computing',
    year: 2015,
    category: ['Formal Verification', 'Medical Devices'],
    file: 'curzon2015pvsio.txt',
  },
  {
    title: 'Automotive Architecture Framework: The Experience of Volvo Cars',
    authors: 'Patrizio Pelliccione, Eric Knauss, Rogardt Heldal, S Magnus Ågren, Piergiuseppe Mallozzi, Anders Alminger, Daniel Borgentun',
    venue: 'Journal of Systems Architecture',
    year: 2017,
    category: ['Autonomous Vehicles', 'Software Architecture'],
    file: 'pelliccione2017automotive',
  },
  {
    title: 'Formal Verification of the on-the-fly Vehicle Platooning Protocol',
    authors: 'Piergiuseppe Mallozzi, Massimo Sciancalepore, Patrizio Pelliccione',
    venue: 'International Workshop on Software Engineering for Resilient Systems (SERENE)',
    year: 2016,
    category: ['Autonomous Vehicles', 'Formal Verification'],
    file: 'mallozzi2016formal',
  },
  {
    title: 'A Proposal for an Automotive Architecture Framework for Volvo Cars',
    authors: 'Patrizio Pelliccione, Eric Knauss, Rogardt Heldal, Magnus Ågren, Piergiuseppe Mallozzi, Anders Alminger, Daniel Borgentun',
    venue: 'Workshop on Automotive Systems/Software Architectures (WASA)',
    year: 2016,
    category: ['Autonomous Vehicles', 'Software Architecture'],
    file: 'pelliccione2016proposal',
  },
  {
    title: 'Design and Development of a Co-simulation Library for the PVSio-web Prototyping Tool',
    authors: 'Piergiuseppe Mallozzi',
    venue: 'Master Thesis',
    year: 2015,
    category: ['Formal Verification', 'Software Architecture', 'Medical Devices'],
    file: 'mallozzimaster',
  },
  {
    title: 'Using PVSio-web and SAPERE for Rapid Prototyping of User Interfaces in Integrated Clinical Environments',
    authors: 'Paolo Masci, Piergiuseppe Mallozzi, Francesco Luca De Angelis, G Di Marzo Serugendo, Paul Curzon',
    venue: 'Verisure2015, Workshop on Verification and Assurance, Co‑located with CAV',
    year: 2015,
    category: ['Formal Verification', 'Software Architecture', 'Medical Devices'],
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
