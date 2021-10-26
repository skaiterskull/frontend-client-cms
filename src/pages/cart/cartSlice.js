import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    REQ_ADD_CART: (state, { payload }) => {
      if (state.cartList.length) {
        const arg = state.cartList?.filter((row) => row._id !== payload._id);
        state.cartList = [...arg, payload];
      } else {
        state.cartList.push(payload);
      }
    },
    REQ_UPDATE_QTY: (state, { payload: { _id, qty } }) => {
      if (qty < 1) return;

      if (state.cartList.length) {
        const arg = state.cartList?.map((row) => {
          if (row._id === _id) {
            row.qty = qty;
          }
          return row;
        });
        state.cartList = arg;
      }
    },
  },
});

const { reducer, actions } = cartSlice;
export const { REQ_ADD_CART, REQ_UPDATE_QTY } = actions;
export default reducer;
