import type { HeaderBlock } from "@shared/entities/headerBlock/headerBlock";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { getScrollTriggerBase } from "@shared/config";

import Accordion from "@UI/Accordion/Accordion";
import SectionHeader from "@UI/SectionHeader/SectionHeader";
import AnimatedScrollUp from "@UI/AnimatedScrollUp/AnimatedScrollUp";
import useMediaTheme from "@shared/hooks/useMediaTheme/useMediaTheme";
import gsap from "gsap";

interface FaqProps {
  id?: string;
  headerBlock: HeaderBlock;
  children: React.ReactNode;
}

const Faq = ({ id, headerBlock, children }: FaqProps) => {
  const isMediaMaxLg = useMediaTheme("lg");
  const accordionRef = useRef<HTMLDivElement>(null);
  const [timeline, setTimeline] = useState<GSAPTimeline | null>(null);

  useGSAP(
    () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: accordionRef.current,
          ...getScrollTriggerBase({
            viewport: "low",
          }),
        },
      });

      setTimeline(timeline);
    },
    { scope: accordionRef },
  );

  return (
    <section
      id={id}
      className="relative app-section app-container flex lg:items-center gap-x-8 max-lg:flex-col"
    >
      <div className="lg:flex-[1_1_387px]">
        <SectionHeader {...headerBlock} isMarginBottom={isMediaMaxLg} align="left" />
      </div>
      <div ref={accordionRef} className="lg:flex-[1_1_624px]">
        <AnimatedScrollUp timeline={timeline}>
          <Accordion>{children}</Accordion>
        </AnimatedScrollUp>
      </div>
    </section>
  );
};

interface ItemProps {
  title: string;
  isInitOpen?: boolean;
  children: React.ReactNode;
}

const Item = ({ title, isInitOpen, children }: ItemProps) => {
  return (
    <Accordion.Item title={title} isInitOpen={isInitOpen}>
      {children}
    </Accordion.Item>
  );
};

Faq.Item = Item;
export default Faq;
