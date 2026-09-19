import { cn } from "@/lib/utils";
import { Fragment, type ReactNode } from "react";
import { Spotlight } from "./motion-primitives/spotlight";
import { Icons } from "@/shared/Icons";
import { Heading2 } from "./Headings";
import { PortfolioSection } from "@/data/routes-content/home/portfolio";
import SpotlightBlob from "./SpotlightBlob";
import { BrandingCard } from "./Cards";

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

export type SectionComponent = {
  colSpan?: string;
  wrapperClass?: string;
} & (
  | {
      type: "heading";
      payload: HeadingPayload | any;
    }
  | { type: "branding-card"; payload: { fields: React.ReactNode[] } }
  | {
      type: "spotlight";
      color: string;
      top: string;
      left: string;
      size: string;
      opacity: string;
    }
  | { type: "portfolio" }
  | { type: "custom"; content: React.ReactNode }
);

export type BackgroundProps =
  | {
      type: "grid";
      fadeDir: "top" | "bottom" | "radial";
      size: number;
      opacity: number;
    }
  | { type: "image"; src: string; opacity: number; saturate: number }
  | { type: "ascii-video"; url: string; themeColor: string; opacity: number }
  | { type: "composite"; layers: BackgroundProps[] };

export type TextSegment = {
  text: string;
  highlight?: boolean;
  italic?: boolean;
  effect?: "scramble" | "pulse";
  className?: string;
};

export type HeadingPayload = {
  text?: string;
  segments: TextSegment[];
  align?: string;
};

function SectionRenderer({ component }: { component: SectionComponent }) {
  const getContent = () => {
    switch (component.type) {
      case "custom":
        return component.content;
      case "portfolio":
        return <PortfolioSection />;
      case "branding-card":
        return (
          <BrandingCard
            fields={component.payload.fields}
            className="max-w-2xs"
          />
        );
      case "heading":
        return (
          component.payload.custom || (
            <Heading2 className={`w-full ${component.payload.align}`}>
              {component.payload.segments
                ? component.payload.segments.map(
                    (segment: TextSegment, i: number) => (
                      <span key={i} className={segment.className}>
                        {segment.text}
                      </span>
                    ),
                  )
                : component.payload.text}
            </Heading2>
          )
        );
      case "spotlight":
        return (
          <SpotlightBlob
            color={component.color}
            opacity={component.opacity}
            size={component.size}
            top={component.top}
            left={component.left}
          />
        );
      case "custom":
        break;
      default:
        return null;
    }
  };
  return (
    <div
      className={cn(component.colSpan || "col-span-12", component.wrapperClass)}
    >
      {getContent()}
    </div>
  );
}

export interface SectionProps extends BlockProps {
  showIndex?: boolean;
  components?: SectionComponent[];
}

export function Section(props: SectionProps) {
  const {
    index,
    id,
    showIndex = true,
    className = "bg-zinc-950",
    components,
  } = props;

  return (
    <>
      <Block {...props} className={className}>
        <div className={cn(`flex w-full flex-wrap gap-8`)}>
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
          {components && (
            <div className="grid w-full grid-cols-12 sm:mx-auto">
              {components?.map((component, index) => (
                <SectionRenderer key={index} component={component} />
              ))}
            </div>
          )}
        </div>
      </Block>
    </>
  );
}
