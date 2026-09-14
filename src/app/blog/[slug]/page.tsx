import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { BlogLoader } from "@/components/app/BlogLoader";
import { BLOG_POSTS } from "@/data/routes-content/blog";
import { GLOBAL_KEYWORDS } from "@/data/nekorosys";

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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogLoader slug={slug} />
    </>
  );
}
