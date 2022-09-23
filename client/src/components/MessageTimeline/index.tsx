import MessageList from '../../containers/MessageList/index.js';
import NewMessage from './NewMessage';
import UserAside from '../UserAside';
import styles from './timeline.module.css';

export interface IMessageTimeline {
  profileImageUrl: string;
  username: string;
}

const MessageTimeline = ({
  profileImageUrl,
  username,
}: IMessageTimeline): JSX.Element => (
  <div className={styles.timeline}>
    <UserAside profileImageUrl={profileImageUrl} username={username} />
    <MessageList />
    <NewMessage />
  </div>
);

export default MessageTimeline;
