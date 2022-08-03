import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class PokemonListService {

    constructor(private http: HttpClient) { }

    getPokemon() {
        return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
    }

    getPokemonDtls(name: string) {
        return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    }

}