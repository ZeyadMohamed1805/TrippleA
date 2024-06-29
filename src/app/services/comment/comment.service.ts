import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { TComment } from '../../types/data/comment';
import { injectInfiniteQuery } from '@tanstack/angular-query-experimental';
import { TPaginatedResponse } from '../../types/data/response';

@Injectable()
export class CommentService {
  comments: TComment[] = [];
  pageSize: number = 3;
  currentPage: number = 0;
  totalPages: number = 1;
  hasNextPage: boolean = true;
  answerId: number | undefined;

  constructor(private readonly apiService: ApiService) {}

  query = injectInfiniteQuery(() => ({
    queryKey: [`comment-${this.answerId}`],
    queryFn: async ({ pageParam }) =>
      this.answerId &&
      this.hasNextPage &&
      pageParam > this.currentPage &&
      this.apiService
        .get<TPaginatedResponse<TComment[]>>(
          `/moreComments?answerId=${this.answerId}&PageIndex=${pageParam}&CommentLimit=${this.pageSize}`
        )
        .subscribe({
          next: (response) => {
            this.comments = [...this.comments, ...response.data.data];
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

  getComments(answerId: number) {
    this.answerId = answerId;
    this.query.data();
  }

  getNextPage() {
    this.query.fetchNextPage();
  }

  postComment(comment: { content: string; answerId: number }) {
    return this.apiService.post('/AddComment', comment);
  }
}
