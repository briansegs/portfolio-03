import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { loadFull } from "tsparticles";
import { tsParticles } from "@tsparticles/engine";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const preloadParticles = async () => {
  await loadFull(tsParticles);
};
