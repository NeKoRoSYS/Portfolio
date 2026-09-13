import { StaticImageData } from "next/image";

export const LETTERS = ["N", "E", "K", "O", "R", "O", "S", "Y", "S"];

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
  excerpt?: string;
  description?: string;
  thumbnail?: string[] | StaticImageData[];
  tags?: string[];
}

export const TECH_PROJECTS: ProjectProps[] = [
  {
    title: "NeKoRoSHELL",
    thumbnail: ["/projects/tech/nekoroshell.png"],
    excerpt:
      "A custom Arch Linux ricing suite built for the Hyprland window manager.",
    tags: ["Featured", "Arch Linux", "Bash", "C++", "Customization", "Project"],
  },
  {
    title: "Portfolio",
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
    title: "NeKoRoBOT",
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
    thumbnail: ["/projects/art/bytes.jpg"],
    excerpt: "Banner for highschool tech org.",
    tags: ["Featured", "IbisPaint", "Commissioned"],
  },
  {
    title: "'LIFT UP' Banner",
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
