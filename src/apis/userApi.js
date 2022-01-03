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

export const checkPin = async (email) => {
  try {
    const { data } = await axios.post(`${apiUrl}/email-verification`, email);
    return data;
  } catch (error) {
    const { message, status } = error.response.data;
    return {
      status,
      message,
    };
  }
};

export const checkUserForLogin = async (userLoginInfo) => {
  try {
    const { data } = await axios.post(`${apiUrl}/login`, userLoginInfo);
    return data;
  } catch (error) {
    return (
      error.response?.data || {
        status: "error",
        message: error.message,
      }
    );
  }
};

export const findUserByEmail = async (email) => {
  try {
    const result = await axios.get(`${apiUrl}/${email}`);
  } catch (error) {
    return (
      error.response?.data || {
        status: "error",
        message: error.message,
      }
    );
  }
};

export const findUserByToken = async () => {
  try {
    const { data } = await axios.get(apiUrl, {
      headers: { authorization: window.sessionStorage.getItem("accessJWT") },
    });
    return data;
  } catch (error) {
    return (
      error.response?.data || {
        status: "error",
        message: error.message,
      }
    );
  }
};

export const updateUserPassword = async (object) => {
  try {
    const { data } = await axios.put(apiUrl, object);
    return data;
  } catch (error) {
    return (
      error.response?.data || {
        status: "error",
        message: error.message,
      }
    );
  }
};

export const editUserProfile = async (object) => {
  try {
    const { data } = await axios.patch(apiUrl, object, {
      headers: { authorization: window.sessionStorage.getItem("accessJWT") },
    });
    return data;
  } catch (error) {
    return (
      error.response?.data || {
        status: "error",
        message: error.message,
      }
    );
  }
};
