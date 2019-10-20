import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';



@Component({
  selector: 'app-version1',
  templateUrl: './version1.component.html',
  styleUrls: ['./version1.component.css']
})
export class Version1Component implements OnInit {

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
  }

  getPokemon () {
    this.http.get('https://pokeapi.co/api/v2/').subscribe()
  }
}
