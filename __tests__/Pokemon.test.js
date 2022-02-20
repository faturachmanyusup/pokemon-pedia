import { render, screen, waitFor } from '@testing-library/react';
import Pokemon from 'pages/pokemon';
import MyApp from 'pages/_app.js';

describe('Pokemon', () => {
  it('renders a heading', async () => {
    render(<MyApp Component={Pokemon} />);

    await waitFor(() => {
      const heading = screen.getByTestId('header');

      expect(heading).toBeInTheDocument();
    })
  })

  it('renders pokemon page', async () => {
    render(<MyApp Component={Pokemon} />);

    await waitFor(() => {
      const pokemonCard = screen.getByTestId('pokemon');

      expect(pokemonCard).toBeInTheDocument();
    })
  })

  it('query limit is works well', async () => {
    render(<MyApp Component={Pokemon} />);

    await waitFor(() => {
      const cards = screen.getAllByTestId('pokemon-card');

      expect(cards.length).toBeLessThanOrEqual(30);
    })
  })
})