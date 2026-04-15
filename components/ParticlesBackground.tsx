"use client";
import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";
import { useTheme } from "next-themes";

function getCSSVar(name: string): string {
  if (typeof window === "undefined") return "#000000";
  return getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
}

export default function ParticlesBackground() {
  const { theme } = useTheme();
  const [colors, setColors] = useState({ particles: "#3d6b45", links: "#3d6b45" });

  useEffect(() => {
  const timer = setTimeout(() => {
    const particleColor = getCSSVar("--particles");
    const linkColor = getCSSVar("--particles-links");
    setColors({
      particles: particleColor || "#3d6b45",
      links: linkColor || "#3d6b45",
    });
  }, 1); // wait 50ms for .dark class to be applied to <html>

    return () => clearTimeout(timer);
  }, [theme]);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles loaded", container);
  }, []);

  return (
    <Particles
      key={theme} // forces full remount on theme change so colours update
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            repulse: { distance: 150, duration: 1 },
            grab: { distance: 120, links: { opacity: 0.7 } },
          },
        },
        particles: {
          color: { value: colors.particles },
          move: { enable: true, speed: 2 },
          number: { value: 200 },
          opacity: { value: 1 },
          size: { value: 4 },
          links: {
            enable: true,
            color: colors.links,
            distance: 150,
            opacity: 0.5,
            width: 1,
          },
        },
      }}
    />
  );
}