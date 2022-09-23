import { fetchMessages, removeMessage } from '../../store/actions/messages';

import { Component } from 'react';
import MessageItem from '../../components/MessageItem';
import { connect } from 'react-redux';
import styles from './list.module.css';

/* const MessageList = ({
  messages,
  removeMessage,
  currentUser,
}: IMessageList): JSX.Element => {
  useEffect(() => {
    fetchMessages();
  }, [messages]);

  const messageList = messages.map(
    (message): JSX.Element => (
      <MessageItem
        key={message._id}
        date={message.createdAt}
        text={message.text}
        username={message.user.username}
        profileImageUrl={message.user.profileImageUrl}
        removeMessage={() => removeMessage(message.user._id, message._id)}
        isCorrectUser={currentUser.user.id === message.user._id}
      />
    )
  );

  return <ul className={styles.list}>{messageList}</ul>;
}; */

class MessageList extends Component {
  componentDidMount() {
    this.props.fetchMessages();
  }

  render() {
    const { messages, removeMessage, currentUser } = this.props;
    let messageList = messages
      .reverse()
      .map(message => (
        <MessageItem
          key={message._id}
          date={message.createdAt}
          text={message.text}
          username={message.user.username}
          profileImageUrl={message.user.profileImageUrl}
          removeMessage={() => removeMessage(message.user._id, message._id)}
          isCorrectUser={currentUser === message.user._id}
        />
      ));
    return <ul className={styles.list}>{messageList}</ul>;
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    currentUser: state.currentUser.user.id,
  };
}

export default connect(mapStateToProps, { fetchMessages, removeMessage })(
  MessageList
);
