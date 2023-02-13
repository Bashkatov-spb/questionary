import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import { ProfileState } from './types/Profile';

const initialState:ProfileState = {
  avatar:'',
  error:undefined
};

export const initProfileUser = createAsyncThunk(
  'profile/init',
  () => api.getProfile()
);
export const updateAvatar = createAsyncThunk(
  'profile/avatar',
  (action:any) => api.putAvatar(action)
);

const authSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(initProfileUser.fulfilled, (state, action) => {
      state.avatar = action.payload.avatar;
    })
    .addCase(initProfileUser.rejected, (state, action) => {
      state.error = action.error.message;
    })
    .addCase(updateAvatar.fulfilled, (state, action) => {
      state.avatar = action.payload;
    })
    .addCase(updateAvatar.rejected, (state, action) => {
      state.error = action.error.message;
    })
  }
});

export default authSlice.reducer;
