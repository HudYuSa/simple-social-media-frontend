import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rerender: 0,
  createPostPopUp: false,
};

const globalSlice = createSlice({
  initialState,
  name: "global",
  reducers: {
    setRerender(state) {
      state.rerender = state.rerender + 1;
    },
    setCreatePostPopUp(state) {
      state.createPostPopUp = true;
    },
    removeCreatePostPopUp(state) {
      state.createPostPopUp = false;
    },
  },
});

export const selectRerender = (state) => state.global.rerender;
export const selectCreatePostPopUp = (state) => state.global.createPostPopUp;

export const { setRerender, setCreatePostPopUp, removeCreatePostPopUp } =
  globalSlice.actions;

export default globalSlice.reducer;
