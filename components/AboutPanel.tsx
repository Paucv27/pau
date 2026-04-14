"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SECTION = "text-[24px] font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-200 mb-3";
const SEPARATOR = "border-t border-neutral-200 dark:border-neutral-700 my-5";

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
            style={{ border: "2px solid lightgrey", borderRadius: "15px" }}
          >
            <div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-700 shrink-0" />
            <span className="font-mono text-sm text-neutral-600 dark:text-neutral-300">
              click me <span style={{ color: "var(--accent)" }}>!!</span>
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
            className="flex flex-col h-full"
            style={{ borderRadius: "15px"}}
          >
            {/* Close button */}
            <div className="flex justify-end shrink-0" style={{ padding: "10px" }}>
              <button
                onClick={(e) => { e.stopPropagation(); setExpanded(false); }}
                className="font-mono text-md transition-colors"
                style={{ color: "var(--accent)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent-hover)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--accent)")}
              >
                [close]
              </button>
            </div>    

            {/* Header */}
            <div className="px-7 shrink-0">
              <div className="flex items-center gap-5 mb-6" 
                    style={{ paddingTop: "40px", paddingBottom: "40px", paddingLeft: "20px", paddingRight: "20px", borderTop: "2px solid lightgrey", borderBottom: "1px solid grey"}}>
                <div className="w-35 h-35 rounded-full bg-neutral-200 dark:bg-neutral-700 shrink-0" />
                <div>
                  <h1 className="text-neutral-900 font-semibold text-4xl leading-tight"
                      style={{ color: "var(--accent-soft)"}}>  
                    Pau Carrillo Velasco  
                  </h1>
                  <p className="text-neutral-400 dark:text-neutral-500 text-sm font-mono mt-1">
                    CS Student @ University of Manchester, UK
                  </p>    
                </div>
              </div>
            </div>

              {/* Scrollable Content */}
              <div 
                className="flex-1 overflow-y-auto scrollable px-7 pb-7"
                style={{
                  scrollbarColor: "var(--accent) transparent",
                  backgroundColor: "var(--accent)"
                }}
              >
                {/* Bio */}     
                <div className="mb-2" 
                     style={{ 
                      paddingTop: "20px", 
                      paddingLeft: "20px", 
                      paddingRight: "20px", 
                      paddingBottom: "20px",
                      borderLeft: "2px solid white" 
                      }}>
                  <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed mb-2 font-semibold font-family-sans">
                      hi!! i'm pau, a 20 y/o cs student from Tenerife
                  </p>
                </div>
                

                {/* Languages */}
                <div className="mb-2" style={{ paddingTop: "10px", paddingLeft: "20px", paddingRight: "20px", paddingBottom: "15px"}}>
                  <p className={SECTION} style={{ paddingBottom: "4px" }}>Languages</p>
                  <div className="flex gap-2 flex-wrap">
                    {["English", "Español"].map(lang => (
                      <span
                        key={lang}
                        className="text-md px-3 py-1.5 rounded-md font-mono cursor-default"
                        style={{ background: "var(--accent-soft)", color: "white", paddingTop: "5px", paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>


                {/* Education */}
                <div className="mb-2 relative" 
                     style={{ 
                          paddingTop: "10px", 
                          paddingLeft: "20px", 
                          paddingRight: "20px", 
                          paddingBottom: "10px",
                          borderLeft: "2px solid white",
                        }}>
                  <p className={SECTION}>Education</p>
                  <p className="text-neutral-800 dark:text-neutral-200 text-lg font-bold">
                    BSc Computer Science
                  </p>
                  <p className="text-neutral-400 dark:text-neutral-200 text-sm font-mono mt-1">
                    University of Manchester · 2024 – Current
                  </p>
                </div>


                {/* Other Interests */}
                <div className="mb-2" style={{ paddingTop: "10px", paddingLeft: "20px", paddingRight: "20px", paddingBottom: "10px" }}>
                  <p className={SECTION}>Interests</p>
                  <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed"
                      style={{paddingLeft: "5px"}}>
                    <li>Cybersecurity</li>
                    <li>Music</li>
                    <li>Videogames</li>
                  </ul>
                </div>


                {/* Links */}
                <div style={{ 
                      paddingTop: "10px", 
                      paddingLeft: "20px",
                      paddingRight: "20px", 
                      paddingBottom: "10px",
                      borderLeft: "2px solid white"
                      }}>
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
                        className="text-sm font-mono transition-colors"
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