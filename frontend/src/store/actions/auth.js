import { addError, removeError } from './errors';
import { apiCall, setTokenHeader } from '../../services/api';

import { SET_CURRENT_USER } from '../actionTypes';
import logger from '../../logger';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user,
  };
};

export function setAuthorizationToken(token) {
  setTokenHeader(token);
};

export function signout() {
  return dispatch => {
    localStorage.clear();
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
    logger('Actions Auth').info('User is signed out.');
  };
};

export function authUser(type, userData) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      return apiCall('post', `/api/auth/${type}`, userData)
        .then(({ token, ...user }) => {
          localStorage.setItem('jwtToken', token);
          setAuthorizationToken(token);
          dispatch(setCurrentUser(user));
          dispatch(removeError());
          resolve();
        })
        .catch(err => {
          dispatch(addError(err.message));
          logger('Actions Auth').error('Could not authenticate user.');
          reject();
        });
    });
  };
}
