import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@shared/store/store";

import { createSelector, createSlice } from "@reduxjs/toolkit";
import { startAppListening } from "../listenerMiddleware";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export type LoadingPageState = {
  requests: Record<string, boolean> | null;
  isLoadingResources: boolean;
};

const initialState: LoadingPageState = {
  requests: null,
  isLoadingResources: false,
};

export const loadingPageSlice = createSlice({
  name: "loadingPage",
  initialState,
  reducers: {
    updateLoadingRequest: (state, action: PayloadAction<[string, boolean]>) => {
      const [id, isLoading] = action.payload;
      const requests = state.requests !== null ? state.requests : {};

      if (isLoading === false) {
        delete requests[id];
      } else {
        requests[id] = true;
      }

      state.requests = requests;
    },
    updateLoadingResources: (state, action: PayloadAction<boolean>) => {
      state.isLoadingResources = action.payload;
    },
  },
});

export const selectIsLoadingRequests = createSelector(
  (state: RootState) => state.loadingPage,
  (state) => (state.requests !== null ? Object.keys(state.requests).length > 0 : true),
);

export const selectIsLoading = createSelector(
  (state: RootState) => state.loadingPage,
  (state) => {
    if (state.requests === null || state.isLoadingResources) {
      return true;
    }

    return Object.keys(state.requests).length > 0;
  },
);

export const { updateLoadingRequest, updateLoadingResources } = loadingPageSlice.actions;
export const loadingPageReducer = loadingPageSlice.reducer;

startAppListening({
  actionCreator: updateLoadingRequest,
  effect: (_, listenerApi) => {
    const state = listenerApi.getState();
    if (selectIsLoading(state)) {
      return;
    }

    ScrollTrigger.refresh();
  },
});
