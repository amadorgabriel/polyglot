import React from 'react';

import { UserOutlined } from '@ant-design/icons';

import { ProfileType } from '../../../core/types/my-courses';
import {
  StyledMyProfileAvatar,
  StyledMyProfileCard,
  StyledMyProfileContent,
  StyledMyProfileFooter,
  StyledMyProfileFooterItem,
  StyledMyProfileIcon,
  StyledMyProfileInfo,
  StyledMyProfileThumb,
  StyledMyProfileTitle,
} from './index.styled';

type MyProfileProps = {
  profile: ProfileType;
};

const MyProfile: React.FC<MyProfileProps> = ({ profile }) => {
  const { profile_pic, name, designation, achievements, friends } = profile;

  return (
    <StyledMyProfileCard heightFull title="Meu Perfil">
      <StyledMyProfileContent>
        <StyledMyProfileInfo>
          <StyledMyProfileAvatar src={profile_pic} />
          <StyledMyProfileTitle>{name}</StyledMyProfileTitle>
          <p>{designation}</p>
        </StyledMyProfileInfo>

        <StyledMyProfileFooter>
          <StyledMyProfileFooterItem>
            <StyledMyProfileThumb>
              <img
                src={'/assets/images/dashboard/academy/achievements.svg'}
                alt="achievements"
              />
            </StyledMyProfileThumb>
            <h4>{achievements}</h4>
            <p className="text-truncate">Achievements</p>
          </StyledMyProfileFooterItem>
          <StyledMyProfileFooterItem>
            <StyledMyProfileIcon>
              <UserOutlined style={{ fontSize: 34, color: '#FD3A84' }} />
            </StyledMyProfileIcon>
            <h4>{friends}</h4>
            <p className="text-truncate">Friends</p>
          </StyledMyProfileFooterItem>
        </StyledMyProfileFooter>
      </StyledMyProfileContent>
    </StyledMyProfileCard>
  );
};

export default MyProfile;
