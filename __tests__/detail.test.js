import { render, screen, waitFor } from '@testing-library/react';
import PokemonDetail from 'pages/pokemon/[name]';
import MyApp from 'pages/_app.js';

const pokemonMock = {
  id: 4,
  name: "charmander",
  abilities: [
    { ability: { name: "blaze" } },
    { ability: { name: "solar-power" } }
  ],
  moves: [
    { move: { name: "mega-punch" } },
    { move: { name: "fire-punch" } }
  ],
  sprites: {
    back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
    back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/4.png",
    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png"
  },
  stats: [
    {
      base_stat: 39,
      stat: { name: "hp" }
    },
    {
      base_stat: 52,
      stat: { name: "attack" }
    },
    {
      base_stat: 43,
      stat: { name: "defense" }
    },
    {
      base_stat: 60,
      stat: { name: "special-attack" }
    },
    {
      base_stat: 50,
      stat: { name: "special-defense" }
    },
    {
      base_stat: 65,
      stat: { name: "speed" }
    }
  ],
  types: [
    { type: { name: "fire" } }
  ]
}

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