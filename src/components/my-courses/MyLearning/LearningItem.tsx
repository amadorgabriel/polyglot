import React from 'react';
import {
  StyledLearningAction,
  StyledLearningContent,
  StyledLearningItems,
  StyledLearningItemsInfo,
  StyledLearningThumb,
} from './index.styled';
import { LearningDataType } from '../../../core/types/my-courses';
import { Progress } from 'antd';

type LearningItemProps = {
  course: LearningDataType;
};

const LearningItem: React.FC<LearningItemProps> = ({ course }) => {
  return (
    <StyledLearningItems className="item-hover" key={course.id}>
      <StyledLearningItemsInfo>
        <StyledLearningThumb>
          <img alt="" src={course.icon} />
        </StyledLearningThumb>
        <StyledLearningContent>
          <h3>{course.title}</h3>
          <p>{course.desc}</p>
        </StyledLearningContent>
      </StyledLearningItemsInfo>

      <StyledLearningAction>
        <Progress
          type="circle"
          strokeColor="#0A8FDC"
          trailColor="rgb(214, 214, 214)"
          percent={course.percentage}
          strokeWidth={8}
          width={45}
        />
      </StyledLearningAction>
    </StyledLearningItems>
  );
};

export default LearningItem;
