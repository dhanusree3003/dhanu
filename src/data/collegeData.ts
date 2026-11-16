export type ProgramLevel = 'all' | 'ug' | 'pg' | 'phd';

export interface AcademicProgram {
  id: string;
  code: string;
  title: string;
  degree: string;
  level: Exclude<ProgramLevel, 'all'>;
  duration: string;
  intake: string;
  accreditation: string;
  department: string;
  summary: string;
  highlights: string[];
  labs: string[];
  eligibility: string;
}

export interface CampusFacility {
  id: string;
  index: string;
  name: string;
  subtitle: string;
  image: string;
  figureCaption: string;
  description: string;
  specs: { label: string; value: string }[];
}

export interface PlacementStat {
  label: string;
  value: string;
  context: string;
}

export interface RecruiterPartner {
  name: string;
  sector: 'software' | 'core' | 'consulting';
  roles: string;
  packageRange: string;
}

export interface AlumniStory {
  name: string;
  batch: string;
  program: string;
  role: string;
  company: string;
  outcome: string;
}

export interface CampusNotice {
  id: string;
  type: 'event' | 'notice';
  date: string;
  category: string;
  title: string;
  summary: string;
  details: string;
  venueOrRef: string;
}

export const HERO_IMAGE = '/src/assets/images/skc_campus_hero_1794810291964.jpg';

