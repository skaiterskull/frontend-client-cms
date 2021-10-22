import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPending: false,
  categories: [],
};

const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    REQ_CAT_PENDING: (state) => {
      state.isPending = true;
    },

    REQ_CAT_SUCCESS: (state, { payload = [] }) => {
      state.isPending = false;
      state.categories = payload.result;
    },

    REQ_FAIL: (state) => {
      state.isPending = false;
    },
  },
});

const { reducer, actions } = categorySlice;
export const { REQ_CAT_PENDING, REQ_CAT_SUCCESS, REQ_FAIL } = actions;
export default reducer;
