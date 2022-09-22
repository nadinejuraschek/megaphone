import React, { useState } from 'react';

// COMPONENTS
import Icon from '../../components/Icon';
import { Link } from 'react-router-dom';
import MenuBtn from './MenuBtn';
import Profile from '../../components/Profile';
import { connect } from 'react-redux';
// ICONS
import megaphone from '../../icons/megaphone.svg';
import { signout } from '../../store/actions/auth';
// STYLES
import styles from './navbar.module.css';

const MobileNav = ({ currentUser }) => {
  const [ openNav, setOpenNav ] = useState(false);

  const toggleNav = () => {
    openNav ? setOpenNav(false) : setOpenNav(true);
  };

  return (
    <nav>
      {
        currentUser.isAuthenticated
        ?
        <Profile
          profileImageUrl={currentUser.user.profileImageUrl}
          username={currentUser.user.username}
          height='5rem'
          width='5rem'
        />
        :
        <Link to='/' className={styles.navbarBrand}>
          <Icon icon={megaphone} iconName="Logo" />
        </Link>
      }
      <MenuBtn toggleNav={toggleNav} open={openNav} />
    </nav>
  );
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps, { signout })(MobileNav);
