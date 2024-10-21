import { useState } from 'react';
import axios from 'axios';
import InputMask from 'react-input-mask';

function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    dataNascimento: '',
    telefone: '',
    genero: 'Masculino',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/usuarios', formData);
      alert('Usuário cadastrado com sucesso!');
      setFormData({
        nome: '',
        email: '',
        senha: '',
        dataNascimento: '',
        telefone: '',
        genero: 'Masculino',
      });
    } catch (error) {
      console.error('Erro ao cadastrar usuário', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2>Cadastro de Usuário</h2>
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
      <InputMask
        mask="+99 99999-9999"
        name="telefone"
        placeholder="Telefone"
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
    </form>
  );
}

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  maxWidth: '400px',
  margin: 'auto',
  marginTop: '50px',
};

export default Cadastro;
