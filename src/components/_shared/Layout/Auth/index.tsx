import React, { useState } from 'react';

import {
  StyledAuth,
  StyledAuthCard,
  StyledAuthCardHeader,
  StyledAuthMainContent,
  StyledAuthWelContent,
  StyledAuthWellAction,
  StyledAuthWrap,
} from './index.styled';
import { Segmented } from 'antd';

type Props = {
  children: React.ReactNode;
};

export const AuthWrapper: React.FC<Props> = ({ children }) => {
  const [role, setRole] = useState<'teacher' | 'student'>('student');

  return (
    <StyledAuth>
      <StyledAuthWrap key={'wrap'}>
        <StyledAuthCard>
          <StyledAuthMainContent>
            <StyledAuthCardHeader>
              <h1>Polyglot Academy</h1>
            </StyledAuthCardHeader>
            {children}
          </StyledAuthMainContent>

          <StyledAuthWellAction>
            <StyledAuthWelContent>
              <Segmented
                size="small"
                onChange={(value) => setRole(value as 'teacher' | 'student')}
                options={[
                  {
                    label: <div style={{ padding: 4 }}>👨‍🎓 Aluno(a)</div>,
                    value: 'student',
                  },
                  {
                    label: <div style={{ padding: 4 }}>👩‍🏫 Professor(a)</div>,
                    value: 'teacher',
                  },
                ]}
              />

              <div>
                <h2>
                  {role === 'student' ? '👨‍🎓' : '👩‍🏫'}
                  <br />
                  Bem vindo de volta,
                  <br />
                  <span
                    style={{
                      color: '#9B34E0',
                    }}
                  >
                    {role === 'student' ? ' Aluno(a)' : ' Professor(a)'}
                  </span>
                  .
                </h2>
                <p>
                  Polyglot Academy é uma novidade no ensino de idioma online,
                  esperamos que encontre o que procura por aqui!
                </p>
              </div>

              <span></span>
              <span></span>
            </StyledAuthWelContent>
          </StyledAuthWellAction>
        </StyledAuthCard>
      </StyledAuthWrap>
    </StyledAuth>
  );
};
