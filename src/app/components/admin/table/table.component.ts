import { LiveAnnouncer } from '@angular/cdk/a11y';
import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  ViewChild,
  EventEmitter,
  Output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import e from 'express';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements AfterViewInit, OnChanges {
  @Input() displayedColumns: string[] = [];
  @Input() ELEMENT_DATA: any = [];
  @Output() emitter = new EventEmitter<any>();
  dataSource = this.ELEMENT_DATA && new MatTableDataSource(this.ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort) sort: MatSort | undefined;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort!;
  }

  ngOnChanges(): void {
    this.dataSource =
      this.ELEMENT_DATA && new MatTableDataSource(this.ELEMENT_DATA);
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  onDelete(element: any) {
    console.log(element[this.displayedColumns[0]]);
  }
}
