import { cn } from "@/lib/utils";
import { Fragment, type ReactNode } from "react";
import { Spotlight } from "./motion-primitives/spotlight";
import { Links } from "@/shared/Icons";
import { Heading2, Heading3 } from "./Headings";
import {
  PortfolioHeader,
  PortfolioSection,
  TechStack,
} from "@/components/home/Portfolio";
import SpotlightBlob from "./SpotlightBlob";
import { BrandingCard } from "./Cards";
import TextEcho from "./home/TextEcho";
import BackgroundRenderer, { BackgroundProps } from "./BaclgroundRenderer";
import TextScramble from "./motion-primitives/text-scramble";
import { ButtonSchema, HyperlinkSchema } from "@/data/hyperlinks";
import Button from "./Buttons";
import { TextHyperlink } from "./Hyperlinks";
import { BrandingField } from "@/data/components/brandingCard";

interface SpotlightProps {
  enable?: boolean;
  color?: string;
}

interface BlockProps {
  index?: number;
  id?: string;
  children?: ReactNode;
  background?: BackgroundProps;
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
            <BackgroundRenderer background={background} />
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
  | { type: "container"; items: SectionComponent[] }
  | { type: "paragraph"; payload: { text: string; html?: boolean } }
  | { type: "hyperlink"; payload: HyperlinkSchema & { className?: string } }
  | { type: "button"; payload: ButtonSchema & { className?: string } }
  | {
      type: "heading";
      payload: HeadingPayload | any;
    }
  | { type: "branding-card"; payload: { fields: BrandingField[] } }
  | {
      type: "spotlight";
      color: string;
      top: string;
      left: string;
      size: string;
      opacity: string;
    }
  | { type: "tech-stack" }
  | { type: "portfolio" }
  | { type: "portfolio-header" }
  | { type: "contact-cta" }
  | { type: "contact-links" }
  | { type: "custom"; content: React.ReactNode }
);

export type TextSegment = {
  text: string;
  highlight?: boolean;
  italic?: boolean;
  effect?: "scramble" | "pulse" | "echo";
  className?: string;
  breakBefore?: boolean;
};

export type HeadingPayload = {
  level: "h2" | "h3";
  text?: string;
  segments: TextSegment[];
  align?: string;
};

function SectionRenderer({ component }: { component: SectionComponent }) {
  const getContent = () => {
    switch (component.type) {
      case "container":
        return (
          <>
            {component.items.map((item, index) => (
              <SectionRenderer key={index} component={item} />
            ))}
          </>
        );
      case "paragraph":
        return component.payload.html ? (
          <p dangerouslySetInnerHTML={{ __html: component.payload.text }} />
        ) : (
          <p>{component.payload.text}</p>
        );
      case "button":
        return <Button {...component.payload} />;
      case "hyperlink":
        return <TextHyperlink {...component.payload} />;
      case "tech-stack":
        return <TechStack />;
      case "portfolio":
        return <PortfolioSection />;
      case "portfolio-header":
        return <PortfolioHeader />;
      case "branding-card":
        return (
          <BrandingCard
            outline={false}
            fields={component.payload.fields}
            className="max-w-2xs"
          />
        );
      case "heading":
        const Heading = component.payload.level === "h3" ? Heading3 : Heading2;
        return (
          component.payload.custom || (
            <Heading className={`w-full ${component.payload.align}`}>
              {component.payload.segments
                ? component.payload.segments.map(
                    (segment: TextSegment, i: number) => {
                      const prefix = segment.breakBefore ? (
                        <br key={`br-${i}`} />
                      ) : null;

                      if (segment.effect === "echo") {
                        return (
                          <Fragment key={i}>
                            {prefix}
                            <TextEcho string={segment.text} />
                          </Fragment>
                        );
                      }
                      if (segment.effect === "scramble") {
                        return (
                          <Fragment key={i}>
                            {prefix}
                            <TextScramble
                              as="span"
                              className={segment.className}
                            >
                              {segment.text}
                            </TextScramble>
                          </Fragment>
                        );
                      }
                      return (
                        <Fragment key={i}>
                          {prefix}
                          <TextScramble as="span" className={segment.className}>
                            {segment.text}
                          </TextScramble>
                        </Fragment>
                      );
                    },
                  )
                : component.payload.text}
            </Heading>
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
  const wrapperClasses = cn(component.colSpan, component.wrapperClass);
  if (!wrapperClasses) return getContent();
  return <div className={wrapperClasses}>{getContent()}</div>;
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
                    "--mask-url": `url(${Links.diamondIcon.toString()})`,
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
