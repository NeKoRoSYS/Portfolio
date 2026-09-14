import { StaticImageData } from "next/image";

export const EMAIL = "malibiran.johnmarky@gmail.com";
export const EMAIL_LINK = "mailto:malibiran.johnmarky@gmail.com";

export const LETTERS = ["N", "E", "K", "O", "R", "O", "S", "Y", "S"];

export const GLOBAL_KEYWORDS: string[] = [
  "NeKoRoSYS",
  "full-stack developer",
  "software developer",
  "developer",
  "graphic design",
  "layout artist",
  "motion design",
  "illustrator",
  "john",
  "marky",
  "ginete",
  "malibiran",
  "john marky g. malibiran",
  "john marky ginete malibiran",
];

export const ROLES = [
  "Student",
  "Game Developer",
  "Software Developer",
  "Graphic Designer",
  "Layout Designer",
  "Illustrator",
];

export interface ProjectProps {
  featured?: boolean;
  title?: string;
  projectLink: string;
  excerpt?: string;
  description?: string;
  thumbnail?: string[] | StaticImageData[];
  tags?: string[];
}

export const TECH_PROJECTS: ProjectProps[] = [
  {
    title: "NeKoRoSHELL",
    projectLink: "https://github.com/NeKoRoSYS/NeKoRoSHELL",
    thumbnail: ["/projects/tech/nekoroshell.png"],
    excerpt:
      "A custom Arch Linux ricing suite built for the Hyprland window manager.",
    tags: ["Featured", "Arch Linux", "Bash", "C++", "Customization", "Project"],
  },
  {
    title: "Portfolio",
    projectLink: "https://github.com/NeKoRoSYS/Portfolio",
    thumbnail: ["/projects/tech/portfolio.png"],
    excerpt:
      "This website! Modular, responsive, and interactive frontend with a premium finish.",
    tags: [
      "Featured",
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Project",
    ],
  },
  {
    title: "NeKoRoBOT.js",
    projectLink: "https://github.com/NeKoRoSYS/NeKoRoBOT.js",
    excerpt: "Discord bot template with Python backend.",
    tags: [
      "Featured",
      "Node.js",
      "TypeScript",
      "Discord.js",
      "Python",
      "Project",
      "Template",
    ],
  },
];
export const ART_PROJECTS: ProjectProps[] = [
  {
    title: "'BYTES' Banner",
    projectLink:
      "https://www.behance.net/gallery/250082909/BYTES-Media-Marketing-Props",
    thumbnail: ["/projects/art/bytes.jpg"],
    excerpt: "Banner for highschool tech org.",
    tags: ["Featured", "IbisPaint", "Commissioned"],
  },
  {
    title: "'LIFT UP' Banner",
    projectLink:
      "https://www.behance.net/gallery/250083891/Voluntary-Work-for-Student-Org",
    thumbnail: ["/projects/art/liftup.png"],
    excerpt: "Banner for senior highschool STEM org.",
    tags: ["Featured", "Adobe Photoshop", "Commissioned"],
  },
];

export const FEATURED_TECH = TECH_PROJECTS.filter((project) =>
  project.tags?.includes("Featured"),
);

export const STANDARD_TECH = TECH_PROJECTS.filter(
  (project) => !project.tags?.includes("Featured"),
);

export const FEATURED_ART = ART_PROJECTS.filter((project) =>
  project.tags?.includes("Featured"),
);

export const STANDARD_ART = ART_PROJECTS.filter(
  (project) => !project.tags?.includes("Featured"),
);
