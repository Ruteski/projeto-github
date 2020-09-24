import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Container, Header, RepositoryInfo, Issues } from './styles';
import logoImg from '../../assets/logo.svg';

interface IRepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<IRepositoryParams>();

  return (
    <Container>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={20} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://i.pinimg.com/originals/56/fe/fe/56fefed7843365b32e9df6824a5c3b2e.jpg"
            alt="Alucard"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>descricao do repositorio</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>stars</span>
          </li>
          <li>
            <strong>654</strong>
            <span>forks</span>
          </li>
          <li>
            <strong>32</strong>
            <span>issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="">
          <div>
            <strong>asdfasdf</strong>
            <p>6a5s4df</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </Container>
  );
};

export default Repository;
