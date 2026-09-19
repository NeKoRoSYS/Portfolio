import { type SectionProps } from "@/components/Block";
import Button from "@/components/Buttons";
import { CONTACT } from "../../hyperlinks";
import Grid from "@/components/Grid";
import SpotlightBlob from "@/components/SpotlightBlob";
import { cn } from "@/lib/utils";
import { Heading2 } from "@/components/Headings";
import { TextScramble } from "@/components/motion-primitives/text-scramble";

export const HOME = {
  heroTitle: `NeKoRoSYS`,
  heroSubtitle: `Your one-man IT Department.`,
} as const;

function echoString({
  string,
  gap,
  count,
  className,
}: {
  string: string;
  gap: number;
  count: number;
  className: string;
}) {
  const elements: { string: string; className: string }[] = [];

  for (let i: number = 0; i < count; i++) {
    elements[i] = {
      string: string,
      className: className,
    };

    if (/\btranslate-y(?:-[\w.\[\]#%]+)?\b/.test(elements[i].className)) {
      const stepValue = gap * i;

      const tailwindClass = stepValue === 0.5 ? "1/2" : stepValue;

      elements[i].className = elements[i].className.replace(
        /\btranslate-y(?:-[\w.\[\]#%]+)?\b/g,
        `translate-y-${tailwindClass}`,
      );
    }
  }

  return elements.map((element, index) => (
    <span key={index} className={cn(element.className)}>
      {element.string}
    </span>
  ));
}

export const SECTIONS: SectionProps[] = [
  {
    id: "about",
    outline: { enable: true, color: "bg-zinc-100" },
    components: [
      {
        type: "heading",
        colSpan: "col-span-12 lg:col-span-5 ",
        wrapperClass:
          "mb-12 lg:mb-0 flex h-full w-full flex-wrap items-center justify-center",
        payload: { title: "Hello, World!", align: "text-center lg:text-left" },
      },
      {
        type: "custom",
        colSpan: "col-span-12 lg:col-span-7",
        wrapperClass:
          "flex h-full w-full grow flex-col items-center justify-center pl-4 text-zinc-100 sm:justify-end",
        content: (
          <>
            <p>
              My name is Marky, but I am better known online as <b>NeKoRoSYS</b>
              ! I am a 19-year-old Filipino currently taking Computer Science as
              my undergraduate program.
            </p>
            <br />
            <p>
              I aspire to be a Software Engineer and Systems Architect. My goal
              is to learn a lot of aspects that come in developing software and
              IoT such as video games, utilities, and other systems. I am
              interested in web, game, and AI/ML development; though I also
              happen to like creating graphic and motion designs.
            </p>
          </>
        ),
      },
    ],
  },
];
