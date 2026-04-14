import AboutPanel from "@/components/AboutPanel";
import BlogPanel from "@/components/BlogPanel";
import LoadingScreen from "@/components/LoadingScreen";
import ParticlesBackground from "@/components/ParticlesBackground";
import ProjectsPanel from "@/components/ProjectsPanel";
import ThemeToggle from "@/components/ThemeToggle";
import VolumeControl from "@/components/VolumeControl";

export default function Home() {
  return (
    <>
    <LoadingScreen />
    <main className="w-screen h-screen flex items-center justify-center overflow-hidden relative
      bg-stone-50 dark:bg-neutral-900 transition-colors duration-300">

      {/* Top left controls */}
      <div className="absolute top-4 left-4 flex gap-2 z-50">
        <ThemeToggle />
        <VolumeControl />
      </div>

      <BlogPanel />
      <AboutPanel />
      <ProjectsPanel />
      <ParticlesBackground />
    </main>
    </>
  );
}