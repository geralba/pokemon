import { render, screen } from '@testing-library/react';

import PokemonDetails from '@/app/pokemon/[name]/PokemonDetails';
import { Stat } from '@/interfaces/pokeon';

/* eslint-disable @next/next/no-img-element */
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} />
  ),
}));
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@/components/ui/progress', () => ({
  Progress: ({ value, max }: { value: number; max: number }) => (
    <div className='progress-bar'>
      {value}/{max}
    </div>
  ),
}));

describe('PokemonDetails', () => {
  const mockStats: Stat[] = [
    { stat: { name: 'HP' }, base_stat: 50, effort: 0 },
    { stat: { name: 'Attack' }, base_stat: 70, effort: 0 },
    { stat: { name: 'Defense' }, base_stat: 60, effort: 0 },
  ];

  it('should render the PokemonDetails component correctly', () => {
    render(
      <PokemonDetails
        name='Charmeleon'
        image='/images/charmeleon.png'
        stats={mockStats}
      />,
    );

    expect(screen.getByText('Charmeleon')).toBeInTheDocument();

    const image = screen.getByAltText('Charmeleon');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/images/charmeleon.png');

    expect(screen.getByText('HP: 50')).toBeInTheDocument();
    expect(screen.getByText('Attack: 70')).toBeInTheDocument();
    expect(screen.getByText('Defense: 60')).toBeInTheDocument();

    expect(screen.getByText('50/100')).toBeInTheDocument();
    expect(screen.getByText('70/100')).toBeInTheDocument();
    expect(screen.getByText('60/100')).toBeInTheDocument();

    expect(screen.getByText('Back')).toBeInTheDocument();
  });
});
