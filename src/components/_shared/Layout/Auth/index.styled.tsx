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
  padding: 24px;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding: 20px;
    width: 50%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    width: 40%;
  }
`;

export const StyledAuthCardHeader = styled.div`
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 22px;

  p {
    margin-left: 8px;

    font-family: Sora;
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 600;
    line-height: 19px; /* 105.556% */
    letter-spacing: 0.54px;
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
  background-color: ${({ theme }) => theme.palette.gray[900]};
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
`;

export const StyledAuth = styled(Layout)`
  flex: 1;
  display: flex;
  position: relative;
  min-height: 100vh;
  justify-content: center;
  align-items: center;

  background-image: linear-gradient(
    225deg,
    hsl(68deg 75% 37%) 0%,
    hsl(68deg 74% 36%) 19%,
    hsl(68deg 73% 35%) 27%,
    hsl(68deg 73% 34%) 34%,
    hsl(68deg 72% 33%) 41%,
    hsl(68deg 71% 31%) 47%,
    hsl(68deg 71% 30%) 53%,
    hsl(69deg 70% 29%) 59%,
    hsl(69deg 69% 28%) 66%,
    hsl(69deg 69% 26%) 73%,
    hsl(69deg 68% 25%) 81%,
    hsl(69deg 67% 24%) 100%
  ) !important;

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

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 30px 32px 0;
  }
`;
