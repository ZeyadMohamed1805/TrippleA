import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { injectInfiniteQuery } from '@tanstack/angular-query-experimental';
import { TQuestion } from '../../types/data/question';
import { TPaginatedResponse } from '../../types/data/response';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  questions: TQuestion[] = [];
  pageSize: number = 3;
  currentPage: number = 0;
  totalPages: number = 1;
  hasNextPage: boolean = true;

  constructor(private readonly apiService: ApiService) {}

  query = injectInfiniteQuery(() => ({
    queryKey: ['questions'],
    queryFn: async ({ pageParam }) =>
      this.hasNextPage &&
      pageParam > this.currentPage &&
      this.apiService
        .get<TPaginatedResponse<TQuestion[]>>(
          `/GetQuestionsPaginated?PageNumber=${pageParam}&PageSize=${this.pageSize}`
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

  getQuestions() {
    this.query.data();
  }

  getNextPage() {
    this.query.fetchNextPage();
  }
}
