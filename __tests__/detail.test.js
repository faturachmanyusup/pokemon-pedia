import { render, screen, waitFor } from '@testing-library/react';
import PokemonDetail from 'pages/pokemon/[name]';
import MyApp from 'pages/_app.js';
import pokemonData from '__mocks__/data/pokemon.data';

const pokemonMock = pokemonData;

describe('Pokemon Detail', () => {
  it('renders a heading', async () => {
    render(
      <MyApp Component={PokemonDetail} pageProps={{ pokemon: pokemonMock }} />
    );

    await waitFor(() => {
      const heading = screen.getByTestId('header');

      expect(heading).toBeInTheDocument();
    })
  })

  it('renders preview image', async () => {
    render(<MyApp Component={PokemonDetail} pageProps={{ pokemon: pokemonMock }} />);

    await waitFor(() => {
      const previewImage = screen.getByTestId('preview-image');

      expect(previewImage).toBeInTheDocument();
    })
  })

  it('renders preview options', async () => {
    render(<MyApp Component={PokemonDetail} pageProps={{ pokemon: pokemonMock }} />);

    await waitFor(() => {
      const previewOptions = screen.getByTestId('preview-options');

      expect(previewOptions).toBeInTheDocument();
    })
  })

  it('renders section: Pokemon', async () => {
    render(<MyApp Component={PokemonDetail} pageProps={{ pokemon: pokemonMock }} />);

    await waitFor(() => {
      const section = screen.getByTestId('pokemon-section');

      expect(section).toBeInTheDocument();
    })
  })

  it('renders section: Base Status', async () => {
    render(<MyApp Component={PokemonDetail} pageProps={{ pokemon: pokemonMock }} />);

    await waitFor(() => {
      const section = screen.getByTestId('base-status-section');

      expect(section).toBeInTheDocument();
    })
  })

  it('renders catch button', async () => {
    render(<MyApp Component={PokemonDetail} pageProps={{ pokemon: pokemonMock }} />);

    await waitFor(() => {
      const button = screen.getByTestId('catch-button');

      expect(button).toBeInTheDocument();
      expect(button.innerHTML).toBe('Catch Me!');
    })
  })
})