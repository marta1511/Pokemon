import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  name: string;
  type: string;
  height: number;
  weight: number;
  signatureAbility: string;
  doubleDamageToForHTML: string = '';
  doubleDamageFromForHTML: string = '';
  halfDamageToForHTML: string = '';
  halfDamageFromForHTML: string = '';
  noDamageFromForHTML: string = '';
  noDamageToForHTML: string = '';

  constructor(private dialogRef: MatDialogRef<DialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {
    console.log("ovdje", data)

    this.name = data.name;
    this.type = data.type;
    this.height = data.height;
    this.weight = data.weight;
    this.signatureAbility = data.signatureAbility;

    for (let i = 0;  i < data.doubleDamageFrom.length; i++) {
      this.doubleDamageFromForHTML += data.doubleDamageFrom[i] + ', ';
    }

    for (let i = 0; i < data.doubleDamageTo.length; i++) {
      this.doubleDamageToForHTML += data.doubleDamageTo[i] + ', ';
    }

    for (let i = 0; i < data.halfDamageTo.length; i++){
      this.halfDamageToForHTML += data.halfDamageTo[i] + ', ';
    }

    for (let i = 0; i< data.halfDamageFrom.length; i++){
      this.halfDamageFromForHTML += data.halfDamageFrom[i] + ', ';
    }

    for (let i = 0; i< data.noDamageFrom.length; i++){
      this.noDamageFromForHTML += data.noDamageFrom[i] + ', ';
    }

    for (let i = 0; i < data.noDamageTolength; i++){
      this.noDamageToForHTML += data.noDamageTo[i] + ', ';
    }

    this.doubleDamageToForHTML = this.doubleDamageToForHTML.slice(0, -2);
    this.doubleDamageFromForHTML = this.doubleDamageFromForHTML.slice(0, -2);
    this.halfDamageFromForHTML = this.halfDamageFromForHTML.slice(0, -2);
    this.halfDamageToForHTML = this.halfDamageToForHTML.slice(0, -2);
    this.noDamageToForHTML = this.noDamageToForHTML.slice(0, -2);
    this.noDamageFromForHTML = this.noDamageFromForHTML.slice(0, -2);
  }

  close() {
      this.dialogRef.close();
  }
}
