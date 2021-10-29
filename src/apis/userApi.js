import axios from "axios";

const rootUrl =
  process.env.NODE_ENV === "production"
    ? process.env.ROOT_URL
    : "http://localhost:5000";
const apiUrl = rootUrl + "/api/v2/user";

export const addNewUser = async (newUser) => {
  try {
    const { data } = await axios.post(apiUrl, newUser);
    return data;
  } catch (error) {
    const { message, status } = error.response.data;
    return {
      status,
      message,
    };
  }
};
