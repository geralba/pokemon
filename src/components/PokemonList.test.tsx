import { render, screen } from '@testing-library/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PokemonList } from './PokemonList';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@/hooks/useFetchPokemon', () => ({
  useFetchPokemon: jest.fn(),
}));

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('PokemonList', () => {
  // Explicitly cast useSelector as jest.Mock
  (useSelector as unknown as jest.Mock).mockReturnValue([]);
  (useDispatch as unknown as jest.Mock).mockReturnValue([]);
});

it('displays loading message when data is loading', () => {
  render(
    <PokemonList
      startIndex={0}
      endIndex={10}
      pokemonData={[]}
      loading={true}
    />,
  );

  expect(screen.getByText(/Loading Pokémon.../i)).toBeInTheDocument();
});

it('displays Pokémon cards when data is loaded', async () => {
  const pokemonData = [
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
  ];

  render(
    <PokemonList
      startIndex={0}
      endIndex={2}
      pokemonData={pokemonData}
      loading={false}
    />,
  );
  expect(screen.getByText(/charmander/i)).toBeInTheDocument();
});
