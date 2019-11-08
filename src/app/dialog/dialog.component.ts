import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {PokemonService} from '../pokemon.service';
import {MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  name: string;
  type: string;
  height: number;
  weight: number;
  signatureAbility: string;
  doubleDamageTo: string;
  doubleDamageFrom: string;
  halfDamageTo: string;
  halfDamageFrom: string;
  noDamageFrom: string;
  noDamageTo: string;

  constructor(private dialogRef: MatDialogRef<DialogComponent>,
              @Inject(MAT_DIALOG_DATA) data) {
    console.log("ovdje", data)
    this.name = data.name;
    this.type = data.type;
    this.height = data.height;
    this.weight = data.weight;
    this.signatureAbility = data.signatureAbility;
    this.doubleDamageFrom = data.doubleDamageFrom;
    this.doubleDamageTo = data.doubleDamageTo;
    this.halfDamageFrom = data.halfDamageFrom;
    this.halfDamageTo = data.halfDamageTo;
    this.noDamageFrom = data.noDamageFrom;
    this.noDamageTo = data.noDamageTo;
  }

  ngOnInit() {
  }
close(){
    this.dialogRef.close();
}
}
