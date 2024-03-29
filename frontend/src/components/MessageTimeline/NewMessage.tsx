import { ICurrentUser } from '../../types';
import { INewMessage } from './types';
import Icon from '../Icon';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import plus from '../../icons/plus.svg';
import styles from './timeline.module.css';

const NewMessage = ({ currentUser }: INewMessage): JSX.Element => (
  <Link to={`/users/${currentUser.user.id}/messages/new`}>
    <div className={styles.newMessageBtn}>
      <div className={styles.icon}>
        <Icon icon={plus} iconName='New Message' />
      </div>
    </div>
  </Link>
);

const mapStateToProps = (state: { currentUser: ICurrentUser }) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(NewMessage);
