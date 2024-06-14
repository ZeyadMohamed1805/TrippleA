import { Component } from '@angular/core';
import { FiltersComponent } from '../../components/search/filters/filters.component';
import { ResultsComponent } from '../../components/search/results/results.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FiltersComponent, ResultsComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {}
