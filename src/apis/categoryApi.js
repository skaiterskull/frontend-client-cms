import axios from "axios";

const rootUrl =
  process.env.NODE_ENV === "production"
    ? process.env.ROOT_URL
    : "http://localhost:8000";
const apiUrl = rootUrl + "/api/v2/category";

export const getCategory = async () => {
  const { data } = await axios.get(apiUrl);
  return data;
};
