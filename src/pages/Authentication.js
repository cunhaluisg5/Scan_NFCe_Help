import React from 'react';
import '../components/Navbar.css';

import AuthenticationImage1 from '../assets/img/authentication/01_authentication.png';
import AuthenticationImage2 from '../assets/img/authentication/02_authentication.png';
import AuthenticationImage3 from '../assets/img/authentication/03_authentication.png';

export default function Authentication() {
    return (
        <div className='container'>
            <h1>Autenticação</h1>
            <p>Para autenticação no aplicativo, basta seguir os passos mostrados abaixo.</p>
            <h3>1 - Acessar a tela de autenticação</h3>
            <img className='verticalImage' src={AuthenticationImage1} alt='Image1' />
            <h3>2 - Preencher as informações</h3>
            <p>Preencha corretamente "E-mail" e "Senha".</p>
            <img className='verticalImage' src={AuthenticationImage2} alt='Image2' />
            <h3>3 - Confirmar Acesso</h3>
            <p>Estando todas as informações preenchidas, é necessário apenas clicar no botão "Entrar"
                e, se as informações forem válidas, o acesso ao aplicativo será liberado.
            </p>
            <img className='verticalImage' src={AuthenticationImage3} alt='Image3' />
        </div>
    )
}
