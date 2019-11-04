import {Component, OnInit, ViewChild} from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {Pokemon} from '../pokemons';
import {MatPaginator, MatTableDataSource, PageEvent} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import set = Reflect.set;
import {disableDebugTools} from '@angular/platform-browser';



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
  currentPageSize: number = 5;
  range: number[] = [0, 20]
  pokemons: Pokemon[] = [];
  pokemonDetails: Pokemon[] = [];
  dataSource: MatTableDataSource<Pokemon>;
  name = '';
  type = '';

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private service: PokemonService) {

  }


  ngOnInit() {
    this.pokemons = [];
    this.service.getPokemonList(this.currentPage * this.currentPageSize, this.currentPageSize).subscribe(resp => {
      this.pokemons = resp.results;
      this.totalCount = resp.count;
      this.getPokemonsOneByOne();
    });
  }


  private getPokemonsOneByOne() {
    this.pokemons.forEach(pokemon => {
      this.service.getPokemonDetails(pokemon).subscribe(data => {
        this.pokemonDetails.push(data);
        this.dataSource = new MatTableDataSource(this.pokemonDetails);
        this.dataSource.paginator = this.paginator;
        setTimeout(() => this.paginator.length = this.totalCount);
      });
    });
  }
  //  promjena stranice ili broj itema na stranici poziva se funkcija
  //  promjeni broj itema na stranici resetiraj array pokemon details
  public pageEvent(event: PageEvent) {
    if (!this.type) {
      if (event.pageSize !== this.currentPageSize) {
        this.pokemonDetails = [];
        this.currentPageSize = event.pageSize;
      }
      this.service.getPokemonList(event.pageIndex * event.pageSize, event.pageSize).subscribe(resp => {
        this.pokemons = resp.results;
        this.getPokemonsOneByOne();
      });
    }
  }
  public applyFilter(name, type) {
    this.type = type
    if(name) {
      this.service.getPokemonByName(name).subscribe(resp => {
        this.pokemonDetails = [resp];
        this.totalCount = 1;
        this.dataSource = new MatTableDataSource(this.pokemonDetails);
        this.dataSource.paginator = this.paginator;
        setTimeout(() => this.paginator.length = this.totalCount);
      });
    } else {
      if (type) {
        this.service.getPokemonsByType(type).subscribe(resp => {
          this.pokemons = resp;
          this.pokemonDetails = [];
          this.totalCount = resp.length
          this.getPokemonsOneByOne();
        });
      }
      if (!type && !name) {
        this.pokemonDetails = [];
        this.service.getPokemonList(this.currentPage * this.currentPageSize, this.currentPageSize).subscribe(resp => {
          this.pokemons = resp.results;
          this.totalCount = resp.count;
          this.getPokemonsOneByOne();
        });
      }
    }
  }
  // input name malim slovom
  public ConvertToLower(event) {
    this.name = event.toLowerCase();
  }

}
