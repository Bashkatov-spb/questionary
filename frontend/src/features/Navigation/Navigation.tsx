import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';

function Navigation(): JSX.Element {
  const [check, setCheck] = useState(false);
  return (
    <div className={styles.nav__container}>
      {/* <div className={styles.nav__burger}>menu</div> */}
      <div className={styles.nav__avatar}> </div>
      <div className={styles.nav__logo}>questionary</div>
      <input
        id={styles['nav__menu-toggle']}
        type="checkbox"
        onChange={() => console.log('12312312')}
        checked={check}
      />
      <label className={styles['nav__button-container']} htmlFor="menu-toggle">
        <div onClick={() => setCheck((prev) => !prev)} className={styles['nav__menu-button']} />
      </label>
      <ul className={styles['nav__menu-list']}>
        <li className={styles['nav__menu-list--item']}>
          <Link className={styles['nav__menu-list--link']} to="/">
            Главная
          </Link>
        </li>
        <li className={styles['nav__menu-list--item']}>
          <Link className={styles['nav__menu-list--link']} to="#">
            Вопросы
          </Link>
        </li>
        <li className={styles['nav__menu-list--item']}>
          <Link className={styles['nav__menu-list--link']} to="/auth">
            Авторизация
          </Link>
        </li>
        <li className={styles['nav__menu-list--item']}>
          <Link className={styles['nav__menu-list--link']} to="/auth">
            Регистрация
          </Link>
        </li>
        <li className={styles['nav__menu-list--item']}>
          <Link className={styles['nav__menu-list--link']} to="#">
            Выйти
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
