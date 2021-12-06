import { addOrder } from "../../apis/orderApi";
import { requestNewAccessJwt } from "../../apis/sessionApi";

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
    return console.log(result);
  }
};
