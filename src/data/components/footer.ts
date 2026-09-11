import {
  HyperlinkSchema,
  LEGAL,
  NAVIGATE,
  SOCIALS,
  SPONSOR,
} from "../hyperlinks";

export const linksMaxRows: number = 6;
const currentYear = new Date().getFullYear();
export const COPYRIGHT: string = `© ${currentYear} NeKoRoSYS. All Rights Reserved.`;

export const LinkColumns: { title: string; links: HyperlinkSchema[] }[] = [
  { title: "Navigate", links: NAVIGATE },
  { title: "Find Me", links: SOCIALS },
  { title: "Sponsor", links: SPONSOR },
  { title: "Legal", links: LEGAL },
];

export const gridRowsMap: Record<number, string> = {
  1: "grid-rows-1",
  2: "grid-rows-2",
  3: "grid-rows-3",
  4: "grid-rows-4",
  5: "grid-rows-5",
  6: "grid-rows-6",
};
