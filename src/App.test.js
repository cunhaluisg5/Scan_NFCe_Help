import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import App from './App';

describe('Scan_NFCe_Help', () => {
  beforeEach(() => {
    window.history.pushState({}, 'Help', '/');
  });

  it('renderiza a home com os atalhos principais', () => {
    render(<App />);

    expect(screen.getByText('Aprenda o Scan NFC-e do jeito que um usuario real precisa')).toBeInTheDocument();
    expect(screen.getByText('Comecar pela leitura da nota')).toBeInTheDocument();
    expect(screen.getByText('Abrir suporte e FAQ')).toBeInTheDocument();
  });

  it('redireciona /guia para o guia inicial e mostra o conteudo', async () => {
    window.history.pushState({}, 'Help Guia', '/guia');

    render(<App />);

    expect(await screen.findByText('Cadastre-se e faca login com seguranca')).toBeInTheDocument();
    expect(screen.getByText('Como executar esse fluxo')).toBeInTheDocument();
  });

  it('abre a rota de suporte com links tecnicos e FAQ', async () => {
    window.history.pushState({}, 'Help Suporte', '/suporte');

    render(<App />);

    expect(await screen.findByText('FAQ, repositorios e atalhos de suporte')).toBeInTheDocument();
    expect(screen.getByText('Swagger UI')).toBeInTheDocument();
    expect(screen.getByText('Repositorio da API')).toBeInTheDocument();
  });

  it('exibe fallback para rota desconhecida e permite voltar ao inicio', async () => {
    window.history.pushState({}, 'Help 404', '/nao-existe');

    render(<App />);

    expect(await screen.findByText('Este caminho nao existe na central de ajuda')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Voltar ao inicio'));

    expect(await screen.findByText('Aprenda o Scan NFC-e do jeito que um usuario real precisa')).toBeInTheDocument();
  });
});
