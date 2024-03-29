import { FormEvent, useState } from 'react';

import { Errors } from '../../types';
import { IMessageForm } from './types';
import { connect } from 'react-redux';
import logger from '../../logger';
import { postNewMessage } from '../../store/actions/messages';
import { removeError } from '../../store/actions/errors';
import styles from './messageform.module.css';
import { useHistory } from 'react-router-dom';

const MessageForm = ({
  postNewMessage,
  errors,
  removeError,
}: IMessageForm): JSX.Element => {
  const [message, setMessage] = useState('');

  const history = useHistory();

  const handleNewMessage = (event: FormEvent): void => {
    event.preventDefault();
    postNewMessage(message);
    setMessage('');
    logger('MessageForm').info('New message was posted successfully.');
    history.push('/');
  };

  history.listen(() => {
    removeError();
  });

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>New Message</h3>
      <form className={styles.form} onSubmit={handleNewMessage}>
        {errors.message && <div className={styles.alert}>{errors.message}</div>}
        <textarea
          className={styles.text}
          value={message}
          placeholder='Say what you need to say!'
          onChange={event => setMessage(event.target.value)}
        />
        <button type='submit' className={styles.button}>
          Done!
        </button>
      </form>
    </div>
  );
};

function mapStateToProps(state: { errors: Errors }) {
  return {
    errors: state.errors,
  };
}

export default connect(mapStateToProps, { postNewMessage, removeError })(
  MessageForm
);
