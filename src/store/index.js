import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";
import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { headerSlice } from "./slices/Header";
import { loginIsAccountSlice } from "./slices/LoginIsAccountSlice";

const rootSlices = combineSlices({
    header: headerSlice.reducer,
    login: loginIsAccountSlice.reducer,
})

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
