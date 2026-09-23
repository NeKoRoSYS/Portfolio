import { Stack } from "@/shared/Icons";
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

export interface AchievementProps {
  thumbnail?: string | StaticImageData;
  title: string;
  date: string;
  description: string;
}

export const ACHIEVEMENTS: AchievementProps[] = [
  {
    title: "B.Sc. in Computer Science",
    date: "2026 – 2030 (Expected)",
    description: "Pamantasan ng Lungsod ng Maynila",
  },
];

export interface TechStackProps {
  category?: string;
  description?: string;
  tools?: ToolProps[];
}

export interface ToolProps {
  icon: string | StaticImageData;
  name: string;
  description?: string;
}

export const TECH_STACK: TechStackProps[] = [
  {
    category: "Languages",
    tools: [
      {
        name: "TypeScript",
        icon: Stack.typescriptIcon,
        description:
          "A superset of JavaScript. I use this on all my web apps to promote type-safety. ",
      },
      {
        name: "JavaScript",
        icon: Stack.javascriptIcon,
        description:
          "The base language that allows for dynamic and interactive content for my web apps.",
      },
      {
        name: "C#",
        icon: Stack.csharpIcon,
        description:
          "I use this progamming language for game development on Unity!",
      },
      {
        name: "C++",
        icon: Stack.cppIcon,
        description:
          "C++ is my go-to systems programming language when coding low-level stuff such as 3D renderers.",
      },
      {
        name: "Python",
        icon: Stack.pythonIcon,
        description:
          "I use Python for making the backend for some of my web apps.",
      },
    ],
  },
  {
    category: "Frontend",
    tools: [
      { name: "Next.js", icon: Stack.nextjsIcon },
      { name: "React", icon: Stack.reactIcon },
      { name: "Tailwind CSS", icon: Stack.tailwindIcon },
      { name: "Three.js", icon: Stack.threejsIcon },
      { name: "Vite", icon: Stack.viteIcon },
    ],
  },
  {
    category: "Backend",
    tools: [
      { name: "Node.js", icon: Stack.nodejsIcon },
      { name: "Bun", icon: Stack.bunIcon },
      { name: "PostgreSQL", icon: Stack.postgresqlIcon },
      { name: "SQLite", icon: Stack.sqliteIcon },
      { name: "FastAPI", icon: Stack.fastapiIcon },
      { name: "MongoDB", icon: Stack.mongodbIcon },
      { name: "Supabase", icon: Stack.supabaseIcon },
    ],
  },
  {
    category: "DevOps/SysAd",
    tools: [
      { name: "Linux", icon: Stack.linuxIcon },
      { name: "Git", icon: Stack.gitIcon },
      { name: "Docker", icon: Stack.dockerIcon },
      { name: "Kubernetes", icon: Stack.kubernetesIcon },
      { name: "Bash", icon: Stack.bashIcon },
    ],
  },
  {
    category: "Tools",
    tools: [
      { name: "Unity", icon: Stack.unityIcon },
      { name: "Godot", icon: Stack.godotIcon },
      { name: "VS Code", icon: Stack.vscodeIcon },
      { name: "GitHub", icon: Stack.githubIcon },
      { name: "Vercel", icon: Stack.vercelIcon },
    ],
  },
  {
    category: "Design",
    tools: [
      { name: "Figma", icon: Stack.figmaIcon, description: "UI/UX." },
      {
        name: "Affinity",
        icon: Stack.affinityIcon,
        description:
          "Image manipulation and Vector graphics; I use it for graphic design work the most.",
      },
      {
        name: "Canva",
        icon: Stack.canvaIcon,
        description: "For simpler layout art and publications.",
      },
      {
        name: "IbisPaint",
        icon: Stack.ibispaintIcon,
        description: "Drawing app. I also use it to design graphics on-the-go!",
      },
      {
        name: "Alight Motion",
        icon: Stack.alightmotionIcon,
        description: "Motion graphics app.",
      },
      {
        name: "Blender",
        icon: Stack.blenderIcon,
        description: "3D modelling and renders.",
      },
    ],
  },
];

export interface ProjectProps {
  featured?: boolean;
  title?: string;
  projectLink?: string;
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
    tags: ["Featured", "Arch Linux", "Hyprland", "Bash", "C++"],
  },
  {
    title: "Portfolio",
    projectLink: "https://github.com/NeKoRoSYS/Portfolio",
    thumbnail: ["/projects/tech/portfolio.png"],
    excerpt:
      "This website! Modular, responsive, and interactive frontend with a premium finish.",
    tags: [
      "Featured",
      "Vercel",
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
    ],
  },
  {
    title: "NeKoRoBOT.js",
    projectLink: "https://github.com/NeKoRoSYS/NeKoRoBOT.js",
    excerpt: "Discord bot template with Python backend.",
    tags: ["Featured", "Node.js", "TypeScript", "Discord.js", "Python"],
  },
  {
    title: "DLux Shell",
    projectLink: "https://github.com/NeKoRoSYS/NeKoRoSHELL-DLux-Shell",
    excerpt:
      "Optional upgrade for NeKoRoSHELL which replaces UI components and binaries like waybar with a unified Quickshell setup.",
    tags: ["Arch Linux", "Hyprland", "Quickshell", "Bash", "Qt"],
  },
  {
    title: "NeKONTROLLER",
    projectLink: "https://github.com/NeKoRoSYS/NeKONTROLLER",
    excerpt:
      "Lightweight library for the Unity Engine's New Input System to bootstrap player input management.",
    tags: ["Unity", "C#"],
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

export const FEATURED = TECH_PROJECTS.concat(FEATURED_ART);
