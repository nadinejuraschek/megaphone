import { LOAD_MESSAGES, REMOVE_MESSAGES } from '../actionTypes';

import { addError } from './errors';
import { apiCall } from '../../services/api';
import logger from '../../logger';

export const loadMessages = messages => ({
  type: LOAD_MESSAGES,
  messages,
});

export const fetchMessages = () => {
  return dispatch => {
    return apiCall('get', '/api/messages')
      .then(res => {
        dispatch(loadMessages(res));
      })
      .catch(err => {
        dispatch(addError(err.message));
      });
  };
};

export const postNewMessage = text => (dispatch, getState) => {
  let { currentUser } = getState();
  const id = currentUser.user.id;
  return apiCall('post', `/api/users/${id}/messages`, { text })
    .then(res => {})
    .catch(err => {
      dispatch(addError(err.message));
    });
};

export const remove = id => ({
  type: REMOVE_MESSAGES,
  id,
});

export const removeMessage = (user_id, message_id) => {
  return dispatch => {
    return apiCall('delete', `/api/users/${user_id}/messages/${message_id}`)
      .then(() => dispatch(remove(message_id)))
      .catch(err => {
        dispatch(addError(err.message));
        logger('Actions Auth').error('Could not remove message.');
      });
  };
};