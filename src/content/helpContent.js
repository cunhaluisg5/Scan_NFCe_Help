import logo from '../assets/img/logo.png';

export const brand = {
  name: 'Central de Ajuda Scan NFC-e',
  logo,
};

export const quickActions = [
  {
    title: 'Ler uma NFC-e pela primeira vez',
    description: 'Abra a câmera, valide o QR Code e revise a nota antes de salvar.',
    to: '/guia/ler-nfce',
  },
  {
    title: 'Entender gráficos e comparação',
    description: 'Veja como acompanhar gastos e comparar produtos entre compras.',
    to: '/guia/analises',
  },
  {
    title: 'Recuperar acesso da conta',
    description: 'Solicite o link, valide o acesso e redefina a senha com segurança.',
    to: '/guia/recuperar-senha',
  },
];

export const homeShowcase = [
  {
    eyebrow: 'Leitura da nota',
    title: 'Leitura e revisão da nota',
    caption: 'Leitura, validação em Minas Gerais e salvamento com revisão ou automático.',
    badges: ['QR Code', 'NFC-e MG', 'Itens'],
    rows: ['Mercado Bahamas', '01/07/2026 15:18', '12 itens reconhecidos'],
    footer: 'Total da compra R$ 87,43',
    tone: 'teal',
  },
  {
    eyebrow: 'Análises',
    title: 'Gastos por período',
    caption: 'Resumo por mês com comparação de valores e notas mais relevantes.',
    badges: ['Gráfico', 'Histórico', 'Comparação'],
    rows: ['Julho 2026', '3 mercados monitorados', 'Produto com maior variação: leite'],
    footer: 'Maior economia identificada R$ 12,60',
    tone: 'amber',
  },
];

