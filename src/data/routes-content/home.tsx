import { type SectionProps } from "@/components/Block";
import Button from "@/components/Buttons";
import { HoverPanel, Panel } from "@/components/Panel";
import { BackgroundAscii } from "@/components/VideoPlayer";
import MarqueeModule from "react-fast-marquee";
import { CONTACT } from "../hyperlinks";
import Grid from "@/components/Grid";
import { Spotlight } from "@/components/motion-primitives/spotlight";
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
    sections: [
      <div className="col-span-12 mb-8 lg:col-span-5 lg:mb-0">
        <div className="flex h-full w-full flex-wrap items-center justify-start">
          <h3 className="text-center text-4xl md:text-5xl lg:text-left lg:text-6xl">
            Hello, World!
          </h3>
        </div>
      </div>,
      <div className="col-span-12 lg:col-span-7">
        <Panel className="flex min-h-45 w-full flex-col items-center justify-center rounded-3xl border border-zinc-400 bg-zinc-900 sm:pointer-events-auto">
          <div className="flex h-full w-full grow flex-col items-center justify-center p-4">
            <p>
              I am John Marky G. Malibiran, but I am better known online as{" "}
              <b>NeKoRoSYS</b>! I am a 19-year-old Filipino currently taking
              Computer Science as my undergraduate program.
            </p>
            <br />
            <p>
              I aspire to be a Software Engineer and Systems Architect, and my
              goal is to learn a lot of aspects that come in developing software
              and IoT such as video games, utilities, and other systems. I am
              interested in web, game, and AI/ML development though I also
              happen to like creating graphic and motion designs.
            </p>
          </div>
        </Panel>
      </div>,
    ],
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
    spotlight: { enable: true, color: "bg-purple-800/50" },
    background: <Grid />,
    sections: [
      <div className="col-span-12 mb-16 lg:col-span-6 lg:mb-0">
        <div className="flex h-full w-full flex-wrap items-center justify-center">
          <h3 className="text-center text-4xl font-bold md:text-5xl lg:text-left lg:text-6xl">
            Everything starts with a{" "}
            <span className="font-serif font-normal text-green-400 italic">
              "Hello."
            </span>
          </h3>
          <p className="mt-4 w-full text-center font-bold text-zinc-500 lg:text-left">
            Let's turn your ideas into reality.
          </p>
        </div>
      </div>,
      <div className="col-span-12 lg:col-span-6">
        <div className="flex h-full w-full grow flex-col items-center justify-end lg:items-end lg:justify-center">
          <div className="z-10 flex flex-row gap-4 text-center sm:text-left lg:flex-col">
            {CONTACT.map((link, index) => (
              <Button
                key={index}
                path={link.path}
                name={link.name}
                icon={link.icon}
                className={`relative z-10 h-16 w-full rounded-xl border px-8 font-bold ${link.colors}`}
              />
            ))}
          </div>
        </div>
      </div>,

      /* 
      <Panel className="flex min-h-45 w-full flex-col items-center justify-center rounded-3xl border border-zinc-400 bg-zinc-900 sm:pointer-events-auto">
        <div className="flex h-full w-full grow flex-col items-center justify-center">
          <div className="z-10 flex flex-row gap-4 text-center sm:text-left">
            {CONTACT.map((link, index) => (
              <Button
                key={index}
                path={link.path}
                name={link.name}
                icon={link.icon}
                className={`relative z-10 h-16 w-full rounded-xl border px-8 font-bold ${link.colors}`}
              />
            ))}
          </div>
        </div>
      </Panel>*/
    ],
    borderVisible: false,
  },
];
