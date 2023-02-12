import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store';
import styles from './Navigation.module.scss';

function Navigation(): JSX.Element {
  const [check, setCheck] = useState(false);
  const { user } = useSelector((state:RootState) => state.auth);
  return (
    <div className={styles.nav__container}>
      {/* <div className={styles.nav__burger}>menu</div> */}
      {user && <div className={styles.nav__avatar}>
         <img src={`http://localhost:4000${user.avatar}`} alt="alt" />
      </div>}
      <div className={styles.nav__logo}>questionary</div>
      <input
        id={styles['nav__menu-toggle']}
        type="checkbox"
        checked={check}
      />
      <label className={styles['nav__button-container']} htmlFor="menu-toggle">
        <div onClick={() => setCheck((prev) => !prev)} className={styles['nav__menu-button']} />
      </label>
      <ul className={styles['nav__menu-list']}>
        <li className={styles['nav__menu-list--item']}>
          <Link className={styles['nav__menu-list--link']} to="/" onClick={() => setCheck((prev) => !prev)}>
            Главная
          </Link>
        </li>
        <li className={styles['nav__menu-list--item']}>
          <Link className={styles['nav__menu-list--link']} to="#">
            Вопросы
          </Link>
        </li>
        { !user ? <><li className={styles['nav__menu-list--item']}>
          <Link className={styles['nav__menu-list--link']} to="/auth/login" onClick={() => setCheck((prev) => !prev)}>
            Авторизация
          </Link>
        </li>
        <li className={styles['nav__menu-list--item']}>
          <Link className={styles['nav__menu-list--link']} to="/auth/registration" onClick={() => setCheck((prev) => !prev)}>
            Регистрация
          </Link>
        </li></>
        :
        <>
           <li className={styles['nav__menu-list--item']}>
          <Link className={styles['nav__menu-list--link']} to="/profile" onClick={() => setCheck((prev) => !prev)}>
            Профиль
          </Link>
        </li>
        <li className={styles['nav__menu-list--item']}>
          <Link className={styles['nav__menu-list--link']} to="/auth/logout" onClick={() => setCheck((prev) => !prev)}>
            Выйти
          </Link>
        </li>
        </>
        }
      </ul>
    </div>
  );
}

export default Navigation;
