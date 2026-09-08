import { StaticImageData } from "next/image";
import { announcementPosts } from "./blogs/announcements";

export interface BlogMeta {
  slug: string;
  title: string;
  excerpt: string;
  thumbnail?: string | StaticImageData;
  date: string;
  file: string;
  tags: string[];
}

export const BLOG_POSTS: BlogMeta[] = [...announcementPosts];
