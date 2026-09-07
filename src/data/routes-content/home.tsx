import { type SectionProps } from "@/components/Block";
import Chip from "@/components/Chip";
import { HoverPanel, Panel } from "@/components/Panel";
import MarqueeModule from "react-fast-marquee";
const Marquee = (MarqueeModule as any).default || MarqueeModule;

export const HOME = {
    heroTitle: `Engineering experiences that leave a mark`,
    heroSubtitle: `Here at GravenSoft, our team is committed to delivering you quality software solutions that scale.`,
    testTitle: `Lorem Ipsum`,
    testTest: `dolor sit amet, consectetur adipiscing elit. Quisque vel magna nec nulla sollicitudin consectetur.
    Donec non nisl ex. Sed sit amet libero sollicitudin, sodales orci sed, malesuada eros.Fusce nibh sapien, tincidunt
    quis dui a, luctus porta quam. Proin auctor sem non ante scelerisque luctus ac at diam. Integer erat quam, rutrum
    sed sapien molestie, iaculis scelerisque nisi. Nullam lobortis, neque sed ornare volutpat, nisi erat fringilla orci,
    ut mollis arcu ligula nec ex. Proin ex neque, vehicula ac molestie et, consectetur ac magna. Interdum et malesuada
    fames ac ante ipsum primis in faucibus. Etiam sed lobortis metus. Orci varius natoque penatibus et magnis dis parturient
    montes, nascetur ridiculus mus. Etiam facilisis urna eu purus viverra vestibulum. In eget tortor sed lectus finibus mattis.
    Nam faucibus tincidunt est at efficitur.`
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
        itemsInside: [
            <Panel>AAAAAAAAAAAAAAAAAAAAAA</Panel>,
        ],
        itemsOutside: [
            <div className="flex gap-4">
                <Chip colorOverride={'red'}>Test</Chip>
                <Chip colorOverride={'blue'}>Test</Chip>
                <Chip colorOverride={'green'}>Test</Chip>
                <Chip colorOverride={'gray'}>Test</Chip>
            </div>
        ]
    },
    {
        bgColor: "bg-zinc-900",
        title: HOME.testTitle,
        text: HOME.testTest,
        center: true,
    },
    {
        itemsInside: [
            <div className="relative w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]">
                <Marquee pauseOnHover={true} className="w-full flex justify-between">
                    <Panel className="h-100 w-lg bg-zinc-400 scale-96">Hey hey</Panel>
                    <Panel className="h-100 w-lg bg-zinc-400 scale-96">Hey hey</Panel>
                    <Panel className="h-100 w-lg bg-zinc-400 scale-96">Hey hey</Panel>
                    <Panel className="h-100 w-lg bg-zinc-400 scale-96">Hey hey</Panel>
                </Marquee>
            </div>
        ]
    },
    {
        bgColor: "bg-zinc-900",
        itemsInside: [
            <div className="flex flex-col xl:flex-row w-full gap-8 justify-center items-center">
                <HoverPanel className="w-full xl:w-xs xl:order-2 mx-8 xl:mx-auto transition-all min-h-100 xl:min-h-110 bg-linear-to-br border border-yellow-500 from-yellow-800/50 to-75% to-yellow-400/50" translate={false} highlight={true} highlightOverride="md:hover:shadow-yellow-200/50 md:hover:shadow-xl md:hover:from-yellow-800/50 to-75% md:hover:to-yellow-200/50"></HoverPanel>
                <HoverPanel className="w-full xl:w-xs xl:order-3 mx-8 xl:mx-auto transition-all min-h-100 bg-linear-to-br border border-red-500 from-red-800/50 to-75% to-red-400/50" translate={false} highlight={true} highlightOverride="md:hover:shadow-red-300/50 md:hover:shadow-xl md:hover:from-red-800/50 to-75% md:hover:to-red-300/50"></HoverPanel>
                <HoverPanel className="w-full xl:w-xs xl:order-1 mx-8 xl:mx-auto transition-all min-h-100 bg-linear-to-br border border-green-500 from-green-800/50 to-75% to-green-400/50" translate={false} highlight={true} highlightOverride="md:hover:shadow-green-300/50 md:hover:shadow-xl md:hover:from-green-800/50 to-75% md:hover:to-green-300/50"></HoverPanel>
            </div>
        ]
    }
]