import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useAppSelector } from "@shared/store/hooks";
import { selectIsLoading } from "@shared/store/loadingPageSlice/loadingPageSlice";

import Image from "@UI/Image/Image";

interface PreloaderProps {
  children: React.ReactNode;
}

const Preloader = ({ children }: PreloaderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isLoading = useAppSelector(selectIsLoading);

  useGSAP(
    () => {
      if (isLoading) {
        return;
      }

      gsap.to(containerRef.current, {
        yPercent: -100,
        duration: 1,
        ease: "power3.inOut",
      });
    },
    { dependencies: [isLoading], scope: containerRef },
  );

  const styles = {
    loading: {
      true: "max-h-screen opacity-0 overflow-hidden",
      false: "",
    },
  };

  return (
    <>
      <div
        ref={containerRef}
        className="fixed inset-0 z-(--z-preloader) bg-bg-primary flex items-center justify-center p-4"
      >
        <div className="text-xl max-lg:text-base">
          <div className="flex items-center gap-x-[0.8125em]">
            <Image
              src="img/preloader-logo.svg"
              width={38}
              height={38}
              loading="eager"
              className="w-[2.375em] animate-spin-loading dark:invert-100"
            />
            <Image
              src="img/preloader-logo-text.svg"
              width={109}
              height={24}
              loading="eager"
              className="w-[6.8125em] dark:invert-100"
            />
          </div>
        </div>
      </div>

      <div className={styles.loading[isLoading ? "true" : "false"]}>{children}</div>
    </>
  );
};
export default Preloader;
