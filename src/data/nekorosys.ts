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

export const PROJECTS: ProjectProps[] = [{}];
