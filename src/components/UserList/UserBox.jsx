import React from 'react';
import styles from './UserBox.module.css';
import Icon from "../../icon/Icon";

export const UserBox = ({ userData, isCheck }) => {
  return (
    <li className={styles.userBox}>
      <div className={styles.textContainer}>
        {userData.userName}
        <div className={styles.empty}></div>
        {isCheck && <Icon icon="writerMark" color="red" />}
      </div>
    </li>
  );
}
