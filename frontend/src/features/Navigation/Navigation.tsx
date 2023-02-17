import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store';
import styles from './Navigation.module.scss';

function Navigation(): JSX.Element {
  const [open, setOpen] = useState(false);
  const { user } = useSelector((state: RootState) => state.auth);

  const onHandleOpenMenu = (): void => {
    setOpen((prev) => !prev);
  };

  return (
    <div className={styles.nav__container}>
      {/* <div className={styles.nav__burger}>menu</div> */}
      {user && (
        <div className={styles.nav__avatar}>
          <img src={`http://localhost:4000${user.avatar}`} alt="alt" />
        </div>
      )}
      <div className={styles.nav__logo}>questionary</div>
      <input id={styles['nav__menu-toggle']} type="checkbox" checked={open} />
      <label className={styles['nav__button-container']} htmlFor="menu-toggle">
        <div onClick={onHandleOpenMenu} className={styles['nav__menu-button']} />
      </label>
      <ul className={styles['nav__menu-list']}>
        <li className={styles['nav__menu-list--item']}>
          <Link className={styles['nav__menu-list--link']} to="/" onClick={onHandleOpenMenu}>
            Главная
          </Link>
        </li>
        <li className={styles['nav__menu-list--item']}>
          <Link onClick={onHandleOpenMenu} className={styles['nav__menu-list--link']} to="/modules">
            Разделы
          </Link>
        </li>
        <li className={styles['nav__menu-list--item']}>
          <Link
            onClick={onHandleOpenMenu}
            className={styles['nav__menu-list--link']}
            to="/statistics"
          >
            Статистика
          </Link>
        </li>
        {!user ? (
          <>
            <li className={styles['nav__menu-list--item']}>
              <Link
                className={styles['nav__menu-list--link']}
                to="/auth/login"
                onClick={onHandleOpenMenu}
              >
                Авторизация
              </Link>
            </li>
            <li className={styles['nav__menu-list--item']}>
              <Link
                className={styles['nav__menu-list--link']}
                to="/auth/registration"
                onClick={onHandleOpenMenu}
              >
                Регистрация
              </Link>
            </li>
          </>
        ) : (
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
        )}
      </ul>
    </div>
  );
}

export default Navigation;
