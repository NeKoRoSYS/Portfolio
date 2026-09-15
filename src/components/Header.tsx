"use client";

import Image from "next/image";
import Link from "next/link";
import { useIsRouteActive, useScrollOnTop } from "../shared/Utils";
import { HEADERROUTES } from "../data/routes";
import { Colors } from "../shared/Colors";
import Button from "./Buttons";
import { HoverableElement } from "./Panel";
import Hamburger from "./Hamburger";
import { Magnetic } from "./motion-primitives/magnetic";
import { AnimatedBackground } from "./motion-primitives/animated-background";
import { cn } from "@/lib/utils";
import { Spotlight } from "./motion-primitives/spotlight";
import { CTA_NAME, CTA_PATH, ICON, TITLE } from "@/data/components/header";
import { validateNavs } from "@/lib/utilsClient";

export function Header() {
  const onTop: boolean = useScrollOnTop();
  const baseHeader: string =
    "h-16 flex justify-center items-center lg:max-w-6xl lg:mt-4 transition-[background-color,border-color,backdrop-filter] duration-250 ease-in-out text-zinc-100";
  const bgVisible: string =
    "bg-black/75 border-b lg:border border-zinc-700 backdrop-blur-md lg:rounded-full";
  const bgInvisible: string =
    "sm:bg-black/0 sm:border-0 sm:border-zinc-700/0 sm:backdrop-blur-none lg:rounded-full";

  return (
    <>
      <div
        className={`pointer-events-none fixed top-0 left-0 z-1 h-32 w-full bg-linear-to-t from-black/0 to-black/66 to-100% transition-opacity duration-250 ease-in-out ${
          onTop ? "visible opacity-65" : "invisible opacity-0"
        }`}
      />
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-1 mx-auto overflow-hidden p-px lg:inset-x-8",
          baseHeader,
          bgVisible,
          onTop && bgInvisible,
        )}
      >
        <div className="flex w-full items-center justify-between px-4 py-8">
          <Spotlight
            className={`-z-10 bg-zinc-300/15 blur-2xl ${onTop ? "hidden" : ""}`}
            size={128}
            springOptions={{
              bounce: 0.3,
              duration: 0.1,
            }}
          />
          <div className="group">
            <Link
              href={"/"}
              className="flex flex-row items-center justify-center gap-2"
            >
              <Image
                draggable={false}
                width={56}
                height={56}
                style={{
                  maskImage: `url(${ICON.toString()})`,
                  WebkitMaskImage: `url(${ICON.toString()})`,
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskPosition: "center",
                }}
                className="aspect-square w-8 shrink-0 rounded-md bg-zinc-100 bg-cover bg-center bg-no-repeat group-touch-hover:bg-green-400"
                src={""}
                alt={""}
              />
              <p className="mt-0.5 font-bulletin text-3xl select-none group-touch-hover:text-green-400">
                {TITLE}
              </p>
            </Link>
          </div>
          <div className="flex flex-row items-center justify-end gap-4">
            <nav className={`hidden sm:block`}>
              <ul
                className={`flex flex-row text-sm font-medium drop-shadow-lg drop-shadow-black/35 ${Colors.textMutedNav} flex h-9 w-fit items-center rounded-full border border-zinc-700 bg-zinc-900/75`}
              >
                <AnimatedBackground
                  className="rounded-full bg-zinc-100 dark:bg-zinc-100"
                  transition={{
                    type: "spring",
                    bounce: 0,
                    duration: 0.25,
                  }}
                  enableHover
                >
                  {HEADERROUTES.map((route) => (
                    <li
                      key={route.name}
                      data-id={route.name}
                      className="h-full w-full"
                    >
                      <Link
                        draggable={false}
                        href={route.path}
                        className="group flex h-full w-full items-center px-6"
                      >
                        <span
                          className={`${useIsRouteActive(route.path) ? `${Colors.textAccent} ${Colors.glowTextGreen}` : "text-zinc-300"} ${Colors.textAccentHover} font-bold`}
                        >
                          {route.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </AnimatedBackground>
              </ul>
            </nav>
            <HoverableElement
              className="hidden rounded-3xl bg-zinc-100 text-zinc-900 transition-all sm:flex"
              translateOverride="touch-hover:-translate-y-0.5"
              highlight
              highlightOverride="touch-hover:shadow-[0px_10px_20px_1px_rgba(0,255,75,0.25)] touch-hover:bg-zinc-950 touch-hover:text-green-300 touch-hover:scale-98"
            >
              {(hoverClasses) => (
                <Magnetic>
                  <Button
                    className={`${hoverClasses} font-bold`}
                    path={validateNavs(CTA_PATH)}
                    name={CTA_NAME}
                  />
                </Magnetic>
              )}
            </HoverableElement>
          </div>
          <Hamburger className="visible sm:hidden" />
        </div>
      </header>
    </>
  );
}
