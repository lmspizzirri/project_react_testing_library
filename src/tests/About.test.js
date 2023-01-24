import { screen, render } from '@testing-library/react';
import About from '../pages/About';

describe('Testando o componente About.js', () => {
  test('Teste se a página contém as informações sobre a Pokédex', () => {
    render(<About />);
    const description = screen.getByText('This application simulates a Pokédex, a digital encyclopedia containing all Pokémon');
    expect(description).toBeInTheDocument();
  });

  test('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    render(<About />);
    const aboutTitle = screen.getByRole('heading', { name: 'About Pokédex' });
    expect(aboutTitle).toBeInTheDocument();
  });

  test('Teste se a página contém dois parágrafos com texto sobre a Pokédex;', () => {
    render(<About />);
    const pokedexTextFirst = screen.getByText('This application simulates a Pokédex, a digital encyclopedia containing all Pokémon');
    const pokedexTextSecond = screen.getByText('One can filter Pokémon by type, and see more details for each one of them');
    expect(pokedexTextFirst).toBeInTheDocument();
    expect(pokedexTextSecond).toBeInTheDocument();
  });

  test('Teste se a página contém a imagem de uma Pokédex', () => {
    render(<About />);
    const image = screen.getByAltText('Pokédex');
    expect(image.src).toContain('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
