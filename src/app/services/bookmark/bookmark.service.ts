import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TPaginatedQuestion } from '../../types/data/question';
import { QuestionService } from '../question/question.service';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  bookmarks: TPaginatedQuestion[] = [];

  constructor(
    private readonly storageService: StorageService,
    private readonly questionService: QuestionService,
    private readonly snackBar: MatSnackBar
  ) {}

  get() {
    this.bookmarks = [];
    const bookmarks: number[] = this.storageService.getItem('AAA_BOOKMARKS');
    bookmarks.forEach((id: number) => {
      this.questionService.getQuestion(id).subscribe({
        next: (response) => this.bookmarks.push(response.data),
        error: (error) => console.log(error),
      });
    });
  }

  set(bookmark: number) {
    const bookmarks: number[] = this.storageService.getItem('AAA_BOOKMARKS');
    this.storageService.setItem(
      'AAA_BOOKMARKS',
      bookmarks
        ? !bookmarks.includes(bookmark)
          ? [...bookmarks, bookmark]
          : bookmarks
        : [bookmark]
    );
    this.snackBar.open('Question Added To Bookmark!', 'Awesome!');
  }

  splice(id: number) {
    this.bookmarks = this.bookmarks.filter((bookmark) => bookmark.id !== id);
    this.storageService.setItem(
      'AAA_BOOKMARKS',
      this.bookmarks.map((bookmark) => bookmark.id)
    );
    this.get();
  }

  remove() {
    this.storageService.removeItem('AAA_BOOKMARKS');
  }
}
