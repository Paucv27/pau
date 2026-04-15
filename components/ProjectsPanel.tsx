"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { useAudio } from "@/contexts/AudioContext";

const allTags = Array.from(new Set(projects.flatMap(p => p.tags)));

export default function ProjectsPanel() {
  const [open, setOpen] = useState(false);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const { playSound } = useAudio();

  const filtered = activeTag
    ? projects.filter(p => p.tags.includes(activeTag))
    : projects;

  return (
    <motion.div
      animate={{ x: open ? 0 : 520 }}
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
      className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center z-20"
    >
      {/* Tab — inside motion.div so it moves with the panel */}
      <button
        onClick={() => {
          setOpen(o => !o);
          playSound("click");
        }}
        className="h-30 px-10 flex items-center shrink-0    
          bg-white dark:bg-neutral-900
          border-r-0 rounded-l-xl
          font-mono text-md transition-colors
          hover:border-neutral-400 dark:hover:border-neutral-500"
        style={{ writingMode: "vertical-rl", 
                 color: "var(--accent)" , 
                 padding: "5px", 
                 justifyContent: "center", 
                 borderLeft: "var(--panel-grabber)", 
                 borderTop: "var(--panel-grabber)", 
                 borderBottom: "var(--panel-grabber)", 
                 borderRight: "0",
                 cursor: "pointer" }}
        onMouseEnter={e => {
          e.currentTarget.style.color = "var(--accent-hover)";
          playSound("hover");
        }}
        onMouseLeave={e => {
          e.currentTarget.style.color = "var(--accent)";
        }}
      >
        {open ? "close" : "projects"}
      </button>


      {/* Panel body */}
      <div className="w-130 h-[650px] flex flex-col
        bg-white dark:bg-neutral-900
        border border-neutral-200 dark:border-neutral-800
        border-r-0 rounded-l-2xl overflow-hidden"
        >
        {/* Projects Head */}
        <div className="px-5 py-4 border-b border-neutral-100 dark:border-neutral-800" 
              style={{ padding: "10px", 
                       borderBottom: "2px solid lightgrey"}}>
          <p className="text-neutral-900 dark:text-white font-semibold text-lg">Projects</p>
          <p className="text-neutral-400 dark:text-neutral-500 text-sm font-mono mt-0.5">
            things I've built
          </p>
          <div className="flex gap-2 flex-wrap mt-3" 
               style={{ paddingTop: "3px"}}>
            <button
              onClick={() => {
                setActiveTag(null);
                playSound("click");
              }}
              className="text-xs px-2 py-1 rounded-md font-mono transition-colors"
              style={{
                background: activeTag === null ? "var(--accent-soft-transparent)" : "transparent",
                color: activeTag === null ? "var(--tag)" : "var(--accent-soft)",
                padding: "2px",
                cursor: "pointer"
              }}
              onMouseEnter={e => {
                if (activeTag !== null) {
                  e.currentTarget.style.background = "var(--accent-soft-transparent)";
                  e.currentTarget.style.color = "var(--tag)";
                }
                playSound("hover");
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
                onClick={() => {
                  setActiveTag(tag === activeTag ? null : tag);
                  playSound("click");
                }}
                className="text-xs px-2 py-1 rounded-md font-mono transition-colors"
                style={{
                  background: activeTag === tag ? "var(--accent-soft-transparent)" : "transparent",
                  color: activeTag === tag ? "var(--tag)" : "var(--accent-soft)",
                  padding: "2px",
                  cursor: "pointer"
                }}
                onMouseEnter={e => {
                  if (activeTag !== tag) {
                    e.currentTarget.style.background = "var(--accent-soft-transparent)";
                    e.currentTarget.style.color = "var(--tag)";
                  }
                  playSound("hover");
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
        
        {/* Projects List */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3" 
              style={{ padding: "10px", 
                       scrollbarColor: "var(--scrollbar) transparent", 
                       }}>
          {filtered.map(project => (
            <div
              key={project.id}
              className="rounded-xl p-4 border group transition-all duration-200
                bg-neutral-50 dark:bg-neutral-800
                border-neutral-100 dark:border-neutral-800
                hover:border-neutral-300 dark:hover:border-neutral-500
                hover:shadow-md"
              style={{ background: "var(--post-bg)" }}
              onMouseEnter={() => playSound("hover")}
            >
              <div className="flex items-start justify-between gap-2">
                <p className="text-neutral-900 dark:text-white text-md font-medium" style={{ paddingLeft: "10px", paddingTop: "10px"}}>
                  {project.title}
                </p>
                <div className="flex gap-3 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ paddingRight: "10px", paddingTop: "10px"}}>
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs transition-colors"
                      style={{ color: "var(--accent)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--accent-hover)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--accent)")}
                    >
                      // repo //
                    </a>
                  )}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs transition-colors"
                      style={{ color: "var(--accent)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--accent-hover)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--accent)")}
                    >
                      // live //
                    </a>
                  )}
                </div>
              </div>
              <p className="font-mono text-neutral-600 dark:text-neutral-200 text-sm mt-1.5 leading-relaxed" style={{ paddingLeft: "10px", paddingTop: "5px"}}>
                {project.description}
              </p>
              <div className="flex gap-1.5 mt-3 flex-wrap" 
                   style={{ paddingLeft: "10px", 
                            paddingTop: "5px", 
                            paddingBottom: "10px"}}>
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded font-mono"
                    style={{ background: "var(--accent-soft-transparent)", color: "var(--tag)", padding: "2px"}}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}