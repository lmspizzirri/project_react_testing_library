import { screen, render } from '@testing-library/react';
import NotFound from '../pages/NotFound';

describe('Testando o componente NotFound.js', () => {
  test('Teste se a página contém um heading h2 com o texto Page requested not found', () => {
    render(<NotFound />);
    const request = screen.getByRole('heading', { name: /Page requested not found/i });
    expect(request).toBeInTheDocument();
  });
  test('Teste se a página contém um heading h2 com o texto Page requested not found', () => {
    render(<NotFound />);
    const image = screen.getByAltText('Pikachu crying because the page requested was not found');
    expect(image.src).toContain('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
