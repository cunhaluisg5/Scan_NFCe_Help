import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import App from './App';

describe('Scan_NFCe_Help', () => {
  beforeEach(() => {
    window.history.pushState({}, 'Help', '/');
  });

  it('renderiza a home com os atalhos principais', () => {
    render(<App />);

    expect(screen.getByText('Use o Scan NFC-e com mais clareza e segurança')).toBeInTheDocument();
    expect(screen.getByText('Começar pela leitura da nota')).toBeInTheDocument();
    expect(screen.getByText('Abrir suporte e FAQ')).toBeInTheDocument();
  });

  it('redireciona /guia para o guia inicial e mostra o conteúdo', async () => {
    window.history.pushState({}, 'Help Guia', '/guia');

    render(<App />);

    expect(await screen.findByText('Cadastre-se e entre com segurança')).toBeInTheDocument();
    expect(screen.getByText('Como executar esse fluxo')).toBeInTheDocument();
  });

  it('abre a rota de suporte com links técnicos e FAQ', async () => {
    window.history.pushState({}, 'Help Suporte', '/suporte');

    render(<App />);

    expect(await screen.findByText('FAQ, repositórios e atalhos de suporte')).toBeInTheDocument();
    expect(screen.getByText('Swagger UI')).toBeInTheDocument();
    expect(screen.getByText('Repositório da API')).toBeInTheDocument();
  });

  it('exibe fallback para rota desconhecida e permite voltar ao início', async () => {
    window.history.pushState({}, 'Help 404', '/nao-existe');

    render(<App />);

    expect(await screen.findByText('Este caminho não existe na central de ajuda')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Voltar ao início'));

    expect(await screen.findByText('Use o Scan NFC-e com mais clareza e segurança')).toBeInTheDocument();
  });
});
