import React from 'react';
import '../components/Navbar.css';

import GradesListingImage1 from '../assets/img/grades_listing/01_grades_listing.png';
import GradesListingImage2 from '../assets/img/grades_listing/02_grades_listing.png';

export default function GradesListing() {
    return (
        <div className='container'>
            <h1>Listagem de Notas</h1>
            <h3>1 - Exibir as notas cadastradas</h3>
            <p>Para listagem das notas, basta acessar a tela "Início" do aplicativo.</p>
            <p>Se houver alguma nota cadastrada ela será exibida, como na imagem abaixo.</p>
            <img className='verticalImage' src={GradesListingImage1} alt='Image1' />
            <h3>2 - Acesse informações detalhadas</h3>
            <p>Para ter acesso a maiores informações da nota, basta clicar sobre ela e informações 
                complementares serão exibidas, como itens presentes e valor ICMS.
            </p>
            <p>Nesta tela é possível excluir a nota da base de dados, para isso, é necessário clicar no 
                ícone de lixeira situado no menu superior à direita.
            </p>
            <img className='verticalImage' src={GradesListingImage2} alt='Image2' />
        </div>
    )
}
