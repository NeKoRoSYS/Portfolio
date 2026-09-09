import { cn } from "@/lib/utils";
import { Fragment, type ReactNode } from "react";

interface BlockProps {
  children?: ReactNode;
  className?: string;
  borderVisible?: boolean;
}

export default function Block({
  id,
  children,
  className,
  borderVisible = true,
}: BlockProps & { id?: string }) {
  return (
    <section
      id={id}
      className={cn(
        "flex w-full flex-col items-center justify-center",
        borderVisible && "border-b border-zinc-800",
        className,
      )}
    >
      <div className={`h-full w-full max-w-6xl px-8 py-12 sm:py-16`}>
        {children}
      </div>
    </section>
  );
}

export interface SectionProps {
  id?: string;
  title?: string | ReactNode;
  text?: string;
  bgColor?: string;
  borderVisible?: boolean;
  center?: boolean;
  reverse?: boolean;
  sections?: ReactNode[];
}

export function Section(props: SectionProps) {
  const {
    id,
    title,
    text,
    bgColor = "bg-zinc-950",
    borderVisible = true,
    center = false,
    reverse = false,
    sections,
  } = props;

  return (
    <Block borderVisible={borderVisible} className={` ${bgColor}`}>
      <div id={id} className="relative" />
      <div
        className={`flex flex-wrap gap-8 ${reverse ? "sm:flex-row-reverse" : "sm:flex-row"} w-fit sm:w-full`}
      >
        {title != null || text != null ? (
          <div
            className={`flex flex-col gap-8 ${!sections ? "w-full" : "w-full lg:w-fit"}`}
          >
            {title ? (
              typeof title === "string" || typeof title === "number" ? (
                <h1
                  className={`text-4xl font-bold ${center ? "text-center" : reverse ? "text-right" : ""}`}
                >
                  {title}
                </h1>
              ) : (
                title
              )
            ) : null}
            {text ? (
              <p className={`${center ? "text-center" : ""}`}>{text}</p>
            ) : null}
          </div>
        ) : null}
        {sections ? (
          <div className="grid w-full grid-cols-12 flex-wrap sm:mx-auto">
            {sections?.map((element, index) => (
              <Fragment key={index}>{element}</Fragment>
            ))}
          </div>
        ) : null}
      </div>
    </Block>
  );
}
