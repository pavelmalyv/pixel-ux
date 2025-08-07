import type { FaqDTO } from "../dto/faq";

export type Faq = {
  id?: string;
  headerBlock: FaqDTO["headerBlock"];
  items: (Omit<FaqDTO["items"][0], "text"> & {
    id: string;
    children: React.ReactNode;
  })[];
};

export const adaptFaqDTO = (dto: FaqDTO): Faq => {
  return {
    ...dto,
    items: dto.items.map(({ text, ...props }, index) => ({
      ...props,
      id: String(index),
      children: text,
    })),
  };
};
