import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {Pokemon} from '../pokemons';
import {MatDialog, MatTableDataSource, MatDialogConfig} from '@angular/material';
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
  name = '';
  type = '';
  weight = null;
  height = null;
  signatureAbility = null;
  doubleDamageFrom = [];
  doubleDamageTo = [];
  halfDamageTo = [];
  halfDamageFrom = [];
  noDamageTo = [];
  noDamageFrom = [];




  constructor(private service: PokemonService,
              private dialog: MatDialog) {
  }


  ngOnInit() {
    this.service.getPokemonList(0, 964).subscribe(resp => {
      this.pokemons = resp.results;
      // console.log(this.pokemons);
      this.dataSource = new MatTableDataSource(this.pokemons);
    });
  }

  getDetails(name: any) {
    console.log('name:', name);
    this.service.getPokemonByName(name).subscribe((resp: Pokemon) => {
      console.log(resp);
      this.name = resp.name;
      this.type = resp.type;
      this.weight = resp.weight;
      this.height = resp.height;
      this.signatureAbility = resp.signatureAbility;
      forkJoin(this.service.getDamageInfo(resp.type)).subscribe(res => {
        res.forEach(item => {
          this.doubleDamageFrom = [...this.doubleDamageFrom, ...item.doubleDamageFrom];
          this.doubleDamageTo = [...this.doubleDamageTo, ...item.doubleDamageTo];
          this.halfDamageFrom = [...this.halfDamageFrom, ...item.halfDamageFrom];
          this.halfDamageTo = [...this.halfDamageTo, ...item.halfDamageTo];
          this.noDamageTo = [...this.noDamageTo, ...item.noDamageTo];
          this.noDamageFrom = [...this.noDamageFrom, ...item.noDamageFrom];
        });
        this.openDialog();
      });
      console.log(this);
    });
}
  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      name: this.name,
      type: this.type,
      height: this.height,
      weight: this.weight,
      signatureAbility: this.signatureAbility,
      doubleDamageFrom: this.doubleDamageFrom,
      doubleDamageTo: this.doubleDamageTo,
      halfDamageFrom: this.halfDamageFrom,
      halfDamageTo: this.halfDamageTo,
      noDamageFrom: this.noDamageFrom,
      noDamageTo: this.noDamageTo
    };
    this.dialog.open(DialogComponent, dialogConfig);
  }
}
