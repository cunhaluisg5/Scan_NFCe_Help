import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className='page-stack'>
      <section className='section-block docs-hero'>
        <div className='section-heading compact'>
          <span className='eyebrow'>Página não encontrada</span>
          <h1>Este caminho não existe na central de ajuda</h1>
          <p>Use os atalhos abaixo para voltar para uma área válida da documentação.</p>
        </div>
        <div className='hero-actions'>
          <Link to='/' className='primary-link'>Voltar ao início</Link>
          <Link to='/suporte' className='secondary-link'>Abrir suporte</Link>
        </div>
      </section>
    </div>
  );
}

export default NotFoundPage;


