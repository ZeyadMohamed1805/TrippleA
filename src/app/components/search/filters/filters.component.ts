import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDivider } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { CategoriesComponent } from '../categories/categories.component';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [
    CategoriesComponent,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDivider,
  ],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
})
export class FiltersComponent {}
