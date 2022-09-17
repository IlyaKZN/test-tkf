import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import userReducer from './userSlice';
import apiReducer from './apiSlice';
import viewReducer from './viewSlice';

const store = configureStore({
  reducer: {
    userReducer,
    apiReducer,
    viewReducer,
  },
  middleware: [thunk],
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== 'production',
});
export default store;
