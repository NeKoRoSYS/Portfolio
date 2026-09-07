import type { ReactNode } from "react";

const colorMap = {
  red: 'border-red-400 text-grey-100 bg-red-500/25',
  blue: 'border-blue-400 text-grey-100 bg-blue-500/25',
  green: 'border-green-400 text-grey-100 bg-green-500/25',
  yellow: 'border-yellow-400 text-yellow-100 bg-yellow-500/25',
  gray: 'border-zinc-400 text-grey-100 bg-zinc-500/25',
};

type ChipColor = keyof typeof colorMap;

interface ChipSchema {
    children?: ReactNode;
    className?: string;
    colorOverride?: ChipColor;
}

export default function Chip({children, className, colorOverride = "gray"}: ChipSchema) {
    const colorClass = colorMap[colorOverride] || colorMap.gray;
    return (
        <div className={`border rounded-full flex justify-center w-fit px-2 pr-3 gap-2 ${colorClass} ${className} items-center`}>
            <div className={`border w-2 h-2 rounded-full ${colorClass}`}></div>
            {children}
        </div>
    );
}