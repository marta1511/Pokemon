import { Component } from '@angular/core';
import {Version1Component} from './version1/version1.component';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'PokemonApp';


}
