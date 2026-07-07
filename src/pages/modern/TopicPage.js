import React from 'react';
import { Link, useParams } from 'react-router-dom';
import FlowPreview from '../../components/FlowPreview';
import { topics } from '../../content/helpContent';

function TopicPage() {
  const { slug } = useParams();
  const topic = topics.find((item) => item.slug === slug) || topics[0];

  return (
    <div className='page-stack'>
      <section className='topic-hero'>
        <div className='topic-hero-copy'>
          <Link to='/' className='breadcrumb-link'>Voltar para a central</Link>
          <span className='eyebrow'>{topic.eyebrow}</span>
          <h1>{topic.title}</h1>
          <p>{topic.summary}</p>
          <div className='chip-row'>
            {topic.highlights.map((highlight) => <span key={highlight} className='chip'>{highlight}</span>)}
          </div>
        </div>
        <div className='topic-hero-gallery'>
          {topic.heroVisuals.map((card) => <FlowPreview key={card.title} card={card} compact />)}
        </div>
      </section>

      <section className='section-block'>
        <div className='section-heading'>
          <span className='eyebrow'>Passo a passo</span>
          <h2>Como executar esse fluxo</h2>
        </div>
        <div className='timeline-list'>
          {topic.sections.map((section, index) => (
            <article key={section.title} className='timeline-card'>
              <div className='timeline-index'>{String(index + 1).padStart(2, '0')}</div>
              <div className='timeline-content'>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
                <ul>
                  {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
                <div className='preview-grid'>
                  {section.visuals.map((card) => <FlowPreview key={card.title} card={card} />)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className='section-block'>
        <div className='section-heading compact'>
          <span className='eyebrow'>Outros guias</span>
          <h2>Continue aprendendo</h2>
        </div>
        <div className='card-grid'>
          {topics.filter((item) => item.slug !== topic.slug).slice(0, 3).map((item) => (
            <Link key={item.slug} to={`/guia/${item.slug}`} className='action-card'>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default TopicPage;
