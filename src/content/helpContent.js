import logo from '../assets/img/logo.png';

export const brand = {
  name: 'Scan NFC-e Help Center',
  logo,
};

export const quickActions = [
  {
    title: 'Ler uma NFC-e pela primeira vez',
    description: 'Abra a camera, valide o QR Code e revise a nota antes do salvamento.',
    to: '/guia/ler-nfce',
  },
  {
    title: 'Entender graficos e comparacao',
    description: 'Veja como acompanhar gastos e comparar produtos entre compras.',
    to: '/guia/analises',
  },
  {
    title: 'Recuperar acesso da conta',
    description: 'Solicite o link, valide o token e redefina a senha com seguranca.',
    to: '/guia/recuperar-senha',
  },
];

export const homeShowcase = [
  {
    eyebrow: 'Fluxo principal',
    title: 'Scanner com revisao da nota',
    caption: 'Leitura, validacao MG e salvamento com revisao ou auto-save.',
    badges: ['QR Code', 'NFC-e MG', 'Itens'],
    rows: ['Mercado Bahamas', '01/07/2026 15:18', '12 itens reconhecidos'],
    footer: 'Total da compra R$ 87,43',
    tone: 'teal',
  },
  {
    eyebrow: 'Analises',
    title: 'Gastos por periodo',
    caption: 'Resumo por mes com comparacao de valores e notas mais relevantes.',
    badges: ['Grafico', 'Historico', 'Comparacao'],
    rows: ['Julho 2026', '3 mercados monitorados', 'Produto mais variavel: leite'],
    footer: 'Maior economia identificada R$ 12,60',
    tone: 'amber',
  },
];

