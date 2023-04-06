import { configureStore, createSlice } from "@reduxjs/toolkit";

export const sizeSlice = createSlice({
  name: "size",
  initialState: {
    value: 150,
  },
  reducers: {
    increment: (state) => {
      state.value += 50;
    },
    decrement: (state) => {
      state.value = 150;
    },
  },
});

export default configureStore({
  reducer: {
    size: sizeSlice.reducer,
  },
});
