import Button from "@/components/Buttons";
import Hero from "@/components/Hero";
import { GlowEffect } from "@/components/motion-primitives/glow-effect";
import { BackgroundAscii } from "@/components/VideoPlayer";
import { HOME } from "@/data/routes-content/home";

export default function Home() {
  return (
      <Hero className="flex flex-wrap justify-center lg:justify-start lg:max-w-5xl mx-8 lg:mx-0 xl:max-w-7xl gap-16" fade={true} background={
        <BackgroundAscii url={'/videos/background.mp4'} containerClassOverride="absolute inset-0 z-0 w-full h-full" loop={true} /> 
      }>
        <div className="md:w-xl lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bulletin mb-4 text-center md:text-left">{HOME.heroTitle}</h1>
          <p className='whitespace-pre-line text-center md:text-left'>
            {HOME.heroSubtitle}
          </p>
          <div className="flex flex-wrap mt-16 gap-4 w-full justify-center md:justify-start">
            <div className="z-10 group relative transition-transform origin-center hover:scale-95 w-full sm:w-fit rounded-xl">
              <GlowEffect
                className={`absolute inset-0 group-hover:hidden pointer-events-none z-0`}
                colors={['#FF5733', '#33FF57', '#3357FF', '#F1C40F']}
                mode="colorShift"
                blur="soft"
                duration={2}
                scale={1.01}
              />
              <Button 
                href="/contact"
                className="relative z-10 w-full sm:w-fit h-16 px-8 rounded-xl bg-white text-black font-bold hover:bg-zinc-950 hover:text-white"
              >
                Build with Us
              </Button>
            </div>
            <Button className="transition-transform origin-center hover:scale-95 w-full sm:w-fit h-16 px-8 rounded-xl border border-white bg-white/20 text-white font-bold hover:bg-white hover:text-black" href="/portfolio"><p>Portfolio</p></Button>
          </div>
        </div>
      </Hero>
  );
}