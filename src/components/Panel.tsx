import { cn } from "@/lib/utils";
import type { JSX, ReactNode } from "react";

interface PanelProps {
  children?: ReactNode;
  className?: string;
}

interface HoverablePropsLegacy {
  translate?: boolean;
  highlight?: boolean;
  translateOverride?: string;
  highlightOverride?: string;
}

interface HoverableProps {
  translate?: boolean;
  highlight?: boolean;
  translateOverride?: string;
  highlightOverride?: string;
  className?: string;
  children: (injectedClasses: string) => JSX.Element | any;
}

export function Panel({
  children,
  className = "min-h-50 bg-zinc-400",
}: PanelProps) {
  return (
    <div className={cn(`grow rounded-2xl lg:grow-0`, className)}>
      {children}
    </div>
  );
}

export function HoverPanel({ ...props }: PanelProps & HoverablePropsLegacy) {
  const { children, className } = props;
  const {
    translate,
    highlight,
    translateOverride = "touch-hover:-translate-y-4",
    highlightOverride,
  } = props;

  return (
    <Panel
      className={cn(
        `${translate ? translateOverride : ""} ${highlight ? highlightOverride : ""} duration-75`,
        className,
      )}
    >
      {children}
    </Panel>
  );
}

export function HoverableElement(props: HoverableProps) {
  const {
    translate = true,
    translateOverride = "touch-hover:-translate-y-4",
    highlight = false,
    highlightOverride = "touch-hover:bg-zinc-100",
    className = "",
  } = props;

  const activeDefaults = [
    translate ? translateOverride : "",
    highlight ? highlightOverride : "",
  ]
    .filter(Boolean)
    .join(" ");

  const dynamicClasses = cn(activeDefaults, className);

  return <div>{props.children(dynamicClasses)}</div>;
}
