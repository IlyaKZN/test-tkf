import { batch } from 'react-redux';
import { AppDispatch, AppThunk } from '../store/store.types';
import { addFriend } from '../utils/users-api';
import { addFriendFailed, addFriendRequested, addFriendSucceeded } from '../store/apiSlice';
import { TAPIError } from '../types/api.types';
import { setUser } from '../store/userSlice';

const addFriendThunk: AppThunk = (id: number) => async (
  dispatch: AppDispatch,
) => {
  try {
    dispatch((addFriendRequested()));
    const data = await addFriend(id);
    batch(() => {
      dispatch(setUser(data));
      dispatch(addFriendSucceeded());
    });
  } catch (error) {
    dispatch(addFriendFailed(error as TAPIError));
  }
};

export default addFriendThunk;
