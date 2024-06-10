import { createReducer, on } from '@ngrx/store';
import { loadPokemonsSuccess } from '../actions/pokemon.actions';

export const initialState = [];

const _pokemonReducer = createReducer(
    initialState,
    on(loadPokemonsSuccess, (state, { pokemons }) => pokemons)
);

export function pokemonReducer(state: any, action: any) {
    return _pokemonReducer(state, action);
}
