import type { HeroDTO } from "../dto/hero";
import {
  adaptActionButtonDTO,
  type ActionButton,
} from "@shared/entities/actionButton/actionButton";

export type Hero = {
  id?: string;
  title: HeroDTO["title"];
  actionButton: ActionButton;
};

export const adaptHeroDTO = (dto: HeroDTO): Hero => {
  return {
    ...dto,
    actionButton: adaptActionButtonDTO(dto.actionButton),
  };
};
