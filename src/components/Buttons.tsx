import { type ReactNode } from "react";
import Link from "next/link";
import { ButtonSchema } from "@/data/hyperlinks";
import { CopyTextToClipboard } from "@/shared/Utils";
import { cn } from "@/lib/utils";

export default function Button({
  name,
  truncate,
  children,
  icon,
  iconClass,
  path,
  className = "",
}: ButtonSchema & {
  truncate?: boolean;
  children?: ReactNode;
  className?: string;
}) {
  const classOverride = cn(
    "px-4 group h-8 w-fit flex flex-row items-center justify-center cursor-pointer",
    className,
  );
  const isCopy = path.startsWith("copy:");
  const isHash = path.startsWith("#");
  const isRoute = path.startsWith("/");
  const linkInner = (
    <>
      {icon && (
        <div className="flex shrink-0 flex-row items-center gap-3">
          <div
            aria-hidden={true}
            style={{ backgroundImage: `url("${icon}")` }}
            className={cn(
              `aspect-square w-6 shrink-0 bg-cover bg-center bg-no-repeat brightness-0 invert saturate-0`,
              (children || name) && "w-6",
              iconClass,
            )}
          />
        </div>
      )}
      {children}
      {name && (
        <div className={cn(icon && "ml-4", truncate && "hidden sm:block")}>
          <p className={icon != null ? `text-center` : ""}>{name}</p>
        </div>
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
      <a href={path} className={classOverride}>
        {linkInner}
      </a>
    );
  }

  if (isRoute) {
    return (
      <Link href={path} className={classOverride}>
        {linkInner}
      </Link>
    );
  }

  return (
    <a
      href={path}
      className={classOverride}
      target="_blank"
      rel="noreferrer noopener"
    >
      {linkInner}
    </a>
  );
}
