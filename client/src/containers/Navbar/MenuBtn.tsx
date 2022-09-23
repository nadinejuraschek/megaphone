import { ICurrentUser } from '../../types';
import Icon from '../../components/Icon';
import { Link } from 'react-router-dom';
import { MouseEvent } from 'react';
import { connect } from 'react-redux';
import menu from '../../icons/menu.svg';
import { signout } from '../../store/actions/auth';
import styles from './navbar.module.css';

export interface IMenuBtn {
  currentUser: ICurrentUser;
  signout: () => void;
  toggleNav: () => void;
  open: boolean;
}

const MenuBtn = ({
  currentUser,
  signout,
  toggleNav,
  open,
}: IMenuBtn): JSX.Element => {
  const handleSignout = (event: MouseEvent): void => {
    event.preventDefault();
    signout();
  };

  const signinElements = (
    <>
      <li className={styles.liDropdown}>
        <Link to='/register'>Register</Link>
      </li>
      <li className={styles.liDropdown}>
        <Link to='/signin'>Sign In</Link>
      </li>
    </>
  );

  const signoutElements = (
    <li className={styles.liDropdown} onClick={handleSignout}>
      Sign out
    </li>
  );

  return (
    <>
      <div className={styles.menuBtn} onClick={() => toggleNav()}>
        <Icon icon={menu} iconName='Menu' />
      </div>
      {open && (
        <ul className={styles.navDropdown}>
          {currentUser.isAuthenticated ? signoutElements : signinElements}
        </ul>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps, { signout })(MenuBtn);
