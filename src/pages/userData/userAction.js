import { checkUserForLogin, findUserByToken } from "../../apis/userApi";
import { requestNewAccessJwt } from "../../apis/sessionApi";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  FETCH_USER_SUCCESS,
  LOGOUT_SUCCESS,
  AUTOLOGIN_SUCCESS,
} from "./userSlice";

export const userLogin = (userData) => async (dispatch) => {
  const result = await checkUserForLogin(userData);
  if (result.status === "success") {
    window.localStorage.setItem("refreshJWT", result.token.refreshJwt);
    window.sessionStorage.setItem("accessJWT", result.token.accessJwt);
    dispatch(LOGIN_SUCCESS());
    dispatch(fetchUserInfo());
  } else {
    dispatch(LOGIN_FAILED(result));
  }
};

//PRIVATE API
export const fetchUserInfo = () => async (dispatch) => {
  const result = await findUserByToken();
  // todo handle on jwt exp
  if (result.message === "JWT expired") {
    const result = await requestNewAccessJwt();
    if (result?.token) {
      window.sessionStorage.setItem("accessJWT", result.token);
      return dispatch(fetchUserInfo());
    }
  }
  if (result.status === "success") {
    return dispatch(FETCH_USER_SUCCESS(result));
  }

  dispatch(userLogout());
};

//PRIVATE API
export const autoLogin = () => async (dispatch) => {
  const refreshJWT = window.localStorage.getItem("refreshJWT");
  const accessJWT = window.sessionStorage.getItem("accessJWT");

  if (refreshJWT && accessJWT) {
    dispatch(AUTOLOGIN_SUCCESS());
    dispatch(fetchUserInfo());
  }

  if (!accessJWT && refreshJWT) {
    const result = await requestNewAccessJwt();
    if (result?.token) {
      window.sessionStorage.setItem("accessJWT", result.token);
      dispatch(AUTOLOGIN_SUCCESS());
      dispatch(fetchUserInfo());
    } else {
      dispatch(userLogout());
    }
  }
};

export const userLogout = () => (dispatch) => {
  window.localStorage.removeItem("refreshJWT");
  window.sessionStorage.removeItem("accessJWT");
  dispatch(LOGOUT_SUCCESS());
};
