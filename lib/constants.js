/***
 ****************************************************** 
 ******************** MODULES START *******************
 ****************************************************** 
 */

const PART_1_CMA_US = [
  {
    name: "External Financial Reporting Decisions",
    weightage: 15
  },
  {
    name: "Planning, Budgeting and Forecasting",
    weightage: 20
  },
  {
    name: "Performance Management",
    weightage: 20
  },
  {
    name: "Cost Management",
    weightage: 15
  },
  {
    name: "Internal Controls",
    weightage: 15
  },
  {
    name: "Technology and Analytics",
    weightage: 15
  },
]

const PART_2_CMA_US = [
  {
    name: "Financial Statement Analysis",
    weightage: 20
  },
  {
    name: "Corporate Finance",
    weightage: 20
  },
  {
    name: "Business Decision Analysis",
    weightage: 25
  },
  {
    name: "Enterprise Risk Management",
    weightage: 10
  },
  {
    name: "Capital Investment Decisions",
    weightage: 10
  },
  {
    name: "Professional Ethics",
    weightage: 15
  },
]

const MODULES = {
  CMA_US: {
    PART_1: PART_1_CMA_US, 
    PART_2: PART_2_CMA_US,
  }
}


/***
 ****************************************************** 
 ******************** MODULES END *********************
 ****************************************************** 
 */


/***
 ****************************************************** 
 ******************** COURSES START *******************
 ****************************************************** 
 */

export const CA = {
  foundation: {
    group: [
      {
        minAggPass: 200,
        aggTotal: 400,
      },
    ],
    syllabus: [
      [
        {
          name: "Accounting",
          pass: 40,
          descriptive: 100,
        },
        {
          name: "Business Laws",
          pass: 40,
          descriptive: 100,
        },
        {
          name: "Quantitative Aptitude",
          pass: 40,
          objective: 100,
        },
        {
          name: "Business Economics",
          pass: 40,
          objective: 100,
        },
      ],
    ],
  },
  intermediate: {
    group: [
      {
        name: "Group 1",
        minAggPass: 150,
        aggTotal: 300,
      },
      {
        name: "Group 2",
        minAggPass: 150,
        aggTotal: 300,
      },
    ],
    syllabus: [
      [
        {
          name: "Advanced Accounting",
          pass: 40,
          descriptive: 70,
          objective: 30,
        },
        {
          name: "Corporate & Other Law",
          pass: 40,
          descriptive: 70,
          objective: 30,
        },
        {
          name: "Taxation",
          description: ["Income-Tax Law", "Goods and Services Tax"],
          pass: 40,
          descriptive: 70,
          objective: 30,
        },
      ],
      [
        {
          name: "Cost and Management Accounting",
          pass: 40,
          descriptive: 70,
          objective: 30,
        },
        {
          name: "Auditing & Ethics",
          pass: 40,
          descriptive: 70,
          objective: 30,
        },
        {
          name: "Financial and Strategic Management",
          pass: 40,
          descriptive: 70,
          objective: 30,
        },
      ],
    ],
  },
  final: {
    group: [
      {
        name: "Group 1",
        minAggPass: 150,
        aggTotal: 300,
      },
      {
        name: "Group 2",
        minAggPass: 150,
        aggTotal: 300,
      },
    ],
    syllabus: [
      [
        {
          name: "Financial Reporting",
          pass: 40,
          descriptive: 70,
          objective: 30,
        },
        {
          name: "Advanced Financial Management",
          pass: 40,
          descriptive: 70,
          objective: 30,
        },
        {
          name: "Advanced Auditing Assurance & Professional Ethics",
          pass: 40,
          descriptive: 70,
          objective: 30,
        },
      ],
      [
        {
          name: "Direct Tax Law & International Taxation",
          pass: 40,
          descriptive: 70,
          objective: 30,
        },
        {
          name: "Indirect Tax Law",
          description: ["Goods & Services Tax", "Customs & FTP"],
          pass: 40,
          descriptive: 70,
          objective: 30,
        },
        {
          name: "Integrated Business Solution",
          pass: 40,
          descriptive: 70,
          objective: 30,
        },
      ],
    ],
  },
};

