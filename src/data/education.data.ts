import { Content } from "@src/@types/common";

export interface School {
  name: string;
  url?: string;
}

export interface Period {
  start: string;
  end: string; // future date if in progress
}

export interface Education {
  degree: string;
  school: School;
  period: Period;
  details?: Content[];
}

export const educationData: Education[] = [
  {
    degree: "Bachelor of Industrial Electrical Engineering",
    school: {
      name: "University of Technology and Education, Viet Nam",
    },
    period: {
      start: "2012",
      end: "2016",
    },
    // details: [
    //   {
    //     type: "paragraph",
    //     value: "I've studied a lot.",
    //   },
    //   {
    //     type: "tags",
    //     items: ["Networking"],
    //   },
    // ],
  },
];
