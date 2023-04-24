import { createSlice } from '@reduxjs/toolkit'
import {DEFAULT_MODE, DARK_MODE} from '../../Components/Lab5/DarkModeConstStates'
export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: {
    value: 'DEFAULT_MODE'
  },
  reducers: {
    darkMode: state => {
      state.value = DARK_MODE
    },
    defaultMode: state => {
      state.value = DEFAULT_MODE
    }
  }
})

// Action creators are generated for each case reducer function
export const { defaultMode, darkMode } = darkModeSlice.actions

export default darkModeSlice.reducer