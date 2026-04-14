"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blog-posts";

const allTags = Array.from(new Set(blogPosts.flatMap(p => p.tags)));

export default function BlogPanel() {
  const [open, setOpen] = useState(false);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? blogPosts.filter(p => p.tags.includes(activeTag))
    : blogPosts;

  return (
    <motion.div
      animate={{ x: open ? 0 : -520 }}
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
      className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center z-20"
    >
      {/* Panel body */}
      <div className="w-130 h-[650px] flex flex-col
        bg-white dark:bg-neutral-900
        border border-neutral-200 dark:border-neutral-800
        border-l-0 rounded-r-2xl overflow-hidden">

        <div className="px-5 py-4 border-b border-neutral-100 dark:border-neutral-800" style={{ padding: "10px"}}>
          <p className="text-neutral-900 dark:text-white font-semibold text-sm">Blog</p>
          <p className="text-neutral-400 dark:text-neutral-500 text-xs font-mono mt-0.5">
            what I've been up to
          </p>
          <div className="flex gap-2 flex-wrap mt-3" style={{ paddingTop: "3px"}}>
            <button
              onClick={() => setActiveTag(null)}
              className="text-xs px-2 py-1 rounded-md font-mono transition-colors"
              style={{
                background: activeTag === null ? "var(--accent)" : "transparent",
                color: activeTag === null ? "white" : "var(--accent)",
                border: "1px solid var(--accent)",
              }}
            >
              all
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                className="text-xs px-2 py-1 rounded-md font-mono transition-colors"
                style={{
                  background: activeTag === tag ? "var(--accent)" : "var(--accent-soft)",
                  color: activeTag === tag ? "white" : "var(--accent)",
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3" style={{ padding: "10px"}}>
          {filtered.map(post => (
            <div
              key={post.id}
              className="rounded-xl p-4 border transition-colors
                bg-neutral-50 dark:bg-neutral-800
                border-neutral-100 dark:border-neutral-700
                hover:border-neutral-300 dark:hover:border-neutral-600"
            >
              <p className="text-neutral-900 dark:text-white text-sm font-medium">{post.title}</p>
              <p className="text-neutral-400 dark:text-neutral-500 text-xs font-mono mt-0.5">{post.date}</p>
              <p className="text-neutral-500 dark:text-neutral-400 text-xs mt-2 leading-relaxed line-clamp-3">
                {post.content}
              </p>
              <div className="flex gap-1.5 mt-3 flex-wrap">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded font-mono"
                    style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tab — inside motion.div so it moves with the panel */}
      <button
        onClick={() => setOpen(o => !o)}
        className="h-30 px-10 flex items-center shrink-0
          bg-white dark:bg-neutral-900
          border border-neutral-200 dark:border-neutral-800
          border-l-0 rounded-r-xl
          font-mono text-xs transition-colors"
        style={{ writingMode: "vertical-rl", color: "var(--accent)", padding: "5px", justifyContent: "center" }}
        onMouseEnter={e => (e.currentTarget.style.color = "var(--accent-hover)")}
        onMouseLeave={e => (e.currentTarget.style.color = "var(--accent)")}
      >
        {open ? "close" : "blog"}
      </button>
    </motion.div>
  );
}