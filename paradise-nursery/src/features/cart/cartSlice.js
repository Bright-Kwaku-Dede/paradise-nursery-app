// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {}, // Using an object for easier lookup
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, name, cost, image } = action.payload;
      if (state.items[id]) {
        state.items[id].quantity += 1;
      } else {
        state.items[id] = { name, cost, image, quantity: 1 };
      }
    },
    incrementQuantity: (state, action) => {
      const { id } = action.payload;
      if (state.items[id]) {
        state.items[id].quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const { id } = action.payload;
      if (state.items[id] && state.items[id].quantity > 1) {
        state.items[id].quantity -= 1;
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      delete state.items[id];
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;