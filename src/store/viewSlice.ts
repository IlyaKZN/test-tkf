import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUser } from '../types/types';

type TViewState = {
  users: TUser[];
}

const initialState: TViewState = {
  users: [],
};

const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    setUsers: (state: TViewState, action: PayloadAction<TUser[]>) => ({
      ...state, users: action.payload,
    }),
    clearUsers: (state: TViewState) => ({
      ...state, users: [],
    }),
  },
});

export const { setUsers, clearUsers } = viewSlice.actions;
const viewReducer = viewSlice.reducer;
export default viewReducer;
