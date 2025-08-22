import { breakpoints } from "@shared/config";

export const getBreakpoint = (breakpoint: keyof typeof breakpoints) => {
  const htmlFontSize = parseFloat(window.getComputedStyle(document.documentElement).fontSize);
  const scale = htmlFontSize / 16;
  return breakpoints[breakpoint] * scale;
};
