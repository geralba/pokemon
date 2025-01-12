import { render, screen } from '@testing-library/react';

import { ScrollPokemon } from '@/app/ScrollPokemon';

jest.mock('@/components/PokemonCard', () => ({
  PokemonCard: jest.fn(({ pokemon }: { pokemon: { name: string } }) => (
    <div>{pokemon.name}</div>
  )),
}));

describe('ScrollPokemon', () => {
  it('renders a list of PokemonCards', () => {
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

    render(<ScrollPokemon pokemons={mockPokemon} />);

    expect(screen.getByText('charmander')).toBeInTheDocument();
    expect(screen.getByText('charmeleon')).toBeInTheDocument();
  });
});

it('renders no PokemonCards when no pokemons are passed', () => {
  render(<ScrollPokemon pokemons={[]} />);
  const pokemonCards = screen.queryAllByText('Mocked PokemonCard');
  expect(pokemonCards).toHaveLength(0);
});
