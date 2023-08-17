import React from "react";
import styles from "./QuestNonRegistBtn.module.css";

const QuestNonRegistBtn = (props) => {
  return (
    <button className={styles.btn}>
      <span>질문 등록하기</span>
    </button>
  );
};

export default QuestNonRegistBtn;