export const topics = [
  {
    slug: 'comecar',
    label: 'Comecar',
    eyebrow: 'Primeiros passos',
    title: 'Cadastre-se e faca login com seguranca',
    summary: 'Entenda como criar a conta, entrar novamente e validar o acesso antes de usar as funcionalidades principais.',
    highlights: ['Cadastro guiado', 'Login rapido', 'Boas praticas de senha'],
    heroVisuals: [
      {
        eyebrow: 'Cadastro',
        title: 'Crie sua conta em poucos campos',
        caption: 'Nome, e-mail e senha com validacao simples e direta.',
        badges: ['Nome', 'E-mail', 'Senha'],
        rows: ['Dados obrigatorios destacados', 'Feedback de erro claro', 'Envio seguro para a API'],
        footer: 'Conta pronta para usar o app',
        tone: 'teal',
      },
      {
        eyebrow: 'Login',
        title: 'Sessao protegida desde a entrada',
        caption: 'Autenticacao com token e retorno seguro ao fluxo principal.',
        badges: ['Token', 'Sessao', 'Protecao'],
        rows: ['Credenciais validadas', 'Persistencia local da sessao', 'Logout controlado'],
        footer: 'Acesso rapido ao painel inicial',
        tone: 'slate',
      },
    ],
    sections: [
      {
        title: 'Criar uma conta nova',
        description: 'Na tela inicial do aplicativo, use a opcao de cadastro para informar nome, e-mail e senha.',
        bullets: [
          'Use um e-mail valido, pois ele sera necessario para recuperar a senha depois.',
          'Escolha uma senha com no minimo 6 caracteres.',
          'Revise os dados antes de enviar para evitar erro de digitacao.',
        ],
        visuals: [
          {
            title: 'Formulario de cadastro',
            caption: 'Estrutura objetiva para concluir o primeiro acesso sem atrito.',
            badges: ['Obrigatorio', 'Validacao'],
            rows: ['Campo nome completo', 'Campo e-mail', 'Senha com confirmacao'],
            footer: 'Botao de cadastro habilitado apos validacao',
            tone: 'teal',
          },
        ],
      },
      {
        title: 'Entrar no aplicativo',
        description: 'Depois do cadastro, faca login com o mesmo e-mail e a senha escolhida.',
        bullets: [
          'Se a senha estiver incorreta, a tela mostrara uma mensagem objetiva para nova tentativa.',
          'Ao entrar com sucesso, sua sessao fica protegida pelo token da API.',
        ],
        visuals: [
          {
            title: 'Tela de autenticacao',
            caption: 'Entrada principal com caminho de suporte para recuperacao de senha.',
            badges: ['Login', 'Recuperacao'],
            rows: ['E-mail preenchido', 'Senha validada', 'Acesso ao menu principal'],
            footer: 'Sessao pronta para leitura e analise',
            tone: 'slate',
          },
        ],
      },
    ],
  },
  {
    slug: 'ler-nfce',
    label: 'Ler NFC-e',
    eyebrow: 'Fluxo principal',
    title: 'Ler, revisar e salvar uma nota fiscal',
    summary: 'O coracao do Scan NFC-e esta aqui: abrir a camera, capturar a URL da NFC-e de MG e transformar isso em uma nota usavel.',
    highlights: ['Leitura por QR Code', 'Validacao MG', 'Salvamento manual ou automatico'],
    heroVisuals: [
      {
        eyebrow: 'Leitura',
        title: 'Scanner pronto para reconhecer o QR Code',
        caption: 'Camera orientada para enquadrar a NFC-e e reduzir tentativas falhas.',
        badges: ['Camera', 'QR Code', 'Permissao'],
        rows: ['Moldura central de leitura', 'Deteccao da URL fiscal', 'Validacao do dominio MG'],
        footer: 'Leitura confirmada em segundos',
        tone: 'teal',
      },
      {
        eyebrow: 'Revisao',
        title: 'Resumo da compra antes de salvar',
        caption: 'Estabelecimento, data, total e itens disponiveis para conferencia.',
        badges: ['Itens', 'Total', 'Auto-save'],
        rows: ['Mercado identificado', 'Data fiscal normalizada', 'Lista inicial de produtos'],
        footer: 'Salvar manualmente ou seguir no automatico',
        tone: 'amber',
      },
    ],
    sections: [
      {
        title: 'Abrir o leitor',
        description: 'Acesse a opcao de leitura pelo menu principal e permita o uso da camera se solicitado.',
        bullets: [
          'Centralize o QR Code dentro da moldura para acelerar o reconhecimento.',
          'Se a nota nao for uma NFC-e de Minas Gerais, a tela vai sinalizar a incompatibilidade.',
        ],
        visuals: [
          {
            title: 'Leitor ativo',
            caption: 'Enquadramento orientado e mensagens de compatibilidade durante a leitura.',
            badges: ['Moldura', 'QRCode'],
            rows: ['Permissao da camera concedida', 'Leitura em andamento', 'Validador de portal fiscal'],
            footer: 'Fluxo principal da aplicacao',
            tone: 'teal',
          },
        ],
      },
      {
        title: 'Revisar a nota lida',
        description: 'Depois da consulta ao portal fiscal, a aplicacao mostra os dados principais e os itens capturados.',
        bullets: [
          'Confira o estabelecimento, data, total e lista de itens antes de gravar.',
          'Se a gravacao automatica estiver ligada, o app salva a nota sem passar pela aprovacao manual.',
        ],
        visuals: [
          {
            title: 'Resumo da NFC-e',
            caption: 'Area pensada para dar seguranca antes do salvamento.',
            badges: ['Total', 'Itens', 'Salvar'],
            rows: ['Estabelecimento da compra', 'Quantidade de itens', 'Valor total da nota'],
            footer: 'Acao de salvar exibida so quando necessario',
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
    highlights: ['Agrupamento por loja', 'Detalhes por nota', 'Exclusao segura'],
    heroVisuals: [
      {
        eyebrow: 'Home',
        title: 'Mercados organizados por historico',
        caption: 'Cards com totais, quantidade de notas e acesso ao detalhamento.',
        badges: ['Mercados', 'Totais', 'Historico'],
        rows: ['Bahamas', 'Carrefour', 'Supermercado local'],
        footer: 'Lista prioriza os registros mais recentes',
        tone: 'slate',
      },
      {
        eyebrow: 'Detalhes',
        title: 'Consulta completa da nota fiscal',
        caption: 'Itens, totais e dados fiscais reunidos em uma unica visualizacao.',
        badges: ['Itens', 'ICMS', 'Excluir'],
        rows: ['Nome do estabelecimento', 'Itens com quantidade', 'Total consolidado'],
        footer: 'Exclusao com retorno ao fluxo principal',
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
            caption: 'Organizacao pensada para consulta rapida das compras.',
            badges: ['Cards', 'Filtro'],
            rows: ['Nome do mercado', 'Total acumulado', 'Quantidade de notas'],
            footer: 'Acesso direto ao detalhamento',
            tone: 'slate',
          },
        ],
      },
      {
        title: 'Consultar detalhes e excluir',
        description: 'Dentro da nota voce encontra os itens, totais, ICMS e pode remover o registro se necessario.',
        bullets: [
          'A exclusao remove a nota e seus itens vinculados.',
          'Depois de excluir, o aplicativo volta ao fluxo principal para refletir a mudanca.',
        ],
        visuals: [
          {
            title: 'Detalhe da nota',
            caption: 'Painel focado na conferencia dos dados e no controle da acao de exclusao.',
            badges: ['Conferencia', 'Excluir'],
            rows: ['Cabecalho da nota', 'Lista de produtos', 'Resumo financeiro'],
            footer: 'Atualizacao imediata da navegacao',
            tone: 'teal',
          },
        ],
      },
    ],
  },
  {
    slug: 'analises',
    label: 'Analises',
    eyebrow: 'Inteligencia de gastos',
    title: 'Leia seus graficos e compare produtos entre compras',
    summary: 'Essas telas ajudam a transformar notas em decisao: comparar preco, visualizar tendencias e identificar picos de gasto.',
    highlights: ['Grafico temporal', 'Comparacao por item', 'Resumo por periodo'],
    heroVisuals: [
      {
        eyebrow: 'Gastos',
        title: 'Evolucao financeira por periodo',
        caption: 'Leitura clara dos meses, picos e comportamento das compras.',
        badges: ['Mes', 'Grafico', 'Resumo'],
        rows: ['Periodo selecionado', 'Maior compra destacada', 'Media de gastos'],
        footer: 'Baseado nas notas salvas no usuario',
        tone: 'amber',
      },
      {
        eyebrow: 'Produtos',
        title: 'Comparacao entre mercados',
        caption: 'Identifique variacao de preco de um mesmo item em compras diferentes.',
        badges: ['Produto', 'Preco', 'Mercado'],
        rows: ['Item filtrado', 'Ocorrencias no periodo', 'Melhor preco encontrado'],
        footer: 'Apoio direto para economizar',
        tone: 'teal',
      },
    ],
    sections: [
      {
        title: 'Analise de gastos',
        description: 'Veja a evolucao das compras por dia, mes ou ano com destaque para as notas de maior impacto.',
        bullets: [
          'Use o seletor de periodo para mudar rapidamente o recorte.',
          'Abra a nota destacada para inspecionar os itens que puxaram o valor para cima.',
        ],
        visuals: [
          {
            title: 'Resumo grafico',
            caption: 'Visao de tendencia com foco nos gastos mais relevantes.',
            badges: ['Grafico', 'Periodo'],
            rows: ['Filtro mensal', 'Pontos de maior gasto', 'Media comparativa'],
            footer: 'Dados sincronizados com as notas reais',
            tone: 'amber',
          },
        ],
      },
      {
        title: 'Comparacao de produtos',
        description: 'Selecione um mes e um item para comparar em quais notas ele apareceu e por quanto foi vendido.',
        bullets: [
          'O app lista o mesmo produto em estabelecimentos diferentes quando houver ocorrencia no periodo.',
          'Use esse recurso para descobrir variacao de preco entre supermercados.',
        ],
        visuals: [
          {
            title: 'Tabela comparativa',
            caption: 'Consulta objetiva do mesmo item em notas diferentes.',
            badges: ['Filtro', 'Preco'],
            rows: ['Nome do produto', 'Mercado onde apareceu', 'Valor unitario encontrado'],
            footer: 'Comparacao pensada para decisao de compra',
            tone: 'teal',
          },
        ],
      },
    ],
  },
  {
    slug: 'recuperar-senha',
    label: 'Recuperar senha',
    eyebrow: 'Acesso e seguranca',
    title: 'Recupere sua conta com o fluxo externo de redefinicao',
    summary: 'O ecossistema usa um app web dedicado para validar o token recebido por e-mail e liberar a nova senha com seguranca.',
    highlights: ['Link por e-mail', 'Validacao de token', 'Nova senha segura'],
    heroVisuals: [
      {
        eyebrow: 'Solicitacao',
        title: 'Pedido de recuperacao pelo app principal',
        caption: 'Fluxo rapido para gerar o link temporario enviado por e-mail.',
        badges: ['E-mail', 'Token'],
        rows: ['Usuario informa e-mail', 'API gera token temporario', 'Mensagem enviada com sucesso'],
        footer: 'Conta protegida mesmo em caso de erro',
        tone: 'slate',
      },
      {
        eyebrow: 'Redefinicao',
        title: 'Tela web focada em seguranca',
        caption: 'Validacao do token, exibicao da conta e cadastro da nova senha.',
        badges: ['Token', 'Expiracao', 'Senha'],
        rows: ['Conta validada', 'Usuario identificado', 'Nova senha confirmada'],
        footer: 'Retorno ao app com acesso restabelecido',
        tone: 'amber',
      },
    ],
    sections: [
      {
        title: 'Solicitar recuperacao',
        description: 'Na tela de login do app principal, use a opcao de esqueci minha senha e informe o e-mail cadastrado.',
        bullets: [
          'Se o e-mail existir, a API gera um token temporario e envia o link de redefinicao.',
          'O token tem prazo de validade e pode expirar se a troca demorar demais.',
        ],
        visuals: [
          {
            title: 'Pedido de reset',
            caption: 'Entrada simples para recuperar o acesso sem suporte manual.',
            badges: ['E-mail', 'Solicitar'],
            rows: ['Campo unico de e-mail', 'Confirmacao de envio', 'Orientacao ao usuario'],
            footer: 'Link temporario enviado para a caixa postal',
            tone: 'slate',
          },
        ],
      },
      {
        title: 'Redefinir no app web',
        description: 'Ao abrir o link, o reset valida o token, mostra os dados da conta e libera a nova senha.',
        bullets: [
          'Se o token estiver invalido ou expirado, a tela orienta a solicitar um novo e-mail.',
          'Depois do sucesso, volte ao app principal e entre com a nova senha.',
        ],
        visuals: [
          {
            title: 'Nova senha',
            caption: 'Tela externa com estados claros de sucesso, erro e expiracao.',
            badges: ['Validacao', 'Sucesso'],
            rows: ['Conta vinculada exibida', 'Campos de senha e confirmacao', 'Retorno orientado ao app'],
            footer: 'Fluxo robusto para recuperar acesso',
            tone: 'amber',
          },
        ],
      },
    ],
  },
  {
    slug: 'configuracoes',
    label: 'Configuracoes',
    eyebrow: 'Preferencias do usuario',
    title: 'Ajuste nome, auto-save e acesse informacoes de suporte',
    summary: 'A tela de configuracoes centraliza preferencias operacionais e atalhos importantes para o usuario.',
    highlights: ['Editar nome', 'Salvar automaticamente', 'Ajuda e sobre'],
    heroVisuals: [
      {
        eyebrow: 'Preferencias',
        title: 'Controle o comportamento do app',
        caption: 'Nome de exibicao, auto-save e acessos auxiliares em um mesmo lugar.',
        badges: ['Nome', 'Auto-save', 'Ajuda'],
        rows: ['Alteracao de nome', 'Chave de salvamento automatico', 'Links externos do ecossistema'],
        footer: 'Tela pensada para manutencao da conta',
        tone: 'teal',
      },
      {
        eyebrow: 'Sessao',
        title: 'Encerrar acesso com seguranca',
        caption: 'Logout remove a sessao local e devolve ao fluxo de autenticacao.',
        badges: ['Logout', 'Token'],
        rows: ['Sessao atual ativa', 'Acao de sair destacada', 'Retorno ao login'],
        footer: 'Protecao em dispositivo compartilhado',
        tone: 'slate',
      },
    ],
    sections: [
      {
        title: 'Personalizar comportamento do app',
        description: 'Voce pode editar o nome exibido no menu e decidir se a gravacao automatica das notas ficara ativa.',
        bullets: [
          'Com auto-save ligado, a NFC-e e gravada assim que a leitura termina.',
          'Com auto-save desligado, a tela de revisao aparece antes do salvamento.',
        ],
        visuals: [
          {
            title: 'Preferencias principais',
            caption: 'Configuracoes de uso diario organizadas em uma tela simples.',
            badges: ['Perfil', 'Fluxo'],
            rows: ['Nome do usuario', 'Ativar ou desativar auto-save', 'Atalhos para ajuda e suporte'],
            footer: 'Controle sem comprometer o fluxo principal',
            tone: 'teal',
          },
        ],
      },
      {
        title: 'Sair da conta com seguranca',
        description: 'O logout encerra a sessao atual e devolve o usuario para a autenticacao.',
        bullets: [
          'Ao sair, o token local e removido do dispositivo.',
        ],
        visuals: [
          {
            title: 'Encerramento de sessao',
            caption: 'Acao segura para fechar o acesso no aparelho atual.',
            badges: ['Sair', 'Seguranca'],
            rows: ['Botao de logout', 'Limpeza do token local', 'Retorno ao login'],
            footer: 'Sessao encerrada com seguranca',
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
    answer: 'O fluxo atual foi consolidado para NFC-e de Minas Gerais usando a URL lida do QR Code fiscal.',
  },
  {
    question: 'Por que uma nota pode nao salvar mesmo depois da leitura?',
    answer: 'Quando isso acontece, normalmente ha instabilidade de rede, lentidao do backend ou indisponibilidade momentanea do Firebase. A tela de revisao ajuda a nao perder os dados capturados.',
  },
  {
    question: 'Como abrir a documentacao tecnica da API?',
    answer: 'Na area de suporte desta central voce encontra links diretos para o Swagger UI e para o OpenAPI JSON.',
  },
  {
    question: 'O que fazer se o link de redefinicao de senha expirar?',
    answer: 'Volte ao app principal, abra a opcao de esqueci minha senha e solicite um novo e-mail de recuperacao.',
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
