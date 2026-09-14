import { Section } from "@/components/Block";
import { SECTIONS } from "@/data/routes-content/about/about";

export default function Home() {
  return (
    <>
      {SECTIONS.map((section, index) => (
        <Section key={index} index={index} {...section} />
      ))}
    </>
  );
}
