import { Component, OnInit } from '@angular/core';
import { BookmarkService } from '../../../services/bookmark/bookmark.service';
import { DetailsComponent } from '../../question/details/details.component';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-bookmarks',
  standalone: true,
  imports: [DetailsComponent, MatIconModule],
  templateUrl: './bookmarks.component.html',
  styleUrl: './bookmarks.component.scss',
})
export class BookmarksComponent implements OnInit {
  actions: string[] = ['Details', 'Remove', 'Share'];
  icons: string[] = ['assignment', 'delete', 'share'];

  constructor(
    public bookmarkService: BookmarkService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.bookmarkService.get();
  }

  onDetailsClick(id: number): void {
    this.router.navigateByUrl(`question/${id}`);
  }

  onRemoveClick(id: number) {
    this.bookmarkService.splice(id);
  }

  onShareClick() {}
}
