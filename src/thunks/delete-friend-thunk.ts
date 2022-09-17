import { batch } from 'react-redux';
import { AppDispatch, AppThunk } from '../store/store.types';
import { deleteFriend } from '../utils/users-api';
import { deleteFriendFailed, deleteFriendRequested, deleteFriendSucceeded } from '../store/apiSlice';
import { TAPIError } from '../types/api.types';
import { setUser } from '../store/userSlice';

const deleteFriendThunk: AppThunk = (id: number) => async (
  dispatch: AppDispatch,
) => {
  try {
    dispatch((deleteFriendRequested()));
    const data = await deleteFriend(id);
    batch(() => {
      dispatch(setUser(data));
      dispatch(deleteFriendSucceeded());
    });
  } catch (error) {
    dispatch(deleteFriendFailed(error as TAPIError));
  }
};

export default deleteFriendThunk;
