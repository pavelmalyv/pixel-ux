import {
  adaptActionButtonDTO,
  type ActionButton,
  type ActionButtonDTO,
} from "../actionButton/actionButton";

export type AppMenuDTO = ActionButtonDTO[];

export type AppMenu = {
  id: string;
  actionButton: ActionButton;
}[];

export const adaptAppMenuDTO = (dto: AppMenuDTO): AppMenu => {
  return dto.map((button, index) => ({
    id: String(index),
    actionButton: adaptActionButtonDTO(button),
  }));
};
