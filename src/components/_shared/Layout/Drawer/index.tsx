import React, { useState } from 'react';
import AppSidebar from './AppSidebar';
import AppHeader from './AppHeader';
import clsx from 'clsx';
import {
  StyledAppDrawerLayout,
  StyledAppDrawerLayoutMain,
  StyledDrawerScrollbar,
} from './index.styled';
import { StyledMainContentView } from '../Auth/index.styled';

type Props = {
  children: React.ReactNode;
};

export const DrawerLayout: React.FC<Props> = React.memo(({ children }) => {
  const [isVisible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <StyledAppDrawerLayout
    // className={clsx({
    //   appMainFooter: footer && footerType === FooterType.FLUID,
    //   appMainFixedFooter: footer && footerType === FooterType.FIXED,
    // })}
    >
      {/* <AppSidebar
        visible={isVisible}
        onClose={onClose}
        routesConfig={routesConfig}
      /> */}

      <StyledAppDrawerLayoutMain className="app-DrawerLayout-main">
        <AppHeader showDrawer={showDrawer} />
        <StyledDrawerScrollbar>
          <StyledMainContentView>{children}</StyledMainContentView>
          {/* <AppFooter /> */}
        </StyledDrawerScrollbar>
      </StyledAppDrawerLayoutMain>
      {/* <AppThemeSetting /> */}
    </StyledAppDrawerLayout>
  );
});
