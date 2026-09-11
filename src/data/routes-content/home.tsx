import { type SectionProps } from "@/components/Block";
import Button from "@/components/Buttons";
import { HoverPanel, Panel } from "@/components/Panel";
import { BackgroundAscii } from "@/components/VideoPlayer";
import MarqueeModule from "react-fast-marquee";
import { CONTACT } from "../hyperlinks";
import Grid from "@/components/Grid";
import { Spotlight } from "@/components/motion-primitives/spotlight";
import SpotlightBlob from "@/components/SpotlightBlob";
import { cn } from "@/lib/utils";
import { Heading2 } from "@/components/Headings";
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
    id: "about",
    sections: [
      <div className="col-span-12 mb-16 lg:col-span-5 lg:mb-0">
        <div className="flex h-full w-full flex-wrap items-center justify-center">
          <Heading2 className="w-full text-center lg:text-left">
            Hello, World!
          </Heading2>
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
    id: "portfolio",
    bgColor: "bg-zinc-950",
    center: true,
    sections: [],
  },
  {
    id: "contact",
    spotlight: { enable: true, color: "bg-purple-800/25" },
    background: <Grid />,
    sections: [
      <SpotlightBlob
        color="bg-green-400"
        top="top-[100%]"
        left="left-[33%] lg:left-0"
        size="w-[250px] h-[250px]"
        opacity="opacity-75"
      />,
      <SpotlightBlob
        color="bg-green-800"
        top="-top-[50%]"
        left="invisible lg:visible lg:right-0"
        size="w-[250px] h-[250px]"
        opacity="opacity-75"
      />,
      <div className="col-span-12 mb-16 lg:col-span-8 lg:mb-0">
        <div className="flex h-full w-full flex-wrap items-center justify-center">
          <Heading2 className="w-full text-center lg:text-left">
            One{" "}
            <span className="font-serif font-normal text-green-400 italic touch-hover:text-purple-300">
              'Hello'
            </span>
            ,
            <br />
            <span className="text-green-400 touch-hover:text-purple-300">
              Many
            </span>{" "}
            Possibilities.
          </Heading2>
          <p className="mt-4 w-full text-center font-bold text-zinc-400 lg:text-left">
            Your ideas are just one conversation away from becoming reality.
          </p>
        </div>
      </div>,
      <div className="col-span-12 lg:col-span-4">
        <div className="flex h-full w-full grow flex-col items-center justify-end lg:items-end lg:justify-center">
          <div className="z-10 flex w-full max-w-sm flex-row gap-4 text-center sm:w-md sm:max-w-none sm:text-left lg:w-3xs lg:flex-col">
            {CONTACT.map((link, index) => (
              <Button
                key={index}
                path={link.path}
                name={link.altName}
                icon={link.icon}
                iconClass={
                  index > 0
                    ? "brightness-65 group-touch-hover:brightness-100 "
                    : ""
                }
                className={cn(
                  "relative z-10 h-16 w-full rounded-xl border px-4 font-bold lg:justify-start",
                  index > 0 && "text-zinc-400 touch-hover:text-zinc-100",
                  link.colors,
                )}
              />
            ))}
          </div>
        </div>
      </div>,
    ],
    borderVisible: false,
  },
];
