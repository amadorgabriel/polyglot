import { Checkbox, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';

import { PageMeta } from '../../../components/_shared/PageMeta';
import { AuthWrapper } from '../../../components/_shared/Layout/Auth';
import {
  StyledUserCard,
  StyledUserCardFooter,
  StyledUserCardFooterLink,
  StyledUserCardHeader,
  StyledUserContainer,
  StyledUserFieldActionLink,
  StyledUserFieldActionRow,
  StyledUserForm,
  StyledUserFormBtn,
  StyledUserPages,
} from '../index.styled';
import { useAuthRoleAlternativesContext } from '../../../core/contexts/auth/role-alternatives';

export function SignupPage() {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const { } = useAuthRoleAlternativesContext();

  function signUp() {
    navigate(`/courses`);
  }
  return (
    <>
      <PageMeta title="Cadastro " />

      <AuthWrapper>
        <StyledUserContainer key="a">
          <StyledUserPages>
            <StyledUserCard>
              <StyledUserCardHeader></StyledUserCardHeader>

              <StyledUserForm
                name="basic"
                initialValues={{ remember: true }}
                onFinish={signUp}
                onFinishFailed={() => {
                  messageApi.open({
                    type: 'error',
                    content: 'Não foi possível fazer o cadastro',
                  });
                }}
              >
                <Form.Item
                  name="name"
                  className="form-field"
                  rules={[{ required: true, message: 'Insira seu nome!' }]}
                >
                  <Input type="name" size="large" placeholder="Nome" />
                </Form.Item>

                <Form.Item
                  name="email"
                  className="form-field"
                  rules={[{ required: true, message: 'Insira seu email!' }]}
                >
                  <Input type="email" size="large" placeholder="Email" />
                </Form.Item>

                <Form.Item
                  name="password"
                  className="form-field"
                  rules={[{ required: true, message: 'Insira sua senha!' }]}
                >
                  <Input type="password" size="large" placeholder="Senha" />
                </Form.Item>

                <Form.Item
                  name="confirmPassword"
                  className="form-field"
                  rules={[
                    {
                      required: true,
                      message: 'Reescreva sua senha!',
                    },
                  ]}
                >
                  <Input
                    type="password"
                    size="large"
                    placeholder="Repita a senha"
                  />
                </Form.Item>

                <StyledUserFieldActionRow
                  name="remember"
                  valuePropName="checked"
                >
                  <>
                    <Checkbox>Concordo com os</Checkbox>
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
                <span>Já tem uma conta?</span>
                <StyledUserCardFooterLink
                  onClick={() => {
                    navigate('/signin');
                  }}
                >
                  Faça login aqui!
                </StyledUserCardFooterLink>
              </StyledUserCardFooter>
            </StyledUserCard>
          </StyledUserPages>
        </StyledUserContainer>
      </AuthWrapper>
    </>
  );
}
