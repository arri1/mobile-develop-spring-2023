import { configureStore } from '@reduxjs/toolkit'
import stateReducer from './slice/stateSlice'

export const store = configureStore({
    reducer: {
        state: stateReducer,
    },
})
