import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as Logo } from '../../../assets/icon/401.svg';
import {
  StyledErrorButton,
  StyledErrorContainer,
  StyledErrorContent,
  StyledErrorImage,
  StyledErrorPara,
} from '../index.styled';

export const Error401 = () => {
  const navigate = useNavigate();

  const onGoBackToHome = () => {
    navigate(-1);
  };

  return (
    <>
      <Helmet>
        <title>Não autorizado</title>
      </Helmet>

      <StyledErrorContainer key="a">
        <StyledErrorImage>
          <Logo />
        </StyledErrorImage>
        <StyledErrorContent>
          <h3>Não autorizado</h3>
          <StyledErrorPara>
            <p className="mb-0">Você não está autorizado para esta página!</p>
          </StyledErrorPara>
          <StyledErrorButton type="primary" onClick={onGoBackToHome}>
            Voltar
          </StyledErrorButton>
        </StyledErrorContent>
      </StyledErrorContainer>
    </>
  );
};
