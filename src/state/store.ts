import { configureStore, } from '@reduxjs/toolkit';
import countSlice from './count.slice';

export const appStore = configureStore({
    reducer: {
        countReducer: countSlice,
    },
});

