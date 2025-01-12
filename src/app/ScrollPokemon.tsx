import { PokemonCard } from '@/components/PokemonCard';

import { PokemonDetails } from '@/interfaces/pokeon';

interface Pokemon {
  pokemons: PokemonDetails[];
}

export const ScrollPokemon: React.FC<Pokemon> = ({ pokemons }) => {
  return (
    <div className='flex flex-row flex-wrap py-5 overflow-x-scroll '>
      <div className='w-full flex gap-4'>
        {pokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </div>
  );
};
