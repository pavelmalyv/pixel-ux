import type { HeaderBlock } from "@shared/entities/headerBlock/headerBlock";
import type { ActionButton } from "@shared/entities/actionButton/actionButton";
import type { AppImage } from "@shared/entities/appImage/appImage";

import { getScrollTriggerBase } from "@shared/utils/animations";
import { Swiper, SwiperSlide, type SwiperClass } from "swiper/react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { getBreakpoint } from "@shared/utils/breakpoints";

import SectionHeader from "@UI/SectionHeader/SectionHeader";
import Image from "@UI/Image/Image";
import CasesSlide from "./CasesSlide";
import ButtonIcon from "@UI/ButtonIcon/ButtonIcon";
import ArrowBack from "@material-symbols/svg-400/outlined/arrow_back.svg?react";
import ArrowForward from "@material-symbols/svg-400/outlined/arrow_forward.svg?react";
import raysImg1530 from "@img/rays-1530.webp";
import raysImg1040 from "@img/rays-1040.webp";
import gsap from "gsap";

interface CasesProps {
  id?: string;
  headerBlock: HeaderBlock;
  slides: {
    actionButton: ActionButton;
    appImage: AppImage;
  }[];
}

const Cases = ({ id, headerBlock, slides }: CasesProps) => {
  const swiperRef = useRef<SwiperClass>(null);
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".gsap-button", {
        scrollTrigger: {
          trigger: ".gsap-head",
          ...getScrollTriggerBase({
            offsetTop: -15,
            position: "bottom",
          }),
        },
        ease: "power2.out",
        opacity: 0,
        duration: 0.8,
        yPercent: 25,
      });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} id={id} className="app-section">
      <div className="relative">
        <div className="absolute top-0 w-full flex justify-center bg-bg-primary">
          <Image
            src={raysImg1530}
            srcSet={`${raysImg1040} 1040w, ${raysImg1530} 1053w`}
            width={1530}
            height={1568}
            sizes={`(max-width: ${getBreakpoint("maxMd")}rem) 100vw, 764px`}
            className="max-w-191 max-xl:max-w-160 max-md:max-w-130 w-full app-deco-blend"
          />
        </div>
        <div className="relative pt-22 max-xl:pt-18 max-md:pt-10">
          <div className="app-container gsap-head flex items-center justify-between max-lg:justify-center gap-x-4 max-lg:gap-y-6 max-md:gap-y-4 mb-12 max-md:mb-7 max-lg:flex-wrap">
            <div className="gsap-button">
              <ButtonIcon
                Icon={ArrowBack}
                size="lg"
                isFill
                isRounded
                aria-label="Предыдущий слайд"
                onClick={() => swiperRef.current?.slidePrev()}
              />
            </div>
            <div className="max-lg:-order-1 max-lg:w-full">
              <SectionHeader {...headerBlock} isMarginBottom={false} />
            </div>
            <div className="gsap-button">
              <ButtonIcon
                Icon={ArrowForward}
                size="lg"
                isFill
                isRounded
                aria-label="Следующий слайд"
                onClick={() => swiperRef.current?.slideNext()}
              />
            </div>
          </div>
          <Swiper
            slidesPerView={1.25}
            centeredSlides
            loop
            speed={900}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              [getBreakpoint("xxl", "px")]: {
                slidesPerView: 2.5,
              },
              [getBreakpoint("lg", "px")]: {
                slidesPerView: 2,
              },
              [getBreakpoint("sm", "px")]: {
                slidesPerView: 1.5,
              },
            }}
          >
            {slides.map((slide) => {
              const { appImage, actionButton } = slide;

              return (
                <SwiperSlide className="px-4 max-md:px-2">
                  <CasesSlide actionButton={actionButton} appImage={appImage} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Cases;
