import { Button, Checkbox, Form, Input } from 'antd';

import { FaFacebookF } from 'react-icons/fa';
import { GithubOutlined, TwitterOutlined } from '@ant-design/icons';

import { AppPageMeta } from '../../../core/components/PageMeta';
import {
  StyledUserCard,
  StyledUserCardFooter,
  StyledUserCardFooterAction,
  StyledUserCardFooterLink,
  StyledUserCardHeader,
  StyledUserCardLogo,
  StyledUserContainer,
  StyledUserFieldAction,
  StyledUserFieldActionLink,
  StyledUserForm,
  StyledUserFormBtn,
  StyledUserPages,
  StyledUserSocialLink,
} from './index.styled';
import { AuthWrapper } from '../../../core/components/Layout/Auth';
import { StyledMainContentView } from '../../../core/components/Layout/Auth/index.styled';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

export const SigninPage = () => {
  return (
    <>
      <AppPageMeta title="Login" />

      <AuthWrapper>
        <StyledMainContentView>
          <StyledUserPages>
            <StyledUserCard>
              <StyledUserCardHeader>
                <StyledUserCardLogo>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Logo-uninove.svg/2560px-Logo-uninove.svg.png"
                    alt="crema"
                    title="crema"
                  />
                </StyledUserCardLogo>
                <h3>Faça seu Login</h3>
              </StyledUserCardHeader>

              <StyledUserForm
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  name="email"
                  className="form-field"
                  rules={[
                    { required: true, message: 'Please input your Email!' },
                  ]}
                >
                  <Input placeholder="Email" />
                </Form.Item>

                <Form.Item
                  name="password"
                  className="form-field"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Password!',
                    },
                  ]}
                >
                  <Input type="password" placeholder="Insira sua senha" />
                </Form.Item>

                <StyledUserFieldAction name="remember" valuePropName="checked">
                  <>
                    <Checkbox>Lembrar de mim</Checkbox>
                    <StyledUserFieldActionLink className="user-field-action-link ml-auto">
                      Esqueci a senha
                    </StyledUserFieldActionLink>
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
                    <GithubOutlined />
                  </Button>
                  <Button>
                    <TwitterOutlined />
                  </Button>
                </StyledUserSocialLink>
              </StyledUserCardFooterAction>

              <StyledUserCardFooter>
                <span>Não tem uma conta?</span>
                <StyledUserCardFooterLink>Cadastrar</StyledUserCardFooterLink>
              </StyledUserCardFooter>
            </StyledUserCard>
          </StyledUserPages>
        </StyledMainContentView>
      </AuthWrapper>
    </>
  );
};
