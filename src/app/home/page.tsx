import Block from "@/components/Block";
import Button from "@/components/Buttons";
import Hero from "@/components/Hero";
import { GlowEffect } from "@/components/motion-primitives/glow-effect";
import { BackgroundAscii } from "@/components/VideoPlayer";
import { HOME } from "@/data/routes-content/home";

export default function Home() {
  return (
    <>
      <Hero
        className="mx-8 flex flex-wrap justify-center gap-16 lg:mx-16 lg:h-full lg:justify-start"
        fade={true}
        background={
          <BackgroundAscii
            url={"/videos/background.mp4"}
            containerClassOverride="absolute inset-0 z-0 w-full h-full"
            loop={true}
          />
        }
      >
        <div className="flex-3 md:w-xl lg:mt-36 lg:min-h-svh lg:px-8">
          <h1 className="text-center font-bulletin text-6xl text-green-400 sm:text-7xl lg:text-left lg:text-[8rem]">
            {HOME.heroTitle}
          </h1>
          <p className="text-md text-center whitespace-pre-line italic sm:text-lg lg:text-left lg:text-xl">
            {HOME.heroSubtitle}
          </p>
          <div className="mt-16 flex w-full flex-wrap justify-center gap-4 lg:justify-start">
            <div className="group relative z-10 w-full origin-center rounded-xl transition-transform hover:scale-95 sm:w-fit">
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
                className="relative z-10 h-16 w-full rounded-xl bg-white px-8 font-bold text-black hover:bg-zinc-950 hover:text-white sm:w-fit"
              >
                Get in Touch
              </Button>
            </div>
            <Button
              className="h-16 w-full origin-center rounded-xl border border-white bg-white/20 px-8 font-bold text-white transition-transform hover:scale-95 hover:bg-white hover:text-black sm:w-fit"
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
