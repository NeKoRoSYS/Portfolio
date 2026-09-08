import { type ReactNode } from "react";

export default function PageWrapper({ children }: { children?: ReactNode }) {
  return (
    <div className="md:max-w-8xl relative z-0 mx-auto flex w-full flex-col items-center bg-zinc-800">
      <main className="flex w-full flex-col">{children}</main>
    </div>
  );
}
