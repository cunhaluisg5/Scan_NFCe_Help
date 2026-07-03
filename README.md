# Scan NFC-e Help

Central de ajuda web do ecossistema Scan NFC-e, usada para orientar o usuario nas principais tarefas do aplicativo.

## Responsabilidade

- apresentar passo a passo das funcionalidades
- servir como camada de apoio ao onboarding
- apontar para documentacao tecnica e operacional

## Variaveis de ambiente

Crie um `.env` a partir de `.env.example`.

- `REACT_APP_HELP_REPOSITORY_URL`: URL publica do repositorio da ajuda
- `REACT_APP_API_DOCS_URL`: URL da documentacao Swagger/OpenAPI do backend

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
- remocao de link hardcoded do repositorio
- documentacao inicial do projeto
