import React from 'react';
import styles from './Login.module.css';

export default function Login() {
  return (
    <div className={styles.container}>
      <img src="./img/Login_logo.png" alt="포인터 로고" className={styles.logo}/>
      <button className={styles.btn}>
        <img src="./img/kakao_img.png" alt="카카오" className={styles.kakao_img}/>
        <span className={styles.kakao_login}>카카오로 시작하기</span>
      </button>
    </div>
  );
}

