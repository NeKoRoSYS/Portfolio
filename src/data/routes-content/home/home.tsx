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
    id: "about",
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
    className: "bg-[rgb(15,15,15)]",
    center: true,
    outline: { enable: true, color: "bg-green-400" },
    sections: [
      <div className="relative col-span-12 mb-16">
        <div className="flex h-full w-full flex-wrap items-center justify-center">
          <Heading2 className="flex w-full items-center justify-between text-center lg:text-left">
            Systems
            <hr className="w-full border border-zinc-400"></hr>
            <TextScramble>
              <span className="font-bulletin font-normal text-green-400 italic touch-hover:text-purple-300">
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
    id: "stack",
    center: true,
    sections: [
      <div className="col-span-12 mb-16">
        <div className="flex h-full w-full flex-wrap items-center justify-center">
          <Heading2 className="w-full text-center">
            The{" "}
            <span className="relative font-bold text-green-400 touch-hover:text-purple-300">
              STACK
            </span>{" "}
            You Can Trust
          </Heading2>
        </div>
      </div>,
    ],
  },
  {
    id: "contact",
    outline: { enable: true, color: "bg-purple-400" },
    spotlight: { enable: true, color: "bg-purple-500/25" },
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
            <span className="font-bold text-green-400 touch-hover:text-purple-300">
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
          <div className="z-10 flex w-full max-w-sm flex-row gap-4 text-center sm:w-md sm:max-w-none sm:text-left lg:w-2xs lg:flex-col">
            {CONTACT.map((link, index) => (
              <Button
                key={index}
                showHyperlinkIcon
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
                  index > 0 &&
                    "self-end text-zinc-400 lg:w-3xs touch-hover:text-zinc-100",
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
