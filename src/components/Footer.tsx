import { LinkColumns, type HyperlinkSchema } from "../data/hyperlinks"
import { TextHyperlink } from "./Hyperlinks";

export function Footer() {
  const ColumnLinks = (links: HyperlinkSchema[], className: string, showTitle: boolean = false, title?: string) => {
    return (
      <div key={title} className={`${className} flex flex-wrap justify-center sm:justify-start`}>
        { showTitle ? <span className="font-bold w-full text-center sm:text-left">{title}</span> : null}
        { links.map((hyperlink, index) => {
          return (
            <TextHyperlink showHyperlinkIcon={showTitle == true && hyperlink.icon == null} key={`${hyperlink.path}-${index}`} name={hyperlink.name} path={hyperlink.path} icon={hyperlink.icon} isRoute={hyperlink.isRoute}/>
          );
        })}
      </div>
    );
  }

  return (
    <footer className="w-full h-auto grow flex flex-col items-center bg-black text-zinc-100 border-t border-zinc-700">
      <section className="w-full flex flex-col lg:flex-row items-center lg:items-start mx-auto justify-between lg:max-w-6xl gap-12 lg:gap-24 px-8 xl:px-0 py-8 lg:py-8">
        <p style={{ textAlign: "center" }}> Made with 🤍 by the GravenSoft Team! </p>
        <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start sm:gap-24 lg:px-0 w-full justify-around lg:w-fit max-w-md">
          { LinkColumns.filter( ([title]) => (title !== "Legal") ).map( ([title, links]) => (ColumnLinks(links, "flex flex-row sm:flex-col gap-4 sm:gap-2", true, title)) ) }
        </div>
      </section>

      <hr className="border-zinc-800 w-full max-w-6xl"/>
      
      <section className="w-full flex flex-col md:flex-row items-center mx-auto justify-between lg:max-w-6xl gap-4 lg:gap-24 px-8 xl:px-0 py-8 pb-16">
        <p style={{ textAlign: "center" }}> © 2026 GravenSoft LLC. All Rights Reserved. </p>
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-24 w-full md:w-fit justify-between items-center">
          { LinkColumns.filter( ([title]) => (title == "Legal") ).map( ([title, links]) => (ColumnLinks(links, "flex flex-row gap-8 justify-around mx-auto", false, title)) ) }
        </div>
      </section>
    </footer>
  );
}