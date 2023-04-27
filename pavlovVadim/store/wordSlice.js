import {createSlice} from '@reduxjs/toolkit';

const wordSlice = createSlice({
  name: 'word',
  initialState: {
    word: '777',
  },
  reducers: {
    editWord(state, action) {
      state.word = action.payload;
    },
  },
});
export const {editWord} = wordSlice.actions;

export default wordSlice.reducer;
