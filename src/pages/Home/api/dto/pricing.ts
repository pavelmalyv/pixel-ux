import type { ActionButtonDTO } from "@shared/entities/actionButton/actionButton";
import type { HeaderBlock } from "@shared/entities/headerBlock/headerBlock";
import type { CurrencySymbols } from "@shared/types";

export type PricingDTO = {
  id?: string;
  headerBlock: HeaderBlock;
  titleButton: string;
  actionButton: ActionButtonDTO;
  items: {
    headerBlock: HeaderBlock;
    actionButton: ActionButtonDTO;
    currencySymbol: CurrencySymbols;
    price: number;
    hasFromLabel: boolean;
    includes: string[];
  }[];
};
