import { ICurrentUser } from '../../types';
import Icon from '../../components/Icon';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import megaphone from '../../icons/megaphone.svg';
import { signout } from '../../store/actions/auth';
import styles from './navbar.module.css';

export interface IDesktopNav {
  currentUser: ICurrentUser;
  signout: () => void;
}

const DesktopNav = ({ currentUser, signout }: IDesktopNav): JSX.Element => {
  const handleSignout = event => {
    event.preventDefault();
    signout();
  };

  return (
    <nav>
      <Link to='/' className={styles.navbarBrand}>
        <Icon icon={megaphone} iconName='Logo' />
      </Link>
      {currentUser.isAuthenticated ? (
        <ul className={styles.navList}>
          <li>
            <Link to={`/users/${currentUser.user.id}/messages/new`}>
              New Message
            </Link>
          </li>
          <li>
            <div onClick={handleSignout}>Sign out</div>
          </li>
        </ul>
      ) : (
        <ul className={styles.navList}>
          <li>
            <Link to='/register'>Register</Link>
          </li>
          <li>
            <Link to='/signin'>Sign In</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

export default connect(mapStateToProps, { signout })(DesktopNav);
