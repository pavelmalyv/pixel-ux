import { api } from "./api";
import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "@modules/ThemeSwitch";
import { listenerMiddleware } from "./listenerMiddleware";
import { loadingPageReducer } from "./loadingPageSlice/loadingPageSlice";
import { headerReducer } from "@modules/Header";

export const store = configureStore({
  reducer: {
    loadingPage: loadingPageReducer,
    theme: themeReducer,
    header: headerReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(listenerMiddleware.middleware).concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
