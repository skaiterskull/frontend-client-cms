import { REQ_PRO_PENDING, REQ_PRO_SUCCESS, REQ_PRO_FAIL } from "./productSlice";
import { getProductByCatId, getProductBySlug } from "../../apis/productApi";

export const fetchProducts = (filter) => async (dispatch) => {
  dispatch(REQ_PRO_PENDING());
  const result = await getProductByCatId(filter);
  if (result) {
    dispatch(REQ_PRO_SUCCESS(result));
  } else {
    dispatch(REQ_PRO_FAIL(result));
  }
};

export const fetchProductBySlug = (filter) => async (dispatch) => {
  dispatch(REQ_PRO_PENDING());
  const result = await getProductBySlug(filter);
  if (result) {
    dispatch(REQ_PRO_SUCCESS(result));
  } else {
    dispatch(REQ_PRO_FAIL(result));
  }
};
