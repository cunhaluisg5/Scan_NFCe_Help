import React from 'react';
import '../components/Navbar.css';

import RegisterImage1 from '../assets/img/register/01_register.png';
import RegisterImage2 from '../assets/img/register/02_register.png';
import RegisterImage3 from '../assets/img/register/03_register.png';

export default function Register() {
    return (
        <div className='container'>
            <h1>Cadastro</h1>
            <p>Para cadastro no aplicativo, basta seguir os passos mostrados abaixo.</p>
            <h3>1 - Acessar a tela de cadastro</h3>
            <img className='verticalImage' src={RegisterImage1} alt='Image1' />
            <h3>2 - Preencher as informações corretamente</h3>
            <p>É preciso preencher os campos "Nome", "E-mail", "Senha" e "Confirmação".</p>
            <p className='text-alert'>Importante informar um e-mail válido, pois através
            dele, a senha poderá ser redefinida caso necessário.</p>
            <img className='verticalImage' src={RegisterImage2} alt='Image2' />
            <h3>3 - Confirmar Cadastro</h3>
            <p>Estando todas as informações preenchidas, é necessário apenas clicar no botão "Registrar"
                e, se as informações forem válidas, o cadastro será realizado.
            </p>
            <img className='verticalImage' src={RegisterImage3} alt='Image3' />
        </div>
    )
}
