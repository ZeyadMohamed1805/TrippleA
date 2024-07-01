import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

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
export class TableComponent implements AfterViewInit {
  @Input() displayedColumns: string[] = [];
  @Input() ELEMENT_DATA: any = [];
  dataSource = this.ELEMENT_DATA && new MatTableDataSource(this.ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort) sort: MatSort | undefined;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort!;
  }

  ngOnChanges(changes: any): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.dataSource =
      this.ELEMENT_DATA && new MatTableDataSource(this.ELEMENT_DATA);
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
