import { cn } from "@/lib/utils";

export default function Grid({
  className,
  fade = true,
}: {
  className?: string;
  fade?: boolean;
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0 h-full w-full",
        fade &&
          "mask-[radial-gradient(ellipse_at_center,black_10%,transparent_70%)]",
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
            id="procedural-grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 40V0H40"
              fill="none"
              className="stroke-zinc-700/80"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#procedural-grid)" />
      </svg>
    </div>
  );
}
