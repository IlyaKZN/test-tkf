import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  background-color: #dadaff;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 700px;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;
`;

const SearchContainer = styled.div`
  width: 100%;
`;

const SearchTitle = styled.h3`
  font-family: 'Alegreya Sans';
  font-size: 40px;
  margin: 0 0 15px 0;
`;

const SearchField = styled.input`
  font-family: "Alegreya Sans";
  width: 100%;
  border: rgb(158, 219, 255) 2px solid;
  border-radius: 6px;
  box-sizing: border-box;
  height: 50px;
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  outline: none;

  &:focus::placeholder {
    opacity: 0;
  }
  &:focus-visible {
    border-color: gray;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Container, SearchContainer, SearchField, SearchTitle };
