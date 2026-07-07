import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { brand } from '../content/helpContent';

function HelpLayout({ children }) {
  return (
    <div className='help-app-shell'>
      <header className='help-topbar'>
        <Link to='/' className='brand-lockup'>
          <img src={brand.logo} alt='Logo Scan NFC-e' className='brand-logo' />
          <div>
            <span className='brand-kicker'>Central de ajuda</span>
            <strong>{brand.name}</strong>
          </div>
        </Link>

        <nav className='help-nav'>
          <NavLink exact to='/' activeClassName='is-active'>Inicio</NavLink>
          <NavLink to='/guia/comecar' activeClassName='is-active'>Guias</NavLink>
          <NavLink to='/api' activeClassName='is-active'>API</NavLink>
          <NavLink to='/suporte' activeClassName='is-active'>Suporte</NavLink>
        </nav>
      </header>

      <main className='help-main'>{children}</main>
    </div>
  );
}

export default HelpLayout;
