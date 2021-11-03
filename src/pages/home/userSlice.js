import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  loggedInUser: {},
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    LOGIN_SUCCESS: (state, { payload }) => {
      state.loggedInUser = payload;
      console.log(payload);
      state.isLoggedIn = true;
    },
  },
});

const { reducer, actions } = userSlice;
export const { LOGIN_SUCCESS } = actions;
export default reducer;
