import { BUSINESS } from "@/data/hyperlinks";
import { Spotlight } from "./motion-primitives/spotlight";
import { Tilt } from "./motion-primitives/tilt";
import { IconHyperlink, TextHyperlink } from "./Hyperlinks";
import SpotlightBlob from "./SpotlightBlob";
import { Icons } from "@/shared/Icons";

export default function BrandingCard() {
  return (
    <Tilt
      rotationFactor={4}
      className="pointer-events-none m-auto flex min-h-45 w-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-zinc-700 bg-zinc-950 sm:pointer-events-auto"
      isRevese
    >
      <SpotlightBlob
        color="bg-zinc-300"
        top="-top-[50%] sm:-top-[100%]"
        left="left-0"
        size="w-[250px] h-[250px]"
        opacity="opacity-25"
      />
      <SpotlightBlob
        color="bg-purple-800"
        top="top-[100%]"
        left="right-0"
        size="w-[250px] h-[250px]"
        opacity="opacity-100"
      />
      <Spotlight
        className={`-z-10 bg-zinc-300/25 blur-3xl`}
        size={128}
        springOptions={{
          stiffness: 250,
          damping: 30,
          mass: 0.5,
        }}
      />
      <div className="my-8 flex h-auto w-full grow flex-col items-center justify-start gap-8 self-stretch sm:flex-row sm:justify-center lg:mx-8 lg:justify-start">
        <div className="aspect-square min-w-24 rounded-full bg-green-100" />
        <hr className="border border-zinc-800 not-sm:w-[50%] sm:h-16" />
        <div className="z-10 flex flex-col justify-center text-center sm:justify-start sm:pr-8 sm:text-left">
          <p className="font-bold">John Marky G. Malibiran</p>
          <p>Manila, National Capital Region, Philippines</p>
          <TextHyperlink
            className="pointer-events-auto mx-auto sm:mx-0"
            showHyperlinkIcon={false}
            path={"mailto:malibiran.johnmarky@gmail.com"}
            name={"malibiran.johnmarky@gmail.com"}
          />
          <p className="italic">(+63) 921 753 2961</p>
        </div>
      </div>
      <div className="mt-4 mb-8 flex w-full justify-center gap-4 px-8 lg:justify-end">
        {BUSINESS.map((link, index) => (
          <IconHyperlink
            key={index}
            name={link.name}
            path={link.path}
            icon={link.icon}
          />
        ))}
      </div>
    </Tilt>
  );
}
