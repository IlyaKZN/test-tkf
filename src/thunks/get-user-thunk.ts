import { batch } from 'react-redux';
import { AppDispatch, AppThunk } from '../store/store.types';
import { getUser } from '../utils/users-api';
import { userFetchFailed, userFetchRequested, userFetchSucceeded } from '../store/apiSlice';
import { TAPIError } from '../types/api.types';
import { setUser } from '../store/userSlice';

const getUserThunk: AppThunk = () => async (
  dispatch: AppDispatch,
) => {
  try {
    dispatch(userFetchRequested());
    const data = await getUser();
    batch(() => {
      dispatch(setUser(data));
      dispatch(userFetchSucceeded());
    });
  } catch (error) {
    dispatch(userFetchFailed(error as TAPIError));
  }
};

export default getUserThunk;
