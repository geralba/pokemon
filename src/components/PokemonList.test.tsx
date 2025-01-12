import { render, screen } from '@testing-library/react';
import React from 'react';

import { useFetchPokemon } from '@/hooks/useFetchPokemon';

import { PokemonList } from './PokemonList';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@/hooks/useFetchPokemon', () => ({
  useFetchPokemon: jest.fn(),
}));

describe('PokemonList', () => {
  it('displays loading message when data is loading', () => {
    (useFetchPokemon as jest.Mock).mockReturnValue({
      pokemonData: [],
      loading: true,
    });

    render(<PokemonList startIndex={0} endIndex={10} showBackLink={false} />);

    expect(screen.getByText(/Loading Pokémon.../i)).toBeInTheDocument();
  });

  it('displays Pokémon cards when data is loaded', async () => {
    (useFetchPokemon as jest.Mock).mockReturnValue({
      pokemonData: [
        {
          name: 'charmander',
          sprites: {
            other: {
              'official-artwork': {
                front_default:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
              },
            },
          },
          types: [
            {
              type: { name: 'fire', url: 'https://pokeapi.co/api/v2/type/10/' },
            },
          ],
          stats: [],
          url: 'https://pokeapi.co/api/v2/pokemon/4/',
          id: 4,
        },
      ],
      loading: false,
    });

    render(<PokemonList startIndex={0} endIndex={2} showBackLink={false} />);
    expect(screen.getByText(/charmander/i)).toBeInTheDocument();
  });

  it('does not display back link when showBackLink is false', () => {
    (useFetchPokemon as jest.Mock).mockReturnValue({
      pokemonData: [
        {
          name: 'charmander',
          sprites: {
            other: {
              'official-artwork': {
                front_default:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
              },
            },
          },
          types: [
            {
              type: { name: 'fire', url: 'https://pokeapi.co/api/v2/type/10/' },
            },
          ],
          stats: [],
          url: 'https://pokeapi.co/api/v2/pokemon/4/',
          id: 4,
        },
      ],
      loading: true,
    });

    render(<PokemonList startIndex={0} endIndex={10} showBackLink={false} />);

    const backLink = screen.queryByText(/Back/i);
    expect(backLink).not.toBeInTheDocument();
  });
});
