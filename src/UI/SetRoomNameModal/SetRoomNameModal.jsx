import React, { useState } from "react";
import Card from "../Card/Card";
import ReactDOM from "react-dom";
import styles from './SetRoomNameModal.module.css'

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  const [text, setText] = useState({
    text: "",
    length: 0,
  });
  const TextHandler = (e) => {
    if(e.target.value.length > 15) return;
    setText(prev => ({text: e.target.value, length: e.target.value.length}));
  }
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <p>새로운 룸의 이름 설정</p>
      </header>
      <div className={styles.content}>
        <input value={text.text} onChange={TextHandler} type="text" />
        <span>{text.length}/15</span>
      </div>
      <hr />
      <footer className={styles.actions}>
        <button onClick={props.onConfirm}>취소</button>
        <div className={styles.updown} />
        <button>완료</button>
      </footer>
    </Card>
  );
};

export const SetRoomNameModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};
