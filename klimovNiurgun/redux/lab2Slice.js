import { createSlice } from '@reduxjs/toolkit'

export const lab2Slice = createSlice({
  name: 'l2',
  initialState: {
    text: "Lorem ipsum",
    reversedText: "muspi meroL",
  },
  reducers: {
    newText: (state, action) => {
        state.text = action.payload
    },
    newReversedText: (state, action) => {
        state.reversedText = action.payload
    },
  },
})

export const { newText, newReversedText } = lab2Slice.actions

export default lab2Slice.reducer
