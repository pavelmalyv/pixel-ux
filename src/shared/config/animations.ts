interface GetScrollTriggerBaseOptions {
  offsetTop?: number;
  position?: "top" | "center" | "bottom";
  viewport?: "base" | "low";
}

export const getScrollTriggerBase = ({
  offsetTop,
  position,
  viewport = "base",
}: GetScrollTriggerBaseOptions = {}) => {
  const viewportTrigger = {
    base: 80,
    low: 100,
  };

  return {
    start: `${position ?? "top"} ${viewportTrigger[viewport] + (offsetTop ?? 0)}%`,
    toggleActions: "play none none reverse",
  };
};