export const topics = [
  {
    slug: 'comecar',
    label: 'Começar',
    eyebrow: 'Primeiros passos',
    title: 'Cadastre-se e entre com segurança',
    summary: 'Entenda como criar a conta, entrar novamente e validar o acesso antes de usar as funcionalidades principais.',
    highlights: ['Cadastro guiado', 'Login rápido', 'Boas práticas de senha'],
    heroVisuals: [
      {
        eyebrow: 'Cadastro',
        title: 'Crie sua conta em poucos campos',
        caption: 'Nome, e-mail e senha com validação simples e direta.',
        badges: ['Nome', 'E-mail', 'Senha'],
        rows: ['Dados obrigatórios destacados', 'Feedback de erro claro', 'Envio seguro para a API'],
        footer: 'Conta pronta para usar o app',
        tone: 'teal',
      },
      {
        eyebrow: 'Login',
        title: 'Sessão protegida desde a entrada',
        caption: 'Autenticação com token e retorno seguro ao fluxo principal.',
        badges: ['Token', 'Sessão', 'Proteção'],
        rows: ['Credenciais validadas', 'Persistência local da sessão', 'Logout controlado'],
        footer: 'Acesso rápido ao painel inicial',
        tone: 'slate',
      },
    ],
    sections: [
      {
        title: 'Criar uma conta nova',
        description: 'Na tela inicial do aplicativo, use a opção de cadastro para informar nome, e-mail e senha.',
        bullets: [
          'Use um e-mail válido, pois ele será necessário para recuperar a senha depois.',
          'Escolha uma senha com no mínimo 6 caracteres.',
          'Revise os dados antes de enviar para evitar erros de digitação.',
        ],
        visuals: [
          {
            title: 'Formulário de cadastro',
            caption: 'Estrutura objetiva para concluir o primeiro acesso sem atrito.',
            badges: ['Obrigatório', 'Validação'],
            rows: ['Campo nome completo', 'Campo e-mail', 'Senha com confirmação'],
            footer: 'Botão de cadastro liberado após a validação',
            tone: 'teal',
          },
        ],
      },
      {
        title: 'Entrar no aplicativo',
        description: 'Depois do cadastro, entre com o mesmo e-mail e a senha escolhida.',
        bullets: [
          'Se a senha estiver incorreta, a tela mostrará uma mensagem clara para nova tentativa.',
          'Ao entrar com sucesso, sua sessão fica protegida pelo token da API.',
        ],
        visuals: [
          {
            title: 'Tela de autenticação',
            caption: 'Entrada principal com acesso à recuperação de senha.',
            badges: ['Login', 'Recuperação'],
            rows: ['E-mail preenchido', 'Senha validada', 'Acesso ao menu principal'],
            footer: 'Sessão pronta para leitura e análise',
            tone: 'slate',
          },
        ],
      },
    ],
  },
  {
    slug: 'ler-nfce',
    label: 'Ler NFC-e',
    eyebrow: 'Leitura da nota',
    title: 'Ler, revisar e salvar uma nota fiscal',
    summary: 'O principal fluxo do Scan NFC-e está aqui: abrir a câmera, capturar a URL da NFC-e de MG e transformar isso em uma nota pronta para consulta.',
    highlights: ['Leitura por QR Code', 'Validação MG', 'Salvamento manual ou automático'],
    heroVisuals: [
      {
        eyebrow: 'Leitura',
        title: 'Scanner pronto para reconhecer o QR Code',
        caption: 'A câmera orienta o enquadramento da NFC-e para reduzir tentativas sem sucesso.',
        badges: ['Camera', 'QR Code', 'Permissão'],
        rows: ['Moldura central de leitura', 'Detecção da URL fiscal', 'Validação do domínio MG'],
        footer: 'Leitura confirmada em segundos',
        tone: 'teal',
      },
      {
        eyebrow: 'Revisão',
        title: 'Resumo da compra antes de salvar',
        caption: 'Estabelecimento, data, total e itens disponíveis para conferência.',
        badges: ['Itens', 'Total', 'Auto-save'],
        rows: ['Mercado identificado', 'Data fiscal normalizada', 'Lista inicial de produtos'],
        footer: 'Salvar manualmente ou seguir no automático',
        tone: 'amber',
      },
    ],
    sections: [
      {
        title: 'Abrir o leitor',
        description: 'Acesse a opção de leitura pelo menu principal e permita o uso da câmera se solicitado.',
        bullets: [
          'Centralize o QR Code dentro da moldura para acelerar o reconhecimento.',
          'Se a nota não for uma NFC-e de Minas Gerais, a tela vai sinalizar a incompatibilidade.',
        ],
        visuals: [
          {
            title: 'Leitor ativo',
            caption: 'Enquadramento orientado e mensagens de compatibilidade durante a leitura.',
            badges: ['Moldura', 'QRCode'],
            rows: ['Permissão da câmera concedida', 'Leitura em andamento', 'Validador de portal fiscal'],
            footer: 'Leitura da nota no aplicativo',
            tone: 'teal',
          },
        ],
      },
      {
        title: 'Revisar a nota lida',
        description: 'Depois da consulta ao portal fiscal, a aplicação mostra os dados principais e os itens capturados.',
        bullets: [
          'Confira o estabelecimento, data, total e lista de itens antes de gravar.',
          'Se a gravação automática estiver ligada, o aplicativo salva a nota sem passar pela aprovação manual.',
        ],
        visuals: [
          {
            title: 'Resumo da NFC-e',
            caption: 'Área pensada para transmitir segurança antes do salvamento.',
            badges: ['Total', 'Itens', 'Salvar'],
            rows: ['Estabelecimento da compra', 'Quantidade de itens', 'Valor total da nota'],
            footer: 'A ação de salvar aparece apenas quando necessário',
            tone: 'amber',
          },
        ],
      },
    ],
  },
  {
    slug: 'notas',
    label: 'Notas e detalhes',
    eyebrow: 'Consulta de compras',
    title: 'Navegue pelas notas salvas por estabelecimento',
    summary: 'Use a home para agrupar mercados e abrir o detalhamento de cada nota com itens, totais e dados fiscais.',
    highlights: ['Agrupamento por loja', 'Detalhes por nota', 'Exclusão segura'],
    heroVisuals: [
      {
        eyebrow: 'Home',
        title: 'Mercados organizados por histórico',
        caption: 'Cards com totais, quantidade de notas e acesso ao detalhamento.',
        badges: ['Mercados', 'Totais', 'Histórico'],
        rows: ['Bahamas', 'Carrefour', 'Supermercado local'],
        footer: 'Lista prioriza os registros mais recentes',
        tone: 'slate',
      },
      {
        eyebrow: 'Detalhes',
        title: 'Consulta completa da nota fiscal',
        caption: 'Itens, totais e dados fiscais reunidos em uma única visualização.',
        badges: ['Itens', 'ICMS', 'Excluir'],
        rows: ['Nome do estabelecimento', 'Itens com quantidade', 'Total consolidado'],
        footer: 'Exclusão com retorno ao fluxo principal',
        tone: 'teal',
      },
    ],
    sections: [
      {
        title: 'Abrir notas por estabelecimento',
        description: 'Na tela inicial, cada card representa um estabelecimento com valor total acumulado e quantidade de notas.',
        bullets: [
          'Toque no card para listar apenas as notas daquele local.',
          'As notas mais recentes ficam em destaque primeiro.',
        ],
        visuals: [
          {
            title: 'Lista agrupada',
            caption: 'Organização pensada para consulta rápida das compras.',
            badges: ['Cards', 'Filtro'],
            rows: ['Nome do mercado', 'Total acumulado', 'Quantidade de notas'],
            footer: 'Acesso direto ao detalhamento',
            tone: 'slate',
          },
        ],
      },
      {
        title: 'Consultar detalhes e excluir',
        description: 'Dentro da nota você encontra os itens, totais, ICMS e pode remover o registro, se necessário.',
        bullets: [
          'A exclusão remove a nota e os itens vinculados.',
          'Depois de excluir, o aplicativo volta ao fluxo principal para refletir a mudança.',
        ],
        visuals: [
          {
            title: 'Detalhe da nota',
            caption: 'Painel focado na conferência dos dados e no controle da exclusão.',
            badges: ['Conferência', 'Excluir'],
            rows: ['Cabecalho da nota', 'Lista de produtos', 'Resumo financeiro'],
            footer: 'Atualização imediata da navegação',
            tone: 'teal',
          },
        ],
      },
    ],
  },
  {
    slug: 'analises',
    label: 'Análises',
    eyebrow: 'Inteligência de gastos',
    title: 'Leia seus gráficos e compare produtos entre compras',
    summary: 'Essas telas ajudam a transformar notas em decisão: comparar preços, visualizar tendências e identificar picos de gasto.',
    highlights: ['Gráfico temporal', 'Comparação por item', 'Resumo por período'],
    heroVisuals: [
      {
        eyebrow: 'Gastos',
        title: 'Evolução financeira por período',
        caption: 'Leitura clara dos meses, picos e comportamento das compras.',
        badges: ['Mês', 'Gráfico', 'Resumo'],
        rows: ['Período selecionado', 'Maior compra destacada', 'Média de gastos'],
        footer: 'Baseado nas notas salvas na sua conta',
        tone: 'amber',
      },
      {
        eyebrow: 'Produtos',
        title: 'Comparação entre mercados',
        caption: 'Identifique a variação de preço de um mesmo item em compras diferentes.',
        badges: ['Produto', 'Preço', 'Mercado'],
        rows: ['Item filtrado', 'Ocorrências no período', 'Melhor preço encontrado'],
        footer: 'Apoio direto para economizar',
        tone: 'teal',
      },
    ],
    sections: [
      {
        title: 'Análise de gastos',
        description: 'Veja a evolução das compras por dia, mês ou ano com destaque para as notas de maior impacto.',
        bullets: [
          'Use o seletor de período para mudar rapidamente o recorte.',
          'Abra a nota destacada para ver os itens que puxaram o valor para cima.',
        ],
        visuals: [
          {
            title: 'Resumo gráfico',
            caption: 'Visão de tendência com foco nos gastos mais relevantes.',
            badges: ['Gráfico', 'Periodo'],
            rows: ['Filtro mensal', 'Pontos de maior gasto', 'Média comparativa'],
            footer: 'Dados sincronizados com as notas reais',
            tone: 'amber',
          },
        ],
      },
      {
        title: 'Comparação de produtos',
        description: 'Selecione um mês e um item para comparar em quais notas ele apareceu e por quanto foi vendido.',
        bullets: [
          'O aplicativo lista o mesmo produto em estabelecimentos diferentes quando houver ocorrência no período.',
          'Use esse recurso para descobrir a variação de preço entre supermercados.',
        ],
        visuals: [
          {
            title: 'Tabela comparativa',
            caption: 'Consulta objetiva do mesmo item em notas diferentes.',
            badges: ['Filtro', 'Preço'],
            rows: ['Nome do produto', 'Mercado onde apareceu', 'Valor unitário encontrado'],
            footer: 'Comparação pensada para a decisão de compra',
            tone: 'teal',
          },
        ],
      },
    ],
  },
  {
    slug: 'recuperar-senha',
    label: 'Recuperar senha',
    eyebrow: 'Acesso e segurança',
    title: 'Recupere sua conta com a página de redefinição de senha',
    summary: 'O ecossistema usa um app web dedicado para validar o token recebido por e-mail e liberar a nova senha com segurança.',
    highlights: ['Link por e-mail', 'Validação do link', 'Nova senha segura'],
    heroVisuals: [
      {
        eyebrow: 'Solicitação',
        title: 'Pedido de recuperação pelo aplicativo',
        caption: 'Fluxo rápido para gerar o link temporário enviado por e-mail.',
        badges: ['E-mail', 'Token'],
        rows: ['Você informa o e-mail', 'API gera token temporario', 'Mensagem enviada com sucesso'],
        footer: 'Conta protegida mesmo em caso de erro',
        tone: 'slate',
      },
      {
        eyebrow: 'Redefinição',
        title: 'Página de redefinição com foco em segurança',
        caption: 'Validação do link, exibição da conta e cadastro da nova senha.',
        badges: ['Token', 'Expiração', 'Senha'],
        rows: ['Conta validada', 'Usuário identificado', 'Nova senha confirmada'],
        footer: 'Retorno ao app com acesso restabelecido',
        tone: 'amber',
      },
    ],
    sections: [
      {
        title: 'Solicitar recuperação',
        description: 'Na tela de login do aplicativo, use a opção de esqueci minha senha e informe o e-mail cadastrado.',
        bullets: [
          'Se o e-mail existir, a API gera um token temporário e envia o link de redefinição.',
          'O link tem prazo de validade e pode expirar se a troca demorar demais.',
        ],
        visuals: [
          {
            title: 'Pedido de recuperação',
            caption: 'Entrada simples para recuperar o acesso sem suporte manual.',
            badges: ['E-mail', 'Solicitar'],
            rows: ['Campo único de e-mail', 'Confirmação de envio', 'Orientação ao usuário'],
            footer: 'Link temporário enviado para a caixa de entrada',
            tone: 'slate',
          },
        ],
      },
      {
        title: 'Redefinir a senha na página web',
        description: 'Ao abrir o link, a página valida o acesso, mostra os dados da conta e libera a nova senha.',
        bullets: [
          'Se o link estiver inválido ou expirado, a tela orienta a solicitar um novo e-mail.',
          'Depois da confirmação, volte ao aplicativo e entre com a nova senha.',
        ],
        visuals: [
          {
            title: 'Nova senha',
            caption: 'Página com estados claros de sucesso, erro e expiração.',
            badges: ['Validação', 'Sucesso'],
            rows: ['Conta vinculada exibida', 'Campos de senha e confirmacao', 'Retorno orientado ao aplicativo'],
            footer: 'Fluxo robusto para recuperar acesso',
            tone: 'amber',
          },
        ],
      },
    ],
  },
  {
    slug: 'configuracoes',
    label: 'Configurações',
    eyebrow: 'Preferências do usuário',
    title: 'Ajuste nome, auto-save e acesse informacoes de suporte',
    summary: 'A tela de configurações centraliza preferências operacionais e atalhos importantes para você.',
    highlights: ['Editar nome', 'Salvar automaticamente', 'Ajuda e informações'],
    heroVisuals: [
      {
        eyebrow: 'Preferências',
        title: 'Controle o comportamento do aplicativo',
        caption: 'Nome de exibição, auto-save e acessos auxiliares em um mesmo lugar.',
        badges: ['Nome', 'Auto-save', 'Ajuda'],
        rows: ['Alteração de nome', 'Atalho de salvamento automático', 'Links externos do ecossistema'],
        footer: 'Tela pensada para manutencao da conta',
        tone: 'teal',
      },
      {
        eyebrow: 'Sessão',
        title: 'Encerrar acesso com segurança',
        caption: 'Logout remove a sessão local e devolve ao fluxo de autenticação.',
        badges: ['Logout', 'Token'],
        rows: ['Sessão atual ativa', 'Acao de sair destacada', 'Retorno ao login'],
        footer: 'Proteção em dispositivo compartilhado',
        tone: 'slate',
      },
    ],
    sections: [
      {
        title: 'Personalizar comportamento do app',
        description: 'Você pode editar o nome exibido no menu e decidir se a gravação automática das notas ficará ativa.',
        bullets: [
          'Com o salvamento automático ativo, a NFC-e é gravada assim que a leitura termina.',
          'Com o salvamento automático desativado, a tela de revisão aparece antes do salvamento.',
        ],
        visuals: [
          {
            title: 'Preferências principais',
            caption: 'Configurações de uso diario organizadas em uma tela simples.',
            badges: ['Perfil', 'Fluxo'],
            rows: ['Nome do usuário', 'Ativar ou desativar o salvamento automático', 'Atalhos para ajuda e suporte'],
            footer: 'Controle sem comprometer o fluxo principal',
            tone: 'teal',
          },
        ],
      },
      {
        title: 'Sair da conta com segurança',
        description: 'Ao sair, sua sessão é encerrada e você volta para a tela de acesso.',
        bullets: [
          'Ao sair, o token salvo no dispositivo é removido.',
        ],
        visuals: [
          {
            title: 'Encerramento da sessão',
            caption: 'Acao segura para fechar o acesso no aparelho atual.',
            badges: ['Sair', 'Seguranca'],
            rows: ['Botao de logout', 'Limpeza do token local', 'Retorno ao login'],
            footer: 'Sessão encerrada com segurança',
            tone: 'slate',
          },
        ],
      },
    ],
  },
];

