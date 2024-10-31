import React, { useState } from 'react';

import clsx from 'clsx';
import { List } from 'antd';

import CourseCell from './CourseCell';
import AppCard from '../../_shared/AppCard';
import {
  StyledCategoryBadge,
  StyledMyCategoryItem,
  StyledMyCourseHeader,
} from './index.styled';
import { useFindCourses } from '../../../core/domain/courses/courses.hook';

type MyCoursesProps = {
  courses: any;
};

const MyCourses: React.FC<MyCoursesProps> = ({ courses }) => {
  const [selectedCategory, setSelectedCategory] = useState(
    courses.categories[0].slug
  );

  const { data, isLoading } = useFindCourses();

  const handleChangeCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <AppCard
      className="no-card-space-ltr-rtl"
      heightFull
      title="Meus cursos"
      style={{
        maxHeight: '600px',
      }}
    >
      <StyledMyCourseHeader>
        {courses.categories.map((item: any, index: any) => (
          <StyledMyCategoryItem
            key={index}
            onClick={() => handleChangeCategory(item.slug)}
          >
            <StyledCategoryBadge
              className={clsx({
                active: item.slug === selectedCategory,
              })}
              key={index}
            >
              {item.title}
            </StyledCategoryBadge>
          </StyledMyCategoryItem>
        ))}
      </StyledMyCourseHeader>

      <List
        loading={isLoading}
        dataSource={data}
        renderItem={(data, index) => <CourseCell key={index} course={data} />}
      />
    </AppCard>
  );
};

export default MyCourses;
