'use client';
import { Minus, Plus } from 'lucide-react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import IconButton from '@/components/buttons/IconButton';

import { PokemonDetails } from '@/interfaces/pokeon';
import { actions } from '@/state/actions';
import { getTeamPokemons } from '@/state/selectors';

interface PokemonCardProps {
  pokemon: PokemonDetails;
}
export const TogglePokemonButton: React.FC<PokemonCardProps> = ({
  pokemon,
}) => {
  const [isInTeam, setIsInTeam] = useState(false);

  const dispatch = useDispatch();

  const teamPokemons = useSelector(getTeamPokemons);

  useEffect(() => {
    setIsInTeam(
      teamPokemons.some((teamPokemon) => teamPokemon.id === pokemon.id),
    );
  }, [teamPokemons, pokemon.id]);

  const handleButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (isInTeam) {
      dispatch(actions.teamPokemon.removeFromTeam(pokemon));
    } else {
      dispatch(actions.teamPokemon.addToTeam(pokemon));
    }

    setIsInTeam(!isInTeam);
  };

  return (
    <div className='w-full flex justify-end  pr-2'>
      <span className='text-3xl mt-2 ' onClick={handleButtonClick}>
        {isInTeam ? <IconButton icon={Minus} /> : <IconButton icon={Plus} />}
      </span>
    </div>
  );
};
