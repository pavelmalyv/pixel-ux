export const breakpointsDesktopFirst = {
  maxXxl: 1535,
  maxXl: 1279,
  maxLg: 1023,
  maxMd: 767,
  maxSm: 639,
} as const;

export const breakpointsMobileFirst = {
  xxl: 1536,
  xl: 1280,
  lg: 1024,
  md: 768,
  sm: 640,
} as const;

export const breakpoints = {
  ...breakpointsDesktopFirst,
  ...breakpointsMobileFirst,
} as const;
