import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import { AuthState, LoginInput, RegistrationInput } from './types/User';

const initialState: AuthState = {
  user: undefined,
  error: undefined,
};

export const registrationUser = createAsyncThunk('auth/registration', (action: RegistrationInput) =>
  api.postRegistration(action)
);
export const loginUser = createAsyncThunk('auth/login', (action: LoginInput) =>
  api.postLogin(action)
);

export const checkUser = createAsyncThunk(
  'auth/checkUser',
  () => api.getCheckUser()
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(registrationUser.fulfilled, (state, action) => {
      if (action.payload.message) {
        state.error = action.payload.message;
      }
      state.user = action.payload.user;
    })
    .addCase(registrationUser.rejected, (state, action) => {
      state.error = action.error.message;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload.message) {
        state.error = action.payload.message;
      }
      state.user = action.payload.user;
    })
    .addCase(loginUser.rejected, (state, action) => {
      state.error = action.error.message;
    })
    .addCase(logoutUser.fulfilled, (state, action) => {
      state.user = undefined;
    })
    .addCase(logoutUser.rejected, (state, action) => {
      state.error = action.error.message;
    })
    .addCase(checkUser.fulfilled, (state, action) => {
      if(action.payload.user)
      state.user = action.payload.user;
    })
    .addCase(checkUser.rejected, (state, action) => {
      state.error = action.error.message;
    });
  }
});

export default authSlice.reducer;
