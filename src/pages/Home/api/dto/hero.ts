import type { ActionButtonDTO } from "@shared/entities/actionButton/actionButton";

export type HeroDTO = {
  id?: string;
  title: string;
  actionButton: ActionButtonDTO;
};
