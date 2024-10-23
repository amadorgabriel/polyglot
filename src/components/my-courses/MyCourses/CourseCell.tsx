import React from 'react';
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
import AppMenu from '../../_shared/AppMenu';
import { FireFilled, FireOutlined } from '@ant-design/icons';

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
            <StyledCourseCellRate>Avaliar</StyledCourseCellRate>
            <StyledCourseCellBtn type="primary">
              Certificado
            </StyledCourseCellBtn>
          </div>
        ) : (
          <div className="ant-row ant-row-middle">
            <FireFilled />
            <StyledCourseCellRating>{course.rating}</StyledCourseCellRating>
            <StyledCourseCellBtn className="btn-primary-outline">
              Detalhes
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
