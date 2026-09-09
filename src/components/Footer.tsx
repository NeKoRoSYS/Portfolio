"use client";

import { Fragment } from "react/jsx-runtime";
import { LinkColumns, type HyperlinkSchema } from "../data/hyperlinks";
import { TextHyperlink } from "./Hyperlinks";

export function Footer() {
  const ColumnLinks = (
    links: HyperlinkSchema[],
    className: string,
    showTitle: boolean = false,
    title?: string,
  ) => {
    const columns = Math.ceil(links.length / 5);
    const isGrid = className.includes("grid");
    return (
      <Fragment key={title}>
        <div
          className="flex flex-col gap-4"
          style={
            isGrid
              ? { gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }
              : undefined
          }
        >
          {showTitle ? (
            <span className="w-full text-center font-bold sm:text-left">
              {title}
            </span>
          ) : null}
          <div
            key={title}
            className={`${className} flex flex-wrap justify-center sm:justify-start`}
          >
            {links.map((hyperlink, index) => {
              return (
                <TextHyperlink
                  showHyperlinkIcon={
                    showTitle == true && hyperlink.icon == null
                  }
                  key={`${hyperlink.path}-${index}`}
                  name={hyperlink.name}
                  path={hyperlink.path}
                  icon={hyperlink.icon}
                />
              );
            })}
          </div>
        </div>
      </Fragment>
    );
  };

  const legalColumn = LinkColumns.filter(([title]) => title == "Legal");

  return (
    <footer className="flex h-auto w-full grow flex-col items-center border-t border-zinc-700 bg-black text-zinc-100">
      <section className="flex w-full flex-col items-center justify-between gap-12 px-8 py-8 lg:max-w-6xl lg:flex-row lg:items-start lg:gap-24">
        <p style={{ textAlign: "center" }}> Made with 💜 by NeKoRoSYS </p>
        <div className="flex w-full flex-col items-center justify-around gap-8 sm:flex-row sm:items-start sm:gap-16 lg:w-fit lg:px-0">
          {LinkColumns.filter(([title]) => title !== "Legal").map(
            ([title, links]) =>
              ColumnLinks(
                links,
                `flex sm:grid grid-flow-col grid-rows-5 gap-4 sm:gap-y-2 sm:gap-x-8 justify-center sm:justify-start`,
                true,
                title,
              ),
          )}
        </div>
      </section>

      <hr className="mx-auto w-full max-w-6xl border-zinc-800" />

      <section
        className={`mx-auto flex w-full flex-col items-center md:flex-row ${legalColumn.length > 0 ? `justify-between` : "justify-center"} gap-4 py-8 pb-16 lg:max-w-[80%] lg:gap-24`}
      >
        <p className="text-center font-bold text-zinc-700">
          2026 NeKoRoSYS. All Rights Reserved.
        </p>
        {legalColumn.length > 0 ? (
          <div className="flex w-full flex-col items-center justify-between gap-12 sm:flex-row sm:gap-24 md:w-fit">
            {legalColumn.map(([title, links]) =>
              ColumnLinks(
                links,
                "flex flex-row gap-8 justify-around mx-auto",
                false,
                title,
              ),
            )}
          </div>
        ) : null}
      </section>
    </footer>
  );
}
