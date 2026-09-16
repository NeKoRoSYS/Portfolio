import { Section } from "@/components/Block";
import { SECTIONS } from "@/data/routes-content/about/about";

export default function Home() {
  return (
    <>
      <div className="h-23 w-full border-0 bg-zinc-950"></div>
      {SECTIONS.map((section, index) => (
        <Section key={index} index={index + 1} {...section} />
      ))}
    </>
  );
}
