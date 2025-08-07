import type { LayoutDTO } from "./layoutDto";
import {
  adaptActionButtonDTO,
  type ActionButton,
} from "@shared/entities/actionButton/actionButton";
import { adaptAppImageDTO, type AppImage } from "@shared/entities/appImage/appImage";
import { adaptAppMenuDTO, type AppMenu } from "@shared/entities/appMenu/appMenu";

export type LayoutPage = {
  siteSettings: {
    logo: {
      actionButton: ActionButton;
      image: AppImage;
    };
  };
  header: {
    actionButtonPrimary: ActionButton;
    actionButtonSecondary: ActionButton;
    menu: AppMenu;
  };
  footer: Omit<LayoutDTO["footer"], "menu" | "socials"> & {
    menu: AppMenu;
    socials: {
      id: string;
      logo: AppImage;
      actionButton: ActionButton;
    }[];
  };
};

export const adaptLayoutPageDTO = (dto: LayoutDTO): LayoutPage => {
  return {
    ...dto,
    siteSettings: {
      logo: {
        actionButton: adaptActionButtonDTO(dto.siteSettings.logo.actionButton),
        image: adaptAppImageDTO(dto.siteSettings.logo.image),
      },
    },
    header: {
      actionButtonPrimary: adaptActionButtonDTO(dto.header.actionButtonPrimary),
      actionButtonSecondary: adaptActionButtonDTO(dto.header.actionButtonSecondary),
      menu: adaptAppMenuDTO(dto.header.menu),
    },
    footer: {
      ...dto.footer,
      menu: adaptAppMenuDTO(dto.footer.menu),
      socials: dto.footer.socials.map((social, index) => ({
        id: String(index),
        logo: adaptAppImageDTO(social.logo),
        actionButton: adaptActionButtonDTO(social.actionButton),
      })),
    },
  };
};
