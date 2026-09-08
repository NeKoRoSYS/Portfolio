import { type ReactNode } from "react";
import Link from "next/link";

interface ButtonSchema {
  href: string;
  children?: ReactNode;
  className?: string;
}

export default function Button({
  children,
  href,
  className = "",
}: ButtonSchema) {
  const classOverride =
    `h-8 w-fit px-4 flex flex-row items-center justify-center cursor-pointer ${className}`.trim();
  const isInternal = href.startsWith("#") || href.startsWith("/");

  if (isInternal) {
    return (
      <Link href={href} className={classOverride}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classOverride}>
      {children}
    </a>
  );
}
