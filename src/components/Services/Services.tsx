import type { HeaderBlock } from "@shared/entities/headerBlock/headerBlock";

import { useRef, useState } from "react";
import { getScrollTriggerBase } from "@shared/utils/animations";
import { useGSAP } from "@gsap/react";

import SectionHeader from "@UI/SectionHeader/SectionHeader";
import ServicesItem from "./ServicesItem";
import AnimatedScrollUp from "@UI/AnimatedScrollUp/AnimatedScrollUp";
import gsap from "gsap";

interface ServicesProps {
  id?: string;
  headerBlock: HeaderBlock;
  children: React.ReactNode;
}

const Services = ({ id, headerBlock, children }: ServicesProps) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [timeline, setTimeline] = useState<GSAPTimeline | null>(null);

  useGSAP(
    () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: gridRef.current,
          ...getScrollTriggerBase({
            viewport: "low",
          }),
        },
      });

      setTimeline(timeline);
    },
    { scope: gridRef },
  );

  return (
    <section id={id} className="app-section app-container">
      <SectionHeader {...headerBlock} align="left" />

      <AnimatedScrollUp timeline={timeline}>
        <div
          ref={gridRef}
          className="grid grid-cols-4 max-lg:grid-cols-2 gap-8 max-xl:gap-5 max-sm:grid-cols-1"
        >
          {children}
        </div>
      </AnimatedScrollUp>
    </section>
  );
};

Services.Item = ServicesItem;
export default Services;
