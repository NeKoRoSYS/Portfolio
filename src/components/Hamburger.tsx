"use client"

import { useState } from "react";

interface HamburgerProps {
    className?: string;
    menuId?: string;
}

export default function Hamburger( { className }: HamburgerProps) {
    const [ isOn, setIsOn ] = useState(false);

    const toggle = () => setIsOn((prev:boolean) => !prev);

    return (
        <>
            <div className={`cursor-pointer w-8 h-8 flex justify-center items-center select-none ${className}`} onClick={toggle}>
                <p>{isOn ? "Yes" : "No" }</p>
            </div>
            
        </>
    );
}

export function HamburgerMenu() {
    return (
        <div>

        </div>
    );
}