import React from 'react';
import { faq, supportLinks, topics } from '../../content/helpContent';

function SupportPage() {
  return (
    <div className='page-stack'>
      <section className='section-block docs-hero'>
        <div className='section-heading compact'>
          <span className='eyebrow'>Suporte e orientacao</span>
          <h1>FAQ, repositorios e atalhos de suporte</h1>
          <p>
            Reunimos aqui as perguntas que mais destravam usuarios e mantenedores, com links diretos para a documentacao da API e para os repositorios do ecossistema.
          </p>
        </div>
      </section>

      <section className='section-block split-section'>
        <div>
          <div className='section-heading compact'>
            <span className='eyebrow'>FAQ</span>
            <h2>Perguntas frequentes</h2>
          </div>
          <div className='faq-list'>
            {faq.map((item) => (
              <article key={item.question} className='faq-card'>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className='support-panel'>
          <span className='eyebrow'>Canais</span>
          <h2>Referencias rapidas</h2>
          <a href={supportLinks.apiDocsUrl} target='_blank' rel='noreferrer' className='primary-link'>Swagger UI</a>
          <a href={supportLinks.apiDocsJsonUrl} target='_blank' rel='noreferrer' className='secondary-link'>OpenAPI JSON</a>
          <a href={supportLinks.mobileRepositoryUrl} target='_blank' rel='noreferrer' className='ghost-link'>Repositorio do app mobile</a>
          <a href={supportLinks.backendRepositoryUrl} target='_blank' rel='noreferrer' className='ghost-link'>Repositorio da API</a>
          <a href={supportLinks.repositoryUrl} target='_blank' rel='noreferrer' className='ghost-link'>Repositorio da central de ajuda</a>
          <a href={`mailto:${supportLinks.supportEmail}`} className='ghost-link'>Falar com suporte</a>
        </aside>
      </section>

      <section className='section-block'>
        <div className='section-heading compact'>
          <span className='eyebrow'>Mapa de conteudo</span>
          <h2>Guias disponiveis</h2>
        </div>
        <div className='card-grid'>
          {topics.map((topic) => (
            <div key={topic.slug} className='topic-card'>
              <span className='topic-label'>{topic.label}</span>
              <h3>{topic.title}</h3>
              <p>{topic.summary}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default SupportPage;
