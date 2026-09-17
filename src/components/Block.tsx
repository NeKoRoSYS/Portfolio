import { cn } from "@/lib/utils";
import { Fragment, type ReactNode } from "react";
import { Spotlight } from "./motion-primitives/spotlight";
import { Icons } from "@/shared/Icons";

interface SpotlightProps {
  enable?: boolean;
  color?: string;
}

interface BlockProps {
  index?: number;
  id?: string;
  children?: ReactNode;
  background?: ReactNode;
  className?: string;
  outline?: SpotlightProps;
  spotlight?: SpotlightProps;
  borderVisible?: boolean;
}

export default function Block({
  index,
  id,
  children,
  outline,
  spotlight,
  background,
  className,
  borderVisible = true,
}: BlockProps) {
  return (
    <div
      className={cn(
        outline?.enable
          ? index != null && index == 0
            ? "pb-px"
            : "py-px"
          : "",
      )}
    >
      {outline?.enable && (
        <Spotlight
          className={cn(`pointer-events-auto`, outline?.color)}
          size={256}
          springOptions={{
            stiffness: 200,
            damping: 30,
            mass: 0.5,
          }}
        />
      )}
      <section
        id={id}
        className={cn(
          "relative flex w-full scroll-mt-16 flex-col items-center justify-center overflow-clip sm:scroll-mt-20",
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
          className={`relative z-10 h-full w-full max-w-6xl px-4 py-8 sm:px-8 sm:py-16`}
        >
          {children}
        </div>
      </section>
    </div>
  );
}

export interface SectionProps extends BlockProps {
  title?: string | ReactNode;
  text?: string;
  showIndex?: boolean;
  center?: boolean;
  reverse?: boolean;
  sections?: ReactNode[];
}

export function Section(props: SectionProps) {
  const {
    index,
    id,
    showIndex = true,
    outline,
    spotlight,
    background,
    title,
    text,
    className = "bg-zinc-950",
    borderVisible = true,
    center = false,
    reverse = false,
    sections,
  } = props;

  return (
    <>
      <Block
        index={index}
        id={id}
        outline={outline}
        spotlight={spotlight}
        borderVisible={borderVisible}
        className={` ${className} `}
        background={background}
      >
        <div
          className={`flex flex-wrap gap-8 ${reverse ? "sm:flex-row-reverse" : "sm:flex-row"} w-full`}
        >
          {showIndex && id && (
            <div className="group mb-4 flex flex-row items-center justify-center gap-4">
              <div
                aria-hidden={true}
                style={
                  {
                    "--mask-url": `url(${Icons.diamondIcon.toString()})`,
                  } as React.CSSProperties
                }
                className={cn(
                  `mask-icon aspect-square w-4 shrink-0 bg-green-400 bg-cover bg-center bg-no-repeat group-touch-hover:bg-purple-400`,
                )}
              />
              <p className="font-mono text-sm text-green-400 group-touch-hover:text-purple-400">
                0{index} // <b>{id?.toUpperCase()}</b>
              </p>
            </div>
          )}
          {(title != null || text != null) && (
            <div className={`flex w-full flex-col gap-8`}>
              {title &&
                (typeof title === "string" || typeof title === "number" ? (
                  <h2
                    className={`text-4xl font-bold ${center ? "text-center" : reverse ? "text-right" : ""}`}
                  >
                    {title}
                  </h2>
                ) : (
                  title
                ))}
              {text && (
                <p className={`${center ? "text-center" : ""}`}>{text}</p>
              )}
            </div>
          )}
          {sections && (
            <div className="grid w-full grid-cols-12 sm:mx-auto">
              {sections?.map((element, index) => (
                <Fragment key={index}>{element}</Fragment>
              ))}
            </div>
          )}
        </div>
      </Block>
    </>
  );
}
