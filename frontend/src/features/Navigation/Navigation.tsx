import React from 'react';
import styles from './Navigation.module.scss';

function Navigation(): JSX.Element {
  return (
    <div className={styles.nav__container}>
      <div className={styles.nav__logo}>logo</div>
      <div className={styles.nav__avatar}>a</div>
    </div>
  );
}

export default Navigation;
