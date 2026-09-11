"use client";

import { cn } from "@/lib/utils";
import { Heading3 } from "./Headings";
import { Fragment } from "react/jsx-runtime";
import { ReactNode } from "react";
import { Panel } from "./Panel";
import Grid from "./Grid";

export interface TabData {
  index: number;
  label: string;
  payload: any[];
}

interface TabControlsProps {
  tabs: TabData[];
  children: ReactNode;
  activeId: number;
  setActiveId: (index: number) => void;
  className?: string;
}

interface TabContentProps {
  tabs: TabData[];
  activeId: number;
  className?: string;
}

export function TabControls({ children, className }: TabControlsProps) {
  return <div className={cn("", className)}>{children}</div>;
}
export function TabContent({ tabs, activeId, className }: TabContentProps) {
  const activeTab = tabs.find((t) => t.index === activeId);

  const renderContent = (tab?: TabData) => {
    if (!tab) return null;

    return tab.payload.map((element, index) => (
      <Fragment key={index}>{element}</Fragment>
    ));
  };

  return (
    <Panel className="flex h-full min-h-45 w-full flex-col items-center justify-center rounded-3xl border border-zinc-400 bg-zinc-900 sm:pointer-events-auto">
      <div className="flex h-full w-full grow flex-col items-center justify-center p-4 text-zinc-100">
        {renderContent(activeTab)}
      </div>
    </Panel>
  );
}
