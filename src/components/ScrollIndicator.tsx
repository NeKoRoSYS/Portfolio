"use client";

import { Icons } from "@/shared/Icons";
import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleVisibility = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight;
          const screenHeight = window.innerHeight;
          const currentScroll = window.scrollY;

          setIsVisible(totalHeight > screenHeight && currentScroll < 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleVisibility();

    window.addEventListener("scroll", handleVisibility, { passive: true });
    window.addEventListener("resize", handleVisibility, { passive: true });

    let timeoutId: number;
    const observer = new MutationObserver(() => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(handleVisibility, 100);
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("scroll", handleVisibility);
      window.removeEventListener("resize", handleVisibility);
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <footer
      className={`fixed bottom-0 left-0 z-51 h-25 w-full transition-all duration-500 ease-in-out ${
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <div className="flex h-full w-full animate-[float_2s_ease-in-out_infinite] flex-col items-center justify-center">
        <p className="font-cosmic text-yellow-400">Scroll Down</p>
        <span
          aria-hidden={true}
          className="h-5 w-5 bg-yellow-400"
          style={{
            WebkitMaskImage: `url(${Icons.arrowIcon})`,
            maskImage: `url(${Icons.arrowIcon})`,
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        />
      </div>
    </footer>
  );
}
