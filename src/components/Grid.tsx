import { cn } from "@/lib/utils";
import { useId } from "react";

interface GridProps {
  className?: string;
  fade?: boolean;
  fadeDir?: "radial" | "right" | "left" | "top" | "bottom" | "y" | "x";
  size?: number;
}

export default function Grid({
  className,
  fade = true,
  fadeDir = "radial",
  size = 8,
}: GridProps) {
  const center = size / 2;
  const uniquePatternId = useId();

  const maskClasses = {
    radial: [
      "mask-[radial-gradient(ellipse_at_center,black_10%,transparent_70%)]",
      "[mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]",
    ],
    right: [
      "mask-[linear-gradient(to_right,black_50%,transparent)]",
      "[mask-image:linear-gradient(to_right,black_50%,transparent)]",
    ],
    left: [
      "mask-[linear-gradient(to_left,black_50%,transparent)]",
      "[mask-image:linear-gradient(to_left,black_50%,transparent)]",
    ],
    top: [
      "mask-[linear-gradient(to_top,black_50%,transparent)]",
      "[mask-image:linear-gradient(to_top,black_50%,transparent)]",
    ],
    bottom: [
      "mask-[linear-gradient(to_bottom,black-50%,transparent)]",
      "[mask-image:linear-gradient(to_bottom,black_50%,transparent)]",
    ],
    y: [
      "mask-[linear-gradient(to_bottom,transparent,black-50%,transparent)]",
      "[mask-image:linear-gradient(to_bottom,transparent,black_50%,transparent)]",
    ],
    x: [
      "mask-[linear-gradient(to_left,transparent,black_50%,transparent)]",
      "[mask-image:linear-gradient(to_left,transparent,black_50%,transparent)]",
    ],
  };

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0 h-full w-full",
        fade && maskClasses[fadeDir],
        className,
      )}
    >
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-0"
      >
        <defs>
          <pattern
            id={uniquePatternId}
            width={size}
            height={size}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M0 ${center}H${center}M${center} ${center}V0M${center} ${center}H${size}M${center} ${center}V${size}`}
              stroke="currentColor"
              strokeOpacity="1"
              className="stroke-zinc-800"
            />
            <rect
              x={center - 1}
              y={center - 1}
              width="4"
              height="4"
              fill="currentColor"
              fillOpacity="0.25"
              className="fill-zinc-800"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${uniquePatternId})`} />
      </svg>
    </div>
  );
}
