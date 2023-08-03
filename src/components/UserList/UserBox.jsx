import React, { useState } from 'react';
import styles from './UserBox.module.css';
import Icon from "../../icon/Icon";

export const UserBox = ({ userData, handleUserSelect, isSelected }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    handleUserSelect(userData); // 사용자 정보를 UserPoint 컴포넌트로 전송
  };

  return (
    <li className={styles.userBox}>
      <div className={styles.textContainer} onClick={handleClick}>
        {userData.name}({userData.id})
        <div className={styles.empty}></div>
        {isClicked && <Icon icon="writerMark" color="red" />}
      </div>
    </li>
  );
};
