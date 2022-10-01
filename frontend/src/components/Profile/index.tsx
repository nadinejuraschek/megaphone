import { IProfile } from './types';
import defaultProfile from '../../images/default-profile.png';
import styles from './profile.module.css';

const Profile = ({
  profileImageUrl,
  username,
  height,
  width,
}: IProfile): JSX.Element => (
  <div className={styles.profile} style={{ height: height, width: width }}>
    <img src={profileImageUrl || defaultProfile} alt={username} />
  </div>
);

export default Profile;
