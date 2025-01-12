import { fireEvent, render, screen } from '@testing-library/react';
import { useRouter } from 'next/navigation';

import { PokemonCard } from '@/components/PokemonCard';

import { PokemonDetails } from '@/interfaces/pokeon';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('PokemonCard', () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    mockPush.mockReset();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
  });

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
    id: 4,
  };

  it('renders the Pokemon name and image', () => {
    render(<PokemonCard pokemon={mockPokemon} />);

    expect(screen.getByText('Charmander')).toBeInTheDocument();
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

  it('navigates to the Pokémon details page when clicked', () => {
    render(<PokemonCard pokemon={mockPokemon} />);

    fireEvent.click(screen.getByRole('button'));

    expect(mockPush).toHaveBeenCalledWith('/pokemon/charmander');
  });

  it('displays the Pokémon types', () => {
    render(<PokemonCard pokemon={mockPokemon} />);

    expect(screen.getByText(/fire/i)).toBeInTheDocument();
  });
});
