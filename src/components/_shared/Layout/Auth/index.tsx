import React from 'react';

import { CodeOutlined } from '@ant-design/icons';

import {
  StyledAuth,
  StyledAuthCard,
  StyledAuthCardHeader,
  StyledAuthMainContent,
  StyledAuthWelContent,
  StyledAuthWellAction,
  StyledAuthWrap,
} from './index.styled';

type Props = {
  children: React.ReactNode;
};

export const AuthWrapper: React.FC<Props> = ({ children }) => {
  return (
    <StyledAuth>
      <StyledAuthWrap key={'wrap'}>
        <StyledAuthCard>
          <StyledAuthMainContent>
            <StyledAuthCardHeader>
              <CodeOutlined style={{ color: 'black', fontSize: '2rem' }} />
              <p>Polyglot</p>
            </StyledAuthCardHeader>
            {children}
          </StyledAuthMainContent>
          <StyledAuthWellAction>
            <StyledAuthWelContent>
              <h2>Acesse agora mesmo!</h2>
              <p>
                A polyglot tem tudo o que você precisa em uma só plataforma.
                Aprenda com os melhores professores do mundo!
              </p>
            </StyledAuthWelContent>
          </StyledAuthWellAction>
        </StyledAuthCard>
      </StyledAuthWrap>
    </StyledAuth>
  );
};
