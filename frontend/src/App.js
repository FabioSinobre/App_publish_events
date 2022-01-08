import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from '../src/store/';
import { Provider } from 'react-redux';

/*Pages*/
import Login from './view/Login';
import NovoUsuario from './view/usuarioNovo';
import Home from './view/home';
import RecuperarSenha from './view/recuperarSenha';
import PublicarEventos from './view/criarEvento';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/novousuario" element={<NovoUsuario />} />
          <Route path="/recuperarsenha" element={<RecuperarSenha />} />
          <Route path="/publicarevento" element={<PublicarEventos />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
