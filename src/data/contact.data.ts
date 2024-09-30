import {
  faSquarePhone,
  faSquareEnvelope,
  faLocationDot,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import {
  faSquareGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export type Type = "email" | "phone" | "text" | "link";

interface BaseContact {
  type: "phone" | "text" | "email";
  icon: IconDefinition;
  value: string;
}

interface LinkContact extends Omit<BaseContact, "type"> {
  type: "link";
  href: string;
}

export type ContactType = BaseContact | LinkContact;

export const contactData: ContactType[] = [
  {
    type: "email",
    icon: faSquareEnvelope,
    value: "lyhoanganh.hcm05@gmail.com",
  },
  {
    type: "phone",
    icon: faSquarePhone,
    value: "+84963251710",
  },
  {
    type: "link",
    icon: faSquareGithub,
    value: "github.com/AnhGeek",
    href: "https://github.com/AnhGeek",
  },
  {
    type: "link",
    icon: faLinkedin,
    value: "linkedin.com/in/anhlh16",
    href: "https://www.linkedin.com/in/anhlh16/",
  },
  // {
  //   type: "text",
  //   icon: faLocationDot,
  //   value: "Ivrea, Italy",
  // }
];
