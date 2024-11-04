import styled from 'styled-components';
import AppCard from '../../_shared/AppCard';

export const StyledPromoCard = styled(AppCard)`
  background-color: #0a8fdc !important;
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;

export const StyledPromoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;

  & h3 {
    margin: 0;
    font-weight: bold;
    font-size: 1rem;
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }

  & p {
    color: white;
    margin: 0 0 24px 0;
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
