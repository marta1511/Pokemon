import {Injectable, OnInit} from '@angular/core';
import {Pokemon} from './pokemons';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokeApiURL = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {
  }

  public getPokemonList(offset: number, limit: number): Observable<any> {
    return this.http.get<any>(this.pokeApiURL + '?offset=' + offset + '&limit=' + limit);
  }

  public getPokemonDetails(pokemon: any): Observable<any> {
    return this.http.get<any>(pokemon.url).pipe(map(data => {
        return Pokemon.fromObject(data);
      }
    ));
  }

}
