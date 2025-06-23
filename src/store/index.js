import { configureStore } from "@reduxjs/toolkit";
import { combineSlices } from "@reduxjs/toolkit";
import { headerSlice } from "./slices/Header";
import { loginIsAccountSlice } from "./slices/LoginIsAccountSlice";
import { productsSlice } from "./slices/ProductSlice";

const rootSlices = combineSlices({
    header: headerSlice.reducer,
    login: loginIsAccountSlice.reducer,
    product: productsSlice.reducer,
});

export const store = configureStore({
    reducer: rootSlices,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production",
});


