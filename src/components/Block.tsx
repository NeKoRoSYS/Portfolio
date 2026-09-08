import type { ReactNode } from "react";

interface BlockProps {
  children?: ReactNode;
  className?: string;
  borderVisible?: boolean;
}

export default function Block({
  id,
  children,
  className,
  borderVisible = true,
}: BlockProps & { id?: string }) {
  return (
    <section
      id={id}
      className={`flex w-full flex-col items-center justify-center ${borderVisible ? `border-b border-zinc-800` : ""} ${className}`}
    >
      <div className={`h-full w-full max-w-5xl px-8 py-12 sm:py-16 xl:px-0`}>
        {children}
      </div>
    </section>
  );
}

export interface SectionProps {
  title?: string;
  text?: string;
  bgColor?: string;
  center?: boolean;
  reverse?: boolean;
  itemsOutside?: ReactNode[];
  itemsInside?: ReactNode[];
}

export function Section(props: SectionProps) {
  const {
    title,
    text,
    bgColor = "bg-zinc-950",
    center = false,
    reverse = false,
    itemsOutside,
    itemsInside,
  } = props;

  return (
    <Block className={` ${bgColor}`}>
      <div
        className={`flex flex-wrap gap-8 ${reverse ? "sm:flex-row-reverse" : "sm:flex-row"} w-fit sm:w-full`}
      >
        <div
          className={`flex flex-col gap-8 ${!itemsOutside ? "w-full" : "w-full lg:w-fit"}`}
        >
          {title ? (
            <h1 className={`text-4xl font-bold ${center ? "text-center" : ""}`}>
              {title}
            </h1>
          ) : null}
          {text ? (
            <p className={`${center ? "text-center" : ""}`}>{text}</p>
          ) : null}
          {itemsInside ? (
            <div className={`flex w-full flex-col gap-8`}>
              {itemsInside?.map((element) => (
                <>{element}</>
              ))}
            </div>
          ) : null}
        </div>
        {itemsOutside ? (
          <div className="flex w-full flex-wrap gap-8 sm:mx-auto lg:w-fit lg:flex-col">
            {itemsOutside?.map((element) => (
              <>{element}</>
            ))}
          </div>
        ) : null}
      </div>
    </Block>
  );
}
