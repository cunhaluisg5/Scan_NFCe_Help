import React from 'react';
import '../components/Navbar.css';

import LogoutImage1 from '../assets/img/logout/01_logout.png';
import AuthenticationImage1 from '../assets/img/authentication/01_authentication.png';

export default function Logout() {
    return (
        <div className='container'>
            <h1>Sair</h1>
            <h3>1 - Efetuar logout na aplicação</h3>
            <p>Para encerrar a sessão basta clicar no menu lateral da aplicação em "Sair"</p>
            <img className='verticalImage' src={LogoutImage1} alt='Image1' />
            <h3>2 - Retorno para Autenticação</h3>
            <p>Ao efetuar logout, a aplicação será redirecionada para a tela de autenticação.</p>
            <img className='verticalImage' src={AuthenticationImage1} alt='Image2' />
        </div>
    )
}
