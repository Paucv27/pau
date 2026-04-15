"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useAudio } from "@/contexts/AudioContext";

const SECTION = "text-[28px] font-mono font-bold uppercase tracking-widest text-neutral-100 dark:text-neutral-200 mb-3";

export default function AboutPanel() {
  const [expanded, setExpanded] = useState(false);
  const { playSound } = useAudio();

  return (
    <motion.div
      layout
      onClick={() => !expanded && setExpanded(true)}
      className={`
        relative bg-white dark:bg-neutral-900
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
            className="flex items-center justify-center h-full px-6 gap-3 select-none transition-all duration-200"
            style={{ border: "var(--panel-grabber)", borderRadius: "15px", cursor: "pointer" }}
            onClick={() => {
              playSound("item");
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = "0 0 15px var(--accent)";
              e.currentTarget.style.borderColor = "var(--accent)";
              playSound("hover")
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.border = "var(--panel-grabber)";
            }}
          >
            <div className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-700 shrink-0" />
            <span className="font-mono text-md text-neutral-600 dark:text-neutral-300">
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
          >
            {/* Close button */}
            <div className="flex justify-end shrink-0" style={{ padding: "10px" }}>
              <button
                onClick={() => {
                  setExpanded(false);
                  playSound("click");
                }}
                className="font-mono text-md transition-colors"
                style={{ color: "var(--accent)" , cursor: "pointer" }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = "var(--accent-hover)";
                  playSound("hover");
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = "var(--accent)";
                }}
              >
                [close]
              </button>
            </div>    

            {/* Header */}
            <div className="px-7 shrink-0">
              <div className="flex items-center gap-5 mb-6" 
                    style={{ paddingTop: "40px", 
                             paddingBottom: "40px", 
                             paddingLeft: "20px", 
                             paddingRight: "20px", 
                             borderTop: "2px solid lightgrey"}}>
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
                  scrollbarColor: "var(--scrollbar) transparent",
                  backgroundColor: "var(--about-bg)",
                }}
              >
                {/* Bio */}     
                <div className="mb-2" 
                     style={{ 
                      paddingTop: "20px", 
                      paddingLeft: "20px", 
                      paddingRight: "20px", 
                      paddingBottom: "10px",
                      borderLeft: "2px solid white" 
                      }}>
                  <p className="text-neutral-100 text-md leading-relaxed font-mono font-family-sans">
                      // hi! i'm pau, a 20 y/o cs student from Tenerife currently in studying in Manchester
                      <br />
                      // i'm not actually a web dev, but i needed a project to learn some useful frontend skills. i'm more into backend and cybersecurity, but i'll treat this website like my baby
                      <br />
                      // feel free to check out my projects and blog posts, or contact me for whatever reason
                      <br />
                      // outside of tech i'm mainly interested in music and games, and i'm also really big on Pokemon, Star Wars, and the colour green if you couldn't already tell :)
                  </p>
                </div>
                

                {/* Languages */}
                <div className="mb-2" style={{ paddingTop: "10px", paddingLeft: "20px", paddingRight: "20px", paddingBottom: "15px"}}>
                  <p className={SECTION} style={{ paddingBottom: "5px" }}>Languages</p>
                  <div className="flex gap-2 flex-wrap">
                    {["English", "Español"].map(lang => (
                      <span
                        key={lang}
                        className="text-lg px-3 py-1.5 rounded-md font-semibold cursor-default"
                        style={{ background: "var(--accent-soft)", 
                                 color: "var(--language-color)", 
                                 padding: "10px" }}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = "var(--accent-soft-transparent)" 
                          e.currentTarget.style.color = "white"
                          playSound("hover");
                        }}
                        onMouseLeave={e => (e.currentTarget.style.background = "var(--accent-soft)", e.currentTarget.style.color = "var(--language-color)")}
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
                  <p className="text-neutral-100 dark:text-neutral-200 text-lg font-bold">
                    BSc(Hons) Computer Science
                  </p>
                  <p className="text-neutral-200 dark:text-neutral-200 text-md font-mono font-semibold">
                    University of Manchester · 2024 – Current
                  </p>
                  <ul className="font-mono list-disc list-inside text-neutral-100 dark:text-neutral-200 text-sm leading-relaxed"
                      style={{paddingLeft: "5px", paddingTop: "5px", fontSize: "16px"}}>
                    <li>UniCS Secretary and PR Officer</li>
                    <li>Manchester Intelligence Society Treasurer</li>
                    <li>Catalan Society Secretary</li>
                  </ul>
                </div>


                {/* Links */}
                <div style={{ 
                      paddingTop: "10px", 
                      paddingLeft: "20px",
                      paddingRight: "20px", 
                      paddingBottom: "25px",
                      }}>
                  <p className={SECTION}>Links</p>
                  <div className="flex gap-5 flex-wrap">
                    {[
                      { href: "https://github.com/paucv27", icon: <FaGithub size={50} /> },
                      { href: "https://linkedin.com/in/paucv27", icon: <FaLinkedin size={50} /> },
                      { href: "https://instagram.com/pauvelxsco", icon: <FaInstagram size={50} /> },
                    ].map(({ href, icon }) => (
                      <a
                        key={href}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={e => {
                          e.stopPropagation();
                          playSound("pop");
                        }}
                        className="text-md font-mono transition-colors"
                        style={{ color: "var(--accent-soft)", paddingTop: "5px" }}
                        onMouseEnter={e => {
                          e.currentTarget.style.color = "white";
                          playSound("hover");
                        }}
                        onMouseLeave={e => (e.currentTarget.style.color = "var(--accent-soft)")}
                      >
                        {icon}
                      </a>
                    ))}
                  </div>
                </div>


                {/* More */}
                <div className="mb-2" 
                     style={{ paddingTop: "10px", 
                              paddingLeft: "20px", 
                              paddingRight: "20px", 
                              paddingBottom: "10px",
                              borderLeft: "2px solid white"}}>
                  <p className={SECTION}>More about me</p>
                  <ul className="font-mono list-disc list-inside text-neutral-100 dark:text-neutral-200 text-md leading-relaxed"
                      style={{paddingLeft: "5px", paddingTop: "5px", fontSize: "16px"}}>
                    <li>i was born in february 2006!</li>
                    <li>i looove going to concerts, last year i saw 2 of my top 3 artists of all time, and this year i'm seeing the third one!</li>
                    <li>i've lived in 5 different countries across 3 different continents (4 if you believe america is north/south)</li>
                    <li>i support fc barcelona, but have sadly never been to a game irl :(</li>
                    <li>i want a fat orange cat named biscoff as soon as i can</li>
                    <li>i also like playing chess (recently got back into it) and drawing (occasionally)!</li>
                  </ul>
                </div>

              </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}