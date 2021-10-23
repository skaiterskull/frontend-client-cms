import axios from "axios";

const rootUrl =
  process.env.NODE_ENV === "production"
    ? process.env.ROOT_URL
    : "http://localhost:8000";
const apiUrl = rootUrl + "/api/v2/product";

export const getProduct = async (catId) => {
  const { data } = await axios.get(`${apiUrl}/${catId}`);
  return data;
};
