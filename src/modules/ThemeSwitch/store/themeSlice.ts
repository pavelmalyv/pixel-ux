import type { RootState } from "@shared/store/store";
import type { Themes } from "../types/theme";

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { startAppListening } from "@shared/store/listenerMiddleware";

export type ThemeState = {
  value: Themes | null;
};

const initialState: ThemeState = {
  value: null,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (
      state,
      action: PayloadAction<{ value: Themes; options?: { isStorageSave?: boolean } }>,
    ) => {
      state.value = action.payload.value;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export const selectTheme = (state: RootState) => state.theme.value;
export const themeReducer = themeSlice.reducer;

startAppListening({
  actionCreator: setTheme,
  effect: (action) => {
    const theme = action.payload.value;

    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-theme-changing", theme);
    requestAnimationFrame(() => {
      document.documentElement.removeAttribute("data-theme-changing");
    });

    if (action.payload.options?.isStorageSave !== false) {
      localStorage.setItem("saved-theme", theme);
    }
  },
});
