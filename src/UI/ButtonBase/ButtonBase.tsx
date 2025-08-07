import { Button as BaseButton } from "flowbite-react";

type ButtonProps = (
  | Omit<React.ComponentProps<"button">, "className">
  | Omit<React.ComponentProps<"a">, "className">
) & {
  as?: "a" | "button";
};

const Button = ({ as = "button", children, ...props }: ButtonProps) => {
  return (
    <BaseButton
      as={as}
      className="block h-auto px-0 rounded-none !bg-transparent text-[length:inherit] text-inherit ![text-align:inherit] [font-weight:inherit] focus:ring-0 focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-2"
      {...props}
    >
      {children}
    </BaseButton>
  );
};
export default Button;
