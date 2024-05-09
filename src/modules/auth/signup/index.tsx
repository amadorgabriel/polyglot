import { Checkbox, Form, Input } from 'antd';
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

export function SignupPage() {
  const navigate = useNavigate();

  return (
    <>
      <PageMeta title="Cadastro | Polyglot Academy" />

      <AuthWrapper>
        <StyledUserContainer key="a">
          <StyledUserPages>
            <StyledUserCard>
              <StyledUserCardHeader>
                <h3>Cadastre-se</h3>
              </StyledUserCardHeader>

              <StyledUserForm
                name="basic"
                initialValues={{ remember: true }}
                onFinish={() => {
                  navigate('/mycourses');
                }}
                onFinishFailed={() => {}}
              >
                <Form.Item
                  name="name"
                  className="form-field"
                  rules={[{ required: true, message: 'Insira seu nome!' }]}
                >
                  <Input type="name" placeholder="Nome" />
                </Form.Item>

                <Form.Item
                  name="email"
                  className="form-field"
                  rules={[
                    { required: true, message: 'Insira seu email!' },
                  ]}
                >
                  <Input type="email" placeholder="Email" />
                </Form.Item>

                <Form.Item
                  name="password"
                  className="form-field"
                  rules={[
                    { required: true, message: 'Insira sua senha!' },
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
                      message: 'Reescreva sua senha!',
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
                    <Checkbox>Concordo com os</Checkbox>
                    <StyledUserFieldActionLink className="user-field-action-link">
                      Termos e condições
                    </StyledUserFieldActionLink>
                  </>
                </StyledUserFieldActionRow>

                <StyledUserFormBtn type='primary' htmlType="submit">
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
