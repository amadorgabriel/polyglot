import { List } from 'antd';
import styled from 'styled-components';

export const StyledNotificationItem = styled(List.Item)`
  display: flex;
  align-items: center;
  border-bottom: 0 none !important;

  padding: 8px 20px;
  max-height: 80px;
`;

export const StyledNotificationThumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 20px;
  width: 50px;
  height: 50px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.base};
  margin-right: 16px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 16px;
  }
`;

export const StyledNotificationContent = styled.div`
  width: calc(100% - 66px);

  & h3 {
    display: inline-block;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-size: ${({ theme }) => theme.font.size.base};
    margin-bottom: 2px;
    margin-top: 0;
  }

  & p {
    font-size: ${({ theme }) => theme.font.size.base};
    color: ${({ theme }) => theme.palette.text.secondary};
    margin-bottom: 4px;
    margin-top: 0;
  }
`;
