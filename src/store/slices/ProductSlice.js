import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Бардык продуктыларды алуу
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (
    url = "http://43.204.218.113/api/v1/user-page/product/?limit=10&offset=0"
  ) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }
);

// Белгилүү бир продуктуну ID боюнча алуу
export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id) => {
    const res = await fetch(`http://43.204.218.113/api/v1/user-page/product/${id}/`);
    const data = await res.json();
    return data;
  }
);

// Slice түзүү
export const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    next: null,
    status: "idle", // жалпы продуктылар үчүн
    selectedProduct: null,
    selectedProductStatus: "idle", // тандаган продукт үчүн
  },
  reducers: {
    // Тандалган продуктуну тазалоо
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
      state.selectedProductStatus = "idle";
    },
    // Продуктту кол менен белгилөө (мисалы, локалдык тизмеден тапканда)
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
      state.selectedProductStatus = "succeeded";
    },
  },
  extraReducers: (builder) => {
    builder
      // fetchProducts
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
      })

      // fetchProductById
      .addCase(fetchProductById.pending, (state) => {
        state.selectedProductStatus = "loading";
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.selectedProductStatus = "succeeded";
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state) => {
        state.selectedProductStatus = "failed";
      });
  },
});

// Экспорттор
export const { clearSelectedProduct, setSelectedProduct } = productsSlice.actions;
export default productsSlice.reducer;
