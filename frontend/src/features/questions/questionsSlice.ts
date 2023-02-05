import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PayloadNextQuestion, QuestionState, Statistic } from './types/Question';
import * as api from './api';


const initialState:QuestionState = {
  questions: [],
  question:null,
  statistics: [],
  error: undefined
};

export const savingStatistics = createAsyncThunk(
  'statistics',
  (action:Statistic[]) => api.postSavingStatistics(action)
);

const questionsSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    initQuestion: (state, action) => {
      const arr = state.questions.filter((question) => question.moduleId === action.payload);
      state.question=arr[0]
    },
    nextQuestion: (state, action:PayloadAction<PayloadNextQuestion>) => {
      const question = state.questions.find((question) => question.id === (action.payload.id + 1));
     if(question){
      state.statistics=[...state.statistics,{questionId:action.payload.id,moduleId:action.payload.moduleId,rights:action.payload.status}]
      if(question?.moduleId === action.payload.moduleId){
        state.question=question
      }else{
        state.question=null
      }
     }
      
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(savingStatistics.fulfilled, (state, action) => {
     state.statistics=[]
     
    })
    .addCase(savingStatistics.rejected, (state, action) => {
      state.error = action.error.message;
    })
  }
});

export const { initQuestion,nextQuestion} = questionsSlice.actions;
export default questionsSlice.reducer;
