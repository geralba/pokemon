'use client';
import { Pokemon, PokemonResponse } from '@/interfaces/pokeon';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';
export const fetchPokemons = async () => {
  try {
    const response = await fetch(baseUrl);
    if (!response.ok) {
      throw new Error('Oh no! The Poké Ball failed. Try again!');
    }
    const data: PokemonResponse = await response.json();

    const pokemonDetailsPromises = data.results.map(
      async (pokemon: Pokemon) => {
        const pokemonResponse = await fetch(pokemon.url);
        if (!pokemonResponse.ok) {
          throw new Error(`Failed to fetch details for ${pokemon.name}`);
        }
        const pokemonDetails = await pokemonResponse.json();

        return {
          name: pokemon.name,
          url: pokemon.url,
          stats: pokemonDetails.stats,
          sprites: {
            other: {
              'official-artwork':
                pokemonDetails.sprites.other['official-artwork'],
            },
          },
          types: pokemonDetails.types,
        };
      },
    );

    const pokemonDetails = await Promise.all(pokemonDetailsPromises);

    return pokemonDetails;
  } catch (error) {
    if (error instanceof Error) {
      // eslint-disable-next-line no-console
      console.error('Fetch error:', error.message);
    } else {
      // eslint-disable-next-line no-console
      console.error('Unexpected error:', error);
    }
    return [];
  }
};
