import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChatLogMessage, ChatState, MOCK_USER_ID } from 'redux/state/chat.type';
import { RootState } from 'redux/store';

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
  ['223']: [
    {
      id: '2223',
      message: 'Test message',
      date: '2021-01-01T11:11:11.000Z',
      currentUser: true,
    },
    {
      id: '2224',
      message: 'Test message 2',
      date: '2021-01-01T11:11:11.000Z',
      currentUser: true,
    },
    {
      id: '2225',
      message: 'Test message 3',
      date: '2021-01-01T11:11:11.000Z',
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
      const { userId, ...msg } = action.payload;
      if (!userId || !msg.message) return;
      if (!msg.message.trim()) return;

      const newMessage: ChatLogMessage = { ...msg };

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
