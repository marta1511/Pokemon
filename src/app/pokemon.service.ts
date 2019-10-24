import {Injectable, OnInit} from '@angular/core';
import {Pokemons} from './pokemons';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons: Pokemons [];

  constructor(private http: HttpClient) {

  }

  getPokemon() {
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon/')
      .subscribe(resp => {
        console.log(resp);
      }).map
  }
}
