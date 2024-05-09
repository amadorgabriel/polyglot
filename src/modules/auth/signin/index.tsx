import { Button, Checkbox, Form, Input } from 'antd';

import { FaFacebookF } from 'react-icons/fa';
import {
  CodeOutlined,
  GithubOutlined,
  GoogleOutlined,
  TwitterOutlined,
} from '@ant-design/icons';

import { PageMeta } from '../../../components/_shared/PageMeta';
import { AuthWrapper } from '../../../components/_shared/Layout/Auth';
import { StyledMainContentView } from '../../../components/_shared/Layout/Auth/index.styled';
import {
  StyledUserCard,
  StyledUserCardFooter,
  StyledUserCardFooterAction,
  StyledUserCardFooterLink,
  StyledUserCardHeader,
  StyledUserFieldAction,
  StyledUserForm,
  StyledUserFormBtn,
  StyledUserPages,
  StyledUserSocialLink,
} from '../index.styled';
import { useNavigate } from 'react-router-dom';

export const SigninPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <PageMeta title="Login | Polyglot Academy" />

      <AuthWrapper>
        <StyledMainContentView>
          <StyledUserPages>
            <StyledUserCard>
              <StyledUserCardHeader>
                <h3>Faça seu Login</h3>
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
                  name="email"
                  className="form-field"
                  rules={[{ required: true, message: 'Insira seu email!' }]}
                >
                  <Input placeholder="Email" />
                </Form.Item>

                <Form.Item
                  name="password"
                  className="form-field"
                  rules={[
                    {
                      required: true,
                      message: 'Insira sua senha!',
                    },
                  ]}
                >
                  <Input type="password" placeholder="Insira sua senha" />
                </Form.Item>

                <StyledUserFieldAction name="remember" valuePropName="checked">
                  <>
                    <Checkbox>Lembrar de mim</Checkbox>
                  </>
                </StyledUserFieldAction>

                <StyledUserFormBtn type="primary" htmlType="submit">
                  Login
                </StyledUserFormBtn>
              </StyledUserForm>

              <StyledUserCardFooterAction>
                <span>Ou entrar com</span>
                <StyledUserSocialLink>
                  <Button>
                    <FaFacebookF />
                  </Button>
                  <Button>
                    <GoogleOutlined />
                  </Button>
                </StyledUserSocialLink>
              </StyledUserCardFooterAction>

              <StyledUserCardFooter>
                <span>Não tem uma conta?</span>
                <StyledUserCardFooterLink
                  onClick={() => {
                    navigate('/signup');
                  }}
                >
                  Cadastre-se
                </StyledUserCardFooterLink>
              </StyledUserCardFooter>
            </StyledUserCard>
          </StyledUserPages>
        </StyledMainContentView>
      </AuthWrapper>
    </>
  );
};
