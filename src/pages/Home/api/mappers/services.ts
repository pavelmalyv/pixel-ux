import type {
  ServicesDTO,
  ItemBaseDTO,
  ItemDefaultDTO,
  ItemImageDTO,
  ItemLogoDTO,
} from "../dto/services";
import { adaptAppImageDTO, type AppImage } from "@shared/entities/appImage/appImage";

type ItemImage = Omit<ItemImageDTO, "appImage"> & {
  appImage: AppImage;
};
type ItemLogo = Omit<ItemLogoDTO, "mainLogo"> & {
  mainLogo: AppImage;
};

export type Services = {
  id?: string;
  headerBlock: ServicesDTO["headerBlock"];
  items: (Omit<ItemBaseDTO, "text" | "iconImage"> &
    (ItemDefaultDTO | ItemImage | ItemLogo) & {
      id: string;
      iconImage: AppImage;
      children: React.ReactNode;
    })[];
};

export const adaptServicesDTO = (dto: ServicesDTO): Services => {
  return {
    ...dto,
    items: dto.items.map((service, index) => {
      const base = {
        id: String(index),
        title: service.title,
        children: service.text,
        iconImage: adaptAppImageDTO(service.iconImage),
      };

      switch (service.variant) {
        case "default": {
          return {
            ...base,
            variant: service.variant,
          };
        }
        case "image": {
          return {
            ...base,
            variant: service.variant,
            appImage: adaptAppImageDTO(service.appImage),
          };
        }
        case "logo": {
          return {
            ...base,
            variant: service.variant,
            mainLogoBackground: service.mainLogoBackground,
            mainLogo: adaptAppImageDTO(service.mainLogo),
          };
        }
      }
    }),
  };
};
