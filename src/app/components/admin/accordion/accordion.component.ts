import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge';
import { RouterLink } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReplaySubject, merge, takeUntil } from 'rxjs';
import { MatIcon } from '@angular/material/icon';
import { MatDivider } from '@angular/material/divider';
import { ApiService } from '../../../services/api/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

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
  @Input() displayedColumns: string[] = [];
  @Input() ELEMENT_DATA: any = [];
  panelOpenState = false;
  dataSource = this.ELEMENT_DATA;
}
