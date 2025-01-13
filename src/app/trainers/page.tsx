'use client';
import { useSelector } from 'react-redux';

import ArrowLink from '@/components/links/ArrowLink';
import { PokemonCard } from '@/components/PokemonCard';

import { getTeamPokemons } from '@/state/selectors';

const TrainersPage: React.FC = () => {
  const teamPokemons = useSelector(getTeamPokemons);

  return (
    <div>
      <div className='flex flex-col justify-center items-center py-5 bg-coral'>
        <h3
          className='text-center text-shadow-hometext text-red-800 py-4 px-1 font-bold text-responsive-title'
          style={{
            textShadow:
              '0 0 30px floralwhite, 0 0 30px linen, 0 0 35px moccasin, 0 0 40px peachpuff',
          }}
        >
          Your team
        </h3>
      </div>
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
      <div className='flex justify-center gap-4'>
        {teamPokemons.length < 1 ? (
          <p className='mt-5'>No pokemon in the team yet</p>
        ) : (
          teamPokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        )}
      </div>
    </div>
  );
};
export default TrainersPage;
