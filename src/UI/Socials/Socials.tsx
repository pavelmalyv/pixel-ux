import type { ActionButton } from "@shared/entities/actionButton/actionButton";
import type { AppImage } from "@shared/entities/appImage/appImage";

import ButtonIcon from "@UI/ButtonIcon/ButtonIcon";
import Image from "@UI/Image/Image";

interface SocialsProps {
  children: React.ReactNode;
}

const Socials = ({ children }: SocialsProps) => {
  return <ul className="flex wrap gap-3">{children}</ul>;
};

type ItemProps = {
  actionButton: ActionButton;
  logo: AppImage;
};

const Item = ({ actionButton, logo }: ItemProps) => {
  return (
    <li>
      <ButtonIcon isFill isRounded {...actionButton}>
        <Image {...logo} classNameImg="dark:brightness-0 dark:invert-100" />
      </ButtonIcon>
    </li>
  );
};

Socials.Item = Item;
export default Socials;
