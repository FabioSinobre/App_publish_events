import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from '../src/store/';
import { Provider } from 'react-redux';

/*Pages*/
import Login from './view/Login';
import NovoUsuario from './view/usuarioNovo';
import Home from './view/home';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/novousuario" element={<NovoUsuario />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
