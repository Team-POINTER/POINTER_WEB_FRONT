import React, { useEffect, useState } from 'react';
import styles from './Header.module.css'

export const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
      <button className={styles.logo}>
        <img src="./img/Text_logo.png" alt="" className={styles.logoImg}/>
      </button>
      <div className={styles.empty}></div>
      <nav className={styles.nav}>
        {windowWidth <= 820 ? (
          // <button className={styles.addButton}><img className={styles.plusImg} src="./img/x.png" alt="+버튼" /></button>
          <button className={styles.addButton}>+</button>
        ) : (
          <button className={styles.room}>룸 만들기</button>
        )}
        <button className={styles.user}>포인터 님</button>
      </nav>
    </header>
  );
}

