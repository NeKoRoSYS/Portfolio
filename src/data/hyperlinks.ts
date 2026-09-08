import { Icons } from "../shared/Icons";
import { StaticImageData } from "next/image";

export interface HyperlinkSchema {
  name: string;
  path: string;
  isRoute: boolean;
  icon?: string | StaticImageData;
}

export const NAVIGATE: HyperlinkSchema[] = [
  { name: "Home", path: "/home", isRoute: true },
  { name: "Contact", path: "/contact", isRoute: true },
  { name: "Blog", path: "/blogs", isRoute: true },
];

export const SOCIALS: HyperlinkSchema[] = [
  {
    name: "GitHub",
    path: "https://github.com/NeKoRoSYS",
    icon: Icons.githubIcon,
    isRoute: false,
  },
  {
    name: "LinkedIn",
    path: "https://linkedin.com/in/malibiran-johnmarky",
    icon: Icons.linkedInIcon,
    isRoute: false,
  },
  {
    name: "Discord",
    path: "https://discord.gg/qJp2ByQZq4",
    icon: Icons.discordIcon,
    isRoute: false,
  },
  {
    name: "Twitter",
    path: "https://twitter.com/NeKoRoSYS",
    icon: Icons.twitterIcon,
    isRoute: false,
  },
];

export const LinkColumns: [title: string, HyperlinkSchema[]][] = [
  ["Navigate", NAVIGATE],
  ["Connect", SOCIALS],
];
