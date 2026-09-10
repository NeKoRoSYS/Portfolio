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

const domain: string = "https://nekorosys.vercel.app";
const title: string = "NeKoRoSYS";
const description: string =
  "NeKoRoSYS is John Marky G. Malibiran's personal brand. This website serves as a landing page to showcase his extensive portfolio of works that span across Tech and Graphic Design.";

export const metadata: Metadata = {
  metadataBase: new URL(domain),
  title: title,
  description: description,
  keywords: [
    title,
    "full-stack developer",
    "software developer",
    "developer",
    "graphic design",
    "layout artist",
    "motion design",
    "illustrator",
    "john",
    "marky",
    "ginete",
    "malibiran",
    "john marky g. malibiran",
    "john marky ginete malibiran",
  ],
  authors: [
    { name: "NeKoRoSYS", url: domain },
    {
      name: "John Marky G. Malibiran",
      url: "https://linkedin.com/in/malibiran-johnmarky",
    },
  ],
  creator: "John Marky G. Malibiran",
  publisher: "NeKoRoSYS",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: domain,
    siteName: title,
    title: title,
    description: description,
    //images: [
    //  {
    //    url: '/og-image.jpg',
    //    width: 1200,
    //    height: 630,
    //    alt: 'My Awesome Application Preview',
    //  },
    //],
  },

  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    //images: ['/og-image.jpg'],
    creator: "@NeKoRoSYS",
  },

  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": domain,
        url: domain,
        name: "NeKoRoSYS",
      },
      {
        "@type": "ProfilePage",
        "@id": domain,
        url: domain,
        mainEntity: {
          "@type": "Person",
          name: "John Marky G. Malibiran",
          alternateName: "NeKoRoSYS",
          description: "Full-Stack Developer and Graphic Designer",
          sameAs: [
            "https://linkedin.com/in/malibiran-johnmarky",
            "https://x.com/NeKoRoSYS",
          ],
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative flex flex-col text-zinc-100 selection:bg-gray-600/50">
        <Header />
        <PageWrapper>{children}</PageWrapper>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
