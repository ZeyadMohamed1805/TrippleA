import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { TQuestion } from '../../types/data/question';
import { TPaginatedResponse } from '../../types/data/response';
import { injectInfiniteQuery } from '@tanstack/angular-query-experimental';
import { ESearchType } from '../../types/enums/search';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  questions: TQuestion[] = [];
  pageSize: number = 3;
  currentPage: number = 0;
  totalPages: number = 1;
  hasNextPage: boolean = true;
  categoryId: number = 1;

  constructor(private readonly apiService: ApiService) {}

  query = injectInfiniteQuery(() => ({
    queryKey: ['search'],
    queryFn: async ({ pageParam }) =>
      this.hasNextPage &&
      pageParam > this.currentPage &&
      this.apiService
        .get<TPaginatedResponse<TQuestion[]>>(
          `/GetQuestionsByCategoryIdPagenated?CategoryId=${this.categoryId}&PageNumber=${pageParam}&PageSize=${this.pageSize}`
        )
        .subscribe({
          next: (response) => {
            this.questions = [...this.questions, ...response.data.data];
            this.totalPages = response.data.totalPages;
            this.pageSize = response.data.pageSize;
            this.currentPage = response.data.currentPage;
            this.hasNextPage = response.data.hasNextPage;
          },
          error: (error) => console.log(error),
        }),
    initialPageParam: 1,
    getPreviousPageParam: () => this.currentPage - 1,
    getNextPageParam: () => this.currentPage + 1,
    maxPages: this.totalPages,
  }));

  getQuestionsByCategory(categoryId: number) {
    this.categoryId = categoryId;
    this.questions = [];
    this.pageSize = 3;
    this.currentPage = 0;
    this.totalPages = 1;
    this.hasNextPage = true;
    this.query.data();
  }

  getQuestionByTitle(title: string) {
    this.apiService
      .get<TPaginatedResponse<TQuestion[]>>(
        `/GetQuestionByTitlePagenated?QuestionTitle=${title}`
      )
      .subscribe({
        next: (response) => {
          this.questions = response.data.data;
          this.hasNextPage = false;
        },
        error: (error) => console.log(error),
      });
  }

  getNextPage() {
    this.query.fetchNextPage();
  }
}
