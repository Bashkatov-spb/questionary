import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import Navigation from '../features/Navigation/Navigation';
import Auth from '../features/auth/Auth';
import Question from '../features/questions/Question';
import Main from '../features/Main/Main';
import { useAppDispatch } from '../store';
import { checkUser } from '../features/auth/authSlice';
import Profile from '../features/profile/Profile';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(()=>{
dispatch(checkUser())
  },[])

  return (
    <div className={styles.app__container}>
      <header>
        <Navigation />
      </header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth/:name" element={<Auth />} />
        <Route path="/questions" element={<Question />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
