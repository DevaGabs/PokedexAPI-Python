import { createAction, props } from '@ngrx/store';

export const loadPokemons = createAction('[Pokemon List] Load Pokemons');
export const loadPokemonsSuccess = createAction('[Pokemon List] Load Pokemons Success', props<{ pokemons: any[] }>());
