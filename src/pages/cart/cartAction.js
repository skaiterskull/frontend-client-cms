import { REQ_ADD_CART } from "./cartSlice";

export const addDataToCart = (obj) => (dispatch) => {
  dispatch(REQ_ADD_CART(obj));
};
