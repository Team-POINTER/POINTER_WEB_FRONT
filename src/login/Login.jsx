import React, { useEffect } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  /* REST api 방식 */
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}
  `;

  const navigate = useNavigate();
  const handleClick = () => {
    window.location.href = kakaoURL;
    // const code = new URL(kakaoURL).searchParams.get("code");
    // console.log(code);

    // console.log(kakaoURL);
    // // console.log(code);

    // navigate("/home");
  };
  return (
    <div className={styles.container}>
      <img
        src="./img/Login_logo.png"
        alt="포인터 로고"
        className={styles.logo}
      />
      <button onClick={handleClick} className={styles.btn}>
        <img
          src="./img/kakao_img.png"
          alt="카카오"
          className={styles.kakao_img}
        />
        <span className={styles.kakao_login}>카카오로 시작하기</span>
      </button>
    </div>
  );
};
