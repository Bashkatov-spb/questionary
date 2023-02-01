import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: {},
};

const questionsSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export default questionsSlice.reducer;
