"use client"

import Image from 'next/image';
import Link from "next/link";
import { useIsRouteActive, useScrollOnTop } from "../shared/Utils";
import { HEADERROUTES } from "../data/routes";
import Colors from "../shared/Colors";
import { Icons } from "@/shared/Icons";
import Button from "./Buttons";
import { HoverableElement } from "./Panel";
import Hamburger from "./Hamburger";
import { Magnetic } from "./motion-primitives/magnetic";

interface TabProps {
  children: string;
  path: string;
}

const Tab = ({ children, path }: TabProps) => (
  <Link href={path}>
    <span className={`${useIsRouteActive(path) ? `${Colors.textAccent} ${Colors.glowTextGreen}` : ''} ${Colors.textAccentHover} duration-75 transition-all font-bold`}>
      {`${children}`}
    </span>
  </Link>
);

export function Header() {
  const useBg:boolean = useScrollOnTop();
  const alwaysVisible:string = 'bg-zinc-950/75 border-b border-zinc-700 backdrop-blur-md';

  return (
    <>
      <div 
        className={`pointer-events-none fixed z-1 left-0 top-0 w-full h-32 bg-linear-to-t from-black/0 to-black/66 to-100% transition-opacity duration-500 ease-in-out ${
          useBg ? 'opacity-65 visible' : 'opacity-0 invisible'
        }`}
      />
      <header className={`transition-all w-full h-16 fixed z-1 top-0 left-0 justify-center items-center flex text-zinc-100 ${ !useBg ? alwaysVisible : `${alwaysVisible} sm:backdrop-blur-none sm:bg-zinc-950/0 sm:border-0 sm:border-zinc-700/0` }`}>
        <div className="w-full py-8 flex justify-between items-center px-8 xl:px-0 md:max-w-6xl">
          <div className="flex gap-2 justify-center items-center">
            <Image src={Icons.gravensoftIcon} className="w-8 aspect-square rounded-md" alt={'GravenSoft Icon'}></Image>
            <p className="font-bulletin text-3xl">GravenSoft</p>
          </div>
          <nav className={`drop-shadow-black/35 drop-shadow-lg hidden sm:flex flex-row gap-12 text-sm font-medium ${Colors.textMutedNav}`}>
            {
              HEADERROUTES.map((route, index) => (
                <Tab key={route.path || `route-${index}`} path={route.path}>{`${route.name}`}</Tab>
              ))
            }
          </nav>
          <HoverableElement className="hidden sm:flex rounded-3xl duration-200 transition-all bg-white text-zinc-900" translateOverride="hover:-translate-y-0.5" highlight={true} highlightOverride="hover:shadow-[0px_10px_20px_1px_rgba(255,255,255,0.25)]">
            {(hoverClasses) => (
              <Magnetic>
                <Button className={`${hoverClasses} font-bold`} href="/contact">Contact</Button>
              </Magnetic>
            )}
          </HoverableElement>
          <Hamburger className="visible sm:hidden" />
        </div>
      </header>
    </>
  );
}