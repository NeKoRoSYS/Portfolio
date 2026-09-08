import Link from "next/link";
import type { HyperlinkSchema } from "../data/hyperlinks";
import { Icons } from "../shared/Icons";
import { CopyTextToClipboard } from "@/shared/Utils";
import { cn } from "@/lib/utils";

export function TextHyperlink({
  showHyperlinkIcon = true,
  ...hyperlinkProps
}: HyperlinkSchema & { showHyperlinkIcon?: boolean }) {
  const { name, path, icon } = hyperlinkProps;
  const isCopy = path.startsWith("copy:");
  const isInternal = path.startsWith("#") || path.startsWith("/");
  const className =
    "duration-75 not-sm:hover:-translate-y-1 sm:hover:translate-x-1 text-zinc-400 hover:text-zinc-100 flex flex-row items-center gap-2";
  const linkInner = (
    <>
      {icon ? (
        <div
          style={{ backgroundImage: `url("${icon}")` }}
          className={`h-8 w-8 shrink-0 bg-cover bg-center bg-no-repeat brightness-0 invert-75 hover:brightness-0 hover:invert sm:h-4 sm:w-4 sm:brightness-0 sm:invert`}
        />
      ) : null}
      <p className={icon != null ? `hidden sm:block` : ""}>{name}</p>
      {showHyperlinkIcon ? (
        <div
          style={{ backgroundImage: `url("${Icons.linkIcon}")` }}
          className="h-3 w-3 shrink-0 bg-cover bg-center bg-no-repeat"
        />
      ) : null}
    </>
  );

  if (isCopy) {
    return (
      <a
        className={cn(className, "cursor-pointer")}
        rel="noreferrer noopener"
        onClick={() => CopyTextToClipboard(path.slice(5))}
      >
        {linkInner}
      </a>
    );
  }

  if (isInternal) {
    return (
      <Link href={path} className={className} rel="noreferrer noopener">
        {linkInner}
      </Link>
    );
  }

  return (
    <a
      href={path}
      className={className}
      rel="noreferrer noopener"
      target="_blank"
    >
      {linkInner}
    </a>
  );
}
