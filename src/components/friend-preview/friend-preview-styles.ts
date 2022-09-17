import styled from 'styled-components';
import deleteButton from '../../images/deleteButton.png';
import editIcon from '../../images/editIcon.png';
import checkMark from '../../images/checkMark.png';
import { ButtonStyle } from '../../common-styles/common-styles';

const PreviewContainer = styled.div`
  width: 100%;
  background-color: white;
  padding: 4px 15px;
  box-sizing: border-box;
  line-height: 0;
  font-family: "Alegreya Sans";
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 100%;
`;

const UserDataContainer = styled.div`
  box-sizing: border-box;
  margin-left: 30px;
  max-width: 100%;
`;

const Username = styled.input`
  font-size: 30px;
  display: block;
  background-color: rgba(1, 1, 1, 0);
  border: none;

  &:focus {
    outline: 1px solid blue;
    background-color: #dadaff;
  }
`;

const Email = styled.p`
  font-size: 20px;
`;

const AddButton = styled.button`
  ${ButtonStyle}

  :disabled {
    background-color: #aaf8aa;
    cursor: default;
  }
`;

const DeleteButton = styled.button`
  height: 40px;
  width: 40px;
  background-image: url(${deleteButton});
  background-size: contain;
  background-color: rgba(1, 1, 1, 0);
  border: none;
  cursor: pointer;
`;

const ButtonsContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 25px;
`;

const ChangeUsernameButton = styled.button`
  height: 35px;
  width: 35px;
  border: none;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const EditButton = styled(ChangeUsernameButton)`
  background-image: url(${editIcon});
`;

const SaveButton = styled(ChangeUsernameButton)`
  background-image: url(${checkMark});
`;

const UserNameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export {
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
  SaveButton
};
