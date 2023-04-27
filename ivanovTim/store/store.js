import { configureStore } from '@reduxjs/toolkit';
import Reducer from './Slice'


const store = configureStore({
    reducer: {
        Lab1: Reducer,
    },
});

export default store;