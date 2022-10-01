import { IHome } from './types';
import { Link } from 'react-router-dom';
import MessageTimeline from '../MessageTimeline';
import styles from './home.module.css';

const Home = ({ currentUser }: IHome): JSX.Element => {
  if (!currentUser.isAuthenticated) {
    return (
      <div className={styles.landing}>
        <h1>What's Happening?</h1>
        <h3>New to Megaphone?</h3>
        <div>
          <Link className={styles.link} to='/register'>
            Sign Up Here
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <MessageTimeline
        profileImageUrl={currentUser.user.profileImageUrl}
        username={currentUser.user.username}
      />
    );
  }
};

export default Home;
