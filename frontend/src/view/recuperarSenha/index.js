import React, {useState} from 'react';
import './recuperaSenha.css';

import firebase from '../../config/firebase';
import 'firebase/compat/auth';
import 'firebase/compat/app';
import NavBar from '../../components/navbar'

function RecuperarSenha(){

    const[email, setEmail] = useState();
    const[msg, setMsg] = useState();

    function enviarNovaSenha(){
        firebase.auth().sendPasswordResetEmail(email).then(resultado =>{
            setMsg('Link para recuperar senha foi envido para seu e-mail');
        }).catch(erro =>{
            setMsg('Verifique se o e-mail está correto!')
        })
    }
    return(
        <>
            <NavBar />
            <div className='form-cadastro'>
                <form className='text-center form-login mx-auto mt-5'>
                    <h3 className='mb-3 font-weight-bold'>Recuperar senha</h3>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my-2" placeholder='e-mail'/>
                    <div className='msg my-4 text-center'>
                        <span>{msg}</span>
                    </div>
                    <button onClick={enviarNovaSenha} type='button' className='btn btn-lg btn-block btn-enviar'>Enviar</button>
                </form>

            </div>
        </>
    );
}
export default RecuperarSenha;