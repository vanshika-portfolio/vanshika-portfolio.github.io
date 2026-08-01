export const profile = {
  name: "Vanshika Singla",
  short: "VS",
  role: "Software Engineer · Data Engineer",
  location: "Vancouver, BC · Canada",
  headline: ["Engineering systems.", "Interpreting data.", "Building for scale."],
  summary:
    "Computer Science and Data Science graduate from UBC. I build reliable backend and data infrastructure — and advise organisations on where automation actually pays off.",
  email: "vanshikasingla09@gmail.com",
  github: "https://github.com/PaintedW0lf",
  linkedin: "https://www.linkedin.com/in/vanshika-singla",
  tutoring: "https://edu-tainment.lovable.app/",
};

export const metrics = [
  { value: "4.33", label: "GPA / 4.33", note: "UBC, CS + Data Science" },
  { value: "198", label: "Retail stores", note: "POS rollout QA led" },
  { value: "60%", label: "Downtime cut", note: "via Azure automation" },
  { value: "8", label: "Awards", note: "incl. NASA design comp" },
];

export type Role = {
  org: string;
  title: string;
  period: string;
  kind: string;
  points: string[];
  stack: string[];
};

export const roles: Role[] = [
  {
    org: "Amazon Web Services",
    title: "Software Engineer",
    period: "May — Jul 2025",
    kind: "Internship",
    points: [
      "Engineered a GDPR-compliant microservice serving millions of EC2 accounts.",
      "Designed DynamoDB tables with TTL automation covering 30+ account states.",
      "Integrated AWS APIs across 15+ namespaces using SNS, SQS and Lambda.",
    ],
    stack: ["Ruby", "AWS Lambda", "DynamoDB", "SNS", "SQS", "GDPR"],
  },
  {
    org: "Employment and Social Development Canada",
    title: "Data Engineer",
    period: "Jan — Apr 2025",
    kind: "Government",
    points: [
      "Designed data pipelines on Azure Synapse with Spark and PySpark.",
      "Optimised SQL for Big Data ELT processes across departmental datasets.",
    ],
    stack: ["Azure Synapse", "Apache Spark", "PySpark", "SQL", "Data Factory"],
  },
  {
    org: "BC Liquor Distribution Branch",
    title: "Quality Assurance Analyst",
    period: "May — Dec 2024",
    kind: "Crown corporation",
    points: [
      "Led QA for point-of-sale upgrades across 198 retail stores.",
      "Reduced downtime by 60% through Azure test automation.",
    ],
    stack: ["Azure DevOps", "Agile/Kanban", "Test Automation", "QA Strategy"],
  },
  {
    org: "University of British Columbia",
    title: "Teaching Assistant · Academic Tutor · Research Assistant",
    period: "2023 — 2024",
    kind: "Education",
    points: [
      "Instructed 50+ students in project management software and supported 34+ in differential calculus.",
      "Tutored across statistics, mathematics, management and computer science at the Student Learning Hub.",
      "Transformed research datasets into publication-ready LaTeX formats.",
    ],
    stack: ["Teaching", "Statistics", "Calculus", "LaTeX"],
  },
];


export type Lead = {
  org: string;
  title: string;
  period: string;
  kind: string;
  points: string[];
  stack: string[];
};

export const leadership: Lead[] = [
  {
    org: "When the Village Mediates",
    title: "VP of the Board & Lead Technical Consultant",
    period: "2026 — Present",
    kind: "NGO · Board leadership",
    points: [
      "Drive AI-powered workflow automation strategy, translating community needs into practical technical solutions with a founding-team mindset.",
      "Advise leadership on technology strategy and process optimisation; work with the board and community stakeholders on governance and long-term scaling.",
    ],
    stack: ["AI Strategy", "Workflow Automation", "Governance", "Technical Advising"],
  },
  {
    org: "FORA (Female Occupational Role Advancement)",
    title: "Young Director",
    period: "2022 — 2023",
    kind: "Nonprofit · Governance",
    points: [
      "Served as a Young Director, completing nonprofit governance training in fiduciary oversight, ethical fundraising and compliance.",
      "Contributed a youth perspective to board discussions on programming and community outreach.",
    ],
    stack: ["Board Governance", "Fiduciary Oversight", "Fundraising Ethics"],
  },
  {
    org: "Edu-tainment",
    title: "Founder & CEO",
    period: "2020 — 2023",
    kind: "Philanthropy · Education",
    points: [
      "Founded and ran a nonprofit tutoring initiative supporting students through pandemic remote learning.",
      "Built the programme end to end — tutor recruitment, curriculum, scheduling and the platform itself.",
    ],
    stack: ["Nonprofit Ops", "Strategic Planning", "Entrepreneurship"],
  },
];

