import React, { ChangeEvent, FC, useEffect, useState } from "react";
import {
  Container,
  SearchContainer,
  SearchField,
  SearchTitle,
} from "./friends-list-styles";
import FriendPreview from "../friend-preview/friend-preview";
import { useSelector } from "../../types/hooks";
import getUsersThunk from "../../thunks/get-users-thunk";
import { useDispatch } from "../../types/hooks";
import addFriendThunk from "../../thunks/add-friend-thunk";
import deleteFriendThunk from "../../thunks/delete-friend-thunk";
import patchFriendThunk from "../../thunks/patch-friend-thunk";
import { TUser } from "../../types/types";

const FriendsList: FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [filteredUsers, setFilteredUsers] = useState<TUser[]>();

  const dispatch = useDispatch();

  const { users } = useSelector((store) => store.viewReducer);
  const activeUser = useSelector((store) => store.userReducer);

  useEffect(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);

  useEffect(() => {
    const filteredUsers = users.filter(
      (user) =>
        user.id !== activeUser.id &&
        user.username.toLowerCase().startsWith(searchValue.toLocaleLowerCase())
    );
    setFilteredUsers(filteredUsers);
  }, [searchValue, users]);

  const onChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const addFriend = (id: number) => {
    dispatch(addFriendThunk(id));
  };

  const deleteFriend = (id: number) => {
    dispatch(deleteFriendThunk(id));
  };

  const patchFriend = (id: number, username: string) => {
    dispatch(patchFriendThunk(id, username));
  }

  return (
    <>
      {activeUser.friendsList !== null ? (
        <Container>
          <SearchContainer>
            <SearchTitle>Поиск пользователей</SearchTitle>
            <SearchField
              placeholder="Введите username"
              value={searchValue}
              onChange={onChangeSearchValue}
            />
          </SearchContainer>
          {filteredUsers
            ? filteredUsers.map((user) => (
                <FriendPreview
                  userData={user}
                  key={user.id}
                  friendStatus={activeUser.friendsList!.indexOf(user.id) !== -1}
                  addFriend={addFriend}
                  deleteFriend={deleteFriend}
                  patchFriend={patchFriend}
                />
              ))
            : null}
        </Container>
      ) : null}
    </>
  );
};

export default FriendsList;
