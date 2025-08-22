import type { ActionButton } from "@shared/entities/actionButton/actionButton";
import type { HeaderBlock } from "@shared/entities/headerBlock/headerBlock";

import { useId } from "react";
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
  const isMaxLg = useMediaTheme("maxLg");
  const scrollTriggerId = useId();
  const headerHeight = useAppSelector(selectHeaderHeight);

  const styleVars: Record<string, string> = {
    "--headerHeight": `${headerHeight}px`,
  };

  return (
    <section id={id} className="app-section">
      <div className="app-container">
        <div id={scrollTriggerId} className="flex max-lg:flex-col gap-x-8">
          <div className="flex flex-col flex-[1_1_387px] max-lg:contents">
            <div className="grow-1">
              <div
                style={styleVars}
                className="lg:sticky lg:top-[calc(var(--headerHeight)_+_--spacing(3)))]"
              >
                <SectionHeader
                  {...headerBlock}
                  scrollTriggerId={scrollTriggerId}
                  isMarginBottom={isMaxLg}
                  align="left"
                />
              </div>
            </div>

            <div className="app-bg relative px-7 max-xl:px-6 max-md:px-4 pt-10 max-md:pt-8 max-xl:pt-8 pb-7 max-lg:order-1 mt-8 rounded-md space-y-8 max-md:space-y-7 w-full max-lg:flex max-lg:flex-col max-lg:items-center">
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
