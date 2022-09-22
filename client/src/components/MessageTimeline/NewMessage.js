import Icon from '../Icon';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import plus from '../../icons/plus.svg';
import styles from './timeline.module.css';

const NewMessage = ({ currentUser }) => {
  return (
    <Link to={`/users/${currentUser.user.id}/messages/new`}>
      <div className={styles.newMessageBtn}>
        <div className={styles.icon}>
          <Icon icon={plus} alt="New Message" />
        </div>
      </div>
    </Link>
  );
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(NewMessage);