import React, { useState } from 'react';
import styles from './Hint.module.css';

export const Hint = (props) => {

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    if (inputValue.length <= 20) {
      props.setHint(inputValue);
    }
  };

  return (
    <div className={styles.container}>
        <input className={styles.text} type="text" onChange={handleInputChange} value={props.hint} maxLength={20} />
        <span className={styles.num}>{props.hint.length} / 20</span>
    </div>
  );
};
