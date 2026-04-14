"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";
import { color } from "framer-motion";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles loaded", container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "grab",
                },
                onClick: {
                    enable: true,
                    mode: "repulse",
                },
            resize: true,
            },
            modes: {
                repulse: {
                    distance: 150,
                    duration: 1,
                },
                grab: {
                    distance: 120,
                    links: {
                        opacity: 0.7,
                    },
                },
            },
        },
        particles: {
            color: {
                value: "#739464",
            },
            move: {
                enable: true,
                speed: 2,
            },
            number: {
                value: 200,
            },
            opacity: {
                value: 1,
            },
            size: {
                value: 4,
            },
            links: {
                enable: true,
                color: "#739464",
                distance: 150,
                opacity: 0.5,
                width: 1,
            },
        },
      }}
    />
  );
}