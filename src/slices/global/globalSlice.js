import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rerender: 0,
};

const globalSlice = createSlice({
  initialState,
  name: "global",
  reducers: {
    setRerender(state) {
      state.rerender = state.rerender + 1;
    },
  },
});

export const selectRerender = (state) => state.global.rerender;

export const { setRerender } = globalSlice.actions;

export default globalSlice.reducer;
