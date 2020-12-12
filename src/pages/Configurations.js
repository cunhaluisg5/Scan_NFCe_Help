import React from 'react';
import '../components/Navbar.css';

import ConfigurationsImage01 from '../assets/img/configurations/01_configurations.png';
import ConfigurationsImage02 from '../assets/img/configurations/02_configurations.png';
import ConfigurationsImage03 from '../assets/img/configurations/03_configurations.png';

export default function Configurations() {
    return (
        <div className='container'>
            <h1>Configurações</h1>
            <p>Para a tela de configurações estão presentes algumas opções, como editar nome de usuário, 
                salvar notas automaticamente, ajuda e sobre.
            </p>
            <img className='verticalImage' src={ConfigurationsImage01} alt='Image1' />
            <h3>1 - Editar nome de usuário</h3>
            <p>Para a edição de nome do usuário cadastrado, basta clicar na opção "Editar nome de usuário", 
                alterar o nome e salvar a modificação.
            </p>
            <img className='verticalImage' src={ConfigurationsImage02} alt='Image1' />
            <h3>2 - Salvar notas automaticamente</h3>
            <p>É possível ativar a opção para salvar notas automaticamente após a leitura, não sendo necessário 
                ativar o ícone para cadastro da nota após a leitura.
            </p>
            <h3>3 - Ajuda</h3>
            <p>É possível acessar a documentação de ajuda para utilização do aplicativo.</p>
            <h3>4 - Exibir informações sobre o aplicativo</h3>
            <p>É possível a exibição de algumas informações do aplicativo, como a versão a qual se encontra.</p>
            <img className='verticalImage' src={ConfigurationsImage03} alt='Image3' />
        </div>
    )
}
