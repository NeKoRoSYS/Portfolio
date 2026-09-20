import { cn } from "@/lib/utils";
import Grid from "./Grid";
import Image from "next/image";
import { BackgroundAscii } from "./VideoPlayer";
import { Fragment, ReactNode } from "react";

export type BackgroundProps =
  | {
      type: "grid";
      fadeDir: "radial" | "right" | "left" | "top" | "bottom" | "y" | "x";
      className?: string;
      size: number;
    }
  | {
      type: "image";
      className?: string;
      width?: number;
      height?: number;
      alt: string;
      src: string;
    }
  | { type: "ascii-video"; url: string; themeColor: string; className: string }
  | { type: "composite"; layers: BackgroundProps[] };

export default function BackgroundRenderer({
  background,
}: {
  background: BackgroundProps;
}) {
  const getBackground = (background: BackgroundProps): ReactNode => {
    switch (background.type) {
      case "grid":
        return (
          <Grid
            className={cn("inset-0 z-10", background.className)}
            fadeDir={background.fadeDir}
            size={background.size}
          />
        );
      case "image":
        return (
          <Image
            className={cn(
              "aspect-auto w-auto max-w-none opacity-10",
              background.className,
            )}
            alt={background.alt}
            width={background.width}
            height={background.height}
            src={background.src}
          />
        );
      case "ascii-video":
        return (
          <div
            className={cn(
              "absolute inset-0 z-0 aspect-video h-full w-full max-w-none",
              background.className,
            )}
          >
            <BackgroundAscii
              themeColor={background.themeColor}
              url={background.url}
              containerClassOverride="absolute inset-0 z-0 lg:w-full h-full max-w-none min-h-svh aspect-video lg:aspect-auto "
              loop
            />
            <div className="pointer-events-none absolute inset-0 right-0 bottom-0 left-0 z-10 bg-linear-to-b from-black/0 from-25% to-black" />
          </div>
        );
      case "composite":
        return background.layers.map((layer: BackgroundProps, index) => (
          <Fragment key={index}>{getBackground(layer)}</Fragment>
        ));
      default:
        return null;
    }
  };

  return getBackground(background);
}
