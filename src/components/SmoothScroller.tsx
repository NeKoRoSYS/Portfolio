"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";

export default function SmoothScroller({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 1,
        smoothWheel: true,
        wheelMultiplier: 1,
      }}
    >
      <AnchorHandler />
      {children}
    </ReactLenis>
  );
}

function AnchorHandler() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const handleHashClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        e.preventDefault();
        const destination = document.querySelector(href) as HTMLElement;

        if (destination) {
          lenis.scrollTo(destination, { offset: -100 });
          window.history.pushState(null, "", href);
        }
      }
    };

    document.addEventListener("click", handleHashClick);
    return () => document.removeEventListener("click", handleHashClick);
  }, [lenis]);

  return null;
}
