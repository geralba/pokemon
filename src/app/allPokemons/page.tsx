import React from 'react';

import { PokemonList } from '@/components/PokemonList';

export default function AllPokemonsPage() {
  return <PokemonList startIndex={0} endIndex={20} showBackLink={true} />;
}
