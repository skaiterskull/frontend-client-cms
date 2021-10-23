import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPending: false,
  productList: [],
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    REQ_PRO_PENDING: (state) => {
      state.isPending = true;
    },

    REQ_PRO_SUCCESS: (state, { payload = [] }) => {
      state.isPending = false;
      state.productList = payload.result;
    },

    REQ_PRO_FAIL: (state) => {
      state.isPending = false;
    },
  },
});

const { reducer, actions } = productSlice;
export const { REQ_PRO_PENDING, REQ_PRO_SUCCESS, REQ_PRO_FAIL } = actions;
export default reducer;
