import styled from 'styled-components';
import { Drawer, Input, Layout } from 'antd';

const { Header } = Layout;
const { Search } = Input;

export const StyledDrawerLayoutHeader = styled(Header)`
  padding-left: 20px;
  padding-right: 20px;
  color: ${({ theme }) => theme.palette.text.primary}!important;
  background-color: ${({ theme }) => theme.palette.background.paper}!important;
  border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor}!important;
  height: 56px;
  line-height: 1;
  transition: all 0.1s linear;
  position: sticky;
  right: 0;
  left: 0;
  top: 0;
  z-index: 9;
  display: flex;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding-left: 30px;
    padding-right: 30px;
    height: 71px !important;
  }

  & .trigger {
    font-size: 20px;
    margin-right: 20px;
    padding: 5.5px;
    color: ${({ theme }) => theme.palette.text.primary};

    & svg {
      display: block;
    }

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 20px;
    }
  }
`;

export const StyledDrawerLayoutHeaderSearch = styled(Search)`
  position: relative;
  max-width: 140px;
  min-height: 36px;
  margin-left: auto;
  margin-right: 10px;

  [dir='rtl'] & {
    margin-left: 10px;
    margin-right: auto;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin-right: 20px;
    max-width: 165px;

    [dir='rtl'] & {
      margin-right: auto;
      margin-left: 20px;
    }
  }

  & .ant-input-wrapper {
    top: 50%;
    right: 0;
    z-index: 1;
    position: absolute;
    transform: translateY(-50%);

    [dir='rtl'] & {
      right: auto;
      left: 0;
    }
  }

  & .ant-input {
    padding: 8px 14px;
    height: 36px;
    transition: all 0.2s ease;
    width: 104px;

    &:focus {
      width: 135px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
      width: 129px;

      &:focus {
        width: 165px;
      }
    }
  }

  & .ant-input-search-button {
    height: 36px;
    width: 36px;
    box-shadow: none;

    & .anticon svg {
      display: block;
    }
  }

  &.ant-input-search-rtl
    > .ant-input-group
    > .ant-input-group-addon:last-child
    .ant-input-search-button {
    border-radius: ${({ theme }) => theme.sizes.borderRadius.base} 0 0
      ${({ theme }) => theme.sizes.borderRadius.base};
  }
`;

export const StyledDrawerLayoutHeaderDesk = styled.div`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: flex;
    align-items: center;
  }
`;

export const StyledAppDrawer = styled(Drawer)`
  & .ant-drawer-content-wrapper {
    width: 17.5rem !important;
  }

  & .ant-drawer-body {
    padding: 0;
  }

  & .cr-user-info {
    padding-top: 4px;
    padding-bottom: 4px;
    border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor};
  }
`;

export const StyledAppDrawerLayout = styled(Layout)`
  min-height: 100vh;
  position: relative;
  background-color: transparent;
  overflow-x: hidden;

  &.appMainFixedFooter {
    padding-bottom: 46px;

    & .app-main-footer {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 9;
      width: 100%;
    }
  }
`;

export const StyledAppDrawerLayoutMain = styled(Layout)`
  transition: all 0.1s linear;
  width: 100% !important;
  position: relative;
  background-color: ${({ theme }) => theme.palette.background.default};
`;

export const StyledDropdownWrapper = styled.div`
  & .dropdown-wrapper {
    .ant-dropdown-menu {
      padding: 0;

      .ant-dropdown-menu-item {
        padding: 0;
      }
    }
  }

  & .ant-dropdown-trigger {
    text-transform: none;
  }
  & .ant-dropdown-link-mobile {
    font-weight: ${({ theme }) => theme.font.weight.medium};
    text-transform: uppercase;
    margin-top: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    background-color: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.primary};
    padding: 9px;
    border-radius: ${({ theme }) => theme.sizes.borderRadius.circle};
    border: 1px solid transparent;
  }
`;
