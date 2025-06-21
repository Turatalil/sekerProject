import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMoreProducts = createAsyncThunk(
  'more/fetchMoreProducts',
  async (offset, { rejectWithValue }) => {
    try {
      const url = `http://43.204.218.113/api/v1/user-page/product/?limit=10&offset=${offset}`;
      const res = await fetch(url);
      const data = await res.json();
      return {
        products: data.results || [],
        totalCount: data.count || 0,
      };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const moreSlice = createSlice({
  name: 'more',
  initialState: {
    products: [],
    status: 'idle',
    error: null,
    offset: 10,
    totalCount: 0,
  },
  reducers: {
    incrementOffset: (state) => {
      state.offset += 10;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoreProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMoreProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = [...state.products, ...action.payload.products];
        state.totalCount = action.payload.totalCount;  // жаңыртуу
      })
      .addCase(fetchMoreProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { incrementOffset } = moreSlice.actions;
export default moreSlice.reducer;
