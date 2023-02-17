import React from 'react';
import styles from './Statistics.module.scss';

function Statistics(): JSX.Element {
  return (
    <>
      <h2 className={styles.stat__title}>Your Statistics</h2>
      <div className={styles.stat__container}>
        <div className={styles.stat__diagram}>circle</div>
        <div className={styles['stat__modules-container']}>
          <div className={styles['stat__modules-item']}>
            <div className={styles['stat__modules-item--colb']}>
              <span className={styles['stat__modules-item--count']}>Count %</span>
              <div className={styles['stat__modules-item--stolb']}>colba</div>
            </div>
          </div>
          <div className={styles['stat__modules-item']}>
            <div className={styles['stat__modules-item--colb']}>
              <span className={styles['stat__modules-item--count']}>Count %</span>
              <div className={styles['stat__modules-item--stolb']}>colba</div>
            </div>
          </div>
          <div className={styles['stat__modules-item']}>
            <div className={styles['stat__modules-item--colb']}>
              <span className={styles['stat__modules-item--count']}>Count %</span>
              <div className={styles['stat__modules-item--stolb']}>colba</div>
            </div>
          </div>
          <div className={styles['stat__modules-item']}>
            <div className={styles['stat__modules-item--colb']}>
              <span className={styles['stat__modules-item--count']}>Count %</span>
              <div className={styles['stat__modules-item--stolb']}>colba</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistics;
