import { type ReactNode } from "react";

export default function PageWrapper({ children }: { children?: ReactNode }) {
  return (
    <div className="relative z-0 flex flex-col w-full items-center md:max-w-8xl mx-auto bg-zinc-800">
      <main className="flex flex-col w-full">
        {children}
      </main>
    </div>
  );
}