import { Links } from "../shared/Icons";
import { StaticImageData } from "next/image";
import { RouteMeta } from "./routes";
import { BRAND_COLORS, Colors } from "@/shared/Colors";
import { ReactNode } from "react";

export interface HyperlinkSchema extends RouteMeta {
  className?: string;
  altName?: string;
  showHyperlinkIcon?: boolean;
  download?: boolean;
  linkIconClass?: string;
  iconClass?: string;
  labelClass?: string;
  icon?: string | StaticImageData;
  linkIcon?: string | StaticImageData;
  tags?: string[];
}

export interface ButtonSchema extends HyperlinkSchema {
  children?: ReactNode;
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
    tags: ["navigate"],
  },
  {
    name: "About",
    path: "/about",
    tags: ["navigate"],
  },
  {
    altName: "Let's Talk",
    name: "LinkedIn",
    path: "https://linkedin.com/in/malibiran-johnmarky",
    icon: Links.linkedInIcon,
    colors: BRAND_COLORS.linkedin,
    tags: ["business", "contact"],
  },
  {
    altName: "Join the Club",
    name: "Discord",
    path: "https://discord.gg/qJp2ByQZq4",
    icon: Links.discordIcon,
    colors: BRAND_COLORS.discord,
    tags: ["contact", "socials"],
  },
  {
    name: "itch.io",
    path: "https://nekorosys.itch.io/",
    icon: Links.itchioIcon,
    colors: BRAND_COLORS.itchio,
    tags: ["socials"],
  },
  {
    name: "Payhip",
    path: "https://payhip.com/NeKoRoSYS",
    icon: Links.payhipIcon,
    colors: BRAND_COLORS.payhip,
    tags: ["socials"],
  },
  {
    name: "TikTok",
    path: "https://tiktok.com/@nekorosys",
    icon: Links.tiktokIcon,
    colors: BRAND_COLORS.tiktok,
    tags: ["socials"],
  },
  {
    name: "Twitter",
    path: "https://twitter.com/NeKoRoSYS",
    icon: Links.twitterIcon,
    colors: BRAND_COLORS.twitter,
    tags: ["socials"],
  },
  {
    name: "YouTube",
    path: "https://youtube.com/@NeKoRoSYS",
    icon: Links.youtubeIcon,
    colors: BRAND_COLORS.google,
    tags: ["socials"],
  },
  {
    name: "Ko-Fi",
    path: "https://ko-fi.com/NeKoRoSYS",
    icon: Links.kofiIcon,
    colors: BRAND_COLORS.kofi,
    tags: ["sponsor"],
  },
  {
    name: "PayPal",
    path: "https://paypal.me/genecromarky",
    icon: Links.paypalIcon,
    colors: BRAND_COLORS.paypal,
    tags: ["sponsor"],
  },
  {
    name: "Bitcoin",
    path: "copy:bc1qw80kkgu8yp4mwzuzddygmnyamcjesfavwmer8a",
    icon: Links.bitcoinIcon,
    colors: BRAND_COLORS.bitcoin,
  },
  {
    name: "Ethereum",
    path: "copy:0x5C429b3fdc7E6F7a692C234358ba31492Feb651C",
    icon: Links.ethereumIcon,
    colors: BRAND_COLORS.ethereum,
  },
  {
    name: "GitHub",
    path: "https://github.com/NeKoRoSYS",
    icon: Links.githubIcon,
    colors: BRAND_COLORS.github,
    tags: ["business"],
  },
  {
    name: "Behance",
    path: "https://behance.net/NeKoRoSYS",
    icon: Links.behanceIcon,
    colors: BRAND_COLORS.behance,
    tags: ["business"],
  },
  {
    name: "Contact",
    path: "#contact",
    tags: ["legal", "anchor"],
  },
  {
    name: "Privacy Policy",
    path: "/Privacy-Policy.pdf",
    tags: ["legal"],
  },
];

export const getByTag = <T extends HyperlinkSchema = HyperlinkSchema>(
  tag: string,
): T[] => ALL_LINKS.filter((link) => link.tags?.includes(tag)) as T[];

export const NAVIGATE = getByTag("navigate");
export const SOCIALS = getByTag("socials");
export const SPONSOR = getByTag("sponsor");
export const BUSINESS = getByTag("business");
export const CONTACT = getByTag<ButtonSchema>("contact");
export const LEGAL = getByTag("legal");
