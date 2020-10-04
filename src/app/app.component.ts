import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  color: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', color: 'red' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', color: 'blue' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', color: 'green' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', color: 'red' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', color: 'red' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', color: 'red' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', color: 'red' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', color: 'red' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', color: 'red' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', color: 'red' },
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  originalData = ELEMENT_DATA;

  displayedColumns: string[] = ['position', 'name', 'weight', 'color'];
  dataSource = new MatTableDataSource(ELEMENT_DATA.filter((item, index) => {
    return index < 2
  }))

  constructor() {

  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.paginator.page.subscribe((i) => {
      let startingIndex = i.pageIndex * i.pageSize;
      let data = ELEMENT_DATA.filter((item, index) => {
        return (index >= startingIndex)
      });
      this.dataSource = new MatTableDataSource(data.filter((item, index) => index < 2))
    });
  }

}
