"use client";

import Button from "@/components/Buttons";
import { EducationCard, ProjectCard } from "@/components/Cards";
import { Heading2, Heading3 } from "@/components/Headings";
import {
  TabData,
  TabControls,
  TabContent,
} from "@/components/PaginatedContent";
import {
  ACHIEVEMENTS,
  FEATURED_ART,
  FEATURED_TECH,
  ProjectProps,
  STANDARD_ART,
  STANDARD_TECH,
  TECH_STACK,
} from "@/data/nekorosys";
import { cn } from "@/lib/utils";
import { BRAND_COLORS } from "@/shared/Colors";
import { Links } from "@/shared/Icons";
import { useState } from "react";
import TextScramble from "../motion-primitives/text-scramble";
import Image from "next/image";
import { Cursor } from "../motion-primitives/cursor";
import { Spotlight } from "../motion-primitives/spotlight";

export function Education() {
  return (
    <>
      {ACHIEVEMENTS.map((achievement, index) => (
        <EducationCard key={index} {...achievement} />
      ))}
    </>
  );
}

export function TechStack() {
  return (
    <div className="grid grid-cols-6 gap-8 md:grid-cols-9">
      {TECH_STACK.map((category, index) => (
        <div key={index} className="col-span-3 flex flex-col items-center">
          <p className="mb-4 font-bold">{category.category}</p>
          <div className="grid grid-cols-3">
            {category.tools?.map((tool, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center duration-150"
              >
                <Cursor
                  attachToParent
                  variants={{
                    initial: {
                      height: 0,
                      opacity: 0,
                      scale: 0.3,
                    },
                    animate: {
                      height: "auto",
                      opacity: 1,
                      scale: 1,
                    },
                    exit: {
                      height: 0,
                      opacity: 0,
                      scale: 0.3,
                    },
                  }}
                  transition={{
                    type: "spring",
                    duration: 0.3,
                    bounce: 0.1,
                  }}
                  className="pointer-events-none"
                  springConfig={{
                    stiffness: 200,
                    damping: 30,
                    mass: 0.5,
                  }}
                >
                  <div className="relative mt-8 flex max-w-3xs translate-y-[50%] flex-col gap-2 overflow-clip rounded-2xl border border-green-400 bg-linear-to-b from-zinc-900 from-25% to-zinc-950 p-4 sm:max-w-xs">
                    <Image
                      className="absolute top-[25%] right-0 -z-10 hidden aspect-square w-24 mask-[linear-gradient(to_bottom,black_50%,transparent)] opacity-25 saturate-0 sm:block"
                      width={128}
                      height={128}
                      src={tool.icon}
                      alt={tool.name}
                    />
                    <b>{tool.name}</b>
                    <p className="hidden sm:block">{tool.description}</p>
                  </div>
                </Cursor>
                <Image
                  width={128}
                  height={128}
                  alt={tool.name}
                  src={tool.icon}
                  className={cn(
                    `aspect-square w-12 shrink-0 bg-cover bg-center bg-no-repeat p-1 saturate-0 transition-all select-none group-touch-hover:-translate-y-3 group-touch-hover:scale-125 group-touch-hover:saturate-100`,
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function PortfolioHeader() {
  return (
    <>
      <Heading2 className="flex w-full items-center justify-between text-center lg:text-left">
        Systems
        <hr className="w-full border border-zinc-400"></hr>
        <TextScramble>
          <span className="font-bulletin font-normal text-green-400 italic select-none touch-hover:text-purple-400">
            Interlinked
          </span>
        </TextScramble>
      </Heading2>
    </>
  );
}

export function PortfolioSection() {
  const [activeId, setActiveId] = useState<number>(0);

  const renderProjects = (
    featuredProjects: ProjectProps[],
    standardProjects: ProjectProps[],
    useGrid?: boolean,
  ) => {
    return (
      <>
        <div className="w-full rounded-3xl border border-zinc-700 bg-zinc-950/50 p-4 backdrop-blur-sm transition-all duration-150 sm:p-8 touch-hover:border-green-400">
          <Spotlight
            className={`pointer-events-auto -z-10 bg-green-400/50 blur-3xl`}
            size={128}
            springOptions={{
              stiffness: 200,
              damping: 30,
              mass: 0.5,
            }}
          />
          <div className="mt-4 mb-8 flex w-full items-center justify-center text-center sm:mt-0 sm:mb-8">
            <h3 className="font-cosmic text-3xl font-bold">Featured</h3>
          </div>
          <div className="grid w-full grid-cols-12 gap-4 sm:mx-auto">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className={cn("col-span-12", index > 0 && "sm:col-span-6")}
              >
                <ProjectCard {...project} tilt featured></ProjectCard>
              </div>
            ))}
          </div>
          {standardProjects.length > 0 && (
            <>
              <div className="my-8 flex w-full items-center justify-center text-center sm:my-8">
                <h4 className="font-cosmic text-3xl font-bold">
                  Other Projects
                </h4>
              </div>
              <div
                className={cn(
                  "flex w-full flex-col gap-4 sm:mx-auto",
                  useGrid && "grid grid-cols-3",
                )}
              >
                {standardProjects.map((project, index) => (
                  <ProjectCard {...project} key={index}></ProjectCard>
                ))}
              </div>
            </>
          )}
        </div>
      </>
    );
  };

  const tabs: TabData[] = [
    {
      index: 0,
      label: "Tech",
      payload: [
        renderProjects(FEATURED_TECH, STANDARD_TECH),
        <div className="mt-8 flex flex-row items-center justify-center gap-8 sm:mt-16">
          <p className="font-cosmic text-2xl">More at</p>
          <Button
            showHyperlinkIcon
            path={"https://github.com/NeKoRoSYS"}
            name={"GitHub"}
            icon={Links.githubIcon}
            className={cn(
              "relative z-10 h-16 w-3xs rounded-xl border px-4 font-bold lg:justify-start",
              BRAND_COLORS.github,
            )}
          />
        </div>,
      ],
    },
    {
      index: 1,
      label: "Art",
      payload: [
        renderProjects(FEATURED_ART, STANDARD_ART, true),
        <div className="mt-8 flex flex-row items-center justify-center gap-8 sm:mt-16">
          <p className="font-cosmic text-2xl">More at</p>
          <Button
            showHyperlinkIcon
            path={"https://behance.net/NeKoRoSYS"}
            name={"Behance"}
            icon={Links.behanceIcon}
            className={cn(
              "relative z-10 h-16 w-3xs rounded-xl border px-4 font-bold lg:justify-start",
              BRAND_COLORS.behance,
            )}
          />
        </div>,
      ],
    },
  ];

  return (
    <div className="grid w-full grid-cols-12">
      <div className="col-span-12 w-full border-zinc-800 lg:col-span-3">
        <div className="z-10 border-zinc-800 lg:sticky lg:top-[50vh] lg:mt-21 lg:-translate-y-1/2 lg:border-l">
          <TabControls
            tabs={tabs}
            activeId={activeId}
            setActiveId={setActiveId}
            className="flex w-full flex-row justify-center lg:flex-col lg:justify-start"
          >
            {tabs.map((tab) => (
              <button
                key={tab.index}
                onClick={() => {
                  setActiveId(tab.index);
                  window.location.href = "#portfolio";
                }}
                className={cn(
                  "group shrink-0 border-b-2 to-75% px-8 py-4 font-bulletin italic lg:border-b-0 lg:border-l-2 lg:text-left",
                  activeId === tab.index
                    ? "border-green-400 from-green-950 to-green-950/0 text-green-400 lg:bg-linear-to-r"
                    : "cursor-pointer border-zinc-400 text-zinc-100 lg:bg-linear-to-r touch-hover:border-purple-500 touch-hover:from-purple-800/50 touch-hover:to-purple-950/0 touch-hover:text-zinc-100",
                )}
              >
                <span
                  className={cn(
                    "font-cosmic text-2xl leading-snug font-semibold tracking-wide sm:text-3xl lg:text-4xl",
                    "block transition-transform duration-200",
                    activeId !== tab.index &&
                      "lg:group-touch-hover:translate-x-2",
                  )}
                >
                  {tab.label}
                </span>
              </button>
            ))}
          </TabControls>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-9">
        <TabContent tabs={tabs} activeId={activeId} />
      </div>
    </div>
  );
}
