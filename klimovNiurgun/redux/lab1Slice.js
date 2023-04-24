import { createSlice } from '@reduxjs/toolkit'

export const lab1Slice = createSlice({
  name: 'l1',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
  },
})

export const { increment } = lab1Slice.actions

export default lab1Slice.reducer