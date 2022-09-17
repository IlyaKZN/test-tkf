import react, { FC } from "react";
import { useSelector } from "../../types/hooks";
import DefaultPageLayout from "../../layouts/defaultPageLayout";
import {
  ContentContainer,
  ProfilePreview,
  ProfilePreviewImg,
  Username,
  Email
} from "./friends-list-page-styles";
import FriendsList from "../../components/friends-list/friends-list";
import NeedAuthElement from "../../components/need-auth-element/need-auth-element";

const FriendsListPage: FC = () => {
  const { username, email, avatar } = useSelector((store) => store.userReducer);

  if (!username) {
    return (
      <DefaultPageLayout>
        <NeedAuthElement />
      </DefaultPageLayout>
    )
  }

  return (
    <DefaultPageLayout>
      <ContentContainer>
        <ProfilePreview>
          <ProfilePreviewImg src={avatar!} alt="Аватар пользователя" />
          <Email>{email}</Email>
          <Username>{username}</Username>
        </ProfilePreview>
        <FriendsList />
      </ContentContainer>
    </DefaultPageLayout>
  );
};

export default FriendsListPage;
