import { Section } from "@/components/Block";
import Button from "@/components/Buttons";
import Hero from "@/components/Hero";
import { GlowEffect } from "@/components/motion-primitives/glow-effect";
import { TextLoop } from "@/components/motion-primitives/text-loop";
import { TextScramble } from "@/components/motion-primitives/text-scramble";
import ScrollIndicator from "@/components/ScrollIndicator";
import { BackgroundAscii } from "@/components/VideoPlayer";
import { LETTERS, ROLES } from "@/data/nekorosys";
import { SECTIONS } from "@/data/routes-content/home";

export default function Home() {
  return (
    <>
      <ScrollIndicator />
      <Hero
        fade
        background={
          <BackgroundAscii
            url={"/videos/background.mp4"}
            containerClassOverride="absolute inset-0 z-0 w-full h-full"
            loop
          />
        }
      >
        <div className="mx-auto flex w-full flex-3 flex-col items-center lg:mx-0 lg:items-start">
          <hr className="mx-auto mb-4 w-full max-w-xs border-2 border-green-400 hover:border-purple-300 lg:hidden" />

          <div className="order-2 flex w-full max-w-xs items-center justify-between gap-8 lg:order-1 lg:max-w-md">
            <hr className="w-full flex-1 border-2 border-green-400 lg:hidden" />
            <TextLoop className="text-md flex justify-center font-mono whitespace-nowrap italic select-none sm:text-lg lg:text-left lg:text-xl">
              {ROLES.map((role, index) => (
                <span
                  key={index}
                  className="text-green-400 hover:text-purple-300"
                >
                  {role.toUpperCase()}
                </span>
              ))}
            </TextLoop>

            <hr className="w-full flex-1 border-2 border-green-400 hover:border-purple-300" />
          </div>
          <div className="order-1 mx-auto w-fit text-center font-bulletin text-8xl select-none lg:order-2 lg:mx-0 lg:text-left lg:text-[8.65rem]">
            <TextScramble>
              {LETTERS.map((element, index) => (
                <span
                  key={index}
                  className="text-green-400 hover:-translate-y-2 hover:text-purple-300"
                >
                  {element}
                </span>
              ))}
            </TextScramble>
          </div>
          <hr className="order-3 mx-auto mt-8 mb-10 hidden w-full border-2 border-green-400 hover:border-purple-300 sm:w-md lg:mx-0 lg:mt-2 lg:mb-8 lg:block" />
          <div className="order-4 mt-24 flex w-full flex-wrap justify-center gap-4 lg:mt-0 lg:w-md lg:justify-start lg:gap-8">
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
                href="#contact"
                className="relative z-10 h-16 w-full rounded-xl bg-zinc-100 px-8 font-bold text-zinc-950 hover:bg-zinc-950 hover:text-green-300"
              >
                Get in Touch
              </Button>
            </div>
            <Button
              className="h-16 w-full origin-center rounded-xl border border-zinc-400 bg-zinc-800/20 px-8 font-bold text-zinc-100 transition-transform hover:scale-95 hover:border-purple-300 hover:bg-purple-500/20 hover:text-zinc-100 sm:w-fit lg:flex-1"
              href="#portfolio"
            >
              <p>Portfolio</p>
            </Button>
          </div>
        </div>
      </Hero>

      {SECTIONS.map((section, index) => (
        <Section
          key={index}
          bgColor={section.bgColor}
          id={section.id}
          borderVisible={section.borderVisible}
          title={section.title}
          text={section.text}
          itemsInside={section.itemsInside}
          itemsOutside={section.itemsOutside}
          center={section.center}
          reverse={section.reverse}
        />
      ))}
    </>
  );
}
