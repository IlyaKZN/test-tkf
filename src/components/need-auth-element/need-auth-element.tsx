import React, {FC} from 'react';
import { Title, LoginLink } from './need-auth-element-styles';

const NeedAuthElement: FC = () => {
  return (
    <Title>
      Необходима авторизация <LoginLink to={'/'}>Войти</LoginLink>
    </Title>

  )
};

export default NeedAuthElement;