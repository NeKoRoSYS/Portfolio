import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/assets/stylesheets/style.css";
import { Header } from "@/components/Header";
import PageWrapper from "@/components/app/PageWrapper";
import { Footer } from "@/components/Footer";
import type { Viewport } from "next";
import { GLOBAL_KEYWORDS } from "@/data/nekorosys";

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
  "NeKoRoSYS is John Marky G. Malibiran's personal brand. This website serves as a landing page to showcase his extensive portfolio of works that span across Software and Graphic Design.";

export const viewport: Viewport = {
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(domain),
  title: title,
  description: description,
  keywords: GLOBAL_KEYWORDS,
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
        "@id": `${domain}/#website`,
        url: domain,
        name: "NeKoRoSYS",
      },
      {
        "@type": "ProfilePage",
        "@id": `${domain}/#profile`,
        url: domain,
        mainEntity: {
          "@type": "Person",
          name: "John Marky G. Malibiran",
          alternateName: "NeKoRoSYS",
          description: "Full-Stack Developer and Graphic Designer",
          sameAs: [
            "https://linkedin.com/in/malibiran-johnmarky",
            "https://x.com/NeKoRoSYS",
            "https://github.com/NeKoRoSYS",
            "https://behance.net/NeKoRoSYS",
            "https://nekorosys.itch.io",
            "https://tiktok.com/@nekorosys",
            "https://youtube.com/@nekorosys",
            "https://ko-fi.com/nekorosys",
            "https://paypal.me/genecromarky",
            "https://mcpedl.com/user/nekorosys",
            "https://linktr.ee/NeKoRoSYS",
          ],
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="relative flex h-full flex-col text-zinc-100 selection:bg-purple-600/50">
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
