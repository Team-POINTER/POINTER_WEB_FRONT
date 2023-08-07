import axios from "axios";
import React, { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import { getUserInfo } from "../../api/auth";
import { getCookie, setTokenToCookie } from "../../function/cookie";
import { useDispatch, useSelector } from "react-redux";
import { setAccessToken, setUserId } from "../../modules/member";
import { AuthService } from "../../service/AuthService";

export const KakaoCallBack = () => {
  const { accessToken, userId } = useSelector((state) => state.member);
  const [token, setToken] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get("code");
    const grant_type = "authorization_code";
    const client_id = process.env.REACT_APP_REST_API_KEY;
    const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

    axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${REDIRECT_URI}&code=${code}`,
        {},
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
      .then((res) => {
        console.log(res);
        const { data } = res;
        const { access_token, refresh_token } = data;
        if (access_token) {
          setToken(access_token);
        } else {
          console.log("access_token 없음");
        }
      });
  }, []);

  useEffect(() => {
    if (token) {
      console.log(`Bearer ${token}`);
      /* access_token 서버에 전송 */
      const dto = { accessToken: token };
      dispatch(AuthService.kakaoLogin(dto)).then((res) => {
        console.log("데이터 성공 : " + JSON.stringify(res));
        setToken(null);
      });
    }
  }, [token]);

  useEffect(() => {
    if (accessToken) navigate("/home");
  }, [accessToken]);

  return <>로그인 중...</>;
};
