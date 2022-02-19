import { CommonId } from 'app/utils/types/common-id';

export interface FriendState {
  currentChat: CommonId | null;
  friends: CommonId[];
}
