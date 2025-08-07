import type { ActionButton } from "@shared/entities/actionButton/actionButton";

import Modal from "@UI/Modal/Modal";
import HeaderModalInner from "./HeaderModalInner";

interface HeaderModalProps {
  isOpen: boolean;
  actionButtonPrimary: ActionButton;
  actionButtonSecondary: ActionButton;
  onClose: () => void;
}

const HeaderModal = ({
  isOpen,
  actionButtonPrimary,
  actionButtonSecondary,
  onClose,
}: HeaderModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <HeaderModalInner
        isOpen={isOpen}
        actionButtonPrimary={actionButtonPrimary}
        actionButtonSecondary={actionButtonSecondary}
        onClose={onClose}
      />
    </Modal>
  );
};
export default HeaderModal;
