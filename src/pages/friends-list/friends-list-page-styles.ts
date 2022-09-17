import styled from 'styled-components';

const ContentContainer = styled.section`
  font-family: "Alegreya Sans";
  display: flex;
  gap: 15px;
`;

const ProfilePreview = styled.div`
  padding: 20px 10px;
  box-sizing: border-box;
  width: 250px;
  background-color: #dadaff;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

const ProfilePreviewImg = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 100%;
  object-fit: cover;
`;

const Email = styled.p`
  margin: 0;
  font-size: 20px;
`;

const Username = styled.p`
  margin: 0;
  font-size: 32px;
`;

export {
  ContentContainer, ProfilePreview, ProfilePreviewImg, Username, Email,
};
