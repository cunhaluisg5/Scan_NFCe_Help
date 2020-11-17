import React from 'react';
import '../components/Navbar.css';

import ResetPasswordImage1 from '../assets/img/reset_password/01_reset_password.png';
import ResetPasswordImage2 from '../assets/img/reset_password/02_reset_password.png';
import ResetPasswordImage3 from '../assets/img/reset_password/03_reset_password.png';
import ResetPasswordImage4 from '../assets/img/reset_password/04_reset_password.png';
import ResetPasswordImage5 from '../assets/img/reset_password/05_reset_password.png';
import ResetPasswordImage6 from '../assets/img/reset_password/06_reset_password.png';
import ResetPasswordImage7 from '../assets/img/reset_password/07_reset_password.png';

export default function ResetPassword() {
    return (
        <div className='container'>
            <h1>Redefinição de Senha</h1>
            <p>Para redefinição de senha, basta seguir os passos mostrados abaixo.</p>
            <h3>1 - Acesse a tela de redefinição de senha</h3>
            <img className='verticalImage' src={ResetPasswordImage1} alt='Image1' />
            <h3>2 - Preencha as informações</h3>
            <p>Preencha corretamente o "E-mail" cadastrado no aplicativo.</p>
            <img className='verticalImage' src={ResetPasswordImage2} alt='Image2' />
            <h3>3 - Confirmar Envio</h3>
            <p>Estando o e-mail preenchido corretamente, é necessário apenas clicar no botão "Enviar"
                e, se a informação for válida, será enviado um e-mail.
            </p>
            <img className='verticalImage' src={ResetPasswordImage3} alt='Image3' />
            <h3>4 - Receber E-mail</h3>
            <p>Instruções para redefinição de senha serão recebidas no e-mail informado.</p>
            <img className='horizontalImage' src={ResetPasswordImage4} alt='Image4' />
            <h3>5 - Acessar aplicação para redefinição de senha</h3>
            <p>Ao clicar no link recebido por e-mail, um redirecionamento será feito para a tela de 
                redefinição.
            </p>
            <img className='horizontalImage' src={ResetPasswordImage5} alt='Image5' />
            <h3>6 - Preencher as informações</h3>
            <p>Para envio de solicitação, é necessário preencher o "E-mail" cadastrado no aplicativo e 
                a "Senha" a qual é desejada a substituição.
            </p>
            <img className='horizontalImage' src={ResetPasswordImage6} alt='Image6' />
            <h3>7 - Senha Redefinida</h3>
            <p>Estando as informações preenchidas corretamente, basta clicar no botão "Redefinir Senha" e 
                uma nova senha será cadastrada para o usuário.
            </p>
            <img className='horizontalImage' src={ResetPasswordImage7} alt='Image7' />
        </div>
    )
}
