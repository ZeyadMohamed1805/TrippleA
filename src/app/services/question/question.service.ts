import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { injectInfiniteQuery } from '@tanstack/angular-query-experimental';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  questions: any[] = [];
  pageSize: number = 2;
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(private readonly apiService: ApiService) {}

  query = injectInfiniteQuery(() => ({
    queryKey: ['questions'],
    queryFn: async ({ pageParam }) =>
      pageParam <= this.totalPages &&
      this.apiService
        .get(
          `/GetQuestionsPaginated?PageNumber=${pageParam}&PageSize=${this.pageSize}`
        )
        .subscribe({
          next: (response: any) => {
            this.questions = [...this.questions, ...response.data.data];
            this.totalPages = response.data.totalPages;
            this.pageSize = response.data.pageSize;
            this.currentPage = response.data.currentPage;
            console.log(this.questions);
          },
          error: (error) => console.log(error),
        }),
    initialPageParam: this.currentPage,
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
