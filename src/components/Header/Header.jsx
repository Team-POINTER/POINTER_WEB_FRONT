import React, { useEffect, useState } from "react";
import styled from "styled-components";
import styles from "./Header.module.css";
import { Link, Router, useLocation } from "react-router-dom";

export const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const router = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={styles.header}>
      <Link to='/home'>
        <button className={styles.logo}>
          <img src="/img/Text_logo.png" alt="POINTER 로고" className={styles.logoImg} />
        </button>
      </Link>
      <div className={styles.empty}></div>
      <nav className={styles.nav}>
      {(router.pathname.indexOf('/home') == 0) &&
        (windowWidth <= 820 ? (
          // <button className={styles.addButton}><img className={styles.plusImg} src="./img/x.png" alt="+버튼" /></button>
          <button className={styles.addButton}>+</button>
        ) : (
          <button className={styles.room}>룸 만들기</button>
        ))
      }
        <Link to='/setting'>
          <button className={styles.user} >포인터 님</button>
        </Link>
      </nav>
    </header>
  );
};
