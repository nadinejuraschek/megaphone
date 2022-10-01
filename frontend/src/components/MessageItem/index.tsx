import { IMessageItem } from './types';
import Icon from '../Icon';
import Profile from '../Profile';
import dayjs from 'dayjs';
import deleteIcon from '../../icons/delete.svg';
import styles from './message.module.css';

const MessageItem = ({
  date,
  isCorrectUser,
  profileImageUrl,
  removeMessage,
  text,
  username,
}: IMessageItem): JSX.Element => {
  const printDate = dayjs(date).format('h:mm a, DD MMM YYYY');

  return (
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
        <p className={styles.date}>{printDate}</p>
      </div>
    </li>
  );
};

export default MessageItem;
