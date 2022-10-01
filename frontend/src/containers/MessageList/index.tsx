import { fetchMessages, removeMessage } from '../../store/actions/messages';

import { ICurrentUser } from '../../types';
import { IMessageList } from './types';
import LoadingSpinner from '../../components/LoadingSpinner';
import MessageItem from '../../components/MessageItem';
import { connect } from 'react-redux';
import styles from './list.module.css';
import { useEffect } from 'react';

const MessageList = ({
  currentUser,
  fetchMessages,
  messages,
  removeMessage,
}: IMessageList): JSX.Element => {
  const {
    user: { id: userId },
  } = currentUser;

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  const messageList = messages.map(
    (message: any): JSX.Element => (
      <MessageItem
        key={message._id}
        date={message.createdAt}
        text={message.text}
        username={message.user.username}
        profileImageUrl={message.user.profileImageUrl}
        removeMessage={() => removeMessage(message.user._id, message._id)}
        isCorrectUser={userId === message.user._id}
      />
    )
  );

  if (!messages) {
    return (
      <div className={styles.loadingWrapper}>
        <LoadingSpinner />
      </div>
    );
  }

  return <ul className={styles.list}>{messageList.reverse()}</ul>;
};

function mapStateToProps(state: { currentUser: ICurrentUser; messages: any }) {
  return {
    messages: state.messages,
    currentUser: state.currentUser,
  };
}

export default connect(mapStateToProps, { fetchMessages, removeMessage })(
  MessageList
);
