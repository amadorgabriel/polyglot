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
import {
  useDeleteCourse,
  useFindCourses,
} from '../../../core/domain/courses/courses.hook';

export type CategoryType = {
  id: number;
  title: string;
  slug: string;
  disabled?: boolean;
};

const MyCourses: React.FC = () => {
  const categories: CategoryType[] = [
    { id: 1, title: 'Todos', slug: 'all' },
    { id: 3, title: 'Arquivados', slug: 'archived', disabled: true },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0].slug
  );

  const { data, isLoading } = useFindCourses();

  const handleChangeCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const deteleCourseMutation = useDeleteCourse();

  const handleDeleteCourse = (id: number) => {
    try {
      deteleCourseMutation.mutateAsync({
        id: id,
      });
    } catch (error) {
      console.log(error);
    }
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
        {categories.map((item, index) => (
          <StyledMyCategoryItem
            key={index}
            onClick={() => !item.disabled && handleChangeCategory(item.slug)}
          >
            <StyledCategoryBadge
              className={clsx({
                active: item.slug === selectedCategory,
                disabled: item.disabled,
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
        renderItem={(data, index) => (
          <CourseCell
            key={index}
            course={data}
            onDelete={(id) => handleDeleteCourse(id)}
          />
        )}
      />
    </AppCard>
  );
};

export default MyCourses;
