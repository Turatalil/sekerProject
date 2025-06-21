import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchInitialProducts = createAsyncThunk(
  'initial/fetchInitialProducts',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch('http://43.204.218.113/api/v1/user-page/product/?limit=10&offset=0');
      const data = await res.json();
      return {
        products: data.results || [],
        totalCount: data.count || 0,  // APIден жалпы санды алуу (count болуш керек)
      };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const initialSlice = createSlice({
  name: 'initial',
  initialState: {
    products: [],
    totalCount: 0,
    status: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInitialProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchInitialProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload.products;
        state.totalCount = action.payload.totalCount;
      })
      .addCase(fetchInitialProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default initialSlice.reducer;
