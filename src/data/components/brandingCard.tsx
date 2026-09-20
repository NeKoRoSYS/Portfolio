import { TextHyperlink } from "@/components/Hyperlinks";
import { ReactNode } from "react";
import { EMAIL, EMAIL_LINK } from "../nekorosys";

export const PORTRAIT = "/PORTRAIT.jpg";
export const NAME: string = "John Marky G. Malibiran";
export const LOCATION: string = "Manila, National Capital Region, Philippines";
export const CONTACT_NUMBER: string = "(+63) 921 753 2961";

export type BrandingField = {
  text: string;
  link?: { url: string; text: string };
  isBold?: boolean;
  isItalic?: boolean;
};

export const ABOUT_FIELDS: BrandingField[] = [
  { text: "BS Computer Science" },
  {
    text: "Founder of ",
    link: {
      url: "https://linkedin.com/company/GravenSoft",
      text: "GravenSoft",
    },
  },
  { text: "Freelancer" },
];

export const CONTACT_FIELDS: BrandingField[] = [
  { text: `${NAME}`, isBold: true },
  { text: `${LOCATION}` },
  { text: "", link: { url: EMAIL_LINK, text: EMAIL } },
  { text: `${CONTACT_NUMBER}`, isItalic: true },
];
