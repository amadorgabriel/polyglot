import { useEffect } from 'react';

import { DatePicker, Form, FormInstance, Input, InputNumber, Modal, ModalProps } from 'antd';

import TextArea from 'antd/es/input/TextArea';

import { CourseEntity } from '../../../core/domain/courses/courses.types';
const { RangePicker } = DatePicker;

type ICourseModal = ModalProps & {
  isActive: boolean;
  submitting?: boolean;
  onSubmit: () => Promise<void>;
  defaultCourse?: CourseEntity;
  setIsActive: (value: boolean) => void;
  form: FormInstance<Partial<CourseEntity>>;
};

export const CourseModal = ({
  setIsActive,
  onSubmit,
  form,
  isActive = false,
  submitting = false,
  defaultCourse = undefined,
  ...props
}: ICourseModal) => {
  const handleCancel = () => {
    form.resetFields();
    setIsActive(false);
  };

  useEffect(() => {
    if (!!defaultCourse) {
      form.setFieldsValue(defaultCourse);
    }
  }, [defaultCourse, form]);

  return (
    <Modal
      title={!!defaultCourse ? 'Editar Curso' : 'Criar Curso'}
      open={isActive}
      onOk={() => {
        form.submit();
      }}
      onCancel={handleCancel}
      cancelText="Cancelar"
      okButtonProps={{
        loading: submitting,
        disabled: submitting,
      }}
      okText={!!defaultCourse ? 'Atualizar' : 'Cadastrar'}
      {...props}
    >
      <Form layout="vertical" form={form} onFinish={onSubmit}>
        <Form.Item
          label="Título:"
          name={['nome']}
          rules={[{ required: true, message: 'Campo obrigatório!' }]}
        >
          <Input placeholder="Digite" />
        </Form.Item>

        <Form.Item
          label="Descrição:"
          name={['descricao']}
          rules={[{ required: true, message: 'Campo obrigatório!' }]}
        >
          <TextArea placeholder="Digite" />
        </Form.Item>

        <Form.Item
          label="Datas de Início e Fim"
          name={['dataInicio']}
          rules={[{ required: true, message: 'Campo obrigatório!' }]}
        >
          <RangePicker />
        </Form.Item>

        <Form.Item
          label="Preço:"
          name={['valor']}
          rules={[{ required: true, message: 'Campo obrigatório!' }]}
        >
          <InputNumber type="number" placeholder="R$00,00" />
        </Form.Item>
      </Form>
    </Modal>
  );
};
