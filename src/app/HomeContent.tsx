'use client';
import Image from 'next/image';

import '../styles/globals.css';

import { useFetchPokemon } from '@/hooks/useFetchPokemon';

import { PokemonList } from '@/components/PokemonList';

import { HomeHero } from '@/app/HomeHero';
import { ScrollPokemon } from '@/app/ScrollPokemon';

export default function HomeContent() {
  const { pokemonData, loading } = useFetchPokemon();
  return (
    <>
      <HomeHero />

      <ScrollPokemon pokemons={pokemonData.slice(1, 9)} />

      <div className='text-center text-lg font-medium my-5'>
        <h2>Have you decided on a pokemon yet?</h2>
        <h2>
          You’re in the right place. Get your{' '}
          <span className='text-red-800'> Pokemon.</span>
        </h2>
      </div>

      <PokemonList
        startIndex={8}
        endIndex={15}
        pokemonData={pokemonData}
        loading={loading}
      />

      <div className='flex justify-center my-3'>
        <Image
          src='/images/Logo-Pokemon.png'
          alt='PokemonGo'
          width={400}
          height={400}
        />
      </div>
    </>
  );
}
