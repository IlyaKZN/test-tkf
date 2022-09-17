import React, { FC, useEffect } from 'react';
import { useSelector } from '../../types/hooks';
import DefaultPageLayout from '../../layouts/defaultPageLayout';
import { ContentContainer } from './login-page-styles';
import LoginForm from '../../forms/login-form';
import { useNavigate } from 'react-router';

const LoginPage: FC = () => {

  const user = useSelector((store) => store.userReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.username) {
      navigate('/friends');
    }
  }, [user])
  

  return (
    <DefaultPageLayout>
      <ContentContainer>
        <LoginForm />
      </ContentContainer>
    </DefaultPageLayout>
  )
};

export default LoginPage;