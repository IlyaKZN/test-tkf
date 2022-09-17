import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TAPIError } from '../types/api.types';

type TAPIState = {
  successMessage: string | null,
  errorMessage: string | null,
  errorObject: TAPIError | null,
  isUserRegistering: boolean,
  isUserFetching: boolean,
  isUserLoggingIn: boolean,
  isUsersFetching: boolean,
  isFriendAdding: boolean,
  isFriendDeletting: boolean,
  isFriendPatching: boolean,
};

const initialState: TAPIState = {
  successMessage: null,
  errorMessage: null,
  errorObject: null,
  isUserRegistering: false,
  isUserLoggingIn: false,
  isUserFetching: false,
  isUsersFetching: false,
  isFriendAdding: false,
  isFriendDeletting: false,
  isFriendPatching: false,
};

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    setSuccessMessage: (state: TAPIState, action: PayloadAction<string>) => ({
      ...state, successMessage: action.payload,
    }),
    clearSuccessMessage: (state: TAPIState) => ({
      ...state, successMessage: null,
    }),
    setErrorMessage: (state: TAPIState, action: PayloadAction<string>) => ({
      ...state, errorMessage: action.payload,
    }),
    clearErrorMessage: (state: TAPIState) => ({
      ...state, errorMessage: null,
    }),
    setErrorObject: (state: TAPIState, action: PayloadAction<TAPIError>) => ({
      ...state, errorObject: action.payload,
    }),
    clearErrorObject: (state: TAPIState) => ({
      ...state, errorObject: null,
    }),
    allPostsRequested: (state: TAPIState) => ({
      ...state, isAllPostsRequested: true,
    }),
    allPostsRequestSucceeded: (state: TAPIState) => ({
      ...state, isAllPostsRequested: false,
    }),
    allPostsRequestFailed: (state: TAPIState, action: PayloadAction<TAPIError>) => ({
      ...state, isUserRegistering: false, errorObject: action.payload,
    }),
    userRegistrationRequested: (state: TAPIState) => ({
      ...state, isUserRegistering: true,
    }),
    userRegistrationSucceeded: (state: TAPIState) => ({
      ...state, isUserRegistering: false,
    }),
    userRegistrationFailed: (state: TAPIState, action: PayloadAction<TAPIError>) => ({
      ...state, isUserRegistering: false, errorObject: action.payload,
    }),
    userLoginRequested: (state: TAPIState) => ({
      ...state, isUserLoggingIn: true,
    }),
    userLoginSucceeded: (state: TAPIState) => ({
      ...state, isUserLoggingIn: false,
    }),
    userLoginFailed: (state: TAPIState, action: PayloadAction<TAPIError>) => ({
      ...state, isUserLoggingIn: false, errorObject: action.payload,
    }),
    userFetchRequested: (state: TAPIState) => ({
      ...state, isUserFetching: true,
    }),
    userFetchSucceeded: (state: TAPIState) => ({
      ...state, isUserFetching: false,
    }),
    userFetchFailed: (state: TAPIState, action: PayloadAction<TAPIError>) => ({
      ...state, isUserFetching: false, errorObject: action.payload,
    }),
    usersFetchRequested: (state: TAPIState) => ({
      ...state, isUsersFetching: true,
    }),
    usersFetchSucceeded: (state: TAPIState) => ({
      ...state, isUsersFetching: false,
    }),
    usersFetchFailed: (state: TAPIState, action: PayloadAction<TAPIError>) => ({
      ...state, isUsersFetching: false, errorObject: action.payload,
    }),
    addFriendRequested: (state: TAPIState) => ({
      ...state, isFriendAdding: true,
    }),
    addFriendSucceeded: (state: TAPIState) => ({
      ...state, isFriendAdding: false,
    }),
    addFriendFailed: (state: TAPIState, action: PayloadAction<TAPIError>) => ({
      ...state, isFriendAdding: false, errorObject: action.payload,
    }),
    deleteFriendRequested: (state: TAPIState) => ({
      ...state, isFriendDeletting: true,
    }),
    deleteFriendSucceeded: (state: TAPIState) => ({
      ...state, isFriendDeletting: false,
    }),
    deleteFriendFailed: (state: TAPIState, action: PayloadAction<TAPIError>) => ({
      ...state, isFriendDeletting: false, errorObject: action.payload,
    }),
    patchFriendRequested: (state: TAPIState) => ({
      ...state, isFriendPatching: true,
    }),
    patchFriendFailed: (state: TAPIState, action: PayloadAction<TAPIError>) => ({
      ...state, isFriendPatching: false, errorObject: action.payload,
    }),
    patchFriendSucceeded: (state: TAPIState) => ({
      ...state, isFriendDeletting: false,
    }),
  },
});

const apiReducer = apiSlice.reducer;
export const {
  setSuccessMessage,
  setErrorMessage,
  clearSuccessMessage,
  clearErrorMessage,
  clearErrorObject,
  setErrorObject,
  userRegistrationRequested,
  userRegistrationSucceeded,
  userRegistrationFailed,
  userLoginRequested,
  userLoginSucceeded,
  userLoginFailed,
  userFetchRequested,
  userFetchSucceeded,
  userFetchFailed,
  usersFetchFailed,
  usersFetchRequested,
  usersFetchSucceeded,
  addFriendFailed,
  addFriendRequested,
  addFriendSucceeded,
  deleteFriendFailed,
  deleteFriendRequested,
  deleteFriendSucceeded,
  patchFriendFailed,
  patchFriendRequested,
  patchFriendSucceeded
} = apiSlice.actions;
export default apiReducer;
