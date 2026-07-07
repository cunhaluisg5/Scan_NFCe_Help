import React from 'react';
import { supportLinks } from '../../content/helpContent';

function ApiDocsPage() {
  return (
    <div className='page-stack'>
      <section className='section-block docs-hero'>
        <div className='section-heading compact'>
          <span className='eyebrow'>Contrato tecnico</span>
          <h1>Documentacao oficial da API</h1>
          <p>
            Esta area conecta a central de ajuda funcional com a referencia tecnica da API do ecossistema Scan NFC-e.
            Use o Swagger para validar payloads, testar autenticacao e compartilhar contratos com outros projetos.
          </p>
        </div>
        <div className='hero-actions'>
          <a href={supportLinks.apiDocsUrl} target='_blank' rel='noreferrer' className='primary-link'>Abrir Swagger UI</a>
          <a href={supportLinks.apiDocsJsonUrl} target='_blank' rel='noreferrer' className='secondary-link'>Abrir OpenAPI JSON</a>
        </div>
      </section>

      <section className='section-block split-section'>
        <article className='topic-card'>
          <span className='topic-label'>Quando usar</span>
          <h3>Casos mais comuns</h3>
          <ul>
            <li>Validar o contrato de cadastro, login e recuperacao de senha.</li>
            <li>Inspecionar payload e resposta de captura de NFC-e.</li>
            <li>Conferir rotas protegidas por Bearer token.</li>
            <li>Comparar o app mobile e o reset web com o backend atual.</li>
          </ul>
        </article>

        <article className='topic-card'>
          <span className='topic-label'>Boas praticas</span>
          <h3>Como aproveitar melhor a documentacao</h3>
          <ul>
            <li>Abra primeiro o Swagger UI para testar manualmente.</li>
            <li>Use o JSON OpenAPI quando quiser integrar outras ferramentas.</li>
            <li>Mantenha esta URL alinhada ao ambiente real que esta sendo validado.</li>
          </ul>
        </article>
      </section>
    </div>
  );
}

export default ApiDocsPage;
