import React from 'react';
import { Hint } from './Hint';
import styles from './HintSection.module.css';

export const HintSection = () => {
  return (
    <section className={styles.container}>
      <p className={styles.notice}>투표한 상대에게 보여지는 당신의 힌트를 작성해주세요.</p>
      <Hint />
    </section>
  );
}

