import { FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } from './actionTypes';
import axios from 'axios';

export const fetchMovies = (queryParams) => async (dispatch) => {
  dispatch({ type: FETCH_MOVIES_REQUEST });
  try {
    const response = await axios.get(`https://backendcloudinnovation.vercel.app/movies${queryParams?queryParams:""}`);
    dispatch({ type: FETCH_MOVIES_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_MOVIES_FAILURE });
  }
};
