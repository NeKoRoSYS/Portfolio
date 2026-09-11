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

interface ProjectProps {
  featured?: boolean;
  title?: string;
  excerpt?: string;
  description?: string;
  thumbnail?: string | StaticImageData;
  tags?: string[];
}

export const TECH_PROJECTS: ProjectProps[] = [
  { tags: ["Featured"] },
  { tags: ["Featured"] },
  { tags: ["Featured"] },
  { tags: [""] },
];
export const ART_PROJECTS: ProjectProps[] = [
  { tags: ["Featured"] },
  { tags: ["Featured"] },
  { tags: ["Featured"] },
  { tags: [""] },
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
