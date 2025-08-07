import type { ActionButton } from "@shared/entities/actionButton/actionButton";

import { useRef, useState } from "react";
import { useLayoutContext } from "@pages/Layout/context/LayoutContext";
import { HeaderContextProvider } from "../../context/HeaderContext";
import { useAppDispatch } from "@shared/store/hooks";
import { setHeaderHeight } from "@modules/Header/store/headerSlice";

import classNames from "classnames";
import ButtonText from "@UI/ButtonText/ButtonText";
import Button from "@UI/Button/Button";
import ButtonIcon from "@UI/ButtonIcon/ButtonIcon";
import Logo from "@UI/Logo/Logo";
import HeaderModal from "../HeaderModal/HeaderModal";
import Menu from "@UI/Menu/Menu";
import ThemeSwitch from "@modules/ThemeSwitch";
import MenuIcon from "@material-symbols/svg-400/outlined/menu.svg?react";
import useScrollStart from "../../hooks/useScrollStart/useScrollStart";
import useResizeObserver from "@shared/hooks/useResizeObserver/useResizeObserver";

interface HeaderProps {
  actionButtonPrimary: ActionButton;
  actionButtonSecondary: ActionButton;
  menu: {
    id: string;
    actionButton: ActionButton;
  }[];
}

const Header = ({ actionButtonPrimary, actionButtonSecondary, menu }: HeaderProps) => {
  const { logo } = useLayoutContext();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const containerRef = useRef<HTMLElement | null>(null);
  const isScrollStart = useScrollStart();
  const dispatch = useAppDispatch();

  useResizeObserver(containerRef, () => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    dispatch(setHeaderHeight(container.scrollHeight));
  });

  const handleOpenModal = () => setIsOpenModal(true);
  const handleCloseModal = () => setIsOpenModal(false);

  const styles = {
    container: {
      base: "fixed start-0 top-0 inset-x-0 z-(--z-header) py-3.5 max-md:py-3 transition-[background-color,_box-shadow_,backdrop-filter] duration-300",
      scrollStart: {
        true: "bg-bg-secondary/80 backdrop-blur-xs shadow-sm",
        false: "",
      },
    },
    menu: {
      base: "flex justify-center items-center min-h-17 max-xl:min-h-15 py-2 px-8 rounded-md border-1 border-stroke-tertiary max-xl:hidden transition-colors",
      scrollStart: {
        true: "border-transparent",
        false: "bg-bg-secondary/60 backdrop-blur-xs",
      },
    },
  };

  return (
    <HeaderContextProvider value={{ menu }}>
      <header
        ref={containerRef}
        className={classNames(
          styles.container.base,
          styles.container.scrollStart[isScrollStart ? "true" : "false"],
        )}
      >
        <div className="app-container">
          <div className="flex gap-x-6 items-center">
            <div className="flex-1 flex items-start">{logo && <Logo {...logo} />}</div>
            <div
              className={classNames(
                styles.menu.base,
                styles.menu.scrollStart[isScrollStart ? "true" : "false"],
              )}
            >
              <Menu>
                {menu.map(({ id, actionButton }) => (
                  <Menu.Item key={id} actionButton={actionButton} />
                ))}
              </Menu>
            </div>
            <div className="flex flex-1 items-center justify-end gap-x-5">
              <div className="max-xl:hidden">
                <ThemeSwitch />
              </div>
              <div className="max-xl:hidden">
                <ButtonText {...actionButtonPrimary} />
              </div>
              <div className="max-xl:hidden">
                <Button size="sm" color="accent" {...actionButtonSecondary} />
              </div>
              <div className="xl:hidden">
                <ButtonIcon Icon={MenuIcon} aria-label="Меню" onClick={handleOpenModal} />
              </div>
            </div>
          </div>
        </div>
      </header>

      <HeaderModal
        isOpen={isOpenModal}
        actionButtonPrimary={actionButtonPrimary}
        actionButtonSecondary={actionButtonSecondary}
        onClose={handleCloseModal}
      />
    </HeaderContextProvider>
  );
};

export default Header;
