'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { PokemonDetails } from '@/interfaces/pokeon';

interface PokemonCardProps {
  pokemon: PokemonDetails;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const router = useRouter();

  const handleDetails = () => {
    router.push(`/pokemon/${pokemon.name}`);
  };
  return (
    <button
      className='w-full  flex flex-col items-center  max-w-64 min-w-60 h-auto border-4 border-red-900 m-5 bg-curtsy hover:bg-primary-100'
      onClick={handleDetails}
    >
      <h2 className='text-primary-900'>
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </h2>
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
