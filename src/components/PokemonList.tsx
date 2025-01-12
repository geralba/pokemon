'use client';

import React from 'react';

import { useFetchPokemon } from '@/hooks/useFetchPokemon';

import ArrowLink from '@/components/links/ArrowLink';
import { PokemonCard } from '@/components/PokemonCard';

interface PokemonListProps {
  startIndex?: number;
  endIndex?: number;
  showBackLink?: boolean;
}

export const PokemonList: React.FC<PokemonListProps> = ({
  startIndex,
  endIndex,
  showBackLink = false,
}) => {
  const { pokemonData, loading } = useFetchPokemon();

  if (loading) {
    return <p>Loading Pokémon...</p>;
  }

  const displayedPokemons = pokemonData.slice(startIndex, endIndex);

  return (
    <div className='container mx-auto '>
      {showBackLink && (
        <div className='flex mt-4'>
          <ArrowLink
            direction='left'
            className='flex mt-2 text-left'
            href='back'
            data-testid='back-link'
          >
            Back
          </ArrowLink>
        </div>
      )}

      <div className='flex flex-row flex-wrap justify-center my-5 '>
        {displayedPokemons.map((pokemon) => {
          return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
        })}
      </div>
    </div>
  );
};
