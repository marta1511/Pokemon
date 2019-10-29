import {Injectable, OnInit} from '@angular/core';
import {Pokemon} from './pokemons';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {PokemonName} from './home-page/pokemonName';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokeApiURL = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {
  }

  public getPokemonList(offset: number, limit: number): Observable<Pokemon[]> {
      return this.http.get<any>(this.pokeApiURL + '?offset=' + offset + '&limit=' + limit).pipe(map(resp => resp.results));
  }

  public getPokemonDetails(pokemon: any): Observable<any>  {
    return this.http.get<any>(pokemon.url).pipe(map(data => {return Pokemon.fromObject(data)}
    ));
  }
  }


