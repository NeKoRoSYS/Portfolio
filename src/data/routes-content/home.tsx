import { type SectionProps } from "@/components/Block";
import Chip from "@/components/Chip";
import { HoverPanel, Panel } from "@/components/Panel";
import MarqueeModule from "react-fast-marquee";
const Marquee = (MarqueeModule as any).default || MarqueeModule;

export const HOME = {
  heroTitle: `NeKoRoSYS`,
  heroSubtitle: `Your one-man IT Department.`,
  testTitle: `Lorem Ipsum`,
  testTest: `dolor sit amet, consectetur adipiscing elit. Quisque vel magna nec nulla sollicitudin consectetur.
    Donec non nisl ex. Sed sit amet libero sollicitudin, sodales orci sed, malesuada eros.Fusce nibh sapien, tincidunt
    quis dui a, luctus porta quam. Proin auctor sem non ante scelerisque luctus ac at diam. Integer erat quam, rutrum
    sed sapien molestie, iaculis scelerisque nisi. Nullam lobortis, neque sed ornare volutpat, nisi erat fringilla orci,
    ut mollis arcu ligula nec ex. Proin ex neque, vehicula ac molestie et, consectetur ac magna. Interdum et malesuada
    fames ac ante ipsum primis in faucibus. Etiam sed lobortis metus. Orci varius natoque penatibus et magnis dis parturient
    montes, nascetur ridiculus mus. Etiam facilisis urna eu purus viverra vestibulum. In eget tortor sed lectus finibus mattis.
    Nam faucibus tincidunt est at efficitur.`,
} as const;

export const SECTIONS: SectionProps[] = [
  {
    title: "Who we are",
    text: "GravenSoft is a team of college friends who share the same passion for software and tech.",
    itemsInside: [
      <Panel>AAAAAAAAAAAAAAAAAAAAAA</Panel>,
      <Panel>AAAAAAAAAAAAAAAAAAAAAA</Panel>,
      <Panel>AAAAAAAAAAAAAAAAAAAAAA</Panel>,
      <Panel>AAAAAAAAAAAAAAAAAAAAAA</Panel>,
    ],
    itemsOutside: [
      <Panel>AAAAAAAAAAAAAAAAAAAAAA</Panel>,
      <Panel>AAAAAAAAAAAAAAAAAAAAAA</Panel>,
      <Panel>AAAAAAAAAAAAAAAAAAAAAA</Panel>,
      <Panel>AAAAAAAAAAAAAAAAAAAAAA</Panel>,
    ],
  },
  {
    bgColor: "bg-zinc-950",
    title: HOME.testTitle,
    text: HOME.testTest,
    itemsInside: [<Panel>AAAAAAAAAAAAAAAAAAAAAA</Panel>],
    itemsOutside: [
      <div className="flex gap-4">
        <Chip colorOverride={"red"}>Test</Chip>
        <Chip colorOverride={"blue"}>Test</Chip>
        <Chip colorOverride={"green"}>Test</Chip>
        <Chip colorOverride={"gray"}>Test</Chip>
      </div>,
    ],
  },
  {
    bgColor: "bg-zinc-900",
    title: HOME.testTitle,
    text: HOME.testTest,
    center: true,
  },
  {
    itemsInside: [
      <div className="relative right-1/2 left-1/2 mr-[-50vw] ml-[-50vw] w-screen">
        <Marquee pauseOnHover={true} className="flex w-full justify-between">
          <Panel className="h-100 w-lg scale-96 bg-zinc-400">Hey hey</Panel>
          <Panel className="h-100 w-lg scale-96 bg-zinc-400">Hey hey</Panel>
          <Panel className="h-100 w-lg scale-96 bg-zinc-400">Hey hey</Panel>
          <Panel className="h-100 w-lg scale-96 bg-zinc-400">Hey hey</Panel>
        </Marquee>
      </div>,
    ],
  },
  {
    bgColor: "bg-zinc-900",
    itemsInside: [
      <div className="flex w-full flex-col items-center justify-center gap-8 xl:flex-row">
        <HoverPanel
          className="mx-8 min-h-100 w-full border border-yellow-500 bg-linear-to-br from-yellow-800/50 to-yellow-400/50 to-75% transition-all xl:order-2 xl:mx-auto xl:min-h-110 xl:w-xs"
          translate={false}
          highlight
          highlightOverride="md:hover:shadow-yellow-200/50 md:hover:shadow-xl md:hover:from-yellow-800/50 to-75% md:hover:to-yellow-200/50"
        ></HoverPanel>
        <HoverPanel
          className="mx-8 min-h-100 w-full border border-red-500 bg-linear-to-br from-red-800/50 to-red-400/50 to-75% transition-all xl:order-3 xl:mx-auto xl:w-xs"
          translate={false}
          highlight
          highlightOverride="md:hover:shadow-red-300/50 md:hover:shadow-xl md:hover:from-red-800/50 to-75% md:hover:to-red-300/50"
        ></HoverPanel>
        <HoverPanel
          className="mx-8 min-h-100 w-full border border-green-500 bg-linear-to-br from-green-800/50 to-green-400/50 to-75% transition-all xl:order-1 xl:mx-auto xl:w-xs"
          translate={false}
          highlight
          highlightOverride="md:hover:shadow-green-300/50 md:hover:shadow-xl md:hover:from-green-800/50 to-75% md:hover:to-green-300/50"
        ></HoverPanel>
      </div>,
    ],
  },
];
