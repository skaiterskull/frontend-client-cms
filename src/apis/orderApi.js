import axios from "axios";

const rootUrl =
  process.env.NODE_ENV === "production"
    ? process.env.ROOT_URL
    : "http://localhost:5000";
const apiUrl = rootUrl + "/api/v2/order";

export const addOrder = async (obj) => {
  try {
    const { data } = await axios.post(apiUrl, obj, {
      headers: { authorization: window.sessionStorage.getItem("accessJWT") },
    });
    return data;
  } catch (error) {
    const { message, status } = error.response.data;
    return {
      status,
      message,
    };
  }
};
