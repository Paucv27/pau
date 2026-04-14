import AboutPanel from "@/components/AboutPanel";
import BlogPanel from "@/components/BlogPanel";
import ProjectsPanel from "@/components/ProjectsPanel";

export default function Home() {
  return (
    <main className="w-screen h-screen flex items-center justify-center overflow-hidden relative
      bg-stone-50 dark:bg-green-950 transition-colors duration-300">
      <BlogPanel />
      <AboutPanel />
      <ProjectsPanel />
    </main>
  );
}