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

  constructor(private router: Router, private activatedRout: ActivatedRoute) {}
  goToVersion1() {
    console.log('navigacija', this.activatedRout)
    this.router.navigate(['/version1'], {relativeTo: this.activatedRout});
  }
  goToVersion2(){
    this.router.navigate(['/version2'], {relativeTo: this.activatedRout});
  }
}
