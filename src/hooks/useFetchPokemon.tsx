'use client';
import { useEffect, useState } from 'react';

import { fetchPokemons } from '@/api/pokemonApi';
import { PokemonDetails } from '@/interfaces/pokeon';

export const useFetchPokemon = () => {
  const [pokemonData, setPokemonData] = useState<PokemonDetails[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const data = await fetchPokemons();
      setPokemonData(data);
      setLoading(false);
    };

    fetchPokemonData();
  }, []);

  return { pokemonData, loading };
};
