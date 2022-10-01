import { IMessageTimeline } from './types';
import MessageList from '../../containers/MessageList';
import NewMessage from './NewMessage';
import UserAside from '../UserAside';
import styles from './timeline.module.css';

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
