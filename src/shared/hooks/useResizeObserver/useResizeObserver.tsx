import { throttle } from "lodash";
import { useEffect } from "react";

const useResizeObserver = <T extends HTMLElement | null>(
  observedRef: React.RefObject<T>,
  callback: () => void,
) => {
  useEffect(() => {
    const observedEl = observedRef.current;
    if (!observedEl) {
      return;
    }

    const throttledHandleResize = throttle(callback, 200);
    const resizeObserver = new ResizeObserver(throttledHandleResize);
    resizeObserver.observe(observedEl);

    return () => {
      resizeObserver.disconnect();
    };
  }, [observedRef, callback]);
};
export default useResizeObserver;
