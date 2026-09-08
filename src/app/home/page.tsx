import Block from "@/components/Block";
import Button from "@/components/Buttons";
import Hero from "@/components/Hero";
import { GlowEffect } from "@/components/motion-primitives/glow-effect";
import { TextLoop } from "@/components/motion-primitives/text-loop";
import { TextScramble } from "@/components/motion-primitives/text-scramble";
import { BackgroundAscii } from "@/components/VideoPlayer";
import { HOME } from "@/data/routes-content/home";

export default function Home() {
  return (
    <>
      <Hero
        className="flex flex-wrap justify-center gap-16 lg:justify-start"
        fade={true}
        background={
          <BackgroundAscii
            url={"/videos/background.mp4"}
            containerClassOverride="absolute inset-0 z-0 w-full h-full"
            loop={true}
          />
        }
      >
        <div className="flex flex-3 flex-col">
          <div className="order-2 flex items-center justify-center gap-8 lg:order-1 lg:w-md lg:justify-start">
            <TextLoop className="text-md flex justify-center font-mono italic sm:text-lg lg:text-left lg:text-xl">
              <span>STUDENT</span>
              <span>SOFTWARE DEVELOPER</span>
              <span>GRAPHIC DESIGNER</span>
              <span>LAYOUT ARTIST</span>
              <span>ILLUSTRATOR</span>
            </TextLoop>
            <hr className="order-3 hidden w-full border-zinc-100 lg:block" />
          </div>
          <TextScramble className="order-1 text-center font-bulletin text-6xl text-green-400 sm:text-7xl lg:order-2 lg:text-left lg:text-[8.65rem]">
            {HOME.heroTitle}
          </TextScramble>
          <hr className="order-3 mx-auto mt-8 mb-10 w-full border-zinc-100 sm:w-md lg:mx-0 lg:mt-2 lg:mb-16" />
          <div className="order-4 flex w-full flex-wrap justify-center gap-4 lg:w-md lg:justify-start">
            <div className="group relative z-10 w-full origin-center rounded-xl transition-transform hover:scale-95 sm:w-fit lg:flex-2">
              <GlowEffect
                className={`pointer-events-none absolute inset-0 z-0 group-hover:hidden`}
                colors={["#FF5733", "#33FF57", "#3357FF", "#F1C40F"]}
                mode="colorShift"
                blur="soft"
                duration={2}
                scale={1.01}
              />
              <Button
                href="/contact"
                className="relative z-10 h-16 w-full rounded-xl bg-zinc-100 px-8 font-bold text-zinc-950 hover:bg-zinc-950 hover:text-zinc-100"
              >
                Get in Touch
              </Button>
            </div>
            <Button
              className="h-16 w-full origin-center rounded-xl border border-white bg-zinc-100/20 px-8 font-bold text-zinc-100 transition-transform hover:scale-95 hover:bg-zinc-100 hover:text-zinc-950 sm:w-fit lg:flex-1"
              href="/portfolio"
            >
              <p>Portfolio</p>
            </Button>
          </div>
        </div>
      </Hero>
      <Block>Test</Block>
    </>
  );
}
