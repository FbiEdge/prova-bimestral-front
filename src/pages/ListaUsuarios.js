import { useEffect, useState } from 'react';
import axios from 'axios';

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/usuarios');
        setUsuarios(response.data);
      } catch (error) {
        console.error('Erro ao buscar usuários', error);
      }
    };
    fetchUsuarios();
  }, []);

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', marginTop: '50px' }}>
      <h2>Lista de Usuários</h2>
      {usuarios.length === 0 ? (
        <p>Nenhum usuário cadastrado.</p>
      ) : (
        <ul>
          {usuarios.map((usuario, index) => (
            <li key={index}>
              {usuario.nome} - {usuario.email} - {usuario.telefone}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaUsuarios;
