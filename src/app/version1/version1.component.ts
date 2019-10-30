import {Component, OnInit, ViewChild} from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {Pokemon} from '../pokemons';
import {MatPaginator, MatTableDataSource, PageEvent} from '@angular/material';




@Component({
  selector: 'app-version1',
  templateUrl: './version1.component.html',
  styleUrls: ['./version1.component.css']
})
export class Version1Component implements OnInit {
  displayedColumns: string[] = ['name', 'type', 'height/weight', 'signature ability', 'base experience'];
  pageSizeOptions: number[] = [5, 10, 20, 50, 100];
  totalCount: number = 0;
  currentPage: number = 0;
  currenPageSize: number = 10;
  pokemons: Pokemon[] = [];
  pokemonDetails: Pokemon[] = [];
  dataSource: MatTableDataSource<Pokemon>;
  // pageEvent: PageEvent;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private service: PokemonService) {

  }


  ngOnInit() {
    this.pokemons = [];


    this.service.getPokemonList(this.currentPage * this.currenPageSize, this.currenPageSize).subscribe(resp => {
      this.pokemons = resp.results;
      this.totalCount = resp.count;
      console.log(this.pokemons);
      console.log(this.totalCount);
      this.getPokemonsOneByOne();
      // this.dataSource.paginator = this.paginator;
    });
  }


  private getPokemonsOneByOne() {
    this.pokemons.forEach(pokemon => {
      this.service.getPokemonDetails(pokemon).subscribe(data => {
        this.pokemonDetails.push(data);
        // this.dataSource = [...this.pokemonDetails];
        this.dataSource = new MatTableDataSource(this.pokemonDetails);
      });
    });
    console.log(this.pokemonDetails);
  }

  public pageEvent(event: PageEvent)
  {
    this.currentPage = event.pageIndex;
    this.currenPageSize = event.pageSize;
  }
}
