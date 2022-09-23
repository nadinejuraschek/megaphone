import Profile from '../Profile';
import styles from './aside.module.css';

export interface IUserAside {
  profileImageUrl: string;
  username: string;
}

const UserAside = ({ profileImageUrl, username }: IUserAside): JSX.Element => (
  <aside className={styles.aside}>
    <Profile
      profileImageUrl={profileImageUrl}
      username={username}
      height='20rem'
      width='20rem'
    />
    <h5 className={styles.name}>@{username}</h5>
  </aside>
);

export default UserAside;
