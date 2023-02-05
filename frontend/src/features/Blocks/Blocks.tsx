import React from 'react';
import styles from './Blocks.module.scss';

function Blocks(): JSX.Element {
  return (
    <div className={styles.blocks__container}>
      <div className={styles.blocks__item}>JS</div>
      <div className={styles.blocks__item}>TS</div>
      <div className={styles.blocks__item}>React</div>
      <div className={styles.blocks__item}>Express</div>
    </div>
  );
}

export default Blocks;
