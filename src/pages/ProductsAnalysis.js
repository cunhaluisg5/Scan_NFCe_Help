import React from 'react';
import '../components/Navbar.css';

import ProductsAnalysisImage01 from '../assets/img/products_analysis/01_products_analysis.png';

export default function ProductsAnalysis() {
    return (
        <div className='container'>
            <h1>Análise de Produtos</h1>
            <h3>1 - Analisar gastos com produtos através de determinado mês</h3>
            <p>Para a exibição de algumas análises de produtos pertencentes a compras de um determinado mês, 
                primeiramente é necessário escolher um mês para análise e algumas informações serão exibidas. 
                Após a escolha do mês, todos os produtos pertencentes a compras no período 
                poderão ser selecionados, bastando clicar em um deles e alguns detalhes serão apresentados.
            </p>
            <img className='verticalImage' src={ProductsAnalysisImage01} alt='Image1' />
        </div>
    )
}
