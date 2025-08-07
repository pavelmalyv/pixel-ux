import type { ActionButton } from "@shared/entities/actionButton/actionButton";
import { createContextFactory } from "@shared/utils/createContextFactory";

type HeaderContext = {
  menu: {
    id: string;
    actionButton: ActionButton;
  }[];
};

const [useHeaderContext, HeaderContextProvider] = createContextFactory<HeaderContext>();
export { useHeaderContext, HeaderContextProvider };
