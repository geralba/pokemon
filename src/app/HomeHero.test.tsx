import { fireEvent, render, screen } from '@testing-library/react';
import { useRouter } from 'next/navigation';

import { HomeHero } from '@/app/HomeHero';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('HomeHero', () => {
  it('should render correctly', () => {
    render(<HomeHero />);

    expect(screen.getByText(/World of Pokemon/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Start/i })).toBeInTheDocument();
  });

  it('should navigate to /allPokemons when the button is clicked', () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    render(<HomeHero />);

    const button = screen.getByRole('button', { name: /Start/i });
    fireEvent.click(button);

    expect(mockPush).toHaveBeenCalledWith('/allPokemons');
  });
});
