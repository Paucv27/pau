"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LoadingScreen() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Start showing content after 0.5 seconds
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 2, delay: 2 }}
      onAnimationComplete={() => {
        // Optional: remove from DOM completely after fade
        const element = document.getElementById("loading-screen");
        element?.remove();
      }}
      id="loading-screen"
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-white font-mono text-xl"
        style={{ color: "var(--accent)" }}
      >
        loading pau's site...
      </motion.div>
    </motion.div>
  );
}