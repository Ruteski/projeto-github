import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import * as Style from './styles';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Style.Title>Explore repositórios no Github.</Style.Title>

      <Style.Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Style.Form>

      <Style.Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/10974914?s=400&u=145c4aea809681a5046b2721212804fb2cf17eb6&v=4"
            alt="Lincoln Ruteski"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>uma descricao que faça sentido para o unform</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/10974914?s=400&u=145c4aea809681a5046b2721212804fb2cf17eb6&v=4"
            alt="Lincoln Ruteski"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>uma descricao que faça sentido para o unform</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/10974914?s=400&u=145c4aea809681a5046b2721212804fb2cf17eb6&v=4"
            alt="Lincoln Ruteski"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>uma descricao que faça sentido para o unform</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Style.Repositories>
    </>
  );
};

export default Dashboard;
