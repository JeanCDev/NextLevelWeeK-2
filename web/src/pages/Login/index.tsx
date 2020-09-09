import React from 'react';
import logo from '../../assets/images/logo.svg';
import './styles.css'
import purpleHeart from '../../assets/images/icons/purple-heart.svg';

function Login() {
    return (
        <div id="main">
            <div id="logo">
                <div>
                    <img src={logo} alt="Logo Proffy" />
                    <h2>Sua plataforma de <br /> estudos online</h2>
                </div>
            </div>
            <div id="login">
                <div>
                    <form method="" action="">
                        <h2>Fazer Login</h2>

                        <input
                            type="email"
                            name="email"
                            placeholder="Email" />

                        <input
                            type="password"
                            name="password"
                            placeholder="Senha" />

                        <div className="password-options">
                            <div>
                                <input type="checkbox" id="keep-connected" />
                                <label htmlFor="keep-connected">Lembrar-me</label>
                            </div>

                            <a href="#">Esqueci minha senha</a>
                        </div>


                        <button id="submit-button">Entrar</button>
                    </form>

                    <footer id="create-account">
                        <div>
                            <p>
                                Não tem conta?
                            </p>
                            <p>
                                É de graça
                                <img src={purpleHeart} alt="" />
                            </p>
                        </div>
                        <a href="">Cadastre-se</a>
                    </footer>
                </div>
            </div>
        </div>

    )
}

export default Login;