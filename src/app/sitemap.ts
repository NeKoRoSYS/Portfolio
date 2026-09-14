import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/data/routes-content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = "https://nekorosys.vercel.app";

  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${domain}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    {
      url: domain,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${domain}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...blogEntries,
  ];
}
