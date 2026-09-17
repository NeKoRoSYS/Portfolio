import Link from "next/link";
import type { HyperlinkSchema } from "../data/hyperlinks";
import { Icons } from "../shared/Icons";
import { CopyTextToClipboard } from "@/shared/Utils";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function SmartLink({
  children,
  ...hyperlinkProps
}: HyperlinkSchema & { children?: ReactNode }) {
  const {
    className,
    iconClass,
    labelClass,
    linkIconClass,
    download = false,
    showHyperlinkIcon,
    icon,
    name,
    path,
  } = hyperlinkProps;

  const isCopy = path.startsWith("copy:");
  const isHash = path.startsWith("#");
  const isRoute = path.startsWith("/");

  const baseClass = "group";

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
      {children}
      {name && (
        <p className={cn(icon != null && `hidden sm:block`, labelClass)}>
          {name}
        </p>
      )}
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
            "aspect-square w-3 shrink-0 bg-zinc-400 bg-cover bg-center bg-no-repeat group-touch-hover:transform-[translate(4px,-4px)] group-touch-hover:bg-white",
            linkIconClass,
          )}
        />
      )}
    </>
  );

  if (isCopy) {
    return (
      <a
        draggable={false}
        title={`Click to copy: ${name}`}
        className={cn(baseClass, "cursor-pointer", className)}
        rel="noreferrer noopener"
        onClick={() => CopyTextToClipboard(path.slice(5))}
      >
        {linkInner}
      </a>
    );
  }

  if (isHash) {
    return (
      <a
        draggable={false}
        href={path}
        className={cn(baseClass, className)}
        rel="noreferrer noopener"
      >
        {linkInner}
      </a>
    );
  }

  if (isRoute) {
    return (
      <Link
        download={download}
        draggable={false}
        href={path}
        className={cn(baseClass, className)}
        rel="noreferrer noopener"
      >
        {linkInner}
      </Link>
    );
  }

  return (
    <a
      draggable={false}
      href={path}
      title={name}
      className={cn(baseClass, className)}
      rel="noreferrer noopener"
      target="_blank"
    >
      {linkInner}
    </a>
  );
}

export function TextHyperlink({ ...hyperlinkProps }: HyperlinkSchema) {
  const { className } = hyperlinkProps;
  return (
    <SmartLink
      {...hyperlinkProps}
      className={cn(
        "flex flex-row items-center gap-2 text-zinc-400 duration-75 touch-hover:-translate-y-1 touch-hover:text-zinc-100 sm:touch-hover:translate-x-1 sm:touch-hover:translate-y-0",
        className,
      )}
    />
  );
}

export function IconHyperlink(hyperlinkProps: HyperlinkSchema) {
  const { name, path, icon, iconClass } = hyperlinkProps;
  return (
    <a
      draggable={false}
      href={path}
      rel="noreferrer noopener"
      target="_blank"
      title={name}
    >
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
