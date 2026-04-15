"use client";
import { AudioProvider } from "@/contexts/AudioContext";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AudioProvider>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      {children}
    </ThemeProvider>
    </AudioProvider>
  );
}