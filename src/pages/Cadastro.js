// src/pages/Cadastro.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    dataNascimento: '',
    telefone: '',
    genero: 'Masculino',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://cadastro-api.vercel.app/api/usuarios', formData); // Use sua API
      alert('Usuário cadastrado com sucesso!');
      setFormData({
        nome: '',
        email: '',
        senha: '',
        dataNascimento: '',
        telefone: '',
        genero: 'Masculino',
      });
      navigate('/usuarios'); // Redireciona para a lista de usuários
    } catch (error) {
      console.error('Erro ao cadastrar usuário', error);
      alert('Erro ao cadastrar usuário.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nome"
        placeholder="Nome"
        value={formData.nome}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="senha"
        placeholder="Senha"
        value={formData.senha}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="dataNascimento"
        value={formData.dataNascimento}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="telefone"
        placeholder="Telefone (ex: +55 11 99999-9999)"
        value={formData.telefone}
        onChange={handleChange}
        required
      />
      <select name="genero" value={formData.genero} onChange={handleChange}>
        <option value="Masculino">Masculino</option>
        <option value="Feminino">Feminino</option>
        <option value="Outro">Outro</option>
      </select>
      <button type="submit">Cadastrar</button>
      <button type="button" onClick={() => navigate('/usuarios')}>Ver Usuários</button>
    </form>
  );
};

export default Cadastro;
