import { TextHyperlink } from "@/components/Hyperlinks";
import { ReactNode } from "react";
import { EMAIL, EMAIL_LINK } from "../nekorosys";

export const PORTRAIT = "/PORTRAIT.jpg";
export const NAME: string = "John Marky G. Malibiran";
export const LOCATION: string = "Manila, National Capital Region, Philippines";
export const CONTACT_NUMBER: string = "(+63) 921 753 2961";

export const ABOUT_FIELDS: ReactNode[] = [
  <p key="course">BS Computer Science</p>,
  <p key="founder">
    Founder of{" "}
    <a href="https://linkedin.com/company/GravenSoft" className="font-bold">
      GravenSoft
    </a>
  </p>,
  <p key="freelance">Freelancer</p>,
];

export const CONTACT_FIELDS: ReactNode[] = [
  <p key="name" className="hidden font-bold @lg:block">
    {NAME}
  </p>,
  <p key="location">{LOCATION}</p>,
  <TextHyperlink
    key="email"
    className="pointer-events-auto sm:mx-0 touch-hover:text-green-400"
    showHyperlinkIcon={false}
    path={EMAIL_LINK}
    name={EMAIL}
  />,
  <p key="number" className="italic">
    {CONTACT_NUMBER}
  </p>,
];
