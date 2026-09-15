import { type SectionProps } from "@/components/Block";
import Button from "@/components/Buttons";
import { CONTACT } from "../../hyperlinks";
import Grid from "@/components/Grid";
import SpotlightBlob from "@/components/SpotlightBlob";
import { cn } from "@/lib/utils";
import { Heading2 } from "@/components/Headings";
import { PortfolioSection } from "./portfolio";
import { TextScramble } from "@/components/motion-primitives/text-scramble";
import { ReactNode } from "react";
import { BackgroundAscii } from "@/components/VideoPlayer";

export const HOME = {
  heroTitle: `NeKoRoSYS`,
  heroSubtitle: `Your one-man IT Department.`,
} as const;

function echoString({
  string,
  gap,
  count,
  className,
}: {
  string: string;
  gap: number;
  count: number;
  className: string;
}) {
  const elements: { string: string; className: string }[] = [];

  for (let i: number = 0; i < count; i++) {
    elements[i] = {
      string: string,
      className: className,
    };

    if (/\btranslate-y(?:-[\w.\[\]#%]+)?\b/.test(elements[i].className)) {
      const stepValue = gap * i;

      const tailwindClass = stepValue === 0.5 ? "1/2" : stepValue;

      elements[i].className = elements[i].className.replace(
        /\btranslate-y(?:-[\w.\[\]#%]+)?\b/g,
        `translate-y-${tailwindClass}`,
      );
    }
  }

  return elements.map((element, index) => (
    <span key={index} className={cn(element.className)}>
      {element.string}
    </span>
  ));
}

export const SECTIONS: SectionProps[] = [
  {
    id: "stack",
    center: true,
    outline: { enable: true, color: "bg-green-400" },
    background: (
      <Grid className="inset-0 z-10 opacity-50" fadeDir="top" size={56} />
    ),
    borderVisible: false,
    sections: [
      <div className="col-span-12">
        <div className="flex h-full w-full flex-wrap items-center justify-center">
          <Heading2 className="w-full text-center">
            Your{" "}
            <span className="relative font-bold text-green-400 touch-hover:text-purple-400">
              One-Man
            </span>{" "}
            IT Department
          </Heading2>
        </div>
      </div>,
    ],
  },
  {
    id: "about",
    borderVisible: false,
    className: "bg-[rgb(15,15,15)]",
    outline: { enable: true, color: "bg-zinc-100" },
    sections: [
      <div className="col-span-12 mb-12 lg:col-span-5 lg:mb-0">
        <div className="flex h-full w-full flex-wrap items-center justify-center">
          <Heading2 className="w-full text-center lg:text-left">
            Hello, World!
          </Heading2>
        </div>
      </div>,
      <div className="col-span-12 lg:col-span-7">
        <div className="flex h-full w-full grow flex-col items-center justify-center pl-4 text-zinc-100 sm:justify-end">
          <p>
            My name is Marky, but I am better known online as <b>NeKoRoSYS</b>!
            I am a 19-year-old Filipino currently taking Computer Science as my
            undergraduate program.
          </p>
          <br />
          <p>
            I aspire to be a Software Engineer and Systems Architect. My goal is
            to learn a lot of aspects that come in developing software and IoT
            such as video games, utilities, and other systems. I am interested
            in web, game, and AI/ML development; though I also happen to like
            creating graphic and motion designs.
          </p>
        </div>
      </div>,
    ],
  },
  {
    id: "portfolio",
    className: "bg-zinc-950",
    borderVisible: false,

    background: (
      <>
        <div className="absolute top-0 right-0 left-0 h-64">
          <Grid
            className="inset-0 z-10 opacity-50"
            fadeDir="bottom"
            size={56}
          />
        </div>
        <Grid className="inset-0 z-10 opacity-50" fadeDir="radial" size={56} />
      </>
    ),
    center: true,
    outline: { enable: true, color: "bg-green-400" },
    sections: [
      <SpotlightBlob
        color="bg-zinc-500/75"
        top="bottom-[75%]"
        left="left-[75%]"
        size="w-[720px] h-[720px]"
        opacity="opacity-25 "
      />,
      <SpotlightBlob
        color="bg-green-600/50"
        top="top-[75%]"
        left="left-[75%]"
        size="w-[720px] h-[720px]"
        opacity="opacity-25"
      />,
      <SpotlightBlob
        color="bg-purple-500/35"
        top="bottom-[15%]"
        left="right-[88%]"
        size="w-[1000px] h-[1000px]"
        opacity="opacity-25"
      />,
      <div className="relative col-span-12 mb-16">
        <div className="flex h-full w-full flex-wrap items-center justify-center">
          <Heading2 className="flex w-full items-center justify-between text-center lg:text-left">
            Systems
            <hr className="w-full border border-zinc-400"></hr>
            <TextScramble>
              <span className="font-bulletin font-normal text-green-400 italic touch-hover:text-purple-400">
                Interlinked
              </span>
            </TextScramble>
          </Heading2>
          <p className="mt-4 w-full text-center font-bold text-zinc-400 lg:ml-128 lg:text-right">
            Cohesive experiences through Software and Designs—engineered with
            purpose to solve real problems.
          </p>
        </div>
      </div>,
      <PortfolioSection />,
    ],
  },
  {
    id: "contact",
    outline: { enable: true, color: "bg-green-400" },
    spotlight: { enable: true, color: "bg-green-500/25" },
    background: (
      <>
        <div className="absolute inset-0 z-0 aspect-video h-full w-full max-w-none opacity-20">
          <BackgroundAscii
            themeColor="#FFFFFF"
            url={"/videos/lavalamp.mp4"}

            containerClassOverride="absolute inset-0 z-0 lg:w-full h-full max-w-none min-h-svh aspect-video lg:aspect-auto "
            loop
          />
        </div>
      </>
    ),
    sections: [
      <SpotlightBlob
        color="bg-purple-800"
        top="top-[100%]"
        left="left-[33%] lg:left-0"
        size="w-[250px] h-[250px]"
        opacity="opacity-75"
      />,
      <SpotlightBlob
        color="bg-purple-800"
        top="-top-[50%]"
        left="invisible lg:visible lg:right-0"
        size="w-[250px] h-[250px]"
        opacity="opacity-75"
      />,
      <div className="col-span-12 mb-16 lg:col-span-8 lg:mb-0">
        <div className="flex h-full w-full flex-wrap items-center justify-center">
          <Heading2 className="w-full text-center lg:text-left">
            One{" "}
            <span className="font-serif font-normal text-green-400 italic touch-hover:text-purple-400">
              'Hello'
            </span>
            ,
            <br />
            <span className="font-bold text-green-400 touch-hover:text-purple-400">
              Many
            </span>{" "}
            Possibilities.
          </Heading2>
          <p className="mt-4 w-full text-center font-bold text-zinc-400 lg:text-left">
            Your ideas are just one conversation away from becoming reality.
          </p>
          <p className="mt-16 hidden w-full text-center font-bold lg:block lg:text-left">
            Currently open for freelance projects and internships. <br />{" "}
            Connect with me on LinkedIn or drop an email to start building.
          </p>
        </div>
      </div>,
      <div className="col-span-12 lg:col-span-4">
        <div className="flex h-full w-full grow flex-col items-center justify-end lg:items-end lg:justify-center">
          <div className="z-10 flex w-full max-w-sm flex-row gap-4 text-center sm:w-md sm:max-w-none sm:text-left lg:w-2xs lg:flex-col">
            {CONTACT.map((link, index) => (
              <Button
                key={index}
                showHyperlinkIcon
                path={link.path}
                name={link.altName}
                icon={link.icon}
                className={cn(
                  "relative z-10 h-16 w-full rounded-xl border px-4 font-bold backdrop-blur-xs lg:justify-start",
                  index > 0 && "self-end lg:w-3xs touch-hover:text-zinc-100",
                  link.colors,
                )}
              />
            ))}
          </div>
          <p className="mt-8 block w-full text-center font-bold lg:hidden lg:text-left">
            Currently open for freelance projects and internships. <br />{" "}
            Connect with me on LinkedIn or drop an email to start building.
          </p>
        </div>
      </div>,
    ],
    borderVisible: false,
  },
];
