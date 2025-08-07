import type { ActionButtonDTO } from "@shared/entities/actionButton/actionButton";
import type { AppImageDTO } from "@shared/entities/appImage/appImage";
import type { AppMenuDTO } from "@shared/entities/appMenu/appMenu";

export type LayoutDTO = {
  siteSettings: {
    logo: {
      actionButton: ActionButtonDTO;
      image: AppImageDTO;
    };
  };
  header: {
    actionButtonPrimary: ActionButtonDTO;
    actionButtonSecondary: ActionButtonDTO;
    menu: AppMenuDTO;
  };
  footer: {
    callActionText: string;
    developer: string;
    menu: AppMenuDTO;
    socials: {
      logo: AppImageDTO;
      actionButton: ActionButtonDTO;
    }[];
  };
};
