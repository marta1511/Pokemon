import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
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
import {MatFormFieldModule, MatGridListModule} from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material';
import {DialogComponent} from './dialog/dialog.component';
import {MatIconModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    Version2Component,
    Version1Component,
    HomePageComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [DialogComponent]
})
export class AppModule { }
