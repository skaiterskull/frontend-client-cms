import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: {},
  userOrder: [],
  orderResp: "",
};

const orderSlice = createSlice({
  name: "orderSlice",
  initialState,
  reducers: {
    ORDER_PLACED_SUCCESS: (state, { payload }) => {
      state.order = payload.result;
      state.orderResp = payload.status;
    },
    FETCH_USER_ORDER_SUCCESS: (state, { payload }) => {
      state.userOrder = payload.result;
    },
    RESET_ORDER: (state) => {
      state.order = "";
      state.orderResp = "";
    },
  },
});

const { reducer, actions } = orderSlice;
export const { ORDER_PLACED_SUCCESS, FETCH_USER_ORDER_SUCCESS, RESET_ORDER } =
  actions;
export default reducer;
