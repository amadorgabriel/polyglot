import { useState } from 'react';

import { Button, Form, Image, message } from 'antd';

import { CourseModal } from '../CourseModal';
import { CourseEntity } from '../../../core/domain/courses/courses.types';
import { useCreateCourse } from '../../../core/domain/courses/courses.hook';
import {
  StyledPromoCard,
  StyledPromoContent,
  StyledPromoThumb,
} from './index.styled';
import { PlusOutlined } from '@ant-design/icons';

export const AddCourseCard = () => {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [messageApi, contextHolder] = message.useMessage();

  const [form] = Form.useForm<Omit<CourseEntity, 'id'>>();

  const createCourseMutation = useCreateCourse();

  const handleSubmit = async () => {
    const formValues = form.getFieldsValue();

    createCourseMutation
      .mutateAsync({
        nome: formValues.nome,
        descricao: formValues.descricao,
        nivel: 'Básico',
        duracao: 0,
        professorId: 1,
        dataInicio: '2023-01-01T00:00:00',
        valor: formValues.valor,
      })
      .then(() => {
        messageApi.open({
          type: 'success',
          content: 'Curso criado com sucesso!',
        });
      })
      .catch((err) => {
        messageApi.open({
          type: 'error',
          content: 'Não conseguimos criar seu curso.',
        });
      })
      .finally(() => {
        form.resetFields();
        setIsModalActive(false);
      });
  };

  return (
    <>
      <StyledPromoCard heightFull>
        <StyledPromoContent>
          <StyledPromoThumb>
            <Image
              preview={false}
              src="https://cdni.iconscout.com/illustration/premium/thumb/online-course-illustration-download-in-svg-png-gif-file-formats--tutor-table-video-lesson-class-learning-e-pack-illustrations-3119295.png?f=webp"
              alt="promo"
            />
          </StyledPromoThumb>
          <h3>Deseja criar um novo curso?</h3>
          <p>Separe novos conteúdos relevantes.</p>
          <div>
            <Button
              icon={<PlusOutlined />}
              className="btn"
              color="gray"
              onClick={() => setIsModalActive(true)}
            >
              Novo curso!
            </Button>
          </div>
        </StyledPromoContent>
      </StyledPromoCard>

      <CourseModal
        form={form}
        submitting={createCourseMutation.isLoading}
        onSubmit={handleSubmit}
        setIsActive={(value) => setIsModalActive(value)}
        isActive={isModalActive}
      />

      {contextHolder}
    </>
  );
};
