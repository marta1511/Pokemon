import {Injectable, OnInit} from '@angular/core';
import {Pokemons} from './pokemons';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokeApiURL = 'https://pokeapi.co/api/v2/pokemon/';
  pokemons: Pokemons [];


  constructor(private http: HttpClient) {
  }

  public getPokemonList(offset: number, limit: number): Observable<Pokemons[]> {
      return this.http.get<any>(this.pokeApiURL + '?offset=' + offset + '&limit=' + limit).pipe(map(resp => resp.results));
  }

  public getPokemonDetails (name: string): Observable<Pokemons> {
    return this.http.get<Pokemons>(this.pokeApiURL + name);
  }
  }


