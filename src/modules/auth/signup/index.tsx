import { Checkbox, Form, Input } from 'antd';

import {
  StyledUserCard,
  StyledUserCardFooter,
  StyledUserCardFooterLink,
  StyledUserCardHeader,
  StyledUserCardLogo,
  StyledUserContainer,
  StyledUserFieldActionLink,
  StyledUserFieldActionRow,
  StyledUserForm,
  StyledUserFormBtn,
  StyledUserPages,
} from '../index.styled';

import { PageMeta } from '../../../core/components/PageMeta';
import { AuthWrapper } from '../../../core/components/Layout/Auth';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

export function SignupPage() {
  return (
    <>
      <PageMeta title="Cadastro | Polyglot Academy" />

      <AuthWrapper>
        <StyledUserPages>
          <StyledUserContainer key="a">
            <StyledUserCard>
              <StyledUserCardHeader>
                <StyledUserCardLogo>
                  <img
                    src={'/assets/images/logo.png'}
                    alt="crema"
                    title="crema"
                  />
                </StyledUserCardLogo>
                <h3>Cadastre-se</h3>
              </StyledUserCardHeader>

              <StyledUserForm
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  name="name"
                  className="form-field"
                  rules={[
                    { required: true, message: 'Please input your Name!' },
                  ]}
                >
                  <Input type="name" placeholder="Nome" />
                </Form.Item>

                <Form.Item
                  name="email"
                  className="form-field"
                  rules={[
                    { required: true, message: 'Please input your Email!' },
                  ]}
                >
                  <Input type="email" placeholder="Email" />
                </Form.Item>

                <Form.Item
                  name="password"
                  className="form-field"
                  rules={[
                    { required: true, message: 'Please input your Password!' },
                  ]}
                >
                  <Input type="password" placeholder="Senha" />
                </Form.Item>

                <Form.Item
                  name="confirmPassword"
                  className="form-field"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Retype Password!',
                    },
                  ]}
                >
                  <Input type="password" placeholder="Repita a senha" />
                </Form.Item>

                <StyledUserFieldActionRow
                  name="remember"
                  valuePropName="checked"
                >
                  <>
                    <Checkbox>Eu concordo com</Checkbox>
                    <StyledUserFieldActionLink className="user-field-action-link">
                      Termos e condições
                    </StyledUserFieldActionLink>
                  </>
                </StyledUserFieldActionRow>

                <StyledUserFormBtn type="primary" htmlType="submit">
                  Cadastrar
                </StyledUserFormBtn>
              </StyledUserForm>

              <StyledUserCardFooter>
                <span>Já tenho uma conta</span>
                <StyledUserCardFooterLink>
                  Faça login aqui
                </StyledUserCardFooterLink>
              </StyledUserCardFooter>
            </StyledUserCard>
          </StyledUserContainer>
        </StyledUserPages>
      </AuthWrapper>
    </>
  );
}