export const ACADEMIC_PROGRAMS: AcademicProgram[] = [
  {
    id: 'cse',
    code: 'CS-101',
    title: 'Computer Science and Engineering',
    degree: 'B.E.',
    level: 'ug',
    duration: '4 Years',
    intake: '240 Seats',
    accreditation: 'NBA Accredited',
    department: 'School of Computing',
    summary:
      'Foundations in distributed systems, compiler architecture, cloud infrastructure, and applied machine learning with direct industry mentorship.',
    highlights: [
      'Full-stack cloud engineering & microservices studio',
      'Competitive programming & systems architecture track',
      'Mandatory 6-month industry capstone in Semester VIII',
    ],
    labs: ['Cisco Networking Academy', 'VMware Cloud Lab', 'High-Performance Computing Cluster'],
    eligibility: '10+2 (Physics, Chemistry, Mathematics) via TNEA Counselling or Management Quota.',
  },
  {
    id: 'ai-ds',
    code: 'AD-102',
    title: 'Artificial Intelligence and Data Science',
    degree: 'B.Tech.',
    level: 'ug',
    duration: '4 Years',
    intake: '180 Seats',
    accreditation: 'AICTE Approved',
    department: 'School of Computing',
    summary:
      'Statistical learning, computer vision, natural language processing, and scalable data pipelines tailored for enterprise analytics and research.',
    highlights: [
      'Applied deep learning & generative model workflows',
      'Data engineering with Apache Spark & cloud lakes',
      'Coimbatore healthcare & manufacturing AI datasets',
    ],
    labs: ['NVIDIA GPU Computing Centre', 'Big Data & Analytics Lab', 'Vision Intelligence Studio'],
    eligibility: '10+2 with Mathematics, Physics, and Chemistry per Anna University norms.',
  },
  {
    id: 'ece',
    code: 'EC-103',
    title: 'Electronics and Communication Engineering',
    degree: 'B.E.',
    level: 'ug',
    duration: '4 Years',
    intake: '180 Seats',
    accreditation: 'NBA Accredited',
    department: 'School of Electrical & Electronics',
    summary:
      'VLSI chip design, embedded firmware, RF systems, and industrial IoT backed by semiconductor industry design suites.',
    highlights: [
      'RTL verification & physical VLSI design flow',
      'Real-time embedded Linux & ARM Cortex prototyping',
      '5G antenna & optical communication testbeds',
    ],
    labs: ['Cadence VLSI Design Lab', 'Texas Instruments Embedded Lab', 'RF & Microwave Bench'],
    eligibility: '10+2 (PCM) through TNEA State Counselling or Institutional Admission.',
  },
  {
    id: 'mech',
    code: 'ME-104',
    title: 'Mechanical Engineering',
    degree: 'B.E.',
    level: 'ug',
    duration: '4 Years',
    intake: '120 Seats',
    accreditation: 'NBA Accredited',
    department: 'School of Mechanical Sciences',
    summary:
      'Precision manufacturing, thermal engineering, CAD/CAM simulation, and EV powertrain design aligned with Coimbatore’s industrial corridor.',
    highlights: [
      'CNC machining & additive manufacturing prototyping',
      'Electric vehicle battery thermal management studio',
      'Industry internships across Coimbatore foundry & pump clusters',
    ],
    labs: ['FANUC Robotics & Automation Cell', 'CFD & FEA Simulation Lab', 'Metrology & NDT Centre'],
    eligibility: '10+2 (PCM) or Diploma Lateral Entry directly into Second Year.',
  },
  {
    id: 'mechatronics',
    code: 'MC-105',
    title: 'Mechatronics Engineering',
    degree: 'B.E.',
    level: 'ug',
    duration: '4 Years',
    intake: '60 Seats',
    accreditation: 'NBA Accredited',
    department: 'School of Mechanical Sciences',
    summary:
      'Interdisciplinary integration of robotics, PLC industrial automation, pneumatics, and real-time control engineering.',
    highlights: [
      '6-axis industrial robotic cell programming',
      'PLC, SCADA & Industry 4.0 smart factory integration',
      'Autonomous mobile robot capstone builds',
    ],
    labs: ['Bosch Rexroth Pneumatics Lab', 'Siemens Automation Centre', 'Autonomous Robotics Arena'],
    eligibility: '10+2 with Physics, Chemistry, and Mathematics.',
  },
  {
    id: 'it',
    code: 'IT-106',
    title: 'Information Technology',
    degree: 'B.Tech.',
    level: 'ug',
    duration: '4 Years',
    intake: '180 Seats',
    accreditation: 'NBA Accredited',
    department: 'School of Computing',
    summary:
      'Enterprise software engineering, cybersecurity operations, human-computer interaction, and cloud-native application delivery.',
    highlights: [
      'Zero-trust network security & ethical hacking lab',
      'Product design & accessible web architecture',
      'Agile DevSecOps delivery pipelines',
    ],
    labs: ['Cyber Defence Operations Lab', 'Full-Stack Engineering Studio', 'Cloud Native Sandbox'],
    eligibility: '10+2 (PCM) via TNEA or Institutional Admission.',
  },
  {
    id: 'csbs',
    code: 'CB-107',
    title: 'Computer Science and Business Systems',
    degree: 'B.Tech.',
    level: 'ug',
    duration: '4 Years',
    intake: '60 Seats',
    accreditation: 'TCS Co-Designed',
    department: 'School of Computing',
    summary:
      'Curriculum co-created with Tata Consultancy Services blending enterprise software architecture with financial analytics and operations strategy.',
    highlights: [
      'Design thinking & enterprise resource planning',
      'Quantitative finance & business intelligence',
      'Industry faculty guest seminars every semester',
    ],
    labs: ['Enterprise Systems Lab', 'Financial Analytics Terminal', 'Product Strategy Studio'],
    eligibility: '10+2 with Mathematics, Physics, and Chemistry.',
  },
  {
    id: 'mba',
    code: 'MB-201',
    title: 'Master of Business Administration',
    degree: 'MBA',
    level: 'pg',
    duration: '2 Years',
    intake: '120 Seats',
    accreditation: 'NBA Accredited',
    department: 'Sri Krishna School of Management',
    summary:
      'Case-method management education with dual specializations in Finance, Business Analytics, Operations, and Human Resources.',
    highlights: [
      'Harvard & IIM case-study pedagogy',
      'Live consulting sprints with Kongu region SMEs',
      'Bloomberg-style equity & financial modelling lab',
    ],
    labs: ['Business Analytics & Simulation Lab', 'Executive Seminar Hall', 'Entrepreneurship Cell'],
    eligibility: 'Bachelor’s degree (50% min.) with valid TANCET / MAT / CAT score.',
  },
  {
    id: 'me-applied-electronics',
    code: 'AE-202',
    title: 'Applied Electronics & Embedded Systems',
    degree: 'M.E.',
    level: 'pg',
    duration: '2 Years',
    intake: '18 Seats',
    accreditation: 'Anna University',
    department: 'School of Electrical & Electronics',
    summary:
      'Graduate specialization in mixed-signal IC design, FPGA prototyping, and fault-tolerant industrial hardware.',
    highlights: [
      'Funded dissertation projects with DRDO & CSIR partners',
      'Teaching assistantships for full-time scholars',
      'Publication mandate in IEEE / Scopus indexed journals',
    ],
    labs: ['Advanced ASIC & FPGA Lab', 'Signal Integrity Bench'],
    eligibility: 'B.E./B.Tech. in ECE, EEE, or EIE with GATE / CEETA-PG score.',
  },
  {
    id: 'mca',
    code: 'CA-203',
    title: 'Master of Computer Applications',
    degree: 'MCA',
    level: 'pg',
    duration: '2 Years',
    intake: '60 Seats',
    accreditation: 'AICTE Approved',
    department: 'School of Computing',
    summary:
      'Accelerated postgraduate pathway covering enterprise architecture, database internals, and cloud-native software engineering.',
    highlights: [
      'Intensive coding bootcamps & system design clinics',
      'Open-source contribution & DevOps practicum',
    ],
    labs: ['Postgraduate Computing Studio', 'Database & Cloud Research Lab'],
    eligibility: 'Any recognized Bachelor’s degree with Mathematics at 10+2 or graduation + TANCET.',
  },
  {
    id: 'phd-eng',
    code: 'DR-301',
    title: 'Doctoral Research in Engineering & Sciences',
    degree: 'Ph.D.',
    level: 'phd',
    duration: '3–5 Years',
    intake: 'Recognized Centre',
    accreditation: 'Anna University Nodal Centre',
    department: 'Centre for Sponsored Research',
    summary:
      'Full-time and part-time doctoral fellowships across CSE, ECE, Mechanical, EEE, and Applied Sciences under Anna University supervision.',
    highlights: [
      'Institutional research fellowships for full-time scholars',
      'DST-FIST & AICTE MODROBS funded laboratories',
      'Dedicated patent filing & IPR facilitation cell',
    ],
    labs: ['Central Material Characterization Facility', 'AI & HPC Research Cluster'],
    eligibility: 'M.E. / M.Tech. / M.Sc. with valid Anna University Ph.D. Entrance qualification.',
  },
];

