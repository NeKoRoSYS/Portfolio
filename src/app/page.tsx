import { Section } from "@/components/Block";
import Button from "@/components/Buttons";
import Hero from "@/components/Hero";
import { GlowEffect } from "@/components/motion-primitives/glow-effect";
import { Magnetic } from "@/components/motion-primitives/magnetic";
import { Spotlight } from "@/components/motion-primitives/spotlight";
import { TextLoop } from "@/components/motion-primitives/text-loop";
import { TextScramble } from "@/components/motion-primitives/text-scramble";
import ScrollIndicator from "@/components/ScrollIndicator";
import { BackgroundAscii } from "@/components/VideoPlayer";
import { LETTERS, ROLES } from "@/data/nekorosys";
import { SECTIONS } from "@/data/routes-content/home/home";
import Colors from "@/shared/Colors";
import { Icons } from "@/shared/Icons";
import { Heading1 } from "@/components/Headings";

export default function Home() {
  return (
    <>
      <ScrollIndicator />
      <Hero
        fade
        className="flex flex-wrap justify-between"
        background={
          <>
            <BackgroundAscii
              url={"/videos/background.mp4"}
              containerClassOverride="absolute inset-0 z-0 lg:w-full h-full max-w-none min-h-svh aspect-video lg:aspect-auto"
              loop
            />
          </>
        }
      >
        <div className="mx-auto flex w-full flex-1 flex-col items-center lg:mx-0">
          <hr className="mx-auto mb-4 w-full max-w-xs border-2 border-green-400 lg:hidden touch-hover:border-purple-300" />
          <div className="order-2 flex w-full max-w-xs items-center justify-between gap-8 lg:order-1 lg:max-w-md">
            <hr className="w-full flex-1 border-2 border-green-400 lg:hidden" />
            <TextLoop className="text-md flex justify-center font-mono whitespace-nowrap italic select-none sm:text-lg lg:text-left lg:text-xl">
              {ROLES.map((role, index) => (
                <span
                  key={index}
                  className="text-green-400 touch-hover:text-purple-300"
                >
                  <TextScramble>{role.toUpperCase()}</TextScramble>
                </span>
              ))}
            </TextLoop>

            <hr className="w-full flex-1 border-2 border-green-400 touch-hover:border-purple-300" />
          </div>
          <div className="order-1 mx-auto w-fit text-center font-bulletin text-8xl select-none lg:order-2 lg:mx-0 lg:text-left lg:text-[8.65rem]">
            <Heading1 className="hidden">NeKoRoSYS</Heading1>
            <TextScramble>
              {LETTERS.map((element, index) => (
                <span
                  key={index}
                  className="text-green-400 touch-hover:text-purple-300"
                >
                  {element}
                </span>
              ))}
            </TextScramble>
          </div>
          <hr className="order-3 mx-auto mt-4 mb-10 hidden w-full border-2 border-green-400 sm:w-md lg:mx-0 lg:mt-2 lg:mb-8 lg:block touch-hover:border-purple-300" />
          <div className="order-4 mt-24 flex max-w-xs flex-wrap justify-center gap-4 sm:max-w-none lg:mt-0 lg:w-md lg:justify-start lg:gap-8">
            <div className="group relative z-10 w-full origin-center rounded-xl transition-transform sm:w-fit lg:flex-2 touch-hover:scale-95">
              <Magnetic>
                <GlowEffect
                  className={`pointer-events-none absolute inset-0 z-0 group-touch-hover:hidden`}
                  colors={["#FF5733", "#33FF57", "#3357FF", "#F1C40F"]}
                  mode="colorShift"
                  blur="medium"
                  duration={2}
                  scale={1.01}
                />
                <Button
                  icon={Icons.emailIcon}
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
      </Hero>

      {SECTIONS.map((section, index) => (
        <Section key={index} {...section} />
      ))}
    </>
  );
}
