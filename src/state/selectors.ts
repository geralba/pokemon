import { TeamState } from '@/state/slice/teamSlice';

export interface RootState {
  team: TeamState;
}

export const getTeamPokemons = (state: RootState) => state.team.teamPokemons;
