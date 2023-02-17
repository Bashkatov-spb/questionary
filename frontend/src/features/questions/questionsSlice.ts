import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PayloadNextQuestion, QuestionsState, Statistic } from './types/Questions';
import * as api from './api';

const initialState: QuestionsState = {
  answers: [],
  themes: [],
  modules: [],
  questions: [],
  question: null,
  statistics: [],
  error: undefined,
};

export const savingStatistics = createAsyncThunk('statistics', (action: Statistic[]) =>
  api.postSavingStatistics(action)
);

export const getAllThemes = createAsyncThunk('themes', () => api.getAllThemes());

export const getAllModules = createAsyncThunk('modules', () => api.getAllModules());

export const getAllQuestions = createAsyncThunk('questions', () => api.getAllQuestions());

export const getAllAnswers = createAsyncThunk('answers', () => api.getAllAnswers());

const questionsSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    initQuestion: (state, action) => {
      const arr = state.questions.filter((question) => question.moduleId === action.payload);
      [state.question] = arr;
    },
    nextQuestion: (state, action: PayloadAction<PayloadNextQuestion>) => {
      const question = state.questions.find((quest) => quest.id === action.payload.id + 1);
      if (question) {
        state.statistics = [
          ...state.statistics,
          {
            questionId: action.payload.id,
            moduleId: action.payload.moduleId,
            rights: action.payload.status,
          },
        ];
        if (question?.moduleId === action.payload.moduleId) {
          state.question = question;
        } else {
          state.question = null;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(savingStatistics.fulfilled, (state, action) => {
        state.statistics = [];
      })
      .addCase(savingStatistics.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getAllQuestions.fulfilled, (state, action) => {
        state.questions = action.payload;
      })
      .addCase(getAllQuestions.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getAllModules.fulfilled, (state, action) => {
        state.modules = action.payload;
      })
      .addCase(getAllModules.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getAllThemes.fulfilled, (state, action) => {
        state.themes = action.payload;
      })
      .addCase(getAllThemes.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getAllAnswers.fulfilled, (state, action) => {
        state.answers = action.payload;
      })
      .addCase(getAllAnswers.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { initQuestion, nextQuestion } = questionsSlice.actions;
export default questionsSlice.reducer;
