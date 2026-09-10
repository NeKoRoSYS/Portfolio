import {
  HyperlinkSchema,
  LEGAL,
  NAVIGATE,
  SOCIALS,
  SPONSOR,
} from "../hyperlinks";

const currentYear = new Date().getFullYear();
export const COPYRIGHT: string = `© ${currentYear} NeKoRoSYS. All Rights Reserved.`;

export const LinkColumns: { title: string; links: HyperlinkSchema[] }[] = [
  { title: "Navigate", links: NAVIGATE },
  { title: "Find Me", links: SOCIALS },
  { title: "Sponsor", links: SPONSOR },
  { title: "Legal", links: LEGAL },
];
