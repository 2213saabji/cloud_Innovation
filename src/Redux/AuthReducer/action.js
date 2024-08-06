import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes';
import axios from 'axios';

export const login = (credentials,navigate) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const response = await axios.post('https://reqres.in/api/login', credentials);
    dispatch({ type: LOGIN_SUCCESS, payload: response.data.token });
    localStorage.setItem("token",response.data.token)
    navigate("/")
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE });
    alert("Login and Password didn't Match");
  }
};
