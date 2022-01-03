import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  serverResp: {},
  loggedInUser: {},
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    LOGIN_SUCCESS: (state) => {
      state.isLoggedIn = true;
    },

    LOGIN_FAILED: (state, { payload }) => {
      state.serverResp = payload;
    },

    FETCH_USER_SUCCESS: (state, { payload }) => {
      state.loggedInUser = payload.result;
    },

    UPDATE_PROFILE_SUCCESS: (state, { payload }) => {
      if (payload.result) {
        state.loggedInUser = payload.result;
      }
    },

    AUTOLOGIN_SUCCESS: (state) => {
      state.isLoggedIn = true;
    },

    LOGOUT_SUCCESS: (state) => {
      state.isLoggedIn = false;
      state.serverResp = {};
      state.loggedInUser = {};
    },
  },
});

const { reducer, actions } = userSlice;
export const {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  FETCH_USER_SUCCESS,
  UPDATE_PROFILE_SUCCESS,
  LOGOUT_SUCCESS,
  AUTOLOGIN_SUCCESS,
} = actions;
export default reducer;
