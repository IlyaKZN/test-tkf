import { batch } from 'react-redux';
import { loginUser } from '../utils/account-api';
import { setUser } from '../store/userSlice';
import { setCookie } from '../utils/cookie-utils';
import { AppDispatch, AppThunk } from '../store/store.types';
import { TUser } from '../types/types';
import { userLoginRequested, userLoginFailed, userLoginSucceeded } from '../store/apiSlice';
import { TAPIError } from '../types/api.types';

const loginUserThunk : AppThunk = (formValues: {email: string, password: string}) => async (
  dispatch: AppDispatch,
) => {
  try {
    dispatch(userLoginRequested());
    const { email, password } = formValues;
    const { user, token } = await loginUser(email, password);
    setCookie('accessToken', token, { expires: 1200 });
    batch(() => {
      dispatch(userLoginSucceeded());
      dispatch(setUser(user as TUser));
    });
  } catch (error) {
    dispatch(userLoginFailed(error as TAPIError));
  }
};
export default loginUserThunk;
