import Card from "../../../UI/Card/Card";
import styles from "./BasicModal.module.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = ({ title, returnComment, onConfirm }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm();
  };
  return (
    <Card className={styles.modal}>
      <div className={styles.commentBox}>{title}</div>
      <hr />
      <button onClick={handleSubmit} className={styles.returnButton}>
        {returnComment}
      </button>
    </Card>
  );
};

const BasicModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onClickBack} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          returnComment={props.returnComment}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default BasicModal;
