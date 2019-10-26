
import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatPaginator, MatSort, MatTable} from '@angular/material';

import {Pokemons} from '../pokemons';
import {Observable} from 'rxjs';
import {PokemonService} from '../pokemon.service';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-version1',
  templateUrl: './version1.component.html',
  styleUrls: ['./version1.component.css']
})
export class Version1Component implements OnInit {
  pokemons: Pokemons[] = [];






  constructor(private service: PokemonService) {

  }


  ngOnInit() {
    this.pokemons = [];
    this.service.getPokemonList(0, 10).subscribe(data => {
      this.pokemons = data;
      console.log(this.pokemons);
      this.getPokemonsOneByOne();
      console.log(this.pokemons);

    });
  }

private getPokemonsOneByOne () {
    this.pokemons = []
    this.pokemons.forEach( pokemons => {
      this.service.getPokemonDetails(pokemons.name).subscribe(data => {
        this.pokemons.push(data);
    });
});
}

}
