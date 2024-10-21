// src/pages/ListaUsuarios.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await axios.get('https://cadastro-api.vercel.app/api/usuarios'); // Sua API
        setUsuarios(response.data);
      } catch (error) {
        console.error('Erro ao buscar usuários', error);
      }
    };
    fetchUsuarios();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://cadastro-api.vercel.app/api/usuarios/${id}`); // Sua API
      setUsuarios(usuarios.filter(usuario => usuario.id !== id));
      alert('Usuário excluído com sucesso!');
    } catch (error) {
      console.error('Erro ao excluir usuário', error);
      alert('Erro ao excluir usuário.');
    }
  };

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            {usuario.nome} - {usuario.email} - {usuario.telefone}
            <button onClick={() => handleDelete(usuario.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaUsuarios;
