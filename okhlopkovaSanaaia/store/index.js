import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import axios from "axios";

export const getFacts = createAsyncThunk("cat/getFacts", async () => {
  const {
    data: { data },
  } = await axios.get(`https://catfact.ninja/facts`);
  return data;
});

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const catSlice = createSlice({
  name: "cat",
  initialState: {
    facts: [],
    factsLoading: false,
  },
  reducers: {},
  extraReducers: {
    [getFacts.fulfilled.type]: (state, { payload }) => {
      state.facts = payload;
    },
    [getFacts.rejected.type]: (state, { payload }) => {},
    [getFacts.pending.type]: (state, { payload }) => {},
  },
});



export default configureStore({
  reducer: {
    counter: counterSlice.reducer,
    cat: catSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: thunk,
    }),
});
