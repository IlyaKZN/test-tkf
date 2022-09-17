import React, { FC, ReactNode } from 'react';
import { Background, ContentContainer } from './defaultPageLayout-styles';

interface TDefaultPageLayoutProps {
  children: ReactNode;
}

const DefaultPageLayout: FC<TDefaultPageLayoutProps> = ({ children }) => {
  return (
    <Background>
      <ContentContainer>
        {children}
      </ContentContainer>
    </Background>
  )
};

export default DefaultPageLayout;