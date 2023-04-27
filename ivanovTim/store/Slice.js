import { createSlice } from '@reduxjs/toolkit'

export const Slice = createSlice({
  name: 'Lab1',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
  },
})

export const { increment } = Slice.actions

export default Slice.reducer