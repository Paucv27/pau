"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SECTION = "text-[10px] font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-3";
const SEPARATOR = "border-t border-neutral-200 dark:border-neutral-800 my-5";

export default function AboutPanel() {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => !expanded && setExpanded(true)}
      className={`
        relative bg-white dark:bg-neutral-900
        border border-neutral-200 dark:border-neutral-800
        rounded-2xl overflow-hidden flex flex-col z-10
        ${expanded ? "cursor-default" : "cursor-pointer hover:border-neutral-400 dark:hover:border-neutral-600"}
        transition-colors duration-200
      `}
      animate={{
        width: expanded ? 600 : 220,
        height: expanded ? 700 : 80,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
    >
      {/* Collapsed */}
      <AnimatePresence>
        {!expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center h-full px-6 gap-3 select-none"
          >
            <div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-700 shrink-0" />
            <span className="font-mono text-sm text-neutral-600 dark:text-neutral-300">
              Pau <span style={{ color: "var(--accent)" }}>→</span>
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expanded */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.15 } }}
            exit={{ opacity: 0 }}
            className="flex flex-col h-full overflow-y-auto"
          >
            {/* Close button */}
            <div className="flex justify-end" style={{ padding: "10px" }}>
              <button
                onClick={(e) => { e.stopPropagation(); setExpanded(false); }}
                className="font-mono text-xs transition-colors"
                style={{ color: "var(--accent)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent-hover)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--accent)")}
              >
                [close]
              </button>
            </div>   

            <div className="px-7 pb-7 flex flex-col gap-0">
              {/* Header */}
              <div className="flex items-center gap-5 mb-6" style={{ paddingTop: "40px", paddingBottom: "40px", paddingLeft: "20px", paddingRight: "20px" }}>
                <div className="w-16 h-16 rounded-full bg-neutral-200 dark:bg-neutral-700 shrink-0" />
                <div>
                  <h1 className="text-neutral-900 dark:text-white font-semibold text-xl leading-tight">
                    Pau
                  </h1>
                  <p className="text-neutral-400 dark:text-neutral-500 text-xs font-mono mt-1">
                    Manchester, UK
                  </p>
                </div>
              </div>

              <div className={SEPARATOR} />

              {/* Bio */}
              <div className="mb-2" style={{ paddingTop: "10px", paddingLeft: "20px", paddingRight: "20px", paddingBottom: "10px" }}>
                <p className={SECTION}>About Me</p>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed mb-2">
                    I'm a 20 year old student from Tenerife, currently based in Manchester.
                    I like coming up with random ideas and trying to do something about them, such as this website!
                    My interests include cybersecurity, data science, and all things tech/science really.
                    Like most CS students I spend most of my time playing games, listening to music, and procrastinating,
                    but I also enjoy learning new things every day.
                </p>
              </div>

              <div className={SEPARATOR} />

              {/* Languages */}
              <div className="mb-2" style={{ paddingTop: "10px", paddingLeft: "20px", paddingRight: "20px", paddingBottom: "10px" }}>
                <p className={SECTION} style={{ paddingBottom: "4px" }}>Languages</p>
                <div className="flex gap-2 flex-wrap">
                  {["English", "Spanish"].map(lang => (
                    <span
                      key={lang}
                      className="text-xs px-3 py-1.5 rounded-md font-mono cursor-default"
                      style={{ background: "var(--accent-soft)", color: "var(--accent)", paddingTop: "2px", paddingLeft: "5px", paddingRight: "5px", paddingBottom: "2px"}}
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className={SEPARATOR} />

              {/* Education */}
              <div className="mb-2" style={{ paddingTop: "10px", paddingLeft: "20px", paddingRight: "20px", paddingBottom: "10px" }}>
                <p className={SECTION}>Education</p>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm font-medium">
                  BSc Computer Science
                </p>
                <p className="text-neutral-400 dark:text-neutral-500 text-xs font-mono mt-1">
                  University of Manchester · 2024 – Current
                </p>
              </div>

              <div className={SEPARATOR} />

              {/* Links */}
              <div style={{ paddingTop: "10px", paddingLeft: "20px", paddingRight: "20px", paddingBottom: "10px" }}>
                <p className={SECTION}>Links</p>
                <div className="flex gap-5 flex-wrap">
                  {[
                    { label: "GitHub", href: "https://github.com/paucv27" },
                    { label: "LinkedIn", href: "https://linkedin.com/in/paucv27" },
                  ].map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="text-xs font-mono transition-colors"
                      style={{ color: "var(--accent)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--accent-hover)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--accent)")}
                    >
                      \\ {label} \\
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}