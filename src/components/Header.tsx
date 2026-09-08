"use client";

import Image from "next/image";
import Link from "next/link";
import { useIsRouteActive, useScrollOnTop } from "../shared/Utils";
import { HEADERROUTES } from "../data/routes";
import Colors from "../shared/Colors";
import { Icons } from "@/shared/Icons";
import Button from "./Buttons";
import { HoverableElement } from "./Panel";
import Hamburger from "./Hamburger";
import { Magnetic } from "./motion-primitives/magnetic";
import { AnimatedBackground } from "./motion-primitives/animated-background";
import { cn } from "@/lib/utils";

interface TabProps {
  children: string;
  path: string;
}

export function Header() {
  const onTop: boolean = useScrollOnTop();
  const baseHeader: string =
    "w-full h-16 flex justify-center items-center lg:pl-1 lg:max-w-[80%] lg:mt-4 transition-[background-color,border-color,backdrop-filter] duration-250 ease-in-out text-zinc-100";
  const bgVisible: string =
    "bg-zinc-950/75 border-b lg:border border-zinc-700 backdrop-blur-md lg:rounded-full";
  const bgInvisible: string =
    "sm:bg-zinc-950/0 sm:border-0 sm:border-zinc-700/0 sm:backdrop-blur-none lg:rounded-full";

  return (
    <>
      <div
        className={`pointer-events-none fixed top-0 left-0 z-1 h-32 w-full bg-linear-to-t from-black/0 to-black/66 to-100% transition-opacity duration-250 ease-in-out ${
          onTop ? "visible opacity-65" : "invisible opacity-0"
        }`}
      />
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-1 mx-auto",
          baseHeader,
          bgVisible,
          onTop && bgInvisible,
        )}
      >
        <div className="flex w-full items-center justify-between px-4 py-8">
          <div className="flex items-center justify-center gap-2">
            <Image
              width={8}
              height={8}
              src={Icons.gravensoftIcon}
              className="aspect-square w-8 rounded-md"
              alt={"GravenSoft Icon"}
            ></Image>
            <p className="mt-0.5 font-bulletin text-3xl">NeKoRoSYS</p>
          </div>
          <nav className={`hidden sm:block`}>
            <ul
              className={`flex flex-row text-sm font-medium drop-shadow-lg drop-shadow-black/35 ${Colors.textMutedNav} flex h-10 w-fit items-center rounded-full border border-zinc-700 bg-zinc-800/75`}
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
                  <Link
                    key={route.name}
                    data-id={route.name}
                    href={route.path}
                    className="group flex h-full w-full items-center px-6"
                  >
                    <span
                      className={`${useIsRouteActive(route.path) ? `${Colors.textAccent} ${Colors.glowTextGreen}` : ""} ${Colors.textAccentHover} font-bold`}
                    >
                      {`${route.name}`}
                    </span>
                  </Link>
                ))}
              </AnimatedBackground>
            </ul>
          </nav>
          <HoverableElement
            className="hidden rounded-3xl bg-zinc-100 text-zinc-900 transition-all duration-200 sm:flex"
            translateOverride="hover:-translate-y-0.5"
            highlight
            highlightOverride="hover:shadow-[0px_10px_20px_1px_rgba(255,255,255,0.25)]"
          >
            {(hoverClasses) => (
              <Magnetic>
                <Button className={`${hoverClasses} font-bold`} href="/contact">
                  Contact
                </Button>
              </Magnetic>
            )}
          </HoverableElement>
          <Hamburger className="visible sm:hidden" />
        </div>
      </header>
    </>
  );
}
