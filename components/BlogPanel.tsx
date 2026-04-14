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
        border-l-0 rounded-r-2xl overflow-hidden"
        style={{ }}>

        <div className="px-5 py-4 border-b border-neutral-100 dark:border-neutral-800" 
              style={{ padding: "10px", borderBottom: "2px solid lightgrey"}}>
          <p className="text-neutral-900 dark:text-white font-semibold text-sm">Blog</p>
          <p className="text-neutral-400 dark:text-neutral-500 text-xs font-mono mt-0.5">
            what I've been up to
          </p>
          <div className="flex gap-2 flex-wrap mt-3" style={{ paddingTop: "3px"}}>
            <button
              onClick={() => setActiveTag(null)}
              className="text-xs px-2 py-1 rounded-md font-mono transition-colors"
              style={{
                background: activeTag === null ? "var(--accent-soft-transparent)" : "transparent",
                color: activeTag === null ? "white" : "var(--accent-soft)",
                padding: "2px"
              }}
              onMouseEnter={e => {
                if (activeTag !== null) {
                  e.currentTarget.style.background = "var(--accent-soft-transparent)";
                  e.currentTarget.style.color = "white";
                }
              }}
              onMouseLeave={e => {
                if (activeTag !== null) {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "var(--accent-soft)";
                }
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
                  background: activeTag === tag ? "var(--accent-soft-transparent)" : "transparent",
                  color: activeTag === tag ? "white" : "var(--accent-soft)",
                  padding: "2px"
                }}
                onMouseEnter={e => {
                  if (activeTag !== tag) {
                    e.currentTarget.style.background = "var(--accent-soft-transparent)";
                    e.currentTarget.style.color = "white";
                  }
                }}
                onMouseLeave={e => {
                  if (activeTag !== tag) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "var(--accent-soft)";
                  }
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
 
        {/* Posts */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 scrollable" 
              style={{ padding: "10px", scrollbarColor: "var(--accent) transparent", backgroundColor: "var(--accent)"}}>
          {filtered.map(post => (
            <div
              key={post.id}
              className="rounded-xl p-4 border group transition-all duration-200
                bg-neutral-50 dark:bg-neutral-800
                border-neutral-100 dark:border-neutral-700
                hover:border-neutral-300 dark:hover:border-neutral-400
                hover:shadow-md"
              style={{ background: "var(--neutral-black)" }}
            >
              <p className="text-neutral-900 dark:text-white text-md font-medium" 
                 style={{ paddingLeft: "10px", paddingTop: "10px", paddingRight: "10px"}}>
                {post.title}
              </p>
              <p className="text-neutral-400 dark:text-neutral-500 text-xs font-mono mt-0.5" 
                 style={{ paddingLeft: "10px"}}>
                {post.date}
                </p>
              <p className="text-neutral-500 dark:text-neutral-200 text-sm mt-2 leading-relaxed line-clamp-5" 
                 style={{ paddingLeft: "10px", paddingTop: "5px", paddingBottom: "5px", paddingRight: "10px"}}>
                {post.content}
              </p>
              <div className="flex gap-1.5 mt-3 flex-wrap" style={{ paddingLeft: "10px", paddingTop: "5px", paddingBottom: "10px"}}>
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded font-mono"
                    style={{ background: "var(--accent-soft-transparent)", color: "white", padding: "2px"}}
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
          font-mono text-md  transition-colors
          hover:border-neutral-400 dark:hover:border-neutral-500"
        style={{ writingMode: "vertical-rl", color: "var(--accent)", padding: "5px", justifyContent: "center" }}
        onMouseEnter={e => (e.currentTarget.style.color = "var(--accent-hover)")}
        onMouseLeave={e => (e.currentTarget.style.color = "var(--accent)")}
      >
        {open ? "close" : "blog"}
      </button>
    </motion.div>
  );
}