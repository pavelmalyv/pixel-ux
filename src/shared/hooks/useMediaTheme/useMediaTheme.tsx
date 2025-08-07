import { useMediaQuery } from "react-responsive";

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

const useMediaTheme = (breakpoint: keyof typeof breakpoints, isMobileFirst: boolean = false) => {
  const media = {
    maxWidth: breakpoints[breakpoint] - 1,
  };

  const mediaMobileFirst = {
    minWidth: breakpoints[breakpoint],
  };

  return useMediaQuery(isMobileFirst ? mediaMobileFirst : media);
};
export default useMediaTheme;
