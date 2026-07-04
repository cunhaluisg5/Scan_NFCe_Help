# Scan NFC-e Help

Central de ajuda web do ecossistema Scan NFC-e, usada para orientar o usuario nas principais tarefas do aplicativo.

## Responsabilidade

- apresentar passo a passo das funcionalidades
- servir como camada de apoio ao onboarding
- apontar para documentacao tecnica e operacional
- concentrar o acesso oficial a documentacao da API

## Variaveis de ambiente

Crie um `.env` a partir de `.env.example`.

- `REACT_APP_HELP_REPOSITORY_URL`: URL publica do repositorio da ajuda
- `REACT_APP_API_DOCS_URL`: URL do Swagger UI do backend
- `REACT_APP_API_DOCS_JSON_URL`: URL do OpenAPI JSON do backend

## Scripts

```bash
npm install
npm start
npm run build
npm test
```

## Estado atual da modernizacao

Esta fase entrega:

- configuracao basica por ambiente
- remocao de links hardcoded principais
- documentacao inicial do projeto
- pagina dedicada para a documentacao oficial da API
