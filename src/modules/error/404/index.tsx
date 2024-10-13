import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as Logo } from '../../../assets/icon/404.svg';
import {
  StyledErrorButton,
  StyledErrorContainer,
  StyledErrorContent,
  StyledErrorImage,
  StyledErrorPara,
} from '../index.styled';

export const Error404 = () => {
  const navigate = useNavigate();

  const onGoBackToHome = () => {
    navigate(-1);
  };

  return (
    <>
      <Helmet>
        <title>Não encontrado</title>
      </Helmet>

      <StyledErrorContainer key="a">
        <StyledErrorImage>
          <Logo />
        </StyledErrorImage>
        <StyledErrorContent>
          <h3>Ops.. Página não encontrada!</h3>
          <StyledErrorPara>
            <p className="mb-0">
              Não conseguimos encontrar a página
              <br />
              que você está procurando.
            </p>
          </StyledErrorPara>
          <StyledErrorButton type="primary" onClick={onGoBackToHome}>
            Voltar
          </StyledErrorButton>
        </StyledErrorContent>
      </StyledErrorContainer>
    </>
  );
};
