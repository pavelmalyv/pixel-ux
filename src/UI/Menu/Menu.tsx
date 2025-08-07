import type { ActionButton } from "@shared/entities/actionButton/actionButton";

import classNames from "classnames";
import ButtonText from "@UI/ButtonText/ButtonText";

interface MenuProps {
  variant?: "horizontal" | "vertical";
  align?: "center" | "left" | "right";
  children: React.ReactNode;
}

const Menu = ({ variant = "horizontal", align = "center", children }: MenuProps) => {
  const styles = {
    base: "flex items-center",
    variant: {
      horizontal: "flex-wrap gap-x-10 max-md:gap-x-5 gap-y-2",
      vertical: "flex-col gap-y-5",
    },
    align: {
      center: "justify-center",
      left: "justify-start",
      right: "justify-end",
    },
  };

  return (
    <nav>
      <ul className={classNames(styles.base, styles.variant[variant], styles.align[align])}>
        {children}
      </ul>
    </nav>
  );
};

type ItemProps = {
  actionButton: ActionButton;
  onClick?: () => void;
};

const Item = ({ onClick, actionButton }: ItemProps) => {
  return (
    <li>
      <ButtonText {...actionButton} onClick={onClick} />
    </li>
  );
};

Menu.Item = Item;
export default Menu;
