import React from 'react';

import clsx from 'clsx';
import { Dropdown } from 'antd';
import { useNavigate } from 'react-router-dom';

import { FaChevronDown } from 'react-icons/fa';

import {
  StyledCrUserDesignation,
  StyledCrUserInfo,
  StyledCrUserInfoAvatar,
  StyledCrUserInfoContent,
  StyledCrUserInfoInner,
  StyledUserArrow,
  StyledUsername,
  StyledUsernameInfo,
} from './index.styled';

type UserInfoProps = {
  hasColor?: boolean;
};
const UserInfo: React.FC<UserInfoProps> = ({ hasColor }) => {
  const items = [
    {
      key: 1,
      label: <div onClick={() => {}}>My Profile</div>,
    },
    {
      key: 2,
      label: <div onClick={() => {}}>Logout</div>,
    },
  ];

  return (
    <>
      {hasColor ? (
        <StyledCrUserInfo>
          <Dropdown
            menu={{ items }}
            trigger={['click']}
            placement="bottomRight"
            overlayStyle={{
              zIndex: 1052,
              minWidth: 150,
            }}
          >
            <StyledCrUserInfoInner className="ant-dropdown-link">
              <StyledCrUserInfoAvatar src={''} />

              <StyledCrUserInfoContent className="cr-user-info-content">
                <StyledUsernameInfo>
                  <StyledUsername>Usuario Uninove</StyledUsername>
                  <StyledUserArrow className="cr-user-arrow">
                    <FaChevronDown />
                  </StyledUserArrow>
                </StyledUsernameInfo>
                <StyledCrUserDesignation className="text-truncate">
                  System Manager
                </StyledCrUserDesignation>
              </StyledCrUserInfoContent>
            </StyledCrUserInfoInner>
          </Dropdown>
        </StyledCrUserInfo>
      ) : (
        <StyledCrUserInfo>
          <Dropdown
            menu={{ items }}
            trigger={['click']}
            placement="bottomRight"
            overlayStyle={{
              zIndex: 1052,
              minWidth: 150,
            }}
          >
            <StyledCrUserInfoInner className="ant-dropdown-link">
              <StyledCrUserInfoAvatar src="" />
              <StyledCrUserInfoContent className="cr-user-info-content">
                <StyledUsernameInfo>
                  <StyledUsername>Usuário Uninove</StyledUsername>
                  <StyledUserArrow className="cr-user-arrow">
                    <FaChevronDown />
                  </StyledUserArrow>
                </StyledUsernameInfo>
                <StyledCrUserDesignation className="text-truncate cr-user-designation">
                  System Manager
                </StyledCrUserDesignation>
              </StyledCrUserInfoContent>
            </StyledCrUserInfoInner>
          </Dropdown>
        </StyledCrUserInfo>
      )}
    </>
  );
};

export default UserInfo;
