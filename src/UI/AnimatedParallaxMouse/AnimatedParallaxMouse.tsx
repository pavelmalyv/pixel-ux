import { Observer } from "gsap/Observer";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { useGSAP } from "@gsap/react";

import useIntersectionObserver from "@shared/hooks/useIntersectionObserver/useIntersectionObserver";
import gsap from "gsap";

interface AnimatedParallaxMouseProps {
  strength?: number;
  isDisabled?: boolean;
  children: React.ReactNode;
}

const AnimatedParallaxMouse = ({
  strength = 5,
  isDisabled = false,
  children,
}: AnimatedParallaxMouseProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<ReturnType<typeof Observer.create>>(null);
  const isIntersected = useIntersectionObserver<HTMLDivElement | null>(containerRef);
  const isIntersectedRef = useRef(isIntersected);
  const isDisabledRef = useRef(isDisabled);
  const { contextSafe } = useGSAP({ scope: containerRef });

  useEffect(() => {
    isIntersectedRef.current = isIntersected;
    isDisabledRef.current = isDisabled;
  }, [isIntersected, isDisabled]);

  const getDisabled = useCallback(() => !isIntersectedRef.current || isDisabledRef.current, []);
  const getEnable = useCallback(() => isIntersectedRef.current && !isDisabledRef.current, []);

  const parallaxAnimation = useMemo(
    () =>
      contextSafe((clientX: number, clientY: number) => {
        const offsetX = (clientX - window.innerWidth / 2) * 0.01 * strength;
        const offsetY = (clientY - window.innerHeight / 2) * 0.01 * strength;

        if (getDisabled()) {
          return;
        }

        gsap.to(containerRef.current, {
          x: offsetX,
          y: offsetY,
          duration: 0.6,
        });
      }),
    [strength, contextSafe, getDisabled],
  );

  const parallaxReset = useMemo(
    () =>
      contextSafe(() => {
        gsap.to(containerRef.current, {
          x: 0,
          y: 0,
          duration: 0.6,
        });
      }),
    [contextSafe],
  );

  useEffect(() => {
    const observer = Observer.create({
      type: "pointer",
      onMove: ({ event }) => {
        if (!(event instanceof PointerEvent) || event.pointerType !== "mouse") {
          parallaxReset();
          return;
        }

        parallaxAnimation(event.clientX, event.clientY);
      },
    });
    observerRef.current = observer;

    return () => {
      observer.kill();
      observerRef.current = null;
    };
  }, [parallaxAnimation, parallaxReset]);

  useEffect(() => {
    const observer = observerRef.current;
    if (!observer) {
      return;
    }

    if (getEnable()) {
      observer.enable();
    }

    if (getDisabled()) {
      observer.disable();
      parallaxReset();
    }
  }, [isIntersected, isDisabled, parallaxReset, getDisabled, getEnable]);

  return <div ref={containerRef}>{children}</div>;
};
export default AnimatedParallaxMouse;
