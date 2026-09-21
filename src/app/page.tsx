import { Section } from "@/components/Block";
import Button from "@/components/Buttons";
import Hero from "@/components/Hero";
import { GlowEffect } from "@/components/motion-primitives/glow-effect";
import { Magnetic } from "@/components/motion-primitives/magnetic";
import { Spotlight } from "@/components/motion-primitives/spotlight";
import { TextLoop } from "@/components/motion-primitives/text-loop";
import TextScramble from "@/components/motion-primitives/text-scramble";
import ScrollIndicator from "@/components/ScrollIndicator";
import { BackgroundAscii } from "@/components/VideoPlayer";
import { FEATURED, LETTERS, ROLES } from "@/data/nekorosys";
import { SECTIONS } from "@/data/routes-content/home/home";
import { Colors } from "@/shared/Colors";
import { Links } from "@/shared/Icons";
import { Heading1 } from "@/components/Headings";
import { ProjectCard } from "@/components/Cards";
import {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselItem,
  CarouselNavigation,
} from "@/components/motion-primitives/carousel";

export default function Home() {
  return (
    <>
      <ScrollIndicator />
      <Hero
        fade
        className="flex flex-col items-center justify-between lg:flex-row"
        background={
          <>
            <div className="absolute inset-0 z-0 aspect-video h-full w-full max-w-none scale-105">
              <BackgroundAscii
                themeColor="#8c2ed9"
                sampleSize={12}
                url={"/videos/backgroundAlt.mp4"}
                containerClassOverride="absolute inset-0 z-0 lg:w-full h-full max-w-none min-h-svh aspect-video lg:aspect-auto"
                loop
              />
            </div>
          </>
        }
      >
        <div className="mx-auto flex w-full flex-1 flex-col items-center lg:mx-0 lg:items-start">
          <hr className="mx-auto mb-4 w-full max-w-xs border-2 border-green-400 lg:hidden touch-hover:border-purple-400" />
          <div className="order-2 flex w-full max-w-xs items-center justify-between gap-8 lg:order-1 lg:max-w-md">
            <hr className="w-full flex-1 border-2 border-green-400 lg:hidden" />
            <TextLoop className="text-md flex justify-center font-mono whitespace-nowrap italic select-none sm:text-lg lg:text-left lg:text-xl">
              {ROLES.map((role, index) => (
                <span
                  key={index}
                  className="text-green-400 touch-hover:text-purple-400"
                >
                  <TextScramble>{role.toUpperCase()}</TextScramble>
                </span>
              ))}
            </TextLoop>

            <hr className="w-full flex-1 border-2 border-green-400 touch-hover:border-purple-400" />
          </div>
          <div className="order-1 mx-auto w-fit text-center font-bulletin text-8xl leading-none select-none lg:order-2 lg:mx-0 lg:text-left lg:text-[8.65rem]/none">
            <Heading1 className="sr-only">NeKoRoSYS</Heading1>
            <TextScramble className="aria-hidden:hidden">
              {LETTERS.map((element, index) => (
                <span
                  aria-hidden
                  key={index}
                  className="text-green-400 touch-hover:text-purple-400"
                >
                  {element}
                </span>
              ))}
            </TextScramble>
          </div>
          <hr className="order-3 mx-auto mt-4 mb-10 hidden w-full border-2 border-green-400 sm:w-md lg:mx-0 lg:mt-2 lg:mb-8 lg:block touch-hover:border-purple-400" />
          <div className="order-4 mt-10 flex max-w-xs flex-wrap justify-center gap-4 sm:mt-24 sm:max-w-none lg:mt-0 lg:w-md lg:justify-start lg:gap-8">
            <div className="z-10 w-full origin-center rounded-xl transition-transform sm:w-fit lg:flex-2 touch-hover:scale-95">
              <Magnetic>
                <div className="group relative w-full rounded-xl">
                  <GlowEffect
                    className={`pointer-events-none absolute inset-0 z-0 group-touch-hover:hidden`}
                    colors={["#FF5733", "#33FF57", "#3357FF", "#F1C40F"]}
                    mode="colorShift"
                    blur="medium"
                    duration={2}
                    scale={1.01}
                  />
                  <div className="group relative flex rounded-xl p-px">
                    <Spotlight
                      className={`-z-10 bg-green-400`}
                      size={128}
                      springOptions={{
                        stiffness: 350,
                        damping: 30,
                        mass: 0.5,
                      }}
                    />
                    <Button
                      icon={Links.emailIcon}
                      iconClass="invert group-touch-hover:invert-0 mr-4 group-touch-hover:bg-green-300 saturate-100"
                      path="#contact"
                      className="relative z-10 h-16 w-full rounded-xl bg-zinc-100 px-8 font-bold text-zinc-950 lg:justify-center touch-hover:bg-zinc-950 touch-hover:text-green-300"
                    >
                      <Spotlight
                        className={`-z-10 bg-zinc-100/50 blur-2xl`}
                        size={64}
                        springOptions={{
                          stiffness: 350,
                          damping: 30,
                          mass: 0.5,
                        }}
                      />
                      <p>Get in Touch</p>
                    </Button>
                  </div>
                </div>
              </Magnetic>
            </div>
            <Button
              className={`${Colors.buttonMuted} h-16 w-full origin-center justify-center rounded-xl border-2 px-8 font-bold transition-transform sm:w-fit lg:flex-1 lg:justify-center touch-hover:scale-95`}
              path="#portfolio"
            >
              <p>See Portfolio</p>
            </Button>
          </div>
        </div>
        <div className="hidden w-full flex-1 items-center lg:flex">
          <Carousel className="ml-16 w-full">
            <div className="my-16 mask-[linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
              <CarouselContent className="w-full">
                {FEATURED.map((project, index) => (
                  <CarouselItem key={index} className="">
                    <div className="m-4">
                      <ProjectCard {...project} tilt featured></ProjectCard>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>
            <CarouselNavigation alwaysShow />
            <CarouselIndicator />
          </Carousel>
        </div>
      </Hero>

      {SECTIONS.map((section, index) => (
        <Section key={index} index={index} {...section} />
      ))}
    </>
  );
}
