import axios from "axios";

const rootUrl =
  process.env.NODE_ENV === "production"
    ? process.env.ROOT_URL
    : "http://localhost:5000";
const apiUrl = rootUrl + "/api/v2/session";

export const requestNewAccessJwt = async () => {
  try {
    const { data } = await axios.get(apiUrl, {
      headers: { authorization: window.localStorage.getItem("refreshJWT") },
    });
    return data;
  } catch (error) {
    return (
      error?.response?.data || {
        status: "error",
        message: error.message,
      }
    );
  }
};
