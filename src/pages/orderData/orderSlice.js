import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: {},
  orderResp: "",
};

const orderSlice = createSlice({
  name: "orderSlice",
  initialState,
  reducers: {
    FETCH_ORDER_DETAIL: (state, { payload }) => {
      state.order = payload.result;
      state.orderResp = payload.status;
    },
    RESET_ORDER: (state) => {
      state = initialState;
    },
  },
});

const { reducer, actions } = orderSlice;
export const { FETCH_ORDER_DETAIL, RESET_ORDER } = actions;
export default reducer;
