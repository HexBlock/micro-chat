import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommonId } from 'app/utils/types/common-id';
import { MOCK_USER_ID } from 'redux/state/chat.type';
import { FriendState } from 'redux/state/friend.type';
import { RootState } from 'redux/store';

const initialState: FriendState = {
  currentChat: null,
  friends: [
    {
      id: MOCK_USER_ID,
      name: 'stored nick',
    },
    {
      id: '222',
      name: 'stranger 222',
    },
    {
      id: '223',
      name: 'stranger 223',
    },
  ],
};

export const friendSlice = createSlice({
  name: 'friend',
  initialState,
  reducers: {
    updateChatWith: (state, action: PayloadAction<CommonId>) => {
      if (!!state.currentChat && state.currentChat.id === action.payload.id)
        return;
      state.currentChat = { id: action.payload.id, name: action.payload.name };
    },
    updateFriendName: (state, action: PayloadAction<CommonId>) => {
      const { id } = action.payload;

      if (!!state.currentChat && state.currentChat.id === id) {
        state.currentChat = {
          id: action.payload.id,
          name: action.payload.name,
        };
      }

      const friendId = state.friends.findIndex((x) => x.id === id);
      if (friendId === -1) return;

      state.friends = state.friends.map((x) =>
        x.id === id ? { id: action.payload.id, name: action.payload.name } : x
      );
    },
  },
});

export const { updateChatWith, updateFriendName } = friendSlice.actions;

export const selectCurrentChat = (state: RootState) => state.friend.currentChat;
export const selectFriends = (state: RootState) => state.friend.friends || [];

export default friendSlice.reducer;
