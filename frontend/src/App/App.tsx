import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import Navigation from '../features/Navigation/Navigation';
import Auth from '../features/auth/Auth';
import Question from '../features/questions/Question';
import Main from '../features/Main/Main';

function App(): JSX.Element {
  return (
    <div className={styles.app__container}>
      <header>
        <Navigation />
      </header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth/:name" element={<Auth />} />
        <Route path="/questions" element={<Question />} />
      </Routes>
    </div>
  );
}

export default App;
