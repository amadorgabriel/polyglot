import { useEffect, useState } from 'react';

import clsx from 'clsx';
import { Form, List, message, Skeleton } from 'antd';

import AppCard from '../../_shared/AppCard';
import { CourseModal } from '../CourseModal';
import { CourseListItem } from './CourseListItem';
import { CourseEntity } from '../../../core/domain/courses/courses.types';
import {
  useDeleteCourse,
  useUpdateCourse,
} from '../../../core/domain/courses/courses.hook';
import {
  StyledCategoryBadge,
  StyledMyCategoryItem,
  StyledMyCourseHeader,
} from './index.styled';
import dayjs from 'dayjs';

export type CategoryType = {
  id: number;
  title: string;
  slug: string;
  disabled?: boolean;
};

const categories: CategoryType[] = [
  { id: 1, title: 'Todos', slug: 'all' },
  { id: 3, title: 'Básico', slug: 'basic', disabled: true },
  { id: 3, title: 'Intermediário', slug: 'intermediate', disabled: true },
  { id: 3, title: 'Avançado', slug: 'advanced', disabled: true },
];

interface MyCoursesProps {
  loading?: boolean;
  courses: CourseEntity[];
}

export const MyCourses = ({ courses, loading = false }: MyCoursesProps) => {
  const [messageApi, contextHolder] = message.useMessage();

  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [selectedCourse, setSelectedCourse] = useState<
    CourseEntity | undefined
  >(undefined);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0].slug
  );
  const [form] = Form.useForm<Omit<CourseEntity, 'id'>>();

  const updateCourseMutation = useUpdateCourse();
  const deteleCourseMutation = useDeleteCourse();

  const handleChangeCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const handleUpdateCourse = async () => {
    if (!selectedCourse) return;

    const formValues = form.getFieldsValue();

    updateCourseMutation
      .mutateAsync({
        id: selectedCourse.id,
        courseDto: {
          nome: formValues.nome,
          descricao: formValues.descricao,
          nivel: 'Básico',
          duracao: 0,
          professorId: 1,
          dataInicio: '2023-01-01T00:00:00',
          valor: formValues.valor,
        },
      })
      .then(() => {
        messageApi.open({
          type: 'success',
          content: 'Curso atualizado com sucesso!',
        });
      })
      .catch((err) => {
        messageApi.open({
          type: 'error',
          content: 'Não conseguimos atualizar seu curso.',
        });
      })
      .finally(() => {
        form.resetFields();
        setIsModalActive(false);
      });
  };

  const handleDeleteCourse = (id: number) => {
    deteleCourseMutation
      .mutateAsync({
        id: id,
      })
      .then(() => {
        messageApi.open({
          type: 'success',
          content: 'Curso excluído com sucesso!',
        });
      })
      .catch(() => {
        messageApi.open({
          type: 'error',
          content: 'Exclua as matrículas associadas antes de prosseguir.',
        });
      });
  };

  useEffect(() => {
    return () => {
      setSelectedCourse(undefined);
      setIsModalActive(false);
    };
  }, []);

  return (
    <>
      <AppCard className="no-card-space-ltr-rtl" heightFull title="Meus cursos">
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
          style={{
            maxHeight: '372px',
            overflowY: 'auto',
          }}
          dataSource={courses}
          renderItem={(data, index) => (
            <CourseListItem
              key={data.id}
              course={data}
              loading={deteleCourseMutation.isLoading}
              onDetail={(id) => {
                const courseData = courses?.find((course) => course.id === id);
                if (!courseData) return;

                console.log('jjj')
                console.log(courseData)

                setSelectedCourse({
                  ...courseData,
                  dataInicio: dayjs('2024-01-01') as any

                });
                setIsModalActive(true);
              }}
              onDelete={(id) => handleDeleteCourse(id)}
            />
          )}
        >
          {loading && (
            <Skeleton
              loading={loading}
              active
              avatar={{ shape: 'square', size: 'large' }}
              paragraph={{ rows: 1 }}
              style={{
                padding: '0px 18px',
              }}
            />
          )}
        </List>
      </AppCard>

      <CourseModal
        form={form}
        submitting={updateCourseMutation.isLoading}
        defaultCourse={selectedCourse}
        onSubmit={handleUpdateCourse}
        setIsActive={(value) => setIsModalActive(value)}
        isActive={isModalActive}
      />

      {contextHolder}
    </>
  );
};
