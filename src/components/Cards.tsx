import { BUSINESS } from "@/data/hyperlinks";
import { Spotlight } from "./motion-primitives/spotlight";
import { Tilt } from "./motion-primitives/tilt";
import { IconHyperlink, TextHyperlink } from "./Hyperlinks";
import SpotlightBlob from "./SpotlightBlob";
import { FIELDS, PORTRAIT } from "@/data/components/brandingCard";
import { Fragment } from "react/jsx-runtime";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { PillChip, RectChip } from "./Chips";
import { ProjectProps } from "@/data/nekorosys";
import { Colors } from "@/shared/Colors";

interface CardProps {
  rotationFactor?: number;
  tilt?: boolean;
  className?: string;
  children?: ReactNode;
}

export function Card({ rotationFactor = 4, ...props }: CardProps) {
  const { tilt, className, children } = props;
  const baseClass =
    "@container relative overflow-clip pointer-events-none w-full flex min-h-45 flex-col items-center justify-center overflow-hidden rounded-3xl border border-zinc-700 bg-zinc-950 sm:pointer-events-auto";

  return (
    <Tilt
      rotationFactor={tilt ? rotationFactor : 0}
      className={cn(baseClass, className)}
      isRevese
    >
      {children}
    </Tilt>
  );
}

export function ProjectCard({
  tilt,
  className,
  rotationFactor,
  children,
  featured,
  title,
  thumbnail,
  tags,
  excerpt,
  description,
}: CardProps & ProjectProps) {
  return (
    <Card tilt={tilt} className={className} rotationFactor={rotationFactor}>
      <div
        className={cn("relative h-full w-full p-px", !featured && "min-h-32")}
      >
        <Spotlight
          className={`bg-green-500`}
          size={256}
          springOptions={{
            stiffness: 250,
            damping: 30,
            mass: 0.5,
          }}
        />
        <div
          className={cn(
            "relative flex h-full w-full",
            featured ? "min-h-100 flex-col @2xl:flex-row" : "min-h-32 flex-row",
          )}
        >
          <div
            className={cn(
              "shrink-0 bg-zinc-800 bg-cover bg-center",
              featured
                ? "aspect-video w-full rounded-t-3xl @2xl:aspect-auto @2xl:w-3/5 @2xl:rounded-l-3xl @2xl:rounded-tr-none"
                : "w-1/3 rounded-l-3xl sm:w-1/4",
            )}
            style={
              thumbnail
                ? {
                    backgroundImage: `url(${typeof thumbnail === "string" ? thumbnail : thumbnail.src})`,
                  }
                : undefined
            }
          />
          <div
            className={cn(
              "flex grow flex-col justify-between bg-zinc-900 shadow-zinc-800 backdrop-blur-md",
              featured
                ? "rounded-b-3xl @2xl:w-2/5 @2xl:rounded-r-3xl @2xl:rounded-bl-none"
                : "w-2/3 rounded-r-3xl py-2 sm:w-3/4",
            )}
          >
            <div className="flex w-full">
              <h3
                className={cn(
                  "mx-4 mt-4 w-full text-left font-bold text-zinc-100",
                  featured ? "text-3xl" : "text-xl sm:text-2xl",
                )}
              >
                {title}
              </h3>
            </div>
            <div className="flex w-full items-center justify-center">
              <p
                className={cn(
                  "m-4 w-full text-left text-zinc-300",
                  !featured && "text-sm sm:text-base",
                )}
              >
                {excerpt}
              </p>
            </div>
            <div className="m-4 mt-auto flex flex-wrap justify-end gap-2">
              {tags
                ?.filter((tag) => tag !== "Featured")
                .map((tag, index) => (
                  <RectChip
                    key={index}
                    className={cn(
                      "py-1 text-xs sm:text-sm",
                      Colors.buttonMuted,
                    )}
                  >
                    {tag}
                  </RectChip>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function BrandingCard() {
  return (
    <Card tilt>
      <SpotlightBlob
        color="bg-zinc-300"
        top="-top-[50%] sm:-top-[100%]"
        left="left-0"
        size="w-[250px] h-[250px]"
        opacity="opacity-25"
      />
      <SpotlightBlob
        color="bg-purple-800"
        top="top-[100%]"
        left="right-0"
        size="w-[250px] h-[250px]"
        opacity="opacity-100"
      />
      <Spotlight
        className={`-z-10 bg-zinc-300/25 blur-3xl`}
        size={128}
        springOptions={{
          stiffness: 250,
          damping: 30,
          mass: 0.5,
        }}
      />
      <div className="my-8 flex h-auto w-full grow flex-col items-center justify-start gap-8 self-stretch sm:flex-row sm:justify-center lg:mx-8 lg:justify-start">
        <div
          style={{ backgroundImage: `url("${PORTRAIT}")` }}
          className="aspect-square min-w-24 rounded-full bg-cover bg-center bg-no-repeat"
        />
        <hr className="border border-zinc-800 not-sm:w-[50%] sm:h-16" />
        <div className="z-10 flex flex-col justify-center text-center sm:justify-start sm:pr-8 sm:text-left">
          {FIELDS.map((element, index) => (
            <Fragment key={index}>{element}</Fragment>
          ))}
        </div>
      </div>
      <div className="mt-4 mb-8 flex w-full justify-center gap-4 px-8 lg:justify-end">
        {BUSINESS.map((link, index) => (
          <IconHyperlink
            key={index}
            name={link.name}
            path={link.path}
            icon={link.icon}
          />
        ))}
      </div>
    </Card>
  );
}
