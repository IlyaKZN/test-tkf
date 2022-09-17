import styled from 'styled-components';
import { ButtonStyle } from '../common-styles/common-styles';

const FormContainer = styled.form`
  padding: 20px;
  box-sizing: border-box;
  max-width: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #dadaff;
  font-family: 'Alegreya Sans';
`;

const FormInput = styled.input`
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

const FormTitle = styled.h2`
  font-size: 40px;
  margin: 0;
  text-align: center;
`;

const Button = styled.button`
  ${ButtonStyle}
  background-color: #e6f5f8;
`;

const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const TestDataContainer = styled.div`
  width: 100%;
  display: flex;
`;

const TestDataHeader = styled.h3`
  font-size: 30px;
  margin: 0;
`;

const TestDataText = styled.p`
  font-size: 24px;
  margin: 0;
`;

export {
  FormContainer,
  FormInput,
  Button,
  ButtonsContainer,
  TestDataContainer,
  TestDataText,
  TestDataHeader,
  FormTitle,
};
