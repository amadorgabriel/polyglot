import React, { ReactNode } from 'react';

import { BiBasket } from 'react-icons/bi';
import { FcReading } from 'react-icons/fc';
import { GiBookshelf } from 'react-icons/gi';
import { FcGraduationCap } from 'react-icons/fc';

import AppCard from '../../_shared/AppCard';
import { AcademicStatsType } from '../../../core/types/my-courses';
import {
  StyledGeneralStats,
  StyledGeneralStatsAvatar,
  StyledGeneralStatsBadge,
  StyledGeneralStatsContent,
} from './index.styled';
import { Skeleton, Space } from 'antd';

type getIconProps = {
  [key: string]: ReactNode;
};

const getIcon: getIconProps = {
  BiBasket: <BiBasket color="#9E49E6" className="icon" />,
  FcGraduationCap: <FcGraduationCap color="#0A8FDC" className="icon" />,
  GiBookshelf: <GiBookshelf color="#49BD65" className="icon" />,
  default: <FcReading color="#9E49E6" className="icon" />,
};

type GeneralStatsProps = {
  stats: Omit<AcademicStatsType, 'id'>;
  loading?: boolean;
};

export const GeneralStats = ({ stats, loading = false }: GeneralStatsProps) => {
  return (
    <AppCard className="card-hover">
      {!loading ? (
        <StyledGeneralStats>
          <StyledGeneralStatsAvatar style={{ backgroundColor: stats.bgcolor }}>
            {getIcon[stats.icon] ? getIcon[stats.icon] : getIcon['default']}
          </StyledGeneralStatsAvatar>

          <StyledGeneralStatsContent>
            <div>
              <h3>{stats.count}</h3>
              <p className="text-truncate">{stats.title}</p>
            </div>
            <StyledGeneralStatsBadge
              style={{
                backgroundColor: stats.bgcolor,
                color: stats.badgeColor,
              }}
            >
              {stats.new}
            </StyledGeneralStatsBadge>
          </StyledGeneralStatsContent>
        </StyledGeneralStats>
      ) : (
        <Space>
          <Skeleton.Avatar active size="large" shape="circle" />
          <Skeleton.Input active />
        </Space>
      )}
    </AppCard>
  );
};
