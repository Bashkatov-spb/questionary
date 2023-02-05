import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { loginUser, logoutUser, registrationUser } from './authSlice';

function Auth(): JSX.Element {
  const { name } = useParams();
  const [nameUser, setNameUser] = useState('');
  const [emailUser, setEmailUser] = useState('');
  const [passwordUser, setPasswordUser] = useState('');
  const [password2User, setPassword2User] = useState('');
  const dispatch = useAppDispatch();

  const {user} = useSelector((state:RootState) => state.auth);

  if (name === 'logout') {
   dispatch(logoutUser());
  }
  const auth = (e:React.FormEvent):void => {
    e.preventDefault();
    if (name === 'registration') {
   dispatch(registrationUser({
    name: nameUser,
    email: emailUser,
    password: passwordUser,
    password2: password2User, }));
   } else {
      dispatch(loginUser({
       email: emailUser,
       password: passwordUser,
      }));
      }
  };
  return (
    <div>
      <form onSubmit={auth}>
        <label htmlFor="user">Имя</label>
        <input id="user" name="username" type="text" required value={nameUser} onChange={(e) => setNameUser(e.target.value)} />
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required value={emailUser} onChange={(e) => setEmailUser(e.target.value)} />
        <label htmlFor="password">Пароль</label>
        <input id="password" name="password" type="password"  required value={passwordUser} onChange={(e) => setPasswordUser(e.target.value)} />
        <label htmlFor="password2">Пароль повторный</label>
        <input id="password2" name="password2" type="password" required value={password2User} onChange={(e) => setPassword2User(e.target.value)} />
        <button type="submit">+</button>
      </form>
      <h2>{user?.message && user.message}</h2>
    </div>
  );
}

export default Auth;
