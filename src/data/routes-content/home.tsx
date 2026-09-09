import { type SectionProps } from "@/components/Block";
import { HoverPanel, Panel } from "@/components/Panel";
import MarqueeModule from "react-fast-marquee";
const Marquee = (MarqueeModule as any).default || MarqueeModule;

export const HOME = {
  heroTitle: `NeKoRoSYS`,
  heroSubtitle: `Your one-man IT Department.`,
  testTitle: `Lorem Ipsum`,
  testTest: `dolor sit amet, consectetur adipiscing elit. Quisque vel magna nec nulla sollicitudin consectetur.
  Donec non nisl ex. Sed sit amet libero sollicitudin, sodales orci sed, malesuada eros.Fusce nibh sapien, tincidunt
  quis dui a, luctus porta quam. Proin auctor sem non ante scelerisque luctus ac at diam. Integer erat quam, rutrum
  sed sapien molestie, iaculis scelerisque nisi. Nullam lobortis, neque sed ornare volutpat, nisi erat fringilla orci,
  ut mollis arcu ligula nec ex. Proin ex neque, vehicula ac molestie et, consectetur ac magna. Interdum et malesuada
  fames ac ante ipsum primis in faucibus. Etiam sed lobortis metus. Orci varius natoque penatibus et magnis dis parturient
  montes, nascetur ridiculus mus. Etiam facilisis urna eu purus viverra vestibulum. In eget tortor sed lectus finibus mattis.
  Nam faucibus tincidunt est at efficitur.`,
} as const;

export const SECTIONS: SectionProps[] = [
  {
    id: "home",
    title: "Hello, World!",
    text: `I am John Marky G. Malibiran, but I am better known online as NeKoRoSYS! I am a 19-year-old Filipino based in Manila, Philippines.
    Currently in college, I am taking Computer Science as my undergraduate program; hopefully graduating by the year 2030. I aspire to be a
    Software Engineer and Systems Architect, and my goal is to learn a lot of aspects that come in developing software and IoT such as video
    games, utilities, and other systems. I am interested in web, game, and AI/ML development though I also happen to like creating graphic
    and motion designs.`,
  },
  {
    id: "skills",
    bgColor: "bg-zinc-900",
    title: "Skills and Credentials",
    center: true,
    borderVisible: false,
    sections: [
      <div className="col-span-12 md:col-span-6">Test</div>,
      <div className="col-span-12 md:col-span-6">Test</div>,
      <div className="col-span-12 md:col-span-6">Test</div>,
    ],
  },
  {
    id: "portfolio",
    bgColor: "bg-zinc-900",
    title: "My Work",
    center: true,
  },
  {
    id: "contact",
    sections: [
      <div className="col-span-12 md:col-span-6">Test</div>,
      <div className="col-span-12 md:col-span-6">Test</div>,
      <div className="col-span-12 md:col-span-6">Test</div>,
    ],
    borderVisible: false,
    reverse: true,
  },
];
