import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {RouterModule, ROUTES} from '@angular/router';
import {routes} from './app-routing.routs';
import {Version2Component} from './version2/version2.component';
import {Version1Component} from './version1/version1.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import {PokemonService} from './pokemon.service';
import {MatFormFieldModule} from '@angular/material';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatSortModule } from '@angular/material/sort';




@NgModule({
  declarations: [
    AppComponent,
    Version2Component,
    Version1Component,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatTableModule,
    MatFormFieldModule,
    // MatPaginatorModule,
    // MatSortModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
