import { type } from '@mui/lab/themeAugmentation';
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
export const addCart = createAsyncThunk(
  'cart/addCartAPIs',
  async ({ data, optionCart }: any) => {
    return await axiosCustomize.put('api/v1/carts', { data: data, optionCart: optionCart })
  }
)

export const updateQuanityCart = createAsyncThunk(
  'cart/updateQuanityCartAPIs',
  async ({ itemId, type }: any) => {
    return await axiosCustomize.put('api/v1/carts/quantity', { itemId: itemId, type: type })
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
    }),
      builder.addCase(addCart.fulfilled, (state, action: any) => {
        state.cart = action.payload
      }),
      builder.addCase(updateQuanityCart.fulfilled, (state, action: any) => {
        state.cart = action.payload
      })
  }
});

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
