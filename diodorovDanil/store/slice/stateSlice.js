import { createSlice } from '@reduxjs/toolkit'

const initialState = 0

const state = createSlice({
    name: 'state',
    initialState,
    reducers: {
        increment: (state) => {
            return (state += 1)
        },
        decrement: (state) => {
            return (state -= 1)
        },
        add100: (state) => {
            return (state += 100)
        },
        remove100: (state) => {
            return (state -= 100)
        },
    },
})

export const { increment, decrement, add100, remove100 } = state.actions

export default state.reducer
