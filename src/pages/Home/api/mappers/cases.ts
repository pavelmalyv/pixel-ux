import type { CasesDTO } from "../dto/cases";
import {
  adaptActionButtonDTO,
  type ActionButton,
} from "@shared/entities/actionButton/actionButton";
import { adaptAppImageDTO, type AppImage } from "@shared/entities/appImage/appImage";

export type Cases = {
  id?: string;
  headerBlock: CasesDTO["headerBlock"];
  slides: {
    actionButton: ActionButton;
    appImage: AppImage;
  }[];
};

export const adaptCasesDTO = (dto: CasesDTO): Cases => {
  return {
    ...dto,
    slides: dto.slides.map((slide) => ({
      ...slide,
      actionButton: adaptActionButtonDTO(slide.actionButton),
      appImage: adaptAppImageDTO(slide.appImage),
    })),
  };
};
