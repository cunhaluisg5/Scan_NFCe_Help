import React from 'react';
import { Link } from 'react-router-dom';
import FlowPreview from '../../components/FlowPreview';
import { faq, homeShowcase, quickActions, supportLinks, topics } from '../../content/helpContent';

function HomePage() {
  return (
    <div className='page-stack'>
      <section className='hero-panel'>
        <div className='hero-copy'>
          <span className='eyebrow'>Central de ajuda</span>
          <h1>Use o Scan NFC-e com mais clareza e segurança</h1>
          <p>
            Encontre orientações para cadastro, leitura de NFC-e, análise de gastos, comparação de produtos e recuperação de senha.
          </p>
          <div className='hero-actions'>
            <Link to='/guia/ler-nfce' className='primary-link'>Começar pela leitura da nota</Link>
            <Link to='/suporte' className='secondary-link'>Abrir suporte e FAQ</Link>
          </div>
        </div>
        <div className='hero-showcase'>
          {homeShowcase.map((card) => <FlowPreview key={card.title} card={card} compact />)}
        </div>
      </section>

      <section className='section-block metrics-strip'>
        <div className='metric-card metric-card--light'>
          <strong>{topics.length}</strong>
          <span>Guias por tarefa</span>
        </div>
        <div className='metric-card metric-card--light'>
          <strong>Swagger</strong>
          <span>Documentação técnica integrada</span>
        </div>
        <div className='metric-card metric-card--light'>
          <strong>FAQ</strong>
          <span>Suporte e boas praticas</span>
        </div>
      </section>

      <section className='section-block'>
        <div className='section-heading'>
          <span className='eyebrow'>Atalhos inteligentes</span>
          <h2>Comece pelo que precisa resolver agora</h2>
        </div>
        <div className='card-grid'>
          {quickActions.map((item) => (
            <Link key={item.to} to={item.to} className='action-card'>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className='section-block'>
        <div className='section-heading'>
          <span className='eyebrow'>Guias disponíveis</span>
          <h2>Navegue por cada fluxo do produto</h2>
        </div>
        <div className='topic-list'>
          {topics.map((topic) => (
            <article key={topic.slug} className='topic-card'>
              <div>
                <span className='topic-label'>{topic.label}</span>
                <h3>{topic.title}</h3>
                <p>{topic.summary}</p>
              </div>
              <ul>
                {topic.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
              <Link to={`/guia/${topic.slug}`} className='inline-link-button'>Abrir guia</Link>
            </article>
          ))}
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
          <span className='eyebrow'>Integrações</span>
          <h2>Documentação e suporte técnico</h2>
          <p>Use estes atalhos para aprofundar a consulta técnica ou compartilhar referencias com quem esta implementando o ecossistema.</p>
          <a href={supportLinks.apiDocsUrl} target='_blank' rel='noreferrer' className='primary-link'>Abrir Swagger UI</a>
          <a href={supportLinks.apiDocsJsonUrl} target='_blank' rel='noreferrer' className='secondary-link'>Abrir OpenAPI JSON</a>
          <a href={`mailto:${supportLinks.supportEmail}`} className='ghost-link'>Enviar e-mail de suporte</a>
        </aside>
      </section>
    </div>
  );
}

export default HomePage;


