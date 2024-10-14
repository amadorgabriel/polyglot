import { Button, Checkbox, Form, Input, message } from 'antd';

import { FaFacebookF } from 'react-icons/fa';
import {
  GithubOutlined,
  TwitterOutlined,
  GoogleOutlined,
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
import { useAuthRoleAlternativesContext } from '../../../core/contexts/auth/role-alternatives';

export const SigninPage = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const {} = useAuthRoleAlternativesContext();

  function signIn() {
    navigate(`/courses`);
  }

  return (
    <>
      <PageMeta title="Login" />

      <AuthWrapper>
        <StyledMainContentView>
          <StyledUserPages>
            <StyledUserCard>
              <StyledUserCardHeader></StyledUserCardHeader>

              <StyledUserForm
                name="basic"
                initialValues={{ remember: true }}
                onFinish={signIn}
                onFinishFailed={() => {
                  messageApi.open({
                    type: 'error',
                    content: 'Não foi possível fazer o login',
                  });
                }}
              >
                <Form.Item
                  name="email"
                  className="form-field"
                  rules={[{ required: true, message: 'Insira seu email!' }]}
                >
                  <Input placeholder="Email" size="large" type="email" />
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
                  <Input type="password" placeholder="Senha" size="large" />
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

              <StyledUserCardFooter>
                <span>Ainda não tem uma conta?</span>
                <StyledUserCardFooterLink
                  onClick={() => {
                    navigate('/signup');
                  }}
                >
                  Cadastre-se
                </StyledUserCardFooterLink>
                .
              </StyledUserCardFooter>
            </StyledUserCard>
          </StyledUserPages>
        </StyledMainContentView>

        <StyledUserCardFooterAction>
          <span>Ou entre com</span>

          <StyledUserSocialLink>
            <Button>
              <FaFacebookF />
            </Button>
            <Button>
              <GoogleOutlined />
            </Button>
            <Button>
              <GithubOutlined />
            </Button>
            <Button>
              <TwitterOutlined />
            </Button>
          </StyledUserSocialLink>
        </StyledUserCardFooterAction>
      </AuthWrapper>
    </>
  );
};
