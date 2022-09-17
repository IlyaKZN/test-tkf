import React, { FC } from "react";
import {
  HeaderStyled,
  Container,
  GitHubLink,
  LinkStyled,
  HeaderNavigation,
  LinkList,
  ListEl,
  LogoutButton
} from "./header-styles";
import { useSelector } from "../../types/hooks";
import { useDispatch } from "../../types/hooks";
import { clearUser } from "../../store/userSlice";
import { setCookie } from "../../utils/cookie-utils";

const Header: FC = () => {

  const { username } = useSelector((store) => store.userReducer);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(clearUser());
    setCookie('accessToken', '', { expires: '0s' });
  }

  return (
    <HeaderStyled>
      <Container>
        <GitHubLink href="https://github.com/IlyaKZN" target="_blank" />
        <HeaderNavigation>
          <LinkList>
            <ListEl>
              <LinkStyled to="/friends">Друзья</LinkStyled>
            </ListEl>
            <ListEl>
            {
              username ? 
              <LogoutButton onClick={onLogout}>Выйти</LogoutButton> :
              <LinkStyled to="/">Войти</LinkStyled>
            }
            </ListEl>
          </LinkList>
        </HeaderNavigation>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
