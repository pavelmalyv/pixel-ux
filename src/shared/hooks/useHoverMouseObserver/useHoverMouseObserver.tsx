import { useEffect, useState } from "react";
import { Observer } from "gsap/Observer";

const useHoverMouseObserver = <T extends HTMLElement | null>(observedRef: React.RefObject<T>) => {
  const [isHoverMouse, setIsHoverMouse] = useState(false);

  useEffect(() => {
    const containerImage = observedRef.current;
    if (!containerImage) {
      return;
    }

    const observer = Observer.create({
      type: "pointer",
      target: containerImage,
      onHover: ({ event }) => {
        if (!(event instanceof PointerEvent) || event.pointerType !== "mouse") {
          return;
        }

        setIsHoverMouse(true);
      },
      onHoverEnd: () => {
        setIsHoverMouse(false);
      },
    });

    return () => {
      observer.kill();
    };
  }, [observedRef]);

  return isHoverMouse;
};
export default useHoverMouseObserver;
