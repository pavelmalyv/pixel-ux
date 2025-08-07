import type { ActionButton } from "@shared/entities/actionButton/actionButton";
import type { AppImage } from "@shared/entities/appImage/appImage";

import Image from "@UI/Image/Image";
import ButtonBase from "@UI/ButtonBase/ButtonBase";

interface LogoProps {
  actionButton: ActionButton;
  image: AppImage;
  onClick?: () => void;
}

const Logo = ({ actionButton, image, onClick }: LogoProps) => {
  return (
    <ButtonBase {...actionButton} onClick={onClick}>
      <Image {...image} classNameImg="w-42 max-w-none max-xl:w-38 max-md:w-34 dark:invert-100" />
    </ButtonBase>
  );
};
export default Logo;
