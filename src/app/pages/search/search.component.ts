import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { FiltersComponent } from '../../components/search/filters/filters.component';
import { ResultsComponent } from '../../components/search/results/results.component';
import { SearchService } from '../../services/search/search.service';
import { DOCUMENT } from '@angular/common';
import { SpinnerComponent } from '../../components/loading/spinner/spinner.component';
import { ESearchType } from '../../types/enums/search';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FiltersComponent, ResultsComponent, SpinnerComponent, MatDivider],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit {
  isBottomReached: boolean = false;
  categoryId: number = 1;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollTop = window.scrollY || this.document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = this.document.documentElement.scrollHeight;

    if (
      !this.isBottomReached &&
      scrollTop + windowHeight >= documentHeight - 160
    ) {
      setTimeout(() => {
        this.searchService.getNextPage();
        this.isBottomReached = false;
      }, 1000);

      this.isBottomReached = true;
    }
  }
  constructor(
    public searchService: SearchService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.searchService.getQuestionsByCategory(this.categoryId);
  }

  onSubmit(event: { searchType: ESearchType; value: string | number }) {
    console.log(event);

    if (event.searchType === ESearchType.title) {
      this.searchService.getQuestionByTitle(`${event.value}`);
    } else {
      this.searchService.getQuestionsByCategory(parseInt(`${event.value}`));

      setTimeout(() => {
        this.searchService.getNextPage();
        this.isBottomReached = false;
      }, 1000);

      this.isBottomReached = true;
    }
  }
}
