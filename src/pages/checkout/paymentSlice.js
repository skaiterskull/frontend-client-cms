import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  payOpt: [],
};

const paymentSlice = createSlice({
  name: "paymentSlice",
  initialState,
  reducers: {
    FETCH_PAYOPT_SUCCESS: (state, { payload = [] }) => {
      state.payOpt = payload.result;
    },
  },
});

const { reducer, actions } = paymentSlice;
export const { FETCH_PAYOPT_SUCCESS } = actions;
export default reducer;
