import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/assets/stylesheets/style.css";
import { Header } from "@/components/Header";
import PageWrapper from "@/components/app/PageWrapper";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NeKoRoSYS",
  description: "Personal landing page.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col text-zinc-100 selection:bg-gray-600/50">
        <Header />
        <PageWrapper>{children}</PageWrapper>
        <Footer />
      </body>
    </html>
  );
}
