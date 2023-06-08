import React from 'react';
import styles from './UserBox.module.css';

export const UserBox = ({ userData }) => {
  return (
    <li className={styles.userBox}>
      <div className={styles.textContainer}>
        {userData.userName}
      </div>
    </li>
  );
}
