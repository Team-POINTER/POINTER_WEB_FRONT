import React from "react";
import styles from "./ResultBox.module.css";

const ResultBox = ({ onClick, roomData }) => {
  const sectionClickHandler = () => {
    onClick();
  };
  return (
    <section onClick={sectionClickHandler} className={styles.container}>
      <div className={styles.question}>{roomData.question}</div>
      <div className={styles.bottom}>
        <span className={styles.vote}>
          {roomData.votedMemberCnt} / {roomData.allVoteCnt}
        </span>
        <span className={styles.date}>23.03.02</span>
      </div>
    </section>
  );
};

export default ResultBox;
