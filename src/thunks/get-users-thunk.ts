import { batch } from 'react-redux';
import { AppDispatch, AppThunk } from '../store/store.types';
import { getUsers } from '../utils/users-api';
import { usersFetchFailed, usersFetchRequested, usersFetchSucceeded } from '../store/apiSlice';
import { TAPIError } from '../types/api.types';
import { setUsers } from '../store/viewSlice';

const getUsersThunk: AppThunk = () => async (
  dispatch: AppDispatch,
) => {
  try {
    dispatch(usersFetchRequested());
    const data = await getUsers();
    batch(() => {
      dispatch(setUsers(data));
      dispatch(usersFetchSucceeded());
    });
  } catch (error) {
    dispatch(usersFetchFailed(error as TAPIError));
  }
};

export default getUsersThunk;
