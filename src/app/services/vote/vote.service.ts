import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TResponse } from '../../types/data/response';

@Injectable()
export class VoteService {
  votes: number = 0;

  constructor(
    private readonly apiService: ApiService,
    private snackBar: MatSnackBar
  ) {}

  upVote(answerId: number): void {
    this.apiService
      .post<number, TResponse<string>>(
        `/api/Answer/upvote/${answerId}`,
        answerId
      )
      .subscribe({
        next: () => {
          this.votes++;
          this.snackBar.open('Answer Upvoted!', 'Awesome!');
        },
        error: (error) => {
          console.log(error);
          this.snackBar.open('Please try again', 'Ok!', {
            panelClass: ['error-snackbar'],
          });
        },
      });
  }

  downVote(answerId: number): void {
    this.apiService
      .post<number, TResponse<string>>(
        `/api/Answer/downvote/${answerId}`,
        answerId
      )
      .subscribe({
        next: () => {
          this.votes++;
          this.snackBar.open('Answer Upvoted!', 'Awesome!');
        },
        error: (error) => {
          console.log(error);
          this.snackBar.open('Please try again', 'Ok!', {
            panelClass: ['error-snackbar'],
          });
        },
      });
  }
}
