import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  constructor(
    private readonly storageService: StorageService,
    private readonly snackBar: MatSnackBar
  ) {}

  get() {
    return this.storageService.getItem('AAA_BOOKMARKS');
  }

  set(bookmark: number) {
    const bookmarks: any = this.get();
    this.storageService.setItem(
      'AAA_BOOKMARKS',
      bookmarks ? [...bookmarks, bookmark] : [bookmark]
    );
    this.snackBar.open('Question Added To Bookmark!', 'Awesome!');
  }

  remove() {
    this.storageService.removeItem('AAA_BOOKMARKS');
  }
}
