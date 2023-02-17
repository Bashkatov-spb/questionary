import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch } from '../store';
import styles from './App.module.scss';
import Navigation from '../features/Navigation/Navigation';
import Auth from '../features/auth/Auth';
import Question from '../features/questions/Question';
import Main from '../features/Main/Main';
import { checkUser } from '../features/auth/authSlice';
import Profile from '../features/profile/Profile';

import Statistics from '../features/Statistics/Statistics';
import {
  getAllQuestions,
  getAllModules,
  getAllThemes,
  getAllAnswers,
} from '../features/questions/questionsSlice';
import Themes from '../features/Themes/Themes';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllQuestions());
    dispatch(getAllModules());
    dispatch(getAllThemes());
    dispatch(getAllAnswers());
    dispatch(checkUser())
  }, [dispatch]);

  return (
    <div className={styles.app__container}>
      <header>
        <Navigation />
      </header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth/:name" element={<Auth />} />
        <Route path="/modules" element={<Themes />} />
        <Route path="/questions/:id" element={<Question />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
