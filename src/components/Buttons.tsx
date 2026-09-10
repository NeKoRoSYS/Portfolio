import { type ReactNode } from "react";
import Link from "next/link";
import { ButtonSchema } from "@/data/hyperlinks";
import { CopyTextToClipboard } from "@/shared/Utils";
import { cn } from "@/lib/utils";

export default function Button({
  name,
  children,
  icon,
  iconClass,
  path,
  className = "",
}: ButtonSchema & { children?: ReactNode; className?: string }) {
  const classOverride =
    `group h-8 w-fit px-4 flex flex-row items-center justify-center cursor-pointer ${className}`.trim();
  const isCopy = path.startsWith("copy:");
  const isHash = path.startsWith("#");
  const isRoute = path.startsWith("/");
  const linkInner = (
    <>
      {icon && (
        <div
          aria-hidden={true}
          style={{ backgroundImage: `url("${icon}")` }}
          className={cn(
            `aspect-square w-6 shrink-0 bg-cover bg-center bg-no-repeat brightness-0 invert sm:mr-4`,
            (children || name) && "w-6",
            iconClass,
          )}
        />
      )}
      {children}
      {name && <p className={icon != null ? `hidden sm:block` : ""}>{name}</p>}
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
