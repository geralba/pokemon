import { render, screen } from '@testing-library/react';

import { useFetchPokemon } from '@/hooks/useFetchPokemon';

import HomeContent from '@/app/HomeContent';

jest.mock('@/hooks/useFetchPokemon', () => ({
  useFetchPokemon: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@/components/ScrollPokemon', () => ({
  ScrollPokemon: ({ pokemons }: { pokemons: Array<{ name: string }> }) => (
    <div>
      {pokemons.map((pokemon, index) => (
        <p key={index}>{pokemon.name}</p>
      ))}
    </div>
  ),
}));

describe('HomeContent', () => {
  it('should render the components correctly', async () => {
    const mockPokemon = [
      {
        name: 'charmander',
        sprites: {
          other: {
            'official-artwork': {
              front_default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
            },
          },
        },
        types: [
          { type: { name: 'fire', url: 'https://pokeapi.co/api/v2/type/10/' } },
        ],
        stats: [],
        url: 'https://pokeapi.co/api/v2/pokemon/3/',
        id: 3,
      },
      {
        name: 'charmeleon',
        sprites: {
          other: {
            'official-artwork': {
              front_default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
            },
          },
        },
        types: [
          { type: { name: 'fire', url: 'https://pokeapi.co/api/v2/type/11/' } },
        ],
        stats: [],
        url: 'https://pokeapi.co/api/v2/pokemon/4/',
        id: 4,
      },
    ];

    (useFetchPokemon as jest.Mock).mockReturnValue({
      pokemonData: mockPokemon,
    });

    render(<HomeContent />);

    expect(screen.getByText(/World of Pokemon/i)).toBeInTheDocument();

    expect(screen.getByText('charmeleon')).toBeInTheDocument();
    expect(
      screen.getByText(/Have you decided on a pokemon yet\?/i),
    ).toBeInTheDocument();

    expect(screen.getByAltText('PokemonGo')).toBeInTheDocument();
  });

  it('should handle the case when no pokemon data is fetched', async () => {
    (useFetchPokemon as jest.Mock).mockReturnValue({
      pokemonData: [],
    });
    render(<HomeContent />);

    expect(
      screen.getByText(/Have you decided on a pokemon yet\?/i),
    ).toBeInTheDocument();
  });
});
