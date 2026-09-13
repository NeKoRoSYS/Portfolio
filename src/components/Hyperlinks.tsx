import Link from "next/link";
import type { HyperlinkSchema } from "../data/hyperlinks";
import { Icons } from "../shared/Icons";
import { CopyTextToClipboard } from "@/shared/Utils";
import { cn } from "@/lib/utils";

export function TextHyperlink({
  linkIconClass,
  ...hyperlinkProps
}: HyperlinkSchema & { linkIconClass?: string }) {
  const { className, showHyperlinkIcon, name, path, icon, iconClass } =
    hyperlinkProps;
  const isCopy = path.startsWith("copy:");
  const isHash = path.startsWith("#");
  const isRoute = path.startsWith("/");
  const classOverride = cn(
    "duration-75 touch-hover:-translate-y-1 sm:touch-hover:translate-y-0 sm:touch-hover:translate-x-1 text-zinc-400 touch-hover:text-zinc-100 flex flex-row items-center gap-2 group",
    className,
  );
  const linkInner = (
    <>
      {icon && (
        <div
          aria-hidden={true}
          style={{
            maskImage: `url(${icon.toString()})`,
            WebkitMaskImage: `url(${icon.toString()})`,
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskPosition: "center",
          }}
          className={cn(
            `aspect-square w-8 shrink-0 bg-zinc-400 bg-cover bg-center bg-no-repeat sm:w-4 group-touch-hover:bg-zinc-100`,
            iconClass,
          )}
        />
      )}
      <p className={icon != null ? `hidden sm:block` : ""}>{name}</p>
      {showHyperlinkIcon && (
        <div
          aria-hidden={true}
          style={{
            maskImage: `url(${Icons.linkArrowIcon.toString()})`,
            WebkitMaskImage: `url(${Icons.linkArrowIcon.toString()})`,
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskPosition: "center",
          }}
          className={cn(
            "aspect-square w-3 shrink-0 bg-white bg-cover bg-center bg-no-repeat group-touch-hover:transform-[translate(4px,-4px)]",
            linkIconClass,
          )}
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
  const { name, path, icon, iconClass } = hyperlinkProps;
  return (
    <a href={path} rel="noreferrer noopener" target="_blank" title={name}>
      {icon && (
        <div
          aria-hidden={true}
          style={{
            maskImage: `url(${icon.toString()})`,
            WebkitMaskImage: `url(${icon.toString()})`,
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskPosition: "center",
          }}
          className={cn(
            `aspect-square w-8 shrink-0 bg-white bg-cover bg-center bg-no-repeat`,
            iconClass,
          )}
        />
      )}
    </a>
  );
}
