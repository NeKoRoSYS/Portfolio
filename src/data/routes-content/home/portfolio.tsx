"use client";

import { BrandingCard, Card } from "@/components/Cards";
import { Heading3 } from "@/components/Headings";
import {
  TabData,
  TabControls,
  TabContent,
} from "@/components/PaginatedContent";
import {
  FEATURED_ART,
  FEATURED_TECH,
  STANDARD_ART,
  STANDARD_TECH,
  TECH_PROJECTS,
} from "@/data/nekorosys";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function PortfolioSection() {
  const [activeId, setActiveId] = useState<number>(0);

  const tabs: TabData[] = [
    {
      index: 0,
      label: "Tech",
      payload: [
        <div className="mb-4 grid w-full grid-cols-12 gap-4 sm:mx-auto">
          {FEATURED_TECH.map((project, index) => (
            <div
              key={index}
              className={cn("col-span-12", index > 0 && "sm:col-span-6")}
            >
              <Card className="aspect-video"></Card>
            </div>
          ))}
        </div>,
        <div className="flex w-full flex-col gap-4">
          {STANDARD_TECH.map((project, index) => (
            <Card key={index}></Card>
          ))}
        </div>,
      ],
    },
    {
      index: 1,
      label: "Art",
      payload: [
        <div className="mb-4 grid w-full grid-cols-12 gap-4 sm:mx-auto">
          {FEATURED_ART.map((project, index) => (
            <div
              key={index}
              className={cn("col-span-12", index > 0 && "sm:col-span-6")}
            >
              <Card className="aspect-video"></Card>
            </div>
          ))}
        </div>,
        <div className="grid w-full grid-cols-3 gap-4 sm:mx-auto">
          {STANDARD_ART.map((project, index) => (
            <Card key={index} className="aspect-video"></Card>
          ))}
        </div>,
      ],
    },
  ];

  return (
    <>
      <div className="col-span-12 w-full lg:col-span-3 lg:min-h-svh">
        <div className="z-10 lg:sticky lg:top-[50vh] lg:mt-16 lg:-translate-y-1/2">
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
                  "group shrink-0 px-8 py-4 font-bold lg:text-left",
                  activeId === tab.index
                    ? "border-b-2 border-green-400 text-zinc-100 lg:border-b-0 lg:border-l-2"
                    : "cursor-pointer text-zinc-500 lg:border-l-2 lg:border-transparent touch-hover:text-green-400",
                )}
              >
                <Heading3
                  className={cn(
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
