import { Icons } from "../shared/Icons";
import { StaticImageData } from "next/image";
import { RouteMeta } from "./routes";
import { BRAND_COLORS, Colors } from "@/shared/Colors";

export interface HyperlinkSchema extends RouteMeta {
  altName?: string;
  iconClass?: string;
  icon?: string | StaticImageData;
  tags?: string[];
}

export interface ButtonSchema extends HyperlinkSchema {
  colors?: string;
}

export const ALL_LINKS: (HyperlinkSchema | ButtonSchema)[] = [
  {
    name: "Home",
    path: "/",
    tags: ["navigate", "anchor"],
  },
  {
    name: "Portfolio",
    path: "#portfolio",
    tags: ["navigate", "anchor"],
  },
  {
    name: "Blog",
    path: "/blog",
    tags: ["navigate", "anchor"],
  },
  {
    altName: "Let's Talk",
    name: "LinkedIn",
    path: "https://linkedin.com/in/malibiran-johnmarky",
    icon: Icons.linkedInIcon,
    colors: BRAND_COLORS.linkedin,
    tags: ["business", "contact"],
  },
  {
    altName: "Connect",
    name: "Discord",
    path: "https://discord.gg/qJp2ByQZq4",
    icon: Icons.discordIcon,
    colors: Colors.buttonMuted,
    tags: ["contact", "socials"],
  },
  {
    name: "Itch.io",
    path: "https://nekorosys.itch.io/",
    icon: Icons.itchioIcon,
    colors: BRAND_COLORS.itchio,
    tags: ["socials"],
  },
  {
    name: "Payhip",
    path: "https://payhip.com/NeKoRoSYS",
    icon: Icons.payhipIcon,
    colors: BRAND_COLORS.payhip,
    tags: ["socials"],
  },
  {
    name: "TikTok",
    path: "https://tiktok.com/@nekorosys",
    icon: Icons.tiktokIcon,
    colors: BRAND_COLORS.tiktok,
    tags: ["socials"],
  },
  {
    name: "Twitter",
    path: "https://twitter.com/NeKoRoSYS",
    icon: Icons.twitterIcon,
    colors: BRAND_COLORS.twitter,
    tags: ["socials"],
  },
  {
    name: "YouTube",
    path: "https://youtube.com/@NeKoRoSYS",
    icon: Icons.youtubeIcon,
    colors: BRAND_COLORS.google,
    tags: ["socials"],
  },
  {
    name: "Ko-Fi",
    path: "https://ko-fi.com/NeKoRoSYS",
    icon: Icons.kofiIcon,
    colors: BRAND_COLORS.kofi,
    tags: ["sponsor"],
  },
  {
    name: "PayPal",
    path: "https://paypal.me/genecromarky",
    icon: Icons.paypalIcon,
    colors: BRAND_COLORS.paypal,
    tags: ["sponsor"],
  },
  {
    name: "Bitcoin",
    path: "copy:bc1qw80kkgu8yp4mwzuzddygmnyamcjesfavwmer8a",
    icon: Icons.bitcoinIcon,
    colors: BRAND_COLORS.bitcoin,
  },
  {
    name: "Ethereum",
    path: "copy:0x5C429b3fdc7E6F7a692C234358ba31492Feb651C",
    icon: Icons.ethereumIcon,
    colors: BRAND_COLORS.ethereum,
  },
  {
    name: "GitHub",
    path: "https://github.com/NeKoRoSYS",
    icon: Icons.githubIcon,
    colors: BRAND_COLORS.github,
    tags: ["business"],
  },
  {
    name: "Behance",
    path: "https://behance.net/NeKoRoSYS",
    icon: Icons.behanceIcon,
    colors: BRAND_COLORS.behance,
    tags: ["business"],
  },
  {
    name: "Contact",
    path: "#contact",
    tags: ["legal", "anchor"],
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
