import type { Themes } from "../../types/theme";

import { savedThemeStorageSchema } from "../../schemas/storageSchemas";
import { selectTheme, setTheme as setThemeAction } from "../../store/themeSlice";
import { useAppDispatch, useAppSelector } from "@shared/store/hooks";
import { useEffect } from "react";

const getSavedThemeStorage = () => {
  const storage = localStorage.getItem("saved-theme");
  if (storage) {
    try {
      const savedThemeStorage = savedThemeStorageSchema.parse(storage);
      return savedThemeStorage;
    } catch (error) {
      console.error(error);
      localStorage.removeItem("saved-theme");
    }
  }

  return undefined;
};

const useTheme = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);

  useEffect(() => {
    if (theme) {
      return;
    }

    let themeSaved = getSavedThemeStorage();
    themeSaved ??= window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

    if (themeSaved) {
      dispatch(setThemeAction({ value: themeSaved, options: { isStorageSave: false } }));
    }
  }, [theme, dispatch]);

  const setTheme = (value: Themes) => {
    dispatch(setThemeAction({ value }));
  };

  return [theme, setTheme] as const;
};
export default useTheme;
