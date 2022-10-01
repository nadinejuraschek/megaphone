import { ICurrentUser } from '../../types';
import { IMobileNav } from './types';
import Icon from '../../components/Icon';
import { Link } from 'react-router-dom';
import MenuBtn from './MenuBtn';
import Profile from '../../components/Profile';
import { connect } from 'react-redux';
import megaphone from '../../icons/megaphone.svg';
import { signout } from '../../store/actions/auth';
import styles from './navbar.module.css';
import { useState } from 'react';

const MobileNav = ({ currentUser }: IMobileNav): JSX.Element => {
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = (): void => {
    openNav ? setOpenNav(false) : setOpenNav(true);
  };

  const logo = (
    <Link to='/' className={styles.navbarBrand}>
      <Icon icon={megaphone} iconName='Logo' />
    </Link>
  );

  const profile = (
    <Profile
      profileImageUrl={currentUser.user.profileImageUrl}
      username={currentUser.user.username}
      height='5rem'
      width='5rem'
    />
  );

  return (
    <nav>
      {currentUser.isAuthenticated ? profile : logo}
      <MenuBtn toggleNav={toggleNav} open={openNav} />
    </nav>
  );
};

function mapStateToProps(state: { currentUser: ICurrentUser }) {
  return {
    currentUser: state.currentUser,
  };
}

export default connect(mapStateToProps, { signout })(MobileNav);
