import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {Pokemon} from '../pokemons';

@Component({
  selector: 'app-version2',
  templateUrl: './version2.component.html',
  styleUrls: ['./version2.component.css']
})
export class Version2Component implements OnInit {
  displayedColumns: string[] = ['name', 'details'];
  pokemons: Pokemon [] = [];
  pokemonDetails: Pokemon[] = [];
  type = '';

  constructor(private service: PokemonService) {
  }


  ngOnInit() {
    this.service.getPokemonList(0, 964).subscribe(resp => {
      this.pokemons = resp.results;
      console.log(this.pokemons);
      this.getPokemonsOneByOne();
    });
  }
  private getPokemonsOneByOne() {
    this.pokemons.forEach(pokemon => {
      this.service.getPokemonDetails(pokemon).subscribe(data => {
        this.pokemonDetails = data;
        console.log(this.pokemonDetails);
        // this.type =
      });
    });
  }
}
