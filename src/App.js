// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import ListaUsuarios from './pages/ListaUsuarios';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cadastro />} />
        <Route path="/usuarios" element={<ListaUsuarios />} />
      </Routes>
    </Router>
  );
};

export default App;
