import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import { combineReducers } from 'redux';
import authReducer from './AuthReducer/reducer';
import movieReducer from './MovieReducer/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  movies: movieReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
