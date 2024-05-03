import React from 'react';
import {
  StyledAuth,
  StyledAuthCard,
  StyledAuthCardHeader,
  StyledAuthMainContent,
  StyledAuthWelContent,
  StyledAuthWellAction,
  StyledAuthWrap,
  // StyledMainAuthScrollbar,
} from './index.styled';
type Props = {
  children: React.ReactNode;
};
export const AuthWrapper: React.FC<Props> = ({ children }) => {
  return (
    <StyledAuth>
      {/* <StyledMainAuthScrollbar> */}

      <StyledAuthWrap key={'wrap'}>
        <StyledAuthCard>
          <StyledAuthMainContent>
            <StyledAuthCardHeader>{/* <AppLogo /> */}</StyledAuthCardHeader>
            {children}
          </StyledAuthMainContent>
          <StyledAuthWellAction>
            <StyledAuthWelContent>
              <h2>Welcome to Crema!</h2>
              <p>
                Crema is purely based on Ant Design components and follows Ant
                Design guidelines.
              </p>
            </StyledAuthWelContent>
          </StyledAuthWellAction>
        </StyledAuthCard>
      </StyledAuthWrap>

      {/* </StyledMainAuthScrollbar> */}
    </StyledAuth>
  );
};
