import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testando o componente Pokemon.js', () => {
  test('Teste se é renderizado um card com as informações de determinado Pokémon', () => {
    renderWithRouter(<App />);

    const pokeName = screen.getByText('Pikachu');
    expect(pokeName).toBeInTheDocument();

    const pokeType = screen.getByTestId('pokemon-type');
    expect(pokeType).toHaveTextContent('Electric');

    const pokeWeight = screen.getByText(/Average weight: 6.0 kg/i);
    expect(pokeWeight).toBeInTheDocument();

    const image = screen.getByAltText('Pikachu sprite');
    expect(image.src).toContain('https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png');
  });

  test('Teste se o card do Pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste Pokémon. O link deve possuir a URL /pokemon/<id>, onde <id> é o id do Pokémon exibido', () => {
    const { history } = renderWithRouter(<App />);

    const detailsLink = screen.getByRole('link', { name: /more details/i });
    expect(detailsLink).toBeInTheDocument();
    userEvent.click(detailsLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/pokemon/25');
  });

  test('Teste se existe um ícone de estrela nos Pokémon favoritados', () => {
    renderWithRouter(<App />);

    const detailsLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailsLink);

    const checkbox = screen.getByRole('checkbox', { name: /pokémon favoritado?/i });
    userEvent.click(checkbox);

    const home = screen.getByRole('link', { name: /home/i });
    userEvent.click(home);

    const favoriteIcon = screen.getByAltText('Pikachu is marked as favorite');
    expect(favoriteIcon.src).toContain('/star-icon.svg');
    expect(favoriteIcon).toBeInTheDocument();
  });
});
