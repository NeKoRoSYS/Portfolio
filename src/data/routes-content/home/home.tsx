import { type SectionProps } from "@/components/Block";
import Button from "@/components/Buttons";
import { BUSINESS, CONTACT } from "../../hyperlinks";
import { cn } from "@/lib/utils";
import { Heading2, Heading3 } from "@/components/Headings";
import { TextScramble } from "@/components/motion-primitives/text-scramble";
import { TextHyperlink } from "@/components/Hyperlinks";
import { ABOUT_FIELDS } from "@/data/components/brandingCard";
import { Icons } from "@/shared/Icons";

export const SECTIONS: SectionProps[] = [
  {
    id: "about-title",
    showIndex: false,
    outline: { enable: true, color: "bg-green-400" },
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
    className: "bg-[rgb(15,15,15)]",
    background: {
      type: "image",
      width: 3066,
      height: 2300,
      src: "/images/bg.jpg",
      alt: "background",
      className: "saturate-0 sm:w-full",
    },
    outline: { enable: true, color: "bg-zinc-100" },
    components: [
      {
        type: "heading",
        wrapperClass: "mb-8",
        payload: { text: "Who I Am", align: "text-center lg:text-left" },
      },
      {
        type: "branding-card",
        colSpan: "col-span-12 lg:col-span-5",
        wrapperClass:
          "mb-12 lg:mb-0 flex h-full w-full flex-wrap items-center justify-center lg:justify-center",
        payload: { fields: ABOUT_FIELDS },
      },
      {
        colSpan: "col-span-12 lg:col-span-7",
        wrapperClass:
          "flex h-full w-full grow flex-col items-center justify-center pl-4 text-zinc-100",
        type: "custom",
        content: (
          <>
            <TextHyperlink
              className="mb-8 justify-start self-start py-2 touch-hover:translate-x-0! touch-hover:-translate-y-1!"
              showHyperlinkIcon
              path={"/about"}
              name={"Read the long version here!"}
            />
            <p className="self-start">
              I am a <b>Software Developer</b> and <b>Graphic Designer</b> by
              trade.
              <br />
              <br />
              My portfolio spans across a handful of tech domains and media.
              Unity game development is my main gig, but I also make and help
              create web apps through Frontend and Backend development. I make
              sure that all of my work are clean, reliable, consistent; and last
              but definitely not the least—up to standards.
              <br />
              <br />
              <b>
                I commit to doing contracted, commissioned, or otherwise
                freelance work; though, I am also open for internships and
                part-time/full-time jobs.
              </b>
            </p>
            <div className="mt-16 flex flex-col gap-4 self-start">
              I look forward to working with like-minded individuals who share
              the same passion for creation and solving problems.
              <div className="flex flex-row gap-8">
                {BUSINESS.map((link, index) => (
                  <TextHyperlink
                    className="py-2 touch-hover:translate-x-0! touch-hover:-translate-y-1!"
                    showHyperlinkIcon
                    key={index}
                    path={link.path}
                    name={link.name}
                  />
                ))}
              </div>
            </div>
          </>
        ),
      },
    ],
  },
  {
    id: "credentials",
    borderVisible: false,
    outline: { enable: true, color: "bg-green-400" },
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
        type: "heading",
        wrapperClass:
          "flex h-full w-full flex-wrap items-center justify-center",
        payload: {
          align: "text-center",
          segments: [
            {
              text: "Versatile ",
              highlight: true,
              className: "text-green-400 touch-hover:text-purple-400",
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
        type: "heading",
        wrapperClass:
          "flex h-full w-full flex-wrap items-center justify-center",
        payload: {
          custom: (
            <>
              <p className="mt-4 w-full text-center font-bold text-zinc-200">
                Building with industry-standard skills and tools that deliver.
              </p>
              <TextHyperlink
                download={true}
                showHyperlinkIcon
                linkIcon={Icons.downloadIcon}
                linkIconClass="group-touch-hover:transform-[translate(0px,0px)]"
                path={"/CV Malibiran 2026.pdf"}
                name="Click to Download CV"
                className="mb-16 py-2 touch-hover:translate-x-0! touch-hover:-translate-y-1!"
              />
            </>
          ),
        },
      },
      {
        type: "custom",
        colSpan: "col-span-12 lg:col-span-6",
        wrapperClass: "border-b border-zinc-800  lg:border-r lg:border-b-0",
        content: (
          <div className="flex h-full w-full flex-wrap items-center justify-center">
            <Heading3 className="w-full text-center">Education</Heading3>
          </div>
        ),
      },
      {
        type: "custom",
        colSpan: "col-span-12 lg:col-span-6",
        content: (
          <div className="flex h-full w-full flex-wrap items-center justify-center">
            <Heading3 className="w-full text-center">What I Use</Heading3>
          </div>
        ),
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
    outline: { enable: true, color: "bg-green-400" },
    components: [
      {
        type: "heading",
        wrapperClass: "relative mb-16 relative",
        payload: {
          custom: (
            <div className="flex h-full w-full flex-wrap items-center justify-center">
              <Heading2 className="flex w-full items-center justify-between text-center lg:text-left">
                Systems
                <hr className="w-full border border-zinc-400"></hr>
                <TextScramble>
                  <span className="font-bulletin font-normal text-green-400 italic select-none touch-hover:text-purple-400">
                    Interlinked
                  </span>
                </TextScramble>
              </Heading2>
              <p className="mt-4 w-full text-center font-bold text-zinc-200 lg:ml-128 lg:text-right">
                Cohesive experiences through Software and Designs—engineered
                with purpose to solve real problems.
              </p>
            </div>
          ),
        },
      },
      {
        type: "spotlight",
        color: "bg-zinc-500/75",
        top: "bottom-[75%]",
        left: "left-[75%]",
        size: "w-[720px] h-[720px]",
        opacity: "opacity-25 ",
      },
      {
        type: "spotlight",
        color: "bg-green-600/50",
        top: "top-[75%]",
        left: "left-[75%]",
        size: "w-[720px] h-[720px]",
        opacity: "opacity-25",
      },
      {
        type: "spotlight",
        color: "bg-purple-500/35",
        top: "bottom-[15%]",
        left: "right-[88%]",
        size: "w-[1000px] h-[1000px]",
        opacity: "opacity-25",
      },
      { type: "portfolio" },
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
        type: "spotlight",
        color: "bg-purple-800",
        top: "top-[100%]",
        left: "left-[33%] lg:left-0",
        size: "w-[250px] h-[250px]",
        opacity: "opacity-75",
      },
      {
        type: "spotlight",
        color: "bg-purple-800",
        top: "-top-[50%]",
        left: "invisible lg:visible lg:right-0",
        size: "w-[250px] h-[250px]",
        opacity: "opacity-75",
      },
      {
        type: "custom",
        colSpan: "col-span-12 lg:col-span-8",
        wrapperClass:
          "mb-16 lg:mb-0 flex h-full w-full flex-wrap items-center justify-center",
        content: (
          <>
            <Heading2 className="w-full text-center lg:text-left">
              One{" "}
              <span className="font-serif font-normal text-green-400 italic touch-hover:text-purple-400">
                'Hello'
              </span>
              ,
              <br />
              <span className="font-bold text-green-400 touch-hover:text-purple-400">
                Many
              </span>{" "}
              Possibilities.
            </Heading2>
            <p className="mt-4 w-full text-center font-bold text-zinc-400 lg:text-left">
              Your ideas are just one conversation away from becoming reality.
            </p>
            <p className="mt-16 hidden w-full text-center font-bold lg:block lg:text-left">
              Currently open for freelance projects and internships. <br />{" "}
              Connect with me on LinkedIn or drop an email to start building.
            </p>
          </>
        ),
      },
      {
        type: "custom",
        colSpan: "col-span-12 lg:col-span-4",
        wrapperClass:
          "flex h-full w-full grow flex-col items-center justify-end lg:items-end lg:justify-center",
        content: (
          <>
            <div className="z-10 flex w-full max-w-sm flex-row gap-4 text-center sm:w-md sm:max-w-none sm:text-left lg:w-2xs lg:flex-col">
              {CONTACT.map((link, index) => (
                <Button
                  key={index}
                  showHyperlinkIcon
                  path={link.path}
                  name={link.altName}
                  icon={link.icon}
                  className={cn(
                    "relative z-10 h-16 w-full rounded-xl border px-4 font-bold backdrop-blur-xs lg:justify-start",
                    index > 0 && "self-end lg:w-3xs touch-hover:text-zinc-100",
                    link.colors,
                  )}
                />
              ))}
            </div>
            <p className="mt-8 block w-full text-center font-bold lg:hidden lg:text-left">
              Currently open for freelance projects and internships. <br />{" "}
              Connect with me on LinkedIn or drop an email to start building.
            </p>
          </>
        ),
      },
    ],
  },
];
