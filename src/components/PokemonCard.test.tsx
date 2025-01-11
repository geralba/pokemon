import { fireEvent, render, screen } from '@testing-library/react';

import { PokemonCard } from '@/components/PokemonCard';

import { PokemonDetails } from '@/interfaces/pokeon';

describe('PokemonCard', () => {
  const mockPokemon: PokemonDetails = {
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
      { type: { name: 'fire', url: 'https://pokeapi.co/api/v2/type/10/' } },
    ],
    stats: [],
    url: 'https://pokeapi.co/api/v2/pokemon/4/',
  };

  it('renders the Pokemon name and image', () => {
    render(<PokemonCard pokemon={mockPokemon} />);

    expect(screen.getByText('charmander')).toBeInTheDocument();
    const imgElement = screen.getByAltText('charmander');
    const expectedUrl = encodeURIComponent(
      mockPokemon.sprites.other['official-artwork'].front_default,
    );

    expect(imgElement).toHaveAttribute(
      'src',
      expect.stringContaining(expectedUrl),
    );

    expect(screen.getByText('fire')).toBeInTheDocument();
  });

  it('handles click events', () => {
    render(<PokemonCard pokemon={mockPokemon} />);
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(consoleSpy).toHaveBeenCalledWith('It is clicked');

    consoleSpy.mockRestore();
  });
});
