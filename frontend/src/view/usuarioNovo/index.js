import React, { useState } from 'react';
import firebase from '../../config/firebase';
import 'firebase/compat/app';
import 'firebase/compat/auth';
import NavBar from '../../components/navbar';
import './usuarioNovo.css';

function NovoUsuario() {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [msg, setMsg] = useState();
    const [carregando, setCarregando] = useState();

    function Cadastrar() {

        setCarregando(1);
        setMsgTipo(null);

        if (!email || !senha) {
            setMsgTipo('erro')
            setMsg('Você precisa informar o e-mail e a senha para se cadastrar!')
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(email, senha).then(resultado => {
            setCarregando(0);
            setMsgTipo('sucesso')
        }).catch(erro => {
            setCarregando(0);
            setMsgTipo('erro')
            switch (erro.message) {
                case 'Password should be at least 6 characters':
                    setMsg('A senha deve ter pelo menos 6 caracteres!');
                    break;
                case 'The email address is already in use by another account.':
                    setMsg('Este email já está sendo utilizado por outro usuário!');
                    break;
                case 'The email address is badly formatted.':
                    setMsg('O formato do seu email é inválido!');
                    break;
                default:
                    setMsg('Não foi possível cadastrar. Tente novamente mais tarde!');
                    break;
            }
        })
    }

    return (
        <>
            <NavBar />
            <div className="form-cadastro">
                <form className="text-center form-login mx-auto mt-5">
                    <h1 className="h3 mb-3 text-black font-weight-bold">Novo cadastro</h1>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my-2" placeholder="E-mail" />
                    <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control my-2" placeholder="Senha" />
                    {
                        carregando ? <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                            : <button onClick={Cadastrar} type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro">Cadastrar</button>
                    }
                    <div className="text-black text-center my-3">
                        {msgTipo === 'sucesso' && <span><strong>Wow!</strong> usuário cadastrado com sucesso! &#128526; </span>}
                        {msgTipo === 'erro' && <span><strong>Ops!</strong> {msg} &#128546;</span>}
                    </div>
                </form>
            </div>
        </>
    );
}

export default NovoUsuario;