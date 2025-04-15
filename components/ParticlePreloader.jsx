"use client";

import { useEffect } from "react";
import { preloadParticles } from "@/lib/utils";

const ParticlePreloader = () => {
  useEffect(() => {
    preloadParticles().catch((error) => {
      console.error("Failed to prelaod particles:", error);
    });
  }, []);

  return null;
};

export default ParticlePreloader;
