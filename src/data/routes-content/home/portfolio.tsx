"use client";

import Button from "@/components/Buttons";
import { BrandingCard, Card, ProjectCard } from "@/components/Cards";
import { Heading3 } from "@/components/Headings";
import {
  TabData,
  TabControls,
  TabContent,
} from "@/components/PaginatedContent";
import {
  FEATURED_ART,
  FEATURED_TECH,
  ProjectProps,
  STANDARD_ART,
  STANDARD_TECH,
} from "@/data/nekorosys";
import { cn } from "@/lib/utils";
import { BRAND_COLORS } from "@/shared/Colors";
import { Icons } from "@/shared/Icons";
import { useState } from "react";

export function PortfolioSection() {
  const [activeId, setActiveId] = useState<number>(0);

  const renderProjects = (
    featuredProjects: ProjectProps[],
    standardProjects: ProjectProps[],
    useGrid?: boolean,
  ) => {
    return (
      <>
        <div className="mb-8 flex w-full items-center justify-center text-center">
          <h4 className="font-cosmic text-3xl font-bold">Featured</h4>
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
            <div className="my-8 flex w-full items-center justify-center text-center">
              <h5 className="font-cosmic text-2xl font-bold">Other Projects</h5>
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
      </>
    );
  };

  const tabs: TabData[] = [
    {
      index: 0,
      label: "Tech",
      payload: [
        renderProjects(FEATURED_TECH, STANDARD_TECH),
        <div className="mt-16 flex flex-row items-center justify-center gap-8">
          <p className="font-cosmic text-2xl">More at</p>
          <Button
            showHyperlinkIcon
            path={"https://github.com/NeKoRoSYS"}
            name={"GitHub"}
            icon={Icons.githubIcon}
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
        <div className="mt-16 flex flex-row items-center justify-center gap-8">
          <p className="font-cosmic text-2xl">More at</p>
          <Button
            showHyperlinkIcon
            path={"https://behance.net/NeKoRoSYS"}
            name={"Behance"}
            icon={Icons.behanceIcon}
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
    <>
      <div className="col-span-12 w-full lg:col-span-3">
        <div className="z-10 lg:sticky lg:top-[50vh] lg:mt-16 lg:-translate-y-1/2">
          <TabControls
            tabs={tabs}
            activeId={activeId}
            setActiveId={setActiveId}
            className="mb-8 flex w-full flex-row justify-center lg:mb-0 lg:flex-col lg:justify-start"
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
                <Heading3
                  className={cn(
                    "transition-transform duration-200",
                    activeId !== tab.index &&
                      "lg:group-touch-hover:translate-x-2",
                  )}
                >
                  {tab.label}
                </Heading3>
              </button>
            ))}
          </TabControls>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-9">
        <TabContent tabs={tabs} activeId={activeId} />
      </div>
    </>
  );
}
