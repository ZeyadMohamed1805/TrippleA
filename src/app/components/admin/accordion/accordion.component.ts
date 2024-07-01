import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge';
import { RouterLink } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatDivider } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { AdminService } from '../../../services/admin/admin.service';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatTableModule,
    MatSelectModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIcon,
    MatButtonModule,
    MatDivider,
    MatTabsModule,
    MatBadgeModule,
    MatExpansionModule,
  ],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
})
export class AccordionComponent {
  @Input() endpoints: string[] = [];
  @Input() displayedColumns: string[] = [];
  @Input() ELEMENT_DATA: any = [];
  @Output() emitter = new EventEmitter<any>();
  panelOpenState = false;
  dataSource = this.ELEMENT_DATA;

  constructor(public adminService: AdminService) {}

  onDelete(event: any, id: string) {
    event.stopPropagation();
    this.adminService.delete(`${this.endpoints[2]}${id}`);
    // this.emitter.emit(id);
  }
  onUpdate() {}
  onPost() {}
}
