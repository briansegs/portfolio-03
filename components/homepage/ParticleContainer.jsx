"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const screenSize = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  wide: 1440,
};

const ParticleContainer = () => {
  const [init, setInit] = useState(false);
  const [windowWidth, setwindowWidth] = useState(0);

  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
      setwindowWidth(window.innerWidth);
    });
  }, );

  const handleResize = () => {
    const width = window.innerWidth;
    setwindowWidth(width);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { sm, md, lg, xl, wide } = screenSize;

  const particleAmount = () => {
    switch (true) {
      case windowWidth < sm:
        return 200;
      case windowWidth < md:
        return 400;
      case windowWidth < lg:
        return 600;
      case windowWidth < xl:
        return 800;
      case windowWidth < wide:
        return 900;
      default:
        return 1000;
    }
  };

  return (
    <div className="absolute inset-0">
      {init && (
        <Particles
          className="h-screen w-full"
          options={{
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "bubble",
                },
                onClick: {
                  enable: true,
                  mode: "push",
                },
              },
              modes: {
                bubble: {
                  distance: 90,
                  duration: 2,
                  opacity: 1,
                  size: 16,
                  color: {
                    value: ["#fff", "#fff", "#fff", "#00ffff", "#fffeac"],
                  },
                },
                connect: {
                  distance: 80,
                  links: {
                    opacity: 0.5,
                  },
                  radius: 60,
                },
                grab: {
                  distance: 200,
                  links: {
                    opacity: 1,
                  },
                },
                push: {
                  quantity: 8,
                },
                remove: {
                  quantity: 2,
                },
                repulse: {
                  distance: 400,
                  duration: 0.4,
                },
                slow: {
                  active: false,
                  radius: 0,
                  factor: 10,
                },
              },
            },
            particles: {
              color: {
                value: ["#fff", "#fff", "#fffeb8", "#fffc4c", "#00ffff"],
              },
              links: {
                blink: false,
                color: {
                  value: "#fff",
                },
                consent: false,
                distance: 18,
                enable: true,
                opacity: 0.4,
                width: 0.5,
              },
              move: {
                enable: true,
                outModes: "bounce",
                speed: 0.2,
              },
              number: {
                density: {
                  enable: false,
                },
                value: particleAmount(),
              },
              opacity: {
                animation: {
                  enable: true,
                  speed: 0.8,
                  sync: false,
                },
                value: {
                  min: 0,
                  max: 0.4,
                },
              },
              shape: {
                type: "edge",
              },
              size: {
                value: 2,
              },
            },
            fullScreen: {
              enable: false,
            },
          }}
        />
      )}
    </div>
  );
};

export default ParticleContainer;
