import type { ActionButtonDTO } from "@shared/entities/actionButton/actionButton";
import type { AppImageDTO } from "@shared/entities/appImage/appImage";
import type { HeaderBlock } from "@shared/entities/headerBlock/headerBlock";

export type CasesDTO = {
  id?: string;
  headerBlock: HeaderBlock;
  slides: {
    actionButton: ActionButtonDTO;
    appImage: AppImageDTO;
  }[];
};
