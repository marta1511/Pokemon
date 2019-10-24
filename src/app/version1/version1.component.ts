
import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatPaginator, MatSort, MatTable} from '@angular/material';

import {Pokemons} from '../pokemons';
import {Observable} from 'rxjs';
import {Pokemon} from '../pokemon';
import {map} from 'rxjs/operators';
import {PokemonService} from '../pokemon.service';

@Component({
  selector: 'app-version1',
  templateUrl: './version1.component.html',
  styleUrls: ['./version1.component.css']
})
export class Version1Component implements OnInit {




  // @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  // @ViewChild(MatSort, {static: false}) sort: MatSort;
  // dataSource: PokemonData;
  //
  //
  // /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  //
  // displayedColumns = ['name', 'type', 'height/weight', 'signature ability', 'base experience'];

  constructor( private service: PokemonService ) {

  }


  ngOnInit() {
    // this.dataSource = new PokemonData (this.paginator, this.sort);
 this.service.getPokemon();

  }






}

