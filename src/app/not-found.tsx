"use client";

import Block from "../components/Block";
import { useDocumentTitle } from "../shared/Utils";

export default function NotFound() {
  useDocumentTitle(`Page Not Found | GravenSoft`);
  return (
    <main>
      <Block className={`relative min-h-[50svh] bg-black`}>
        <h1 className="text-4xl font-bold">Nothing here but just us</h1>
        <p>and these crickets...</p>
        <br></br>
        <p>The page you are looking for does not exist!</p>
      </Block>
    </main>
  );
}
