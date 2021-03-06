import React, { useState } from 'react';
import firebase from '../../config/firebase';
import {Link, Navigate} from 'react-router-dom';
import 'firebase/compat/app';
import 'firebase/compat/auth';
import { useSelector, useDispatch } from 'react-redux';
import './login.css';
import '../../store/usuarioReducer';
import NavBar from '../../components/navbar';

function Login() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const dispatch = useDispatch();

    function logar() {
        firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
            setMsgTipo('sucesso');
            setTimeout(()=>{
                dispatch({ type: 'LOG_IN', usuarioEmail: email })
            },2000);
            
        }).catch(erro => {
            setMsgTipo('erro');
        });

    }

    return (
        <>
            <NavBar />

            <div className="login-content d-flex aling-center">
            
            {
                useSelector(state => state.usuarioLogado) > 0 ? 
                
                    <Navigate to='/' />
                 : null
            }

                <form className="mx-auto text-center">
                    <i class="far fa-smile-wink text-white fa-5x"></i>
                    <h1 className="h3 mb-3 fw-normal text-white text-center fw-bold">Login</h1>

                    <input onChange={(e) => setEmail(e.target.value)} type="email" class="form-control my-3" id="floatingInput" placeholder="e-mail" />
                    <input onChange={(e) => setSenha(e.target.value)} type="password" class="form-control my-3" id="floatingPassword" placeholder="senha" />
                    <button onClick={logar} className="w-100 btn btn-lg btn-login my-2" type="button">Entrar</button>

                    <div className="text-white text-center my-3">
                        {msgTipo === 'sucesso' && <span><strong>Wow!</strong> você está conectado! &#128526; </span>}
                        {msgTipo === 'erro' && <span><strong>Ops!</strong> verifique se a senha ou e-mail estão corretos! &#128546;</span>}
                    </div>
                    <div className="opcao-login">
                        <Link to='/recuperarsenha' className="mx-2">Recuperar senha</Link>
                        <span className="text-white">&#9816;</span>
                        <Link to='/novousuario' className="mx-2">Novo Cadastro</Link>
                    </div>

                </form>

            </div>
        </>
    );
}
export default Login;