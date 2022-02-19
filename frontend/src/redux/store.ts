import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import chatReducer from './features/chatSlice';
import friendReducer from './features/friendSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    chat: chatReducer,
    friend: friendReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
