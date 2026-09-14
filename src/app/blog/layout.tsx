import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | NeKoRoSYS",
  description:
    "Read the latest articles, tutorials, and updates from NeKoRoSYS on Software Development and Graphic Design.",
  alternates: {
    canonical: "https://nekorosys.vercel.app/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
