import React, { FC, useState, useRef, ChangeEvent, KeyboardEvent } from "react";
import { TUser } from "../../types/types";
import {
  PreviewContainer,
  Avatar,
  UserDataContainer,
  Username,
  Email,
  AddButton,
  DeleteButton,
  ButtonsContainer,
  EditButton,
  UserNameContainer,
  SaveButton,
} from "./friend-preview-styles";

interface IFriendPreviewProps {
  userData: TUser;
  friendStatus: boolean;
  addFriend: Function;
  deleteFriend: Function;
  patchFriend: Function;
}

const FriendPreview: FC<IFriendPreviewProps> = ({
  userData,
  friendStatus,
  addFriend,
  deleteFriend,
  patchFriend,
}) => {
  const [isChanging, setIsChanging] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>(userData.username);

  const usernameRef = useRef<HTMLInputElement>(null);

  const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const startChanges = () => {
    usernameRef?.current?.focus();
    setIsChanging(true);
  };

  const saveChanges = () => {
    usernameRef?.current?.blur();
    setIsChanging(false);
    patchFriend(userData.id, userName);
  };

  const checkEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      saveChanges();
    }
  };

  return (
    <PreviewContainer>
      <Avatar src={userData.avatar} alt="Аватар пользователя" />
      <UserDataContainer>
        <UserNameContainer>
          <Username
            value={userName}
            size={userName.length || 1}
            maxLength={30}
            onChange={onChangeUsername}
            tabIndex={-1}
            contentEditable={isChanging ? true : false}
            ref={usernameRef}
            onBlur={saveChanges}
            onMouseDown={(e) => e.preventDefault()}
            onKeyDown={(e) => checkEnter(e)}
          />
          {isChanging ? (
            <SaveButton/>
          ) : (
            <EditButton
              onClick={startChanges}
              onMouseDown={(e) => e.preventDefault()}
            />
          )}
        </UserNameContainer>
        <Email>{userData.email}</Email>
      </UserDataContainer>
      <ButtonsContainer>
        <AddButton
          onClick={() => addFriend(userData.id)}
          disabled={friendStatus}
        >
          {friendStatus ? "В друзьях" : "Добавить"}
        </AddButton>
        {friendStatus ? (
          <DeleteButton onClick={() => deleteFriend(userData.id)} />
        ) : null}
      </ButtonsContainer>
    </PreviewContainer>
  );
};

export default FriendPreview;
