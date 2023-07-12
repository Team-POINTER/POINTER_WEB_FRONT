import axios from "axios";
import React, { useEffect } from "react";

export const KakaoCallBack = () => {

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
            "Content-Type":"application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
      .then((res) => {
        console.log(res);
        const { data } = res;
        const { access_token, refresh_token } = data;
        if(access_token) {
          console.log(`Bearer ${access_token}`);
          /* access_token 서버에 전송 */
          axios
            .post(
              `https://kapi.kakao.com/v2/user/me`,
              {},
              {
                headers: {
                  Authorization: `Bearer ${access_token}`,
                  "Content-type": "application/x-www-form-urlencoded;charset=utf-8"
                },
              }   
            )
            .then((res) => {
              console.log("데이터 성공 : ");
              console.log(res);
            })
        } else {
          console.log("access_token 없음");
        }
      });
  },[]);
  return <>로그인 중...</>
};