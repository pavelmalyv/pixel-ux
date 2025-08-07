import type { ActionButton } from "@shared/entities/actionButton/actionButton";
import type { AppImage } from "@shared/entities/appImage/appImage";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import ButtonBase from "@UI/ButtonBase/ButtonBase";
import Image from "@UI/Image/Image";
import AnimatedParallaxMouse from "@UI/AnimatedParallaxMouse/AnimatedParallaxMouse";
import useHoverMouseObserver from "@shared/hooks/useHoverMouseObserver/useHoverMouseObserver";

interface CasesSlideProps {
  actionButton: ActionButton;
  appImage: AppImage;
}

const CasesSlide = ({ actionButton, appImage }: CasesSlideProps) => {
  const containerImageRef = useRef<HTMLDivElement>(null);
  const isHoverMouse = useHoverMouseObserver(containerImageRef);

  useGSAP(
    () => {
      gsap.to(".gsap-image-wrapper", {
        scale: isHoverMouse ? 1.2 : 1,
        duration: 0.5,
      });
    },
    { dependencies: [isHoverMouse], scope: containerImageRef },
  );

  return (
    <div className="relative p-9 max-xl:p-6 max-md:p-4">
      <div className="app-bg absolute inset-0 opacity-55 rounded-sm"></div>
      <div className="relative block">
        <ButtonBase {...actionButton}>
          <div className="swiper-lazy-preloader !border-5 !border-accent-primary !border-t-transparent"></div>
          <div ref={containerImageRef} className="overflow-hidden rounded-xs">
            <AnimatedParallaxMouse isDisabled={!isHoverMouse} strength={6}>
              <div className="gsap-image-wrapper">
                <Image {...appImage} classNameImg="w-full" />
              </div>
            </AnimatedParallaxMouse>
          </div>
        </ButtonBase>
      </div>
    </div>
  );
};
export default CasesSlide;
