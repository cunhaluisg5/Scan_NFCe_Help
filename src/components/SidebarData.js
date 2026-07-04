import React from 'react';
import * as FaIcons from 'react-icons/fa';

export const SidebarData = [
    {
        title: 'Cadastro',
        path: "/register",
        icon: <FaIcons.FaUserAlt />,
        cName: 'nav-text'
    },
    {
        title: 'Autenticacao',
        path: "/authentication",
        icon: <FaIcons.FaKey />,
        cName: 'nav-text'
    },
    {
        title: 'Redefinicao de Senha',
        path: "/resetPassword",
        icon: <FaIcons.FaMailBulk />,
        cName: 'nav-text'
    },
    {
        title: 'Listagem das Notas',
        path: "/gradesListing",
        icon: <FaIcons.FaToiletPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Leitura de Codigo',
        path: "/codeReading",
        icon: <FaIcons.FaQrcode />,
        cName: 'nav-text'
    },
    {
        title: 'Analise de Gastos',
        path: "/spendingAnalysis",
        icon: <FaIcons.FaChartLine />,
        cName: 'nav-text'
    },
    {
        title: 'Analise de Produtos',
        path: "/productsAnalysis",
        icon: <FaIcons.FaChartLine />,
        cName: 'nav-text'
    },
    {
        title: 'Configuracoes',
        path: "/configurations",
        icon: <FaIcons.FaCog />,
        cName: 'nav-text'
    },
    {
        title: 'Documentacao da API',
        path: "/apiDocs",
        icon: <FaIcons.FaBook />,
        cName: 'nav-text'
    },
    {
        title: 'Sair',
        path: "/logout",
        icon: <FaIcons.FaSignOutAlt />,
        cName: 'nav-text'
    }

]

export default SidebarData;
