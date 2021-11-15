import axios from "axios";

const rootUrl =
  process.env.NODE_ENV === "production"
    ? process.env.ROOT_URL
    : "http://localhost:5000";
const apiUrl = rootUrl + "/api/v2/paymentOpt";

export const getAllPaymentOptions = async () => {
  const { data } = await axios.get(apiUrl, {
    headers: { authorization: window.sessionStorage.getItem("accessJWT") },
  });
  return data;
};
