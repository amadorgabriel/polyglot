import React from 'react';

import { Button, Image, Popconfirm, Space } from 'antd';

import { FaRegTrashAlt } from 'react-icons/fa';

import { CourseEntity } from '../../../core/domain/courses/courses.types';
import {
  StyledCourseCell,
  StyledCourseCellAction,
  StyledCourseCellBtn,
  StyledCourseCellContent,
  StyledCourseCellInfo,
  StyledCourseCellThumb,
} from './index.styled';
import { QuestionCircleOutlined } from '@ant-design/icons';

type CourseCellProps = {
  course: CourseEntity;
  onDelete: (id: number) => void;
};

const CourseCell: React.FC<CourseCellProps> = ({ course, onDelete }) => {
  const thumbs = [
    'https://edusoftlearning.com/wp-content/uploads/2018/10/Edusoft-the-English-Language-Learning-Experts-1080x540.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjttACGjZDkBbQTooKypeimTzjEiC51rd4jA&s',
    'https://cdn.wizard.com.br/wp-content/uploads/2019/08/14113136/moca-torre-eiffel-com-bandeira-francesa.jpg',
    'https://www.hardware.com.br/static/wp/2022/07/04/2-1.jpg?fit=scale&fm=pjpg&h=1600&ixlib=php-3.3.1&w=2500&wpsize=large',
    'https://www.meupositivo.com.br/doseujeito/wp-content/uploads/2018/06/tecnologias-alemas-que-revolucionaram-o-mundo.jpg',
  ];

  const ramdomImage = thumbs[Math.floor(Math.random() * thumbs.length)];

  return (
    <StyledCourseCell key={course.id} className="item-hover">
      <StyledCourseCellContent>
        <StyledCourseCellThumb>
          <Image preview={false} src={ramdomImage} width={62} height={62} />
        </StyledCourseCellThumb>
        <StyledCourseCellInfo>
          <h3 className="text-truncate">{course.nome}</h3>
          <p className="text-truncate">{course.descricao}</p>
        </StyledCourseCellInfo>
      </StyledCourseCellContent>

      <StyledCourseCellAction>
        <Space>
          <StyledCourseCellBtn className="btn-primary-outline">
            Detalhes
          </StyledCourseCellBtn>

          <Popconfirm
            title="Excluir"
            description="Tem certeza que quer excluir esse curso?"
            onConfirm={() => onDelete(course.id)}
            onCancel={() => {}}
            okText="Sim"
            cancelText="Não"
            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
          >
            <Button
              type="text"
              title="Excluir"
              danger
              icon={<FaRegTrashAlt />}
            />
          </Popconfirm>
        </Space>
      </StyledCourseCellAction>
    </StyledCourseCell>
  );
};

export default CourseCell;
