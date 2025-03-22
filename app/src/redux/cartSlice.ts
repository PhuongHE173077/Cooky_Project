import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosCustomize from '../services/axiosCustomiz';
const initialState = {
  cart: null
};


export const fetchCart = createAsyncThunk(
  'cart/fetchCartAPIs',
  async () => {
    return await axiosCustomize.get('api/v1/carts')
  }
)
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action: any) => {
      state.cart = action.payload
    })
  }
});

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
