import type { AppImage } from "@shared/entities/appImage/appImage";
import type { ActionButton } from "@shared/entities/actionButton/actionButton";
import { useLayoutContext } from "@pages/Layout/context/LayoutContext";

import Logo from "@UI/Logo/Logo";
import Icon from "@UI/Icon/Icon";
import Menu from "@UI/Menu/Menu";
import Socials from "@UI/Socials/Socials";
import Image from "@UI/Image/Image";
import Favorite from "@material-symbols/svg-400/outlined/favorite.svg?react";
import useMediaTheme from "@shared/hooks/useMediaTheme/useMediaTheme";
import bgBottomImg1920 from "@img/bg-bottom-1920.webp";
import bgBottomImg1152 from "@img/bg-bottom-1152.webp";

interface FooterProps {
  callActionText: string;
  developer: string;
  menu: {
    id: string;
    actionButton: ActionButton;
  }[];
  socials: {
    id: string;
    logo: AppImage;
    actionButton: ActionButton;
  }[];
}

const Footer = ({ callActionText, developer, menu, socials }: FooterProps) => {
  const { logo } = useLayoutContext();
  const isMediaMaxLg = useMediaTheme("maxLg");
  const isMediaMaxMd = useMediaTheme("maxMd");

  let alignMenu: "center" | "left" | "right" = "right";
  if (isMediaMaxMd) {
    alignMenu = "center";
  } else if (isMediaMaxLg) {
    alignMenu = "left";
  }

  return (
    <>
      <div className="absolute left-0 right-0 bottom-0 z-(--z-base)">
        <Image
          src={bgBottomImg1920}
          srcSet={`${bgBottomImg1152} 1152w, ${bgBottomImg1920} 1920w`}
          sizes="100vw"
          width={1920}
          height={1251}
          className="w-full max-md:max-w-none max-h-220 2xl:max-h-280 max-md:max-h-150 object-cover object-top"
        />
      </div>
      <div className="relative py-19 max-xl:py-15 max-md:py-8 app-container z-(--z-layer-1)">
        <footer className="relative flex items-end max-lg:items-start max-lg:flex-col max-md:items-center justify-between lg:gap-x-6 max-lg:gap-y-10 max-md:gap-y-8 px-18 max-xl:px-12 py-21 max-xl:py-16 max-md:py-8 max-md:px-5 bg-linear-(--gradient-light-primary) rounded-xl max-md:rounded-md border-1 border-stroke-primary">
          <div className="lg:space-y-16 max-lg:contents">
            <div className="flex flex-col items-start max-md:items-center gap-y-10 max-lg:gap-y-8 max-md:gap-y-6">
              {logo && <Logo {...logo} />}
              <div className="max-w-92 max-lg:max-w-120 leading-normal text-text-tertiary max-md:text-center">
                {callActionText}
              </div>
            </div>
            <div className="flex items-center gap-x-3 text-text-tertiary max-lg:order-1 max-lg:flex-wrap max-lg:justify-center max-lg:text-center max-lg:gap-y-1">
              <div className="flex text-2xl">
                <Icon Icon={Favorite} />
              </div>
              <div className="leading-normal">{developer}</div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-y-23 max-lg:contents">
            <Menu align={alignMenu}>
              {menu.map(({ id, ...props }) => (
                <Menu.Item key={id} {...props} />
              ))}
            </Menu>
            <div className="max-lg:order-1">
              <Socials>
                {socials.map(({ id, ...props }) => (
                  <Socials.Item key={id} {...props} />
                ))}
              </Socials>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
export default Footer;
