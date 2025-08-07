import { useCallback, useId, useRef, useState } from "react";

import classNames from "classnames";
import AccordionCross from "./AccordionCross";
import useResizeObserver from "@shared/hooks/useResizeObserver/useResizeObserver";

interface AccordionItemProps {
  title: string;
  isInitOpen?: boolean;
  children: React.ReactNode;
}

const AccordionItem = ({ title, isInitOpen = false, children }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(isInitOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const headerId = useId();
  const contentId = useId();

  const styles = {
    main: {
      base: "relative overflow-hidden text-text-tertiary leading-normal transition-[max-height] duration-300",
      open: {
        true: "max-h-(--scroll-height)",
        false: "max-h-0",
      },
    },
  };

  const handleResize = useCallback(() => {
    const contentEl = contentRef.current;
    if (!contentEl) {
      return;
    }

    contentEl.style.setProperty("--scroll-height", `${contentEl.scrollHeight}px`);
  }, []);

  useResizeObserver<HTMLDivElement | null>(contentRef, handleResize);

  return (
    <div className="app-bg relative border-0 py-3 rounded-sm">
      <h3 id={headerId}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls={contentId}
          aria-expanded={isOpen}
          className="relative w-full py-2 pr-4 pl-7 max-md:pl-5 flex items-center gap-x-4 justify-between text-left"
        >
          <span className="heading-xs">{title}</span>
          <AccordionCross isOpen={isOpen} />
        </button>
      </h3>
      <div
        ref={contentRef}
        id={contentId}
        aria-labelledby={headerId}
        aria-hidden={!isOpen}
        className={classNames(styles.main.base, styles.main.open[isOpen ? "true" : "false"])}
      >
        <div className="pr-4 pl-7 max-md:pl-5 pt-2 pb-3">{children}</div>
      </div>
    </div>
  );
};
export default AccordionItem;
