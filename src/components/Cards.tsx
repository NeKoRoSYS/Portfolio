import { BUSINESS } from "@/data/hyperlinks";
import { Spotlight } from "./motion-primitives/spotlight";
import { Tilt } from "./motion-primitives/tilt";
import { IconHyperlink, TextHyperlink } from "./Hyperlinks";
import SpotlightBlob from "./SpotlightBlob";
import { FIELDS, PORTRAIT } from "@/data/components/brandingCard";
import { Fragment } from "react/jsx-runtime";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { PillChip } from "./Chips";

interface CardProps {
  tilt?: boolean;
  className?: string;
  children?: ReactNode;
}

export function Card({
  rotationFactor = 4,
  ...props
}: CardProps & { rotationFactor?: number }) {
  const { tilt, className, children } = props;
  const baseClass =
    "relative overflow-clip pointer-events-none w-full flex min-h-45 flex-col items-center justify-center overflow-hidden rounded-3xl border border-zinc-700 bg-zinc-950 sm:pointer-events-auto";

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

interface ProjectProps extends CardProps {}

export function ProjectCard({ ...props }: ProjectProps) {
  const { tilt, className, children } = props;
  return (
    <Card {...props} className={className}>
      <div className="grid h-full w-full grid-cols-12">
        <div className="col-span-7 w-full bg-zinc-600"></div>
        <div className="col-span-5 w-full bg-zinc-800">
          <div className="flex w-full items-center justify-center">
            <p className="mx-4 mt-4 w-full text-left text-3xl font-bold">
              Project Title
            </p>
          </div>
          <div className="flex w-full items-center justify-center">
            <p className="m-4 w-full text-left">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
              urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
              egestas.
            </p>
          </div>
          <div className="m-4 grid grid-cols-4 gap-4">
            <PillChip colorOverride="green">Test</PillChip>
            <PillChip colorOverride="green">Test</PillChip>
            <PillChip colorOverride="green">Test</PillChip>
            <PillChip colorOverride="green">Test</PillChip>
            <PillChip colorOverride="green">Test</PillChip>
            <PillChip colorOverride="green">Test</PillChip>
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
