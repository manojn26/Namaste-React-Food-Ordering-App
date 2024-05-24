import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((val) => val?.id !== action.payload);
    },
  },
});

/*
cartSlice is a big object it contains
  reducer:reducers,
  actions:{
    addItem,
    removeItem,
    clearItem
  }
*/
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
