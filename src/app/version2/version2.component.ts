import {Component, OnInit, ViewChild} from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {Pokemon} from '../pokemons';
import {MatDialog, MatTableDataSource, MatDialogConfig, MatPaginator, PageEvent} from '@angular/material';
import {forkJoin} from 'rxjs';
import {DamageInfo} from '../damageInfo';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-version2',
  templateUrl: './version2.component.html',
  styleUrls: ['./version2.component.css']
})
export class Version2Component implements OnInit {
  displayedColumns: string[] = ['name', 'details'];
  pokemons: Pokemon [] = [];
  pokemonDetails: Pokemon[] = [];
  dataSource: MatTableDataSource<Pokemon>;
  dataForDialog = new DamageInfo();
  pageSizeOptions: number[] = [10, 20, 50, 100];
  totalCount: number = 0;
  currentPage: number = 0;
  currentPageSize: number = 10;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private service: PokemonService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.service.getPokemonList(0, 964).subscribe(resp => {
      this.pokemons = resp.results;
      // console.log(this.pokemons);
      this.dataSource = new MatTableDataSource(this.pokemons);
      this.dataSource.paginator = this.paginator;
    });
  }

  getDetails(name: any) {
    this.service.getPokemonByName(name).subscribe(resp => {
      console.log(resp);
      this.dataForDialog.name = name;
      this.dataForDialog.type = resp.type;
      this.dataForDialog.height = resp.height;
      this.dataForDialog.weight = resp.weight;
      this.dataForDialog.signatureAbility = resp.signatureAbility;
      forkJoin(this.service.getDamageInfo(resp.type)).subscribe(res => {
        res.forEach(item => {
          console.log('item', item);
          // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < item.doubleDamageFrom.length; i++) {
            if (i === 0) {
              this.dataForDialog.doubleDamageFrom.push(item.doubleDamageFrom[i].name);
            } else {
              let addToList = true;
              for (let j = 0; j < this.dataForDialog.doubleDamageFrom.length; j++) {
                if (item.doubleDamageFrom[i].name === this.dataForDialog.doubleDamageFrom[j]) {
                  addToList = false;
                }
              }
              if (addToList) {
                this.dataForDialog.doubleDamageFrom.push(item.doubleDamageFrom[i].name);
              }
            }
          }
          for (let i = 0; i < item.doubleDamageTo.length; i++) {
            if (i === 0) {
              this.dataForDialog.doubleDamageTo.push(item.doubleDamageTo[i].name);
            } else {
              let addToList = true;
              for (let j = 0; j < this.dataForDialog.doubleDamageTo.length; j++) {
                if (item.doubleDamageTo[i].name === this.dataForDialog.doubleDamageTo[j]) {
                  addToList = false;
                }
              }
              if (addToList) {
                this.dataForDialog.doubleDamageTo.push(item.doubleDamageTo[i].name);
              }
            }
          }
          for (let i = 0; i < item.halfDamageFrom.length; i++) {
            if (i === 0) {
              this.dataForDialog.halfDamageFrom.push(item.halfDamageFrom[i].name);
            } else {
              let addToList = true;
              for (let j = 0; j < this.dataForDialog.halfDamageFrom.length; j++) {
                if (item.halfDamageFrom[i].name === this.dataForDialog.halfDamageFrom[j]) {
                  addToList = false;
                }
              }
              if (addToList) {
                this.dataForDialog.halfDamageFrom.push(item.halfDamageFrom[i].name);
              }
            }
          }
           for (let i = 0; i < item.halfDamageTo.length; i++) {
            if (i === 0) {
              this.dataForDialog.halfDamageTo.push(item.halfDamageTo[i].name);
            } else {
              let addToList = true;
              for (let j = 0; j < this.dataForDialog.halfDamageTo.length; j++) {
                if (item.halfDamageTo[i].name === this.dataForDialog.halfDamageTo[j]) {
                  addToList = false;
                }
              }
              if (addToList) {
                this.dataForDialog.halfDamageTo.push(item.halfDamageTo[i].name);
              }
            }
          }
          for (let i = 0; i < item.noDamageFrom.length; i++) {
            if (i === 0) {
              this.dataForDialog.noDamageFrom.push(item.noDamageFrom[i].name);
            } else {
              let addToList = true;
              for (let j = 0; j < this.dataForDialog.noDamageFrom.length; j++) {
                if (item.noDamageFrom[i].name === this.dataForDialog.noDamageFrom[j]) {
                  addToList = false;
                }
              }
              if (addToList) {
                this.dataForDialog.noDamageFrom.push(item.noDamageFrom[i].name);
              }
            }
          }
          for (let i = 0; i < item.noDamageTo.length; i++) {
            if (i === 0) {
              this.dataForDialog.noDamageFrom.push(item.noDamageTo[i].name);
            } else {
              let addToList = true;
              for (let j = 0; j < this.dataForDialog.noDamageTo.length; j++) {
                if (item.noDamageTo[i].name === this.dataForDialog.noDamageTo[j]) {
                  addToList = false;
                }
              }
              if (addToList) {
                this.dataForDialog.noDamageTo.push(item.noDamageTo[i].name);
              }
            }
          }
          this.openDialog();
      });
        console.table(this);
    });
  });}
  openDialog() {
    console.log(this.dataForDialog);
    this.dialog.open(DialogComponent, {
      disableClose: true,
      // autoFocus: true,
      data: this.dataForDialog
    });
  }

  public onChange(filterValue: string) {
    if (filterValue == null) {

      this.service.getPokemonList(0, 964).subscribe(resp => {
        this.pokemons = resp.results;

        this.dataSource = new MatTableDataSource(this.pokemons);
        console.log('ovo mi treba', this.dataSource);
      });
    } else {
      // this.pokemons = [];
      // this.service.getPokemonList(0, 964).subscribe(resp => {
      //   const pokename = resp.results;
      //   for (let i = 0; i < pokename.length; i++){
      //
      //   }
      // }

      this.dataSource.filter = filterValue.trim().toLowerCase();

    }
}
  public pageEvent(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.currentPageSize = event.pageSize;
    this.service.getPokemonList(0, 964);
  }
}

