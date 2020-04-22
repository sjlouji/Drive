import axios from 'axios';
import {
  USER_LOADED,
  USER_LOADING,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
} from './types';

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  axios
    .get('http://localhost:8000/api/auth/user', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err.response)
    });
};

// LOGIN USER
export const login = (email, password) => (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  // Request Body
  const body = JSON.stringify({ email, password });

  axios
    .post('http://localhost:8000/api/auth/login', body, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      console.log(res.data)
    })
    .catch((err) => {
        console.log(err.response)
    });
};

// REGISTER USER
export const register = ({ first_name,last_name, password, email }) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Request Body
  const body = JSON.stringify({ first_name,last_name, email, password });

  axios
    .post('http://localhost:8000/api/auth/register', body, config)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
        console.log(err.response)

    });
};

// LOGOUT USER
export const logout = () => (dispatch, getState) => {
  axios
    .post('http://localhost:8000/api/auth/logout/', null, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: LOGOUT_SUCCESS,
      });
      console.log(res.data, 'login success')
    })
    .catch((err) => {
        console.log(err.response.data)
    });
};

// Setup config with token - helper function
export const tokenConfig = (getState) => {
  const token = getState().auth.token;
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }

  return config;
};