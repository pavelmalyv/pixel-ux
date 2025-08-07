import { useEffect, useState } from "react";

const useIntersectionObserver = <T extends HTMLElement | null>(observedRef: React.RefObject<T>) => {
  const [isIntersected, setIsIntersected] = useState(false);

  useEffect(() => {
    const container = observedRef.current;
    if (!container) {
      return;
    }

    const observer = new IntersectionObserver((entries) =>
      setIsIntersected(entries[0].isIntersecting),
    );
    observer.observe(container);

    return () => observer.disconnect();
  }, [observedRef]);

  return isIntersected;
};
export default useIntersectionObserver;
