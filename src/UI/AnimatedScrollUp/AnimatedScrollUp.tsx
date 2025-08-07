import { useGSAP } from "@gsap/react";
import { useRef } from "react";

interface AnimatedScrollUpProps {
  timeline: GSAPTimeline | null;
  children: React.ReactNode;
}

const AnimatedScrollUp = ({ timeline, children }: AnimatedScrollUpProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      timeline?.from(
        containerRef.current,
        {
          y: 60,
          duration: 1,
          ease: "power1.out",
        },
        0,
      );
    },
    { dependencies: [timeline], scope: containerRef },
  );

  return <div ref={containerRef}>{children}</div>;
};
export default AnimatedScrollUp;