export const faq = [
  {
    question: 'Quais notas o aplicativo consegue ler?',
    answer: 'O aplicativo está preparado para NFC-e de Minas Gerais usando a URL lida do QR Code fiscal.',
  },
  {
    question: 'Por que uma nota pode não salvar mesmo depois da leitura?',
    answer: 'Quando isso acontece, normalmente há instabilidade de rede, lentidão do backend ou indisponibilidade momentânea do serviço de dados. A tela de revisão ajuda a não perder os dados capturados.',
  },
  {
    question: 'Como abrir a documentação técnica da API?',
    answer: 'Na área de suporte desta central você encontra links diretos para o Swagger UI e para o OpenAPI JSON.',
  },
  {
    question: 'O que fazer se o link de redefinição de senha expirar?',
    answer: 'Volte ao aplicativo principal, abra a opção de esqueci minha senha e solicite um novo e-mail de recuperação.',
  },
];

export const supportLinks = {
  apiDocsUrl: process.env.REACT_APP_API_DOCS_URL || 'http://localhost:3000/docs',
  apiDocsJsonUrl: process.env.REACT_APP_API_DOCS_JSON_URL || 'http://localhost:3000/docs.json',
  repositoryUrl: process.env.REACT_APP_HELP_REPOSITORY_URL || 'https://github.com/cunhaluisg5/Scan_NFCe_Help',
  supportEmail: process.env.REACT_APP_SUPPORT_EMAIL || 'luisg.cunha@hotmail.com',
  mobileRepositoryUrl: process.env.REACT_APP_APP_REPOSITORY_URL || 'https://github.com/cunhaluisg5/Scan_NFCe',
  backendRepositoryUrl: process.env.REACT_APP_API_REPOSITORY_URL || 'https://github.com/cunhaluisg5/TCC_Backend',
};


