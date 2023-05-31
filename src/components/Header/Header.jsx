import React from "react";
import styled from "styled-components";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <button className={styles.logo}>
        <img src="./img/Text_logo.png" alt="" className={styles.logoImg} />
      </button>
      <div className={styles.empty}></div>
      <section className={styles.section}>
        <button className={styles.room}>룸 만들기</button>
        <button className={styles.user}>포인터 님</button>
      </section>
    </header>
  );
};
