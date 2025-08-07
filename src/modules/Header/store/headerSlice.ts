import type { RootState } from "@shared/store/store";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type HeaderState = {
  height: number | null;
};

const initialState: HeaderState = {
  height: null,
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setHeaderHeight: (state, action: PayloadAction<number>) => {
      state.height = action.payload;
    },
  },
});

export const { setHeaderHeight } = headerSlice.actions;
export const selectHeaderHeight = (state: RootState) => state.header.height;
export const headerReducer = headerSlice.reducer;
