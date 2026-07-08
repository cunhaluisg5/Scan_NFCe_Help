import React from 'react';

const apiDocsUrl = process.env.REACT_APP_API_DOCS_URL || 'http://localhost:3000/docs';
const openApiJsonUrl = process.env.REACT_APP_API_DOCS_JSON_URL || 'http://localhost:3000/docs.json';

function ApiDocs() {
  return (
    <div style={{ color: '#FFF', padding: '2rem 3rem' }}>
      <h1 style={{ marginBottom: '1rem' }}>Documentacao da API</h1>
      <p style={{ lineHeight: '1.6', maxWidth: '900px' }}>
        Esta seção centraliza a documentação oficial do backend do ecossistema Scan NFC-e.
        Use o Swagger para testar rotas, entender payloads, visualizar respostas esperadas
        e validar os endpoints que integram o aplicativo mobile e o fluxo de recuperação de senha.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', margin: '1.5rem 0' }}>
        <a href={apiDocsUrl} target="_blank" rel="noopener noreferrer" style={buttonStyle}>
          Abrir Swagger UI
        </a>
        <a href={openApiJsonUrl} target="_blank" rel="noopener noreferrer" style={secondaryButtonStyle}>
          Abrir OpenAPI JSON
        </a>
      </div>
      <div style={cardStyle}>
        <h2 style={{ marginTop: 0 }}>Quando usar esta documentação</h2>
        <ul style={{ lineHeight: '1.8' }}>
          <li>validar o contrato de autenticação e recuperação de senha</li>
          <li>testar rotas protegidas com token Bearer</li>
          <li>conferir payload de cadastro e de NFC-e</li>
          <li>inspecionar respostas esperadas para integrações futuras</li>
        </ul>
      </div>
    </div>
  );
}

const buttonStyle = {
  display: 'inline-block',
  padding: '0.9rem 1.2rem',
  backgroundColor: '#ff870f',
  color: '#111',
  textDecoration: 'none',
  borderRadius: '10px',
  fontWeight: 700
};

const secondaryButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#fff',
  color: '#111'
};

const cardStyle = {
  backgroundColor: 'rgba(255,255,255,0.08)',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: '16px',
  padding: '1.5rem',
  maxWidth: '900px'
};

export default ApiDocs;

