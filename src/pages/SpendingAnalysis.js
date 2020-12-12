import React from 'react';
import '../components/Navbar.css';

import SpendingAnalysisImage01 from '../assets/img/spending_analysis/01_spending_analysis.png';
import SpendingAnalysisImage02 from '../assets/img/spending_analysis/02_spending_analysis.png';
import SpendingAnalysisImage03 from '../assets/img/spending_analysis/03_spending_analysis.png';

export default function SpendingAnalysis() {
    return (
        <div className='container'>
            <h1>Análise de Gastos</h1>
            <h3>1 - Analisar gastos através de filtros</h3>
            <p>Para exibir algumas análises referentes ao ano vigente, basta selecionar um dos filtros 
                disponíveis (Dia, Mês, Ano) e um gráfico será exibido com a variação de preços existentes 
                para o filtro selecionado, além da exibição da nota mais cara no período.
            </p>
            <img className='verticalImage' src={SpendingAnalysisImage01} alt='Image1' />
            <h3>2 - Exibir informações agrupadas por dia</h3>
            <p>É possível também a exibição de informações agrupadas por dia onde existiram compras no mês, 
                essas informações estão presentes no filtro Mês.
            </p>
            <img className='verticalImage' src={SpendingAnalysisImage02} alt='Image2' />
            <h3>3 - Exibir informações agrupadas por mês</h3>
            <p>É possível também a exibição de informações agrupadas por mês onde existiram compras no ano, 
                essas informações estão presentes no filtro Ano.
            </p>
            <img className='verticalImage' src={SpendingAnalysisImage03} alt='Image3' />
        </div>
    )
}
