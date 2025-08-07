import { Button } from "flowbite-react";

import Icon from "@UI/Icon/Icon";
import classNames from "classnames";

type ButtonIconProps = (
  | Omit<React.ComponentProps<"button">, "className">
  | Omit<React.ComponentProps<"a">, "className">
) & {
  as?: "a" | "button";
  size?: "md" | "lg";
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  isFill?: boolean;
  isRounded?: boolean;
};

const ButtonIcon = ({
  as = "button",
  size = "md",
  Icon: IconSvg,
  isFill = false,
  isRounded = false,
  children,
  ...props
}: ButtonIconProps) => {
  const styles = {
    base: "h-auto aspect-square text-2xl p-0 transition-colors duration-300 focus:ring-0 focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-2",
    fill: {
      true: "bg-bg-quinary hover:bg-bg-quaternary border-1 border-stroke-secondary",
      false: "bg-transparent hover:bg-transparent hover:text-accent-primary",
    },
    rounded: {
      true: "rounded-full",
      false: "rounded-none",
    },
    size: {
      md: "w-11",
      lg: "w-20 max-md:w-14",
    },
  };

  return (
    <Button
      as={as}
      className={classNames(
        styles.base,
        styles.size[size],
        styles.fill[isFill ? "true" : "false"],
        styles.rounded[isRounded ? "true" : "false"],
      )}
      {...props}
    >
      {IconSvg && <Icon Icon={IconSvg} />}
      {children}
    </Button>
  );
};
export default ButtonIcon;
