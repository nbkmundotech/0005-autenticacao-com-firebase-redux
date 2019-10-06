import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

// Importar action types (tipos de ação)
import {
  CHANGE_LOGIN_EMAIL,
  CHANGE_LOGIN_PASSWORD,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_LOADING,
  REGISTER_USER_LOADING,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL
} from './types';

// Action creators (criadores de ação)

export const changeLoginEmail = (email) => {
  return {
    type: CHANGE_LOGIN_EMAIL,
    payload: email
  };
};

export const changeLoginPassword = (password) => {
  return {
    type: CHANGE_LOGIN_PASSWORD,
    payload: password
  }
};

export const loginUser = (userInfo) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_USER_LOADING
    });

    firebase.auth().signInWithEmailAndPassword(userInfo.email, userInfo.password)
      .then((response) => {
        console.log(response);

        dispatch({
          type: LOGIN_USER_SUCCESS
        });

        // muda de cena
        Actions.main();
      })
      .catch((error) => {
        console.log(error);

        dispatch({
          type: LOGIN_USER_FAIL,
          payload: error.message
        });
      });
  };
};

export const registerUser = (userInfo) => {
  const { email, password } = userInfo;

  return (dispatch) => {
    dispatch({
      type: REGISTER_USER_LOADING
    });

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response);

        dispatch({
          type: REGISTER_USER_SUCCESS
        });
      })
      .catch((error) => {
        console.log(error);

        dispatch({
          type: REGISTER_USER_FAIL,
          payload: error.message
        });
      })
    ;
  };
};
