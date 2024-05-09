import React from 'react';

import AppHeader from './AppHeader';
import { StyledMainContentView } from '../Auth/index.styled';
import {
  StyledAppDrawerLayout,
  StyledAppDrawerLayoutMain,
} from './index.styled';

type Props = {
  children: React.ReactNode;
};

export const DrawerLayout: React.FC<Props> = React.memo(({ children }) => {
  return (
    <StyledAppDrawerLayout>
      <StyledAppDrawerLayoutMain className="app-DrawerLayout-main">
        <AppHeader />

        <StyledMainContentView>{children}</StyledMainContentView>
      </StyledAppDrawerLayoutMain>
    </StyledAppDrawerLayout>
  );
});
