import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { headerSlice } from "./slices/Header";

const rootSlices = combineSlices({
    header: headerSlice.reducer
})

export const store = configureStore({reducer: rootSlices})