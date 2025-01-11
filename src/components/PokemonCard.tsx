import Image from 'next/image';

import { PokemonDetails } from '@/interfaces/pokeon';

interface PokemonCardProps {
  pokemon: PokemonDetails;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <button
      className='w-full  flex flex-col items-center  max-w-64 min-w-60 h-auto border-2 border-black m-5 bg-gray-200'
      onClick={() => {
        // eslint-disable-next-line no-console
        console.log('It is clicked');
      }}
    >
      <h2>{pokemon.name}</h2>
      <Image
        src={pokemon.sprites.other['official-artwork'].front_default}
        alt={pokemon.name}
        width={200}
        height={200}
      />
      <p>{pokemon.types.map((type) => type.type.name).join(' ')}</p>
    </button>
  );
};
