import { toast } from "react-toastify";
import { addOrder, getOrder } from "../../apis/orderApi";
import { requestNewAccessJwt } from "../../apis/sessionApi";
import { ORDER_PLACED_SUCCESS, FETCH_USER_ORDER_SUCCESS } from "./orderSlice";

export const sendOrder = (obj) => async (dispatch) => {
  const result = await addOrder(obj);
  if (result.message === "JWT expired") {
    const result = await requestNewAccessJwt();
    if (result?.token) {
      window.sessionStorage.setItem("accessJWT", result.token);
      return dispatch(sendOrder(obj));
    }
  }

  if (result.status === "success") {
    return dispatch(ORDER_PLACED_SUCCESS(result));
  } else {
    toast.error(result.message);
  }
};

export const fetchOrder = (email) => async (dispatch) => {
  const result = await getOrder(email);
  if (result.message === "JWT expired") {
    const result = await requestNewAccessJwt();
    if (result?.token) {
      window.sessionStorage.setItem("accessJWT", result.token);
      return dispatch(fetchOrder(email));
    }
  }

  if (result.status === "success") {
    return dispatch(FETCH_USER_ORDER_SUCCESS(result));
  } else {
    toast.error(result.message);
  }
};
