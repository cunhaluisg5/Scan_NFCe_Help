import React from 'react';
import '../components/Navbar.css';

import CodeReadingImage1 from '../assets/img/code_reading/01_code_reading.png';
import CodeReadingImage2 from '../assets/img/code_reading/02_code_reading.png';
import CodeReadingImage3 from '../assets/img/code_reading/03_code_reading.png';

export default function CodeReading() {
    return (
        <div className='container'>
            <h1>Leitura de Código</h1>
            <h3>1 - Ler nota com QR-Code</h3>
            <p>Para leitura das notas, basta acessar a tela "Leitor de Código" do aplicativo.</p>
            <p>É necessário apenas apontar a câmera do smartphone para um código válido de uma NFC-e, 
                como na imagem abaixo.
            </p>
            <img className='verticalImage' src={CodeReadingImage1} alt='Image1' />
            <h3>2 - Exibir informações da nota lida</h3>
            <p>Após a leitura da nota, mais detalhes serão exibidos na tela, bastando apenas clicar no 
                ícone presente no menu superior à direita para salvar a nota e consultar futuramente.
            </p>
            <img className='verticalImage' src={CodeReadingImage2} alt='Image2' />
            <p className='text-alert'>Se a opção "Salvar notas automaticamente" estiver ativada, após a 
                leitura, a nota será salva automaticamente.
            </p>            
            <h3>3 - Agrupar a nota por estabelecimento</h3>
            <p>Após a nota ser salva, ela será agrupada por estabelecimento, podendo ser acessada 
                posteriormente.
            </p>
            <img className='verticalImage' src={CodeReadingImage3} alt='Image3' />
        </div>
    )
}
