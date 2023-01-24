import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testando o componente Pokemon.js', () => {
  test('Teste se as informações detalhadas do Pokémon selecionado são mostradas na tela', () => {
    renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: /more details/i });
    userEvent.click(details);

    const name = screen.getByText(/pikachu details/i);
    expect(name).toBeInTheDocument();

    expect(details).not.toBeInTheDocument();

    const summary = screen.getByRole('heading', { name: /Summary/i });
    expect(summary).toBeInTheDocument();

    const description = screen.getByText('This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat.');
    expect(description).toBeInTheDocument();
  });

  test('Teste se existe na página uma seção com os mapas contendo as localizações do Pokémon', () => {
    renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: /more details/i });
    userEvent.click(details);

    const gameLocation = screen.getByRole('heading', { name: /Game Locations of Pikachu/i });
    expect(gameLocation).toBeInTheDocument();

    const gameLocation1 = screen.getByText(/kanto viridian forest/i);
    const gameLocationImage = screen.getAllByRole('img');
    const gameLocation2 = screen.getByText(/kanto power plant/i);
    expect(gameLocation1 && gameLocation2).toBeInTheDocument();
    expect(gameLocationImage[1]).toHaveAttribute('src', 'https://archives.bulbagarden.net/media/upload/0/08/Kanto_Route_2_Map.png');
    expect(gameLocationImage[1]).toHaveAttribute('alt', 'Pikachu location');
    expect(gameLocationImage[2]).toHaveAttribute('src', 'https://archives.bulbagarden.net/media/upload/b/bd/Kanto_Celadon_City_Map.png');
    expect(gameLocationImage[2]).toHaveAttribute('alt', 'Pikachu location');
  });

  test('Teste se existe na página uma seção com os mapas contendo as localizações do Pokémon', () => {
    renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: /more details/i });
    userEvent.click(details);

    const checkbox = screen.getByRole('checkbox', { name: /pokémon favoritado?/i });
    expect(checkbox).toBeInTheDocument();

    const checkboxlabel = screen.getByLabelText('Pokémon favoritado?');
    expect(checkboxlabel).toBeInTheDocument();

    userEvent.click(checkbox);
    const favorite = screen.getByRole('link', { name: /favorite pokémon/i });
    userEvent.click(favorite);
    const favoritePokemon = screen.getByText('Pikachu');
    expect(favoritePokemon).toBeInTheDocument();
  });
});
