import { AreaChartOutlined, UserOutlined } from '@ant-design/icons';

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
  loading?: boolean;
};

export const MyProfile = ({ profile, loading = false }: MyProfileProps) => {
  const { profile_pic, name, designation, achievements, friends } = profile;

  return (
    <StyledMyProfileCard title="Meu perfil">
      <StyledMyProfileContent>
        <StyledMyProfileInfo>
          <StyledMyProfileAvatar src={profile_pic} />
          <StyledMyProfileTitle>{name}</StyledMyProfileTitle>
          <p>{designation}</p>
        </StyledMyProfileInfo>

        <StyledMyProfileFooter>
          <StyledMyProfileFooterItem>
            <StyledMyProfileThumb>
              <AreaChartOutlined style={{ fontSize: 34, color: '#3a9bfd' }} />
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
