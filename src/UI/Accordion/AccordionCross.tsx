import classNames from "classnames";

interface AccordionCrossProps {
  isOpen: boolean;
}

const AccordionCross = ({ isOpen }: AccordionCrossProps) => {
  const styles = {
    base: "w-4 h-0.5 bg-text-primary absolute top-1/2 left-1/2 -translate-1/2 transition-transform",
    open: {
      true: "rotate-0",
      false: "rotate-90",
    },
  };
  return (
    <span className="w-6 aspect-square relative shrink-0">
      <span className={classNames(styles.base, styles.open[isOpen ? "true" : "false"])}></span>
      <span className="w-4 h-0.5 bg-text-primary absolute top-1/2 left-1/2 -translate-1/2"></span>
    </span>
  );
};
export default AccordionCross;
