import styled from 'styled-components';
import { Link } from 'react-router-dom';
import githubIcon from '../../images/github-icon.png';
import { ButtonStyle } from '../../common-styles/common-styles';

const HeaderStyled = styled.header`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  content: '';
    border-bottom: 3px #7e7ef2 solid;
`;

const Container = styled.div`
  max-width: 1140px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderNavigation = styled.nav``;

const LinkList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  gap: 20px;
`;

const ListEl = styled.li`
  list-style-type: none;
`;

const LinkStyled = styled(Link)`
  ${ButtonStyle};
  text-decoration: none;
  display: block;
`;

const GitHubLink = styled.a`
  width: 70px;
  height: 70px;
  background-image: url(${githubIcon});
  background-size: contain;
`;

const LogoutButton = styled.button`
  ${ButtonStyle};
  background-color: #ffcc86;

`;

export {
  HeaderStyled, Container, LinkStyled, GitHubLink, HeaderNavigation, LinkList, ListEl, LogoutButton,
};
