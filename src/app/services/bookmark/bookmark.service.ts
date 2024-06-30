import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  constructor(private readonly storageService: StorageService) {}

  get() {
    return this.storageService.getItem('AAA_BOOKMARKS');
  }

  set(bookmark: any) {
    const bookmarks: any = this.get();
    this.storageService.setItem(
      'AAA_BOOKMARKS',
      bookmarks ? [...bookmarks, bookmark] : bookmark
    );
  }

  remove() {
    this.storageService.removeItem('AAA_BOOKMARKS');
  }
}
