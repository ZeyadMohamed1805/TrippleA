import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDivider } from '@angular/material/divider';
import {
  FormBuilder,
  ReactiveFormsModule,
  FormGroup,
  FormsModule,
} from '@angular/forms';
import { ApiService } from '../../../services/api/api.service';
import { TCategory } from '../../../types/data/category';
import { TResponse } from '../../../types/data/response';
import { ESearchType } from '../../../types/enums/search';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDivider,
  ],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
})
export class FiltersComponent implements OnInit {
  filtersForm: FormGroup;
  categories: TCategory[] = [];
  @Output() request = new EventEmitter();

  constructor(
    private readonly apiService: ApiService,
    private readonly formBuilder: FormBuilder
  ) {
    this.filtersForm = this.formBuilder.group({
      title: [''],
      categoryId: [''],
    });
  }

  ngOnInit(): void {
    this.apiService.get<TResponse<TCategory[]>>('/api/Category').subscribe({
      next: (response) => {
        console.log(response);
        this.categories = response.data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  onSubmit(searchType: ESearchType | null): void {
    searchType === ESearchType.title
      ? this.filtersForm.value['title'] &&
        this.request.emit({
          searchType: searchType,
          value: this.filtersForm.value['title'],
        })
      : this.filtersForm.value['categoryId'] &&
        this.request.emit({
          searchType: searchType,
          value: this.filtersForm.value['categoryId'],
        });
  }
}
