import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router, private activatedRout: ActivatedRoute) {}

  ngOnInit() {
  }

  goToVersion1() {
    console.log('navigacija', this.activatedRout)
    this.router.navigate(['/version1'], {relativeTo: this.activatedRout});
  }
  goToVersion2(){
    this.router.navigate(['/version2'], {relativeTo: this.activatedRout});
  }
}
