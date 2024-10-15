import { Card, Layout } from 'antd';
import styled from 'styled-components';

const { Content } = Layout;

export const StyledAuthWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const StyledAuthCard = styled(Card)`
  max-width: 900px;
  min-height: 350px;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  position: relative;
  border: 0 none;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    min-height: 450px;
  }

  & .ant-card-body {
    padding: 0;
    display: flex;
    flex: 1;
  }
`;

export const StyledAuthMainContent = styled.div`
  /* padding: 24px; */
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #313541;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: 50%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    width: 40%;
  }
`;

export const StyledAuthCardHeader = styled.div`
  padding: 52px 42px 0 42px;

  margin-bottom: 24px;
  font-size: 22px;

  h1 {
    margin: 0;
    /* line-height: 40px; 105.556% */
    font-size: 30px;
    color: white;
    letter-spacing: 0.54px;
    font-style: normal;

    font-weight: 400;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-bottom: 8px;
  }

  & img {
    cursor: pointer;
    height: 36px;
    margin-right: 10px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 10px;
    }
  }
`;

export const StyledAuthWellAction = styled.div`
  position: relative;
  padding: 24px;
  display: none;
  background-color: #2b3137;
  color: white;
  font-size: ${({ theme }) => theme.font.size.base};
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 50%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    width: 60%;
    padding: 40px;
  }

  & h2 {
    color: white;
    font-size: 30px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }

  & p {
    line-height: 1.6;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const StyledAuthWelContent = styled.div`
  max-width: 520px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: 36px;
    font-weight: bold;
  }

  p {
    font-size: 16px;
    line-height: 22px;
  }

  .ant-segmented {
    width: 220px !important;
    background-color: #898b9116 !important;
    color: #fff !important;

    .ant-segmented-item {
      background-color: transparent !important;
    }

    .ant-segmented-item-selected {
      color: #fff !important;
      background-color: #9b34e0 !important;
    }
  }
`;

export const StyledAuth = styled(Layout)`
  flex: 1;
  display: flex;
  position: relative;
  min-height: 100vh;
  justify-content: center;
  align-items: center;

  background-color: #1f2527;

  & .ant-layout-content {
    padding: 20px;
    justify-content: center;
    display: flex;
  }

  & .main-auth-scrollbar {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  & .footer {
    margin-right: 0;
    margin-left: 0;
  }
`;

export const StyledMainContentView = styled(Content)`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px 20px 0;
  min-height: auto !important;
  //background-color: ${({ theme }) => theme.palette.background.default};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 30px 32px 0;
  }
`;
