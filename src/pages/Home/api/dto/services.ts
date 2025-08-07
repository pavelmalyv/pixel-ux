import type { AppImageDTO } from "@shared/entities/appImage/appImage";
import type { HeaderBlock } from "@shared/entities/headerBlock/headerBlock";

export type ItemBaseDTO = {
  title: string;
  isMobileLast?: boolean;
  iconImage: AppImageDTO;
  text: string;
};
export type ItemDefaultDTO = {
  variant: "default";
};
export type ItemImageDTO = {
  variant: "image";
  appImage: AppImageDTO;
};
export type ItemLogoDTO = {
  variant: "logo";
  mainLogoBackground: string;
  mainLogo: AppImageDTO;
};

export type ServicesDTO = {
  id?: string;
  headerBlock: HeaderBlock;
  items: (ItemBaseDTO & (ItemDefaultDTO | ItemImageDTO | ItemLogoDTO))[];
};
