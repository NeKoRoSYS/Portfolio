"use client";

import { useState, useMemo } from "react";
import { useDocumentTitle } from "@/shared/Utils";
import Link from "next/link";
import Block from "@/components/Block";
import { HoverableElement, Panel } from "@/components/Panel";
import { PillChip } from "@/components/Chips";
import { BLOG_POSTS } from "@/data/routes-content/blog";
import Image from "next/image";

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
      <Block className="min-h-svh bg-zinc-950">
        <h1 className="mb-6 text-4xl font-bold text-white">Latest Posts</h1>

        <div className="flex w-full max-w-3xl flex-wrap gap-3">
          <p className="font-bold">Tags:</p>
          <button onClick={() => setActiveFilter(null)}>
            <PillChip
              className={`transition-all duration-75`}
              colorOverride={activeFilter === null ? "green" : "gray"}
            >
              All
            </PillChip>
          </button>
          {availableTags.map((tag) => (
            <button key={tag} onClick={() => setActiveFilter(tag)}>
              <PillChip
                className="transition-all duration-75"
                colorOverride={activeFilter === tag ? "green" : "gray"}
              >
                {tag}
              </PillChip>
            </button>
          ))}
        </div>

        <hr className="my-8 border-zinc-600" />

        <div className="flex w-full max-w-5xl flex-wrap gap-8">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="w-[calc(50%-1rem)] grow"
            >
              <HoverableElement
                translate={false}
                highlight={true}
                highlightOverride="hover:border-white hover:bg-zinc-700/50"
              >
                {(hoverClasses) => (
                  <Panel
                    className={`group h-full min-h-32 w-full border border-zinc-600 bg-zinc-800/50 text-left ${hoverClasses} flex flex-col justify-between sm:flex-row`}
                  >
                    <div className="p-6 pr-8">
                      <h2 className="text-2xl font-bold text-zinc-100">
                        {post.title}
                      </h2>
                      <p className="mb-4 text-sm text-zinc-400 italic">
                        {post.date}
                      </p>
                      <p className="mb-4 text-zinc-200">{post.excerpt}</p>
                      <div className="flex gap-2">
                        {post.tags.map((tag) => (
                          <PillChip key={tag} colorOverride="gray">
                            {tag}
                          </PillChip>
                        ))}
                      </div>
                    </div>
                    {post.thumbnail && (
                      <div className="m-4 aspect-video self-center overflow-hidden rounded-2xl sm:w-[45%] sm:max-w-xs">
                        <Image
                          width={1280}
                          height={720}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-125"
                          alt={post.title}
                          src={
                            typeof post.thumbnail === "string"
                              ? post.thumbnail
                              : post.thumbnail?.src
                          }
                        ></Image>
                      </div>
                    )}
                  </Panel>
                )}
              </HoverableElement>
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
