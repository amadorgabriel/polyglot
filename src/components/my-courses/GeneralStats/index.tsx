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
  stats: AcademicStatsType;
};

const GeneralStats: React.FC<GeneralStatsProps> = ({ stats }) => {
  return (
    <AppCard heightFull className="card-hover">
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
            style={{ backgroundColor: stats.bgcolor, color: stats.badgeColor }}
          >
            {stats.new}
          </StyledGeneralStatsBadge>
        </StyledGeneralStatsContent>
      </StyledGeneralStats>
    </AppCard>
  );
};

export default GeneralStats;
