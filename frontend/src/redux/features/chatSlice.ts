import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';

export const MOCK_USER_ID = 'uID1' as const;

export interface ChatLogMessage {
  id: string;
  message: string;
  date: Date | string;
  currentUser?: boolean;
}

export interface ChatState {
  [key: string]: ChatLogMessage[];
}

const initialState: ChatState = {
  [MOCK_USER_ID]: [
    {
      id: '1',
      message: 'Hello!',
      date: '2022-02-07T19:21:34.000Z',
    },
    {
      id: '2',
      message: 'Hi!',
      date: '2022-02-07T19:21:35.000Z',
      currentUser: true,
    },
  ],
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage: (
      state,
      action: PayloadAction<
        ChatLogMessage & {
          userId: string;
        }
      >
    ) => {
      const { userId, ...message } = action.payload;
      const newMessage: ChatLogMessage = { ...message };

      if (!Array.isArray(state[userId])) {
        state[userId] = [newMessage];
        return;
      }
      state[userId] = [...state[userId], newMessage];
    },
  },
});

export const { addMessage } = chatSlice.actions;

export const selectChatWithUser = (userId: string) => (state: RootState) =>
  state.chat[userId] || [];

export default chatSlice.reducer;
