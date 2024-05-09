import React, { useState } from 'react';

import { List } from 'antd';

import CourseCell from './CourseCell';
import AppCard from '../../_shared/AppCard';
import { CoursesType } from '../../../core/types/my-courses';
import {
  StyledMyCategoryItem,
  StyledMyCourseHeader,
} from './index.styled';

type MyCoursesProps = {
  courses: CoursesType;
};

const MyCourses: React.FC<MyCoursesProps> = ({ courses }) => {
  const [selectedCategory, setSelectedCategory] = useState(
    courses.categories[0].slug
  );

  const handleChangeCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <AppCard className="no-card-space-ltr-rtl" heightFull title="Meus cursos">
      <StyledMyCourseHeader>
        {courses.categories.map((item, index) => (
          <StyledMyCategoryItem
            key={index}
            onClick={() => handleChangeCategory(item.slug)}
          >

              {item.title}
          </StyledMyCategoryItem>
        ))}
      </StyledMyCourseHeader>

      <List
        dataSource={courses.courses}
        renderItem={(data, index) => <CourseCell key={index} course={data} />}
      />
    </AppCard>
  );
};

export default MyCourses;
