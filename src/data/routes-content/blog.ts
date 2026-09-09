import { StaticImageData } from "next/image";
import { announcementPosts } from "./blog/announcements";

export interface BlogMeta {
  title: string;
  excerpt: string;
  thumbnail?: string | StaticImageData;
  tags: string[];
  date: string;
  file: string;
  slug: string;
}

export const BLOG_POSTS: BlogMeta[] = [...announcementPosts];