export const CMA_IND = {
  CAT: {
    group: [
      {
        minAggPass: 100,
        aggTotal: 200,
      },
    ],
    syllabus: [
      [
        {
          name: [
            {
              value: "Fundamentals of Financial Accounting",
              weightage: 60,
            },
            {
              value: "Applied Business and Industrial Laws",
              weightage: 40,
            },
          ],
          pass: 40,
          descriptive: 100,
        },
        {
          name: [
            {
              value: "Financial Accounting-2",
              weightage: 50,
            },
            {
              value: "Statutory Compliance",
              weightage: 50,
            },
          ],
          pass: 40,
          descriptive: 100,
        },
      ],
    ],
  },
  Intermediate: {
    group: [
      {
        name: "Group 1",
        minAggPass: 200,
        aggTotal: 400,
      },
      {
        name: "Group 2",
        minAggPass: 200,
        aggTotal: 400,
      },
    ],
    syllabus: [
      [
        {
          name: ["Business laws and Ethics"],
          pass: 40,
          descriptive: 100,
        },
        {
          name: ["Financial Accouting"],
          pass: 40,
          descriptive: 100,
        },
        {
          name: ["Direct taxation", "Indirect taxation"],
          pass: 40,
          descriptive: 100,
        },
        {
          name: ["Cost Accounting"],
          pass: 40,
          descriptive: 100,
        },
      ],
      [
        {
          name: ["Operations Management and Strategic Management"],
          pass: 40,
          descriptive: 100,
        },
        {
          name: ["Corporate Accounting and Auditing"],
          pass: 40,
          descriptive: 100,
        },
        {
          name: ["Financial Management and Business Data Analytics"],
          pass: 40,
          descriptive: 100,
        },
        {
          name: ["Management Accounting"],
          pass: 40,
          descriptive: 100,
        },
      ],
    ],
  },
  Final: {
    group: [
      {
        name: "Group 1",
        minAggPass: 200,
        aggTotal: 400,
      },
      {
        name: "Group 2",
        minAggPass: 200,
        aggTotal: 400,
      },
    ],
    syllabus: [
      [
        {
          name: ["Corporate And Economic Laws (CEL)"],
          pass: 40,
          descriptive: 100,
        },
        {
          name: ["Strategic Financial Management (SFM)"],
          pass: 40,
          descriptive: 100,
        },
        {
          name: ["Direct Tax Laws And International Taxation"],
          pass: 40,
          descriptive: 100,
        },
        {
          name: ["Strategic Cost Management (SCM)"],
          pass: 40,
          descriptive: 100,
        },
      ],
      [
        {
          name: ["Cost And Management Audit (CMAD)"],
          pass: 40,
          descriptive: 100,
        },
        {
          name: ["Corporate Finanacial Reporting (CFR)"],
          pass: 40,
          descriptive: 100,
        },
        {
          name: ["Indirect Tax Laws And Practice (ITLP)"],
          pass: 40,
          descriptive: 100,
        },
        {
          name: [
            "Strategic Performance Management And Business Valuation (SPMBV)",
            "Risk Management In Banking And Insurance (RMBI)",
            "Entrepreneurship And Startup (ENTS)",
          ],
          pass: 40,
          isElective: true,
          descriptive: 100,
        },
      ],
    ],
  },
};

export const CS = {
  CSEET: {
    group: [
      {
        minAggPass: 100,
        aggTotal: 200,
      },
    ],
    syllabus: [
      [
        {
          name: "Business Communication",
          pass: 20,
          total: 50,
          objective: 100,
        },
        {
          name: ["Legal Aptitude", "Logical Reasoning"],
          pass: 20,
          total: 50,
          objective: 100,
        },
        {
          name: ["Economics", "Business Environment"],
          pass: 20,
          total: 50,
          objective: 100,
        },
        {
          name: ["Current Affairs", "Quantitative Aptitude"],
          pass: 20,
          total: 50,
          objective: 100,
        },
      ],
    ],
  },
  "CS Executive": {
    group: [
      {
        name: "Group 1",
        minAggPass: 200,
        aggTotal: 400,
      },
      {
        name: "Group 2",
        minAggPass: 150,
        aggTotal: 300,
      },
    ],
    syllabus: [
      [
        {
          name: "Jurisprudence, Interpretation & General Laws",
          pass: 40,
          descriptive: 100,
        },
        {
          name: "Company Law & Practice",
          pass: 40,
          descriptive: 100,
        },
        {
          name: "Setting Up of Business, Industrial & Labour Laws",
          pass: 40,
          descriptive: 100,
        },
        {
          name: "Corporate Accounting and Financial Management",
          pass: 40,
          descriptive: 100,
        },
      ],
      [
        {
          name: "Capital Market & Securities Laws",
          pass: 40,
          descriptive: 100,
        },
        {
          name: "Economic, Commercial and Intellectual Property Laws",
          pass: 40,
          descriptive: 100,
        },
        {
          name: "Tax Laws & Practice",
          pass: 40,
          descriptive: 100,
        },
      ],
    ],
  },
  "CS Professional": {
    group: [
      {
        name: "Group 1",
        minAggPass: 200,
        aggTotal: 400,
      },
      {
        name: "Group 2",
        minAggPass: 150,
        aggTotal: 300,
      },
    ],
    syllabus: [
      [
        {
          name: "Environmental, Social And Governance(ESG) – Principles & Practice",
          pass: 40,
          descriptive: 100,
        },
        {
          name: "Drafting, Pleading And Appearances",
          pass: 40,
          descriptive: 100,
        },
        {
          name: "Compliance Management, Audit & Due Diligence",
          pass: 40,
          descriptive: 100,
        },
        {
          name: [
            "CSR & Social Governance",
            "Internal and Forensic Audit",
            "Intellectual Property Rights – Law & Practice",
            "Artificial Intelligence, Data Analytics and Cyber Security – Laws & Practice",
          ],
          isElective: true,
          pass: 40,
          descriptive: 100,
        },
      ],
      [
        {
          name: "Strategic Management and Corporate Finance",
          pass: 40,
          descriptive: 100,
        },
        {
          name: "Corporate Restructuring, Valuation And Insolvency",
          pass: 40,
          descriptive: 100,
        },
        {
          name: [
            "Arbitration, Mediation & Conciliation",
            "Goods and Services Tax (GST) & Corporate Tax Planning",
            "Labour Laws & Practice",
            "Banking & Insurance – Laws & Practice",
            "Insolvency and Bankruptcy – Law & Practice",
          ],
          isElective: true,
          pass: 40,
          descriptive: 100,
        },
      ],
    ],
  },
};

