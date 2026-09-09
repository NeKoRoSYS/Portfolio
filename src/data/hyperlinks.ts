import { Icons } from "../shared/Icons";
import { StaticImageData } from "next/image";
import { RouteMeta } from "./routes";

export interface HyperlinkSchema extends RouteMeta {
  icon?: string | StaticImageData;
}

export const NAVIGATE: HyperlinkSchema[] = [
  { name: "Home", path: "/home" },
  { name: "Portfolio", path: "#portfolio" },
  { name: "Blog", path: "/blog" },
];

export const SOCIALS: HyperlinkSchema[] = [
  {
    name: "Itch.io",
    path: "https://nekorosys.itch.io/",
    icon: Icons.itchioIcon,
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
  {
    name: "TikTok",
    path: "https://tiktok.com/@nekorosys",
    icon: Icons.tiktokIcon,
  },
  {
    name: "YouTube",
    path: "https://youtube.com/@NeKoRoSYS",
    icon: Icons.youtubeIcon,
  },
  {
    name: "GitHub",
    path: "https://github.com/NeKoRoSYS",
    icon: Icons.githubIcon,
  },
  {
    name: "Behance",
    path: "https://behance.net/NeKoRoSYS",
    icon: Icons.behanceIcon,
  },
  {
    name: "LinkedIn",
    path: "https://linkedin.com/in/malibiran-johnmarky",
    icon: Icons.linkedInIcon,
  },
  {
    name: "Payhip",
    path: "https://payhip.com/NeKoRoSYS",
    icon: Icons.payhipIcon,
  },
];

export const SPONSOR: HyperlinkSchema[] = [
  {
    name: "Ko-Fi",
    path: "https://ko-fi.com/NeKoRoSYS",
    icon: Icons.kofiIcon,
  },
  {
    name: "PayPal",
    path: "https://paypal.me/genecromarky",
    icon: Icons.paypalIcon,
  },
  {
    name: "Bitcoin",
    path: "copy:bc1qw80kkgu8yp4mwzuzddygmnyamcjesfavwmer8a",
    icon: Icons.bitcoinIcon,
  },
  {
    name: "Ethereum",
    path: "copy:0x5C429b3fdc7E6F7a692C234358ba31492Feb651C",
    icon: Icons.etheriumIcon,
  },
];

export const LEGAL: HyperlinkSchema[] = [{ name: "Contact", path: "#contact" }];

export const LinkColumns: [title: string, HyperlinkSchema[]][] = [
  ["Navigate", NAVIGATE],
  ["Find Me", SOCIALS],
  ["Sponsor", SPONSOR],
  ["Legal", LEGAL],
];
