import React from 'react';
import './login.css'

function Login() {
    return (
        <div className="login-content d-flex aling-center">
            <form className="mx-auto ">
                <img className="mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                <h1 className="h3 mb-3 fw-normal text-white text-center fw-bold">Login</h1>

                <input type="email" class="form-control my-3" id="floatingInput" placeholder="e-mail" />
                <input type="password" class="form-control my-3" id="floatingPassword" placeholder="senha" />
                <button className="w-100 btn btn-lg btn-login my-2" type="submit">Entrar</button>

                <div className="text-white text-center my-3">
                    <span><strong>Wow!</strong> você está conectado! &#128526; </span>
                    <span><strong>Ops!</strong> verifique se a senha ou e-mail estão corretos! &#128546;</span>
                </div>
                <div className="opcao-login">
                    <a href="#" className="mx-2">Recuperar senha</a>
                    <span className="text-white">&#9816;</span>
                    <a href="#" className="mx-2">Novo Cadastro</a>
                </div>
            </form>
        </div>
    );
}
export default Login;