import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { Searchbar } from './Searchbar';

describe('Searchbar Component', () => {
  it('renders the heading with the correct text', () => {
    const mockSetSearchText = jest.fn();
    render(<Searchbar searchText='' setSearchText={mockSetSearchText} />);

    const heading = screen.getByText('Find your Pokemon');
    expect(heading).toBeInTheDocument();
  });

  it('renders the Searchbar with the correct placeholder', () => {
    const mockSetSearchText = jest.fn();
    render(<Searchbar searchText='' setSearchText={mockSetSearchText} />);

    const input = screen.getByPlaceholderText('Search by name or ID');
    expect(input).toBeInTheDocument();
  });

  it('displays the input value correctly', () => {
    const mockSetSearchText = jest.fn();
    render(
      <Searchbar searchText='Charmander' setSearchText={mockSetSearchText} />,
    );

    const input = screen.getByDisplayValue('Charmander');
    expect(input).toBeInTheDocument();
  });

  it('calls setSearchText when the user types in the input field', () => {
    const mockSetSearchText = jest.fn();
    render(<Searchbar searchText='' setSearchText={mockSetSearchText} />);

    const input = screen.getByPlaceholderText('Search by name or ID');
    fireEvent.change(input, { target: { value: 'Charmander' } });

    expect(mockSetSearchText).toHaveBeenCalledWith('Charmander');
  });
});
