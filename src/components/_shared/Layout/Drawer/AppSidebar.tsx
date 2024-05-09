import UserInfo from './UserInfo';
import { StyledAppDrawer, StyledAppDrawerLayoutSidebar } from './index.styled';

type AppSidebarProps = {
  visible: boolean;
  onClose: () => void;
};

const AppSidebar = ({ visible, onClose }: AppSidebarProps) => {
  return (
    <StyledAppDrawer
      placement="left"
      closable={false}
      onClose={() => {}}
      open={visible}
    >
      <StyledAppDrawerLayoutSidebar collapsible>
        <UserInfo hasColor />
      </StyledAppDrawerLayoutSidebar>
    </StyledAppDrawer>
  );
};

export default AppSidebar;
