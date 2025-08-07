import type { HeaderBlock } from "@shared/entities/headerBlock/headerBlock";

export type FaqDTO = {
  id?: string;
  headerBlock: HeaderBlock;
  items: {
    title: string;
    text: string;
  }[];
};
