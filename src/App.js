import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import ListaUsuarios from './pages/ListaUsuarios';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Cadastro</Link> | <Link to="/usuarios">Lista de Usuários</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Cadastro />} />
        <Route path="/usuarios" element={<ListaUsuarios />} />
      </Routes>
    </Router>
  );
}

export default App;
