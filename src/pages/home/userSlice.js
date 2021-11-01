import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    LOGIN_SUCCESS: (state) => {
      state.isLoggedIn = true;
    },
  },
});

const { reducer, actions } = userSlice;
export const { LOGIN_SUCCESS } = actions;
export default reducer;
