import { batch } from 'react-redux';
import { AppDispatch, AppThunk, RootState } from '../store/store.types';
import { patchFriend } from '../utils/users-api';
import { patchFriendFailed, patchFriendRequested, patchFriendSucceeded } from '../store/apiSlice';
import { TAPIError } from '../types/api.types';
import { setUsers } from '../store/viewSlice';

const patchFriendThunk: AppThunk = (id: number, username: string) => async (
  dispatch: AppDispatch,
  getState: () => RootState,
) => {
  try {
    dispatch((patchFriendRequested()));
    const updatedUserData = await patchFriend(id, username);
    const userList = getState().viewReducer.users;
    const updatedUserList = userList.map((user) => {
      if (user.id === updatedUserData.id) {
        return updatedUserData;
      }
      return user;
    })
    batch(() => {
      dispatch(setUsers(updatedUserList));
      dispatch(patchFriendSucceeded());
    });
  } catch (error) {
    dispatch(patchFriendFailed(error as TAPIError));
  }
};

export default patchFriendThunk;