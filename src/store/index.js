import { configureStore } from "@reduxjs/toolkit";
import { combineSlices } from "@reduxjs/toolkit";
import { loginIsAccountSlice } from "./slices/LoginIsAccountSlice";
import initialReducer from "./slices/initialProductsSlice"
import moreReducer from './slices/loadMoreProductsSlice';


const rootSlices = combineSlices({
    login: loginIsAccountSlice.reducer,
    more: moreReducer,
    initial:initialReducer,
   
})

export const store = configureStore({reducer: rootSlices});
