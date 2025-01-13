'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PokemonDetails } from '@/interfaces/pokeon';

export type TeamState = {
  teamPokemons: PokemonDetails[];
};

const initialState: TeamState = {
  teamPokemons: [],
};

const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    addToTeam: (state, action: PayloadAction<PokemonDetails>) => {
      const pokemon = action.payload;

      const exists = state.teamPokemons.find(
        (teamPokemon) => teamPokemon.id === pokemon.id,
      );

      if (!exists) {
        state.teamPokemons.push(pokemon);
      }
    },
    removeFromTeam: (state, action: PayloadAction<PokemonDetails>) => {
      const pokemon = action.payload;
      state.teamPokemons = state.teamPokemons.filter(
        (teamPokemon) => teamPokemon.id !== pokemon.id,
      );
    },
  },
});

export default teamSlice.reducer;
export const teamActions = teamSlice.actions;