export const CAMPUS_FACILITIES: CampusFacility[] = [
  {
    id: 'library',
    index: '01',
    name: 'Central Knowledge & Digital Library',
    subtitle: '24/7 Digital Access · 84,000+ Volumes',
    image: '/src/assets/images/skc_library_hall_1794810293340.jpg',
    figureCaption: 'Fig. 1 — Double-height reading atrium at the Central Knowledge Centre, Kuniamuthur.',
    description:
      'Spanning 32,000 sq. ft., the Central Library houses print monographs, IEEE/Springer/ScienceDirect digital subscriptions, NPTEL video archives, and silent individual research carrels overlooking the Western Ghats.',
    specs: [
      { label: 'Print Volumes', value: '84,500+' },
      { label: 'E-Journals', value: '12,400+' },
      { label: 'Seating Capacity', value: '620 Readers' },
    ],
  },
  {
    id: 'robotics',
    index: '02',
    name: 'Industry Centres of Excellence',
    subtitle: 'Robotics · VLSI · EV Powertrain',
    image: '/src/assets/images/skc_robotics_lab_1794810293822.jpg',
    figureCaption: 'Fig. 2 — Students calibrating an industrial 6-axis FANUC cell in the Mechatronics Centre.',
    description:
      'Co-established with Bosch, FANUC, Texas Instruments, Cisco, and Virtusa, our 18 specialized laboratories give undergraduates direct hands-on access to industrial hardware from their second year onward.',
    specs: [
      { label: 'Industry Labs', value: '18 Centres' },
      { label: 'Patents Filed', value: '310+ (5 Yrs)' },
      { label: 'Funded Grants', value: '₹6.8 Cr' },
    ],
  },
  {
    id: 'quadrangle',
    index: '03',
    name: 'Kuniamuthur Academic Quadrangle & Amphitheatre',
    subtitle: '45-Acre Green Campus · Coimbatore',
    image: '/src/assets/images/skc_auditorium_quad_1794810293805.jpg',
    figureCaption: 'Fig. 3 — Stone colonnades and open-air amphitheatre at the South Quadrangle.',
    description:
      'Set along Sugunapuram East on Palakkad Main Road, the campus blends shaded courtyard architecture with smart lecture theatres, a 1,800-seat convention auditorium, residential hostels, and athletic grounds.',
    specs: [
      { label: 'Campus Area', value: '45 Acres' },
      { label: 'Hostel Capacity', value: '2,400 Beds' },
      { label: 'Auditorium', value: '1,800 Seats' },
    ],
  },
];

