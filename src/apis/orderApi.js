import axios from "axios";

const rootUrl =
  process.env.NODE_ENV === "production"
    ? process.env.ROOT_URL
    : "http://localhost:5000";
const apiUrl = rootUrl + "/api/v2/order";

export const addOrder = async (obj) => {
  const { data } = await axios.post(apiUrl, obj, {
    headers: { authorization: window.sessionStorage.getItem("accessJWT") },
  });
  return data;
};
