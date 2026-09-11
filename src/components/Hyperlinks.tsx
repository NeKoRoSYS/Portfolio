import Link from "next/link";
import type { HyperlinkSchema } from "../data/hyperlinks";
import { Icons } from "../shared/Icons";
import { CopyTextToClipboard } from "@/shared/Utils";
import { cn } from "@/lib/utils";

export function TextHyperlink({
  className,
  showHyperlinkIcon = true,
  ...hyperlinkProps
}: HyperlinkSchema & { showHyperlinkIcon?: boolean; className?: string }) {
  const { name, path, icon } = hyperlinkProps;
  const isCopy = path.startsWith("copy:");
  const isHash = path.startsWith("#");
  const isRoute = path.startsWith("/");
  const classOverride = cn(
    "duration-75 not-sm:touch-hover:-translate-y-1 sm:touch-hover:translate-x-1 text-zinc-400 touch-hover:text-zinc-100 flex flex-row items-center gap-2 group",
    className,
  );
  const linkInner = (
    <>
      {icon && (
        <div
          aria-hidden={true}
          style={{ backgroundImage: `url("${icon}")` }}
          className={`h-8 w-8 shrink-0 bg-cover bg-center bg-no-repeat brightness-0 invert-75 sm:h-4 sm:w-4 group-touch-hover:brightness-0 group-touch-hover:invert`}
        />
      )}
      <p className={icon != null ? `hidden sm:block` : ""}>{name}</p>
      {showHyperlinkIcon && (
        <div
          aria-hidden={true}
          style={{ backgroundImage: `url("${Icons.linkIcon}")` }}
          className="h-3 w-3 shrink-0 bg-cover bg-center bg-no-repeat"
        />
      )}
    </>
  );

  if (isCopy) {
    return (
      <a
        title={`Click to copy: ${name}}`}
        className={cn(classOverride, "cursor-pointer")}
        rel="noreferrer noopener"
        onClick={() => CopyTextToClipboard(path.slice(5))}
      >
        {linkInner}
      </a>
    );
  }

  if (isHash) {
    return (
      <a href={path} className={classOverride} rel="noreferrer noopener">
        {linkInner}
      </a>
    );
  }

  if (isRoute) {
    return (
      <Link href={path} className={classOverride} rel="noreferrer noopener">
        {linkInner}
      </Link>
    );
  }

  return (
    <a
      href={path}
      title={name}
      className={classOverride}
      rel="noreferrer noopener"
      target="_blank"
    >
      {linkInner}
    </a>
  );
}

export function IconHyperlink(hyperlinkProps: HyperlinkSchema) {
  const { name, path, icon } = hyperlinkProps;
  return (
    <a href={path} rel="noreferrer noopener" target="_blank" title={name}>
      <div
        aria-hidden={true}
        style={{ backgroundImage: `url("${icon}")` }}
        className={`aspect-square w-8 shrink-0 bg-cover bg-center bg-no-repeat brightness-0 invert-75 touch-hover:brightness-0 touch-hover:invert`}
      />
    </a>
  );
}
