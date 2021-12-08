import { toast } from "react-toastify";
import { addOrder } from "../../apis/orderApi";
import { requestNewAccessJwt } from "../../apis/sessionApi";
import { FETCH_ORDER_DETAIL } from "./orderSlice";

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
    return dispatch(FETCH_ORDER_DETAIL(result));
  } else {
    toast.error(result.message);
  }
};
