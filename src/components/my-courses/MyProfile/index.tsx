import React from 'react';
import { UserOutlined } from '@ant-design/icons';
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
  profile: any;
};

const MyProfile: React.FC<MyProfileProps> = ({ profile }) => {
  const { profile_pic, name, designation, achievements, friends } = profile;

  return (
    <StyledMyProfileCard heightFull title="Meu perfil">
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
                src={'~/assets/my-courses/achievements.svg'}
                alt="achievements"
              />
            </StyledMyProfileThumb>
            <h4>{achievements}</h4>
            <p className="text-truncate">Conquistas</p>
          </StyledMyProfileFooterItem>
          <StyledMyProfileFooterItem>
            <StyledMyProfileIcon>
              <UserOutlined style={{ fontSize: 34, color: '#FD3A84' }} />
            </StyledMyProfileIcon>
            <h4>{friends}</h4>
            <p className="text-truncate">Alunos</p>
          </StyledMyProfileFooterItem>
        </StyledMyProfileFooter>
      </StyledMyProfileContent>
    </StyledMyProfileCard>
  );
};

export default MyProfile;
