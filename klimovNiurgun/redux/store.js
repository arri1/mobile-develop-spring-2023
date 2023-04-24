import { configureStore } from '@reduxjs/toolkit'
import lab1Reducer from './lab1Slice'
import lab2Reducer from './lab2Slice'

export default configureStore({
  reducer: {
    lab1: lab1Reducer,
    lab2: lab2Reducer,
  },
})