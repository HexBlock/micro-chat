import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';

export interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthState>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    logout: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export const selectAccessToken = (state: RootState) => state.auth.accessToken;

export default authSlice.reducer;
