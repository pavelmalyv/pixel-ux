import { getScrollTriggerBase } from "@shared/utils/animations";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";

interface AnimatedTextProps {
  variant?: "words" | "lines";
  text: string;
  startOffsetTop?: number;
  scrollTriggerId?: string;
}

const AnimatedText = ({
  variant = "words",
  text,
  startOffsetTop = 0,
  scrollTriggerId,
}: AnimatedTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const trigger = scrollTriggerId === undefined ? containerRef.current : `#${scrollTriggerId}`;

      if (variant === "words") {
        SplitText.create(containerRef.current, {
          type: "lines words",
          linesClass: "inline-block py-[0.3em] -my-[0.3em] overflow-hidden",
          wordsClass: "inline-block",
          autoSplit: true,
          tag: "span",
          onSplit: (self) => {
            return gsap.from(self.words, {
              scrollTrigger: {
                trigger,
                ...getScrollTriggerBase({
                  offsetTop: startOffsetTop,
                }),
              },
              ease: "power1.inOut",
              duration: 0.8,
              yPercent: 250,
              rotate: 15,
              stagger: 0.2,
            });
          },
        });
      } else {
        SplitText.create(containerRef.current, {
          type: "lines words",
          linesClass: "block overflow-hidden",
          wordsClass: "inline-block",
          autoSplit: true,
          tag: "span",
          onSplit: (self) => {
            return gsap.from(self.words, {
              scrollTrigger: {
                trigger,
                ...getScrollTriggerBase({
                  offsetTop: startOffsetTop,
                }),
              },
              ease: "power1.inOut",
              duration: 0.8,
              yPercent: 100,
            });
          },
        });
      }
    },
    { dependencies: [scrollTriggerId] },
  );

  return (
    <span className="flex">
      <span className="inline-block" ref={containerRef}>
        {text}
      </span>
    </span>
  );
};
export default AnimatedText;
