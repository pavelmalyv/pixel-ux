import type { ActionButton } from "@shared/entities/actionButton/actionButton";
import type { HeaderBlock } from "@shared/entities/headerBlock/headerBlock";

import { useId, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAppSelector } from "@shared/store/hooks";
import { selectHeaderHeight } from "@modules/Header/store/headerSlice";

import Button from "@UI/Button/Button";
import SectionHeader from "@UI/SectionHeader/SectionHeader";
import PricingService from "./PricingService";
import useMediaTheme from "@shared/hooks/useMediaTheme/useMediaTheme";

interface PricingProps {
  id?: string;
  headerBlock: HeaderBlock;
  titleButton: string;
  actionButton: ActionButton;
  children: React.ReactNode;
}

const Pricing = ({ id, headerBlock, titleButton, actionButton, children }: PricingProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollTriggerHeaderRef = useRef<HTMLDivElement>(null);
  const scrollTriggerCreateRef = useRef<ReturnType<typeof ScrollTrigger.create>>(null);
  const isLg = useMediaTheme("lg");
  const scrollTriggerId = useId();
  const headerHeight = useAppSelector(selectHeaderHeight);

  useGSAP(
    () => {
      scrollTriggerCreateRef.current?.kill();

      if (!isLg) {
        scrollTriggerCreateRef.current = ScrollTrigger.create({
          trigger: ".gsap-head",
          start: () => `top-=${headerHeight ?? 0} top`,
          end: () => `+=${trackRef.current?.scrollHeight ?? 0}`,
          pin: true,
          scrub: true,
        });
      } else {
        scrollTriggerCreateRef.current?.kill();
      }
    },
    { dependencies: [isLg, headerHeight], scope: containerRef },
  );

  return (
    <section ref={containerRef} id={id} className="app-section">
      <div className="app-container">
        <div
          id={scrollTriggerId}
          ref={scrollTriggerHeaderRef}
          className="flex max-lg:flex-col gap-x-8"
        >
          <div className="flex flex-col flex-[1_1_387px] max-lg:contents">
            <div className="gsap-head pt-6 -mt-6">
              <SectionHeader {...headerBlock} scrollTriggerId={scrollTriggerId} align="left" />
            </div>
            <div ref={trackRef} className="grow-1"></div>

            <div className="app-bg relative px-7 max-xl:px-6 max-md:px-4 pt-10 max-md:pt-8 max-xl:pt-8 pb-7 max-lg:order-1 max-lg:mt-8 rounded-md space-y-8 max-md:space-y-7 w-full max-lg:flex max-lg:flex-col max-lg:items-center">
              <h3 className="heading-sm max-lg:text-center">{titleButton}</h3>
              <Button color="accent" isFull {...actionButton} />
            </div>
          </div>

          <div className="flex-[1_1_624px] space-y-8">{children}</div>
        </div>
      </div>
    </section>
  );
};

Pricing.Service = PricingService;
export default Pricing;
