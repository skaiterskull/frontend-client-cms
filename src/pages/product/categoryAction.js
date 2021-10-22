import { REQ_CAT_PENDING, REQ_CAT_SUCCESS, REQ_FAIL } from "./categorySlice";
import { getCategory } from "../../apis/categoryApi";

export const fecthCategory = () => async (dispatch) => {
  dispatch(REQ_CAT_PENDING);

  const result = await getCategory();

  if (result) {
    dispatch(REQ_CAT_SUCCESS(result));
  } else {
    dispatch(REQ_FAIL(result));
  }
};
