import { Content } from "@src/@types/common";

export interface Company {
  name: string;
  url: string;
}

export interface Period {
  start: string;
  end?: string;
}

export interface Position {
  title: string;
  company: Company;
  period: Period;
  details?: Content[];
}

export const workExperienceData: Position[] = [
  {
    title: "AUTOSAR Software Developer",
    company: {
      name: "Bosch Global Software, Viet Nam (full time)",
      url: "https://www.bosch.com.vn/",
    },
    period: {
      start: "Jul 2022",
    },
    details: [
      {
        type: "paragraph",
        value:
          "Integrate new features from AUTOSAR and test them in both virtual environments and on real hardware. Develop Application Software (ASWs) to validate new features from specific vendors and prepare them for client release. Serve as an expert in MEM and Ethernet stacks, providing training across teams.",
      },
      {
        type: "list",
        items: [
          "Work closely with the components team to resolve issues related to their dependencies.",
          "Integrate new functionalities for components (RTE, BSWs, OS) and provide software to client.",
          "Maintain the testing framework for both Linux and Windows versions, while developing new options to enhance the efficiency of the testing process.",
          "Serve as the primary contact for addressing issues from teams and possess expertise in the MEM stack.",
          "Conduct training sessions for the internal team and provide mentorship to new members."
        ],
      },
      {
        type: "tags",
        items: [
          "AUTOSAR",
          "C/C++",
          "Python",
          "Java",
          "CAN stacks",
          "MEM",
          "SecOC",
          "DIAG",
          "Ethernet stacks",
          "AUTOSAR workflow"
        ],
      },
    ],
  },
  {
    title: "AUTOSAR Software Developer",
    company: {
        name: "Bosch Global Software, Viet Nam (full time)",
        url: "https://www.bosch.com.vn/",
    },
    period: {
      start: "Apr 2024",
      end: "Oct 2024",
    },
    details: [
      {
        type: "paragraph",
        value:
          "Helped GMDT (General Motors Delivery Team) to test and integrate BSWs and ASWs from Tier 1, connect all together and release to GM, which is a big customer of company.",
      },
      {
        type: "list",
        items: [
          "Collaborate closely with Tier 1 to gather requirements, conduct research, and write documentation for new and unique features;",
          "Testing and feedback to the MVP and solutions for new ideas;",
          "Connect new functionalities from Tier 1 with current BSW to fulfill GM's requirements;",
          "Debugging software's issue on new target.",
          "Porting MCAL, OS from the current software to new target device.",
          "Also responsible for dependency upgrades like new BSW stacks, RTE connections;",
        ],
      },
      {
        type: "tags",
        items: [
          "AUTOSAR",
          "C/C++",
          "Assembly",
          "Python",
          "Circuit Debugging",
          "RTOS",
          "MultiCore debug",
          "CAN",
          "SOMEIP-SD",
          "SecOC",
          "Ethernet",
          "MCAL porting",
        ],
      },
    ],
  },
  {
    title: "SOFTWARE DEVELOPER",
    company: {
      name: "FPT Software, Viet Nam",
      url: "https://fptsoftware.com//",
    },
    period: {
      start: "Dec 2019",
      end: "Jul 2022",
    },
    details: [
      {
        type: "paragraph",
        value:
          "Worked at one of the biggest IT companies in Viet Nam, on multiple software projects simultaneously with different clients from different markets, and had strong expertise in translating the client's specific needs into easy-to-understand software solutions, ensuring that client's; vision and requirements were met.",
      },
      {
        type: "list",
        items: [
          "Meet with clients and stakeholders to gather requirements, conduct research, and create detailed plans and specifications for new functionality;",
          "Test new software functionalities;",
          "Integrations software and deliver to test team to proceed a test plan;",
          "Automation of tasks and processes focused on improving productivity;",
          "Desing test case and convert manual test cases to automatic test cases;",
          "Supervised and led a team of testers.",
        ],
      },
      {
        type: "tags",
        items: [
          "Automation test",
          "Integrator",
          "Test plan",
          "Lead",
          "Training",
        ],
      },
    ],
  },
];
