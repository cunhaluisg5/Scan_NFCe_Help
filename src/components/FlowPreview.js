import React from 'react';

function FlowPreview({ card, compact = false }) {
  return (
    <article className={`flow-preview flow-preview--${card.tone || 'teal'}${compact ? ' is-compact' : ''}`}>
      <div className='flow-preview__top'>
        <span className='flow-preview__eyebrow'>{card.eyebrow}</span>
        <span className='flow-preview__status'>Fluxo atual</span>
      </div>
      <h3>{card.title}</h3>
      <p>{card.caption}</p>
      <div className='flow-preview__badges'>
        {card.badges.map((badge) => <span key={badge}>{badge}</span>)}
      </div>
      <div className='flow-preview__rows'>
        {card.rows.map((row) => (
          <div key={row} className='flow-preview__row'>
            <span className='flow-preview__dot' />
            <span>{row}</span>
          </div>
        ))}
      </div>
      <div className='flow-preview__footer'>{card.footer}</div>
    </article>
  );
}

export default FlowPreview;
