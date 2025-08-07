export type ActionButtonDTO = {
  type: "link";
  action: string;
  label?: string;
  target?: string;
  ariaLabel?: string;
};

export type ActionButton = {
  as: "a";
  target?: string;
  href?: string;
  children?: React.ReactNode;
  ["aria-label"]?: string;
};

export const adaptActionButtonDTO = (dto: ActionButtonDTO): ActionButton => {
  return {
    as: "a",
    href: dto.action,
    target: dto.target,
    children: dto.label,
    ["aria-label"]: dto.ariaLabel,
  };
};
