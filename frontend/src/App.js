import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/*Pages*/
import Login from './view/Login';
import NovoUsuario from './view/usuarioNovo';
import Home from './view/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/novousuario" element={<NovoUsuario />} />
      </Routes>
    </Router>
  );
}

export default App;
