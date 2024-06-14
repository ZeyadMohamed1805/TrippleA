import { Component } from '@angular/core';
import { FiltersComponent } from '../../components/search/filters/filters.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FiltersComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {}
