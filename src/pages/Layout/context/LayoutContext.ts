import type { AppImage } from "@shared/entities/appImage/appImage";
import type { ActionButton } from "@shared/entities/actionButton/actionButton";
import { createContextFactory } from "@shared/utils/createContextFactory";

type Layout = {
  logo?: {
    image: AppImage;
    actionButton: ActionButton;
  };
};

const [useLayoutContext, LayoutContextProvider] = createContextFactory<Layout>();
export { useLayoutContext, LayoutContextProvider };
