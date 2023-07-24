import axios from "axios";
import { getCookie } from "../function/cookie";

export const getRoomList = () => {
  return axios.get(`${process.env.REACT_APP_BASE_URL}room`, {
    headers: {
      Authorization: "Bearer Token " + getCookie("refreshToken"),
    },
  });
};
