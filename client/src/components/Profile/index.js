import defaultProfile from '../../images/default-profile.png';
import styles from './profile.module.css';

const Profile = ({ profileImageUrl, username, height, width }) => {
  return (
    <>
    <div className={styles.profile} style={{ height: height, width: width }}>
      <img src={profileImageUrl || defaultProfile} alt={username} />
    </div>
    {/* <svg className={styles.svgClip}>
      <clipPath id="profileClip" clipPathUnits="objectBoundingBox"><path d="M0,0.5 C0,0.095,0.095,0,0.5,0 S1,0.095,1,0.5 S0.905,1,0.5,1 S0,0.905,0,0.5"></path></clipPath>
    </svg> */}
    </>
  );
};

export default Profile;
