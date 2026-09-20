import { type SectionProps } from "@/components/Block";
import { BUSINESS, CONTACT } from "../../hyperlinks";
import { cn } from "@/lib/utils";
import { ABOUT_FIELDS } from "@/data/components/brandingCard";
import { Links } from "@/shared/Icons";

export const SECTIONS: SectionProps[] = [
  {
    id: "about-title",
    showIndex: false,
    background: {
      type: "grid",
      fadeDir: "top",
      size: 56,
      className: "opacity-50",
    },
    borderVisible: false,
    components: [
      {
        type: "heading",
        colSpan: "col-span-12",
        payload: {
          align: "text-center",
          segments: [
            { text: "Your " },
            {
              text: "One-Man",
              highlight: true,
              className: "text-green-400 touch-hover:text-purple-400",
            },
            { text: " IT Department" },
          ],
        },
      },
    ],
  },
  {
    id: "about",
    borderVisible: false,
    className: "bg-[rgb(15,15,15)] ",
    background: {
      type: "image",
      width: 3066,
      height: 2300,
      src: "/images/bg.jpg",
      alt: "background",
      className: "saturate-0 sm:w-full ",
    },
    spotlight: { enable: true, color: "bg-zinc-400/15" },
    outline: { enable: true, color: "bg-zinc-100" },
    components: [
      {
        type: "heading",
        colSpan: "col-span-12",
        wrapperClass: "mb-8",
        payload: { text: "Who I Am", align: "text-center lg:text-left" },
      },
      {
        type: "branding-card",
        colSpan: "col-span-12 lg:col-span-5",
        wrapperClass:
          "lg:hidden mb-12 lg:mb-0 flex w-full flex-wrap justify-center",
        payload: { fields: ABOUT_FIELDS },
      },
      {
        type: "container",
        colSpan: "col-span-12 lg:col-span-7",
        wrapperClass:
          "flex h-full w-full grow flex-col items-center justify-center pl-4 text-zinc-100",
        items: [
          {
            type: "hyperlink",
            wrapperClass: "mb-8 self-start",
            payload: {
              path: "/about",
              name: "Read the long version here!",
              showHyperlinkIcon: true,
              className:
                "py-2 touch-hover:translate-x-0! touch-hover:-translate-y-1!",
            },
          },
          {
            type: "paragraph",
            wrapperClass: "self-start",
            payload: {
              html: true,
              text: `I am a <b>Software Developer</b> and <b>Graphic Designer</b> by trade.
              <br /><br />
              My portfolio spans across a handful of tech domains and media. Unity game development is my main gig,
              but I also make and help create web apps through Frontend and Backend development. I make sure that
              all of my work are clean, reliable, consistent; and last but definitely not the least—up to standards.
              <br /> <br />
              <b>I commit to doing contracted, commissioned, or otherwise freelance work; though, I am also open for
              internships and part-time/full-time jobs.</b>`,
            },
          },
          {
            type: "container",
            wrapperClass: "mt-16 flex flex-col gap-4 self-start",
            items: [
              {
                type: "paragraph",
                payload: {
                  text: "I look forward to working with like-minded individuals who share the same passion for creation and solving problems.",
                },
              },
              {
                type: "container",
                wrapperClass: "flex flex-row gap-8",
                items: BUSINESS.map((link) => ({
                  type: "hyperlink",
                  payload: {
                    ...link,
                    showHyperlinkIcon: true,
                    className:
                      "py-2 touch-hover:translate-x-0! touch-hover:-translate-y-1!",
                  },
                })),
              },
            ],
          },
        ],
      },
      {
        type: "branding-card",
        colSpan: "col-span-12 lg:col-span-5",
        wrapperClass:
          "mb-12 lg:mb-0 hidden lg:flex h-full w-full flex-wrap items-center justify-end",
        payload: { fields: ABOUT_FIELDS },
      },
    ],
  },
  {
    id: "credentials",
    borderVisible: true,
    background: {
      type: "composite",
      layers: [
        {
          type: "image",
          width: 1920,
          height: 1080,
          src: "/images/nekorosys/nekostack.png",
          alt: "stack",
          className:
            "absolute top-[2%] right-[2%] -z-10 aspect-auto w-full mask-[linear-gradient(to_bottom,black,transparent_75%)] opacity-50 invert saturate-0",
        },
        { type: "grid", fadeDir: "bottom", size: 56, className: "opacity-50" },
      ],
    },
    components: [
      {
        type: "container",
        colSpan: "col-span-12",
        wrapperClass: "mb-16",
        items: [
          {
            type: "heading",
            wrapperClass: "w-full",
            payload: {
              align: "text-center",
              segments: [
                {
                  text: "Versatile ",
                  highlight: true,
                  className: "text-green-400 touch-hover:text-purple-400 ",
                },
                {
                  text: "and ",
                },
                {
                  text: "STACKED",
                  effect: "echo",
                },
              ],
            },
          },
          {
            type: "paragraph",
            wrapperClass: "mt-4 text-center font-bold text-zinc-200",
            payload: {
              text: "Building with industry-standard skills and tools that deliver.",
            },
          },
          {
            type: "hyperlink",
            wrapperClass: "w-full text-center flex flex-row justify-center",
            payload: {
              name: "Click to Download CV",
              path: "/CV Malibiran 2026.pdf",
              download: true,
              showHyperlinkIcon: true,
              linkIcon: Links.downloadIcon,
              linkIconClass: "group-touch-hover:transform-[translate(0px,0px)]",
              className:
                "py-2 touch-hover:translate-x-0! touch-hover:-translate-y-1!",
            },
          },
        ],
      },
      {
        type: "container",
        colSpan: "col-span-12",
        wrapperClass:
          "grid w-full grid-cols-12 sm:mx-auto bg-zinc-950/50 backdrop-blur-sm rounded-3xl border border-1 border-zinc-700 transition-all duration-150 touch-hover:border-green-400",
        items: [
          {
            type: "spotlight",
            color: "bg-green-400/50",
            size: 128,
          },
          {
            type: "container",
            colSpan: "col-span-12 lg:col-span-6",
            wrapperClass:
              "border-b border-zinc-800 lg:border-r lg:border-b-0 p-8",
            items: [
              {
                type: "heading",
                colSpan: "col-span-12 lg:col-span-6",
                wrapperClass: "flex w-full mb-8",
                payload: {
                  text: "Education",
                  level: "h3",
                  align: "text-center",
                },
              },
            ],
          },
          {
            type: "container",
            colSpan: "col-span-12 lg:col-span-6",
            wrapperClass: " p-8",
            items: [
              {
                type: "heading",
                colSpan: "col-span-12 lg:col-span-6",
                wrapperClass: "flex w-full mb-8",
                payload: {
                  text: "What I Use",
                  level: "h3",
                  align: "text-center",
                },
              },
              {
                type: "tech-stack",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "portfolio",
    className: "bg-zinc-950",
    borderVisible: false,
    background: {
      type: "grid",
      fadeDir: "radial",
      size: 56,
      className: "opacity-50",
    },
    components: [
      {
        type: "container",
        colSpan: "col-span-12",
        items: [
          { type: "portfolio-header" },
          {
            type: "container",
            wrapperClass: "flex h-full w-full flex-wrap justify-center",
            items: [
              {
                type: "paragraph",
                wrapperClass:
                  "w-full text-center font-bold text-zinc-200 lg:ml-128 lg:text-right text-zinc-300",
                payload: {
                  html: true,
                  text: `
        <b>Cohesive experiences through Software and Designs—engineered with
        purpose to solve real problems.</b>`,
                },
              },
            ],
          },
        ],
      },
      {
        type: "portfolio",
        colSpan: "col-span-12",
        wrapperClass: "mt-16",
      },
      {
        type: "spotlightStatic",
        color: "bg-zinc-500/75",
        top: "bottom-[75%]",
        left: "left-[75%]",
        size: "w-[720px] h-[720px]",
        opacity: "opacity-25 ",
      },
      {
        type: "spotlightStatic",
        color: "bg-green-600/50",
        top: "top-[75%]",
        left: "left-[75%]",
        size: "w-[720px] h-[720px]",
        opacity: "opacity-25",
      },
      {
        type: "spotlightStatic",
        color: "bg-purple-500/35",
        top: "bottom-[15%]",
        left: "right-[88%]",
        size: "w-[1000px] h-[1000px]",
        opacity: "opacity-25",
      },
    ],
  },
  {
    id: "contact",
    outline: { enable: true, color: "bg-green-400" },
    spotlight: { enable: true, color: "bg-green-500/25" },
    borderVisible: false,
    background: {
      type: "ascii-video",
      className: "opacity-20",
      themeColor: "#FFFFFF",
      url: "/videos/lavalamp.mp4",
    },
    components: [
      {
        type: "spotlightStatic",
        color: "bg-purple-800",
        top: "top-[100%]",
        left: "left-[33%] lg:left-0",
        size: "w-[250px] h-[250px]",
        opacity: "opacity-75",
      },
      {
        type: "spotlightStatic",
        color: "bg-purple-800",
        top: "-top-[50%]",
        left: "invisible lg:visible lg:right-0",
        size: "w-[250px] h-[250px]",
        opacity: "opacity-75",
      },

      {
        type: "container",
        colSpan: "col-span-12 lg:col-span-8",
        wrapperClass:
          "mb-16 lg:mb-0 flex h-full w-full flex-wrap items-center justify-center lg:justify-start",
        items: [
          {
            type: "heading",
            payload: {
              align: "text-center lg:text-left",
              segments: [
                { text: "One " },
                {
                  text: "'Hello'",
                  className:
                    "font-serif font-normal text-green-400 italic touch-hover:text-purple-400",
                },
                { text: "," },
                {
                  text: "Many",
                  breakBefore: true,
                  className:
                    "font-bold text-green-400 touch-hover:text-purple-400",
                },
                { text: " Possibilities." },
              ],
            },
          },
          {
            type: "paragraph",
            wrapperClass:
              "mt-4 w-full text-center font-bold text-zinc-400 lg:text-left",
            payload: {
              text: "Your ideas are just one conversation away from becoming reality.",
            },
          },
          {
            type: "paragraph",
            wrapperClass:
              "mt-16 hidden w-full text-center font-bold lg:block lg:text-left",
            payload: {
              html: true,
              text: "Currently open for freelance projects and internships. <br /> Connect with me on LinkedIn or drop an email to start building.",
            },
          },
        ],
      },
      {
        type: "container",
        colSpan: "col-span-12 lg:col-span-4",
        wrapperClass:
          "flex h-full w-full grow flex-col items-center justify-end lg:items-end lg:justify-center",
        items: [
          {
            type: "container",
            wrapperClass:
              "z-10 flex w-full max-w-sm flex-row gap-4 text-center sm:w-md sm:max-w-none sm:text-left lg:w-2xs lg:flex-col",
            items: CONTACT.map((link, index) => ({
              type: "button",
              payload: {
                path: link.path,
                name: link.altName,
                icon: link.icon,
                showHyperlinkIcon: true,
                className: cn(
                  "relative z-10 h-16 w-full rounded-xl border px-4 font-bold backdrop-blur-xs lg:justify-start",
                  index > 0 && "self-end lg:w-3xs touch-hover:text-zinc-100",
                  link.colors,
                ),
              },
            })),
          },
          {
            type: "paragraph",
            wrapperClass:
              "mt-8 block w-full text-center font-bold lg:hidden lg:text-left",
            payload: {
              html: true,
              text: "Currently open for freelance projects and internships. <br /> Connect with me on LinkedIn or drop an email to start building.",
            },
          },
        ],
      },
    ],
  },
];
