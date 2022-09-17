import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUser } from '../types/types';

type TUserState = {
  username: string | null,
  email: string | null,
  avatar: string | null,
  friendsList: number[] | null,
  id: number | null
};

const initialState: TUserState = {
  username: null,
  email: null,
  avatar: null,
  friendsList: null,
  id: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (
      state: TUserState,
      action: PayloadAction<TUser>,
    ) => ({ ...state, ...action.payload }),
    clearUser: (state: TUserState) => ({
      ...state, ...initialState,
    }),
  },
});

const userReducer = userSlice.reducer;
export const { setUser, clearUser } = userSlice.actions;
export default userReducer;
