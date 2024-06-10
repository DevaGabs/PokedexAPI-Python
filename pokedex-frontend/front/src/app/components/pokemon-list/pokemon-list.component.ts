import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadPokemons } from '../../actions/pokemon.actions';
import { PokemonService } from '../../services/pokemon.service';

@Component({
    selector: 'app-pokemon-list',
    templateUrl: './pokemon-list.component.html',
})
export class PokemonListComponent implements OnInit {
    pokemons$: Observable<any[]>;

    constructor(private store: Store<{ pokemons: any[] }>, private pokemonService: PokemonService) {
        this.pokemons$ = store.select('pokemons');
    }

    ngOnInit(): void {
        this.pokemonService.getPokemons().subscribe((data) => {
            this.store.dispatch(loadPokemonsSuccess({ pokemons: data }));
        });
    }
}
