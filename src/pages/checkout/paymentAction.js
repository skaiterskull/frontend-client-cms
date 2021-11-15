import { getAllPaymentOptions } from "../../apis/paymentApi";
import { userLogout } from "../userData/userAction";
import { FETCH_PAYOPT_SUCCESS } from "./paymentSlice";
import { requestNewAccessJwt } from "../../apis/sessionApi";

export const fetchAllPaymentOptions = () => async (dispatch) => {
  const result = await getAllPaymentOptions();
  if (result.message === "JWT expired") {
    const result = await requestNewAccessJwt();
    if (result?.token) {
      window.sessionStorage.setItem("accessJWT", result.token);
      return dispatch(fetchAllPaymentOptions());
    }
  }

  if (result.status === "success") {
    return dispatch(FETCH_PAYOPT_SUCCESS(result));
  }

  dispatch(userLogout());
};
