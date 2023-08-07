import axios from "axios";
import { getCookie } from "../function/cookie";

export const getRoomList = (keyword) => {
  return axios.get(`${process.env.REACT_APP_BASE_URL}/room?kwd=` + keyword, {
    headers: {
      Authorization: "Bearer " + getCookie("refreshToken"),
    },
  });
};
