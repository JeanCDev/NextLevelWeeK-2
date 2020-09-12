import React from 'react';
import logo from '../../assets/images/logo.svg';
import './styles.css'
import Button from '../../Components/Button';
import PageHeader from '../../Components/PageHeader';

function Login() {
    return (
        <div id="container">
        <PageHeader title="Criar conta"/>

        <div id="main-register">
            <div id="register">
                <div>
                    <h2>Cadastro</h2>
                    <p>
                        Preencha os dados abaixo <br/>
                        para começar
                    </p>

                    <form method="" action="">
                        <input
                            type="text"
                            name="name"
                            placeholder="Nome" />

                        <input
                            type="text"
                            name="surname"
                            placeholder="Sobrenome" />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email" />

                        <input
                            type="password"
                            name="password"
                            placeholder="Senha" />

                        <Button type="submit" innerText="Cadastrar-se"/>
                    </form>
                </div>
            </div>

            <div id="logo-register">
                <div>
                    <img src={logo} alt="Logo Proffy" />
                    <h2>Sua plataforma de <br /> estudos online</h2>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Login;