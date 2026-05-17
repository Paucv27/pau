  "use client";
  import { useState } from "react";
  import { motion, AnimatePresence } from "framer-motion";
  import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
  import { useAudio } from "@/contexts/AudioContext";
  import Image from "next/image";
 import ScrambleText from "@/components/ScrambleText";

  const SECTION = "text-[28px] font-mono font-bold uppercase tracking-widest text-neutral-100 dark:text-neutral-200 mb-3";

  export default function AboutPanel() {
    const [expanded, setExpanded] = useState(false);
    const { playSound } = useAudio();
    const [flipped, setFlipped] = useState(false);

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
              <ScrambleText
                text="About Pau !"
                className="font-mono text-md"
                style={{ color: "var(--accent)" }}
              />
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
                <div style={{ display: "none" }}> {/* preloading the image */}
                  <Image src="/images/profile.jpeg" alt="" width={280} height={280} priority />
                </div>
                <div className="flex items-center gap-5 mb-6" 
                      style={{ paddingTop: "40px", 
                              paddingBottom: "40px", 
                              paddingLeft: "20px", 
                              paddingRight: "20px", 
                              borderTop: "2px solid lightgrey"}}>
                  <motion.div
                    whileTap={{ scale: 0.9 }}
                    className="rounded-full shrink-0 cursor-help"
                    onClick={e => {
                      setFlipped(f => !f);
                      playSound("click");
                    }}
                    onMouseEnter={e => {
                    playSound("hover");
                      e.currentTarget.style.filter = "brightness(1.3)";
                    }}
                    onMouseLeave={e => {                   
                      e.currentTarget.style.filter = "brightness(1)";
                    }}
                    >
                    <Image
                      src={flipped ? "/images/profile.jpeg" : "/images/profile2.jpeg"}
                      alt="Pau Carrillo Velasco"
                      width={280}
                      height={280}
                      priority
                      className="w-35 h-35 rounded-full shrink-0 object-cover object-left"
                    />
                  </motion.div>
                  <div>
                    <ScrambleText
                      text="Pau Carrillo Velasco"
                      className="font-semibold text-4xl leading-tight"
                      style={{ color: "var(--accent-soft)"}}
                    ></ScrambleText>
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
                    <div className="flex flex-col gap-3">
                      {[
                        "// hi! i'm pau, a 20 y/o cs student from Tenerife currently studying in Manchester",
                        "// i'm not actually a web dev, but i needed a project to learn some useful frontend skills. i'm more into backend and cybersecurity, but i'll treat this website like my baby",
                        "// feel free to check out my projects and blog posts, or contact me for whatever reason",
                        "// outside of tech i'm mainly interested in music and games, and i'm also really big on Pokemon, Star Wars, and the colour green if you couldn't already tell :)",
                      ].map(line => (
                        <p key={line} className="text-neutral-100 text-md leading-relaxed font-mono">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                  

                  {/* Languages */} 
                  <div className="mb-2 relative" 
                       style={{ paddingTop: "10px", 
                       paddingLeft: "20px", 
                       paddingRight: "20px", 
                       paddingBottom: "15px"}}>
                    <p className={SECTION} style={{ paddingBottom: "5px" }}>Languages</p>
                    <div className="flex gap-2 flex-wrap">
                      {["English", "Español"].map(lang => (
                        <span
                          key={lang}
                          className="text-xl px-3 py-1.5 rounded-md font-mono"
                          style={{ background: "var(--accent)", 
                                  color: "var(--language-colour)", 
                                  padding: "10px"}}
                          onMouseEnter={e => {
                            e.currentTarget.style.background = "white" 
                            e.currentTarget.style.color = "var(--accent)"
                            playSound("hover");
                          }}
                          onMouseLeave={e => (
                            e.currentTarget.style.background = "var(--accent)", 
                            e.currentTarget.style.color = "var(--language-colour)")}
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
                    <div style={{
                      border: "1px solid var(--accent)",
                      borderRadius: "10px",
                      padding: "15px",
                      marginTop: "10px",
                      position: "relative",
                    }}>
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-neutral-100 text-lg font-bold font-mono">
                          BSc(Hons) Computer Science
                        </p>
                        <span className="font-mono text-xs shrink-0 mt-1"
                              style={{ color: "var(--accent-soft)", background: "var(--accent)", padding: "3px 8px", borderRadius: "999px" }}>
                          2024 – now
                        </span>
                      </div>

                      {/* University */}
                      <p className="font-mono text-sm mt-1" style={{ color: "var(--accent-soft)" }}>
                        University of Manchester
                      </p>

                      {/* Divider */}
                      <div style={{ borderTop: "1px solid var(--accent-soft-transparent)", margin: "10px 0" }} />

                      {/* Roles */}
                      <p className="font-mono text-xs text-neutral-400 uppercase tracking-widest mb-2">
                        Roles
                      </p>
                      <div className="flex flex-col gap-1.5">
                        {[
                          "UniCS — Secretary & PR Officer",
                          "Manchester Intelligence Society — Treasurer",
                          "Catalan Society — Secretary",
                        ].map(role => (
                          <div key={role} className="flex items-center gap-2">
                            <span style={{ color: "var(--accent-soft)", fontSize: "12px" }}>⟢</span>
                            <span className="font-mono text-md text-neutral-100"
                                  style={{
                                    paddingTop: "3px",
                                  }}>
                                    {role}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>


                  {/* Links */}
                  <div style={{ 
                        paddingTop: "10px", 
                        paddingLeft: "20px",
                        paddingRight: "20px", 
                        paddingBottom: "15px",
                        }}>
                    <p className={SECTION}>Links</p>
                    <div className="flex gap-5 flex-wrap">
                      {[
                        { href: "https://github.com/paucv27", icon: <FaGithub size={60} /> },
                        { href: "https://linkedin.com/in/paucv27", icon: <FaLinkedin size={60} /> },
                        { href: "https://instagram.com/pauvelxsco", icon: <FaInstagram size={60} /> },
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
                          style={{ color: "var(--accent)", paddingTop: "5px" }}
                          onMouseEnter={e => {
                            e.currentTarget.style.color = "white";
                            playSound("hover");
                          }}
                          onMouseLeave={e => (e.currentTarget.style.color = "var(--accent)")}
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
                                borderLeft: "2px solid white",
                                }}>
                    <p className={SECTION}>More about me</p>
                    <div className="flex flex-col gap-2" style={{ marginTop: "8px" }}>
                      {[
                        { emoji: "☕︎", fact: "i was born in february 2006 !" },
                        { emoji: "♫", fact: "i love going to concerts ♪༘⋆ last year i saw 2 of my top 3 artists of all time, and this year i'm seeing the third one!" },
                        { emoji: "✈︎", fact: "i've lived in 5 countries across 3 continents (4 if you believe america is north/south)" },
                        { emoji: "⚽︎", fact: "i support fc barcelona, but have sadly never been to a game irl :(" },
                        { emoji: "𑄝", fact: "i want a fat orange cat named biscoff as soon as i can" },
                        { emoji: "♘", fact: "i also like playing chess (recently got back into it) and drawing (occasionally)!" },
                      ].map(({ emoji, fact }) => (
                        <div
                          key={fact}
                          className="flex items-start gap-3 rounded-xl transition-all duration-200"
                          style={{ 
                            padding: "10px 12px",
                            background: "var(--accent-soft-transparent)",
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.background = "var(--accent)";
                            playSound("hover");
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.background = "var(--accent-soft-transparent)";
                          }}
                        >
                          <span style={{ fontSize: "22px", lineHeight: 1.3, flexShrink: 0 }}>{emoji}</span>
                          <span className="font-mono text-md text-neutral-100 leading-relaxed">{fact}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <a href="https://emojicombos.com/" target="_blank" rel="noopener noreferrer">
                    <p className="text-center text-neutral-500 text-xs font-mono mt-4"
                       onMouseEnter={e => {
                        playSound("hover");
                      }}
                    >
                      ╰┈➤ˎˊ˗ emojis from emojiscombos.com
                    </p>
                  </a>
                </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }