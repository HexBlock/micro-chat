import { CommonId } from 'app/utils/types/common-id';
import { useDispatch } from 'react-redux';
import {
  selectCurrentChat,
  selectFriends,
  updateChatWith,
} from 'redux/features/friendSlice';
import { useAppSelector } from 'redux/hooks';
import styles from './cp.module.scss';

export const ChatPicker = () => {
  const dispatch = useDispatch();
  const currentChat = useAppSelector(selectCurrentChat);
  const friendList = useAppSelector(selectFriends);

  const onChangeCurrentChat = (target: CommonId) => {
    if (currentChat?.id === target.id) return;
    dispatch(updateChatWith(target));
  };

  const selectList = friendList.map((friend) => {
    let klass = `mt-2 ${styles['chat-pick']}`;
    if (currentChat?.id === friend.id) {
      klass = `${klass}  ${styles['active']}`;
    }

    return (
      <button
        key={friend.id}
        className={klass}
        onClick={() => onChangeCurrentChat(friend)}
      >
        {friend.name}
      </button>
    );
  });

  return (
    <div className={`common-card ${styles['chat-picker']}`}>
      <h1 className={styles['chat-picker__title']}>List:</h1>

      <div className={styles['chat-picker__list']}>{selectList}</div>
    </div>
  );
};
