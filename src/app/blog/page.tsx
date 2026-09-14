"use client";

import { useState, useMemo } from "react";
import { useDocumentTitle } from "@/shared/Utils";
import Link from "next/link";
import Block from "@/components/Block";
import { PillChip } from "@/components/Chips";
import { BLOG_POSTS } from "@/data/routes-content/blog";
import { cn } from "@/lib/utils";
import { BlogCard } from "@/components/Cards";

export default function Blog() {
  useDocumentTitle(`Blog | NeKoRoSYS`);

  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const availableTags = useMemo(() => {
    const tags = new Set<string>();
    BLOG_POSTS.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags).sort();
  }, []);

  const filteredPosts = useMemo(() => {
    return activeFilter
      ? BLOG_POSTS.filter((post) => post.tags.includes(activeFilter))
      : BLOG_POSTS;
  }, [activeFilter]);

  return (
    <main>
      <Block
        index={0}
        outline={{ enable: true, color: "bg-green-400" }}
        className="min-h-svh bg-zinc-950"
      >
        <h1 className="mb-6 text-4xl font-bold text-white">Latest Posts</h1>

        <div className="flex w-full max-w-3xl flex-wrap gap-3">
          <p className="font-bold">Tags:</p>
          <button onClick={() => setActiveFilter(null)}>
            <PillChip
              className={cn(
                `transition-all duration-75`,
                activeFilter !== null && "cursor-pointer",
              )}
              colorOverride={activeFilter === null ? "green" : "gray"}
            >
              All
            </PillChip>
          </button>
          {availableTags.map((tag) => (
            <button key={tag} onClick={() => setActiveFilter(tag)}>
              <PillChip
                className={cn(
                  `transition-all duration-75`,
                  activeFilter === null && "cursor-pointer",
                )}
                colorOverride={activeFilter === tag ? "green" : "gray"}
              >
                {tag}
              </PillChip>
            </button>
          ))}
        </div>

        <hr className="my-8 border-zinc-600" />

        <div className="flex w-full flex-wrap gap-8">
          {filteredPosts.map((post) => (
            <Link
              draggable={false}
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="w-[calc(50%-1rem)] min-w-70 grow"
            >
              <BlogCard {...post} />
            </Link>
          ))}
          {filteredPosts.length === 0 && (
            <p className="text-zinc-400">No posts found for this tag.</p>
          )}
        </div>
      </Block>
    </main>
  );
}
