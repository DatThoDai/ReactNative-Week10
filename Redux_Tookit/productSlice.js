import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch('https://67126da56c5f5ced66237d06.mockapi.io/tasks');
    const data = await response.json();
    return data;
  }
);

export const addToCart = createAsyncThunk(
  'products/addToCart',
  async (product) => {
    const response = await fetch('https://67126da56c5f5ced66237d06.mockapi.io/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    const data = await response.json();
    return data;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  }
});

export default productSlice.reducer;