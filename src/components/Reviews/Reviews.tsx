import type { AppImage } from "@shared/entities/appImage/appImage";
import type { HeaderBlock } from "@shared/entities/headerBlock/headerBlock";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCountUp } from "react-countup";

import AvatarGroup from "@UI/AvatarGroup/AvatarGroup";
import Rating from "@UI/Rating/Rating";
import SectionHeader from "@UI/SectionHeader/SectionHeader";
import Image from "@UI/Image/Image";
import AnimatedDigit from "@UI/AnimatedDigit/AnimatedDigit";
import ringImg from "@img/ring.png";
import ringImgWebp from "@img/ring.webp";
import ringImgWebpXs from "@img/ring-xs.webp";
import gsap from "gsap";

interface AvatarImage {
  id: string;
  appImage: AppImage;
}

interface ReviewsProps {
  id?: string;
  headerBlock: HeaderBlock;
  rating: number;
  ratingText: string;
  reviewsCount: number;
  reviewsText: string;
  avatars: [AvatarImage, AvatarImage, AvatarImage, AvatarImage, AvatarImage];
}

const Reviews = ({
  id,
  headerBlock,
  rating,
  ratingText,
  reviewsCount,
  reviewsText,
  avatars,
}: ReviewsProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const countReviewsRef = useRef<HTMLDivElement>(null);
  const countRatingRef = useRef<HTMLDivElement>(null);

  const countReviews = useCountUp({
    ref: countReviewsRef as React.RefObject<HTMLElement>,
    end: reviewsCount,
    duration: 3.5,
  });

  const countRating = useCountUp({
    ref: countRatingRef as React.RefObject<HTMLElement>,
    end: rating,
    decimals: 1,
    duration: 3.5,
  });

  useGSAP(
    () => {
      const timeline = gsap.timeline();

      timeline.from(".gsap-head", {
        opacity: 0,
        scale: 0.8,
      });

      timeline.from(
        ".gsap-reviews",
        {
          opacity: 0,
          scale: 0.8,
          onStart: () => {
            countReviews.start();
            countRating.start();
          },
        },
        "-=20%",
      );

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "=+1300",
        pin: true,
        scrub: true,
        anticipatePin: 0.5,
        animation: timeline,
      });

      gsap.to(".gsap-image", {
        top: 0,
        ease: "none",
        duration: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1300",
          scrub: true,
        },
      });
    },
    { scope: containerRef },
  );

  let stars: 1 | 2 | 3 | 4 | 5;
  switch (rating) {
    case 1: {
      stars = 1;
      break;
    }
    case 2: {
      stars = 2;
      break;
    }
    case 3: {
      stars = 3;
      break;
    }
    case 4: {
      stars = 4;
      break;
    }
    default: {
      stars = 5;
    }
  }

  return (
    <section
      ref={containerRef}
      id={id}
      className="app-section relative min-h-screen flex items-center"
    >
      <div className="gsap-image absolute top-full -translate-y-[80%] bg-bg-primary">
        <Image
          src={ringImg}
          width={1088}
          height={1344}
          classNameImg="w-full max-w-105 max-2xl:max-w-90 max-md:max-w-50 app-deco-blend"
          sources={[
            { id: "0", srcSet: ringImgWebpXs, type: "webp", media: "md" },
            { id: "1", srcSet: ringImgWebp, type: "webp" },
          ]}
        />
      </div>

      <div className="app-container relative">
        <div className="gsap-head">
          <SectionHeader {...headerBlock} isAnimated={false} />
        </div>

        <div className="gsap-reviews flex justify-center">
          <div className="flex md:gap-x-4 p-6 max-md:py-7 max-md:px-4 border border-stroke-secondary rounded-lg bg-bg-secondary max-md:flex-col max-md:items-center max-md:gap-y-6 max-md:w-full max-md:max-w-120">
            <div className="flex shrink-0">
              <AvatarGroup>
                {avatars.map(({ id, appImage }) => (
                  <AvatarGroup.Item key={id} appImage={appImage} />
                ))}
              </AvatarGroup>
            </div>

            <div className="md:space-y-1 max-md:flex max-md:flex-col max-md:items-center max-md:gap-y-2 max-md:text-center">
              <div className="text-lg flex justify-center flex-wrap gap-x-2">
                <div>
                  <strong>
                    <AnimatedDigit countRef={countRatingRef} end={rating.toFixed(1)} />
                  </strong>
                  <span className="text-text-tertiary">&nbsp;{ratingText + " "}</span>
                </div>
                <div>
                  <strong>
                    <AnimatedDigit countRef={countReviewsRef} end={reviewsCount} />
                  </strong>
                  <span className="text-text-tertiary">&nbsp;{reviewsText}</span>
                </div>
              </div>

              <Rating rating={stars} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Reviews;
