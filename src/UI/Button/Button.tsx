import { Button as BaseButton } from "flowbite-react";
import classNames from "classnames";

type ButtonProps = (
  | Omit<React.ComponentProps<"button">, "className">
  | Omit<React.ComponentProps<"a">, "className">
) & {
  as?: "a" | "button";
  size?: "sm" | "md";
  color?: "dark" | "accent";
  isFull?: boolean;
};

const Button = ({
  as = "button",
  isFull = false,
  size = "md",
  color = "dark",
  children,
  ...props
}: ButtonProps) => {
  const styles = {
    base: "h-auto rounded-sm leading-normal font-semibold text-text-secondary transition-colors duration-300 focus:ring-0 focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-2",
    full: "w-full",
    color: {
      dark: "bg-bg-tertiary hover:bg-accent-primary",
      accent: "bg-accent-primary hover:bg-bg-tertiary",
    },
    size: {
      sm: "max-w-100 min-h-12 min-w-33 px-5 py-2",
      md: "max-w-130 min-h-15 max-md:min-h-13 min-w-53 max-md:min-w-48 px-6 max-md:px-5 py-3",
    },
  };

  return (
    <BaseButton
      as={as}
      className={classNames(styles.base, styles.color[color], styles.size[size], {
        [styles.full]: isFull,
      })}
      {...props}
    >
      {children}
    </BaseButton>
  );
};
export default Button;
