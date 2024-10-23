import {
  Button,
  Input,
  Modal,
  Form,
  InputNumber,
  DatePicker,
  message,
} from 'antd';
import {
  StyledPromoCard,
  StyledPromoContent,
  StyledPromoThumb,
} from './index.styled';
import { useState } from 'react';
import TextArea from 'antd/es/input/TextArea';

const { RangePicker } = DatePicker;

const PromoCard = () => {
  const [isModalActive, setIsModalActive] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();

  const form = Form.useForm()

  const onSubmitModal = () => {
    setIsModalActive(false);

    messageApi.open({
      type: 'success',
      content: 'Curso criado com sucesso!',
    });
  };

  return (
    <>
      <StyledPromoCard heightFull>
        <StyledPromoContent>
          <StyledPromoThumb>
            <img
              src={
                'https://cdni.iconscout.com/illustration/premium/thumb/online-course-illustration-download-in-svg-png-gif-file-formats--tutor-table-video-lesson-class-learning-e-pack-illustrations-3119295.png?f=webp'
              }
              alt="promo"
            />
          </StyledPromoThumb>
          <h3>Deseja criar um novo curso?</h3>
          <p>Separe novos conteúdos relevantes.</p>
          <div>
            <Button
              className="btn"
              color="gray"
              onClick={() => setIsModalActive(true)}
            >
              Vamos lá!
            </Button>
          </div>
        </StyledPromoContent>
      </StyledPromoCard>

      <Modal
        title="Criar Curso"
        open={isModalActive}
        onOk={onSubmitModal}
        onCancel={() => setIsModalActive(false)}
        cancelText="Cancelar"
      >
        <Form
          // labelCol={{ span: 4 }}
          // wrapperCol={{ span: 14 }}
          layout="vertical"
          // form={form}

        >
          <Form.Item
            label="Título:"
            rules={[{ required: true, message: 'Campo obrigatório!' }]}
          >
            <Input placeholder="Digite" />
          </Form.Item>

          <Form.Item
            label="Descrição:"
            rules={[{ required: true, message: 'Campo obrigatório!' }]}
          >
            <TextArea placeholder="Digite" />
          </Form.Item>

          <Form.Item
            label="Datas de Início e Fim"
            rules={[{ required: true, message: 'Campo obrigatório!' }]}
          >
            <RangePicker />
          </Form.Item>

          <Form.Item
            label="Preço:"
            rules={[{ required: true, message: 'Campo obrigatório!' }]}
          >
            <InputNumber placeholder="R$00,00" />
          </Form.Item>
        </Form>
      </Modal>

      {contextHolder}
    </>
  );
};

export default PromoCard;
