import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MatPaginator, MatSort, MatTable} from '@angular/material';




@Component({
  selector: 'app-version1',
  templateUrl: './version1.component.html',
  styleUrls: ['./version1.component.css']
})
export class Version1Component implements OnInit {

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;


  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {

  }
}

