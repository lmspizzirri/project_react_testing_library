import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import FavoritePokemon from '../pages/FavoritePokemon';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testando o componente FavoritePokémon.js', () => {
  test('Teste se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha Pokémon favoritos', () => {
    render(<FavoritePokemon />);
    const favorite = screen.getByText('No favorite Pokémon found');
    expect(favorite).toBeInTheDocument();
  });

  test('Teste se apenas são exibidos os Pokémon favoritados', () => {
    renderWithRouter(<App />);

    const detailsLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailsLink);

    const checkbox = screen.getByRole('checkbox', { name: /pokémon favoritado?/i });
    userEvent.click(checkbox);

    const favorite = screen.getByRole('link', { name: /favorite pokémon/i });
    userEvent.click(favorite);

    const favoritePokemon = screen.getByText('Pikachu');
    expect(favoritePokemon).toBeInTheDocument();
  });
});
