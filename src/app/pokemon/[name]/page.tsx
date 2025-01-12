import { getPokemon } from '@/api/pokemonApi';
import PokemonDetails from '@/app/pokemon/[name]/PokemonDetails';

export default async function PokemonDetailsPage({
  params,
}: {
  params: { name: string };
}) {
  const { name } = params;

  if (!name) {
    return <div>No Pokémon name provided</div>;
  }

  const pokemon = await getPokemon(name);

  return (
    <PokemonDetails
      name={pokemon.name}
      image={pokemon.sprites.other['official-artwork'].front_default}
      stats={pokemon.stats}
    />
  );
}
