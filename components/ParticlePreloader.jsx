"use client";

import { useEffect } from "react";
import { preloadParticles } from "@/lib/utils";

const ParticlePreloader = () => {
  useEffect(() => {
    preloadParticles();
  }, []);

  return null;
};

export default ParticlePreloader;
