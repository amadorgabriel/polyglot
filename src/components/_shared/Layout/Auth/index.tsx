import React, { useEffect, useState } from 'react';

import { Segmented } from 'antd';
import { useLocation } from 'react-router-dom';

import { IUser } from '../../../../core/config/redux/auth/types';
import { useAuthRoleAlternativesContext } from '../../../../core/contexts/auth/role-alternatives';
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
  const { role, setRole } = useAuthRoleAlternativesContext();

  const { pathname } = useLocation();

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
                defaultValue={role}
                onChange={(value) => {
                  setRole(value as IUser['role']);
                }}
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
                  {pathname === '/signup'
                    ? 'Estamos feliz por te ver  aqui,'
                    : 'Bem vindo de volta, '}
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
