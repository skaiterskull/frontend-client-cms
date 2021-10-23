import { REQ_PRO_PENDING, REQ_PRO_SUCCESS, REQ_PRO_FAIL } from "./productSlice";
import { getProduct } from "../../apis/productApi";

export const fetchProducts = (catId) => async (dispatch) => {
  dispatch(REQ_PRO_PENDING());
  const result = await getProduct(catId);
  if (result) {
    dispatch(REQ_PRO_SUCCESS(result));
  } else {
    dispatch(REQ_PRO_FAIL(result));
  }
};
