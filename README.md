# Scan NFC-e Help

Central de ajuda web do ecossistema Scan NFC-e. Este projeto reúne orientações por tarefa, FAQ, links técnicos e acesso à documentação oficial da API.

## Visão geral

A central de ajuda foi pensada para apoiar quem usa e quem mantém o ecossistema:

- `Scan_NFCe`: fluxo principal do aplicativo mobile
- `Scan_NFCe_Reset`: fluxo de redefinição de senha
- `TCC_Backend`: documentação Swagger e contratos públicos da API

## Responsabilidades

- orientar o usuário nas tarefas principais do aplicativo
- organizar conteúdos por fluxo, sem depender de conhecimento técnico prévio
- concentrar FAQ, suporte e referências oficiais
- apontar para a documentação Swagger do backend

## Stack

- React
- React Router DOM
- React Scripts
- React Icons
- Testing Library

## Variáveis de ambiente

Crie um arquivo `.env` a partir de `.env.example`.

- `REACT_APP_HELP_REPOSITORY_URL`: URL pública deste repositório
- `REACT_APP_API_DOCS_URL`: URL do Swagger UI
- `REACT_APP_API_DOCS_JSON_URL`: URL do OpenAPI JSON
- `REACT_APP_SUPPORT_EMAIL`: e-mail de suporte
- `REACT_APP_APP_REPOSITORY_URL`: URL do repositório do app mobile
- `REACT_APP_API_REPOSITORY_URL`: URL do repositório do backend

## Pré-requisitos

- Node.js compatível com o projeto
- npm

## Como executar localmente

```bash
npm install
npm start
```

Scripts úteis:

```bash
npm start
npm run build
npm test
npm run lint
```

## Docker

A central de ajuda já pode ser servida em container como site estático, o que facilita homologação e publicação em qualquer host compatível com Docker.

### Build manual da imagem

```bash
docker build \
  --build-arg REACT_APP_API_DOCS_URL=http://localhost:3000/docs \
  --build-arg REACT_APP_API_DOCS_JSON_URL=http://localhost:3000/docs.json \
  --build-arg REACT_APP_SUPPORT_EMAIL=suporte@scan-nfce.local \
  -t scan-nfce-help .
```

```bash
docker run --rm -p 3001:80 scan-nfce-help
```

### Subida com Docker Compose

```bash
docker compose up --build
```

A central ficará disponível em `http://localhost:3001`.

## Estrutura do conteúdo

- página inicial com atalhos para tarefas frequentes
- guias por fluxo: cadastro, leitura, notas, análises, recuperação de senha e configurações
- FAQ e canais de suporte
- página dedicada para documentação da API

## Testes e CI

- testes de navegação e renderização com Testing Library
- build validado em GitHub Actions
- links de documentação centralizados por variável de ambiente

## Troubleshooting

- links do Swagger quebrados: revise `REACT_APP_API_DOCS_URL` e `REACT_APP_API_DOCS_JSON_URL`
- conteúdo incoerente com o app: alinhe este repositório com o estado atual do mobile e do backend
- rota não encontrada: use a navegação principal ou a página de suporte para retomar o fluxo
- links públicos incorretos no container: gere uma nova imagem quando variáveis `REACT_APP_*` forem alteradas

## Publicação e operação

- mantenha os links públicos atualizados por ambiente
- revise o texto sempre a partir da interface real em produção
- evite referências internas ao processo de modernização nas mensagens visíveis ao usuário
- publique a imagem em qualquer host compatível com Docker, Nginx ou serviço de container estático

## Capturas de tela

Os prints antigos foram removidos para evitar documentação desatualizada. Quando necessário, adicione apenas capturas geradas pela versão atual da ajuda e do aplicativo.

## Roadmap

- adicionar capturas atuais do aplicativo principal
- ampliar o conteúdo de FAQ conforme os testes reais de uso
- evoluir a central de ajuda como referência oficial de onboarding