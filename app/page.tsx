"use client";
import AboutPanel from "@/components/AboutPanel";
import BlogPanel from "@/components/BlogPanel";
import LoadingScreen from "@/components/LoadingScreen";
import ParticlesBackground from "@/components/ParticlesBackground";
import ProjectsPanel from "@/components/ProjectsPanel";
import ThemeToggle from "@/components/ThemeToggle";
import VolumeControl from "@/components/VolumeControl";
import { useAudio } from "@/contexts/AudioContext";

export default function Home() {
  const { playSound } = useAudio();

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;

    /* Check if the clicked element is the main background, a particle canvas, or a panel */
    const isMainBackground = target === e.currentTarget;
    const isParticlesCanvas = target.tagName === 'CANVAS';
    const isPanel = target.closest('.z-10, .z-20, .z-50');

    /* Play sound if the background or particle canvas is clicked and not on a panel */
    if ((isMainBackground || isParticlesCanvas) && !isPanel) {
        playSound("bubbles");
      }
  };

  return (
    <>
    <LoadingScreen />
    <main className="w-screen h-screen 
      flex items-center justify-center overflow-hidden relative 
      transition-colors duration-300"
      style={{ backgroundColor: "var(--bg)"}}
      onClick={handleBackgroundClick}
      >

      <div className="absolute top-4 left-4 flex gap-2 z-10">
        <ThemeToggle />
        <VolumeControl />
      </div>

      <div className="absolute top-4 left-0 right-0 text-center z-10">
        <p className="font-mono text-xs text-neutral-100 dark:text-neutral-500 opacity-40 hover:opacity-100 transition-opacity duration-200">
          dark mode looks better imo
        </p>
      </div>

      <div className="absolute bottom-4 left-0 right-0 text-center z-10">
        <p className="font-mono text-xs text-neutral-100 dark:text-neutral-500 opacity-40 hover:opacity-100 transition-opacity duration-200">
          mobile screen compatible version coming soon!
        </p>
      </div>

      <BlogPanel />
      <AboutPanel />
      <ProjectsPanel />
      <ParticlesBackground />
    </main>
    </>
  );
}