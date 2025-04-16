import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { loadFull } from "tsparticles";
import { tsParticles } from "@tsparticles/engine";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
+ * Preloads the tsparticles engine to improve initial render performance
+ * This should be called early in the application lifecycle
+ * @returns {Promise<void>}
+ */
export const preloadParticles = async () => {
  await loadFull(tsParticles);
};

export const debounce = (fn, delay = 300) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
};

export const screenSizes = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  wide: 1440,
};
