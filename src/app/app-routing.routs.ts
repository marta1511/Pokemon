
import {Version1Component} from './version1/version1.component';
import {Version2Component} from './version2/version2.component';
import {Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';




export const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'version1', component: Version1Component},
  { path: 'version2', component: Version2Component}

];



export class AppRoutingRouts {}
