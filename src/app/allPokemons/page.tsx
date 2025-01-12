'use client';
import React, { useEffect, useState } from 'react';

import { useFetchPokemon } from '@/hooks/useFetchPokemon';

import ArrowLink from '@/components/links/ArrowLink';
import { PokemonList } from '@/components/PokemonList';
import { Searchbar } from '@/components/Searchbar';

import { PokemonDetails } from '@/interfaces/pokeon';

export default function AllPokemonsPage() {
  const { pokemonData, loading } = useFetchPokemon();
  const [searchText, setSearchText] = useState('');
  const [filteredPokemon, setFilteredPokemon] =
    useState<PokemonDetails[]>(pokemonData);

  useEffect(() => {
    setFilteredPokemon(
      pokemonData.filter((pokemon) => {
        const searchLower = searchText.toLocaleLowerCase();
        const isMatchingName = pokemon.name
          .toLocaleLowerCase()
          .includes(searchLower);
        const isMatchingId = pokemon.id.toString() === searchText.trim();

        return isMatchingName || isMatchingId;
      }),
    );
  }, [searchText, pokemonData]);

  return (
    <div>
      <Searchbar searchText={searchText} setSearchText={setSearchText} />
      <div className='container mx-auto  flex mt-4'>
        <ArrowLink
          direction='left'
          className='flex mt-2 text-left'
          href='back'
          data-testid='back-link'
        >
          Back
        </ArrowLink>
      </div>
      {filteredPokemon.length === 0 ? (
        <p className='text-center text-burgundy mt-8'>No results found</p>
      ) : (
        <PokemonList
          startIndex={0}
          endIndex={20}
          pokemonData={filteredPokemon}
          loading={loading}
        />
      )}
    </div>
  );
}
