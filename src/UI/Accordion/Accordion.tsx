import AccordionItem from "./AccordionItem";

interface AccordionProps {
  children: React.ReactNode;
}

const Accordion = ({ children }: AccordionProps) => {
  return <div className="space-y-4">{children}</div>;
};

Accordion.Item = AccordionItem;
export default Accordion;
