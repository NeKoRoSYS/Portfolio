import { type BlogMeta } from '@/data/routes-content/blogs';
import test from '@/assets/background.webp';

export const announcementPosts: BlogMeta[] = [
  {
    thumbnail: test,
    slug: "my-first-post",
    title: "Hello, World!",
    excerpt: "Testing the blogposts system.",
    date: "2026-08-30",
    file: "/blogs/my-first-post.md",
    tags: ["Test"]
  }
];