export const ACCA = {
  "Applied Knowledge": {
    syllabus: [
      [
        {
          name: "F1: Business & Technology",
          pass: 50,
          objective: 100,
        },
        {
          name: "F2: Management Accounting",
          pass: 50,
          objective: 100,
        },
        {
          name: "F3: Financial Accounting",
          pass: 50,
          objective: 100,
        },
      ],
    ],
  },
  "Applied Skills": {
    syllabus: [
      [
        {
          name: "F4: Corporate and Business Law",
          pass: 50,
          objective: 100,
        },
        {
          name: "F5: Performance Management",
          pass: 50,
          objective: 60,
          descriptive: 40,
        },
        {
          name: "F6: Taxation",
          pass: 50,
          objective: 60,
          descriptive: 40,
        },
        {
          name: "F7: Financial Reporting",
          pass: 50,
          objective: 60,
          descriptive: 40,
        },
        {
          name: "F8: Audit and Assurance",
          pass: 50,
          objective: 60,
          descriptive: 40,
        },
        {
          name: "F9: Financial Management",
          pass: 50,
          objective: 60,
          descriptive: 40,
        },
      ],
    ],
  },
  "Strategic Professional": {
    group: [
      {
        name: "Mandatory Papers",
      },
      {
        name: "Optional Papers",
      },
    ],
    syllabus: [
      [
        {
          name: "Strategic Business Leader",
          pass: 50,
          descriptive: 100,
        },
        {
          name: "Strategic Business Reporting",
          pass: 50,
          descriptive: 100,
        },
      ],
      [
        {
          name: "Advanced Financial Management",
          pass: 50,
          descriptive: 100,
        },
        {
          name: "Advanced Performance Management",
          pass: 50,
          descriptive: 100,
        },
        {
          name: "Advanced Taxation",
          pass: 50,
          descriptive: 100,
        },
        {
          name: "Advanced Audit and Assurance",
          pass: 50,
          descriptive: 100,
        },
      ],
    ],
  },
};

export const CMA_US_COURSE = [
  {
    name: "Part 1",
    pass: 360,
    total: 500,
    descriptive: 25,
    objective: 75,
    modules: MODULES.CMA_US.PART_1
  },
  {
    name: "Part 2",
    pass: 360,
    total: 500,
    descriptive: 25,
    objective: 75,
    modules: MODULES.CMA_US.PART_2
  },
]

const COURSES = {
  CA,
  CMA_IND,
  CS,
  ACCA,
  CMA_US: CMA_US_COURSE
}

/***
 ****************************************************** 
 ******************** COURSES END *********************
 ****************************************************** 
 */

/***
 ****************************************************** 
 ****************** OPTIONS START *********************
 ****************************************************** 
 */

const courseOptions = [
  { label: "CA", value: "ca" },
  { label: "CMA (India)", value: "cma-ind" },
  { label: "CS", value: "cs" },
  { label: "CMA (US)", value: "cma-us" },
  { label: "ACCA", value: "acca" },
];

const OPTIONS = {
  courseOptions
}

/***
 ****************************************************** 
 ******************** OPTIONS END *********************
 ****************************************************** 
 */

export const CONSTS = {
  COURSES,
  MODULES,
  OPTIONS
};
