import { configureStore } from "@reduxjs/toolkit";
import { combineSlices } from "@reduxjs/toolkit";
import { loginIsAccountSlice } from "./slices/LoginIsAccountSlice";
import { productsSlice } from "./slices/ProductSlice";

const rootSlices = combineSlices({
    login: loginIsAccountSlice.reducer,
    product: productsSlice.reducer,
})

export const store = configureStore({reducer: rootSlices});
