import axios from "axios";

export const getUserInfo = (userId) => {
  return axios.get(
    `${process.env.REACT_APP_BASE_URL}users/${userId}/info`,
    null,
    {
      headers: {},
    }
  );
};
