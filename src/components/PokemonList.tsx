'use client';

import React from 'react';

import { PokemonCard } from '@/components/PokemonCard';

import { PokemonDetails } from '@/interfaces/pokeon';

interface PokemonListProps {
  startIndex?: number;
  endIndex?: number;
  pokemonData: PokemonDetails[];
  loading: boolean;
}

export const PokemonList: React.FC<PokemonListProps> = ({
  startIndex,
  endIndex,
  pokemonData,
  loading,
}) => {
  if (loading) {
    return <p>Loading Pokémon...</p>;
  }

  const displayedPokemons = pokemonData?.slice(startIndex, endIndex) || [];

  return (
    <div className='container mx-auto '>
      <div className='flex flex-row flex-wrap justify-center my-5 '>
        {displayedPokemons.map((pokemon) => {
          return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
        })}
      </div>
    </div>
  );
};