export const PLACEMENT_STATS: PlacementStat[] = [
  {
    label: 'Placement Rate',
    value: '96.4%',
    context: 'Eligible graduating students placed · 2025–26 cycle',
  },
  {
    label: 'Highest Compensation',
    value: '₹48 LPA',
    context: 'International & product engineering offers',
  },
  {
    label: 'Median Package',
    value: '₹6.8 LPA',
    context: 'Across B.E., B.Tech., and M.E. cohorts',
  },
  {
    label: 'Recruiting Partners',
    value: '340+',
    context: 'Global technology, core & consulting firms on campus',
  },
];

export const RECRUITER_PARTNERS: RecruiterPartner[] = [
  { name: 'Zoho Corporation', sector: 'software', roles: 'Member Technical Staff', packageRange: '₹8.4 – ₹12 LPA' },
  { name: 'Amazon', sector: 'software', roles: 'Software Development Engineer', packageRange: '₹28 – ₹48 LPA' },
  { name: 'Autodesk', sector: 'software', roles: 'Cloud Platform Engineer', packageRange: '₹18 – ₹24 LPA' },
  { name: 'Informatica', sector: 'software', roles: 'Data & Cloud Engineer', packageRange: '₹11.5 – ₹15 LPA' },
  { name: 'Bosch Global Software', sector: 'core', roles: 'Embedded & Automotive Systems', packageRange: '₹7.5 – ₹11 LPA' },
  { name: 'Caterpillar India', sector: 'core', roles: 'Design & Manufacturing Engineer', packageRange: '₹8.0 – ₹10.5 LPA' },
  { name: 'L&T Technology Services', sector: 'core', roles: 'Mechatronics & VLSI Engineer', packageRange: '₹6.5 – ₹9.0 LPA' },
  { name: 'Texas Instruments', sector: 'core', roles: 'Analog & Verification Intern/FTE', packageRange: '₹16 – ₹22 LPA' },
  { name: 'Deloitte India', sector: 'consulting', roles: 'Risk & Technology Analyst', packageRange: '₹7.6 – ₹9.5 LPA' },
  { name: 'EY GDS', sector: 'consulting', roles: 'Cloud & Data Consultant', packageRange: '₹6.8 – ₹8.8 LPA' },
  { name: 'PwC Acceleration Center', sector: 'consulting', roles: 'Enterprise Systems Associate', packageRange: '₹7.2 – ₹9.0 LPA' },
  { name: 'TCS Digital & Prime', sector: 'consulting', roles: 'Systems & AI Specialist', packageRange: '₹7.0 – ₹11.5 LPA' },
];

