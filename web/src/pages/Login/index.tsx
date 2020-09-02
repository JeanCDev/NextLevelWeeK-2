import React from 'react';
import logo from '../../assets/images/logo.svg';
import './styles.css'

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
                            placeholder="Email"/>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Senha"/>
                        <div>
                            <input type="checkbox" />
                            Lembrar senha
                        </div>
                        <a href="#">Esqueci minha senha</a>

                        <button id="submit-button" disabled>Entrar</button>
                    </form>
                    
                    <div>
                        OI
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;