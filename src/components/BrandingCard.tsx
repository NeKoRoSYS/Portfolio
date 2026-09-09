import { BUSINESS } from "@/data/hyperlinks";
import { Spotlight } from "./motion-primitives/spotlight";
import { Tilt } from "./motion-primitives/tilt";

export default function BrandingCard() {
  return (
    <Tilt
      rotationFactor={4}
      className="pointer-events-none m-auto flex min-h-45 w-full flex-col items-center justify-center rounded-3xl border border-zinc-700 bg-zinc-950 sm:pointer-events-auto"
      isRevese
    >
      <Spotlight
        className={`-z-1 my-8 bg-zinc-700 blur-2xl`}
        size={128}
        springOptions={{
          bounce: 0.3,
          duration: 0.1,
        }}
      />
      <div className="my-5 flex h-auto w-full grow flex-col items-center justify-start gap-8 self-stretch sm:flex-row sm:justify-center lg:mx-5 lg:justify-start">
        <div className="aspect-square min-w-24 rounded-full bg-green-100" />
        <hr className="border border-zinc-800 not-sm:w-[50%] sm:h-16" />
        <div className="z-10 text-center sm:text-left">
          <p className="font-bold">John Marky G. Malibiran</p>
          <p>Manila, NCR, Philippines</p>
          <p>malibiran.johnmarky@gmail.com</p>
          <p className="italic">(+63) 921 753 2961</p>
        </div>
      </div>
      <div className="mt-5 mb-5 flex w-full justify-center gap-4 px-5 lg:justify-end">
        {BUSINESS.map((link, index) => (
          <a
            key={index}
            href={link.path}
            rel="noreferrer noopener"
            target="_blank"
            title={link.name}
          >
            <div
              aria-hidden={true}
              style={{ backgroundImage: `url("${link.icon}")` }}
              className={`aspect-square w-8 shrink-0 bg-cover bg-center bg-no-repeat brightness-0 invert-75 hover:brightness-0 hover:invert`}
            />
          </a>
        ))}
      </div>
    </Tilt>
  );
}
