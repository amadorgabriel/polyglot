import { Button, Dropdown, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

import { FiMoreHorizontal } from 'react-icons/fi';
import { CodeOutlined, LogoutOutlined } from '@ant-design/icons';

import {
  StyledDrawerLayoutHeader,
  StyledDrawerLayoutHeaderDesk,
  StyledDrawerLayoutHeaderSearch,
} from './index.styled';

const AppHeader = () => {
  const navigate = useNavigate();

  return (
    <StyledDrawerLayoutHeader>
      <div className="logo">
        <CodeOutlined style={{ color: 'white' }} />
        <h2>polyglot</h2>
      </div>

      <StyledDrawerLayoutHeaderSearch placeholder="Pesquise aqui" />
      <StyledDrawerLayoutHeaderDesk>
        <Dropdown
          menu={{
            items: [
              {
                key: '0',
                title: '',
                itemIcon: (
                  <Space>
                    Sair
                    <LogoutOutlined />
                  </Space>
                ),
                onClick: () => {
                  navigate('/');
                },
              },
            ],
          }}
        >
          <Button type="text" shape="circle" icon={<FiMoreHorizontal />} />
        </Dropdown>
      </StyledDrawerLayoutHeaderDesk>
    </StyledDrawerLayoutHeader>
  );
};

export default AppHeader;
