import React from 'react';

import AppMenu from '../../_shared/AppMenu';
import {
  StyledCourseCell,
  StyledCourseCellAction,
  StyledCourseCellBtn,
  StyledCourseCellContent,
  StyledCourseCellInfo,
  StyledCourseCellMenu,
  StyledCourseCellRate,
  StyledCourseCellRating,
  StyledCourseCellThumb,
} from './index.styled';

type CourseCellProps = {
  course: {
    id: number;
    title: string;
    duration: string;
    rating: number;
    isCompleted: boolean;
    thumb: string;
  };
};

const CourseCell: React.FC<CourseCellProps> = ({ course }) => {
  return (
    <StyledCourseCell key={course.id} className="item-hover">
      <StyledCourseCellContent>
        <StyledCourseCellThumb>
          <img alt="" src={course.thumb} />
        </StyledCourseCellThumb>
        <StyledCourseCellInfo>
          <h3 className="text-truncate">{course.title}</h3>
          <p className="text-truncate">{course.duration}</p>
        </StyledCourseCellInfo>
      </StyledCourseCellContent>

      <StyledCourseCellAction>
        {course.isCompleted ? (
          <div className="ant-row ant-row-middle">
            <StyledCourseCellRate>Rate</StyledCourseCellRate>
            <StyledCourseCellBtn type="primary">
              Certificado
            </StyledCourseCellBtn>
          </div>
        ) : (
          <div className="ant-row ant-row-middle">
            <img
              src={'/assets/images/dashboard/academy/rating.svg'}
              alt="rating"
            />
            <StyledCourseCellRating>{course.rating}</StyledCourseCellRating>
            <StyledCourseCellBtn className="btn-primary-outline">
             Veja o curso
            </StyledCourseCellBtn>
          </div>
        )}
        <StyledCourseCellMenu>
          <AppMenu />
        </StyledCourseCellMenu>
      </StyledCourseCellAction>
    </StyledCourseCell>
  );
};

export default CourseCell;
