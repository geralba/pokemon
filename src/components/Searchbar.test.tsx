import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { Searchbar } from './Searchbar';

describe('Searchbar Component', () => {
  it('renders the Searchbar with the correct placeholder', () => {
    const mockSetSearchText = jest.fn();
    render(<Searchbar searchText='' setSearchText={mockSetSearchText} />);

    // Check for the placeholder
    const input = screen.getByPlaceholderText('Search by name or ID');
    expect(input).toBeInTheDocument();
  });

  it('displays the input value correctly', () => {
    const mockSetSearchText = jest.fn();
    render(
      <Searchbar searchText='Pikachu' setSearchText={mockSetSearchText} />,
    );

    // Check if the input value is displayed correctly
    const input = screen.getByDisplayValue('Pikachu');
    expect(input).toBeInTheDocument();
  });

  it('calls setSearchText when the user types in the input field', () => {
    const mockSetSearchText = jest.fn();
    render(<Searchbar searchText='' setSearchText={mockSetSearchText} />);

    // Simulate typing into the input
    const input = screen.getByPlaceholderText('Search by name or ID');
    fireEvent.change(input, { target: { value: 'Bulbasaur' } });

    // Check if setSearchText is called with the new value
    expect(mockSetSearchText).toHaveBeenCalledWith('Bulbasaur');
  });

  it('renders the heading with the correct text', () => {
    const mockSetSearchText = jest.fn();
    render(<Searchbar searchText='' setSearchText={mockSetSearchText} />);

    // Check if the heading is rendered with the correct text
    const heading = screen.getByText('Find your Pokemon');
    expect(heading).toBeInTheDocument();
  });
});
