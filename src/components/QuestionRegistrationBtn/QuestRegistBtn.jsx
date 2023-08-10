import React from "react";
import styles from "./QuestRegistBtn.module.css";
import { useNavigate } from "react-router-dom";

const QuestRegistBtn = (props) => {
  return (
    <button className={styles.btn} onClick={props.onClickHandler}>
      질문 등록하기
    </button>
  );
};

export default QuestRegistBtn;
