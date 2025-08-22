import { breakpoints } from "@shared/config";
import { breakpointsDesktopFirst } from "@shared/config/breakpoints";
import { getBreakpoint } from "@shared/utils/breakpoints";
import { useMediaQuery } from "react-responsive";

const useMediaTheme = (breakpoint: keyof typeof breakpoints) => {
  const mediaDesktopFirst = {
    maxWidth: getBreakpoint(breakpoint),
  };

  const mediaMobileFirst = {
    minWidth: getBreakpoint(breakpoint),
  };

  return useMediaQuery(
    breakpoint in breakpointsDesktopFirst ? mediaDesktopFirst : mediaMobileFirst,
  );
};
export default useMediaTheme;
