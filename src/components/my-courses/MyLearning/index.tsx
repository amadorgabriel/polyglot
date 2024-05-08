import React from 'react';

import { List } from 'antd';

import LearningItem from './LearningItem';
import { LearningDataType } from '../../../core/types/my-courses';
import AppCard from '../../_shared/AppCard';

type MyLearningProps = {
  learningData: LearningDataType[];
};

const MyLearning: React.FC<MyLearningProps> = ({ learningData }) => {
  return (
    <AppCard className="no-card-space-ltr-rtl" title="Meus aprendizados">
      <List
        dataSource={learningData}
        renderItem={(data, index) => <LearningItem key={index} course={data} />}
      />
    </AppCard>
  );
};

export default MyLearning;
