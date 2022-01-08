import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function NavBar() {

    const dispatch = useDispatch(); 

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <span className="navbar-brand text-white font-weight-bold">Eventos</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="far fa-comment-dots text-white"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        {
                            useSelector(state =>state.usuarioLogado) > 0 ?
                        <>
                            
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/publicarevento">Publicar Evento</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="">Menu Eventos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="" onClick={() => dispatch({type: 'LOG_OUT'})   }>Sair</Link>
                            </li>
                            <i class="far fa-smile-wink text-white fa-2x"></i>
                        </>
                        :
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/novousuario">Novo Usuário</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/login">Login</Link>
                            </li>
                        </>
                        }
                    </ul>
                </div>
            </div>
        </nav >
    );
}

export default NavBar;