import { TextHyperlink } from "@/components/Hyperlinks";
import { ReactNode } from "react";
import { EMAIL, EMAIL_LINK } from "../nekorosys";

export const PORTRAIT = "/PORTRAIT.jpg";
export const NAME: string = "John Marky G. Malibiran";
export const LOCATION: string = "Manila, National Capital Region, Philippines";
export const CONTACT_NUMBER: string = "(+63) 921 753 2961";

export const ABOUT_FIELDS: ReactNode[] = [
  <p>BS Computer Science</p>,
  <p>
    Founder of{" "}
    <a href="https://linkedin.com/company/GravenSoft" className="font-bold">
      GravenSoft
    </a>
  </p>,
  <p>Freelancer</p>,
];

export const CONTACT_FIELDS: ReactNode[] = [
  <p className="hidden font-bold @lg:block">{NAME}</p>,
  <p>{LOCATION}</p>,
  <TextHyperlink
    className="pointer-events-auto sm:mx-0 touch-hover:text-green-400"
    showHyperlinkIcon={false}
    path={EMAIL_LINK}
    name={EMAIL}
  />,
  <p className="italic">{CONTACT_NUMBER}</p>,
];
