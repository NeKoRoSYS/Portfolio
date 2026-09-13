import { TextHyperlink } from "@/components/Hyperlinks";
import { ReactNode } from "react";

export const PORTRAIT = "/PORTRAIT.jpg";

export const FIELDS: ReactNode[] = [
  <p className="font-bold">John Marky G. Malibiran</p>,
  <p>Manila, National Capital Region, Philippines</p>,
  <TextHyperlink
    className="pointer-events-auto mx-auto sm:mx-0 touch-hover:text-green-400"
    showHyperlinkIcon={false}
    path={"mailto:malibiran.johnmarky@gmail.com"}
    name={"malibiran.johnmarky@gmail.com"}
  />,
  <p className="italic">(+63) 921 753 2961</p>,
];
