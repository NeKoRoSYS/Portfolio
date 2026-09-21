import { BUSINESS } from "@/data/hyperlinks";
import { Spotlight } from "./motion-primitives/spotlight";
import { Tilt } from "./motion-primitives/tilt";
import { IconHyperlink, TextHyperlink } from "./Hyperlinks";
import SpotlightBlob from "./SpotlightBlob";
import {
  BrandingField,
  CONTACT_FIELDS,
  NAME,
  PORTRAIT,
} from "@/data/components/brandingCard";
import { Fragment } from "react/jsx-runtime";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { PillChip, RectChip } from "./Chips";
import { AchievementProps, ProjectProps } from "@/data/nekorosys";
import { Colors } from "@/shared/Colors";
import Image from "next/image";
import { Heading3 } from "./Headings";
import { BlogMeta } from "@/data/routes-content/blog";
import Grid from "./Grid";

interface CardProps {
  rotationFactor?: number;
  tilt?: boolean;
  className?: string;
  children?: ReactNode;
}

export function Card({
  rotationFactor = 4,
  activeZ = 25,
  ...props
}: CardProps & { activeZ?: number }) {
  const { tilt, className, children } = props;
  const baseClass =
    "@container w-full flex flex-col rounded-3xl border border-zinc-700 bg-zinc-950 group overflow-hidden";

  return (
    <Tilt
      rotationFactor={tilt ? rotationFactor : 0}
      className={cn(baseClass, className)}
      isRevese
      activeZ={activeZ}
    >
      {children}
    </Tilt>
  );
}

