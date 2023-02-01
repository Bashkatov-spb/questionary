import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import authSlice from './features/auth/authSlice';
import questionsSlice from './features/questions/questionsSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    questions: questionsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
export default store;
