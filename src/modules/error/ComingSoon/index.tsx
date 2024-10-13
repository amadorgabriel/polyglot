import { Helmet } from 'react-helmet';
import { Button, Form, Input, message } from 'antd';

import { ReactComponent as Logo } from '../../../assets/icon/comingsoon.svg';
import {
  StyledErrorContainer,
  StyledErrorContent,
  StyledErrorForm,
  StyledErrorFormComing,
  StyledErrorImageLg,
  StyledErrorPara,
} from '../index.styled';

export const ComingSoon = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = (values: any) => {
    messageApi.open({
      type: 'success',
      content: 'Email enviado!',
    });
  };

  return (
    <>
      {contextHolder}

      <Helmet>
        <title>Em Breve!</title>
      </Helmet>

      <StyledErrorContainer key="coming_soon">
        <StyledErrorImageLg>
          <Logo />
        </StyledErrorImageLg>
        <div>
          <StyledErrorContent>
            <h3>Em breve! </h3>
            <StyledErrorPara>
              <p className="mb-0">
                Estamos trabalhando duro nesta página
                <br />
                estará disponível em breve.
              </p>
            </StyledErrorPara>
          </StyledErrorContent>
          <StyledErrorFormComing>
            <StyledErrorForm
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="email"
                className="form-field"
                rules={[
                  { required: true, message: 'Insira seu endereço de email!' },
                ]}
              >
                <Input placeholder="Endereço de email" />
              </Form.Item>

              <Button type="primary" className="error-btn" htmlType="submit">
                Quero ser notificado!
              </Button>
            </StyledErrorForm>
          </StyledErrorFormComing>
        </div>
      </StyledErrorContainer>
    </>
  );
};
