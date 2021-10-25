import axios from "axios";

const rootUrl =
  process.env.NODE_ENV === "production"
    ? process.env.ROOT_URL
    : "http://localhost:5000";
const apiUrl = rootUrl + "/api/v2/product";

export const getProductByCatId = async (catId) => {
  const { data } = await axios.get(`${apiUrl}/${catId}`);
  return data;
};

export const getProductBySlug = async (slug) => {
  const { data } = await axios.get(`${apiUrl}/get/${slug}`);
  return data;
};
