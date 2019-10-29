import {Component, OnInit, ViewChild} from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {Pokemon} from '../pokemons';
import {MatPaginator, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-version1',
  templateUrl: './version1.component.html',
  styleUrls: ['./version1.component.css']
})
export class Version1Component implements OnInit {
  displayedColumns: string[] = ['name', 'type', 'height/weight', 'signature ability', 'base experience'];
  pageSizeOptions: number[] = [10, 20, 30, 50];
  pokemons: Pokemon[] = [];
  pokemonDetails: Pokemon[] = [];
  DataSource = [];
  name = '';
  type = '';
    // new MatTableDataSource (this.pokemonDetails);
  constructor(private service: PokemonService) {

  }


  ngOnInit() {
    this.pokemons = [];
    this.service.getPokemonList(0, 20).subscribe(data => {
      this.pokemons = data;
      console.log(this.pokemons);
      this.getPokemonsOneByOne();
      this.printOutTable();
      console.log('ovo', this.DataSource);
    });
  }



private getPokemonsOneByOne() {
  this.pokemons.forEach( pokemon => {
    this.service.getPokemonDetails(pokemon).subscribe(data => {
      this.pokemonDetails.push(data);
      this.DataSource = [...this.pokemonDetails];
    });
  });
  // console.log(this.pokemonDetails);
}

private printOutTable () {
    this.DataSource = this.pokemonDetails;
    console.log(this.DataSource);
}
}
