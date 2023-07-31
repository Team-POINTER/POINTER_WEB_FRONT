import axios from "axios";
import { getCookie } from "../function/cookie";

const refreshToken = getCookie("refreshToken");

export const kakaoLogin = (dto) => {
  console.log("카카오 로그인 시도: 보낸 dto" + JSON.stringify(dto));
  return axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login/web`, dto);
};

export const getUserInfo = () => {
  return axios.get(`${process.env.REACT_APP_BASE_URL}/users/info`, {
    headers: {
      Authorization: `Bearer Token ${refreshToken}`,
    },
  });
};
