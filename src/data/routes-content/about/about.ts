import { type SectionProps } from "@/components/Block";

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
        payload: { text: "Hello, World!", align: "text-center lg:text-left" },
      },
      {
        type: "paragraph",
        colSpan: "col-span-12 lg:col-span-7",
        wrapperClass:
          "flex h-full w-full grow flex-col items-center justify-center pl-4 text-zinc-100 sm:justify-end",
        payload: {
          html: true,
          text: `My name is Marky, but I am better known online as <b>NeKoRoSYS</b>
              ! I am a 19-year-old Filipino currently taking Computer Science as
              my undergraduate program.
              <br />
              I aspire to be a Software Engineer and Systems Architect. My goal
              is to learn a lot of aspects that come in developing software and
              IoT such as video games, utilities, and other systems. I am
              interested in web, game, and AI/ML development; though I also
              happen to like creating graphic and motion designs.`,
        },
      },
    ],
  },
];