export type Project = {
  title: string;
  tag?: string;
  blurb: string;
  stack: string[];
  href: string;
  linkLabel: string;
};

export const projects: Project[] = [
  {
    title: "Brewlytics — Café Digital Twin",
    tag: "Hackathon winner · 1.5 days",
    blurb:
      "A full digital-twin simulation engine. Monte Carlo over stochastic discrete-event simulation predicts revenue, profit, wait times and abandonment across hundreds of scenarios, with an AI hypothesis builder on GPT-4o-mini.",
    stack: ["React", "TypeScript", "FastAPI", "Python", "Monte Carlo", "GPT-4o"],
    href: "https://github.com/PaintedW0lf/Brewlytics-Business-Support",
    linkLabel: "Source",
  },
  {
    title: "Scalable LLM Auto-Grading System",
    tag: "Directed studies · 100+ students",
    blurb:
      "End-to-end AI-assisted grading and feedback for PrairieLearn, integrating Gemini, OpenAI and a secure UBC-hosted LLM — extended into Canvas quizzes via H5P and deployed to enrolled UBCO courses.",
    stack: ["Python", "Gemini", "OpenAI", "H5P", "PrairieLearn"],
    href: "https://github.com/PrairieLearnUBCO/pl-ubco-cosc304",
    linkLabel: "Source",
  },
  {
    title: "Transformer From Scratch",
    tag: "Directed studies · research",
    blurb:
      "Multi-head attention, positional encoding and full training pipelines implemented from first principles in PyTorch, then trained on philosophy corpora to study representational bias through controlled attention and convergence experiments.",
    stack: ["PyTorch", "Python", "NLP", "Deep Learning"],
    href: "https://github.com/bohuie/LLMTraining",
    linkLabel: "Source",
  },

  {
    title: "Game of Amazons AI Bot",
    tag: "3rd of 23 teams",
    blurb: "Minimax with alpha-beta pruning and heuristic evaluation.",
    stack: ["Java", "Game Theory"],
    href: "https://github.com/PaintedW0lf/AI-bot-training",
    linkLabel: "Source",
  },
  {
    title: "Space Watch",
    tag: "Built in 24h",
    blurb: "Security-focused face recognition using YOLOv8 and PyTorch.",
    stack: ["OpenCV", "YOLOv8", "Flask"],
    href: "https://github.com/PaintedW0lf/BChacks-",
    linkLabel: "Source",
  },
  {
    title: "Aid-Finder",
    blurb: "Food bank and shelter locator with real-time Firebase tracking.",
    stack: ["Java", "Firebase", "Android"],
    href: "https://github.com/PaintedW0lf/AID-FINDER",
    linkLabel: "Source",
  },
  {
    title: "EduPool",
    blurb: "Flask e-learning platform with course management and Selenium tests.",
    stack: ["Flask", "MySQL", "REST"],
    href: "https://github.com/PaintedW0lf/EduPool",
    linkLabel: "Source",
  },
  {
    title: "Elevating ACME",
    tag: "Top 5 of ~150",
    blurb: "Forecasting and linear regression over operational data.",
    stack: ["SQL", "Power Pivot", "Excel"],
    href: "https://github.com/PaintedW0lf/Elevating-ACME",
    linkLabel: "Source",
  },
  {
    title: "ETF Creation & Stock Analysis",
    blurb: "Technology-sector ETF models from profitability and volatility analysis.",
    stack: ["Tableau", "Python", "Seaborn"],
    href: "https://github.com/PaintedW0lf/ETF_creation-Stock_Analysis",
    linkLabel: "Source",
  },
  {
    title: "Automated Résumé Creator",
    tag: "In progress",
    blurb: "Data mining pipeline for personalised résumé generation.",
    stack: ["Docker", "Python", "Gemini"],
    href: "https://github.com/PaintedW0lf/capstone-project-team-3-Data-Mining",
    linkLabel: "Source",
  },
  {
    title: "Edu-tainment Tutoring",
    blurb: "Live tutoring platform with personalised sessions and resources.",
    stack: ["EdTech", "Tutoring"],
    href: "https://edu-tainment.lovable.app/",
    linkLabel: "Visit",
  },
];

export const awards = [
  "1st Place — Canadian Space Settlement Design Competition, NASA",
  "Hackathon Winner — Brewlytics Digital Twin",
  "Dean's Honour List — 2021, 2022, 2023",
  "3rd Place — Game of Amazons AI Tournament",
  "Top 5 — Data Analysis Project (cohort of ~150)",
  "Rick and Yasmin Thorpe Scholarship",
  "Undergraduate Mathematics Award",
  "Data Analysis Badge — UBC",
];
