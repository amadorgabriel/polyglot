import { useEffect } from 'react';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom';
import {
  StyledAppDrawer,
  StyledAppDrawerLayoutSidebar,
  StyledAppDrawerSidebarScrollbar,
} from './index.styled';
import UserInfo from './UserInfo';

type AppSidebarProps = {
  visible: boolean;
  onClose: () => void;
  // routesConfig: RouterConfigData[];
};

const AppSidebar = ({ visible, onClose }: AppSidebarProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    onClose();
  }, [pathname]);

  return (
    <StyledAppDrawer
      placement="left"
      closable={false}
      onClose={onClose}
      open={visible}
    >
      <StyledAppDrawerLayoutSidebar
        // className={clsx({
        //   'drawerLayout-sidebar-img-background': allowSidebarBgImage,
        // })}
        collapsible
      >
        <UserInfo hasColor />
        {/* <StyledAppDrawerSidebarScrollbar scrollToTop={false}> */}
        {/* <AppVerticalMenu routesConfig={routesConfig} /> */}
        {/* </StyledAppDrawerSidebarScrollbar> */}
      </StyledAppDrawerLayoutSidebar>
    </StyledAppDrawer>
  );
};

export default AppSidebar;
