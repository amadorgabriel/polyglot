import styled from 'styled-components';
import AppCard from '../../_shared/AppCard';

export const StyledPromoCard = styled(AppCard)`
  background-color: #0A8FDC !important;
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;

export const StyledPromoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;

  & h3 {
    margin-bottom: 8px;
    font-size: ${({ theme }) => theme.font.size.base};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }

  & p {
    margin-bottom: 12px;
  }

  & .btn {
    background-color: white;
    color: black;
    text-transform: capitalize;
  }
`;

export const StyledPromoThumb = styled.div`
  margin-bottom: 8px;
`;
