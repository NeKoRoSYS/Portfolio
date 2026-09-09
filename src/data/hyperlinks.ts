import { Icons } from "../shared/Icons";
import { StaticImageData } from "next/image";
import { RouteMeta } from "./routes";
import Colors from "@/shared/Colors";

export interface HyperlinkSchema extends RouteMeta {
  icon?: string | StaticImageData;
  tags?: string[];
}

export interface ButtonSchema extends HyperlinkSchema {
  colors?: string;
}

export const ALL_LINKS: (HyperlinkSchema | ButtonSchema)[] = [
  {
    name: "Home",
    path: "/home",
    tags: ["navigate"],
  },
  {
    name: "Portfolio",
    path: "#portfolio",
    tags: ["navigate"],
  },
  {
    name: "Blog",
    path: "/blog",
    tags: ["navigate"],
  },
  {
    name: "Discord",
    path: "https://discord.gg/qJp2ByQZq4",
    icon: Icons.discordIcon,
    colors: Colors.discord,
    tags: ["socials", "contact"],
  },
  {
    name: "TikTok",
    path: "https://tiktok.com/@nekorosys",
    icon: Icons.tiktokIcon,
    tags: ["socials"],
  },
  {
    name: "Twitter",
    path: "https://twitter.com/NeKoRoSYS",
    icon: Icons.twitterIcon,
    tags: ["socials"],
  },
  {
    name: "YouTube",
    path: "https://youtube.com/@NeKoRoSYS",
    icon: Icons.youtubeIcon,
    tags: ["socials"],
  },
  {
    name: "Ko-Fi",
    path: "https://ko-fi.com/NeKoRoSYS",
    icon: Icons.kofiIcon,
    tags: ["sponsor"],
  },
  {
    name: "PayPal",
    path: "https://paypal.me/genecromarky",
    icon: Icons.paypalIcon,
    tags: ["sponsor"],
  },
  {
    name: "Bitcoin",
    path: "copy:bc1qw80kkgu8yp4mwzuzddygmnyamcjesfavwmer8a",
    icon: Icons.bitcoinIcon,
    tags: ["sponsor"],
  },
  {
    name: "Ethereum",
    path: "copy:0x5C429b3fdc7E6F7a692C234358ba31492Feb651C",
    icon: Icons.etheriumIcon,
    tags: ["sponsor"],
  },
  {
    name: "LinkedIn",
    path: "https://linkedin.com/in/malibiran-johnmarky",
    icon: Icons.linkedInIcon,
    colors: Colors.linkedin,
    tags: ["business", "contact"],
  },
  {
    name: "GitHub",
    path: "https://github.com/NeKoRoSYS",
    icon: Icons.githubIcon,
    tags: ["business"],
  },
  {
    name: "Behance",
    path: "https://behance.net/NeKoRoSYS",
    icon: Icons.behanceIcon,
    tags: ["business"],
  },
  {
    name: "Itch.io",
    path: "https://nekorosys.itch.io/",
    icon: Icons.itchioIcon,
    tags: ["business"],
  },
  {
    name: "Payhip",
    path: "https://payhip.com/NeKoRoSYS",
    icon: Icons.payhipIcon,
    tags: ["business"],
  },
  {
    name: "Contact",
    path: "#contact",
    tags: ["legal"],
  },
];

export const getLinksByTag = (tag: string): HyperlinkSchema[] =>
  ALL_LINKS.filter((link) => link.tags?.includes(tag));

export const getButtonsByTag = (tag: string): ButtonSchema[] =>
  ALL_LINKS.filter((link) => link.tags?.includes(tag)) as ButtonSchema[];

export const NAVIGATE = getLinksByTag("navigate");
export const SOCIALS = getLinksByTag("socials");
export const SPONSOR = getLinksByTag("sponsor");
export const BUSINESS = getLinksByTag("business");
export const CONTACT = getButtonsByTag("contact");
export const LEGAL = getLinksByTag("legal");

export const LinkColumns: [title: string, HyperlinkSchema[]][] = [
  ["Navigate", getLinksByTag("navigate")],
  ["Find Me", getLinksByTag("socials")],
  ["Sponsor", getLinksByTag("sponsor")],
  ["Legal", getLinksByTag("legal")],
];
