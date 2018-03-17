import { onUserStateChange, onSignUp, onSignIn, onSignOut } from '../../services/userFirebaseApi';
import { USER } from './reducers';

export function listenForUser() {
  return dispatch => {
    onUserStateChange(user => {
      dispatch({
        type: USER,
        payload: user
      });
    });
  };
}

export function signup({ email, password }) {
  return () => onSignUp(email, password);
}

export function signin({ email, password }) {
  return () => onSignIn(email, password);
}

export function logout() {
  return () => onSignOut();
}