import { breakpoints } from "@shared/config";

const SCALE = parseFloat(window.getComputedStyle(document.documentElement).fontSize) / 16;

export const getBreakpoint = (
  breakpoint: keyof typeof breakpoints,
  units: "rem" | "px" = "rem",
) => {
  return units === "rem" ? breakpoints[breakpoint] / 16 : breakpoints[breakpoint] * SCALE;
};
