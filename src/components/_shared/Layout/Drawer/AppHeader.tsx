import { Dropdown } from 'antd';
import { FiMoreVertical } from 'react-icons/fi';
import { AiOutlineMenu } from 'react-icons/ai';
import {
  StyledDrawerLayoutHeader,
  StyledDrawerLayoutHeaderDesk,
  StyledDrawerLayoutHeaderMobile,
  StyledDrawerLayoutHeaderSearch,
  StyledDropdownWrapper,
} from './index.styled';

const items = [
  { key: 1, label: <></> },
  { key: 2, label: <></> },
  { key: 3, label: <></> },
];

type AppHeaderProps = {
  showDrawer: () => void;
};

const AppHeader = ({ showDrawer }: AppHeaderProps) => {
  return (
    <StyledDrawerLayoutHeader>
      <a className="trigger" onClick={showDrawer}>
        <AiOutlineMenu />
      </a>
      {/* <AppLogo /> */}
      <StyledDrawerLayoutHeaderSearch placeholder="Pesquise aqui" />
      <StyledDrawerLayoutHeaderDesk>
        {/* <AppLanguageSwitcher />
        <AppHeaderMessages />
        <AppNotifications /> */}
      </StyledDrawerLayoutHeaderDesk>
      <StyledDrawerLayoutHeaderMobile>
        <StyledDropdownWrapper>
          <Dropdown
            menu={{ items }}
            overlayClassName="dropdown-wrapper"
            getPopupContainer={(triggerNode) => triggerNode}
            trigger={['click']}
          >
            <a
              className="ant-dropdown-link-mobile"
              onClick={(e) => e.preventDefault()}
            >
              <FiMoreVertical />
            </a>
          </Dropdown>
        </StyledDropdownWrapper>
      </StyledDrawerLayoutHeaderMobile>
    </StyledDrawerLayoutHeader>
  );
};

export default AppHeader;
