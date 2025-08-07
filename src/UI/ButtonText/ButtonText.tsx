import { useGSAP } from "@gsap/react";
import { Button as BaseButton } from "flowbite-react";
import { useRef } from "react";

import useHoverMouseObserver from "@shared/hooks/useHoverMouseObserver/useHoverMouseObserver";
import gsap from "gsap";

type ButtonTextProps = (
  | Omit<React.ComponentProps<"button">, "className">
  | Omit<React.ComponentProps<"a">, "className">
) & {
  as?: "button" | "a";
};

const ButtonText = ({ as = "button", children, ...props }: ButtonTextProps) => {
  const containerRef = useRef<HTMLButtonElement>(null);
  const isHoverMouse = useHoverMouseObserver(containerRef);

  useGSAP(
    () => {
      gsap.to(".gsap-track", {
        yPercent: isHoverMouse ? -100 : 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    },
    { dependencies: [isHoverMouse], scope: containerRef },
  );

  return (
    <BaseButton
      ref={containerRef}
      as={as}
      className="overflow-hidden h-auto px-0 rounded-none bg-transparent text-base font-normal text-text-tertiary focus:ring-0 focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-2"
      {...props}
    >
      <span className="gsap-track relative">
        <span>{children}</span>
        <span className="absolute top-full left-0  text-text-primary">{children}</span>
      </span>
    </BaseButton>
  );
};
export default ButtonText;
