import { cn } from "@/lib/utils";
import { Fragment, type ReactNode } from "react";
import { Spotlight } from "./motion-primitives/spotlight";

interface SpotlightProps {
  enable?: boolean;
  color?: string;
}

interface BlockProps {
  children?: ReactNode;
  background?: ReactNode;
  className?: string;
  spotlight?: SpotlightProps;
  borderVisible?: boolean;
}

export default function Block({
  id,
  children,
  spotlight,
  background,
  className,
  borderVisible = true,
}: BlockProps & { id?: string }) {
  return (
    <section
      id={id}
      className={cn(
        "relative flex w-full scroll-mt-20 flex-col items-center justify-center overflow-hidden",
        borderVisible && "border-b border-zinc-800",
        className,
      )}
    >
      {spotlight?.enable && (
        <Spotlight
          className={`pointer-events-auto ${spotlight.color} blur-3xl`}
          size={256}
          springOptions={{
            stiffness: 200,
            damping: 30,
            mass: 0.5,
          }}
        />
      )}
      {background && (
        <div className="pointer-events-none absolute inset-0 z-0">
          {background}
        </div>
      )}
      <div
        className={`relative z-10 h-full w-full max-w-6xl px-8 py-12 sm:py-16`}
      >
        {children}
      </div>
    </section>
  );
}

export interface SectionProps {
  id?: string;
  background?: ReactNode;
  title?: string | ReactNode;
  text?: string;
  bgColor?: string;
  borderVisible?: boolean;
  spotlight?: SpotlightProps;
  center?: boolean;
  reverse?: boolean;
  sections?: ReactNode[];
}

export function Section(props: SectionProps) {
  const {
    id,
    spotlight,
    background,
    title,
    text,
    bgColor = "bg-zinc-950",
    borderVisible = true,
    center = false,
    reverse = false,
    sections,
  } = props;

  return (
    <>
      <Block
        id={id}
        spotlight={spotlight}
        borderVisible={borderVisible}
        className={` ${bgColor} `}
        background={background}
      >
        <div
          className={`flex flex-wrap gap-8 ${reverse ? "sm:flex-row-reverse" : "sm:flex-row"} w-full`}
        >
          {title != null || text != null ? (
            <div className={`flex w-full flex-col gap-8`}>
              {title ? (
                typeof title === "string" || typeof title === "number" ? (
                  <h2
                    className={`text-4xl font-bold ${center ? "text-center" : reverse ? "text-right" : ""}`}
                  >
                    {title}
                  </h2>
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
    </>
  );
}
