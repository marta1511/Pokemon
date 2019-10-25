
import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatPaginator, MatSort, MatTable} from '@angular/material';

import {Pokemons} from '../pokemons';
import {Observable} from 'rxjs';

import {map} from 'rxjs/operators';
import {PokemonService} from '../pokemon.service';
import {PokemonName} from '../pokemonName';

@Component({
  selector: 'app-version1',
  templateUrl: './version1.component.html',
  styleUrls: ['./version1.component.css']
})
export class Version1Component implements OnInit {
  pokemons: Pokemons[] = [];
  pokemonName: PokemonName [] = [];
  pokemonOffset: number = 0;
  pokemonLimit: number = 20;




  constructor(private service: PokemonService) {

  }


  ngOnInit() {
    // this.dataSource = new PokemonData (this.paginator, this.sort);
    this.service.getPokemonList(this.pokemonOffset, this.pokemonLimit).subscribe(data => {
       this.pokemons = data;
        this.getPokemonsOneByOne();
        console.log(this.pokemonName);
    });

  }

  private getPokemonsOneByOne() {

    this.pokemons.forEach( pokemonName => {

      this.service.getPokemonDetails(pokemonName.name).subscribe(data => {
        this.pokemonName.push(data);
      });

    });
     console.log(this.pokemonName);
  }

}
