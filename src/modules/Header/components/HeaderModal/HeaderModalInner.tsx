import type { ActionButton } from "@shared/entities/actionButton/actionButton";

import { useLayoutContext } from "@pages/Layout/context/LayoutContext";
import { useHeaderContext } from "../../context/HeaderContext";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import Logo from "@UI/Logo/Logo";
import Button from "@UI/Button/Button";
import Menu from "@UI/Menu/Menu";
import ThemeSwitch from "@modules/ThemeSwitch";
import ButtonText from "@UI/ButtonText/ButtonText";
import gsap from "gsap";

interface HeaderModalInnerProps {
  isOpen: boolean;
  actionButtonPrimary: ActionButton;
  actionButtonSecondary: ActionButton;
  onClose: () => void;
}

const HeaderModalInner = ({
  isOpen,
  actionButtonPrimary,
  actionButtonSecondary,
  onClose,
}: HeaderModalInnerProps) => {
  const { logo } = useLayoutContext();
  const { menu } = useHeaderContext();
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!isOpen) {
        return;
      }

      const timeline = gsap.timeline();
      timeline.from(".gsap-menu-item", {
        x: -20,
        opacity: 0,
        stagger: 0.08,
        ease: "power2.inOut",
      });

      timeline.from(
        ".gsap-theme-switch",
        {
          y: 15,
          ease: "power2.inOut",
          opacity: 0,
        },
        "-=45%",
      );

      timeline.from(
        ".gsap-buttons",
        {
          y: 15,
          ease: "power2.inOut",
          opacity: 0,
        },
        "-=60%",
      );
    },
    { dependencies: [isOpen], scope: containerRef },
  );

  return (
    <div ref={containerRef} className="flex flex-col items-center gap-y-12">
      {logo && <Logo {...logo} onClick={onClose} />}

      <Menu variant="vertical">
        {menu.map(({ id, actionButton }) => (
          <div key={id} className="gsap-menu-item">
            <Menu.Item actionButton={actionButton} onClick={onClose} />
          </div>
        ))}
      </Menu>

      <div className="flex flex-col items-center w-full gap-y-12">
        <div className="gsap-theme-switch">
          <ThemeSwitch />
        </div>
        <div className="gsap-buttons flex flex-col items-center gap-y-6 w-full">
          <ButtonText {...actionButtonPrimary} />
          <Button size="sm" color="accent" isFull {...actionButtonSecondary} />
        </div>
      </div>
    </div>
  );
};
export default HeaderModalInner;
