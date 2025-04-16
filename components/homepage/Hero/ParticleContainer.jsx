"use client";

import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { debounce, screenSizes } from "@/lib/utils";

const getBreakpoint = (width) => {
  const { sm, md, lg, xl, wide } = screenSizes;
  if (width < sm) return "sm";
  if (width < md) return "md";
  if (width < lg) return "lg";
  if (width < xl) return "xl";
  if (width < wide) return "wide";
  return "max";
};

const ParticleContainer = () => {
  const [breakpoint, setBreakpoint] = useState(() =>
    typeof window !== "undefined" ? getBreakpoint(window.innerWidth) : "sm"
  );

  // Handle resize and update breakpoint
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = debounce(() => {
      const newBreakpoint = getBreakpoint(window.innerWidth);
      setBreakpoint((prev) => (prev !== newBreakpoint ? newBreakpoint : prev));
    });

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Map breakpoint to particle amount
  const particleAmount = {
    sm: 200,
    md: 400,
    lg: 600,
    xl: 800,
    wide: 900,
    max: 1000,
  }[breakpoint];

  return (
    <div className="absolute inset-0">
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
              value: particleAmount,
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
    </div>
  );
};

export default ParticleContainer;
