import React from "react";
import styles from './QuestRegistBtn.module.css';
import { useNavigate } from "react-router-dom";


const QuestRegistBtn = (props) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/home");  
  }

  return <button className={styles.btn} onClick={clickHandler}>질문 등록하기</button>;
};

export default QuestRegistBtn;
