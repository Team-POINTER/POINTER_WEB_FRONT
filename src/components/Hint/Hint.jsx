import React, { useState } from 'react';
import styles from './Hint.module.css';

export const Hint = () => {
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    if (inputValue.length <= 20) {
      setText(inputValue);
    }
  };

  return (
    <div className={styles.container}>
        <input className={styles.text} type="text" onChange={handleInputChange} value={text} maxLength={20} />
        <span className={styles.num}>{text.length} / 20</span>
    </div>
  );
};
