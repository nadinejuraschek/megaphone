import { IMessageItem } from './types';
import Icon from '../Icon';
import Moment from 'react-moment';
import Profile from '../Profile';
import deleteIcon from '../../icons/delete.svg';
import styles from './message.module.css';

const MessageItem = ({
  date,
  isCorrectUser,
  profileImageUrl,
  removeMessage,
  text,
  username,
}: IMessageItem): JSX.Element => (
  <li className={styles.message}>
    <div className={styles.header}>
      <div className={styles.userinfo}>
        <Profile
          profileImageUrl={profileImageUrl}
          username={username}
          height='5rem'
          width='5rem'
        />
        <div className={styles.name}>@{username} &nbsp;</div>
      </div>
      {isCorrectUser && (
        <div className={styles.delete} onClick={removeMessage}>
          <Icon icon={deleteIcon} iconName='Delete Message' />
        </div>
      )}
    </div>
    <div className={styles.body}>
      <p>{text}</p>
    </div>
    <div className={styles.footer}>
      <p className={styles.date}>
        <Moment format='h:mm a, DD MMM YYYY'>{date}</Moment>
      </p>
    </div>
  </li>
);

export default MessageItem;
