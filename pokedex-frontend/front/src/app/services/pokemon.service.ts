import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PokemonService {
    private apiUrl = '/api/pokemon';

    constructor(private http: HttpClient) {}

    getPokemons(): Observable<any> {
        return this.http.get(this.apiUrl);
    }
}
