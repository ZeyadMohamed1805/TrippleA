import { Injectable } from '@angular/core';
import { TAnswer } from '../../types/data/answer';
import { ApiService } from '../api/api.service';
import { injectInfiniteQuery } from '@tanstack/angular-query-experimental';
import { TPaginatedResponse } from '../../types/data/response';

@Injectable()
export class AnswerService {
  answers: TAnswer[] = [];
  pageSize: number = 3;
  currentPage: number = 0;
  totalPages: number = 1;
  hasNextPage: boolean = true;
  questionId: number | undefined;

  constructor(private readonly apiService: ApiService) {}

  query = injectInfiniteQuery(() => ({
    queryKey: [`answers-${this.questionId}`],
    queryFn: async ({ pageParam }) =>
      this.questionId &&
      this.hasNextPage &&
      pageParam > this.currentPage &&
      this.apiService
        .get<TPaginatedResponse<TAnswer[]>>(
          `/moreAnswers?questionId=${this.questionId}&PageIndex=${pageParam}&AnswerLimit=${this.pageSize}`
        )
        .subscribe({
          next: (response) => {
            this.answers = [...this.answers, ...response.data.data];
            this.totalPages = response.data.totalPages;
            this.pageSize = response.data.pageSize;
            this.currentPage = response.data.currentPage;
            this.hasNextPage = response.data.hasNextPage;
          },
          error: (error) => {
            if (error.error.statusCode === 404) this.hasNextPage = false;
          },
        }),
    initialPageParam: 1,
    getPreviousPageParam: () => this.currentPage - 1,
    getNextPageParam: () => this.currentPage + 1,
    maxPages: this.totalPages,
  }));

  getAnswers(questionId: number) {
    this.questionId = questionId;
    this.query.data();
  }

  getNextPage() {
    this.query.fetchNextPage();
  }

  postAnswers(answer: FormData) {
    return this.apiService.post('/AddAnswer', answer);
  }
}
