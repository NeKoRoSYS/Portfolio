import { Icons } from "../shared/Icons";
import { StaticImageData } from "next/image";

export interface HyperlinkSchema {
  name: string;
  path: string;
  icon?: string | StaticImageData;
}

export const NAVIGATE: HyperlinkSchema[] = [
  { name: "Home", path: "/home" },
  { name: "Contact", path: "/contact" },
  { name: "Blog", path: "/blogs" },
];

export const SOCIALS: HyperlinkSchema[] = [
  {
    name: "GitHub",
    path: "https://github.com/NeKoRoSYS",
    icon: Icons.githubIcon,
  },
  {
    name: "LinkedIn",
    path: "https://linkedin.com/in/malibiran-johnmarky",
    icon: Icons.linkedInIcon,
  },
  {
    name: "Discord",
    path: "https://discord.gg/qJp2ByQZq4",
    icon: Icons.discordIcon,
  },
  {
    name: "Twitter",
    path: "https://twitter.com/NeKoRoSYS",
    icon: Icons.twitterIcon,
  },
];

export const LinkColumns: [title: string, HyperlinkSchema[]][] = [
  ["Navigate", NAVIGATE],
  ["Connect", SOCIALS],
];
