"use client";

import { BLOG_POSTS } from "@/data/routes-content/blog";
import { useDocumentTitle } from "@/shared/Utils";
import { Link } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import Block from "../Block";

export function BlogLoader({ slug }: { slug?: string }) {
  const router = useRouter();
  const postMeta = BLOG_POSTS.find((p) => p.slug === slug);

  const [content, setContent] = useState("");

  useEffect(() => {
    if (postMeta) {
      fetch(postMeta.file)
        .then((res) => res.text())
        .then((text) => setContent(text))
        .catch((err) => console.error("Failed to load post", err));
    }
  }, [postMeta]);

  if (!postMeta) {
    router.replace("/404");
    return;
  }

  return (
    <main>
      <Block className="flex min-h-svh items-center justify-center bg-zinc-950 py-0">
        <div className="mt-16 h-full border-zinc-800 lg:border lg:py-16">
          <article className="prose prose-invert lg:prose-xl mx-auto w-full max-w-4xl">
            <div className="mb-8">
              <Link href="/blogs">Back to Blog</Link>
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
