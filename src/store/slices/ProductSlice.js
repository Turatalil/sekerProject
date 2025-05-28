import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async (url = "http://43.204.218.113/api/v1/user-page/product/?limit=10&offset=0") => {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }
);

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        next: null,
        status: "idle",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = [...state.items, ...action.payload.results];
                state.next = action.payload.next;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = "failed";
            });
    },
});
