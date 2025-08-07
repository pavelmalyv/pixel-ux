import { createTheme, Modal as BaseModal, ThemeProvider } from "flowbite-react";
import { useEffect, useRef, useState } from "react";

import classNames from "classnames";
import ButtonIcon from "@UI/ButtonIcon/ButtonIcon";
import Close from "@material-symbols/svg-400/outlined/close.svg?react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const DURATION_MS = 400;

const fullTheme = createTheme({
  modal: {
    content: {
      base: "flex h-auto !max-w-none my-auto min-h-full p-0",
      inner:
        "flex flex-col w-full max-h-none min-h-full pt-3.5 pb-19 max-md:pt-3 max-md:pb-18 px-6 max-md:px-4 rounded-none shadow-none bg-bg-primary",
    },
  },
});

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const [isOpenInner, setIsOpenInner] = useState(false);
  const [isAnimationVisible, setIsAnimationVisible] = useState(false);
  const openTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    if (isOpen) {
      clearTimeout(closeTimerRef.current);
      setIsOpenInner(true);

      openTimerRef.current = setTimeout(() => setIsAnimationVisible(true), 10);
    } else {
      clearTimeout(openTimerRef.current);
      setIsAnimationVisible(false);

      closeTimerRef.current = setTimeout(() => setIsOpenInner(false), DURATION_MS);
    }

    return () => {
      clearTimeout(openTimerRef.current);
      clearTimeout(closeTimerRef.current);
    };
  }, [isOpen]);

  return (
    <ThemeProvider theme={fullTheme}>
      <BaseModal
        show={isOpenInner}
        onClose={onClose}
        className={classNames("z-(--z-modal) transition-opacity opacity-0", {
          "opacity-100": isAnimationVisible,
        })}
        style={{
          transitionDuration: `${DURATION_MS}ms`,
        }}
      >
        <div className="flex justify-end mb-4 lg:px-4">
          <ButtonIcon Icon={Close} aria-label="Закрыть" onClick={onClose} />
        </div>
        <div className="my-auto">{children}</div>
      </BaseModal>
    </ThemeProvider>
  );
};
export default Modal;
