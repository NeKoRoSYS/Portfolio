import { LinkColumns, type HyperlinkSchema } from "../data/hyperlinks";
import { TextHyperlink } from "./Hyperlinks";

export function Footer() {
  const ColumnLinks = (
    links: HyperlinkSchema[],
    className: string,
    showTitle: boolean = false,
    title?: string,
  ) => {
    return (
      <div
        key={title}
        className={`${className} flex flex-wrap justify-center sm:justify-start`}
      >
        {showTitle ? (
          <span className="w-full text-center font-bold sm:text-left">
            {title}
          </span>
        ) : null}
        {links.map((hyperlink, index) => {
          return (
            <TextHyperlink
              showHyperlinkIcon={showTitle == true && hyperlink.icon == null}
              key={`${hyperlink.path}-${index}`}
              name={hyperlink.name}
              path={hyperlink.path}
              icon={hyperlink.icon}
            />
          );
        })}
      </div>
    );
  };

  const legalColumn = LinkColumns.filter(([title]) => title == "Legal");

  return (
    <footer className="flex h-auto w-full grow flex-col items-center border-t border-zinc-700 bg-black text-zinc-100">
      <section className="mx-auto flex w-full flex-col items-center justify-between gap-12 py-8 lg:max-w-[80%] lg:flex-row lg:items-start lg:gap-24">
        <p style={{ textAlign: "center" }}> Made with 💜 by NeKoRoSYS </p>
        <div className="flex w-full max-w-md flex-col items-center justify-around gap-8 sm:flex-row sm:items-start sm:gap-24 lg:w-fit lg:px-0">
          {LinkColumns.filter(([title]) => title !== "Legal").map(
            ([title, links]) =>
              ColumnLinks(
                links,
                "flex flex-row sm:flex-col gap-4 sm:gap-2",
                true,
                title,
              ),
          )}
        </div>
      </section>

      <hr className="w-full border-zinc-800 lg:max-w-[80%]" />

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
