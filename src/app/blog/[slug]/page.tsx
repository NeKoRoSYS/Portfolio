import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import fs from "fs";
import { BLOG_POSTS } from "@/data/routes-content/blog";
import { GLOBAL_KEYWORDS } from "@/data/nekorosys";
import ReactMarkdown from "react-markdown";
import Block from "@/components/Block";
import { TextHyperlink } from "@/components/Hyperlinks";
import path from "path";

const DOMAIN = "https://nekorosys.vercel.app";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  const postMeta = BLOG_POSTS.find((p) => p.slug === slug);

  if (!postMeta) {
    return {
      title: "Post Not Found | NeKoRoSYS",
      robots: { index: false },
    };
  }

  const imageUrl =
    typeof postMeta.thumbnail === "string"
      ? postMeta.thumbnail
      : postMeta.thumbnail?.src || "/og-image.jpg";

  return {
    title: `${postMeta.title} | NeKoRoSYS`,
    description: postMeta.excerpt,
    keywords: [...postMeta.tags, ...GLOBAL_KEYWORDS],
    alternates: {
      canonical: `${DOMAIN}/blog/${postMeta.slug}`,
    },
    openGraph: {
      title: postMeta.title,
      description: postMeta.excerpt,
      url: `${DOMAIN}/blog/${postMeta.slug}`,
      siteName: "NeKoRoSYS",
      type: "article",
      publishedTime: postMeta.date,
      authors: ["John Marky G. Malibiran"],
      tags: postMeta.tags,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: postMeta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: postMeta.title,
      description: postMeta.excerpt,
      images: [imageUrl],
      creator: "@NeKoRoSYS",
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const postMeta = BLOG_POSTS.find((p) => p.slug === slug);

  if (!postMeta) {
    notFound();
  }

  const filePath = path.join(process.cwd(), "public", postMeta.file);
  let content = "";
  try {
    content = fs.readFileSync(filePath, "utf8");
  } catch (error) {
    console.error("Failed to load post content", error);
    notFound();
  }

  const imageUrl =
    typeof postMeta.thumbnail === "string"
      ? postMeta.thumbnail
      : postMeta.thumbnail?.src;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: postMeta.title,
    description: postMeta.excerpt,
    image: imageUrl ? `${DOMAIN}${imageUrl}` : undefined,
    datePublished: postMeta.date,
    dateModified: postMeta.date,
    author: {
      "@type": "Person",
      name: "John Marky G. Malibiran",
      url: "https://linkedin.com/in/malibiran-johnmarky",
    },
    publisher: {
      "@type": "Organization",
      name: "NeKoRoSYS",
      logo: {
        "@type": "ImageObject",
        url: `${DOMAIN}/icons/gravensoftBgFlat.jpg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${DOMAIN}/blog/${postMeta.slug}`,
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Block
        index={0}
        outline={{ enable: true, color: "bg-zinc-100" }}
        className="flex min-h-svh items-center justify-center bg-zinc-950 py-0"
      >
        <div className="mt-16 h-full border-zinc-800 lg:border lg:py-16">
          <article className="prose prose-invert lg:prose-xl mx-auto h-full w-full max-w-4xl bg-zinc-950">
            <div className="mb-8">
              <TextHyperlink name="Back to Blog" path="/blog" />
            </div>
            <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
              {postMeta.title}
            </h1>
            <p className="mb-4 text-zinc-400">
              <i>Posted on {postMeta.date}</i>
            </p>
            <p className="text-zinc-400 italic">
              {postMeta.tags.length > 1 ? "Tags" : "Tag"}:{" "}
              {postMeta.tags.join(", ")}
            </p>
            <hr className="my-8 border-zinc-700" />

            <ReactMarkdown>{content}</ReactMarkdown>
          </article>
        </div>
      </Block>
    </main>
  );
}