export const ALUMNI_STORIES: AlumniStory[] = [
  {
    name: 'Kavya Subramanian',
    batch: 'B.E. CSE, Class of 2024',
    program: 'Computer Science & Engineering',
    role: 'Software Development Engineer',
    company: 'Amazon, Bengaluru',
    outcome:
      'Transitioned from second-year algorithms club mentorship to a 6-month internship and full-time SDE offer through the SKCET Career Cell.',
  },
  {
    name: 'Arvindh Natarajan',
    batch: 'B.E. Mechatronics, Class of 2023',
    program: 'Mechatronics Engineering',
    role: 'Robotics Automation Lead',
    company: 'Bosch Rexroth, Coimbatore',
    outcome:
      'Built an autonomous vision-guided palletizer in the Kuniamuthur Robotics Lab that won the Smart India Hackathon before joining Bosch full-time.',
  },
  {
    name: 'Meenakshi Balasubramani',
    batch: 'B.E. ECE, Class of 2025',
    program: 'Electronics & Communication',
    role: 'ASIC Verification Engineer',
    company: 'Texas Instruments, Bengaluru',
    outcome:
      'Completed Cadence physical design certification in Semester VI and published an IEEE conference paper on low-power SRAM architectures.',
  },
];

export const CAMPUS_NOTICES: CampusNotice[] = [
  {
    id: 'n1',
    type: 'notice',
    date: '15 Nov 2026',
    category: 'Admissions',
    title: 'Admissions Inquiry Window Open for 2026–27 Academic Cycle',
    summary: 'Prospective B.E., B.Tech., M.E., MBA, and MCA candidates may register for campus tours and counselling guidance.',
    details:
      'The Admissions Office at Kuniamuthur Campus is open Monday through Saturday from 9:00 AM to 5:00 PM for document guidance, scholarship assessment (merit and first-graduate concessions), and laboratory tours. TNEA Choice Filling counselling workshops will be scheduled following Class XII board results.',
    venueOrRef: 'Ref: SKC/ADM/2026-27/01 · Administrative Block',
  },
  {
    id: 'n2',
    type: 'event',
    date: '28 Nov 2026',
    category: 'Symposium',
    title: 'Krishna TechCon 2026 — National Engineering & AI Colloquium',
    summary: 'Two-day paper presentation, robotics challenge, and industry keynote series hosted across the South Quadrangle.',
    details:
      'Featuring keynote addresses from engineering leaders in Coimbatore and Bengaluru, 14 technical tracks across AI, VLSI, Green Mobility, and Precision Manufacturing, plus a ₹3,50,000 prize pool for working hardware and software prototypes.',
    venueOrRef: 'Main Convention Auditorium, Kuniamuthur',
  },
  {
    id: 'n3',
    type: 'notice',
    date: '10 Nov 2026',
    category: 'Examinations',
    title: 'Autonomous End-Semester Timetable & Practical Schedule (Odd Sem)',
    summary: 'Controller of Examinations publishes final theory and laboratory evaluation dates for II, III, and IV Year cohorts.',
    details:
      'Department-wise practical examinations commence on 25 November 2026, followed by autonomous end-semester theory examinations starting 04 December 2026. Hall tickets can be verified via the Student Academic Portal.',
    venueOrRef: 'Ref: SKC/COE/2026/ODD-08 · Office of COE',
  },
  {
    id: 'n4',
    type: 'event',
    date: '12 Dec 2026',
    category: 'Research',
    title: 'Western Ghats Sustainability & Clean Energy Ideathon',
    summary: 'Inter-collegiate sustainability sprint focused on micro-grid solar optimization and Coimbatore textile effluent recovery.',
    details:
      'Jointly organized by the Centre for Sponsored Research and the Coimbatore District Small Industries Association (CODISSIA). Student teams present viable prototypes for seed incubation grants up to ₹2,00,000.',
    venueOrRef: 'VKS Innovation & Incubation Hub',
  },
];
