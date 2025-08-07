import {
  adaptActionButtonDTO,
  type ActionButton,
} from "@shared/entities/actionButton/actionButton";
import type { PricingDTO } from "../dto/pricing";

export type Pricing = {
  id?: string;
  headerBlock: PricingDTO["headerBlock"];
  actionButton: ActionButton;
  titleButton: PricingDTO["titleButton"];
  items: (Omit<PricingDTO["items"][0], "includes" | "actionButton"> & {
    id: string;
    actionButton: ActionButton;
    includes: { id: string; value: PricingDTO["items"][0]["includes"][0] }[];
  })[];
};

export const adaptPricingDTO = (dto: PricingDTO): Pricing => {
  return {
    ...dto,
    actionButton: adaptActionButtonDTO(dto.actionButton),
    items: dto.items.map((item, index) => ({
      ...item,
      id: String(index),
      actionButton: adaptActionButtonDTO(item.actionButton),
      includes: item.includes.map((value, index) => ({ id: String(index), value })),
    })),
  };
};
