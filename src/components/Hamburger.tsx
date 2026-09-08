"use client";

import { useState } from "react";

interface HamburgerProps {
  className?: string;
  menuId?: string;
}

export default function Hamburger({ className }: HamburgerProps) {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn((prev: boolean) => !prev);

  return (
    <>
      <div
        className={`flex h-8 w-8 cursor-pointer items-center justify-center select-none ${className}`}
        onClick={toggle}
      >
        <p>{isOn ? "Yes" : "No"}</p>
      </div>
    </>
  );
}

export function HamburgerMenu() {
  return <div></div>;
}
