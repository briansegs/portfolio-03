"use client";

import dynamic from "next/dynamic";

const ParticleContainer = dynamic(() => import("./ParticleContainer"), {
  ssr: false,
  loading: () => null,
});

export default ParticleContainer;
