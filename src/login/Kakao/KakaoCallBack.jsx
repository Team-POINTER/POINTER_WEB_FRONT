import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserInfo } from "../../api/auth";
import { getCookie, setTokenToCookie } from "../../function/cookie";
import { useDispatch, useSelector } from "react-redux";
import { setAccessToken, setUserId } from "../../modules/member";
import { AuthService } from "../../service/AuthService";

export const KakaoCallBack = () => {
  const { accessToken, userId } = useSelector((state) => state.member);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (accessToken && userId) {
      dispatch(AuthService.getUserInfo(userId)).then((response) =>
        console.log(JSON.stringify(response))
      );
    }
  }, [accessToken]);

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
          console.log(`Bearer ${access_token}`);
          /* access_token 서버에 전송 */
          axios
            .post(`${process.env.REACT_APP_BASE_URL}auth/login/web`, {
              accessToken: access_token,
            })
            .then((res) => {
              console.log("데이터 성공 : ");
              console.log(res);
              /* 유저 정보 받을 시 home으로 이동 */
              dispatch(setAccessToken(res.data.tokenDto.accessToken));
              dispatch(setUserId(res.data.tokenDto.userId));
              setTokenToCookie(res.data.tokenDto.refreshToken);
              console.log(getCookie("accessToken"));
              navigate("/home");
            });
        } else {
          console.log("access_token 없음");
        }
      });
  }, []);
  return <>로그인 중...</>;
};
