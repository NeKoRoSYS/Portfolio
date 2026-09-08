"use client";

import { useEffect, useState } from "react";
//import { useInView } from 'motion/react';
import { usePathname } from "next/navigation";

export function useIsRouteActive(path: string) {
  const location = usePathname();
  return location === path;
}

export function CopyTextToClipboard(text: string) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Text copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
}

export function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

export function useScrollOnTop() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsAtTop(window.scrollY < 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isAtTop;
}

//export function CheckIfAboveCenter(object: RefObject < HTMLDivElement | null > ) {
//	const isInView = useInView(object, { once: false, margin: "-150px 0px -150px 0px" });
//	const [isAboveCenter, setIsAboveCenter] = useState(false);
//
//	useEffect(() => {
//		if (!isInView && object.current) {
//			const rect = object.current.getBoundingClientRect();
//			const centerY = window.innerHeight / 2;
//			const relativeY = rect.top + rect.height / 2 - centerY;
//
//			setIsAboveCenter(relativeY < 0);
//		}
//	}, [isInView]);
//
//	return isAboveCenter;
//}

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
