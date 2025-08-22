import type { ActionButton } from "@shared/entities/actionButton/actionButton";

import Image from "@UI/Image/Image";
import Button from "@UI/Button/Button";
import AnimatedParallaxMouse from "@UI/AnimatedParallaxMouse/AnimatedParallaxMouse";
import logoSymbolImg from "@img/logo-symbol.webp";

interface HeroProps {
  id?: string;
  title: string;
  actionButton: ActionButton;
}

const Hero = ({ id, title, actionButton }: HeroProps) => {
  return (
    <section id={id} className="relative overflow-hidden">
      <div className="absolute w-full max-md:w-[140%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[32px] max-md:blur-[26px]">
        <AnimatedParallaxMouse strength={7}>
          <div className="flex justify-center">
            <Image
              src={logoSymbolImg}
              width={1588}
              height={1304}
              loading="eager"
              className="w-full max-w-198.5"
            />
          </div>
        </AnimatedParallaxMouse>
      </div>
      <div className="relative app-container min-h-screen py-35 flex items-center justify-center">
        <div className="flex flex-col items-center max-w-205 max-xl:max-w-173 max-md:max-w-137 max-sm:max-w-103">
          <h1 className="heading-lg mb-9 text-center">{title}</h1>
          <Button {...actionButton} />
        </div>
      </div>
    </section>
  );
};
export default Hero;
