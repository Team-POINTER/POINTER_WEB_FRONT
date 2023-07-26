import axios from "axios";
import { getCookie } from "../function/cookie";

export const getUserInfo = (userId) => {
  return axios.get(`${process.env.REACT_APP_BASE_URL}/users/${userId}/info`, {
    headers: {
      Authorization: "Bearer " + getCookie("refreshToken"),
    },
  });
};
