import axios from "axios";
import { getCookie, setTokenToCookie } from "../function/cookie";

const refreshToken = getCookie("refreshToken");

export const kakaoLogin = (dto) => {
  console.log("카카오 로그인 시도: 보낸 dto" + JSON.stringify(dto));
  return axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login/web`, dto);
};

// 토큰재발행

export const getUserInfo = () => {
  return axios.get(`${process.env.REACT_APP_BASE_URL}/users/info`, {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });
};

export const getAccessToken = () => {
  return axios
    .post(
      `${process.env.REACT_APP_BASE_URL}/user/reissue`,
      {},
      {
        headers: {
          Authorization: "Bearer " + getCookie("refreshToken"),
        },
      }
    )
    .then((res) => {
      setTokenToCookie(res.data.tokenDto.refreshToken);
      return res.data.tokenDto;
    });
};
