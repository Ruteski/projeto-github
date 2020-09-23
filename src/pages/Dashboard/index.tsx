import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';
import * as Style from './styles';
import logoImg from '../../assets/logo.svg';

interface IRepository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<IRepository[]>([]);
  const [newRepo, setNewRepo] = useState('');

  const handleAddRepository = async (event: FormEvent) => {
    event.preventDefault();

    const response = await api.get<IRepository>(`repos/${newRepo}`);

    setNewRepo('');

    const repository = response.data;

    setRepositories([...repositories, repository]);
  };

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Style.Title>Explore repositórios no Github.</Style.Title>

      <Style.Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Style.Form>

      <Style.Repositories>
        {repositories.map(repo => (
          <a key={repo.full_name} href="teste">
            <img src={repo.owner.avatar_url} alt={repo.owner.login} />
            <div>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Style.Repositories>
    </>
  );
};

export default Dashboard;