export function EducationCard({ ...props }: AchievementProps) {
  return (
    <Card tilt className="group w-full">
      <div className="relative h-full overflow-hidden p-px">
        <Spotlight
          className="bg-green-400"
          size={256}
          springOptions={{
            stiffness: 250,
            damping: 30,
            mass: 0.5,
          }}
        />

        <div className="relative flex h-full min-h-32 w-full flex-col overflow-clip rounded-3xl @lg:flex-row">
          {props.thumbnail && (
            <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-zinc-800 @lg:aspect-auto @lg:w-2/5">
              <Image
                width={1280}
                height={720}
                className="h-full w-full object-cover transition-transform duration-300 group-touch-hover:scale-115"
                alt={props.title}
                src={
                  typeof props.thumbnail === "string"
                    ? props.thumbnail
                    : props.thumbnail?.src
                }
              />
            </div>
          )}

          <div className="flex min-h-32 grow flex-col justify-between bg-linear-to-b from-zinc-900 from-25% to-zinc-950 p-6 shadow-2xl shadow-zinc-800 @lg:w-3/5">
            <div>
              <h2 className="text-2xl font-bold text-zinc-100 group-touch-hover:text-green-400">
                {props.title}
              </h2>
              <p className="mt-1 mb-4 text-sm text-zinc-400 italic">
                {props.date}
              </p>
              <p className="mb-4 text-zinc-300">{props.description}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function BlogCard({ ...post }: BlogMeta) {
  return (
    <Card tilt className="group h-full">
      <div className="relative h-full overflow-hidden p-px">
        <Spotlight
          className="bg-green-400"
          size={256}
          springOptions={{
            stiffness: 250,
            damping: 30,
            mass: 0.5,
          }}
        />

        <div className="relative flex h-full min-h-32 w-full flex-col overflow-clip rounded-3xl @lg:flex-row">
          {post.thumbnail && (
            <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-zinc-800 @lg:aspect-auto @lg:w-2/5">
              <Image
                width={1280}
                height={720}
                className="h-full w-full object-cover transition-transform duration-300 group-touch-hover:scale-115"
                alt={post.title}
                src={
                  typeof post.thumbnail === "string"
                    ? post.thumbnail
                    : post.thumbnail?.src
                }
              />
            </div>
          )}

          <div className="flex min-h-32 grow flex-col justify-between bg-linear-to-b from-zinc-900 from-25% to-zinc-950 p-6 shadow-2xl shadow-zinc-800 @lg:w-3/5">
            <div>
              <h2 className="text-2xl font-bold text-zinc-100 transition-transform group-touch-hover:translate-x-2 group-touch-hover:text-green-400">
                {post.title}
              </h2>
              <p className="mt-1 mb-4 text-sm text-zinc-400 italic">
                {post.date}
              </p>
              <p className="mb-4 text-zinc-300">{post.excerpt}</p>
            </div>
            <div className="mt-auto flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <PillChip key={tag} colorOverride="gray">
                  {tag}
                </PillChip>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function ProjectCard({
  tilt,
  projectLink,
  className,
  rotationFactor,
  children,
  featured,
  title,
  thumbnail,
  tags,
  excerpt,
  description,
}: CardProps & ProjectProps) {
  return (
    <Card
      activeZ={featured ? 25 : 0}
      tilt={tilt}
      className={cn(className, "group")}
      rotationFactor={rotationFactor}
    >
      <div className={cn("relative h-full overflow-hidden p-px")}>
        <Spotlight
          className={`bg-green-400`}
          size={256}
          springOptions={{
            stiffness: 250,
            damping: 30,
            mass: 0.5,
          }}
        />
        <div
          className={cn(
            "relative flex h-full w-full overflow-hidden rounded-3xl",
            featured ? "min-h-50 flex-col @2xl:flex-row" : "min-h-50 flex-row",
          )}
        >
          {thumbnail && (
            <div
              className={cn(
                "shrink-0 overflow-hidden",
                featured
                  ? "aspect-video w-full @2xl:aspect-auto @2xl:w-3/5"
                  : "w-1/3 sm:w-1/4",
              )}
            >
              {thumbnail && (
                <div
                  className={cn(
                    "relative shrink-0 overflow-hidden bg-zinc-800",
                    featured
                      ? "aspect-video h-full w-full max-w-none @2xl:aspect-video"
                      : "w-1/3 sm:w-1/4",
                  )}
                >
                  <Image
                    draggable={false}
                    src={
                      typeof thumbnail === "string" ? thumbnail : thumbnail[0]
                    }
                    alt={title || "Project thumbnail"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-300 group-touch-hover:scale-115"
                  />
                </div>
              )}
            </div>
          )}
          <div
            className={cn(
              "relative flex min-h-50 grow flex-col justify-start overflow-hidden bg-linear-to-b from-zinc-900 from-25% to-zinc-950 shadow-2xl shadow-zinc-800",
              featured ? "@2xl:w-2/5" : "w-2/3 sm:w-3/4",
            )}
          >
            <div className="z-10 flex w-full">
              <Heading3
                className={cn(
                  "mx-4 mt-4 w-full text-left font-bold text-zinc-100",
                )}
              >
                {projectLink != null ? (
                  <TextHyperlink
                    showHyperlinkIcon
                    linkIconClass="w-5 group-touch-hover:bg-zinc-100 bg-zinc-400"
                    className={cn(
                      "font-cosmic text-zinc-100 transition-transform touch-hover:text-purple-400! sm:touch-hover:translate-x-2 group-touch-hover:text-green-400",
                      featured ? "text-3xl" : "text-xl sm:text-2xl",
                    )}
                    path={projectLink}
                    name={title}
                  />
                ) : (
                  <span
                    className={cn(
                      "font-cosmic text-zinc-100 group-touch-hover:text-green-400",
                      featured ? "text-3xl" : "text-xl sm:text-2xl",
                    )}
                  >
                    {title}
                  </span>
                )}
              </Heading3>
            </div>
            <div className="relative z-10 flex w-full items-center justify-center">
              <p
                className={cn(
                  "m-4 mb-8 w-full text-left text-zinc-300",
                  !featured && "text-sm sm:text-base",
                )}
              >
                {excerpt}
              </p>
            </div>
            <div className="relative z-10 m-4 mt-auto flex flex-wrap justify-end gap-2 self-end">
              {tags
                ?.filter((tag) => tag !== "Featured")
                .map((tag, index) => (
                  <RectChip
                    key={index}

                    className={cn(
                      "py-1 text-xs text-zinc-400 hover:text-zinc-100 sm:text-sm",
                      Colors.buttonMuted,
                      tags[tags.length - 1] == tag && "rounded-br-2xl pr-3",
                    )}
                  >
                    {tag}
                  </RectChip>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

interface BrandingCardProps {
  className?: string;
  displayLinks?: boolean;
  fields?: BrandingField[];
}
export function BrandingCard({
  outline = true,
  className,
  displayLinks,
  fields,
}: BrandingCardProps & { outline?: boolean }) {
  return (
    <Card
      tilt
      className={cn("max-w-xl bg-zinc-950/25 p-px backdrop-blur-xs", className)}
    >
      {outline && (
        <Spotlight
          className={`-z-10 bg-zinc-300`}
          size={256}
          springOptions={{
            stiffness: 250,
            damping: 30,
            mass: 0.5,
          }}
        />
      )}
      <div
        className={cn("relative w-full rounded-3xl", outline && "bg-zinc-950")}
      >
        <SpotlightBlob
          color="z-10 bg-zinc-300"
          top="-top-[50%] sm:-top-[100%]"
          left="left-0"
          size="w-[250px] h-[250px]"
          opacity="opacity-25"
        />
        <SpotlightBlob
          color="z-10 bg-purple-800"
          top="top-[100%]"
          left="right-0"
          size="w-[250px] h-[250px]"
          opacity="opacity-100"
        />

        <div
          style={{ transform: "translateZ(60px)" }}
          className="relative z-10 my-8 flex h-auto w-full flex-col items-center gap-4 self-stretch @lg:flex-row @lg:justify-center @lg:gap-8"
        >
          <div
            style={{ backgroundImage: `url("${PORTRAIT}")` }}
            className="aspect-square max-w-24 min-w-24 rounded-full bg-cover bg-center bg-no-repeat"
          />
          <p className="block font-bold @lg:hidden">{NAME}</p>
          {fields && (
            <hr className="w-[50%] border border-zinc-800 @lg:h-16 @lg:w-0" />
          )}
          <div className="z-10 flex flex-col items-center justify-center text-center @lg:items-start @lg:justify-start @lg:text-left">
            {fields?.map((field, index) => (
              <p
                key={index}
                className={cn(
                  field.isBold && "font-bold",
                  field.isItalic && "italic",
                )}
              >
                {field.text}
                {field.link && (
                  <a
                    href={field.link.url}
                    className="font-bold text-zinc-400 touch-hover:text-green-400"
                  >
                    {field.link.text}
                  </a>
                )}
              </p>
            ))}
          </div>
        </div>

        <div className="absolute bottom-4 left-6 hidden w-full opacity-25 saturate-0 @lg:flex group-touch-hover:opacity-100 group-touch-hover:saturate-100">
          <Image
            width={1632}
            height={432}
            className="-m-2 aspect-auto w-50 mask-[linear-gradient(to_bottom,black,transparent)]"
            src="/images/nekorosys/bannerColorSmall.png"
            alt={"NeKoRoSYS"}
          />
        </div>
        {displayLinks && (
          <div className="relative z-10 mt-4 mb-4 flex w-full justify-center gap-4 px-4 @lg:justify-end">
            {BUSINESS.map((link, index) => (
              <IconHyperlink
                key={index}
                name={link.name}
                path={link.path}
                icon={link.icon}
                iconClass={"bg-zinc-400 touch-hover:bg-green-400"}
              />
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}
